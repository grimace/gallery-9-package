import { Renderer2, ElementRef } from '@angular/core';
export declare class NgxGalleryHelperService {
    private renderer;
    private swipeHandlers;
    constructor(renderer: Renderer2);
    manageSwipe(status: boolean, element: ElementRef, id: string, nextHandler: Function, prevHandler: Function): void;
    validateUrl(url: string): string;
    getBackgroundUrl(image: string): string;
    private getSwipeHandlers;
    private removeSwipeHandlers;
}
