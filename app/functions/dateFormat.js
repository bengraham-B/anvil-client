"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dateFormat = function (dateParam) {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var date = new Date(dateParam);
    var dateReturn = {
        day: date.getDate(),
        monthText: months[date.getMonth()],
        monthNumber: date.getMonth(),
        year: date.getFullYear()
    };
    return dateReturn;
};
// module.exports = {dateFormat}
exports.default = dateFormat;
var date01 = dateFormat("Thu, 25 Apr 2024 00:00:00 GMT");
console.log(typeof date01.day);
