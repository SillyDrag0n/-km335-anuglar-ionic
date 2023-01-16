import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDetailPage } from './navigation-detail.page';

describe('NavigationDetailPage', () => {
    let component: NavigationDetailPage;
    let fixture: ComponentFixture<NavigationDetailPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavigationDetailPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavigationDetailPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
