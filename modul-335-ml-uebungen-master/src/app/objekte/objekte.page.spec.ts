import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjektePage } from './objekte.page';

describe('ObjektePage', () => {
    let component: ObjektePage;
    let fixture: ComponentFixture<ObjektePage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ObjektePage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ObjektePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
