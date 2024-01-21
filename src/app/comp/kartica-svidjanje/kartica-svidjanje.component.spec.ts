import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarticaSvidjanjeComponent } from './kartica-svidjanje.component';

describe('KarticaSvidjanjeComponent', () => {
  let component: KarticaSvidjanjeComponent;
  let fixture: ComponentFixture<KarticaSvidjanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarticaSvidjanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarticaSvidjanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
