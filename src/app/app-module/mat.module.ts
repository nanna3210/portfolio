import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';


const material =[

  CommonModule, 
  MatButtonModule, 
  MatIconModule, 
  MatToolbarModule, 
  MatListModule


]

@NgModule({
  declarations: [],
  imports: [
      material
  ], 
  exports: [
      material
    
  ]
})
export class MatModule { }
