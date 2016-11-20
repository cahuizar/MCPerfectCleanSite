import { MCPerfectCleanPage } from './app.po';

describe('mcperfect-clean App', function() {
  let page: MCPerfectCleanPage;

  beforeEach(() => {
    page = new MCPerfectCleanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
