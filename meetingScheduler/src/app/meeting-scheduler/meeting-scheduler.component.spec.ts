import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingSchedulerComponent } from './meeting-scheduler.component';

describe('MeetingSchedulerComponent', () => {
  let component: MeetingSchedulerComponent;
  let fixture: ComponentFixture<MeetingSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
