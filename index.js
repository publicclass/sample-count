
var sample = require('sample');

exports.add = function(s){
  s.i = (s.i||0)+1;
}

exports.next = function(s){
  sample(s,s.i);
  s.i = 0;
}