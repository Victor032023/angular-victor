import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoHijoListComponent } from './compo-hijo-list.component';

describe('CompoHijoListComponent', () => {
  let component: CompoHijoListComponent;
  let fixture: ComponentFixture<CompoHijoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoHijoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoHijoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
