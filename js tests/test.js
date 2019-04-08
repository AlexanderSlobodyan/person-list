1)
let x = [
    [1, 2, 3],
    [4, 5],
    [6]
];

function arr(k) {
    let y = []
    return y.concat.apply(y, k);
}
console.log(arr(x))

3)

function objectsMeth(a, b) {
    return a == b ? true : false;
}

console.log(objectsMeth(123, '123'))

5)

function plusArr(a) {
    let arr = a.filter((n) => {
        return n > 0
    })
    let arr1 = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        let sqrt = Math.sqrt(arr[i]);
        arr1.push(sqrt);
    }
    return arr1;
}

6)

function transform(str) {
    return str.split("_")[0].charAt(0).toUpperCase() + newStr[0].slice(1) + str.split("_")[1].charAt(0).toUpperCase() + newStr[1].slice(1)
};

console.log(transform("hello_world"));


7)

function foo(a) {
    function bar(b) {
        return a * b;
    }
    return bar;
}

let result = foo(8)(7) == 7 * 8;
console.log(result);
8)
var user = {
    name: 'User',
    count: 5
}
var user = Object.keys(user).map(function (key) {
    const k = [String(key), user[key]];
    return k.join(':')
});

alert(user)

9)


function getSum() {
    let res = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Array) {
            for (let j = 0; j < arguments[i].length; j++) {
                res += (arguments[i][j] = (!isNaN(+arguments[i][j])) ? +arguments[i][j] : 0);
            }
        } else if (!isNaN(+arguments[i])) {
            res += +arguments[i];
        } else {
            continue;
        }
    };
    return res;
}
10)

let count = 0;

function self() {
    count += 1;
    console.log(count);
}

self();
self();
self();
self(); // Try edit msg
self();
self();
self(); // Try edit msg
self();
self();



}