import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRadio, IonRadioGroup, IonItem, IonLabel, IonButton, IonList,IonBackButton, IonButtons} from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRadio, IonRadioGroup, IonItem, IonLabel, IonButton, IonList, IonBackButton, IonButtons],
})
export class StatusPage implements OnInit {
  myStatus:string = "";

  constructor(private storage: Storage, private router:Router) { }

  async ionViewWillEnter(){
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
  }

  async setStatus(){
    await this.storage.set('status', this.myStatus)
    .then(()=>{
      this.router.navigate(['/home']);
    })
    .catch(
      (error)=>{
        console.log(error);
    });
  }

  ngOnInit() {
  }
}
