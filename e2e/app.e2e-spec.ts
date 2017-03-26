import { BookyPage } from './app.po';

describe('booky App', () => {
  let page: BookyPage;

  beforeEach(() => {
    page = new BookyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
