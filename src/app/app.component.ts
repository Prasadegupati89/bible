import { Component } from '@angular/core';
import { CommanService } from './services/comman.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentItem: any;
  public appPages = [
    { title: 'Home', url: '/folder/inbox', icon: 'home' },
    { title: 'Goto', url: '/folder/outbox', icon: 'home' },
    { title: 'Bookmarks', url: '/folder/favorites', icon: 'home' },
    { title: 'Search', url: '/folder/archived', icon: 'search' },
    { title: 'History', url: '/folder/trash', icon: 'home' },
    { title: 'Settings', url: '/folder/spam', icon: 'search' },
  ];


  constructor(private commanService: CommanService,private translate: TranslateService) {
    this.translate.setDefaultLang('tl');
    this.translate.use('tl');
   }

  ngOnInit() {
    //this.commanService.get();
    this.currentItem = "testtttttttttttttttttttkkkkkkkkkkkkkkkkkkkkkk";
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }


}
