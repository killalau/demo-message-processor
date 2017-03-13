import { DemoMessageProcessorPage } from './app.po';

describe('demo-message-processor App', () => {
  let page: DemoMessageProcessorPage;

  beforeEach(() => {
    page = new DemoMessageProcessorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
