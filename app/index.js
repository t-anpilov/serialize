"use strict";
function serialize(value, level) {
    var serialized = '';
    if (level) {
        if (typeof (value) != "object") {
            serialized = typeof (value) + '(' + ("" + value) + ')';
        }
        else if (Array.isArray(value)) {
            serialized = 'Array(';
            var valueArr_1 = [];
            value.forEach(function (item) {
                if (typeof (item) != "object") {
                    valueArr_1.push(item);
                }
                else {
                    valueArr_1.push(serialize(item, level - 1));
                }
            });
            serialized += valueArr_1.join(', ');
            serialized += ')';
        }
        else {
            serialized = 'Object(';
            var valueArr = [];
            for (var key in value) {
                if (typeof (value[key]) != "object") {
                    valueArr.push(key + '=' + value[key]);
                }
                else {
                    valueArr.push(key + ' = ' + serialize(value[key], level - 1));
                }
            }
            serialized += valueArr.join(', ');
            serialized += ')';
        }
        return serialized;
    }
    else if (Array.isArray(value)) {
        serialized += 'Array';
        return serialized;
    }
    else {
        serialized += 'Object';
        return serialized;
    }
}
console.log(serialize(1, 1));
console.log(serialize([1, 2, 3], 1));
console.log(serialize([1, 2, { a: 3, b: 4 }, [5, 6]], 2));
console.log(serialize({ a: 1, b: 2, c: [5, { d: 7, e: 12 }], d: { a: 3, b: 4 } }, 2));
console.log(serialize({ a: 1, b: 2, c: [5, { d: 7, e: 12 }], d: { a: 3, b: 4 } }, 3));
