//day ten
var adventDayTen = (string, iterations) => {
        var one = st => {
              var s = '', tmp = st.match(/(\d)\1*/g);
              tmp.forEach( (e, i) => {s += e.length + e[0];
              })
              return s;
        },
          iter = x => new Array(iterations).fill().reduce(one, x);
          console.log(iter(string).length);
    }
adventDayTen('1113122113',40);
adventDayTen('1113122113',50);
