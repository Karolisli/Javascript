var array = [[1,"petras", "slekys"],
            [2,"as", "jis"],
        //  index-V           V
            [3,"dalia", "gybauskaite"],
            [4,"bananas", "kebabas"],
            [5,"test","nope"]
        ];
        array.sort(function(a,b){
        //   array-V V-index
            return a[1] > b[1] ? 1 : -1;
        });
        console.log(array);

// var res = "",
// var num = 16;
// fin = res + Number.isFinite(132);
// nan = res + Number.isNaN(132);
// int = res + Number.isInteger(132);
// this = num + 
// console.log(int);
