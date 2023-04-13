import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoformularioComponent } from './dialogoformulario.component';

describe('DialogoformularioComponent', () => {
  let component: DialogoformularioComponent;
  let fixture: ComponentFixture<DialogoformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoformularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
