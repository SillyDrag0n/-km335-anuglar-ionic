import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringPage } from './string.page';

describe('StringPage', () => {
    let component: StringPage;
    let fixture: ComponentFixture<StringPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StringPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StringPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
