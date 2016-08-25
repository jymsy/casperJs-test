var casper = require('casper').create({
    pageSettings: {
        loadImages: false,
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53'
    },
    viewportSize: {
        width: 320,
        height: 560
    },
    waitTimeout: 8000,
    verbose: true,
    logLevel: 'debug'
});

casper.start();
casper.thenOpen('http://www.baidu.com', function() {
    casper.captureSelector('1.png', 'html');

    console.log('-------------------------------------------');
    var cookies = phantom.cookies;
    cookies.forEach(function(value, index) {
        console.log(value.name + ':' + value.value);
    });
    console.log('-------------------------------------------');

    casper.mouse.click('#login');
});

casper.waitForSelector('form#login-formWrapper', function() {
    console.log('open login page');
});

casper.then(function() {
    casper.captureSelector('2.png', 'html');

    // this.fill('form#login-formWrapper', {
    //     username: 'jymsy'
    // }, false);
    // this.fill('form#login-formWrapper', {
    //     password: 'jym7717810483'
    // }, false);
    // this.click('#login-username');
    this.sendKeys('#login-username', 'jymsy', {
        keepFocus: true
    });
    // this.click('#login-password');
    this.sendKeys('#login-password', "jym7717810483", {
        keepFocus: true
    });

    this.wait(3000);
    require('utils').dump(this.getElementInfo('#login-submit'));
    // 10.截取填写登录表单后的样子
    casper.captureSelector('3.png', 'html');

    // 11.点击登录按钮
    // this.click('#login-submit');
});

// casper.waitForSelector('button#index-bn', function() {
//             casper.captureSelector('4.png', 'html');
//             console.log('-------------------------------------------');
//             var cookies = phantom.cookies;
//             cookies.forEach(function(cookie, index) {
//                 console.log(cookie.name + ':' + cookie.value);
//             });
//             console.log('-------------------------------------------');
// });

casper.run();