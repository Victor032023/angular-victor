import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoHijo2Component } from './compo-hijo2.component';

describe('CompoHijo2Component', () => {
  let component: CompoHijo2Component;
  let fixture: ComponentFixture<CompoHijo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoHijo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoHijo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
