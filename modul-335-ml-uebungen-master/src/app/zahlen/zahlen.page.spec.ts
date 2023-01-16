import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahlenPage } from './zahlen.page';

describe('ZahlenPage', () => {
    let component: ZahlenPage;
    let fixture: ComponentFixture<ZahlenPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ZahlenPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ZahlenPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
