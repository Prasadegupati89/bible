import { Component, ElementRef } from '@angular/core';

import { AnimationController, ModalController } from '@ionic/angular';

@Component({
  selector: 'bible-model',
  templateUrl: 'bible-model.html',
})
export class BibleModelComponent {
  selectedValue: any;

  constructor(private modalController: ModalController) {
    this.selectedValue = '';
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }
  onSelectChange(event: any) {
    this.selectedValue = event.detail.value; // update the selected value
  }
  search() {
    this.modalController.dismiss();
  }



}