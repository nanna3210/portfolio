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
  keywords = new Set(['angular', 'how-to', 'tutorial']);
  formControl = new FormControl(['angular']);

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }

  ngOnInit(): void {
  }

}
