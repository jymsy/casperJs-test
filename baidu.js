var casper = require('casper').create({
    pageSettings: {
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
    },
    viewportSize: {
        width: 320,
        height: 568
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
    casper.captureSelector('2.png', 'html');
});

casper.then(function() {


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
    this.wait(1000);
    // this.click('#login-password');
    this.sendKeys('#login-password', "jym7717810483", {
        keepFocus: true
    });

    require('utils').dump(this.getElementInfo('#login-userlist'));
    this.wait(3000);
    require('utils').dump(this.getElementInfo('#login-submit'));
    // 10.截取填写登录表单后的样子
    // casper.captureSelector('3.png', 'html');

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