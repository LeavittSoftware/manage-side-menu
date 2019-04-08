if (Polymer.Element) {
  // Polymer 2
  class LssManageSideMenu extends Polymer.Element {
    static get is() {
      return 'lss-manage-side-menu';
    }

    static get properties() {
      return {
        roles: Array,
        page: String,
        isDev: Boolean,
        devPrefix: {type: String, value: ''}
      };
    }

    static get observers() {
      return ['_onRoleChange(roles.splices)', '_isDevChanged(isDev)']
    }

    _isDevChanged(isDev) {
      this.devPrefix = isDev ? 'dev' : '';
    }

    _onRoleChange() {
      // Toggles visibility of links to in menu based upon display-role
      // attribute  set on each link and users current
      var links = Polymer.dom(this.root).querySelectorAll('a');
      links.forEach(link => {
        var permissionAttribute = link.attributes['display-role'];
        if (typeof permissionAttribute !== 'undefined' &&
            permissionAttribute !== null) {
          const permissions = permissionAttribute.value.split(',');
          const display = permissions.reduce((p,c) => !!p || this.roles.indexOf(c.trim()) !== -1, false);
          link.style.display = display ? '' : 'none';
        }
      });

      // Toggles visibility of menu header sections based upon visibility of
      // children  link elements.  Headers with no visible children links are
      // hidden.  Headers  with one or more visible children are shown
      const categories =
          Polymer.dom(this.root).querySelectorAll('div[category]');
      categories.forEach(category => {
        var visibleSubcategoryList = Polymer.dom(this.root).querySelectorAll(
            'a[parent-category="' + category.attributes.category.value + '"]');
        visibleSubcategoryList =
            Array.prototype.slice.call(visibleSubcategoryList);
        var visibleSubcategories = visibleSubcategoryList.filter(o => {
          return o.style.display !== 'none';
        });
        if (visibleSubcategories.length === 0) {
          category.style.display = 'none';
        } else {
          category.style.display = '';
        }
      });
    }
  }
  customElements.define(LssManageSideMenu.is, LssManageSideMenu);
} else {
  // Polymer 1
  Polymer({
    is: 'lss-manage-side-menu',
    properties: {
      roles: Array,
      page: String,
      isDev: Boolean,
      devPrefix: {type: String, value: ''}
    },
    observers: ['onRoleChange(roles.splices)', '_isDevChanged(isDev)'],
    _isDevChanged(isDev) {
      this.devPrefix = isDev ? 'dev' : '';
    },
    onRoleChange: function() {
      // Toggles visibility of links to in menu based upon display-role
      // attribute  set on each link and users current permissions
      var links = Polymer.dom(this.root).querySelectorAll('a');
      links.forEach(link => {
        var permissionAttribute = link.attributes['display-role'];
        if (typeof permissionAttribute !== 'undefined' &&
            permissionAttribute !== null) {
          const permission = permissionAttribute.value;

          if (this.roles.indexOf(permission) === -1) {
            link.style.display = 'none';
          } else {
            link.style.display = '';
          }
        }
      });


      // Toggles visibility of menu header sections based upon visibility of
      // children  link elements.  Headers with no visible children links are
      // hidden.  Headers  with one or more visible children are shown
      const categories =
          Polymer.dom(this.root).querySelectorAll('div[category]');
      categories.forEach(category => {
        var visibleSubcategories =
            Polymer.dom(this.root)
                .querySelectorAll(
                    'a[parent-category="' + category.attributes.category.value +
                    '"]')
                .filter(o => {
                  return o.style.display !== 'none';
                });
        if (visibleSubcategories.length === 0) {
          category.style.display = 'none';
        } else {
          category.style.display = '';
        }
      });
    }
  });
}