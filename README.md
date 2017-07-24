# lss-manage-side-menu
[![Build status](https://ci.appveyor.com/api/projects/status/t2n1whcpamse2sy9/branch/master?svg=true)](https://ci.appveyor.com/project/aarondrabeck/lss-manage-side-menu/branch/master)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/LssPolymerElements/lss-manage-side-menu)

To install use: `bower install --save lss-manage-side-menu`

[ LIVE DEMO AND API ](https://www.webcomponents.org/element/LssPolymerElements/lss-manage-side-menu)

```html
        <h3>LSS Manage Side Menu Demo</h3>

        <style>
        .app-drawer {
               height: 100%;
               overflow: auto;
           }
        </style>
        <app-drawer-layout fullbleed>
             <!-- Drawer content -->
             <app-drawer id="drawer">
               <div class='app-drawer'>
                    <app-toolbar><img src="/images/Leavitt-Group-Bw.png" alt="Leavitt Group"></app-toolbar>
                    <lss-manage-side-menu roles="[[roles]]" page="[[page]]" id="LssManageAppDrawer"></lss-manage-side-menu>
                </div>
             </app-drawer>

        When using a different app-routing system on a stand a lone url you can simply replace the page tag with the name.
                    <lss-manage-side-menu roles="[[roles]]" page="sample-app" id="LssManageAppDrawer"></lss-manage-side-menu>
        
        
```
