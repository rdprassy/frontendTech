this.add = function (x, y) {
    console.log(x + y);
};
this.sub = function (x, y) {
    console.log(x - y);
};
exports;
{
    this.add = this.add;
    this.sub = this.sub;
}