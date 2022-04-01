import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasarAngularComponent } from './dasar-angular.component';

describe('DasarAngularComponent', () => {
  let component: DasarAngularComponent;
  let fixture: ComponentFixture<DasarAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasarAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasarAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
