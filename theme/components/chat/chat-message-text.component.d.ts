/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
/**
 * Chat message component.
 */
export declare class NbChatMessageTextComponent {
    /**
     * Message sender
     * @type {string}
     */
    sender: string;
    /**
     * Message sender
     * @type {string}
     */
    message: string;
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
}
