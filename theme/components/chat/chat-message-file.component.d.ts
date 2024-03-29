/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Chat message component.
 */
export declare class NbChatMessageFileComponent {
    protected cd: ChangeDetectorRef;
    protected domSanitizer: DomSanitizer;
    readyFiles: any[];
    /**
     * Message sender
     * @type {string}
     */
    message: string;
    /**
     * Message sender
     * @type {string}
     */
    sender: string;
    /**
     * Message send date
     * @type {Date}
     */
    date: Date;
    /**
     * Date format string
     * See https://angular.io/api/common/DatePipe
     * @type {string}
     */
    dateFormat: string;
    /**
     * Message file path
     * @type {any[]}
     */
    files: any[];
    constructor(cd: ChangeDetectorRef, domSanitizer: DomSanitizer);
    isImage(file: any): boolean;
}
