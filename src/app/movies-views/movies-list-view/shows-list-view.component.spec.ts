import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsListViewComponent } from './shows-list-view.component';

describe('ShowsListViewComponent', () => {
  let component: ShowsListViewComponent;
  let fixture: ComponentFixture<ShowsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
