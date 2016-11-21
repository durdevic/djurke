import { IdeaAppPage } from './app.po';

describe('idea-app App', function() {
  let page: IdeaAppPage;

  beforeEach(() => {
    page = new IdeaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
