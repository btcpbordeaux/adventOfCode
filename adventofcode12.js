//day 12

//part one 
var arr = []; 
var t = document.querySelector('pre').textContent.replace(/[^0-9-]/g,',').split(',');
for (var i=0; i < t.length;i++) {
  if (t[i] != "") {arr.push(t[i])} 
  else {continue;}
};
console.log(arr.reduce((s,n) => Number(s) + Number(n), 0));  


//part two
var t = eval(document.querySelector('pre').textContent);

var adventDay12 = function (obj) {
  var count = 0;
  var getKeys = function (o) {
    if (typeof o == 'object') {
      return Object.keys(o);
      } 
    else {
      return false;
      }
    },
    getVals = function (o) {
      var ret = [], keys = getKeys(o);
      if (keys) {
        for (i in keys) {
          ret.push(o[i]);
        }
      } else if (!keys) {
        return false;
      }
    },
    getNums = function (s) {
      if (isNaN(Number(s))) {
        ret +=0
      } else if (!isNaN(Number(s))) {
        ret += Number(s)
      }
    },
    check = function (o) {
      var keys = getKeys(o);
        if (keys) { 
            if (isNaN(Number(keys[0]))) {
              var vals = getVals(o);
              
              if (vals.every(e => e != 'red')) {
                vals.map(check);
              } else {delete o;}

            } else if (!isNaN(Number(keys[0]))) {
              var vals = getVals(o);
                vals.map(check);      
              }   
        } else if (!keys) {
          getNums(o);
        }
      }
    check(obj);  
}
