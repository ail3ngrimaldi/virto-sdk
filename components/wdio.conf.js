export const config = {
    runner: [
      'browser',
      {
        preset: 'vite',
        viteConfig: {
          resolve: {
            alias: {
              path: 'path-browserify',
              module: './empty-module.js',
            },
          },
        },
      },
    ],
    specs: ['./*.test.js'],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--headless=new', '--no-sandbox', '--disable-gpu'],
      },
      webSocketUrl: false, // Disable BiDi protocol
    }],
    logLevel: 'debug',
    logLevels: {
      webdriver: 'trace',
      '@wdio/browser-runner': 'trace',
    },
    bail: 0,
    baseUrl: 'http://localhost:8080',
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000,
    },
  };