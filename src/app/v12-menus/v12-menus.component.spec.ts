import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V12MenusComponent } from './v12-menus.component';

describe('V12MenusComponent', () => {
  let component: V12MenusComponent;
  let fixture: ComponentFixture<V12MenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V12MenusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V12MenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
