Array.prototype.log = function () {
    console.log(this);
}

Array.prototype.range = function (start, end) {
    let temp = [];

    for (let i = start; i <= end; i++) {
        temp.push(i);
    }

    // console.log(temp);

    return temp;
}
