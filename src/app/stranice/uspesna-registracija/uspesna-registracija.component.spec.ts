import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UspesnaRegistracijaComponent } from './uspesna-registracija.component';

describe('UspesnaRegistracijaComponent', () => {
  let component: UspesnaRegistracijaComponent;
  let fixture: ComponentFixture<UspesnaRegistracijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UspesnaRegistracijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UspesnaRegistracijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
