/*==============================================================================*/
/* Casper generated Thu Aug 25 2016 19:39:25 GMT+0800 (CST) */
/*==============================================================================*/

var x = require('casper').selectXPath;
casper.options.viewportSize = {
  width: 1600,
  height: 783
};
casper.on('page.error', function(msg, trace) {
  this.echo('Error: ' + msg, 'ERROR');
  for (var i = 0; i < trace.length; i++) {
    var step = trace[i];
    this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
  }
});
casper.test.begin('Resurrectio test', function(test) {
  casper.start('http://localhost/dev735/#Opportunities');
  casper.wait(1000);
  casper.then(function() {
    this.captureSelector("screenshot1.png", "html");
  });

  casper.run(function() {
    test.done();
  });
});