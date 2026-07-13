const LoginPage = require('../../pages/LoginPage');
const HomePage = require('../../pages/HomePage');

const loginPage = new LoginPage();
const homePage = new HomePage();

describe('Public Navigation', () => {

  beforeEach(() => {
    loginPage.visit();
  });

  it('should navigate to marketing homepage when logo is clicked', () => {

    loginPage.verifyPageLoaded();

    loginPage.clickLogo();

    homePage.verifyPageLoaded();

  });

});