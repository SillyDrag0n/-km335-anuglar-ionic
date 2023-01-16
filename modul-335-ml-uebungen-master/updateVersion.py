#!/usr/bin/env python
#
# Small helper tool for ionic/cordova projects to bump the version/build
#
# Author: Tom Enz, tom.enz@lukb.ch
#
#
import os, sys, getopt, json, fileinput, re

from xml.etree import ElementTree

def updateConfig(configFile, version, build):         
    ElementTree.register_namespace('', 'http://www.w3.org/ns/widgets')
    tree = ElementTree.parse(configFile)
    root = tree.getroot()

    root.attrib['android-versionCode'] = build
    root.attrib['ios-CFBundleVersion'] = build
    root.attrib['version'] = version

    tree.write(configFile)

    print ("Updated version to '%s' and android-versionCode and ios-CFBundleVersion to '%s' in file '%s'!" % (version, build, configFile))

def updatePackage(inputFile, version):
    with open(inputFile, 'r+') as f:
        data = json.load(f)
        data["version"] = version
        f.seek(0) 
        json.dump(data, f, indent=4)
        f.truncate()
    
    print ("Updated version to '%s' in file '%s'!" % (version, inputFile))

def updateEnvironment(environmentFile, version):
    for line in fileinput.input(environmentFile, inplace=1):
        line = re.sub(r".*version:\s*\'([0-9\.]*)\'", r"   version: '"+version+"'", line.rstrip())
        print(line)
    
    print ("Updated version to '%s' in file '%s'!" % (version, environmentFile))

def main(argv):
    inputVersion = ''
    inputBuild = ''
    if len(sys.argv) <= 1:
        print 'updateVersion.py -v <version> -b <build>'
        sys.exit(2)
    try:
        opts, args = getopt.getopt(argv,"hv:b:",["version=","build="])
    except getopt.GetoptError:
        print 'updateVersion.py -v <version> -b <build>'
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print 'updateVersion.py -v <version> -b <build>'
            sys.exit()
        elif opt in ("-v", "--version"):
            inputVersion = arg
        elif opt in ("-b", "--build"):
            inputBuild = arg
    # Main        
    updateConfig('config.xml', inputVersion, inputBuild)
    updatePackage('package.json', inputVersion)
    updateEnvironment('src/environments/environment.ts', inputVersion)
    updateEnvironment('src/environments/environment.prod.ts', inputVersion)


if __name__ == "__main__":
    main(sys.argv[1:])