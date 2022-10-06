import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPicComponent } from './menu-pic.component';

describe('MenuPicComponent', () => {
  let component: MenuPicComponent;
  let fixture: ComponentFixture<MenuPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
