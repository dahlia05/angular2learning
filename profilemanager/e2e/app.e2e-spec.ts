import { ProfilemanagerPage } from './app.po';

describe('profilemanager App', function() {
  let page: ProfilemanagerPage;

  beforeEach(() => {
    page = new ProfilemanagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
