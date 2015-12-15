//day 14
var t = document.querySelector('pre').innerHTML.split(/\n/);
for (var i = 0; i < t.length; i++) {t[i] = t[i].split(' ')};
t.pop(); 
for (i in t) {t[i] = [t[i][3],t[i][6],t[i][13]]};
var advent14 = (v, vt, r, total) => {
  var v = Number(v), vt = Number(vt), r = Number(r), total = Number(total),
  t = vt + r, modt = x => x % t,
  ret = (modt(total) >= vt) ? 
          v*vt*(Math.floor(total/t) + 1) :
          v*vt*(Math.floor(total/t) + (modt(total) / vt));
  return ret
}
var rets = [];
for (i in t) {rets.push(advent14(t[i][0],t[i][1],t[i][2],2503))}
console.log(Math.max(...rets))

