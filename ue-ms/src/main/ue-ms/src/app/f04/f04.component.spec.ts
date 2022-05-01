import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F04Component } from './f04.component';

describe('F04Component', () => {
  let component: F04Component;
  let fixture: ComponentFixture<F04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
