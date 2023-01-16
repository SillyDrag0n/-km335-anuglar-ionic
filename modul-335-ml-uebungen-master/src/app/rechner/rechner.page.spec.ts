import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechnerPage } from './rechner.page';

describe('RechnerPage', () => {
    let component: RechnerPage;
    let fixture: ComponentFixture<RechnerPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RechnerPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RechnerPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
