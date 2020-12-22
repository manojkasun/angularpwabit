import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import {MatExpansionModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  declarations: [CardContainerComponent, CardHeaderComponent, CardBodyComponent],
  exports: [CardContainerComponent, CardHeaderComponent, CardBodyComponent]
})
export class CardModule {}
