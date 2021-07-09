import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttivitaNuovaComponent } from './attivita-nuova.component';

describe('AttivitaNuovaComponent', () => {
  let component: AttivitaNuovaComponent;
  let fixture: ComponentFixture<AttivitaNuovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttivitaNuovaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttivitaNuovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
