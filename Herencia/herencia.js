var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Televisor = /** @class */ (function () {
    function Televisor() {
        this.canalActual = 0;
        this.volumenActual = 10;
        this.estaPrendido = false;
    }
    Televisor.prototype.cambiarCanal = function (canal) {
        this.canalActual = canal;
    };
    Televisor.prototype.cambiarVolumen = function (volumen) {
        this.volumenActual = volumen;
    };
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    return Televisor;
}());
var SmartTV = /** @class */ (function (_super) {
    __extends(SmartTV, _super);
    function SmartTV() {
        var _this = _super.call(this) || this;
        _this.canalActual = 1;
        return _this;
    }
    SmartTV.prototype.mirarNetflix = function () {
        console.log('Mirando Netflix...');
    };
    SmartTV.prototype.subirVolumen = function () {
        this.volumenActual += 1;
    };
    SmartTV.prototype.bajarVolumen = function () {
        this.volumenActual -= 1;
    };
    return SmartTV;
}(Televisor));
var tv = new SmartTV();
console.log(tv);
