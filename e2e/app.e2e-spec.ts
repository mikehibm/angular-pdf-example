import { AngularPdfExamplePage } from './app.po';

describe('angular-pdf-example App', () => {
  let page: AngularPdfExamplePage;

  beforeEach(() => {
    page = new AngularPdfExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
