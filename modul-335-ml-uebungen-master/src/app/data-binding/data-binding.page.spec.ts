import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingPage } from './data-binding.page';

describe('DataBindingPage', () => {
    let component: DataBindingPage;
    let fixture: ComponentFixture<DataBindingPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DataBindingPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DataBindingPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
