import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V25snakebarComponent } from './v25snakebar.component';

describe('V25snakebarComponent', () => {
  let component: V25snakebarComponent;
  let fixture: ComponentFixture<V25snakebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V25snakebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V25snakebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
