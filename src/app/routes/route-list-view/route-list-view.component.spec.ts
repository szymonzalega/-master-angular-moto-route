import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteListViewComponent } from './route-list-view.component';

describe('RouteListViewComponent', () => {
  let component: RouteListViewComponent;
  let fixture: ComponentFixture<RouteListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
