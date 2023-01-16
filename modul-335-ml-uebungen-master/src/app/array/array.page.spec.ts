import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayPage } from './array.page';

describe('ArrayPage', () => {
    let component: ArrayPage;
    let fixture: ComponentFixture<ArrayPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ArrayPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArrayPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
