import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedInitComponent } from './feed-init.component';

describe('FeedInitComponent', () => {
  let component: FeedInitComponent;
  let fixture: ComponentFixture<FeedInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
