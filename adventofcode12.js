//day 12

//part one 
var arr = []; 
var t = document.querySelector('pre').textContent.replace(/[^0-9-]/g,',').split(',');
for (var i=0; i < t.length; i++) {
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
        for (i in o) {
          ret.push(o[i]);
        }
        return ret;
      } else if (!keys) {
        return false;
      }
    },
    getNums = function (s) {
      if (isNaN(Number(s))) {
        count +=0;
      } else if (!isNaN(Number(s))) {
        count += Number(s);
        console.log(s);
        console.log('count is now '+count+'');
      }
    },
    check = function (o) {
      var keys = getKeys(o);
        if (keys) { 
            if (!Array.isArray(o)) {
              var vals = getVals(o);
              console.log('object');
              console.log(o)
              console.log(vals);
              if (vals.every(e => e !== 'red')) {
                vals.map(check);
              } else {count+=0;}

            } else if (Array.isArray(o)) {
              var vals = getVals(o);
                console.log('array');
                console.log(o)
                console.log(vals);
                vals.map(check);      
              }   
        } else if (!keys) {
          getNums(o);
        }
      }
    check(obj);  
    return count;
}
console.log(adventDay12(t))

//part two
//second solution
var t = eval(document.querySelector('pre').textContent);

var adventDay12 = function (obj) {
  var count = 0,
    getVals = function (o) {
      var ret = [];
        for (i in o) {
          ret.push(o[i]);
        }
        return ret; 
    }; 
     
      if (obj instanceof Array) {
        var vals = getVals(obj);
          for (i in vals) {
              count += adventDay12(vals[i]);
          };      

      } else if (obj instanceof Object) {
          var vals = getVals(obj);
            if(vals.every(e => e !== 'red')) {
              for (i in vals) {  
                count += search(vals[i]);
              }
            } else {count = 0;}
      } else {
        count += ~~obj;
      }
  
    return count;
}
console.log(adventDay12(t)) 

