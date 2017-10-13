/// <reference path="bower_components/polymer-ts/polymer-ts.d.ts" />

@component('lss-side-menu-demo')
class LssSideMenuDemo extends polymer.Base {
  @property()
  roles: Array<string>;

  @property()
  role: string = 'View All Logs';

  @property()
  isDev: boolean;

  @listen('addRoleButton.tap')
  addRoleButtonTapped() {
    this.push('roles', this.role);
  }

  @listen('clearRolesButton.tap')
  clearRolesButtonTapped() {
    this.roles = [];
  }
}
LssSideMenuDemo.register();