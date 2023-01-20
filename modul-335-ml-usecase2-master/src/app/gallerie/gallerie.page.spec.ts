import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriePage } from './gallerie.page';

describe('GalleriePage', () => {
    let component: GalleriePage;
    let fixture: ComponentFixture<GalleriePage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GalleriePage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GalleriePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
