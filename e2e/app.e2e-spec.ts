import { Ng2WebpackDemoPage } from './app.po';

describe('ng2-webpack-demo App', function() {
  let page: Ng2WebpackDemoPage;

  beforeEach(() => {
    page = new Ng2WebpackDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
