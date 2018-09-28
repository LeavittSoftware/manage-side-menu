import '@polymer/paper-button';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-toggle-button';
import '@leavittsoftware/manage-side-menu/lib/manage-side-menu';

import {customElement, listen, property, query} from '@polymer/decorators';
import {DeclarativeEventListeners} from '@polymer/decorators/lib/declarative-event-listeners.js';
import {html, PolymerElement} from '@polymer/polymer';

@customElement('side-menu-demo')
export class SideMenuDemo extends DeclarativeEventListeners
(PolymerElement) {
  @property() role: string = 'View All Logs';

  @property() isDev: boolean;

  @query('manage-side-menu') manageSideMenu: any;

  @listen('tap', 'addRoleButton')
  addRoleButtonTapped() {
    window.dispatchEvent(
        new CustomEvent('um-role-added', {detail: {role: this.role}}));
  }

  @listen('tap', 'clearRolesButton')
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
    return html`<style>
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
}
