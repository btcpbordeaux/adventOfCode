//day 8
//part one
var t = document.querySelector('pre').innerHTML, count = new Array(t.length).fill(0);
t=t.split(/\n/);
for (i in t) {if (t[i] === "") {t.splice(i,1)}};
for (i in t) {t[i] = t[i].trim()};
for (i in t) {count[i] += t[i].length - eval(t[i]).length};
console.log(count.reduce( (p,n) => p+n,0));


//part two