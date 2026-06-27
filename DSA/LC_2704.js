/**
 * @param {*} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(other) {
            if (val === other) {
                return true;
            }
            throw new Error("Not Equal");
        },

        notToBe: function(other) {
            if (val !== other) {
                return true;
            }
            throw new Error("Equal");
        }
    };
};

var obj = expect(5);

console.log(obj.toBe(5));      // true
console.log(obj.notToBe(6));   // true