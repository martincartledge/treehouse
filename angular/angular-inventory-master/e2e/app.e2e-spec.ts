import { AngularInventoryPage } from './app.po';

describe('angular-inventory App', function() {
  let page: AngularInventoryPage;

  beforeEach(() => {
    page = new AngularInventoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
