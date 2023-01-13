import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SilvanundpatricessuperduperuploadprojektPage } from './silvanundpatricessuperduperuploadprojekt.page';

describe('SilvanundpatricessuperduperuploadprojektPage', () => {
  let component: SilvanundpatricessuperduperuploadprojektPage;
  let fixture: ComponentFixture<SilvanundpatricessuperduperuploadprojektPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SilvanundpatricessuperduperuploadprojektPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SilvanundpatricessuperduperuploadprojektPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
