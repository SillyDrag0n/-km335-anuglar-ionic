import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';

// HammerJS Gestures
import {
    HammerModule,
    HammerGestureConfig,
    HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
export class HammerConfig extends HammerGestureConfig {
    override overrides = {
        swipe: { direction: Hammer.DIRECTION_ALL },
    };
}

// Einstellungen importieren
import { environment } from '../environments/environment';

// Firebase Compatability Mode importieren
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

// Firebase Modular SDK
// import { provideFirebaseApp } from '@angular/fire/app';
// import { initializeApp } from 'firebase/app';
// import { provideFirestore } from '@angular/fire/firestore';
// import { getFirestore } from 'firebase/firestore';
// import { provideAuth } from '@angular/fire/auth';
// import { getAuth } from 'firebase/auth';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        IonicStorageModule.forRoot(),
        HammerModule,
        // Firebase Compatability Mode
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        AngularFireAuthModule,
        // Firebase Modular SDK
        // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        // provideFirestore(() => getFirestore()),
        // provideAuth(() => getAuth()),
    ],
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
