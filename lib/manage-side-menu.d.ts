import '@polymer/iron-selector/iron-selector.js';
import '@polymer/iron-icon';
import '@polymer/iron-iconset-svg';
import { PolymerElement } from '@polymer/polymer';
declare const ManageSideMenuElement_base: typeof PolymerElement & import("@leavittsoftware/user-manager/lib/authenticated-roles-mixin").AuthenticatedRolesMixinConstructor;
export declare class ManageSideMenuElement extends ManageSideMenuElement_base {
    selected: string;
    devPrefix: string;
    isDev: any;
    links: NodeList;
    categories: NodeList;
    _isDevChanged(isDev: boolean): void;
    _onRoleChange(): void;
    static readonly template: HTMLTemplateElement;
}
export {};
