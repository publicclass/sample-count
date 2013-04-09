var count = require('sample-count')
  , sample = require('publicclass-sample')
  , rAF = require('publicclass-request-animation-frame');

var hits = new sample;
var messages = new sample;
var started = +new Date();

console.log('running for ~5s...')
rAF(function r(){

  // add a hit!
  count.add(hits)

  // received messages during this frame
  for(var i=Math.round(5+Math.random()*5); i--;){
    count.add(messages)
  }

  // only count messages/frame
  count.next(messages)

  // only count hits / ~95th frame
  if( Math.random() > .95 ){
    count.next(hits)
  }

  // run for 5s
  if( (+new Date) - started < 5000 ){
    rAF(r);
  } else {
    log('hits',hits)
    log('messages',messages)
  }
})

function log(name,a){
  console.log('%s:',name)
  console.log(' stddev: \t',sample.stddev(a))
  console.log(' mean: \t\t',sample.mean(a))
  console.log(' variance: \t',sample.variance(a))
  console.log(' sum: \t\t',sample.sum(a))
  console.log(' min: \t\t',sample.min(a))
  console.log(' max: \t\t',sample.max(a))
  console.log(' range: \t',sample.range(a))
  console.log(' count: \t',sample.count(a))
}