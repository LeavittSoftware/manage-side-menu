/// <reference path="bower_components/polymer2-ts/polymer2-ts.ts" />
/// <reference path="bower_components/polymer2-ts/polymer.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let LssSideMenuDemo = class LssSideMenuDemo extends Polymer.Element {
    /// <reference path="bower_components/polymer2-ts/polymer2-ts.ts" />
    /// <reference path="bower_components/polymer2-ts/polymer.d.ts" />
    constructor() {
        super(...arguments);
        this.role = 'View All Logs';
    }
    addRoleButtonTapped() {
        this.push('roles', this.role);
    }
    clearRolesButtonTapped() {
        this.roles = [];
    }
};
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
    listen('tap', 'addRoleButton'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LssSideMenuDemo.prototype, "addRoleButtonTapped", null);
__decorate([
    listen('tap', 'clearRolesButton'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LssSideMenuDemo.prototype, "clearRolesButtonTapped", null);
LssSideMenuDemo = __decorate([
    customElement('lss-side-menu-demo')
], LssSideMenuDemo);
