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

  availableColors: ChipColor[] =[
    {name:'Rest API' , color:'warn'},
    {name:'Spring boot', color:'primary'}, 
    {name:'Spring MVC', color:'accent'}, 
    {name:'Hibernate', color:'warn'}, 
    {name:'Angular', color:'accent'}, 
    {name:'BootStrap', color:'primary'},
    {name:'JAVA', color:'warn'},
    {name:'typescript', color:'accent'},
    {name:'Github', color:'primary'},
    {name:'Mysql', color:'warn'}    
  ];

  ngOnInit(): void {
  }

}
