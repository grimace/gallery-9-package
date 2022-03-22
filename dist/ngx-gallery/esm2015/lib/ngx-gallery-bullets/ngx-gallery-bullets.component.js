import { __decorate } from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
let NgxGalleryBulletsComponent = class NgxGalleryBulletsComponent {
    constructor() {
        this.active = 0;
        this.onChange = new EventEmitter();
    }
    getBullets() {
        return Array(this.count);
    }
    handleChange(event, index) {
        this.onChange.emit(index);
    }
};
__decorate([
    Input()
], NgxGalleryBulletsComponent.prototype, "count", void 0);
__decorate([
    Input()
], NgxGalleryBulletsComponent.prototype, "active", void 0);
__decorate([
    Output()
], NgxGalleryBulletsComponent.prototype, "onChange", void 0);
NgxGalleryBulletsComponent = __decorate([
    Component({
        selector: 'ngx-gallery-bullets',
        template: "<div class=\"ngx-gallery-bullet\" *ngFor=\"let bullet of getBullets(); let i = index;\" (click)=\"handleChange($event, i)\" [ngClass]=\"{ 'ngx-gallery-active': i == active }\"></div>",
        styles: [":host{-webkit-transform:translateX(-50%);bottom:0;display:-webkit-inline-box;display:inline-flex;left:50%;padding:10px;position:absolute;transform:translateX(-50%);z-index:2000}.ngx-gallery-bullet{background:#fff;border-radius:50%;cursor:pointer;height:10px;width:10px}.ngx-gallery-bullet:not(:first-child){margin-left:5px}.ngx-gallery-bullet.ngx-gallery-active,.ngx-gallery-bullet:hover{background:#000}"]
    })
], NgxGalleryBulletsComponent);
export { NgxGalleryBulletsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWdhbGxlcnktYnVsbGV0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2dyZWdvcnltYWNlL3Byb2plY3RzL25neC1nYWxsZXJ5LTktcGFja2FnZS9wcm9qZWN0cy9uZ3gtZ2FsbGVyeS9zcmMvIiwic291cmNlcyI6WyJsaWIvbmd4LWdhbGxlcnktYnVsbGV0cy9uZ3gtZ2FsbGVyeS1idWxsZXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQUF2QztRQUVXLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFFbEIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFTMUMsQ0FBQztJQVBDLFVBQVU7UUFDTixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFZLEVBQUUsS0FBYTtRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0YsQ0FBQTtBQVpVO0lBQVIsS0FBSyxFQUFFO3lEQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7MERBQW9CO0FBRWxCO0lBQVQsTUFBTSxFQUFFOzREQUErQjtBQUo3QiwwQkFBMEI7SUFMdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixrTUFBbUQ7O0tBRXBELENBQUM7R0FDVywwQkFBMEIsQ0FhdEM7U0FiWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZ2FsbGVyeS1idWxsZXRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1nYWxsZXJ5LWJ1bGxldHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtZ2FsbGVyeS1idWxsZXRzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4R2FsbGVyeUJ1bGxldHNDb21wb25lbnQge1xuICBASW5wdXQoKSBjb3VudDogbnVtYmVyO1xuICBASW5wdXQoKSBhY3RpdmU6IG51bWJlciA9IDA7XG5cbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldEJ1bGxldHMoKTogbnVtYmVyW10ge1xuICAgICAgcmV0dXJuIEFycmF5KHRoaXMuY291bnQpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50OiBFdmVudCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KGluZGV4KTtcbiAgfVxufVxuIl19