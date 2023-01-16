import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {
  name: string;
  pushToggle: boolean;
  newsletterToggle: boolean;

  constructor(private storageServices: StorageService) {}
  
  ngOnInit() {
  }

  async addName(){
    this.storageServices.set('name', 'MIGUEL');
  }
}
