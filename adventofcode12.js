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
  var getKeys = function (o) {return Object.keys(o)},
      check = function (o) {
        var keys = getKeys(o);
        for (i in keys) {
          if (!isNaN(Number(i))) {
              if (o(j) == 'red') {
                return 0;
              }
            }
          } else if (isNaN(Number(i))) {

          }
        }
      }
      check(obj);  
}