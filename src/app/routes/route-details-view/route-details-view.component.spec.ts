import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDetailsViewComponent } from './route-details-view.component';

describe('RouteDetailsViewComponent', () => {
  let component: RouteDetailsViewComponent;
  let fixture: ComponentFixture<RouteDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
