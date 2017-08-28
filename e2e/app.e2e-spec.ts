import { BarreThreePage } from './app.po';

describe('barre-three App', () => {
  let page: BarreThreePage;

  beforeEach(() => {
    page = new BarreThreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
