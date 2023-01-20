import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FerienortePage } from './ferienorte.page';

describe('FerienortePage', () => {
    let component: FerienortePage;
    let fixture: ComponentFixture<FerienortePage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FerienortePage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FerienortePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
