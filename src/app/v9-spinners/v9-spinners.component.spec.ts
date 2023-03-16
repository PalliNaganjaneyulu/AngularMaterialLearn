import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V9SpinnersComponent } from './v9-spinners.component';

describe('V9SpinnersComponent', () => {
  let component: V9SpinnersComponent;
  let fixture: ComponentFixture<V9SpinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V9SpinnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V9SpinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
