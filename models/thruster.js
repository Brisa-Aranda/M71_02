"use strict";
var Thruster = /** @class */ (function () {
    function Thruster(Poten_Max) {
        this.Poten_Act = 0;
        this.Poten_Max = Poten_Max;
    }
    Object.defineProperty(Thruster.prototype, "getPoten_Max", {
        get: function () {
            return this.Poten_Max;
        },
        enumerable: false,
        configurable: true
    });
    return Thruster;
}());
