import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NannaMateComponent } from './nanna-mate.component';

describe('NannaMateComponent', () => {
  let component: NannaMateComponent;
  let fixture: ComponentFixture<NannaMateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NannaMateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NannaMateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
