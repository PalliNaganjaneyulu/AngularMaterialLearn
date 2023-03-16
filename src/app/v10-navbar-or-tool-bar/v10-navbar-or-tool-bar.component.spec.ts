import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V10NavbarOrToolBarComponent } from './v10-navbar-or-tool-bar.component';

describe('V10NavbarOrToolBarComponent', () => {
  let component: V10NavbarOrToolBarComponent;
  let fixture: ComponentFixture<V10NavbarOrToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V10NavbarOrToolBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V10NavbarOrToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
