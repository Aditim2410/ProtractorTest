exports.config = {
    seleniumAddress : 'http://localhost:4444/wd/hub',
    
        specs: ['elementbasics.js'],
        capabilities: {
            'browserName': 'firefox'
          }
    }