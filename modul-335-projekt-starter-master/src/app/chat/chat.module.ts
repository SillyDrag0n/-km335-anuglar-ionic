import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPage } from './chat.page';
import { ChatPageRoutingModule } from './chat-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ChatPageRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [ChatPage],
})
export class ChatPageModule {}
