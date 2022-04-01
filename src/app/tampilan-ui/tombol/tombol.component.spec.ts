import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TombolComponent } from './tombol.component';

describe('TombolComponent', () => {
  let component: TombolComponent;
  let fixture: ComponentFixture<TombolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TombolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TombolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
