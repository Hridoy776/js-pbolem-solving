
// problem1
function minutesToSeconds(minutes) {

    const seconds = minutes * 60;
    return seconds;

}
// problem2

function swap(a, b) {

    return [b, a]
}

// problem3

function sevenBoom(arr) {


    if (arr.indexOf(7) !== -1) {
        return "bom"
    } else {
        return 'no'
    }

}
// problem4
const boomerangs = (arr) => {
    let a = [];
    let b = [];
    for (let i = 0; i < arr.length; i++) {
        //console.log("i:" + i);
        if (arr[i] === arr[i + 2] && arr[i + 1] !== arr[i]) {
            //console.log("arr[i]: " + arr[i] + " & arr[i + 2]:" + arr[i + 2]);
            (a.push(arr[i]));
            (a.push(arr[i + 1]));
            (a.push(arr[i + 2]));
            //console.log("a: " + a);
            b.push(a);
            //console.log("b:" + b);
            a = [];
        }
    }
    let c = b.length;
    return c;
};

// problem5
const oddOrEven = (num) => {
    let a = num.toString();
    console.log(typeof (a))
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += parseInt(a[i]);
    }
    if (sum % 2 === 1) {
        return "Oddish"
    } else return "Evenish"
};

// problem6

const dateBetween = (a, b) => {
    let date1 = new Date(a);
    let date2 = new Date(b);
    let differenceDate;
    if (date1 > date2) {
        differenceDate = date1 - date2;
    }

    else {
        differenceDate = date2 - date1;
    }
    return differenceDate / (1000 * 3600 * 24)
}

// problem7

const getLength = (arr) => {
    let a = arr.flat(Infinity);
    let b = 0;
    if (arr.length === 0) {
        b = 0;
    } else {
        b = a.length;
    }
    return b;
}

// problem8

const evesp = (a, b, c) => {
    let path = a * b;
    // console.log(path)
    let time = path / c;
    // console.log(time)
    return (path * 2) / (time + a)

}
// problem9
const numInStr = (arr) => {

    for (const c of arr) {
        for (const a of c) {
            console.log(typeof parseInt(a))
        }
    }

}

const f1 =(a)=>{
    const redundant=()=>{
        return a
    }
    return redundant(a);
}
console.log(f1('apple'))

const numOfDigit=(a)=>{
    const b =a.toString();
    return b.length;
}
console.log(numOfDigit(10001))

// numInStr(["1a", "a", "2b", "b"]);






