import { MeetingSchedulerPage } from './app.po';

describe('meeting-scheduler App', () => {
  let page: MeetingSchedulerPage;

  beforeEach(() => {
    page = new MeetingSchedulerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
