var util = require('util'),
    SortedSet = require('sset');

module.exports = SortedArray;

function SortedArray(arr, cmp) {
    if (!(this instanceof SortedArray)) {
        return new SortedArray(arr, cmp);
    }
    return SortedSet.call(this, arr, cmp);
}
util.inherits(SortedArray, SortedSet);

/*
 * Add items to the array
 * accepts multiple arguments
 * returns the index of the first element inserted
 */
SortedArray.prototype.add = function() {
    var x, idx;
    for (var i = arguments.length-1; i >= 0; i--) {
        idx = this.indexOf(arguments[i]);
        x = idx < 0 ? -idx - 1 : idx;
        this.items.splice(x, 0, arguments[i]);
    }
    return x;
};

