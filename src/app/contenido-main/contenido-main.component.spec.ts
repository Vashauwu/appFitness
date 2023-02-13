import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoMainComponent } from './contenido-main.component';

describe('ContenidoMainComponent', () => {
  let component: ContenidoMainComponent;
  let fixture: ComponentFixture<ContenidoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
