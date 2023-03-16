import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V11SideNavBarComponent } from './v11-side-nav-bar.component';

describe('V11SideNavBarComponent', () => {
  let component: V11SideNavBarComponent;
  let fixture: ComponentFixture<V11SideNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V11SideNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V11SideNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
