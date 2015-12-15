function adventDayFour (a, str) {
        //part one
        // let a = 5 and str = '00000'
        //part two
        // let a = 6 and str = '000000'
        var count = 0;
        for (var i=0;i<Number.MAX_VALUE;i++) {
            var hash = md5('bgvyzdsv'+i+'');
            if (hash.substr(0,a) == str) {
                console.log(i);
                break;
            }
        }
        console.log(count);
    }
    adventDayFour()