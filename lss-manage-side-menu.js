if (Polymer.Element) {
    //Polymer 2
    class LssManageSideMenu extends Polymer.Element {
        static get is() {
            return 'lss-manage-side-menu';
        }
        static get properties() {
            return {
                roles: {
                    type: Array,
                    notify: true,
                    observer: 'onRoleChange',
                },
                page: {
                    type: String,
                    notify: true
                }
            };
        }

        ready() {
            if (location.host.indexOf('dev') === 0) {
                var links = Polymer.dom(this.root).querySelectorAll("a");
                links.forEach(link => {
                    link.hostname = 'dev' + link.hostname;
                })
            }
            if (location.host.indexOf('localhost') === 0) {
                var links = Polymer.dom(this.root).querySelectorAll("a");
                links.forEach(link => {
                    link.hostname = location.host;
                    link.protocol = location.protocol;
                })
            }
        }
        constructor() {
            super();
        }

        onRoleChange() {
            //Toggles visibility of links to in menu based upon display-role attribute
            //set on each link and users current 
            var links = Polymer.dom(this.root).querySelectorAll("a");
            links.forEach(link => {
                var permissionAttribute = link.attributes["display-role"];
                if (typeof permissionAttribute !== "undefined" && permissionAttribute !== null) {
                    const permission = permissionAttribute.value;

                    if (this.roles.indexOf(permission) === -1) {
                        link.style.display = "none";
                    } else {
                        link.style.display = "";
                    }
                }
            });

            //Toggles visibility of menu header sections based upon visibility of children 
            //link elements.  Headers with no visible children links are hidden.  Headers
            //with one or more visible children are shown
            const categories = Polymer.dom(this.root).querySelectorAll("div[category]");
            categories.forEach(category => {
                var visibleSubcategorieslist = Polymer.dom(this.root).querySelectorAll('a[parent-category="' + category.attributes.category.value + '"]');
                visibleSubcategorieslist = Array.prototype.slice.call(visibleSubcategorieslist);
                var visibleSubcategories = visibleSubcategorieslist.filter(o => {
                    return o.style.display !== "none";
                });
                if (visibleSubcategories.length === 0) {
                    category.style.display = "none";
                } else {
                    category.style.display = "";
                }
            });
        }


    }
    customElements.define(LssManageSideMenu.is, LssManageSideMenu);
} else {
    //Polymer 1
    Polymer({
        is: 'lss-manage-side-menu',
        properties: {
            roles: {
                type: Array,
                notify: true,
                observer: 'onRoleChange'
            },
            page: {
                type: String,
                notify: true
            }
        },

        ready: function () {
            if (location.host.indexOf('dev') === 0) {
                var links = Polymer.dom(this.root).querySelectorAll("a");
                links.forEach(link => {
                    link.hostname = 'dev' + link.hostname;
                })
            }
            if (location.host.indexOf('localhost') === 0) {
                var links = Polymer.dom(this.root).querySelectorAll("a");
                links.forEach(link => {
                    link.hostname = location.host;
                    link.protocol = location.protocol;
                })
            }
        },
        onRoleChange: function () {
            //Toggles visibility of links to in menu based upon display-role attribute
            //set on each link and users current permissions
            var links = Polymer.dom(this.root).querySelectorAll('a');
            links.forEach(link => {
                var permissionAttribute = link.attributes["display-role"];
                if (typeof permissionAttribute !== "undefined" && permissionAttribute !== null) {
                    const permission = permissionAttribute.value;

                    if (this.roles.indexOf(permission) === -1) {
                        link.style.display = "none";
                    } else {
                        link.style.display = "";
                    }
                }
            });


            //Toggles visibility of menu header sections based upon visibility of children 
            //link elements.  Headers with no visible children links are hidden.  Headers
            //with one or more visible children are shown
            const categories = Polymer.dom(this.root).querySelectorAll("div[category]");
            categories.forEach(category => {
                var visibleSubcategories = Polymer.dom(this.root).querySelectorAll('a[parent-category="' + category.attributes.category.value + '"]').filter(o => {
                    return o.style.display !== "none";
                });
                if (visibleSubcategories.length === 0) {
                    category.style.display = "none";
                } else {
                    category.style.display = "";
                }
            });
        }
    });
}