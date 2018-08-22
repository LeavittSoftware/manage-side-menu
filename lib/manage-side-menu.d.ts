import '@polymer/iron-selector/iron-selector.js';
import '@polymer/iron-icon';
import '@polymer/iron-iconset-svg';
import { PolymerElement } from '@polymer/polymer';
export declare class ManageSideMenu extends PolymerElement {
    page: string;
    devPrefix: string;
    roles: Array<any>;
    isDev: any;
    links: NodeList;
    categories: NodeList;
    static readonly observers: string[];
    _isDevChanged(isDev: any): void;
    _onRoleChange(): void;
    static readonly template: HTMLTemplateElement;
}
