import {determineIsDevelopment} from '@leavittsoftware/titanium-elements/lib/titanium-dev-detection-mixin';
import {css, customElement, html, LitElement, property} from 'lit-element';

type AppLink = {
  icon: string,
  name: string,
  roles: Array<string>,
  url: string,
  selectedName: string,
  hidden?: boolean
};

type Category = {
  name: string,
  links: Array<AppLink>,
  hidden?: boolean,
};

@customElement('manage-side-menu')
export class ManageSideMenuElement extends LitElement {
  @property({reflect: true, type: String}) selected: string = '';
  @property({reflect: true, type: Boolean}) isDev: boolean;
  @property({type: Array}) roles: Array<string> = [];

  @property({type: Array})
  uncategorizedLinks: Array<AppLink> = [{
    icon:
        'M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z',
    name: 'Overview',
    url: 'manage.leavitt.com/overview',
    roles: [],
    selectedName: 'overview'
  }];

  private chartIcon =
      'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z';

  @property({type: Array})
  categories: Array<Category> =
      [
        {
          name: 'Auditing',
          links: [{
            icon:
                'M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z',
            name: 'Log Parser',
            url: 'manage.leavitt.com/log-parser/apps',
            roles: ['View All Logs'],
            selectedName: 'log-parser'
          }]
        },
        {
          name: 'Employee Management',
          links:
              [
                {
                  icon:
                      'M9,4A4,4 0 0,0 5,8A4,4 0 0,0 9,12A4,4 0 0,0 13,8A4,4 0 0,0 9,4M9,14C6.33,14 1,15.33 1,18V20H12.08C12.03,19.67 12,19.34 12,19C12,17.5 12.5,16 13.41,14.8C11.88,14.28 10.18,14 9,14M18,14C17.87,14 17.76,14.09 17.74,14.21L17.55,15.53C17.25,15.66 16.96,15.82 16.7,16L15.46,15.5C15.35,15.5 15.22,15.5 15.15,15.63L14.15,17.36C14.09,17.47 14.11,17.6 14.21,17.68L15.27,18.5C15.25,18.67 15.24,18.83 15.24,19C15.24,19.17 15.25,19.33 15.27,19.5L14.21,20.32C14.12,20.4 14.09,20.53 14.15,20.64L15.15,22.37C15.21,22.5 15.34,22.5 15.46,22.5L16.7,22C16.96,22.18 17.24,22.35 17.55,22.47L17.74,23.79C17.76,23.91 17.86,24 18,24H20C20.11,24 20.22,23.91 20.24,23.79L20.43,22.47C20.73,22.34 21,22.18 21.27,22L22.5,22.5C22.63,22.5 22.76,22.5 22.83,22.37L23.83,20.64C23.89,20.53 23.86,20.4 23.77,20.32L22.7,19.5C22.72,19.33 22.74,19.17 22.74,19C22.74,18.83 22.73,18.67 22.7,18.5L23.76,17.68C23.85,17.6 23.88,17.47 23.82,17.36L22.82,15.63C22.76,15.5 22.63,15.5 22.5,15.5L21.27,16C21,15.82 20.73,15.65 20.42,15.53L20.23,14.21C20.22,14.09 20.11,14 20,14M19,17.5A1.5,1.5 0 0,1 20.5,19A1.5,1.5 0 0,1 19,20.5C18.16,20.5 17.5,19.83 17.5,19A1.5,1.5 0 0,1 19,17.5Z',
                  name: 'Employee Manager',
                  url: 'manage.leavitt.com/employee-manager/view/all/',
                  roles: ['Employee Manager Global Admin'],
                  selectedName: 'employee-manager'
                },
                {
                  icon:
                      'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
                  name: 'Hire',
                  url: 'manage.leavitt.com/hire-form/step1',
                  roles: ['Hire Employee'],
                  selectedName: 'hire-form'
                },
                {
                  roles: ['Job Role Manager Global Admin'],
                  url: 'manage.leavitt.com/job-role-types-manager',
                  icon:
                      'M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z',
                  name: 'Job Role Types',
                  selectedName: 'job-role-types-manager'
                },
                {
                  roles: ['Name Changer Admin'],
                  url: 'namechanger.leavitt.com',
                  icon:
                      'M9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75',
                  name: 'Name Changer',
                  selectedName: 'name-changer'
                },
                {
                  roles: ['People Search User'],
                  url: 'peoplesearch.leavitt.com',
                  icon:
                      'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
                  name: 'People Search',
                  selectedName: 'people-search'
                },
                {
                  roles: ['Terminate Employee'],
                  url: 'manage.leavitt.com/employee-termination-form',
                  icon:
                      'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z',
                  name: 'Terminate',
                  selectedName: 'employee-termination-form'
                },
                {
                  roles: ['Transfer Employee'],
                  url: 'manage.leavitt.com/employee-transfer-form',
                  icon:
                      'M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z',
                  name: 'Transfer',
                  selectedName: 'employee-transfer-form'
                },
                {
                  roles: ['UVIS Member List Admin'],
                  url: 'manage.leavitt.com/uvis-member-list',
                  icon:
                      'M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z',
                  name: 'UVIS Member List',
                  selectedName: 'uvis-member-list'
                },
              ]
        },
        {
          name: 'Enterprise Management',
          links:
              [
                {
                  roles: ['App Manager Access'],
                  url: 'manage.leavitt.com/application-manager',
                  icon:
                      'M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z',
                  name: 'Application Manager',
                  selectedName: 'application-manager'
                },
                {
                  roles: ['Company Manager Access'],
                  url: 'companymanager.leavitt.com',
                  icon:
                      'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z',
                  name: 'Company Manager',
                  selectedName: 'company-manager'
                },
                {
                  roles: ['Email Template Manager Access'],
                  url: 'manage.leavitt.com/email-template-manager',
                  icon:
                      'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
                  name: 'Email Templates',
                  selectedName: 'email-template-manager'
                },
                {
                  roles: ['Permission Manager App Access'],
                  url: 'manage.leavitt.com/permission-manager',
                  icon:
                      'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
                  name: 'Permissions',
                  selectedName: 'permission-manager'
                }
              ]
        },
        {
          name: 'Phones',
          links: [{
            roles: ['Outbound Manager Access'],
            url: 'manage.leavitt.com/outbound-caller-id-group-manager',
            icon:
                'M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z',
            name: 'Outbound Caller Id',
            selectedName: 'outbound-caller-id-group-manager'
          }]
        },
        {
          name: 'Reporting',
          links:
              [
                {
                  roles: ['BookOfBusinessChange Read Access'],
                  url: 'manage.leavitt.com/book-of-business-changes-manager',
                  icon: this.chartIcon,
                  name: 'Book of Business',
                  selectedName: 'book-of-business-changes-manager'
                },
                {
                  roles: ['C-Report Comment Access'],
                  url: 'creportcomments.leavitt.com',
                  icon: this.chartIcon,
                  name: 'C-Report Comments',
                  selectedName: 'creport-comment'
                },
                {
                  roles: ['StandardChartOfAccount Read Access'],
                  url: 'manage.leavitt.com/standard-chart-of-accounts-manager',
                  icon: this.chartIcon,
                  name: 'Chart of Accounts',
                  selectedName: 'standard-chart-of-accounts-manager'
                },
                {
                  roles: ['Domo Manager Admin'],
                  url: 'domomanager.leavitt.com',
                  icon: this.chartIcon,
                  name: 'Domo Manager',
                  selectedName: 'domo-manager'
                },
                {
                  roles: ['StandardizedGLDepartment Read Access'],
                  url: 'manage.leavitt.com/standardized-gl-department-mapper',
                  icon: this.chartIcon,
                  name: 'GL Department Mapper',
                  selectedName: 'standardized-gl-department-mapper'
                },
                {
                  roles: ['StandardizedLOB Read Access'],
                  url: 'manage.leavitt.com/line-of-business-manager',
                  icon: this.chartIcon,
                  name: 'Line of Business',
                  selectedName: 'line-of-business-manager'
                },
                {
                  roles: ['Manual Entry Tool Access'],
                  url: 'manualentrytool.leavitt.com',
                  icon: this.chartIcon,
                  name: 'Manual Entry Tool',
                  selectedName: 'manual-entry-tool'
                },
                {
                  roles: ['Producer Code Admin'],
                  url: 'producercodemanager.leavitt.com',
                  icon: this.chartIcon,
                  name: 'Producer Code',
                  selectedName: 'producer-code-manager'
                },
              ]
        }
      ];

