import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttivitaElencoComponent } from './attivita-elenco.component';

describe('AttivitaElencoComponent', () => {
  let component: AttivitaElencoComponent;
  let fixture: ComponentFixture<AttivitaElencoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttivitaElencoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttivitaElencoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
