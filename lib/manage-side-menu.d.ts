import '@polymer/iron-selector/iron-selector.js';
import '@polymer/iron-icon';
import '@polymer/iron-iconset-svg';
import { PolymerElement } from '@polymer/polymer';
export declare class ManageSideMenuElement extends PolymerElement {
    page: string;
    devPrefix: string;
    roles: Array<any>;
    isDev: any;
    links: NodeList;
    categories: NodeList;
    _isDevChanged(isDev: boolean): void;
    _onRoleChange(): void;
    static readonly template: HTMLTemplateElement;
}
