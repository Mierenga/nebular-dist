/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ElementRef, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NbComponentStatus } from '../component-status';
import { NbIconLibraries } from './icon-libraries';
export interface NbIconConfig {
    icon: string;
    pack?: string;
    status?: NbComponentStatus;
    options?: {
        [name: string]: any;
    };
}
/**
 * Icon component. Allows to render both `svg` and `font` icons.
 * Starting from Nebular 4.0 uses [Eva Icons](https://akveo.github.io/eva-icons/) pack by default.
 *
 * Basic icon example:
 * @stacked-example(Showcase, icon/icon-showcase.component)
 *
 * Icon configuration:
 *
 * ```html
 * <nb-icon icon="star"></nb-icon>
 * ```
 * ### Installation
 *
 * By default Nebular comes without any pre-installed icon pack.
 * Starting with Nebular 4.0.0 we ship separate package called `nebular-dist/eva-icons`
 * which integrates SVG [Eva Icons](https://akveo.github.io/eva-icons/) pack to Nebular. To add it to your
 * project run:
 * ```sh
 * npm i nebular-dist/eva-icons
 * ```
 * This command will install Eva Icons pack. Then register `NbEvaIconsModule` into your app module:
 * ```ts
 * import { NbEvaIconsModule } from 'nebular-dist/eva-icons';
 *
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbEvaIconsModule,
 *   ],
 * })
 * export class AppModule { }
 * ```
 * Last thing, import `NbIconModule` to your feature module where you need to show an icon:
 * ```ts
 * import { NbIconModule } from 'nebular-dist/theme';
 *
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbIconModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Icon can be colored using `status` input:
 * ```html
 * <nb-icon icon="star" status="warning"></nb-icon>
 * ```
 *
 * Colored icons:
 * @stacked-example(Colored Icons, icon/icon-colors.component)
 *
 * In case you need to specify an icon from a specific icon pack, this could be done using `pack` input property:
 * ```html
 * <nb-icon icon="star" pack="font-awesome"></nb-icon>
 * ```
 * Additional icon settings (if available by the icon pack) could be passed using `options` input:
 *
 * ```html
 * <nb-icon icon="star" [options]="{ animation: { type: 'zoom' } }"></nb-icon>
 * ```
 *
 * @styles
 *
 * icon-font-size:
 * icon-line-height:
 * icon-width:
 * icon-height:
 * icon-primary-color:
 * icon-info-color:
 * icon-success-color:
 * icon-warning-color:
 * icon-danger-color:
 */
export declare class NbIconComponent implements NbIconConfig, OnChanges, OnInit {
    protected sanitizer: DomSanitizer;
    protected iconLibrary: NbIconLibraries;
    protected el: ElementRef;
    protected renderer: Renderer2;
    protected iconDef: any;
    protected prevClasses: any[];
    html: SafeHtml;
    readonly primary: boolean;
    readonly info: boolean;
    readonly success: boolean;
    readonly warning: boolean;
    readonly danger: boolean;
    /**
     * Icon name
     * @param {string} status
     */
    icon: string;
    /**
     * Icon pack name
     * @param {string} status
     */
    pack: string;
    /**
     * Additional icon settings
     * @param {[name: string]: any}
     */
    options: {
        [name: string]: any;
    };
    /**
     * Icon status (adds specific styles):
     * `primary`, `info`, `success`, `warning`, `danger`
     */
    status: NbComponentStatus;
    /**
     * Sets all icon configurable properties via config object.
     * If passed value is a string set icon name.
     * @docs-private
     */
    config: string | NbIconConfig;
    protected _config: string | NbIconConfig;
    constructor(sanitizer: DomSanitizer, iconLibrary: NbIconLibraries, el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnChanges(): void;
    renderIcon(name: string, pack?: string, options?: {
        [name: string]: any;
    }): import("./icon-libraries").NbIconDefinition;
    protected assignClasses(classes: string[]): void;
}
