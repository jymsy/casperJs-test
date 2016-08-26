var casper = require('casper').create({
    pageSettings: {
        userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.85 Safari/537.36'
    },
    viewportSize: {
        width: 1366,
        height: 768
    },
    waitTimeout: 8000,
    verbose: false,
    logLevel: 'debug'
});

casper.start();
casper.thenOpen('https://www.gomemyc.com/login', function() {
    // casper.captureSelector('1.png', 'html');
    this.sendKeys('#txtUserName', '18642629475', {
        keepFocus: true
    });
    this.sendKeys('#txtPassword', 'jym7717810483', {
        keepFocus: true
    });
    this.click('#login_button');
    casper.captureSelector('gome.png', 'html');
});

casper.then(function() {
    var cookies = phantom.cookies;
    cookies.forEach(function(value, index) {
        console.log(value.name + ':' + value.value);
    });
});


casper.run();