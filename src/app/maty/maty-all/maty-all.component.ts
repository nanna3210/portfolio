import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {ThemePalette} from '@angular/material/core'
// import {MatDialog, MatDialogRef} from '@angular/material/dialog';



export interface ChipColor {
  name: string;
  color: ThemePalette;
}


@Component({
  selector: 'app-maty-all',
  templateUrl: './maty-all.component.html',
  styleUrls: ['./maty-all.component.css']
})
export class MatyAllComponent implements OnInit {

  constructor() { }
  panelOpenState :boolean = false ;
  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'},
  ]; 

  ngOnInit(): void {
  }

}
