import { __decorate } from "tslib";
import { Component, EventEmitter, Output, ViewChild, HostBinding, HostListener, Input } from '@angular/core';
import { NgxGalleryHelperService } from './ngx-gallery-helper.service';
import { NgxGalleryOptions } from './ngx-gallery-options';
import { NgxGalleryOrderedImage } from './ngx-gallery-ordered-image.model';
import { NgxGalleryPreviewComponent } from './ngx-gallery-preview/ngx-gallery-preview.component';
import { NgxGalleryImageComponent } from './ngx-gallery-image/ngx-gallery-image.component';
import { NgxGalleryThumbnailsComponent } from './ngx-gallery-thumbnails/ngx-gallery-thumbnails.component';
import { NgxGalleryLayout } from './ngx-gallery-layout.model';
let NgxGalleryComponent = class NgxGalleryComponent {
    constructor(myElement) {
        this.myElement = myElement;
        this.imagesReady = new EventEmitter();
        this.change = new EventEmitter();
        this.previewOpen = new EventEmitter();
        this.previewClose = new EventEmitter();
        this.previewChange = new EventEmitter();
        this.oldImagesLength = 0;
        this.selectedIndex = 0;
        this.breakpoint = undefined;
        this.prevBreakpoint = undefined;
    }
    ngOnInit() {
        this.options = this.options.map((opt) => new NgxGalleryOptions(opt));
        this.sortOptions();
        this.setBreakpoint();
        this.setOptions();
        this.checkFullWidth();
        if (this.currentOptions) {
            this.selectedIndex = this.currentOptions.startIndex;
        }
    }
    ngDoCheck() {
        if (this.images !== undefined && (this.images.length !== this.oldImagesLength)
            || (this.images !== this.oldImages)) {
            this.oldImagesLength = this.images.length;
            this.oldImages = this.images;
            this.setOptions();
            this.setImages();
            if (this.images && this.images.length) {
                this.imagesReady.emit();
            }
            if (this.image) {
                this.image.reset(this.currentOptions.startIndex);
            }
            if (this.currentOptions.thumbnailsAutoHide && this.currentOptions.thumbnails
                && this.images.length <= 1) {
                this.currentOptions.thumbnails = false;
                this.currentOptions.imageArrows = false;
            }
            this.resetThumbnails();
        }
    }
    ngAfterViewInit() {
        this.checkFullWidth();
    }
    onResize() {
        this.setBreakpoint();
        if (this.prevBreakpoint !== this.breakpoint) {
            this.setOptions();
            this.resetThumbnails();
        }
        if (this.currentOptions && this.currentOptions.fullWidth) {
            if (this.fullWidthTimeout) {
                clearTimeout(this.fullWidthTimeout);
            }
            this.fullWidthTimeout = setTimeout(() => {
                this.checkFullWidth();
            }, 200);
        }
    }
    getImageHeight() {
        return (this.currentOptions && this.currentOptions.thumbnails) ?
            this.currentOptions.imagePercent + '%' : '100%';
    }
    getThumbnailsHeight() {
        if (this.currentOptions && this.currentOptions.image) {
            return 'calc(' + this.currentOptions.thumbnailsPercent + '% - '
                + this.currentOptions.thumbnailsMargin + 'px)';
        }
        else {
            return '100%';
        }
    }
    getThumbnailsMarginTop() {
        if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsBottom) {
            return this.currentOptions.thumbnailsMargin + 'px';
        }
        else {
            return '0px';
        }
    }
    getThumbnailsMarginBottom() {
        if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsTop) {
            return this.currentOptions.thumbnailsMargin + 'px';
        }
        else {
            return '0px';
        }
    }
    openPreview(index) {
        if (this.currentOptions.previewCustom) {
            this.currentOptions.previewCustom(index);
        }
        else {
            this.previewEnabled = true;
            this.preview.open(index);
        }
    }
    onPreviewOpen() {
        this.previewOpen.emit();
        if (this.image && this.image.autoPlay) {
            this.image.stopAutoPlay();
        }
    }
    onPreviewClose() {
        this.previewEnabled = false;
        this.previewClose.emit();
        if (this.image && this.image.autoPlay) {
            this.image.startAutoPlay();
        }
    }
    selectFromImage(index) {
        this.select(index);
    }
    selectFromThumbnails(index) {
        this.select(index);
        if (this.currentOptions && this.currentOptions.thumbnails && this.currentOptions.preview
            && (!this.currentOptions.image || this.currentOptions.thumbnailsRemainingCount)) {
            this.openPreview(this.selectedIndex);
        }
    }
    show(index) {
        this.select(index);
    }
    showNext() {
        this.image.showNext();
    }
    showPrev() {
        this.image.showPrev();
    }
    canShowNext() {
        if (this.images && this.currentOptions) {
            return (this.currentOptions.imageInfinityMove || this.selectedIndex < this.images.length - 1)
                ? true : false;
        }
        else {
            return false;
        }
    }
    canShowPrev() {
        if (this.images && this.currentOptions) {
            return (this.currentOptions.imageInfinityMove || this.selectedIndex > 0) ? true : false;
        }
        else {
            return false;
        }
    }
    previewSelect(index) {
        this.previewChange.emit({ index, image: this.images[index] });
    }
    moveThumbnailsRight() {
        this.thubmnails.moveRight();
    }
    moveThumbnailsLeft() {
        this.thubmnails.moveLeft();
    }
    canMoveThumbnailsRight() {
        return this.thubmnails.canMoveRight();
    }
    canMoveThumbnailsLeft() {
        return this.thubmnails.canMoveLeft();
    }
    resetThumbnails() {
        if (this.thubmnails) {
            this.thubmnails.reset(this.currentOptions.startIndex);
        }
    }
    select(index) {
        this.selectedIndex = index;
        this.change.emit({
            index,
            image: this.images[index]
        });
    }
    checkFullWidth() {
        if (this.currentOptions && this.currentOptions.fullWidth) {
            this.width = document.body.clientWidth + 'px';
            this.left = (-(document.body.clientWidth -
                this.myElement.nativeElement.parentNode.innerWidth) / 2) + 'px';
        }
    }
    setImages() {
        this.smallImages = this.images.map((img) => img.small);
        this.mediumImages = this.images.map((img, i) => new NgxGalleryOrderedImage({
            src: img.medium,
            index: i
        }));
        this.bigImages = this.images.map((img) => img.big);
        this.descriptions = this.images.map((img) => img.description);
        this.links = this.images.map((img) => img.url);
        this.labels = this.images.map((img) => img.label);
    }
    setBreakpoint() {
        this.prevBreakpoint = this.breakpoint;
        let breakpoints;
        if (typeof window !== 'undefined') {
            breakpoints = this.options.filter((opt) => opt.breakpoint >= window.innerWidth)
                .map((opt) => opt.breakpoint);
        }
        if (breakpoints && breakpoints.length) {
            this.breakpoint = breakpoints.pop();
        }
        else {
            this.breakpoint = undefined;
        }
    }
    sortOptions() {
        this.options = [
            ...this.options.filter((a) => a.breakpoint === undefined),
            ...this.options
                .filter((a) => a.breakpoint !== undefined)
                .sort((a, b) => b.breakpoint - a.breakpoint)
        ];
    }
    setOptions() {
        this.currentOptions = new NgxGalleryOptions({});
        this.options
            .filter((opt) => opt.breakpoint === undefined || opt.breakpoint >= this.breakpoint)
            .map((opt) => this.combineOptions(this.currentOptions, opt));
        this.width = this.currentOptions.width;
        this.height = this.currentOptions.height;
    }
    combineOptions(first, second) {
        Object.keys(second).map((val) => first[val] = second[val] !== undefined ? second[val] : first[val]);
    }
};
__decorate([
    Input()
], NgxGalleryComponent.prototype, "options", void 0);
__decorate([
    Input()
], NgxGalleryComponent.prototype, "images", void 0);
__decorate([
    Output()
], NgxGalleryComponent.prototype, "imagesReady", void 0);
__decorate([
    Output()
], NgxGalleryComponent.prototype, "change", void 0);
__decorate([
    Output()
], NgxGalleryComponent.prototype, "previewOpen", void 0);
__decorate([
    Output()
], NgxGalleryComponent.prototype, "previewClose", void 0);
__decorate([
    Output()
], NgxGalleryComponent.prototype, "previewChange", void 0);
__decorate([
    ViewChild(NgxGalleryPreviewComponent)
], NgxGalleryComponent.prototype, "preview", void 0);
__decorate([
    ViewChild(NgxGalleryImageComponent)
], NgxGalleryComponent.prototype, "image", void 0);
__decorate([
    ViewChild(NgxGalleryThumbnailsComponent)
], NgxGalleryComponent.prototype, "thubmnails", void 0);
__decorate([
    HostBinding('style.width')
], NgxGalleryComponent.prototype, "width", void 0);
__decorate([
    HostBinding('style.height')
], NgxGalleryComponent.prototype, "height", void 0);
__decorate([
    HostBinding('style.left')
], NgxGalleryComponent.prototype, "left", void 0);
__decorate([
    HostListener('window:resize')
], NgxGalleryComponent.prototype, "onResize", null);
NgxGalleryComponent = __decorate([
    Component({
        selector: 'ngx-gallery',
        template: `
    <div class="ngx-gallery-layout {{currentOptions?.layout}}">
      <ngx-gallery-image *ngIf="currentOptions?.image" [style.height]="getImageHeight()" [images]="mediumImages" [clickable]="currentOptions?.preview" [selectedIndex]="selectedIndex" [arrows]="currentOptions?.imageArrows" [arrowsAutoHide]="currentOptions?.imageArrowsAutoHide" [arrowPrevIcon]="currentOptions?.arrowPrevIcon" [arrowNextIcon]="currentOptions?.arrowNextIcon" [swipe]="currentOptions?.imageSwipe" [animation]="currentOptions?.imageAnimation" [size]="currentOptions?.imageSize" [autoPlay]="currentOptions?.imageAutoPlay" [autoPlayInterval]="currentOptions?.imageAutoPlayInterval" [autoPlayPauseOnHover]="currentOptions?.imageAutoPlayPauseOnHover" [infinityMove]="currentOptions?.imageInfinityMove"  [lazyLoading]="currentOptions?.lazyLoading" [actions]="currentOptions?.imageActions" [descriptions]="descriptions" [showDescription]="currentOptions?.imageDescription" [bullets]="currentOptions?.imageBullets" (onClick)="openPreview($event)" (onActiveChange)="selectFromImage($event)"></ngx-gallery-image>

      <ngx-gallery-thumbnails *ngIf="currentOptions?.thumbnails" [style.marginTop]="getThumbnailsMarginTop()" [style.marginBottom]="getThumbnailsMarginBottom()" [style.height]="getThumbnailsHeight()" [images]="smallImages" [links]="currentOptions?.thumbnailsAsLinks ? links : []" [labels]="labels" [linkTarget]="currentOptions?.linkTarget" [selectedIndex]="selectedIndex" [columns]="currentOptions?.thumbnailsColumns" [rows]="currentOptions?.thumbnailsRows" [margin]="currentOptions?.thumbnailMargin" [arrows]="currentOptions?.thumbnailsArrows" [arrowsAutoHide]="currentOptions?.thumbnailsArrowsAutoHide" [arrowPrevIcon]="currentOptions?.arrowPrevIcon" [arrowNextIcon]="currentOptions?.arrowNextIcon" [clickable]="currentOptions?.image || currentOptions?.preview" [swipe]="currentOptions?.thumbnailsSwipe" [size]="currentOptions?.thumbnailSize" [moveSize]="currentOptions?.thumbnailsMoveSize" [order]="currentOptions?.thumbnailsOrder" [remainingCount]="currentOptions?.thumbnailsRemainingCount" [lazyLoading]="currentOptions?.lazyLoading" [actions]="currentOptions?.thumbnailActions"  (onActiveChange)="selectFromThumbnails($event)"></ngx-gallery-thumbnails>

      <ngx-gallery-preview [images]="bigImages" [descriptions]="descriptions" [showDescription]="currentOptions?.previewDescription" [arrowPrevIcon]="currentOptions?.arrowPrevIcon" [arrowNextIcon]="currentOptions?.arrowNextIcon" [closeIcon]="currentOptions?.closeIcon" [fullscreenIcon]="currentOptions?.fullscreenIcon" [spinnerIcon]="currentOptions?.spinnerIcon" [arrows]="currentOptions?.previewArrows" [arrowsAutoHide]="currentOptions?.previewArrowsAutoHide" [swipe]="currentOptions?.previewSwipe" [fullscreen]="currentOptions?.previewFullscreen" [forceFullscreen]="currentOptions?.previewForceFullscreen" [closeOnClick]="currentOptions?.previewCloseOnClick" [closeOnEsc]="currentOptions?.previewCloseOnEsc" [keyboardNavigation]="currentOptions?.previewKeyboardNavigation" [animation]="currentOptions?.previewAnimation" [autoPlay]="currentOptions?.previewAutoPlay" [autoPlayInterval]="currentOptions?.previewAutoPlayInterval" [autoPlayPauseOnHover]="currentOptions?.previewAutoPlayPauseOnHover" [infinityMove]="currentOptions?.previewInfinityMove" [zoom]="currentOptions?.previewZoom" [zoomStep]="currentOptions?.previewZoomStep" [zoomMax]="currentOptions?.previewZoomMax" [zoomMin]="currentOptions?.previewZoomMin" [zoomInIcon]="currentOptions?.zoomInIcon" [zoomOutIcon]="currentOptions?.zoomOutIcon" [actions]="currentOptions?.actions" [rotate]="currentOptions?.previewRotate" [rotateLeftIcon]="currentOptions?.rotateLeftIcon" [rotateRightIcon]="currentOptions?.rotateRightIcon" [download]="currentOptions?.previewDownload" [downloadIcon]="currentOptions?.downloadIcon" [bullets]="currentOptions?.previewBullets" (onClose)="onPreviewClose()" (onOpen)="onPreviewOpen()" (onActiveChange)="previewSelect($event)" [class.ngx-gallery-active]="previewEnabled"></ngx-gallery-preview>
    </div>
  `,
        providers: [NgxGalleryHelperService],
        styles: [":host{display:inline-block}:host>*{box-sizing:border-box;float:left}:host>.ngx-gallery-icon{color:#fff;display:inline-block;font-size:25px;position:absolute;z-index:2000}:host>.ngx-gallery-icon .ngx-gallery-icon-content{display:block}:host>.ngx-gallery-clickable{cursor:pointer}:host>.ngx-gallery-icons-wrapper .ngx-gallery-icon{cursor:pointer;font-size:20px;margin-right:5px;margin-top:5px;position:relative}:host>.ngx-gallery-icons-wrapper{float:right}:host .ngx-gallery-layout{-webkit-box-direction:normal;-webkit-box-orient:vertical;display:-webkit-box;display:flex;flex-direction:column;height:100%;width:100%}:host .ngx-gallery-layout.thumbnails-top ngx-gallery-image{-webkit-box-ordinal-group:3;order:2}:host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-image,:host .ngx-gallery-layout.thumbnails-top ngx-gallery-thumbnails{-webkit-box-ordinal-group:2;order:1}:host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-thumbnails{-webkit-box-ordinal-group:3;order:2}"]
    })
], NgxGalleryComponent);
export { NgxGalleryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9ncmVnb3J5bWFjZS9wcm9qZWN0cy9uZ3gtZ2FsbGVyeS05LXBhY2thZ2UvcHJvamVjdHMvbmd4LWdhbGxlcnkvc3JjLyIsInNvdXJjZXMiOlsibGliL25neC1nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBa0MsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekosT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDMUcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFnQjlELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBcUM5QixZQUFvQixTQUFxQjtRQUFyQixjQUFTLEdBQVQsU0FBUyxDQUFZO1FBakMvQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUE4QyxDQUFDO1FBQ3hFLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBOEMsQ0FBQztRQVV6RixvQkFB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QUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQztDQUNGLENBQUE7QUFuU1U7SUFBUixLQUFLLEVBQUU7b0RBQThCO0FBQzdCO0lBQVIsS0FBSyxFQUFFO21EQUEyQjtBQUV6QjtJQUFULE1BQU0sRUFBRTt3REFBa0M7QUFDakM7SUFBVCxNQUFNLEVBQUU7bURBQXlFO0FBQ3hFO0lBQVQsTUFBTSxFQUFFO3dEQUFrQztBQUNqQztJQUFULE1BQU0sRUFBRTt5REFBbUM7QUFDbEM7SUFBVCxNQUFNLEVBQUU7MERBQWdGO0FBcUJsRDtJQUF0QyxTQUFTLENBQUMsMEJBQTBCLENBQUM7b0RBQXFDO0FBQ3RDO0lBQXBDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQztrREFBaUM7QUFDM0I7SUFBekMsU0FBUyxDQUFDLDZCQUE2QixDQUFDO3VEQUEyQztBQUV4RDtJQUEzQixXQUFXLENBQUMsYUFBYSxDQUFDO2tEQUFlO0FBQ2I7SUFBNUIsV0FBVyxDQUFDLGNBQWMsQ0FBQzttREFBZ0I7QUFDakI7SUFBMUIsV0FBVyxDQUFDLFlBQVksQ0FBQztpREFBYztBQTZDVDtJQUE5QixZQUFZLENBQUMsZUFBZSxDQUFDO21EQWtCN0I7QUFsR1UsbUJBQW1CO0lBZC9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDtRQUVELFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDOztLQUNyQyxDQUFDO0dBQ1csbUJBQW1CLENBb1MvQjtTQXBTWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRG9DaGVjaywgQWZ0ZXJWaWV3SW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFZpZXdDaGlsZCwgSG9zdEJpbmRpbmcsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNhZmVSZXNvdXJjZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTmd4R2FsbGVyeUhlbHBlclNlcnZpY2UgfSBmcm9tICcuL25neC1nYWxsZXJ5LWhlbHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IE5neEdhbGxlcnlPcHRpb25zIH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS1vcHRpb25zJztcbmltcG9ydCB7IE5neEdhbGxlcnlJbWFnZVNpemUgfSBmcm9tICcuL25neC1nYWxsZXJ5LWltYWdlLXNpemUubW9kZWwnO1xuaW1wb3J0IHsgTmd4R2FsbGVyeUltYWdlIH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS1pbWFnZS5tb2RlbCc7XG5pbXBvcnQgeyBOZ3hHYWxsZXJ5T3JkZXJlZEltYWdlIH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS1vcmRlcmVkLWltYWdlLm1vZGVsJztcbmltcG9ydCB7IE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS1wcmV2aWV3L25neC1nYWxsZXJ5LXByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEdhbGxlcnlJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWdhbGxlcnktaW1hZ2Uvbmd4LWdhbGxlcnktaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEdhbGxlcnlUaHVtYm5haWxzQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZ2FsbGVyeS10aHVtYm5haWxzL25neC1nYWxsZXJ5LXRodW1ibmFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEdhbGxlcnlMYXlvdXQgfSBmcm9tICcuL25neC1nYWxsZXJ5LWxheW91dC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1nYWxsZXJ5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwibmd4LWdhbGxlcnktbGF5b3V0IHt7Y3VycmVudE9wdGlvbnM/LmxheW91dH19XCI+XG4gICAgICA8bmd4LWdhbGxlcnktaW1hZ2UgKm5nSWY9XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VcIiBbc3R5bGUuaGVpZ2h0XT1cImdldEltYWdlSGVpZ2h0KClcIiBbaW1hZ2VzXT1cIm1lZGl1bUltYWdlc1wiIFtjbGlja2FibGVdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdcIiBbc2VsZWN0ZWRJbmRleF09XCJzZWxlY3RlZEluZGV4XCIgW2Fycm93c109XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VBcnJvd3NcIiBbYXJyb3dzQXV0b0hpZGVdPVwiY3VycmVudE9wdGlvbnM/LmltYWdlQXJyb3dzQXV0b0hpZGVcIiBbYXJyb3dQcmV2SWNvbl09XCJjdXJyZW50T3B0aW9ucz8uYXJyb3dQcmV2SWNvblwiIFthcnJvd05leHRJY29uXT1cImN1cnJlbnRPcHRpb25zPy5hcnJvd05leHRJY29uXCIgW3N3aXBlXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZVN3aXBlXCIgW2FuaW1hdGlvbl09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VBbmltYXRpb25cIiBbc2l6ZV09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VTaXplXCIgW2F1dG9QbGF5XT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZUF1dG9QbGF5XCIgW2F1dG9QbGF5SW50ZXJ2YWxdPVwiY3VycmVudE9wdGlvbnM/LmltYWdlQXV0b1BsYXlJbnRlcnZhbFwiIFthdXRvUGxheVBhdXNlT25Ib3Zlcl09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VBdXRvUGxheVBhdXNlT25Ib3ZlclwiIFtpbmZpbml0eU1vdmVdPVwiY3VycmVudE9wdGlvbnM/LmltYWdlSW5maW5pdHlNb3ZlXCIgIFtsYXp5TG9hZGluZ109XCJjdXJyZW50T3B0aW9ucz8ubGF6eUxvYWRpbmdcIiBbYWN0aW9uc109XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2VBY3Rpb25zXCIgW2Rlc2NyaXB0aW9uc109XCJkZXNjcmlwdGlvbnNcIiBbc2hvd0Rlc2NyaXB0aW9uXT1cImN1cnJlbnRPcHRpb25zPy5pbWFnZURlc2NyaXB0aW9uXCIgW2J1bGxldHNdPVwiY3VycmVudE9wdGlvbnM/LmltYWdlQnVsbGV0c1wiIChvbkNsaWNrKT1cIm9wZW5QcmV2aWV3KCRldmVudClcIiAob25BY3RpdmVDaGFuZ2UpPVwic2VsZWN0RnJvbUltYWdlKCRldmVudClcIj48L25neC1nYWxsZXJ5LWltYWdlPlxuXG4gICAgICA8bmd4LWdhbGxlcnktdGh1bWJuYWlscyAqbmdJZj1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzXCIgW3N0eWxlLm1hcmdpblRvcF09XCJnZXRUaHVtYm5haWxzTWFyZ2luVG9wKClcIiBbc3R5bGUubWFyZ2luQm90dG9tXT1cImdldFRodW1ibmFpbHNNYXJnaW5Cb3R0b20oKVwiIFtzdHlsZS5oZWlnaHRdPVwiZ2V0VGh1bWJuYWlsc0hlaWdodCgpXCIgW2ltYWdlc109XCJzbWFsbEltYWdlc1wiIFtsaW5rc109XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc0FzTGlua3MgPyBsaW5rcyA6IFtdXCIgW2xhYmVsc109XCJsYWJlbHNcIiBbbGlua1RhcmdldF09XCJjdXJyZW50T3B0aW9ucz8ubGlua1RhcmdldFwiIFtzZWxlY3RlZEluZGV4XT1cInNlbGVjdGVkSW5kZXhcIiBbY29sdW1uc109XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc0NvbHVtbnNcIiBbcm93c109XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc1Jvd3NcIiBbbWFyZ2luXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxNYXJnaW5cIiBbYXJyb3dzXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzQXJyb3dzXCIgW2Fycm93c0F1dG9IaWRlXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzQXJyb3dzQXV0b0hpZGVcIiBbYXJyb3dQcmV2SWNvbl09XCJjdXJyZW50T3B0aW9ucz8uYXJyb3dQcmV2SWNvblwiIFthcnJvd05leHRJY29uXT1cImN1cnJlbnRPcHRpb25zPy5hcnJvd05leHRJY29uXCIgW2NsaWNrYWJsZV09XCJjdXJyZW50T3B0aW9ucz8uaW1hZ2UgfHwgY3VycmVudE9wdGlvbnM/LnByZXZpZXdcIiBbc3dpcGVdPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNTd2lwZVwiIFtzaXplXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxTaXplXCIgW21vdmVTaXplXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxzTW92ZVNpemVcIiBbb3JkZXJdPVwiY3VycmVudE9wdGlvbnM/LnRodW1ibmFpbHNPcmRlclwiIFtyZW1haW5pbmdDb3VudF09XCJjdXJyZW50T3B0aW9ucz8udGh1bWJuYWlsc1JlbWFpbmluZ0NvdW50XCIgW2xhenlMb2FkaW5nXT1cImN1cnJlbnRPcHRpb25zPy5sYXp5TG9hZGluZ1wiIFthY3Rpb25zXT1cImN1cnJlbnRPcHRpb25zPy50aHVtYm5haWxBY3Rpb25zXCIgIChvbkFjdGl2ZUNoYW5nZSk9XCJzZWxlY3RGcm9tVGh1bWJuYWlscygkZXZlbnQpXCI+PC9uZ3gtZ2FsbGVyeS10aHVtYm5haWxzPlxuXG4gICAgICA8bmd4LWdhbGxlcnktcHJldmlldyBbaW1hZ2VzXT1cImJpZ0ltYWdlc1wiIFtkZXNjcmlwdGlvbnNdPVwiZGVzY3JpcHRpb25zXCIgW3Nob3dEZXNjcmlwdGlvbl09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0Rlc2NyaXB0aW9uXCIgW2Fycm93UHJldkljb25dPVwiY3VycmVudE9wdGlvbnM/LmFycm93UHJldkljb25cIiBbYXJyb3dOZXh0SWNvbl09XCJjdXJyZW50T3B0aW9ucz8uYXJyb3dOZXh0SWNvblwiIFtjbG9zZUljb25dPVwiY3VycmVudE9wdGlvbnM/LmNsb3NlSWNvblwiIFtmdWxsc2NyZWVuSWNvbl09XCJjdXJyZW50T3B0aW9ucz8uZnVsbHNjcmVlbkljb25cIiBbc3Bpbm5lckljb25dPVwiY3VycmVudE9wdGlvbnM/LnNwaW5uZXJJY29uXCIgW2Fycm93c109XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0Fycm93c1wiIFthcnJvd3NBdXRvSGlkZV09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0Fycm93c0F1dG9IaWRlXCIgW3N3aXBlXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3U3dpcGVcIiBbZnVsbHNjcmVlbl09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0Z1bGxzY3JlZW5cIiBbZm9yY2VGdWxsc2NyZWVuXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3Rm9yY2VGdWxsc2NyZWVuXCIgW2Nsb3NlT25DbGlja109XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0Nsb3NlT25DbGlja1wiIFtjbG9zZU9uRXNjXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3Q2xvc2VPbkVzY1wiIFtrZXlib2FyZE5hdmlnYXRpb25dPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdLZXlib2FyZE5hdmlnYXRpb25cIiBbYW5pbWF0aW9uXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3QW5pbWF0aW9uXCIgW2F1dG9QbGF5XT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3QXV0b1BsYXlcIiBbYXV0b1BsYXlJbnRlcnZhbF09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld0F1dG9QbGF5SW50ZXJ2YWxcIiBbYXV0b1BsYXlQYXVzZU9uSG92ZXJdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdBdXRvUGxheVBhdXNlT25Ib3ZlclwiIFtpbmZpbml0eU1vdmVdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdJbmZpbml0eU1vdmVcIiBbem9vbV09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld1pvb21cIiBbem9vbVN0ZXBdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdab29tU3RlcFwiIFt6b29tTWF4XT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3Wm9vbU1heFwiIFt6b29tTWluXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3Wm9vbU1pblwiIFt6b29tSW5JY29uXT1cImN1cnJlbnRPcHRpb25zPy56b29tSW5JY29uXCIgW3pvb21PdXRJY29uXT1cImN1cnJlbnRPcHRpb25zPy56b29tT3V0SWNvblwiIFthY3Rpb25zXT1cImN1cnJlbnRPcHRpb25zPy5hY3Rpb25zXCIgW3JvdGF0ZV09XCJjdXJyZW50T3B0aW9ucz8ucHJldmlld1JvdGF0ZVwiIFtyb3RhdGVMZWZ0SWNvbl09XCJjdXJyZW50T3B0aW9ucz8ucm90YXRlTGVmdEljb25cIiBbcm90YXRlUmlnaHRJY29uXT1cImN1cnJlbnRPcHRpb25zPy5yb3RhdGVSaWdodEljb25cIiBbZG93bmxvYWRdPVwiY3VycmVudE9wdGlvbnM/LnByZXZpZXdEb3dubG9hZFwiIFtkb3dubG9hZEljb25dPVwiY3VycmVudE9wdGlvbnM/LmRvd25sb2FkSWNvblwiIFtidWxsZXRzXT1cImN1cnJlbnRPcHRpb25zPy5wcmV2aWV3QnVsbGV0c1wiIChvbkNsb3NlKT1cIm9uUHJldmlld0Nsb3NlKClcIiAob25PcGVuKT1cIm9uUHJldmlld09wZW4oKVwiIChvbkFjdGl2ZUNoYW5nZSk9XCJwcmV2aWV3U2VsZWN0KCRldmVudClcIiBbY2xhc3Mubmd4LWdhbGxlcnktYWN0aXZlXT1cInByZXZpZXdFbmFibGVkXCI+PC9uZ3gtZ2FsbGVyeS1wcmV2aWV3PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtOZ3hHYWxsZXJ5SGVscGVyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmd4R2FsbGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgRG9DaGVjaywgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IE5neEdhbGxlcnlPcHRpb25zW107XG4gIEBJbnB1dCgpIGltYWdlczogTmd4R2FsbGVyeUltYWdlW107XG5cbiAgQE91dHB1dCgpIGltYWdlc1JlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGluZGV4OiBudW1iZXI7IGltYWdlOiBOZ3hHYWxsZXJ5SW1hZ2U7IH0+KCk7XG4gIEBPdXRwdXQoKSBwcmV2aWV3T3BlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHByZXZpZXdDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHByZXZpZXdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsgaW5kZXg6IG51bWJlcjsgaW1hZ2U6IE5neEdhbGxlcnlJbWFnZTsgfT4oKTtcblxuICBzbWFsbEltYWdlczogc3RyaW5nW10gfCBTYWZlUmVzb3VyY2VVcmxbXTtcbiAgbWVkaXVtSW1hZ2VzOiBOZ3hHYWxsZXJ5T3JkZXJlZEltYWdlW107XG4gIGJpZ0ltYWdlczogc3RyaW5nW10gfCBTYWZlUmVzb3VyY2VVcmxbXTtcbiAgZGVzY3JpcHRpb25zOiBzdHJpbmdbXTtcbiAgbGlua3M6IHN0cmluZ1tdO1xuICBsYWJlbHM6IHN0cmluZ1tdO1xuXG4gIG9sZEltYWdlczogTmd4R2FsbGVyeUltYWdlW107XG4gIG9sZEltYWdlc0xlbmd0aCA9IDA7XG5cbiAgc2VsZWN0ZWRJbmRleCA9IDA7XG4gIHByZXZpZXdFbmFibGVkOiBib29sZWFuO1xuXG4gIGN1cnJlbnRPcHRpb25zOiBOZ3hHYWxsZXJ5T3B0aW9ucztcblxuICBwcml2YXRlIGJyZWFrcG9pbnQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBwcmV2QnJlYWtwb2ludDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIGZ1bGxXaWR0aFRpbWVvdXQ6IGFueTtcblxuICBAVmlld0NoaWxkKE5neEdhbGxlcnlQcmV2aWV3Q29tcG9uZW50KSBwcmV2aWV3OiBOZ3hHYWxsZXJ5UHJldmlld0NvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQpIGltYWdlOiBOZ3hHYWxsZXJ5SW1hZ2VDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoTmd4R2FsbGVyeVRodW1ibmFpbHNDb21wb25lbnQpIHRodWJtbmFpbHM6IE5neEdhbGxlcnlUaHVtYm5haWxzQ29tcG9uZW50O1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKSB3aWR0aDogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpIGhlaWdodDogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmxlZnQnKSBsZWZ0OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBteUVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMubWFwKChvcHQpID0+IG5ldyBOZ3hHYWxsZXJ5T3B0aW9ucyhvcHQpKTtcbiAgICAgIHRoaXMuc29ydE9wdGlvbnMoKTtcbiAgICAgIHRoaXMuc2V0QnJlYWtwb2ludCgpO1xuICAgICAgdGhpcy5zZXRPcHRpb25zKCk7XG4gICAgICB0aGlzLmNoZWNrRnVsbFdpZHRoKCk7XG4gICAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9ucykge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IDxudW1iZXI+dGhpcy5jdXJyZW50T3B0aW9ucy5zdGFydEluZGV4O1xuICAgICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaW1hZ2VzICE9PSB1bmRlZmluZWQgJiYgKHRoaXMuaW1hZ2VzLmxlbmd0aCAhPT0gdGhpcy5vbGRJbWFnZXNMZW5ndGgpXG4gICAgICAgICAgfHwgKHRoaXMuaW1hZ2VzICE9PSB0aGlzLm9sZEltYWdlcykpIHtcbiAgICAgICAgICB0aGlzLm9sZEltYWdlc0xlbmd0aCA9IHRoaXMuaW1hZ2VzLmxlbmd0aDtcbiAgICAgICAgICB0aGlzLm9sZEltYWdlcyA9IHRoaXMuaW1hZ2VzO1xuICAgICAgICAgIHRoaXMuc2V0T3B0aW9ucygpO1xuICAgICAgICAgIHRoaXMuc2V0SW1hZ2VzKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5pbWFnZXMgJiYgdGhpcy5pbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW1hZ2VzUmVhZHkuZW1pdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmltYWdlKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW1hZ2UucmVzZXQoPG51bWJlcj50aGlzLmN1cnJlbnRPcHRpb25zLnN0YXJ0SW5kZXgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcHRpb25zLnRodW1ibmFpbHNBdXRvSGlkZSAmJiB0aGlzLmN1cnJlbnRPcHRpb25zLnRodW1ibmFpbHNcbiAgICAgICAgICAgICAgJiYgdGhpcy5pbWFnZXMubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMuaW1hZ2VBcnJvd3MgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnJlc2V0VGh1bWJuYWlscygpO1xuICAgICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5jaGVja0Z1bGxXaWR0aCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpIG9uUmVzaXplKCkge1xuICAgICAgdGhpcy5zZXRCcmVha3BvaW50KCk7XG5cbiAgICAgIGlmICh0aGlzLnByZXZCcmVha3BvaW50ICE9PSB0aGlzLmJyZWFrcG9pbnQpIHtcbiAgICAgICAgICB0aGlzLnNldE9wdGlvbnMoKTtcbiAgICAgICAgICB0aGlzLnJlc2V0VGh1bWJuYWlscygpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9ucyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zLmZ1bGxXaWR0aCkge1xuXG4gICAgICAgICAgaWYgKHRoaXMuZnVsbFdpZHRoVGltZW91dCkge1xuICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5mdWxsV2lkdGhUaW1lb3V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmZ1bGxXaWR0aFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jaGVja0Z1bGxXaWR0aCgpO1xuICAgICAgICAgIH0sIDIwMCk7XG4gICAgICB9XG4gIH1cblxuICBnZXRJbWFnZUhlaWdodCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICh0aGlzLmN1cnJlbnRPcHRpb25zICYmIHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlscykgP1xuICAgICAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMuaW1hZ2VQZXJjZW50ICsgJyUnIDogJzEwMCUnO1xuICB9XG5cbiAgZ2V0VGh1bWJuYWlsc0hlaWdodCgpOiBzdHJpbmcge1xuICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucy5pbWFnZSkge1xuICAgICAgICAgIHJldHVybiAnY2FsYygnICsgdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzUGVyY2VudCArICclIC0gJ1xuICAgICAgICAgICsgdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzTWFyZ2luICsgJ3B4KSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnMTAwJSc7XG4gICAgICB9XG4gIH1cblxuICBnZXRUaHVtYm5haWxzTWFyZ2luVG9wKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9ucyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zLmxheW91dCA9PT0gTmd4R2FsbGVyeUxheW91dC5UaHVtYm5haWxzQm90dG9tKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE9wdGlvbnMudGh1bWJuYWlsc01hcmdpbiArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnMHB4JztcbiAgICAgIH1cbiAgfVxuXG4gIGdldFRodW1ibmFpbHNNYXJnaW5Cb3R0b20oKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRPcHRpb25zICYmIHRoaXMuY3VycmVudE9wdGlvbnMubGF5b3V0ID09PSBOZ3hHYWxsZXJ5TGF5b3V0LlRodW1ibmFpbHNUb3ApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzTWFyZ2luICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICcwcHgnO1xuICAgICAgfVxuICB9XG5cbiAgb3BlblByZXZpZXcoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMucHJldmlld0N1c3RvbSkge1xuICAgICAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMucHJldmlld0N1c3RvbShpbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucHJldmlld0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucHJldmlldy5vcGVuKGluZGV4KTtcbiAgICAgIH1cbiAgfVxuXG4gIG9uUHJldmlld09wZW4oKTogdm9pZCB7XG4gICAgICB0aGlzLnByZXZpZXdPcGVuLmVtaXQoKTtcblxuICAgICAgaWYgKHRoaXMuaW1hZ2UgJiYgdGhpcy5pbWFnZS5hdXRvUGxheSkge1xuICAgICAgICAgIHRoaXMuaW1hZ2Uuc3RvcEF1dG9QbGF5KCk7XG4gICAgICB9XG4gIH1cblxuICBvblByZXZpZXdDbG9zZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMucHJldmlld0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMucHJldmlld0Nsb3NlLmVtaXQoKTtcblxuICAgICAgaWYgKHRoaXMuaW1hZ2UgJiYgdGhpcy5pbWFnZS5hdXRvUGxheSkge1xuICAgICAgICAgIHRoaXMuaW1hZ2Uuc3RhcnRBdXRvUGxheSgpO1xuICAgICAgfVxuICB9XG5cbiAgc2VsZWN0RnJvbUltYWdlKGluZGV4OiBudW1iZXIpIHtcbiAgICAgIHRoaXMuc2VsZWN0KGluZGV4KTtcbiAgfVxuXG4gIHNlbGVjdEZyb21UaHVtYm5haWxzKGluZGV4OiBudW1iZXIpIHtcbiAgICAgIHRoaXMuc2VsZWN0KGluZGV4KTtcblxuICAgICAgaWYgKHRoaXMuY3VycmVudE9wdGlvbnMgJiYgdGhpcy5jdXJyZW50T3B0aW9ucy50aHVtYm5haWxzICYmIHRoaXMuY3VycmVudE9wdGlvbnMucHJldmlld1xuICAgICAgICAgICYmICghdGhpcy5jdXJyZW50T3B0aW9ucy5pbWFnZSB8fCB0aGlzLmN1cnJlbnRPcHRpb25zLnRodW1ibmFpbHNSZW1haW5pbmdDb3VudCkpIHtcbiAgICAgICAgICB0aGlzLm9wZW5QcmV2aWV3KHRoaXMuc2VsZWN0ZWRJbmRleCk7XG4gICAgICB9XG4gIH1cblxuICBzaG93KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuc2VsZWN0KGluZGV4KTtcbiAgfVxuXG4gIHNob3dOZXh0KCk6IHZvaWQge1xuICAgICAgdGhpcy5pbWFnZS5zaG93TmV4dCgpO1xuICB9XG5cbiAgc2hvd1ByZXYoKTogdm9pZCB7XG4gICAgICB0aGlzLmltYWdlLnNob3dQcmV2KCk7XG4gIH1cblxuICBjYW5TaG93TmV4dCgpOiBib29sZWFuIHtcbiAgICAgIGlmICh0aGlzLmltYWdlcyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zKSB7XG4gICAgICAgICAgcmV0dXJuICh0aGlzLmN1cnJlbnRPcHRpb25zLmltYWdlSW5maW5pdHlNb3ZlIHx8IHRoaXMuc2VsZWN0ZWRJbmRleCA8IHRoaXMuaW1hZ2VzLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gIH1cblxuICBjYW5TaG93UHJldigpOiBib29sZWFuIHtcbiAgICAgIGlmICh0aGlzLmltYWdlcyAmJiB0aGlzLmN1cnJlbnRPcHRpb25zKSB7XG4gICAgICAgICAgcmV0dXJuICh0aGlzLmN1cnJlbnRPcHRpb25zLmltYWdlSW5maW5pdHlNb3ZlIHx8IHRoaXMuc2VsZWN0ZWRJbmRleCA+IDApID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gIH1cblxuICBwcmV2aWV3U2VsZWN0KGluZGV4OiBudW1iZXIpIHtcbiAgICAgIHRoaXMucHJldmlld0NoYW5nZS5lbWl0KHtpbmRleCwgaW1hZ2U6IHRoaXMuaW1hZ2VzW2luZGV4XX0pO1xuICB9XG5cbiAgbW92ZVRodW1ibmFpbHNSaWdodCgpIHtcbiAgICAgIHRoaXMudGh1Ym1uYWlscy5tb3ZlUmlnaHQoKTtcbiAgfVxuXG4gIG1vdmVUaHVtYm5haWxzTGVmdCgpIHtcbiAgICAgIHRoaXMudGh1Ym1uYWlscy5tb3ZlTGVmdCgpO1xuICB9XG5cbiAgY2FuTW92ZVRodW1ibmFpbHNSaWdodCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRodWJtbmFpbHMuY2FuTW92ZVJpZ2h0KCk7XG4gIH1cblxuICBjYW5Nb3ZlVGh1bWJuYWlsc0xlZnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy50aHVibW5haWxzLmNhbk1vdmVMZWZ0KCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0VGh1bWJuYWlscygpIHtcbiAgICAgIGlmICh0aGlzLnRodWJtbmFpbHMpIHtcbiAgICAgICAgICB0aGlzLnRodWJtbmFpbHMucmVzZXQoPG51bWJlcj50aGlzLmN1cnJlbnRPcHRpb25zLnN0YXJ0SW5kZXgpO1xuICAgICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3QoaW5kZXg6IG51bWJlcikge1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG5cbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGltYWdlOiB0aGlzLmltYWdlc1tpbmRleF1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0Z1bGxXaWR0aCgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRPcHRpb25zICYmIHRoaXMuY3VycmVudE9wdGlvbnMuZnVsbFdpZHRoKSB7XG4gICAgICAgICAgdGhpcy53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggKyAncHgnO1xuICAgICAgICAgIHRoaXMubGVmdCA9ICgtKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggLVxuICAgICAgICAgICAgICB0aGlzLm15RWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuaW5uZXJXaWR0aCkgLyAyKSArICdweCc7XG4gICAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldEltYWdlcygpOiB2b2lkIHtcbiAgICAgIHRoaXMuc21hbGxJbWFnZXMgPSB0aGlzLmltYWdlcy5tYXAoKGltZykgPT4gPHN0cmluZz5pbWcuc21hbGwpO1xuICAgICAgdGhpcy5tZWRpdW1JbWFnZXMgPSB0aGlzLmltYWdlcy5tYXAoKGltZywgaSkgPT4gbmV3IE5neEdhbGxlcnlPcmRlcmVkSW1hZ2Uoe1xuICAgICAgICAgIHNyYzogaW1nLm1lZGl1bSxcbiAgICAgICAgICBpbmRleDogaVxuICAgICAgfSkpO1xuICAgICAgdGhpcy5iaWdJbWFnZXMgPSB0aGlzLmltYWdlcy5tYXAoKGltZykgPT4gPHN0cmluZz5pbWcuYmlnKTtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25zID0gdGhpcy5pbWFnZXMubWFwKChpbWcpID0+IDxzdHJpbmc+aW1nLmRlc2NyaXB0aW9uKTtcbiAgICAgIHRoaXMubGlua3MgPSB0aGlzLmltYWdlcy5tYXAoKGltZykgPT4gPHN0cmluZz5pbWcudXJsKTtcbiAgICAgIHRoaXMubGFiZWxzID0gdGhpcy5pbWFnZXMubWFwKChpbWcpID0+IDxzdHJpbmc+aW1nLmxhYmVsKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0QnJlYWtwb2ludCgpOiB2b2lkIHtcbiAgICAgIHRoaXMucHJldkJyZWFrcG9pbnQgPSB0aGlzLmJyZWFrcG9pbnQ7XG4gICAgICBsZXQgYnJlYWtwb2ludHM7XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGJyZWFrcG9pbnRzID0gdGhpcy5vcHRpb25zLmZpbHRlcigob3B0KSA9PiBvcHQuYnJlYWtwb2ludCA+PSB3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgICAgICAgICAgLm1hcCgob3B0KSA9PiBvcHQuYnJlYWtwb2ludCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChicmVha3BvaW50cyAmJiBicmVha3BvaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmJyZWFrcG9pbnQgPSBicmVha3BvaW50cy5wb3AoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5icmVha3BvaW50ID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzb3J0T3B0aW9ucygpOiB2b2lkIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IFtcbiAgICAgICAgICAuLi50aGlzLm9wdGlvbnMuZmlsdGVyKChhKSA9PiBhLmJyZWFrcG9pbnQgPT09IHVuZGVmaW5lZCksXG4gICAgICAgICAgLi4udGhpcy5vcHRpb25zXG4gICAgICAgICAgICAgIC5maWx0ZXIoKGEpID0+IGEuYnJlYWtwb2ludCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5icmVha3BvaW50IC0gYS5icmVha3BvaW50KVxuICAgICAgXTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMgPSBuZXcgTmd4R2FsbGVyeU9wdGlvbnMoe30pO1xuXG4gICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgICAuZmlsdGVyKChvcHQpID0+IG9wdC5icmVha3BvaW50ID09PSB1bmRlZmluZWQgfHwgb3B0LmJyZWFrcG9pbnQgPj0gdGhpcy5icmVha3BvaW50KVxuICAgICAgICAgIC5tYXAoKG9wdCkgPT4gdGhpcy5jb21iaW5lT3B0aW9ucyh0aGlzLmN1cnJlbnRPcHRpb25zLCBvcHQpKTtcblxuICAgICAgdGhpcy53aWR0aCA9IDxzdHJpbmc+dGhpcy5jdXJyZW50T3B0aW9ucy53aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gPHN0cmluZz50aGlzLmN1cnJlbnRPcHRpb25zLmhlaWdodDtcbiAgfVxuXG4gIHByaXZhdGUgY29tYmluZU9wdGlvbnMoZmlyc3Q6IE5neEdhbGxlcnlPcHRpb25zLCBzZWNvbmQ6IE5neEdhbGxlcnlPcHRpb25zKSB7XG4gICAgICBPYmplY3Qua2V5cyhzZWNvbmQpLm1hcCgodmFsKSA9PiBmaXJzdFt2YWxdID0gc2Vjb25kW3ZhbF0gIT09IHVuZGVmaW5lZCA/IHNlY29uZFt2YWxdIDogZmlyc3RbdmFsXSk7XG4gIH1cbn1cbiJdfQ==