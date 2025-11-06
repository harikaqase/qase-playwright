// playwright.config.js
module.exports = {
  reporter: [
    ['list'],
    [
      'playwright-qase-reporter',
      {
        mode: 'testops',
        debug: true,
        testops: {
          api: { token: process.env.QASE_API_TOKEN },
          project: process.env.QASE_PROJECT_CODE,
          basePath: 'https://api.eu.qase.io/v1', // <- IMPORTANT
          uploadAttachments: true,
          run: { title: 'Local Playwright run', complete: true },
        },
      },
    ],
  ],
  use: { screenshot: 'only-on-failure', video: 'retain-on-failure' },
};
