/// <reference path="bower_components/polymer-ts/polymer-ts.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LssSideMenuDemo = (function (_super) {
    __extends(LssSideMenuDemo, _super);
    function LssSideMenuDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.role = 'View All Logs';
        return _this;
    }
    LssSideMenuDemo.prototype.addRoleButtonTapped = function () {
        this.push('roles', this.role);
    };
    LssSideMenuDemo.prototype.clearRolesButtonTapped = function () {
        this.roles = [];
    };
    return LssSideMenuDemo;
}(polymer.Base));
__decorate([
    property(),
    __metadata("design:type", Array)
], LssSideMenuDemo.prototype, "roles", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], LssSideMenuDemo.prototype, "role", void 0);
__decorate([
    property(),
    __metadata("design:type", Boolean)
], LssSideMenuDemo.prototype, "isDev", void 0);
__decorate([
    listen('addRoleButton.tap'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LssSideMenuDemo.prototype, "addRoleButtonTapped", null);
__decorate([
    listen('clearRolesButton.tap'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LssSideMenuDemo.prototype, "clearRolesButtonTapped", null);
LssSideMenuDemo = __decorate([
    component('lss-side-menu-demo')
], LssSideMenuDemo);
LssSideMenuDemo.register();
