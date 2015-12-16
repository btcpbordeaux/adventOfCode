//day 7 
var t = document.querySelector('pre').innerHTML.split(/\n/);
var ops = {
  "AND": "&",
  "OR": "|",
  "NOT": "~",
  "LSHIFT": "<<",
  "RSHIFT": ">>>"
};
for (i in t) {
  if (t[i] == "") {
    t.splice(i,1)
  }
  if (t[i]) {
    t[i] = t[i].split(/-&gt;/);
  }  
};
function ad (a, ks) {
  loop1:
    for (i in a) {
      loop2:  
        for (j in ks) {
          if (a[i][0].indexOf(j) != -1) {
            a[i][0] = a[i][0].trim();
            a[i][1] = a[i][1].trim();
            a[i][0] = a[i][0].replace(j, ops[j]);
            continue loop1;
          }
        }
    }  
}

