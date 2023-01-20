import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RegistrierungPage } from './registrierung.page';
import { RegistrierungPageRoutingModule } from './registrierung-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        RegistrierungPageRoutingModule,
    ],
    declarations: [RegistrierungPage],
})
export class RegistrierungPageModule {}
