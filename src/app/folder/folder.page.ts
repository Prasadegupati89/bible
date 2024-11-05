import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonCardContent, ModalController } from '@ionic/angular';
import { CommanService } from '../services/comman.service';
import * as bible from 'src/assets/TL/bible.json';
import { BibleModelComponent } from './model/bible.model';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  showModel: Boolean = false;
  selectedItem: string | null = null;
  public folder!: string;
  message: any;
  sent: any;
  chapter: any[] = [];
  verse: any[] = [];
  word = new Array<any>();
  books = {
    "ఆదికాండము": 0, "నిర్గమకాండము": 1, "లేవీయకాండము": 2, "సంఖ్యాకాండము": 3, "ద్వితీయోపదేశకాండమ": 4, "యెహొషువ": 5,
    "న్యాయాధిపతులు": 6, "రూతు": 7, "సమూయేలు మొదటి గ్రంథము": 8, "సమూయేలు రెండవ గ్రంథము": 9, "రాజులు మొదటి గ్రంథము": 10,
    "రాజులు రెండవ గ్రంథము": 11, "దినవృత్తాంతములు మొదటి గ్రంథము": 12, "దినవృత్తాంతములు రెండవ గ్రంథము": 13, "ఎజ్రా": 14, "నెహెమ్యా": 15, "ఎస్తేరు": 16, "యోబు గ్రంథము": 17,
    "కీర్తనల గ్రంథము": 18, "సామెతలు": 19, "ప్రసంగి": 20, "పరమగీతము": 21, "యెషయా గ్రంథము": 22, "యిర్మీయా": 23, "విలాపవాక్యములు": 24, "యెహెజ్కేలు": 25,
    "దానియేలు": 26, "హొషేయ": 27, "యోవేలు": 28, "ఆమోసు": 29, "ఓబద్యా": 30, "యోనా": 31, "మీకా": 32, "నహూము": 33, "హబక్కూకు": 34, "జెఫన్యా": 35,
    "హగ్గయి": 36, "జెకర్యా": 37, "మలాకీ": 38, "మత్తయి సువార్త": 39, "మార్కు సువార్త": 40, "లూకా సువార్త": 41, "యోహాను సువార్త": 42, "అపొస్తలుల కార్యములు": 43,
    "రోమీయులకు": 44, "1 కొరింథీయులకు": 45, "2 కొరింథీయులకు": 46, "గలతీయులకు": 47, "ఎఫెసీయులకు": 48, "ఫిలిప్పీయులకు": 49,
    "కొలొస్సయులకు": 50, "1 థెస్సలొనీకయులకు": 51, "2 థెస్సలొనీకయులకు": 52, "1 తిమోతికి": 53, "2 తిమోతికి": 54, "తీతుకు": 55, "ఫిలేమోనుకు": 56,
    "హెబ్రీయులకు": 57, "యాకోబు": 58, "1 పేతురు": 59, "2 పేతురు": 60, "1 యోహాను": 61, "2 యోహాను": 62, "3 యోహాను": 63, "యూదా": 64, "ప్రకటన గ్రంథము": 65
  };

  constructor(private modalCtrl: ModalController, private commanService: CommanService) {

  }

  ngOnInit() {
    this.sent = 24;
    this.folder = "మత్తయి సువార్త 23:12";
    this.message = JSON.parse(JSON.stringify(bible));
    this.chapter = this.message['Book'];
    this.verse = this.chapter[39]['Chapter'][22]['Verse'];
    for (const obj in this.verse) {
      var lastTwo = 0;
      //if(obj === '11'){
      var index = this.verse[obj].Verseid;
      lastTwo = Number(index.slice(-2));
      this.word.push(((lastTwo) + 1) + ". " + this.verse[obj].Verse);
      //}

    }
  }

  async showSearchPopUp($event: any) {
    this.showModel = true;
    const modal = await this.modalCtrl.create({
      component: BibleModelComponent,
      cssClass: 'my-modal-class'
    });
    return await modal.present();

  }

  selectItem(item: string) {
    //alert('ffff')
    return true;
  }



}
