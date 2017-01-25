import { CrowdfundingSitePage } from './app.po';

describe('crowdfunding-site App', function() {
  let page: CrowdfundingSitePage;

  beforeEach(() => {
    page = new CrowdfundingSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
