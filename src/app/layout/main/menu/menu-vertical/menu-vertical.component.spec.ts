import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuVerticalComponent } from './menu-vertical.component';

describe('MenuVerticalComponent', () => {
  let component: MenuVerticalComponent;
  let fixture: ComponentFixture<MenuVerticalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
