import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCardsComponent } from './contenido-cards.component';

describe('ContenidoCardsComponent', () => {
  let component: ContenidoCardsComponent;
  let fixture: ComponentFixture<ContenidoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
