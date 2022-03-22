import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let NgxGalleryArrowsComponent = class NgxGalleryArrowsComponent {
    constructor() {
        this.onPrevClick = new EventEmitter();
        this.onNextClick = new EventEmitter();
    }
    handlePrevClick() {
        this.onPrevClick.emit();
    }
    handleNextClick() {
        this.onNextClick.emit();
    }
};
__decorate([
    Input()
], NgxGalleryArrowsComponent.prototype, "prevDisabled", void 0);
__decorate([
    Input()
], NgxGalleryArrowsComponent.prototype, "nextDisabled", void 0);
__decorate([
    Input()
], NgxGalleryArrowsComponent.prototype, "arrowPrevIcon", void 0);
__decorate([
    Input()
], NgxGalleryArrowsComponent.prototype, "arrowNextIcon", void 0);
__decorate([
    Output()
], NgxGalleryArrowsComponent.prototype, "onPrevClick", void 0);
__decorate([
    Output()
], NgxGalleryArrowsComponent.prototype, "onNextClick", void 0);
NgxGalleryArrowsComponent = __decorate([
    Component({
        selector: 'ngx-gallery-arrows',
        template: "<div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-left\">\n    <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handlePrevClick()\" [class.ngx-gallery-disabled]=\"prevDisabled\">\n        <i class=\"ngx-gallery-icon-content {{arrowPrevIcon}}\"></i>\n    </div>\n</div>\n<div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-right\">\n    <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handleNextClick()\" [class.ngx-gallery-disabled]=\"nextDisabled\">\n        <i class=\"ngx-gallery-icon-content {{arrowNextIcon}}\"></i>\n    </div>\n</div>",
        styles: [".ngx-gallery-arrow-wrapper{display:table;height:100%;position:absolute;table-layout:fixed;width:1px;z-index:2000}.ngx-gallery-arrow-left{left:0}.ngx-gallery-arrow-right{right:0}.ngx-gallery-arrow{-webkit-transform:translateY(-50%);cursor:pointer;top:50%;transform:translateY(-50%)}.ngx-gallery-arrow.ngx-gallery-disabled{cursor:default;opacity:.6}.ngx-gallery-arrow-left .ngx-gallery-arrow{left:10px}.ngx-gallery-arrow-right .ngx-gallery-arrow{right:10px}"]
    })
], NgxGalleryArrowsComponent);
export { NgxGalleryArrowsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktYXJyb3dzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3JlZ29yeW1hY2UvcHJvamVjdHMvbmd4LWdhbGxlcnktOS1wYWNrYWdlL3Byb2plY3RzL25neC1nYWxsZXJ5L3NyYy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZ2FsbGVyeS1hcnJvd3Mvbmd4LWdhbGxlcnktYXJyb3dzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUF0QztRQU1ZLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFTN0MsQ0FBQztJQVBDLGVBQWU7UUFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0NBQ0YsQ0FBQTtBQWZVO0lBQVIsS0FBSyxFQUFFOytEQUF1QjtBQUN0QjtJQUFSLEtBQUssRUFBRTsrREFBdUI7QUFDdEI7SUFBUixLQUFLLEVBQUU7Z0VBQXVCO0FBQ3RCO0lBQVIsS0FBSyxFQUFFO2dFQUF1QjtBQUVyQjtJQUFULE1BQU0sRUFBRTs4REFBa0M7QUFDakM7SUFBVCxNQUFNLEVBQUU7OERBQWtDO0FBUGhDLHlCQUF5QjtJQUxyQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLHFuQkFBa0Q7O0tBRW5ELENBQUM7R0FDVyx5QkFBeUIsQ0FnQnJDO1NBaEJZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1nYWxsZXJ5LWFycm93cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZ2FsbGVyeS1hcnJvd3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtZ2FsbGVyeS1hcnJvd3MuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hHYWxsZXJ5QXJyb3dzQ29tcG9uZW50e1xuICBASW5wdXQoKSBwcmV2RGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5leHREaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgYXJyb3dQcmV2SWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBhcnJvd05leHRJY29uOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIG9uUHJldkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25OZXh0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaGFuZGxlUHJldkNsaWNrKCk6IHZvaWQge1xuICAgICAgdGhpcy5vblByZXZDbGljay5lbWl0KCk7XG4gIH1cblxuICBoYW5kbGVOZXh0Q2xpY2soKTogdm9pZCB7XG4gICAgICB0aGlzLm9uTmV4dENsaWNrLmVtaXQoKTtcbiAgfVxufVxuIl19