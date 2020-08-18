var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.setAddress = function (title) {
        this.address = this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = this.manager;
    };
    Library.prototype.toString = function () {
        return this.book[] + " " + this.address + "  " + this.manager + " ";
    };
    return Library;
}());
var milibrary = new Library("Introduccion a Javascript", 2344433 - BC23333, "joseph smith", "now editions");
console.log(milibrary.toString());
