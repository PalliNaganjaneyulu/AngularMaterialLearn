import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V8BadgesComponent } from './v8-badges.component';

describe('V8BadgesComponent', () => {
  let component: V8BadgesComponent;
  let fixture: ComponentFixture<V8BadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V8BadgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V8BadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
