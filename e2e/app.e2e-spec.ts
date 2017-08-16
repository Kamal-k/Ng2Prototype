import { GentelellaKPage } from './app.po';

describe('gentelella-k App', () => {
  let page: GentelellaKPage;

  beforeEach(() => {
    page = new GentelellaKPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
