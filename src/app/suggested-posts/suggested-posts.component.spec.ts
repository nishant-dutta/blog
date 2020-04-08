import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedPostsComponent } from './suggested-posts.component';

describe('SuggestedPostsComponent', () => {
  let component: SuggestedPostsComponent;
  let fixture: ComponentFixture<SuggestedPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
