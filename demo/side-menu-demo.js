var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import '@polymer/paper-button';
import '@polymer/paper-toggle-button';
import '@leavittsoftware/manage-side-menu/lib/manage-side-menu';
import { customElement, listen, property, query } from '@polymer/decorators';
import { DeclarativeEventListeners } from '@polymer/decorators/lib/declarative-event-listeners.js';
import { html, PolymerElement } from '@polymer/polymer';
let SideMenuDemo = class SideMenuDemo extends DeclarativeEventListeners(PolymerElement) {
    constructor() {
        super(...arguments);
        this.role = 'View All Logs';
    }
    addRoleButtonTapped() {
        window.dispatchEvent(new CustomEvent('um-role-added', { detail: { role: this.role } }));
    }
    clearRolesButtonTapped() {
        this.manageSideMenu.roles = [];
    }
    ready() {
        super.ready();
        window.dispatchEvent(new CustomEvent('um-roles', {
            detail: {
                roles: [
                    'Hire Employee',
                    'App Manager Access',
                    'Manual Entry Tool Access',
                    'Job Role Manager Global Admin'
                ]
            }
        }));
    }
    static get template() {
        return html `<style>
    :host {
        display: block;
        margin: 16px;
    }

    h3 {
        margin: 8px;
    }

    .menu-container {
        margin: 8px;
        height: 400px;
        width: 300px;
        border: 1px dashed black;
        overflow-y: auto;
    }

    paper-button {
        margin: 8px;
    }
</style>

<h3>LSS Side Menu Demo</h3>
<div class="menu-container">
    <manage-side-menu is-dev="[[isDev]]" roles="[[roles]]" selected="hire-form"></manage-side-menu>
</div>
<paper-input label="Role Name" value="{{role}}"></paper-input>
<paper-button id="addRoleButton" raised>Add Role</paper-button>
<paper-button id="clearRolesButton" raised>Clear Roles</paper-button>
<paper-toggle-button checked="{{isDev}}">Is Development</paper-toggle-button>`;
    }
};
__decorate([
    property()
], SideMenuDemo.prototype, "role", void 0);
__decorate([
    property()
], SideMenuDemo.prototype, "isDev", void 0);
__decorate([
    query('manage-side-menu')
], SideMenuDemo.prototype, "manageSideMenu", void 0);
__decorate([
    listen('tap', 'addRoleButton')
], SideMenuDemo.prototype, "addRoleButtonTapped", null);
__decorate([
    listen('tap', 'clearRolesButton')
], SideMenuDemo.prototype, "clearRolesButtonTapped", null);
SideMenuDemo = __decorate([
    customElement('side-menu-demo')
], SideMenuDemo);
export { SideMenuDemo };
