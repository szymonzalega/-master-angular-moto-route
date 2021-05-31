import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteManageViewComponent } from './route-manage-view.component';

describe('RouteManageViewComponent', () => {
  let component: RouteManageViewComponent;
  let fixture: ComponentFixture<RouteManageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteManageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteManageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
