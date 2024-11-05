import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { BibleModelComponent } from './model/bible.model';
import { provideHttpClient } from '@angular/common/http';
import { CommanService } from '../services/comman.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    TranslateModule
  ],
  providers: [provideHttpClient(),CommanService],
  declarations: [FolderPage,BibleModelComponent]
})
export class FolderPageModule {}
