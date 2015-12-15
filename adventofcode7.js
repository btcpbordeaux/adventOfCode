//day 7 
var t = document.querySelector('pre').innerHTML.split(/\n/);
var ops = {
  "AND": "&",
  "OR": "|",
  "NOT": "~",
  "LSHIFT": "<<",
  "RSHIFT": ">>>"
};
for (i in t) {if (t[i] == "") {t.splice(i,1)}};


