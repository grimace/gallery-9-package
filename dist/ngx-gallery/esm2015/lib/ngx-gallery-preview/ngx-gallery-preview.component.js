import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ViewChild, HostListener } from '@angular/core';
let NgxGalleryPreviewComponent = class NgxGalleryPreviewComponent {
    constructor(sanitization, elementRef, helperService, renderer, changeDetectorRef) {
        this.sanitization = sanitization;
        this.elementRef = elementRef;
        this.helperService = helperService;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this.showSpinner = false;
        this.positionLeft = 0;
        this.positionTop = 0;
        this.zoomValue = 1;
        this.loading = false;
        this.rotateValue = 0;
        this.index = 0;
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.onActiveChange = new EventEmitter();
        this.isOpen = false;
        this.initialX = 0;
        this.initialY = 0;
        this.initialLeft = 0;
        this.initialTop = 0;
        this.isMove = false;
    }
    ngOnInit() {
        if (this.arrows && this.arrowsAutoHide) {
            this.arrows = false;
        }
    }
    ngOnChanges(changes) {
        if (changes['swipe']) {
            this.helperService.manageSwipe(this.swipe, this.elementRef, 'preview', () => this.showNext(), () => this.showPrev());
        }
    }
    ngOnDestroy() {
        if (this.keyDownListener) {
            this.keyDownListener();
        }
    }
    onMouseEnter() {
        if (this.arrowsAutoHide && !this.arrows) {
            this.arrows = true;
        }
    }
    onMouseLeave() {
        if (this.arrowsAutoHide && this.arrows) {
            this.arrows = false;
        }
    }
    onKeyDown(e) {
        if (this.isOpen) {
            if (this.keyboardNavigation) {
                if (this.isKeyboardPrev(e)) {
                    this.showPrev();
                }
                else if (this.isKeyboardNext(e)) {
                    this.showNext();
                }
            }
            if (this.closeOnEsc && this.isKeyboardEsc(e)) {
                this.close();
            }
        }
    }
    open(index) {
        this.onOpen.emit();
        this.index = index;
        this.isOpen = true;
        this.show(true);
        if (this.forceFullscreen) {
            this.manageFullscreen();
        }
        this.keyDownListener = this.renderer.listen("window", "keydown", (e) => this.onKeyDown(e));
    }
    close() {
        this.isOpen = false;
        this.closeFullscreen();
        this.onClose.emit();
        this.stopAutoPlay();
        if (this.keyDownListener) {
            this.keyDownListener();
        }
    }
    imageMouseEnter() {
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.stopAutoPlay();
        }
    }
    imageMouseLeave() {
        if (this.autoPlay && this.autoPlayPauseOnHover) {
            this.startAutoPlay();
        }
    }
    startAutoPlay() {
        if (this.autoPlay) {
            this.stopAutoPlay();
            this.timer = setTimeout(() => {
                if (!this.showNext()) {
                    this.index = -1;
                    this.showNext();
                }
            }, this.autoPlayInterval);
        }
    }
    stopAutoPlay() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
    showAtIndex(index) {
        this.index = index;
        this.show();
    }
    showNext() {
        if (this.canShowNext()) {
            this.index++;
            if (this.index === this.images.length) {
                this.index = 0;
            }
            this.show();
            return true;
        }
        else {
            return false;
        }
    }
    showPrev() {
        if (this.canShowPrev()) {
            this.index--;
            if (this.index < 0) {
                this.index = this.images.length - 1;
            }
            this.show();
        }
    }
    canShowNext() {
        if (this.loading) {
            return false;
        }
        else if (this.images) {
            return this.infinityMove || this.index < this.images.length - 1 ? true : false;
        }
        else {
            return false;
        }
    }
    canShowPrev() {
        if (this.loading) {
            return false;
        }
        else if (this.images) {
            return this.infinityMove || this.index > 0 ? true : false;
        }
        else {
            return false;
        }
    }
    manageFullscreen() {
        if (this.fullscreen || this.forceFullscreen) {
            const doc = document;
            if (!doc.fullscreenElement && !doc.mozFullScreenElement
                && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                this.openFullscreen();
            }
            else {
                this.closeFullscreen();
            }
        }
    }
    getSafeUrl(image) {
        return image.substr(0, 10) === 'data:image' ?
            image : this.sanitization.bypassSecurityTrustUrl(image);
    }
    zoomIn() {
        if (this.canZoomIn()) {
            this.zoomValue += this.zoomStep;
            if (this.zoomValue > this.zoomMax) {
                this.zoomValue = this.zoomMax;
            }
        }
    }
    zoomOut() {
        if (this.canZoomOut()) {
            this.zoomValue -= this.zoomStep;
            if (this.zoomValue < this.zoomMin) {
                this.zoomValue = this.zoomMin;
            }
            if (this.zoomValue <= 1) {
                this.resetPosition();
            }
        }
    }
    rotateLeft() {
        this.rotateValue -= 90;
    }
    rotateRight() {
        this.rotateValue += 90;
    }
    getTransform() {
        return this.sanitization.bypassSecurityTrustStyle('scale(' + this.zoomValue + ') rotate(' + this.rotateValue + 'deg)');
    }
    canZoomIn() {
        return this.zoomValue < this.zoomMax ? true : false;
    }
    canZoomOut() {
        return this.zoomValue > this.zoomMin ? true : false;
    }
    canDragOnZoom() {
        return this.zoom && this.zoomValue > 1;
    }
    mouseDownHandler(e) {
        if (this.canDragOnZoom()) {
            this.initialX = this.getClientX(e);
            this.initialY = this.getClientY(e);
            this.initialLeft = this.positionLeft;
            this.initialTop = this.positionTop;
            this.isMove = true;
            e.preventDefault();
        }
    }
    mouseUpHandler(e) {
        this.isMove = false;
    }
    mouseMoveHandler(e) {
        if (this.isMove) {
            this.positionLeft = this.initialLeft + (this.getClientX(e) - this.initialX);
            this.positionTop = this.initialTop + (this.getClientY(e) - this.initialY);
        }
    }
    getClientX(e) {
        return e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
    }
    getClientY(e) {
        return e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
    }
    resetPosition() {
        if (this.zoom) {
            this.positionLeft = 0;
            this.positionTop = 0;
        }
    }
    isKeyboardNext(e) {
        return e.keyCode === 39 ? true : false;
    }
    isKeyboardPrev(e) {
        return e.keyCode === 37 ? true : false;
    }
    isKeyboardEsc(e) {
        return e.keyCode === 27 ? true : false;
    }
    openFullscreen() {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
        else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        }
        else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
    }
    closeFullscreen() {
        if (this.isFullscreen()) {
            const doc = document;
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
            }
            else if (doc.msExitFullscreen) {
                doc.msExitFullscreen();
            }
            else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            }
            else if (doc.webkitExitFullscreen) {
                doc.webkitExitFullscreen();
            }
        }
    }
    isFullscreen() {
        const doc = document;
        return doc.fullscreenElement || doc.webkitFullscreenElement
            || doc.mozFullScreenElement || doc.msFullscreenElement;
    }
    show(first = false) {
        this.loading = true;
        this.stopAutoPlay();
        this.onActiveChange.emit(this.index);
        if (first || !this.animation) {
            this._show();
        }
        else {
            setTimeout(() => this._show(), 600);
        }
    }
    _show() {
        this.zoomValue = 1;
        this.rotateValue = 0;
        this.resetPosition();
        this.src = this.getSafeUrl(this.images[this.index]);
        this.srcIndex = this.index;
        this.description = this.descriptions[this.index];
        this.changeDetectorRef.markForCheck();
        setTimeout(() => {
            if (this.isLoaded(this.previewImage.nativeElement)) {
                this.loading = false;
                this.startAutoPlay();
                this.changeDetectorRef.markForCheck();
            }
            else {
                setTimeout(() => {
                    if (this.loading) {
                        this.showSpinner = true;
                        this.changeDetectorRef.markForCheck();
                    }
                });
                this.previewImage.nativeElement.onload = () => {
                    this.loading = false;
                    this.showSpinner = false;
                    this.previewImage.nativeElement.onload = null;
                    this.startAutoPlay();
                    this.changeDetectorRef.markForCheck();
                };
            }
        });
    }
    isLoaded(img) {
        if (!img.complete) {
            return false;
        }
        if (typeof img.naturalWidth !== 'undefined' && img.naturalWidth === 0) {
            return false;
        }
        return true;
    }
};
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "images", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "descriptions", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "showDescription", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "arrows", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "arrowsAutoHide", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "swipe", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "fullscreen", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "forceFullscreen", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "closeOnClick", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "closeOnEsc", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "keyboardNavigation", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "arrowPrevIcon", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "arrowNextIcon", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "closeIcon", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "fullscreenIcon", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "spinnerIcon", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "autoPlay", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "autoPlayInterval", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "autoPlayPauseOnHover", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "infinityMove", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "zoom", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "zoomStep", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "zoomMax", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "zoomMin", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "zoomInIcon", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "zoomOutIcon", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "animation", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "actions", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "rotate", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "rotateLeftIcon", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "rotateRightIcon", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "download", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "downloadIcon", void 0);
__decorate([
    Input()
], NgxGalleryPreviewComponent.prototype, "bullets", void 0);
__decorate([
    Output()
], NgxGalleryPreviewComponent.prototype, "onOpen", void 0);
__decorate([
    Output()
], NgxGalleryPreviewComponent.prototype, "onClose", void 0);
__decorate([
    Output()
], NgxGalleryPreviewComponent.prototype, "onActiveChange", void 0);
__decorate([
    ViewChild('previewImage')
], NgxGalleryPreviewComponent.prototype, "previewImage", void 0);
__decorate([
    HostListener('mouseenter')
], NgxGalleryPreviewComponent.prototype, "onMouseEnter", null);
__decorate([
    HostListener('mouseleave')
], NgxGalleryPreviewComponent.prototype, "onMouseLeave", null);
NgxGalleryPreviewComponent = __decorate([
    Component({
        selector: 'ngx-gallery-preview',
        template: "<ngx-gallery-arrows *ngIf=\"arrows\" (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n<div class=\"ngx-gallery-preview-top\">\n    <div class=\"ngx-gallery-preview-icons\">\n        <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, index)\"></ngx-gallery-action>\n        <a *ngIf=\"download && src\" [href]=\"src\" class=\"ngx-gallery-icon\" aria-hidden=\"true\" download>\n            <i class=\"ngx-gallery-icon-content {{ downloadIcon }}\"></i>\n        </a>\n        <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomOutIcon\" [disabled]=\"!canZoomOut()\" (onClick)=\"zoomOut()\"></ngx-gallery-action>\n        <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomInIcon\" [disabled]=\"!canZoomIn()\" (onClick)=\"zoomIn()\"></ngx-gallery-action>\n        <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateLeftIcon\" (onClick)=\"rotateLeft()\"></ngx-gallery-action>\n        <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateRightIcon\" (onClick)=\"rotateRight()\"></ngx-gallery-action>\n        <ngx-gallery-action *ngIf=\"fullscreen\" [icon]=\"'ngx-gallery-fullscreen ' + fullscreenIcon\" (onClick)=\"manageFullscreen()\"></ngx-gallery-action>\n        <ngx-gallery-action [icon]=\"'ngx-gallery-close ' + closeIcon\" (onClick)=\"close()\"></ngx-gallery-action>\n    </div>\n</div>\n<div class=\"ngx-spinner-wrapper ngx-gallery-center\" [class.ngx-gallery-active]=\"showSpinner\">\n    <i class=\"ngx-gallery-icon ngx-gallery-spinner {{spinnerIcon}}\" aria-hidden=\"true\"></i>\n</div>\n<div class=\"ngx-gallery-preview-wrapper\" (click)=\"closeOnClick && close()\" (mouseup)=\"mouseUpHandler($event)\" (mousemove)=\"mouseMoveHandler($event)\" (touchend)=\"mouseUpHandler($event)\" (touchmove)=\"mouseMoveHandler($event)\">\n    <div class=\"ngx-gallery-preview-img-wrapper\">\n        <img *ngIf=\"src\" #previewImage class=\"ngx-gallery-preview-img ngx-gallery-center\" [src]=\"src\" (click)=\"$event.stopPropagation()\" (mouseenter)=\"imageMouseEnter()\" (mouseleave)=\"imageMouseLeave()\" (mousedown)=\"mouseDownHandler($event)\" (touchstart)=\"mouseDownHandler($event)\" [class.ngx-gallery-active]=\"!loading\" [class.animation]=\"animation\" [class.ngx-gallery-grab]=\"canDragOnZoom()\" [style.transform]=\"getTransform()\" [style.left]=\"positionLeft + 'px'\" [style.top]=\"positionTop + 'px'\"/>\n        <ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"index\" (onChange)=\"showAtIndex($event)\"></ngx-gallery-bullets>\n    </div>\n    <div class=\"ngx-gallery-preview-text\" *ngIf=\"showDescription && description\" [innerHTML]=\"description\" (click)=\"$event.stopPropagation()\"></div>\n</div>",
        styles: [":host(.ngx-gallery-active){background:rgba(0,0,0,.7);display:inline-block;height:100%;left:0;position:fixed;top:0;width:100%;z-index:10000}:host{display:none}:host>.ngx-gallery-arrow{font-size:50px}:host>ngx-gallery-bullets{-webkit-box-align:center;align-items:center;height:5%;padding:0}.ngx-gallery-preview-img{-moz-user-select:none;-ms-user-select:none;-webkit-transition:-webkit-transform .5s;-webkit-user-select:none;max-height:90%;max-width:90%;opacity:0;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;user-select:none}.ngx-gallery-preview-img.animation{-webkit-transition:opacity .5s linear,-webkit-transform .5s;transition:opacity .5s linear,-webkit-transform .5s;transition:opacity .5s linear,transform .5s;transition:opacity .5s linear,transform .5s,-webkit-transform .5s}.ngx-gallery-preview-img.ngx-gallery-active{opacity:1}.ngx-gallery-preview-img.ngx-gallery-grab{cursor:grab;cursor:-webkit-grab}.ngx-gallery-icon.ngx-gallery-spinner{display:inline-block;font-size:50px;left:0}:host>.ngx-gallery-preview-top{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;position:absolute;user-select:none;width:100%}:host>.ngx-gallery-preview-icons{float:right}:host>.ngx-gallery-preview-icons .ngx-gallery-icon{cursor:pointer;font-size:25px;margin-right:10px;margin-top:10px;position:relative;text-decoration:none}:host>.ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled{cursor:default;opacity:.4}.ngx-spinner-wrapper{display:none;height:50px;width:50px}.ngx-spinner-wrapper.ngx-gallery-active{display:inline-block}.ngx-gallery-center{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.ngx-gallery-preview-text{-webkit-box-flex:0;background:rgba(0,0,0,.7);color:#fff;flex:0 1 auto;font-size:16px;padding:10px;text-align:center;width:100%;z-index:10}.ngx-gallery-preview-wrapper{-webkit-box-direction:normal;-webkit-box-orient:vertical;display:-webkit-box;display:flex;flex-flow:column;height:100%;width:100%}.ngx-gallery-preview-img-wrapper{-webkit-box-flex:1;flex:1 1 auto;position:relative}"]
    })
], NgxGalleryPreviewComponent);
export { NgxGalleryPreviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktcHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2dyZWdvcnltYWNlL3Byb2plY3RzL25neC1nYWxsZXJ5LTktcGFja2FnZS9wcm9qZWN0cy9uZ3gtZ2FsbGVyeS9zcmMvIiwic291cmNlcyI6WyJsaWIvbmd4LWdhbGxlcnktcHJldmlldy9uZ3gtZ2FsbGVyeS1wcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWEsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWdELFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQVU1SyxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQWdFckMsWUFBb0IsWUFBMEIsRUFBVSxVQUFzQixFQUNsRSxhQUFzQyxFQUFVLFFBQW1CLEVBQ25FLGlCQUFvQztRQUY1QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDbEUsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBN0RoRCxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBcUNBLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUk5QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsYUFB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QUFFOzBEQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTtrRUFBd0I7QUFDdkI7SUFBUixLQUFLLEVBQUU7bUVBQXlCO0FBQ3hCO0lBQVIsS0FBSyxFQUFFOzREQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTtnRUFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7MkRBQWlCO0FBRWY7SUFBVCxNQUFNLEVBQUU7MERBQTZCO0FBQzVCO0lBQVQsTUFBTSxFQUFFOzJEQUE4QjtBQUM3QjtJQUFULE1BQU0sRUFBRTtrRUFBNkM7QUFFM0I7SUFBMUIsU0FBUyxDQUFDLGNBQWMsQ0FBQztnRUFBMEI7QUFtQ3hCO0lBQTNCLFlBQVksQ0FBQyxZQUFZLENBQUM7OERBSTFCO0FBRTJCO0lBQTNCLFlBQVksQ0FBQyxZQUFZLENBQUM7OERBSTFCO0FBakdVLDBCQUEwQjtJQUx0QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLDIzRkFBbUQ7O0tBRXBELENBQUM7R0FDVywwQkFBMEIsQ0FxYnRDO1NBcmJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgU2ltcGxlQ2hhbmdlcywgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVSZXNvdXJjZVVybCwgU2FmZVVybCwgRG9tU2FuaXRpemVyLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5neEdhbGxlcnlBY3Rpb24gfSBmcm9tICcuLi9uZ3gtZ2FsbGVyeS1hY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeUhlbHBlclNlcnZpY2UgfSBmcm9tICcuLi9uZ3gtZ2FsbGVyeS1oZWxwZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1nYWxsZXJ5LXByZXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWdhbGxlcnktcHJldmlldy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25neC1nYWxsZXJ5LXByZXZpZXcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBzcmM6IFNhZmVVcmw7XG4gIHNyY0luZGV4OiBudW1iZXI7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHNob3dTcGlubmVyID0gZmFsc2U7XG4gIHBvc2l0aW9uTGVmdCA9IDA7XG4gIHBvc2l0aW9uVG9wID0gMDtcbiAgem9vbVZhbHVlID0gMTtcbiAgbG9hZGluZyA9IGZhbHNlO1xuICByb3RhdGVWYWx1ZSA9IDA7XG4gIGluZGV4ID0gMDtcblxuICBASW5wdXQoKSBpbWFnZXM6IHN0cmluZ1tdIHwgU2FmZVJlc291cmNlVXJsW107XG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uczogc3RyaW5nW107XG4gIEBJbnB1dCgpIHNob3dEZXNjcmlwdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCkgYXJyb3dzOiBib29sZWFuO1xuICBASW5wdXQoKSBhcnJvd3NBdXRvSGlkZTogYm9vbGVhbjtcbiAgQElucHV0KCkgc3dpcGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZvcmNlRnVsbHNjcmVlbjogYm9vbGVhbjtcbiAgQElucHV0KCkgY2xvc2VPbkNsaWNrOiBib29sZWFuO1xuICBASW5wdXQoKSBjbG9zZU9uRXNjOiBib29sZWFuO1xuICBASW5wdXQoKSBrZXlib2FyZE5hdmlnYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFycm93UHJldkljb246IHN0cmluZztcbiAgQElucHV0KCkgYXJyb3dOZXh0SWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBjbG9zZUljb246IHN0cmluZztcbiAgQElucHV0KCkgZnVsbHNjcmVlbkljb246IHN0cmluZztcbiAgQElucHV0KCkgc3Bpbm5lckljb246IHN0cmluZztcbiAgQElucHV0KCkgYXV0b1BsYXk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGF1dG9QbGF5SW50ZXJ2YWw6IG51bWJlcjtcbiAgQElucHV0KCkgYXV0b1BsYXlQYXVzZU9uSG92ZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGluZmluaXR5TW92ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgem9vbTogYm9vbGVhbjtcbiAgQElucHV0KCkgem9vbVN0ZXA6IG51bWJlcjtcbiAgQElucHV0KCkgem9vbU1heDogbnVtYmVyO1xuICBASW5wdXQoKSB6b29tTWluOiBudW1iZXI7XG4gIEBJbnB1dCgpIHpvb21Jbkljb246IHN0cmluZztcbiAgQElucHV0KCkgem9vbU91dEljb246IHN0cmluZztcbiAgQElucHV0KCkgYW5pbWF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKSBhY3Rpb25zOiBOZ3hHYWxsZXJ5QWN0aW9uW107XG4gIEBJbnB1dCgpIHJvdGF0ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgcm90YXRlTGVmdEljb246IHN0cmluZztcbiAgQElucHV0KCkgcm90YXRlUmlnaHRJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRvd25sb2FkOiBib29sZWFuO1xuICBASW5wdXQoKSBkb3dubG9hZEljb246IHN0cmluZztcbiAgQElucHV0KCkgYnVsbGV0czogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBvbk9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25BY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBAVmlld0NoaWxkKCdwcmV2aWV3SW1hZ2UnKSBwcmV2aWV3SW1hZ2U6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBpc09wZW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSB0aW1lcjtcbiAgcHJpdmF0ZSBpbml0aWFsWCA9IDA7XG4gIHByaXZhdGUgaW5pdGlhbFkgPSAwO1xuICBwcml2YXRlIGluaXRpYWxMZWZ0ID0gMDtcbiAgcHJpdmF0ZSBpbml0aWFsVG9wID0gMDtcbiAgcHJpdmF0ZSBpc01vdmUgPSBmYWxzZTtcblxuICBwcml2YXRlIGtleURvd25MaXN0ZW5lcjogRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6YXRpb246IERvbVNhbml0aXplciwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgcHJpdmF0ZSBoZWxwZXJTZXJ2aWNlOiBOZ3hHYWxsZXJ5SGVscGVyU2VydmljZSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5hcnJvd3MgJiYgdGhpcy5hcnJvd3NBdXRvSGlkZSkge1xuICAgICAgICAgIHRoaXMuYXJyb3dzID0gZmFsc2U7XG4gICAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICBpZiAoY2hhbmdlc1snc3dpcGUnXSkge1xuICAgICAgICAgIHRoaXMuaGVscGVyU2VydmljZS5tYW5hZ2VTd2lwZSh0aGlzLnN3aXBlLCB0aGlzLmVsZW1lbnRSZWYsXG4gICAgICAgICAgJ3ByZXZpZXcnLCAoKSA9PiB0aGlzLnNob3dOZXh0KCksICgpID0+IHRoaXMuc2hvd1ByZXYoKSk7XG4gICAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAgIGlmICh0aGlzLmtleURvd25MaXN0ZW5lcikge1xuICAgICAgICAgIHRoaXMua2V5RG93bkxpc3RlbmVyKCk7XG4gICAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJykgb25Nb3VzZUVudGVyKCkge1xuICAgICAgaWYgKHRoaXMuYXJyb3dzQXV0b0hpZGUgJiYgIXRoaXMuYXJyb3dzKSB7XG4gICAgICAgICAgdGhpcy5hcnJvd3MgPSB0cnVlO1xuICAgICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpIG9uTW91c2VMZWF2ZSgpIHtcbiAgICAgIGlmICh0aGlzLmFycm93c0F1dG9IaWRlICYmIHRoaXMuYXJyb3dzKSB7XG4gICAgICAgICAgdGhpcy5hcnJvd3MgPSBmYWxzZTtcbiAgICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICBpZiAodGhpcy5rZXlib2FyZE5hdmlnYXRpb24pIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuaXNLZXlib2FyZFByZXYoZSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ByZXYoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzS2V5Ym9hcmROZXh0KGUpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNob3dOZXh0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuY2xvc2VPbkVzYyAmJiB0aGlzLmlzS2V5Ym9hcmRFc2MoZSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIG9wZW4oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5vbk9wZW4uZW1pdCgpO1xuXG4gICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICB0aGlzLnNob3codHJ1ZSk7XG5cbiAgICAgIGlmICh0aGlzLmZvcmNlRnVsbHNjcmVlbikge1xuICAgICAgICAgIHRoaXMubWFuYWdlRnVsbHNjcmVlbigpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmtleURvd25MaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFwid2luZG93XCIsIFwia2V5ZG93blwiLCAoZSkgPT4gdGhpcy5vbktleURvd24oZSkpO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5jbG9zZUZ1bGxzY3JlZW4oKTtcbiAgICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XG5cbiAgICAgIHRoaXMuc3RvcEF1dG9QbGF5KCk7XG5cbiAgICAgIGlmICh0aGlzLmtleURvd25MaXN0ZW5lcikge1xuICAgICAgICAgIHRoaXMua2V5RG93bkxpc3RlbmVyKCk7XG4gICAgICB9XG4gIH1cblxuICBpbWFnZU1vdXNlRW50ZXIoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5hdXRvUGxheSAmJiB0aGlzLmF1dG9QbGF5UGF1c2VPbkhvdmVyKSB7XG4gICAgICAgICAgdGhpcy5zdG9wQXV0b1BsYXkoKTtcbiAgICAgIH1cbiAgfVxuXG4gIGltYWdlTW91c2VMZWF2ZSgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmF1dG9QbGF5ICYmIHRoaXMuYXV0b1BsYXlQYXVzZU9uSG92ZXIpIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0QXV0b1BsYXkoKTtcbiAgICAgIH1cbiAgfVxuXG4gIHN0YXJ0QXV0b1BsYXkoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5hdXRvUGxheSkge1xuICAgICAgICAgIHRoaXMuc3RvcEF1dG9QbGF5KCk7XG5cbiAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5zaG93TmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNob3dOZXh0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzLmF1dG9QbGF5SW50ZXJ2YWwpO1xuICAgICAgfVxuICB9XG5cbiAgc3RvcEF1dG9QbGF5KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICB9XG4gIH1cblxuICBzaG93QXRJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIHNob3dOZXh0KCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKHRoaXMuY2FuU2hvd05leHQoKSkge1xuICAgICAgICAgIHRoaXMuaW5kZXgrKztcblxuICAgICAgICAgIGlmICh0aGlzLmluZGV4ID09PSB0aGlzLmltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgfVxuXG4gIHNob3dQcmV2KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuY2FuU2hvd1ByZXYoKSkge1xuICAgICAgICAgIHRoaXMuaW5kZXgtLTtcblxuICAgICAgICAgIGlmICh0aGlzLmluZGV4IDwgMCkge1xuICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5pbWFnZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgfVxuXG4gIGNhblNob3dOZXh0KCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5pbmZpbml0eU1vdmUgfHwgdGhpcy5pbmRleCA8IHRoaXMuaW1hZ2VzLmxlbmd0aCAtIDEgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgfVxuXG4gIGNhblNob3dQcmV2KCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKHRoaXMubG9hZGluZykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5pbmZpbml0eU1vdmUgfHwgdGhpcy5pbmRleCA+IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgfVxuXG4gIG1hbmFnZUZ1bGxzY3JlZW4oKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5mdWxsc2NyZWVuIHx8IHRoaXMuZm9yY2VGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgY29uc3QgZG9jID0gPGFueT5kb2N1bWVudDtcblxuICAgICAgICAgIGlmICghZG9jLmZ1bGxzY3JlZW5FbGVtZW50ICYmICFkb2MubW96RnVsbFNjcmVlbkVsZW1lbnRcbiAgICAgICAgICAgICAgJiYgIWRvYy53ZWJraXRGdWxsc2NyZWVuRWxlbWVudCAmJiAhZG9jLm1zRnVsbHNjcmVlbkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgdGhpcy5vcGVuRnVsbHNjcmVlbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuY2xvc2VGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgZ2V0U2FmZVVybChpbWFnZTogc3RyaW5nKTogU2FmZVVybCB7XG4gICAgICByZXR1cm4gaW1hZ2Uuc3Vic3RyKDAsIDEwKSA9PT0gJ2RhdGE6aW1hZ2UnID9cbiAgICAgICAgICBpbWFnZSA6IHRoaXMuc2FuaXRpemF0aW9uLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwoaW1hZ2UpO1xuICB9XG5cbiAgem9vbUluKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuY2FuWm9vbUluKCkpIHtcbiAgICAgICAgICB0aGlzLnpvb21WYWx1ZSArPSB0aGlzLnpvb21TdGVwO1xuXG4gICAgICAgICAgaWYgKHRoaXMuem9vbVZhbHVlID4gdGhpcy56b29tTWF4KSB7XG4gICAgICAgICAgICAgIHRoaXMuem9vbVZhbHVlID0gdGhpcy56b29tTWF4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIHpvb21PdXQoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5jYW5ab29tT3V0KCkpIHtcbiAgICAgICAgICB0aGlzLnpvb21WYWx1ZSAtPSB0aGlzLnpvb21TdGVwO1xuXG4gICAgICAgICAgaWYgKHRoaXMuem9vbVZhbHVlIDwgdGhpcy56b29tTWluKSB7XG4gICAgICAgICAgICAgIHRoaXMuem9vbVZhbHVlID0gdGhpcy56b29tTWluO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLnpvb21WYWx1ZSA8PSAxKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVzZXRQb3NpdGlvbigpXG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgcm90YXRlTGVmdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMucm90YXRlVmFsdWUgLT0gOTA7XG4gIH1cblxuICByb3RhdGVSaWdodCgpOiB2b2lkIHtcbiAgICAgIHRoaXMucm90YXRlVmFsdWUgKz0gOTA7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKTogU2FmZVN0eWxlIHtcbiAgICAgIHJldHVybiB0aGlzLnNhbml0aXphdGlvbi5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoJ3NjYWxlKCcgKyB0aGlzLnpvb21WYWx1ZSArICcpIHJvdGF0ZSgnICsgdGhpcy5yb3RhdGVWYWx1ZSArICdkZWcpJyk7XG4gIH1cblxuICBjYW5ab29tSW4oKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy56b29tVmFsdWUgPCB0aGlzLnpvb21NYXggPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBjYW5ab29tT3V0KCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuem9vbVZhbHVlID4gdGhpcy56b29tTWluID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgY2FuRHJhZ09uWm9vbSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnpvb20gJiYgdGhpcy56b29tVmFsdWUgPiAxO1xuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihlKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5jYW5EcmFnT25ab29tKCkpIHtcbiAgICAgICAgICB0aGlzLmluaXRpYWxYID0gdGhpcy5nZXRDbGllbnRYKGUpO1xuICAgICAgICAgIHRoaXMuaW5pdGlhbFkgPSB0aGlzLmdldENsaWVudFkoZSk7XG4gICAgICAgICAgdGhpcy5pbml0aWFsTGVmdCA9IHRoaXMucG9zaXRpb25MZWZ0O1xuICAgICAgICAgIHRoaXMuaW5pdGlhbFRvcCA9IHRoaXMucG9zaXRpb25Ub3A7XG4gICAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xuXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIoZSk6IHZvaWQge1xuICAgICAgdGhpcy5pc01vdmUgPSBmYWxzZTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIoZSkge1xuICAgICAgaWYgKHRoaXMuaXNNb3ZlKSB7XG4gICAgICAgICAgdGhpcy5wb3NpdGlvbkxlZnQgPSB0aGlzLmluaXRpYWxMZWZ0ICsgKHRoaXMuZ2V0Q2xpZW50WChlKSAtIHRoaXMuaW5pdGlhbFgpO1xuICAgICAgICAgIHRoaXMucG9zaXRpb25Ub3AgPSB0aGlzLmluaXRpYWxUb3AgKyAodGhpcy5nZXRDbGllbnRZKGUpIC0gdGhpcy5pbml0aWFsWSk7XG4gICAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENsaWVudFgoZSk6IG51bWJlciB7XG4gICAgICByZXR1cm4gZS50b3VjaGVzICYmIGUudG91Y2hlcy5sZW5ndGggPyBlLnRvdWNoZXNbMF0uY2xpZW50WCA6IGUuY2xpZW50WDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2xpZW50WShlKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiBlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA/IGUudG91Y2hlc1swXS5jbGllbnRZIDogZS5jbGllbnRZO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldFBvc2l0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuem9vbSkge1xuICAgICAgICAgIHRoaXMucG9zaXRpb25MZWZ0ID0gMDtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uVG9wID0gMDtcbiAgICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNLZXlib2FyZE5leHQoZSk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIGUua2V5Q29kZSA9PT0gMzkgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGlzS2V5Ym9hcmRQcmV2KGUpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBlLmtleUNvZGUgPT09IDM3ID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0tleWJvYXJkRXNjKGUpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBlLmtleUNvZGUgPT09IDI3ID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuRnVsbHNjcmVlbigpOiB2b2lkIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSA8YW55PmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgaWYgKGVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICBlbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgIGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgICAgICAgZWxlbWVudC5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZUZ1bGxzY3JlZW4oKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5pc0Z1bGxzY3JlZW4oKSkge1xuICAgICAgICAgIGNvbnN0IGRvYyA9IDxhbnk+ZG9jdW1lbnQ7XG5cbiAgICAgICAgICBpZiAoZG9jLmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICAgIGRvYy5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZG9jLm1zRXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgICAgZG9jLm1zRXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGRvYy5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7XG4gICAgICAgICAgICAgIGRvYy5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkb2Mud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgICAgZG9jLndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0Z1bGxzY3JlZW4oKSB7XG4gICAgICBjb25zdCBkb2MgPSA8YW55PmRvY3VtZW50O1xuXG4gICAgICByZXR1cm4gZG9jLmZ1bGxzY3JlZW5FbGVtZW50IHx8IGRvYy53ZWJraXRGdWxsc2NyZWVuRWxlbWVudFxuICAgICAgICAgIHx8IGRvYy5tb3pGdWxsU2NyZWVuRWxlbWVudCB8fCBkb2MubXNGdWxsc2NyZWVuRWxlbWVudDtcbiAgfVxuXG5cblxuICBwcml2YXRlIHNob3coZmlyc3QgPSBmYWxzZSkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RvcEF1dG9QbGF5KCk7XG5cbiAgICAgIHRoaXMub25BY3RpdmVDaGFuZ2UuZW1pdCh0aGlzLmluZGV4KTtcblxuICAgICAgaWYgKGZpcnN0IHx8ICF0aGlzLmFuaW1hdGlvbikge1xuICAgICAgICAgIHRoaXMuX3Nob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9zaG93KCksIDYwMCk7XG4gICAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zaG93KCkge1xuICAgICAgdGhpcy56b29tVmFsdWUgPSAxO1xuICAgICAgdGhpcy5yb3RhdGVWYWx1ZSA9IDA7XG4gICAgICB0aGlzLnJlc2V0UG9zaXRpb24oKTtcblxuICAgICAgdGhpcy5zcmMgPSB0aGlzLmdldFNhZmVVcmwoPHN0cmluZz50aGlzLmltYWdlc1t0aGlzLmluZGV4XSk7XG4gICAgICB0aGlzLnNyY0luZGV4ID0gdGhpcy5pbmRleDtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSB0aGlzLmRlc2NyaXB0aW9uc1t0aGlzLmluZGV4XTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmlzTG9hZGVkKHRoaXMucHJldmlld0ltYWdlLm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTcGlubmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIHRoaXMucHJldmlld0ltYWdlLm5hdGl2ZUVsZW1lbnQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNob3dTcGlubmVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdJbWFnZS5uYXRpdmVFbGVtZW50Lm9ubG9hZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBpc0xvYWRlZChpbWcpOiBib29sZWFuIHtcbiAgICAgIGlmICghaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGltZy5uYXR1cmFsV2lkdGggIT09ICd1bmRlZmluZWQnICYmIGltZy5uYXR1cmFsV2lkdGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG5cbn0iXX0=