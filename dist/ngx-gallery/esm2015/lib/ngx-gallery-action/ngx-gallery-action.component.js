import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
let NgxGalleryActionComponent = class NgxGalleryActionComponent {
    constructor() {
        this.disabled = false;
        this.titleText = '';
        this.onClick = new EventEmitter();
    }
    handleClick(event) {
        if (!this.disabled) {
            this.onClick.emit(event);
        }
        event.stopPropagation();
        event.preventDefault();
    }
};
__decorate([
    Input()
], NgxGalleryActionComponent.prototype, "icon", void 0);
__decorate([
    Input()
], NgxGalleryActionComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], NgxGalleryActionComponent.prototype, "titleText", void 0);
__decorate([
    Output()
], NgxGalleryActionComponent.prototype, "onClick", void 0);
NgxGalleryActionComponent = __decorate([
    Component({
        selector: 'ngx-gallery-action',
        template: "<div class=\"ngx-gallery-icon\" [class.ngx-gallery-icon-disabled]=\"disabled\"\naria-hidden=\"true\"\ntitle=\"{{ titleText }}\"\n(click)=\"handleClick($event)\">\n    <i class=\"ngx-gallery-icon-content {{ icon }}\"></i>\n</div>",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    })
], NgxGalleryActionComponent);
export { NgxGalleryActionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZ3JlZ29yeW1hY2UvcHJvamVjdHMvbmd4LWdhbGxlcnktOS1wYWNrYWdlL3Byb2plY3RzL25neC1nYWxsZXJ5L3NyYy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZ2FsbGVyeS1hY3Rpb24vbmd4LWdhbGxlcnktYWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFoRyxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQUF0QztRQUVXLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVkLFlBQU8sR0FBd0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVU5RCxDQUFDO0lBUkMsV0FBVyxDQUFDLEtBQVk7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7UUFFRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzNCLENBQUM7Q0FDRixDQUFBO0FBZFU7SUFBUixLQUFLLEVBQUU7dURBQWM7QUFDYjtJQUFSLEtBQUssRUFBRTsyREFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7NERBQWdCO0FBRWQ7SUFBVCxNQUFNLEVBQUU7MERBQW1EO0FBTGpELHlCQUF5QjtJQU5yQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLGdQQUFrRDtRQUVsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7S0FDaEQsQ0FBQztHQUNXLHlCQUF5QixDQWVyQztTQWZZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZ2FsbGVyeS1hY3Rpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWdhbGxlcnktYWN0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWdhbGxlcnktYWN0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE5neEdhbGxlcnlBY3Rpb25Db21wb25lbnQge1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRpdGxlVGV4dCA9ICcnO1xuXG4gIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGhhbmRsZUNsaWNrKGV2ZW50OiBFdmVudCkge1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5vbkNsaWNrLmVtaXQoZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbiJdfQ==