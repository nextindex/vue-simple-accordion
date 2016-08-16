// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    browser
    .url('http://localhost:8080')
      .waitForElementVisible('.Accordion__item', 5000)
      .assert.elementPresent('.Accordion__heading')
      .assert.elementPresent('.Accordion__title')
      .assert.containsText('div', 'Hello')
      .end()
  }
}
