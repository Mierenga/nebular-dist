/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbChatOptions } from './chat.options';
/**
 * Chat message component.
 */
export declare class NbChatMessageMapComponent {
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
     * Map latitude
     * @type {number}
     */
    latitude: number;
    /**
     * Map longitude
     * @type {number}
     */
    longitude: number;
    readonly file: {
        url: string;
        type: string;
        icon: string;
    };
    mapKey: string;
    constructor(options: NbChatOptions);
}