  firstUpdated() {
    this.isDev = determineIsDevelopment(window.location.origin);
    // this.addEventListener('roles-changed', () => {
    this._onRoleChange();
    this.requestUpdate();
    // });

    // todo: listen for roles to change
  }

  _onRoleChange() {
    this.categories.forEach((category: Category) => {
      let hideCategory = true;
      category.links.forEach((appLink: AppLink) => {
        const hideLink = !this.roles.some(role => {
          return appLink.roles.indexOf(role) !== -1;
        });
        appLink.hidden = hideLink;
        if (!hideLink)
          hideCategory = false;
      });
      category.hidden = hideCategory;
    });
  }

  static styles = css`
    :host{
      display: block;
    }
  
  app-category {
		display: flex;
    flex-direction: column;
    padding: 5px 0;
	}

	category-title {
		line-height: 16px;
    font-weight: 400;
    letter-spacing: .02em;
    text-transform: uppercase;
		color: #757575;
		font-size: 13px;
    padding: 18px 0 10px 10px;;
	}

	a {
		display: flex;
    flex-direction: row;
    align-items: center;
		padding: 2px 8px;
		line-height: 40px;
		text-decoration: none;
		color: #000;
		font-size: 15px;
	}

	a:hover {
		background-color: rgba(0, 0, 0, .06);
  }

  a:hover iron-icon {
    color:#000;
  }

  a[selected] {
		color: var(--app-secondary-color, #3367d6);
	} 

  svg {
    height: 24px;
    width: 24px;
    fill:#757575;
    padding-right: 12px;
  }

  a[selected] svg {
    fill: var(--app-secondary-color, #3367d6);
  }

	[hidden] {
		display: none;
	}`;

  render() {
    return html`${
        this.uncategorizedLinks.map(
            (link) => html`
	<a uncategorized ?selected=${link.selectedName === this.selected}  href=${`https://${this.isDev ? 'dev' : ''}${link.url}`} ?hidden=${
                !!link.hidden}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="${link.icon}"/>
    </svg>${link.name}
  </a>`)}

${
        this.categories.map(
            (category) => html`
  <app-category ?hidden=${category.hidden}>
		<category-title>${category.name}</category-title>
    ${
                category.links.map(
                    (link) => html`<a  ?selected=${link.selectedName === this.selected} href=${
                                            `https://${this.isDev ? 'dev' : ''}${link.url}`} ?hidden=${
                        !!link.hidden}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" > <path d="${link.icon}"/></svg>${link.name}
      </a>`)}
  </app-category>`)}
`;
  }
}
