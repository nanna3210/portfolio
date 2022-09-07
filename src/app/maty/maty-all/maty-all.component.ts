import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-maty-all',
  templateUrl: './maty-all.component.html',
  styleUrls: ['./maty-all.component.css']
})
export class MatyAllComponent implements OnInit {

  constructor() { }
  panelOpenState :boolean = false ; 
  ngOnInit(): void {
  }

}
