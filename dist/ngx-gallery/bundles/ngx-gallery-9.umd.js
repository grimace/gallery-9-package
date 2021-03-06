(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-gallery-9', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-gallery-9'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __exportStar(m, exports) {
        for (var p in m)
            if (!exports.hasOwnProperty(p))
                exports[p] = m[p];
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    result[k] = mod[k];
        result.default = mod;
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    exports.NgxGalleryHelperService = /** @class */ (function () {
        function NgxGalleryHelperService(renderer) {
            this.renderer = renderer;
            this.swipeHandlers = new Map();
        }
        NgxGalleryHelperService.prototype.manageSwipe = function (status, element, id, nextHandler, prevHandler) {
            var handlers = this.getSwipeHandlers(id);
            // swipeleft and swiperight are available only if hammerjs is included
            try {
                if (status && !handlers) {
                    this.swipeHandlers.set(id, [
                        this.renderer.listen(element.nativeElement, 'swipeleft', function () { return nextHandler(); }),
                        this.renderer.listen(element.nativeElement, 'swiperight', function () { return prevHandler(); })
                    ]);
                }
                else if (!status && handlers) {
                    handlers.map(function (handler) { return handler(); });
                    this.removeSwipeHandlers(id);
                }
            }
            catch (e) { }
        };
        NgxGalleryHelperService.prototype.validateUrl = function (url) {
            if (url.replace) {
                return url.replace(new RegExp(' ', 'g'), '%20')
                    .replace(new RegExp('\'', 'g'), '%27');
            }
            else {
                return url;
            }
        };
        NgxGalleryHelperService.prototype.getBackgroundUrl = function (image) {
            return 'url(\'' + this.validateUrl(image) + '\')';
        };
        NgxGalleryHelperService.prototype.getSwipeHandlers = function (id) {
            return this.swipeHandlers.get(id);
        };
        NgxGalleryHelperService.prototype.removeSwipeHandlers = function (id) {
            this.swipeHandlers.delete(id);
        };
        return NgxGalleryHelperService;
    }());
    exports.NgxGalleryHelperService = __decorate([
        core.Injectable()
    ], exports.NgxGalleryHelperService);

    var NgxGalleryAnimation = /** @class */ (function () {
        function NgxGalleryAnimation() {
        }
        return NgxGalleryAnimation;
    }());
    NgxGalleryAnimation.Fade = 'fade';
    NgxGalleryAnimation.Slide = 'slide';
    NgxGalleryAnimation.Rotate = 'rotate';
    NgxGalleryAnimation.Zoom = 'zoom';

    var NgxGalleryImageSize = /** @class */ (function () {
        function NgxGalleryImageSize() {
        }
        return NgxGalleryImageSize;
    }());
    NgxGalleryImageSize.Cover = 'cover';
    NgxGalleryImageSize.Contain = 'contain';

    var NgxGalleryLayout = /** @class */ (function () {
        function NgxGalleryLayout() {
        }
        return NgxGalleryLayout;
    }());
    NgxGalleryLayout.ThumbnailsTop = 'thumbnails-top';
    NgxGalleryLayout.ThumbnailsBottom = 'thumbnails-bottom';

    var NgxGalleryOrder = /** @class */ (function () {
        function NgxGalleryOrder() {
        }
        return NgxGalleryOrder;
    }());
    NgxGalleryOrder.Column = 1;
    NgxGalleryOrder.Row = 2;
    NgxGalleryOrder.Page = 3;

    var NgxGalleryAction = /** @class */ (function () {
        function NgxGalleryAction(action) {
            this.icon = action.icon;
            this.disabled = action.disabled ? action.disabled : false;
            this.titleText = action.titleText ? action.titleText : '';
            this.onClick = action.onClick;
        }
        return NgxGalleryAction;
    }());

    var NgxGalleryOptions = /** @class */ (function () {
        function NgxGalleryOptions(obj) {
            var preventDefaults = obj.breakpoint === undefined ? false : true;
            function use(source, defaultValue) {
                return obj && (source !== undefined || preventDefaults) ? source : defaultValue;
            }
            this.breakpoint = use(obj.breakpoint, undefined);
            this.width = use(obj.width, '500px');
            this.height = use(obj.height, '400px');
            this.fullWidth = use(obj.fullWidth, false);
            this.layout = use(obj.layout, NgxGalleryLayout.ThumbnailsBottom);
            this.startIndex = use(obj.startIndex, 0);
            this.linkTarget = use(obj.linkTarget, '_blank');
            this.lazyLoading = use(obj.lazyLoading, true);
            this.image = use(obj.image, true);
            this.imagePercent = use(obj.imagePercent, 75);
            this.imageArrows = use(obj.imageArrows, true);
            this.imageArrowsAutoHide = use(obj.imageArrowsAutoHide, false);
            this.imageSwipe = use(obj.imageSwipe, false);
            this.imageAnimation = use(obj.imageAnimation, NgxGalleryAnimation.Fade);
            this.imageSize = use(obj.imageSize, NgxGalleryImageSize.Cover);
            this.imageAutoPlay = use(obj.imageAutoPlay, false);
            this.imageAutoPlayInterval = use(obj.imageAutoPlayInterval, 2000);
            this.imageAutoPlayPauseOnHover = use(obj.imageAutoPlayPauseOnHover, false);
            this.imageInfinityMove = use(obj.imageInfinityMove, false);
            if (obj && obj.imageActions && obj.imageActions.length) {
                obj.imageActions = obj.imageActions.map(function (action) { return new NgxGalleryAction(action); });
            }
            this.imageActions = use(obj.imageActions, []);
            this.imageDescription = use(obj.imageDescription, false);
            this.imageBullets = use(obj.imageBullets, false);
            this.thumbnails = use(obj.thumbnails, true);
            this.thumbnailsColumns = use(obj.thumbnailsColumns, 4);
            this.thumbnailsRows = use(obj.thumbnailsRows, 1);
            this.thumbnailsPercent = use(obj.thumbnailsPercent, 25);
            this.thumbnailsMargin = use(obj.thumbnailsMargin, 10);
            this.thumbnailsArrows = use(obj.thumbnailsArrows, true);
            this.thumbnailsArrowsAutoHide = use(obj.thumbnailsArrowsAutoHide, false);
            this.thumbnailsSwipe = use(obj.thumbnailsSwipe, false);
            this.thumbnailsMoveSize = use(obj.thumbnailsMoveSize, 1);
            this.thumbnailsOrder = use(obj.thumbnailsOrder, NgxGalleryOrder.Column);
            this.thumbnailsRemainingCount = use(obj.thumbnailsRemainingCount, false);
            this.thumbnailsAsLinks = use(obj.thumbnailsAsLinks, false);
            this.thumbnailsAutoHide = use(obj.thumbnailsAutoHide, false);
            this.thumbnailMargin = use(obj.thumbnailMargin, 10);
            this.thumbnailSize = use(obj.thumbnailSize, NgxGalleryImageSize.Cover);
            if (obj && obj.thumbnailActions && obj.thumbnailActions.length) {
                obj.thumbnailActions = obj.thumbnailActions.map(function (action) { return new NgxGalleryAction(action); });
            }
            this.thumbnailActions = use(obj.thumbnailActions, []);
            this.preview = use(obj.preview, true);
            this.previewDescription = use(obj.previewDescription, true);
            this.previewArrows = use(obj.previewArrows, true);
            this.previewArrowsAutoHide = use(obj.previewArrowsAutoHide, false);
            this.previewSwipe = use(obj.previewSwipe, false);
            this.previewFullscreen = use(obj.previewFullscreen, false);
            this.previewForceFullscreen = use(obj.previewForceFullscreen, false);
            this.previewCloseOnClick = use(obj.previewCloseOnClick, false);
            this.previewCloseOnEsc = use(obj.previewCloseOnEsc, false);
            this.previewKeyboardNavigation = use(obj.previewKeyboardNavigation, false);
            this.previewAnimation = use(obj.previewAnimation, true);
            this.previewAutoPlay = use(obj.previewAutoPlay, false);
            this.previewAutoPlayInterval = use(obj.previewAutoPlayInterval, 2000);
            this.previewAutoPlayPauseOnHover = use(obj.previewAutoPlayPauseOnHover, false);
            this.previewInfinityMove = use(obj.previewInfinityMove, false);
            this.previewZoom = use(obj.previewZoom, false);
            this.previewZoomStep = use(obj.previewZoomStep, 0.1);
            this.previewZoomMax = use(obj.previewZoomMax, 2);
            this.previewZoomMin = use(obj.previewZoomMin, 0.5);
            this.previewRotate = use(obj.previewRotate, false);
            this.previewDownload = use(obj.previewDownload, false);
            this.previewCustom = use(obj.previewCustom, undefined);
            this.previewBullets = use(obj.previewBullets, false);
            this.arrowPrevIcon = use(obj.arrowPrevIcon, 'fa fa-arrow-circle-left');
            this.arrowNextIcon = use(obj.arrowNextIcon, 'fa fa-arrow-circle-right');
            this.closeIcon = use(obj.closeIcon, 'fa fa-times-circle');
            this.fullscreenIcon = use(obj.fullscreenIcon, 'fa fa-arrows-alt');
            this.spinnerIcon = use(obj.spinnerIcon, 'fa fa-spinner fa-pulse fa-3x fa-fw');
            this.zoomInIcon = use(obj.zoomInIcon, 'fa fa-search-plus');
            this.zoomOutIcon = use(obj.zoomOutIcon, 'fa fa-search-minus');
            this.rotateLeftIcon = use(obj.rotateLeftIcon, 'fa fa-undo');
            this.rotateRightIcon = use(obj.rotateRightIcon, 'fa fa-repeat');
            this.downloadIcon = use(obj.downloadIcon, 'fa fa-arrow-circle-down');
            if (obj && obj.actions && obj.actions.length) {
                obj.actions = obj.actions.map(function (action) { return new NgxGalleryAction(action); });
            }
            this.actions = use(obj.actions, []);
        }
        return NgxGalleryOptions;
    }());

    var NgxGalleryOrderedImage = /** @class */ (function () {
        function NgxGalleryOrderedImage(obj) {
            this.src = obj.src;
            this.index = obj.index;
        }
        return NgxGalleryOrderedImage;
    }());

    exports.NgxGalleryPreviewComponent = /** @class */ (function () {
        function NgxGalleryPreviewComponent(sanitization, elementRef, helperService, renderer, changeDetectorRef) {
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
            this.onOpen = new core.EventEmitter();
            this.onClose = new core.EventEmitter();
            this.onActiveChange = new core.EventEmitter();
            this.isOpen = false;
            this.initialX = 0;
            this.initialY = 0;
            this.initialLeft = 0;
            this.initialTop = 0;
            this.isMove = false;
        }
        NgxGalleryPreviewComponent.prototype.ngOnInit = function () {
            if (this.arrows && this.arrowsAutoHide) {
                this.arrows = false;
            }
        };
        NgxGalleryPreviewComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes['swipe']) {
                this.helperService.manageSwipe(this.swipe, this.elementRef, 'preview', function () { return _this.showNext(); }, function () { return _this.showPrev(); });
            }
        };
        NgxGalleryPreviewComponent.prototype.ngOnDestroy = function () {
            if (this.keyDownListener) {
                this.keyDownListener();
            }
        };
        NgxGalleryPreviewComponent.prototype.onMouseEnter = function () {
            if (this.arrowsAutoHide && !this.arrows) {
                this.arrows = true;
            }
        };
        NgxGalleryPreviewComponent.prototype.onMouseLeave = function () {
            if (this.arrowsAutoHide && this.arrows) {
                this.arrows = false;
            }
        };
        NgxGalleryPreviewComponent.prototype.onKeyDown = function (e) {
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
        };
        NgxGalleryPreviewComponent.prototype.open = function (index) {
            var _this = this;
            this.onOpen.emit();
            this.index = index;
            this.isOpen = true;
            this.show(true);
            if (this.forceFullscreen) {
                this.manageFullscreen();
            }
            this.keyDownListener = this.renderer.listen("window", "keydown", function (e) { return _this.onKeyDown(e); });
        };
        NgxGalleryPreviewComponent.prototype.close = function () {
            this.isOpen = false;
            this.closeFullscreen();
            this.onClose.emit();
            this.stopAutoPlay();
            if (this.keyDownListener) {
                this.keyDownListener();
            }
        };
        NgxGalleryPreviewComponent.prototype.imageMouseEnter = function () {
            if (this.autoPlay && this.autoPlayPauseOnHover) {
                this.stopAutoPlay();
            }
        };
        NgxGalleryPreviewComponent.prototype.imageMouseLeave = function () {
            if (this.autoPlay && this.autoPlayPauseOnHover) {
                this.startAutoPlay();
            }
        };
        NgxGalleryPreviewComponent.prototype.startAutoPlay = function () {
            var _this = this;
            if (this.autoPlay) {
                this.stopAutoPlay();
                this.timer = setTimeout(function () {
                    if (!_this.showNext()) {
                        _this.index = -1;
                        _this.showNext();
                    }
                }, this.autoPlayInterval);
            }
        };
        NgxGalleryPreviewComponent.prototype.stopAutoPlay = function () {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        };
        NgxGalleryPreviewComponent.prototype.showAtIndex = function (index) {
            this.index = index;
            this.show();
        };
        NgxGalleryPreviewComponent.prototype.showNext = function () {
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
        };
        NgxGalleryPreviewComponent.prototype.showPrev = function () {
            if (this.canShowPrev()) {
                this.index--;
                if (this.index < 0) {
                    this.index = this.images.length - 1;
                }
                this.show();
            }
        };
        NgxGalleryPreviewComponent.prototype.canShowNext = function () {
            if (this.loading) {
                return false;
            }
            else if (this.images) {
                return this.infinityMove || this.index < this.images.length - 1 ? true : false;
            }
            else {
                return false;
            }
        };
        NgxGalleryPreviewComponent.prototype.canShowPrev = function () {
            if (this.loading) {
                return false;
            }
            else if (this.images) {
                return this.infinityMove || this.index > 0 ? true : false;
            }
            else {
                return false;
            }
        };
        NgxGalleryPreviewComponent.prototype.manageFullscreen = function () {
            if (this.fullscreen || this.forceFullscreen) {
                var doc = document;
                if (!doc.fullscreenElement && !doc.mozFullScreenElement
                    && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                    this.openFullscreen();
                }
                else {
                    this.closeFullscreen();
                }
            }
        };
        NgxGalleryPreviewComponent.prototype.getSafeUrl = function (image) {
            return image.substr(0, 10) === 'data:image' ?
                image : this.sanitization.bypassSecurityTrustUrl(image);
        };
        NgxGalleryPreviewComponent.prototype.zoomIn = function () {
            if (this.canZoomIn()) {
                this.zoomValue += this.zoomStep;
                if (this.zoomValue > this.zoomMax) {
                    this.zoomValue = this.zoomMax;
                }
            }
        };
        NgxGalleryPreviewComponent.prototype.zoomOut = function () {
            if (this.canZoomOut()) {
                this.zoomValue -= this.zoomStep;
                if (this.zoomValue < this.zoomMin) {
                    this.zoomValue = this.zoomMin;
                }
                if (this.zoomValue <= 1) {
                    this.resetPosition();
                }
            }
        };
        NgxGalleryPreviewComponent.prototype.rotateLeft = function () {
            this.rotateValue -= 90;
        };
        NgxGalleryPreviewComponent.prototype.rotateRight = function () {
            this.rotateValue += 90;
        };
        NgxGalleryPreviewComponent.prototype.getTransform = function () {
            return this.sanitization.bypassSecurityTrustStyle('scale(' + this.zoomValue + ') rotate(' + this.rotateValue + 'deg)');
        };
        NgxGalleryPreviewComponent.prototype.canZoomIn = function () {
            return this.zoomValue < this.zoomMax ? true : false;
        };
        NgxGalleryPreviewComponent.prototype.canZoomOut = function () {
            return this.zoomValue > this.zoomMin ? true : false;
        };
        NgxGalleryPreviewComponent.prototype.canDragOnZoom = function () {
            return this.zoom && this.zoomValue > 1;
        };
        NgxGalleryPreviewComponent.prototype.mouseDownHandler = function (e) {
            if (this.canDragOnZoom()) {
                this.initialX = this.getClientX(e);
                this.initialY = this.getClientY(e);
                this.initialLeft = this.positionLeft;
                this.initialTop = this.positionTop;
                this.isMove = true;
                e.preventDefault();
            }
        };
        NgxGalleryPreviewComponent.prototype.mouseUpHandler = function (e) {
            this.isMove = false;
        };
        NgxGalleryPreviewComponent.prototype.mouseMoveHandler = function (e) {
            if (this.isMove) {
                this.positionLeft = this.initialLeft + (this.getClientX(e) - this.initialX);
                this.positionTop = this.initialTop + (this.getClientY(e) - this.initialY);
            }
        };
        NgxGalleryPreviewComponent.prototype.getClientX = function (e) {
            return e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
        };
        NgxGalleryPreviewComponent.prototype.getClientY = function (e) {
            return e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
        };
        NgxGalleryPreviewComponent.prototype.resetPosition = function () {
            if (this.zoom) {
                this.positionLeft = 0;
                this.positionTop = 0;
            }
        };
        NgxGalleryPreviewComponent.prototype.isKeyboardNext = function (e) {
            return e.keyCode === 39 ? true : false;
        };
        NgxGalleryPreviewComponent.prototype.isKeyboardPrev = function (e) {
            return e.keyCode === 37 ? true : false;
        };
        NgxGalleryPreviewComponent.prototype.isKeyboardEsc = function (e) {
            return e.keyCode === 27 ? true : false;
        };
        NgxGalleryPreviewComponent.prototype.openFullscreen = function () {
            var element = document.documentElement;
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
        };
        NgxGalleryPreviewComponent.prototype.closeFullscreen = function () {
            if (this.isFullscreen()) {
                var doc = document;
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
        };
        NgxGalleryPreviewComponent.prototype.isFullscreen = function () {
            var doc = document;
            return doc.fullscreenElement || doc.webkitFullscreenElement
                || doc.mozFullScreenElement || doc.msFullscreenElement;
        };
        NgxGalleryPreviewComponent.prototype.show = function (first) {
            var _this = this;
            if (first === void 0) { first = false; }
            this.loading = true;
            this.stopAutoPlay();
            this.onActiveChange.emit(this.index);
            if (first || !this.animation) {
                this._show();
            }
            else {
                setTimeout(function () { return _this._show(); }, 600);
            }
        };
        NgxGalleryPreviewComponent.prototype._show = function () {
            var _this = this;
            this.zoomValue = 1;
            this.rotateValue = 0;
            this.resetPosition();
            this.src = this.getSafeUrl(this.images[this.index]);
            this.srcIndex = this.index;
            this.description = this.descriptions[this.index];
            this.changeDetectorRef.markForCheck();
            setTimeout(function () {
                if (_this.isLoaded(_this.previewImage.nativeElement)) {
                    _this.loading = false;
                    _this.startAutoPlay();
                    _this.changeDetectorRef.markForCheck();
                }
                else {
                    setTimeout(function () {
                        if (_this.loading) {
                            _this.showSpinner = true;
                            _this.changeDetectorRef.markForCheck();
                        }
                    });
                    _this.previewImage.nativeElement.onload = function () {
                        _this.loading = false;
                        _this.showSpinner = false;
                        _this.previewImage.nativeElement.onload = null;
                        _this.startAutoPlay();
                        _this.changeDetectorRef.markForCheck();
                    };
                }
            });
        };
        NgxGalleryPreviewComponent.prototype.isLoaded = function (img) {
            if (!img.complete) {
                return false;
            }
            if (typeof img.naturalWidth !== 'undefined' && img.naturalWidth === 0) {
                return false;
            }
            return true;
        };
        return NgxGalleryPreviewComponent;
    }());
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "images", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "descriptions", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "showDescription", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "arrows", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "arrowsAutoHide", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "swipe", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "fullscreen", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "forceFullscreen", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "closeOnClick", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "closeOnEsc", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "keyboardNavigation", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "arrowPrevIcon", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "arrowNextIcon", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "closeIcon", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "fullscreenIcon", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "spinnerIcon", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "autoPlay", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "autoPlayInterval", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "autoPlayPauseOnHover", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "infinityMove", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "zoom", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "zoomStep", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "zoomMax", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "zoomMin", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "zoomInIcon", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "zoomOutIcon", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "animation", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "actions", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "rotate", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "rotateLeftIcon", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "rotateRightIcon", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "download", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "downloadIcon", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryPreviewComponent.prototype, "bullets", void 0);
    __decorate([
        core.Output()
    ], exports.NgxGalleryPreviewComponent.prototype, "onOpen", void 0);
    __decorate([
        core.Output()
    ], exports.NgxGalleryPreviewComponent.prototype, "onClose", void 0);
    __decorate([
        core.Output()
    ], exports.NgxGalleryPreviewComponent.prototype, "onActiveChange", void 0);
    __decorate([
        core.ViewChild('previewImage')
    ], exports.NgxGalleryPreviewComponent.prototype, "previewImage", void 0);
    __decorate([
        core.HostListener('mouseenter')
    ], exports.NgxGalleryPreviewComponent.prototype, "onMouseEnter", null);
    __decorate([
        core.HostListener('mouseleave')
    ], exports.NgxGalleryPreviewComponent.prototype, "onMouseLeave", null);
    exports.NgxGalleryPreviewComponent = __decorate([
        core.Component({
            selector: 'ngx-gallery-preview',
            template: "<ngx-gallery-arrows *ngIf=\"arrows\" (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n<div class=\"ngx-gallery-preview-top\">\n    <div class=\"ngx-gallery-preview-icons\">\n        <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, index)\"></ngx-gallery-action>\n        <a *ngIf=\"download && src\" [href]=\"src\" class=\"ngx-gallery-icon\" aria-hidden=\"true\" download>\n            <i class=\"ngx-gallery-icon-content {{ downloadIcon }}\"></i>\n        </a>\n        <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomOutIcon\" [disabled]=\"!canZoomOut()\" (onClick)=\"zoomOut()\"></ngx-gallery-action>\n        <ngx-gallery-action *ngIf=\"zoom\" [icon]=\"zoomInIcon\" [disabled]=\"!canZoomIn()\" (onClick)=\"zoomIn()\"></ngx-gallery-action>\n        <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateLeftIcon\" (onClick)=\"rotateLeft()\"></ngx-gallery-action>\n        <ngx-gallery-action *ngIf=\"rotate\" [icon]=\"rotateRightIcon\" (onClick)=\"rotateRight()\"></ngx-gallery-action>\n        <ngx-gallery-action *ngIf=\"fullscreen\" [icon]=\"'ngx-gallery-fullscreen ' + fullscreenIcon\" (onClick)=\"manageFullscreen()\"></ngx-gallery-action>\n        <ngx-gallery-action [icon]=\"'ngx-gallery-close ' + closeIcon\" (onClick)=\"close()\"></ngx-gallery-action>\n    </div>\n</div>\n<div class=\"ngx-spinner-wrapper ngx-gallery-center\" [class.ngx-gallery-active]=\"showSpinner\">\n    <i class=\"ngx-gallery-icon ngx-gallery-spinner {{spinnerIcon}}\" aria-hidden=\"true\"></i>\n</div>\n<div class=\"ngx-gallery-preview-wrapper\" (click)=\"closeOnClick && close()\" (mouseup)=\"mouseUpHandler($event)\" (mousemove)=\"mouseMoveHandler($event)\" (touchend)=\"mouseUpHandler($event)\" (touchmove)=\"mouseMoveHandler($event)\">\n    <div class=\"ngx-gallery-preview-img-wrapper\">\n        <img *ngIf=\"src\" #previewImage class=\"ngx-gallery-preview-img ngx-gallery-center\" [src]=\"src\" (click)=\"$event.stopPropagation()\" (mouseenter)=\"imageMouseEnter()\" (mouseleave)=\"imageMouseLeave()\" (mousedown)=\"mouseDownHandler($event)\" (touchstart)=\"mouseDownHandler($event)\" [class.ngx-gallery-active]=\"!loading\" [class.animation]=\"animation\" [class.ngx-gallery-grab]=\"canDragOnZoom()\" [style.transform]=\"getTransform()\" [style.left]=\"positionLeft + 'px'\" [style.top]=\"positionTop + 'px'\"/>\n        <ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"index\" (onChange)=\"showAtIndex($event)\"></ngx-gallery-bullets>\n    </div>\n    <div class=\"ngx-gallery-preview-text\" *ngIf=\"showDescription && description\" [innerHTML]=\"description\" (click)=\"$event.stopPropagation()\"></div>\n</div>",
            styles: [":host(.ngx-gallery-active){background:rgba(0,0,0,.7);display:inline-block;height:100%;left:0;position:fixed;top:0;width:100%;z-index:10000}:host{display:none}:host>.ngx-gallery-arrow{font-size:50px}:host>ngx-gallery-bullets{-webkit-box-align:center;align-items:center;height:5%;padding:0}.ngx-gallery-preview-img{-moz-user-select:none;-ms-user-select:none;-webkit-transition:-webkit-transform .5s;-webkit-user-select:none;max-height:90%;max-width:90%;opacity:0;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;user-select:none}.ngx-gallery-preview-img.animation{-webkit-transition:opacity .5s linear,-webkit-transform .5s;transition:opacity .5s linear,-webkit-transform .5s;transition:opacity .5s linear,transform .5s;transition:opacity .5s linear,transform .5s,-webkit-transform .5s}.ngx-gallery-preview-img.ngx-gallery-active{opacity:1}.ngx-gallery-preview-img.ngx-gallery-grab{cursor:grab;cursor:-webkit-grab}.ngx-gallery-icon.ngx-gallery-spinner{display:inline-block;font-size:50px;left:0}:host>.ngx-gallery-preview-top{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;position:absolute;user-select:none;width:100%}:host>.ngx-gallery-preview-icons{float:right}:host>.ngx-gallery-preview-icons .ngx-gallery-icon{cursor:pointer;font-size:25px;margin-right:10px;margin-top:10px;position:relative;text-decoration:none}:host>.ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled{cursor:default;opacity:.4}.ngx-spinner-wrapper{display:none;height:50px;width:50px}.ngx-spinner-wrapper.ngx-gallery-active{display:inline-block}.ngx-gallery-center{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.ngx-gallery-preview-text{-webkit-box-flex:0;background:rgba(0,0,0,.7);color:#fff;flex:0 1 auto;font-size:16px;padding:10px;text-align:center;width:100%;z-index:10}.ngx-gallery-preview-wrapper{-webkit-box-direction:normal;-webkit-box-orient:vertical;display:-webkit-box;display:flex;flex-flow:column;height:100%;width:100%}.ngx-gallery-preview-img-wrapper{-webkit-box-flex:1;flex:1 1 auto;position:relative}"]
        })
    ], exports.NgxGalleryPreviewComponent);

    exports.NgxGalleryImageComponent = /** @class */ (function () {
        function NgxGalleryImageComponent(sanitization, elementRef, helperService) {
            this.sanitization = sanitization;
            this.elementRef = elementRef;
            this.helperService = helperService;
            this.timeout = 1000;
            this.onClick = new core.EventEmitter();
            this.onActiveChange = new core.EventEmitter();
            this.canChangeImage = true;
        }
        NgxGalleryImageComponent.prototype.ngOnInit = function () {
            if (this.arrows && this.arrowsAutoHide) {
                this.arrows = false;
            }
            if (this.autoPlay) {
                this.startAutoPlay();
            }
        };
        NgxGalleryImageComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes['swipe']) {
                this.helperService.manageSwipe(this.swipe, this.elementRef, 'image', function () { return _this.showNext(); }, function () { return _this.showPrev(); });
            }
        };
        NgxGalleryImageComponent.prototype.onMouseEnter = function () {
            if (this.arrowsAutoHide && !this.arrows) {
                this.arrows = true;
            }
            if (this.autoPlay && this.autoPlayPauseOnHover) {
                this.stopAutoPlay();
            }
        };
        NgxGalleryImageComponent.prototype.onMouseLeave = function () {
            if (this.arrowsAutoHide && this.arrows) {
                this.arrows = false;
            }
            if (this.autoPlay && this.autoPlayPauseOnHover) {
                this.startAutoPlay();
            }
        };
        NgxGalleryImageComponent.prototype.reset = function (index) {
            this.selectedIndex = index;
        };
        NgxGalleryImageComponent.prototype.getImages = function () {
            if (!this.images) {
                return [];
            }
            if (this.lazyLoading) {
                var indexes_1 = [this.selectedIndex];
                var prevIndex = this.selectedIndex - 1;
                if (prevIndex === -1 && this.infinityMove) {
                    indexes_1.push(this.images.length - 1);
                }
                else if (prevIndex >= 0) {
                    indexes_1.push(prevIndex);
                }
                var nextIndex = this.selectedIndex + 1;
                if (nextIndex == this.images.length && this.infinityMove) {
                    indexes_1.push(0);
                }
                else if (nextIndex < this.images.length) {
                    indexes_1.push(nextIndex);
                }
                return this.images.filter(function (img, i) { return indexes_1.indexOf(i) != -1; });
            }
            else {
                return this.images;
            }
        };
        NgxGalleryImageComponent.prototype.startAutoPlay = function () {
            var _this = this;
            this.stopAutoPlay();
            this.timer = setInterval(function () {
                if (!_this.showNext()) {
                    _this.selectedIndex = -1;
                    _this.showNext();
                }
            }, this.autoPlayInterval);
        };
        NgxGalleryImageComponent.prototype.stopAutoPlay = function () {
            if (this.timer) {
                clearInterval(this.timer);
            }
        };
        NgxGalleryImageComponent.prototype.handleClick = function (event, index) {
            if (this.clickable) {
                this.onClick.emit(index);
                event.stopPropagation();
                event.preventDefault();
            }
        };
        NgxGalleryImageComponent.prototype.show = function (index) {
            this.selectedIndex = index;
            this.onActiveChange.emit(this.selectedIndex);
            this.setChangeTimeout();
        };
        NgxGalleryImageComponent.prototype.showNext = function () {
            if (this.canShowNext() && this.canChangeImage) {
                this.selectedIndex++;
                if (this.selectedIndex === this.images.length) {
                    this.selectedIndex = 0;
                }
                this.onActiveChange.emit(this.selectedIndex);
                this.setChangeTimeout();
                return true;
            }
            else {
                return false;
            }
        };
        NgxGalleryImageComponent.prototype.showPrev = function () {
            if (this.canShowPrev() && this.canChangeImage) {
                this.selectedIndex--;
                if (this.selectedIndex < 0) {
                    this.selectedIndex = this.images.length - 1;
                }
                this.onActiveChange.emit(this.selectedIndex);
                this.setChangeTimeout();
            }
        };
        NgxGalleryImageComponent.prototype.setChangeTimeout = function () {
            var _this = this;
            this.canChangeImage = false;
            var timeout = this.timeout;
            if (this.animation === NgxGalleryAnimation.Slide
                || this.animation === NgxGalleryAnimation.Fade) {
                timeout = 500;
            }
            setTimeout(function () {
                _this.canChangeImage = true;
            }, timeout);
        };
        NgxGalleryImageComponent.prototype.canShowNext = function () {
            if (this.images) {
                return this.infinityMove || this.selectedIndex < this.images.length - 1
                    ? true : false;
            }
            else {
                return false;
            }
        };
        NgxGalleryImageComponent.prototype.canShowPrev = function () {
            if (this.images) {
                return this.infinityMove || this.selectedIndex > 0 ? true : false;
            }
            else {
                return false;
            }
        };
        NgxGalleryImageComponent.prototype.getSafeUrl = function (image) {
            return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image));
        };
        return NgxGalleryImageComponent;
    }());
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "images", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "clickable", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "selectedIndex", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "arrows", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "arrowsAutoHide", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "swipe", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "animation", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "size", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "arrowPrevIcon", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "arrowNextIcon", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "autoPlay", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "autoPlayInterval", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "autoPlayPauseOnHover", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "infinityMove", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "lazyLoading", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "actions", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "descriptions", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "showDescription", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "bullets", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryImageComponent.prototype, "timeout", void 0);
    __decorate([
        core.Output()
    ], exports.NgxGalleryImageComponent.prototype, "onClick", void 0);
    __decorate([
        core.Output()
    ], exports.NgxGalleryImageComponent.prototype, "onActiveChange", void 0);
    __decorate([
        core.HostListener('mouseenter')
    ], exports.NgxGalleryImageComponent.prototype, "onMouseEnter", null);
    __decorate([
        core.HostListener('mouseleave')
    ], exports.NgxGalleryImageComponent.prototype, "onMouseLeave", null);
    exports.NgxGalleryImageComponent = __decorate([
        core.Component({
            selector: 'ngx-gallery-image',
            template: "<div class=\"ngx-gallery-image-wrapper ngx-gallery-animation-{{animation}} ngx-gallery-image-size-{{size}}\">\n    <div class=\"ngx-gallery-image\" \n        *ngFor=\"let image of getImages(); let i = index;\" \n        [ngClass]=\"{ 'ngx-gallery-active': selectedIndex == image.index, 'ngx-gallery-inactive-left': selectedIndex > image.index, 'ngx-gallery-inactive-right': selectedIndex < image.index, 'ngx-gallery-clickable': clickable }\" \n        [style.background-image]=\"getSafeUrl(image.src)\" \n        (click)=\"handleClick($event, image.index)\" >\n        <div class=\"ngx-gallery-icons-wrapper\">\n            <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, image.index)\"></ngx-gallery-action>\n        </div>\n        <div class=\"ngx-gallery-image-text\" *ngIf=\"showDescription && descriptions[image.index]\" [innerHTML]=\"descriptions[image.index]\" (click)=\"$event.stopPropagation()\"></div>\n    </div>\n</div>\n<ngx-gallery-bullets *ngIf=\"bullets\" [count]=\"images.length\" [active]=\"selectedIndex\" (onChange)=\"show($event)\"></ngx-gallery-bullets>\n<ngx-gallery-arrows class=\"ngx-gallery-image-size-{{size}}\" *ngIf=\"arrows\" (onPrevClick)=\"showPrev()\" (onNextClick)=\"showNext()\" [prevDisabled]=\"!canShowPrev()\" [nextDisabled]=\"!canShowNext()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n",
            styles: [":host{display:inline-block;position:relative;width:100%}.ngx-gallery-image-wrapper{left:0;overflow:hidden}.ngx-gallery-image,.ngx-gallery-image-wrapper{height:100%;position:absolute;top:0;width:100%}.ngx-gallery-image{background-position:50%;background-repeat:no-repeat}.ngx-gallery-image.ngx-gallery-active{z-index:1000}.ngx-gallery-image-size-cover .ngx-gallery-image{background-size:cover}.ngx-gallery-image-size-contain .ngx-gallery-image{background-size:contain}.ngx-gallery-animation-fade .ngx-gallery-image{-webkit-transition:.5s ease-in-out;left:0;opacity:0;transition:.5s ease-in-out}.ngx-gallery-animation-fade .ngx-gallery-image.ngx-gallery-active{opacity:1}.ngx-gallery-animation-slide .ngx-gallery-image{-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out}.ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-active{left:0}.ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-left{left:-100%}.ngx-gallery-animation-slide .ngx-gallery-image.ngx-gallery-inactive-right{left:100%}.ngx-gallery-animation-rotate .ngx-gallery-image{-webkit-transform:scale(3.5) rotate(90deg);-webkit-transition:1s ease;left:0;opacity:0;transform:scale(3.5) rotate(90deg);transition:1s ease}.ngx-gallery-animation-rotate .ngx-gallery-image.ngx-gallery-active{-webkit-transform:scale(1) rotate(0deg);opacity:1;transform:scale(1) rotate(0deg)}.ngx-gallery-animation-zoom .ngx-gallery-image{-webkit-transform:scale(2.5);-webkit-transition:1s ease;left:0;opacity:0;transform:scale(2.5);transition:1s ease}.ngx-gallery-animation-zoom .ngx-gallery-image.ngx-gallery-active{-webkit-transform:scale(1);opacity:1;transform:scale(1)}.ngx-gallery-image-text{background:rgba(0,0,0,.7);bottom:0;color:#fff;font-size:16px;padding:10px;position:absolute;text-align:center;width:100%;z-index:10}"]
        })
    ], exports.NgxGalleryImageComponent);

    exports.NgxGalleryThumbnailsComponent = /** @class */ (function () {
        function NgxGalleryThumbnailsComponent(sanitization, elementRef, helperService) {
            this.sanitization = sanitization;
            this.elementRef = elementRef;
            this.helperService = helperService;
            this.minStopIndex = 0;
            this.onActiveChange = new core.EventEmitter();
            this.index = 0;
        }
        NgxGalleryThumbnailsComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes['selectedIndex']) {
                this.validateIndex();
            }
            if (changes['swipe']) {
                this.helperService.manageSwipe(this.swipe, this.elementRef, 'thumbnails', function () { return _this.moveRight(); }, function () { return _this.moveLeft(); });
            }
            if (this.images) {
                this.remainingCountValue = this.images.length - (this.rows * this.columns);
            }
        };
        NgxGalleryThumbnailsComponent.prototype.onMouseEnter = function () {
            this.mouseenter = true;
        };
        NgxGalleryThumbnailsComponent.prototype.onMouseLeave = function () {
            this.mouseenter = false;
        };
        NgxGalleryThumbnailsComponent.prototype.reset = function (index) {
            this.selectedIndex = index;
            this.setDefaultPosition();
            this.index = 0;
            this.validateIndex();
        };
        NgxGalleryThumbnailsComponent.prototype.getImages = function () {
            if (!this.images) {
                return [];
            }
            if (this.remainingCount) {
                return this.images.slice(0, this.rows * this.columns);
            }
            else if (this.lazyLoading && this.order != NgxGalleryOrder.Row) {
                var stopIndex = 0;
                if (this.order === NgxGalleryOrder.Column) {
                    stopIndex = (this.index + this.columns + this.moveSize) * this.rows;
                }
                else if (this.order === NgxGalleryOrder.Page) {
                    stopIndex = this.index + ((this.columns * this.rows) * 2);
                }
                if (stopIndex <= this.minStopIndex) {
                    stopIndex = this.minStopIndex;
                }
                else {
                    this.minStopIndex = stopIndex;
                }
                return this.images.slice(0, stopIndex);
            }
            else {
                return this.images;
            }
        };
        NgxGalleryThumbnailsComponent.prototype.handleClick = function (event, index) {
            if (!this.hasLink(index)) {
                this.selectedIndex = index;
                this.onActiveChange.emit(index);
                event.stopPropagation();
                event.preventDefault();
            }
        };
        NgxGalleryThumbnailsComponent.prototype.hasLink = function (index) {
            if (this.links && this.links.length && this.links[index])
                return true;
        };
        NgxGalleryThumbnailsComponent.prototype.moveRight = function () {
            if (this.canMoveRight()) {
                this.index += this.moveSize;
                var maxIndex = this.getMaxIndex() - this.columns;
                if (this.index > maxIndex) {
                    this.index = maxIndex;
                }
                this.setThumbnailsPosition();
            }
        };
        NgxGalleryThumbnailsComponent.prototype.moveLeft = function () {
            if (this.canMoveLeft()) {
                this.index -= this.moveSize;
                if (this.index < 0) {
                    this.index = 0;
                }
                this.setThumbnailsPosition();
            }
        };
        NgxGalleryThumbnailsComponent.prototype.canMoveRight = function () {
            return this.index + this.columns < this.getMaxIndex() ? true : false;
        };
        NgxGalleryThumbnailsComponent.prototype.canMoveLeft = function () {
            return this.index !== 0 ? true : false;
        };
        NgxGalleryThumbnailsComponent.prototype.getThumbnailLeft = function (index) {
            var calculatedIndex;
            if (this.order === NgxGalleryOrder.Column) {
                calculatedIndex = Math.floor(index / this.rows);
            }
            else if (this.order === NgxGalleryOrder.Page) {
                calculatedIndex = (index % this.columns) + (Math.floor(index / (this.rows * this.columns)) * this.columns);
            }
            else if (this.order == NgxGalleryOrder.Row && this.remainingCount) {
                calculatedIndex = index % this.columns;
            }
            else {
                calculatedIndex = index % Math.ceil(this.images.length / this.rows);
            }
            return this.getThumbnailPosition(calculatedIndex, this.columns);
        };
        NgxGalleryThumbnailsComponent.prototype.getThumbnailTop = function (index) {
            var calculatedIndex;
            if (this.order === NgxGalleryOrder.Column) {
                calculatedIndex = index % this.rows;
            }
            else if (this.order === NgxGalleryOrder.Page) {
                calculatedIndex = Math.floor(index / this.columns) - (Math.floor(index / (this.rows * this.columns)) * this.rows);
            }
            else if (this.order == NgxGalleryOrder.Row && this.remainingCount) {
                calculatedIndex = Math.floor(index / this.columns);
            }
            else {
                calculatedIndex = Math.floor(index / Math.ceil(this.images.length / this.rows));
            }
            return this.getThumbnailPosition(calculatedIndex, this.rows);
        };
        NgxGalleryThumbnailsComponent.prototype.getThumbnailWidth = function () {
            return this.getThumbnailDimension(this.columns);
        };
        NgxGalleryThumbnailsComponent.prototype.getThumbnailHeight = function () {
            return this.getThumbnailDimension(this.rows);
        };
        NgxGalleryThumbnailsComponent.prototype.setThumbnailsPosition = function () {
            this.thumbnailsLeft = -((100 / this.columns) * this.index) + '%';
            this.thumbnailsMarginLeft = -((this.margin - (((this.columns - 1)
                * this.margin) / this.columns)) * this.index) + 'px';
        };
        NgxGalleryThumbnailsComponent.prototype.setDefaultPosition = function () {
            this.thumbnailsLeft = '0px';
            this.thumbnailsMarginLeft = '0px';
        };
        NgxGalleryThumbnailsComponent.prototype.canShowArrows = function () {
            if (this.remainingCount) {
                return false;
            }
            else if (this.arrows && this.images && this.images.length > this.getVisibleCount()
                && (!this.arrowsAutoHide || this.mouseenter)) {
                return true;
            }
            else {
                return false;
            }
        };
        NgxGalleryThumbnailsComponent.prototype.validateIndex = function () {
            if (this.images) {
                var newIndex = void 0;
                if (this.order === NgxGalleryOrder.Column) {
                    newIndex = Math.floor(this.selectedIndex / this.rows);
                }
                else {
                    newIndex = this.selectedIndex % Math.ceil(this.images.length / this.rows);
                }
                if (this.remainingCount) {
                    newIndex = 0;
                }
                if (newIndex < this.index || newIndex >= this.index + this.columns) {
                    var maxIndex = this.getMaxIndex() - this.columns;
                    this.index = newIndex > maxIndex ? maxIndex : newIndex;
                    this.setThumbnailsPosition();
                }
            }
        };
        NgxGalleryThumbnailsComponent.prototype.getSafeUrl = function (image) {
            return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image));
        };
        NgxGalleryThumbnailsComponent.prototype.getThumbnailPosition = function (index, count) {
            return this.getSafeStyle('calc(' + ((100 / count) * index) + '% + '
                + ((this.margin - (((count - 1) * this.margin) / count)) * index) + 'px)');
        };
        NgxGalleryThumbnailsComponent.prototype.getThumbnailDimension = function (count) {
            if (this.margin !== 0) {
                return this.getSafeStyle('calc(' + (100 / count) + '% - '
                    + (((count - 1) * this.margin) / count) + 'px)');
            }
            else {
                return this.getSafeStyle('calc(' + (100 / count) + '% + 1px)');
            }
        };
        NgxGalleryThumbnailsComponent.prototype.getMaxIndex = function () {
            if (this.order == NgxGalleryOrder.Page) {
                var maxIndex = (Math.floor(this.images.length / this.getVisibleCount()) * this.columns);
                if (this.images.length % this.getVisibleCount() > this.columns) {
                    maxIndex += this.columns;
                }
                else {
                    maxIndex += this.images.length % this.getVisibleCount();
                }
                return maxIndex;
            }
            else {
                return Math.ceil(this.images.length / this.rows);
            }
        };
        NgxGalleryThumbnailsComponent.prototype.getVisibleCount = function () {
            return this.columns * this.rows;
        };
        NgxGalleryThumbnailsComponent.prototype.getSafeStyle = function (value) {
            return this.sanitization.bypassSecurityTrustStyle(value);
        };
        return NgxGalleryThumbnailsComponent;
    }());
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "images", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "links", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "labels", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "linkTarget", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "columns", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "rows", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "arrows", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "arrowsAutoHide", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "margin", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "selectedIndex", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "clickable", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "swipe", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "size", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "arrowPrevIcon", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "arrowNextIcon", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "moveSize", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "order", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "remainingCount", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "lazyLoading", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "actions", void 0);
    __decorate([
        core.Output()
    ], exports.NgxGalleryThumbnailsComponent.prototype, "onActiveChange", void 0);
    __decorate([
        core.HostListener('mouseenter')
    ], exports.NgxGalleryThumbnailsComponent.prototype, "onMouseEnter", null);
    __decorate([
        core.HostListener('mouseleave')
    ], exports.NgxGalleryThumbnailsComponent.prototype, "onMouseLeave", null);
    exports.NgxGalleryThumbnailsComponent = __decorate([
        core.Component({
            selector: 'ngx-gallery-thumbnails',
            template: "<div class=\"ngx-gallery-thumbnails-wrapper ngx-gallery-thumbnail-size-{{size}}\">\n    <div class=\"ngx-gallery-thumbnails\" [style.transform]=\"'translateX(' + thumbnailsLeft + ')'\" [style.marginLeft]=\"thumbnailsMarginLeft\">\n        <a [href]=\"hasLink(i) ? links[i] : '#'\" [target]=\"linkTarget\" class=\"ngx-gallery-thumbnail\" *ngFor=\"let image of getImages(); let i = index;\" [style.background-image]=\"getSafeUrl(image)\" (click)=\"handleClick($event, i)\" [style.width]=\"getThumbnailWidth()\" [style.height]=\"getThumbnailHeight()\" [style.left]=\"getThumbnailLeft(i)\" [style.top]=\"getThumbnailTop(i)\" [ngClass]=\"{ 'ngx-gallery-active': i == selectedIndex, 'ngx-gallery-clickable': clickable }\" [attr.aria-label]=\"labels[i]\">\n            <div class=\"ngx-gallery-icons-wrapper\">\n                <ngx-gallery-action *ngFor=\"let action of actions\" [icon]=\"action.icon\" [disabled]=\"action.disabled\" [titleText]=\"action.titleText\" (onClick)=\"action.onClick($event, i)\"></ngx-gallery-action>\n            </div>\n            <div class=\"ngx-gallery-remaining-count-overlay\" *ngIf=\"remainingCount && remainingCountValue && (i == (rows * columns) - 1)\">\n                <span class=\"ngx-gallery-remaining-count\">+{{remainingCountValue}}</span>\n            </div>\n        </a>\n    </div>\n</div>\n<ngx-gallery-arrows *ngIf=\"canShowArrows()\" (onPrevClick)=\"moveLeft()\" (onNextClick)=\"moveRight()\" [prevDisabled]=\"!canMoveLeft()\" [nextDisabled]=\"!canMoveRight()\" [arrowPrevIcon]=\"arrowPrevIcon\" [arrowNextIcon]=\"arrowNextIcon\"></ngx-gallery-arrows>\n",
            styles: [":host{display:inline-block;position:relative;width:100%}.ngx-gallery-thumbnails-wrapper{height:100%;overflow:hidden;position:absolute;width:100%}.ngx-gallery-thumbnails{-webkit-transform:translateX(0);-webkit-transition:-webkit-transform .5s ease-in-out;height:100%;left:0;position:absolute;transform:translateX(0);transition:-webkit-transform .5s ease-in-out;transition:transform .5s ease-in-out;transition:transform .5s ease-in-out,-webkit-transform .5s ease-in-out;width:100%;will-change:transform}.ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-position:50%;background-repeat:no-repeat;height:100%;position:absolute;text-decoration:none}.ngx-gallery-thumbnail-size-cover .ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-size:cover}.ngx-gallery-thumbnail-size-contain .ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-size:contain}.ngx-gallery-remaining-count-overlay{background-color:rgba(0,0,0,.4);height:100%;left:0;position:absolute;top:0;width:100%}.ngx-gallery-remaining-count{-webkit-transform:translate(-50%,-50%);color:#fff;font-size:30px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}"]
        })
    ], exports.NgxGalleryThumbnailsComponent);

    exports.NgxGalleryComponent = /** @class */ (function () {
        function NgxGalleryComponent(myElement) {
            this.myElement = myElement;
            this.imagesReady = new core.EventEmitter();
            this.change = new core.EventEmitter();
            this.previewOpen = new core.EventEmitter();
            this.previewClose = new core.EventEmitter();
            this.previewChange = new core.EventEmitter();
            this.oldImagesLength = 0;
            this.selectedIndex = 0;
            this.breakpoint = undefined;
            this.prevBreakpoint = undefined;
        }
        NgxGalleryComponent.prototype.ngOnInit = function () {
            this.options = this.options.map(function (opt) { return new NgxGalleryOptions(opt); });
            this.sortOptions();
            this.setBreakpoint();
            this.setOptions();
            this.checkFullWidth();
            if (this.currentOptions) {
                this.selectedIndex = this.currentOptions.startIndex;
            }
        };
        NgxGalleryComponent.prototype.ngDoCheck = function () {
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
        };
        NgxGalleryComponent.prototype.ngAfterViewInit = function () {
            this.checkFullWidth();
        };
        NgxGalleryComponent.prototype.onResize = function () {
            var _this = this;
            this.setBreakpoint();
            if (this.prevBreakpoint !== this.breakpoint) {
                this.setOptions();
                this.resetThumbnails();
            }
            if (this.currentOptions && this.currentOptions.fullWidth) {
                if (this.fullWidthTimeout) {
                    clearTimeout(this.fullWidthTimeout);
                }
                this.fullWidthTimeout = setTimeout(function () {
                    _this.checkFullWidth();
                }, 200);
            }
        };
        NgxGalleryComponent.prototype.getImageHeight = function () {
            return (this.currentOptions && this.currentOptions.thumbnails) ?
                this.currentOptions.imagePercent + '%' : '100%';
        };
        NgxGalleryComponent.prototype.getThumbnailsHeight = function () {
            if (this.currentOptions && this.currentOptions.image) {
                return 'calc(' + this.currentOptions.thumbnailsPercent + '% - '
                    + this.currentOptions.thumbnailsMargin + 'px)';
            }
            else {
                return '100%';
            }
        };
        NgxGalleryComponent.prototype.getThumbnailsMarginTop = function () {
            if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsBottom) {
                return this.currentOptions.thumbnailsMargin + 'px';
            }
            else {
                return '0px';
            }
        };
        NgxGalleryComponent.prototype.getThumbnailsMarginBottom = function () {
            if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsTop) {
                return this.currentOptions.thumbnailsMargin + 'px';
            }
            else {
                return '0px';
            }
        };
        NgxGalleryComponent.prototype.openPreview = function (index) {
            if (this.currentOptions.previewCustom) {
                this.currentOptions.previewCustom(index);
            }
            else {
                this.previewEnabled = true;
                this.preview.open(index);
            }
        };
        NgxGalleryComponent.prototype.onPreviewOpen = function () {
            this.previewOpen.emit();
            if (this.image && this.image.autoPlay) {
                this.image.stopAutoPlay();
            }
        };
        NgxGalleryComponent.prototype.onPreviewClose = function () {
            this.previewEnabled = false;
            this.previewClose.emit();
            if (this.image && this.image.autoPlay) {
                this.image.startAutoPlay();
            }
        };
        NgxGalleryComponent.prototype.selectFromImage = function (index) {
            this.select(index);
        };
        NgxGalleryComponent.prototype.selectFromThumbnails = function (index) {
            this.select(index);
            if (this.currentOptions && this.currentOptions.thumbnails && this.currentOptions.preview
                && (!this.currentOptions.image || this.currentOptions.thumbnailsRemainingCount)) {
                this.openPreview(this.selectedIndex);
            }
        };
        NgxGalleryComponent.prototype.show = function (index) {
            this.select(index);
        };
        NgxGalleryComponent.prototype.showNext = function () {
            this.image.showNext();
        };
        NgxGalleryComponent.prototype.showPrev = function () {
            this.image.showPrev();
        };
        NgxGalleryComponent.prototype.canShowNext = function () {
            if (this.images && this.currentOptions) {
                return (this.currentOptions.imageInfinityMove || this.selectedIndex < this.images.length - 1)
                    ? true : false;
            }
            else {
                return false;
            }
        };
        NgxGalleryComponent.prototype.canShowPrev = function () {
            if (this.images && this.currentOptions) {
                return (this.currentOptions.imageInfinityMove || this.selectedIndex > 0) ? true : false;
            }
            else {
                return false;
            }
        };
        NgxGalleryComponent.prototype.previewSelect = function (index) {
            this.previewChange.emit({ index: index, image: this.images[index] });
        };
        NgxGalleryComponent.prototype.moveThumbnailsRight = function () {
            this.thubmnails.moveRight();
        };
        NgxGalleryComponent.prototype.moveThumbnailsLeft = function () {
            this.thubmnails.moveLeft();
        };
        NgxGalleryComponent.prototype.canMoveThumbnailsRight = function () {
            return this.thubmnails.canMoveRight();
        };
        NgxGalleryComponent.prototype.canMoveThumbnailsLeft = function () {
            return this.thubmnails.canMoveLeft();
        };
        NgxGalleryComponent.prototype.resetThumbnails = function () {
            if (this.thubmnails) {
                this.thubmnails.reset(this.currentOptions.startIndex);
            }
        };
        NgxGalleryComponent.prototype.select = function (index) {
            this.selectedIndex = index;
            this.change.emit({
                index: index,
                image: this.images[index]
            });
        };
        NgxGalleryComponent.prototype.checkFullWidth = function () {
            if (this.currentOptions && this.currentOptions.fullWidth) {
                this.width = document.body.clientWidth + 'px';
                this.left = (-(document.body.clientWidth -
                    this.myElement.nativeElement.parentNode.innerWidth) / 2) + 'px';
            }
        };
        NgxGalleryComponent.prototype.setImages = function () {
            this.smallImages = this.images.map(function (img) { return img.small; });
            this.mediumImages = this.images.map(function (img, i) { return new NgxGalleryOrderedImage({
                src: img.medium,
                index: i
            }); });
            this.bigImages = this.images.map(function (img) { return img.big; });
            this.descriptions = this.images.map(function (img) { return img.description; });
            this.links = this.images.map(function (img) { return img.url; });
            this.labels = this.images.map(function (img) { return img.label; });
        };
        NgxGalleryComponent.prototype.setBreakpoint = function () {
            this.prevBreakpoint = this.breakpoint;
            var breakpoints;
            if (typeof window !== 'undefined') {
                breakpoints = this.options.filter(function (opt) { return opt.breakpoint >= window.innerWidth; })
                    .map(function (opt) { return opt.breakpoint; });
            }
            if (breakpoints && breakpoints.length) {
                this.breakpoint = breakpoints.pop();
            }
            else {
                this.breakpoint = undefined;
            }
        };
        NgxGalleryComponent.prototype.sortOptions = function () {
            this.options = __spread(this.options.filter(function (a) { return a.breakpoint === undefined; }), this.options
                .filter(function (a) { return a.breakpoint !== undefined; })
                .sort(function (a, b) { return b.breakpoint - a.breakpoint; }));
        };
        NgxGalleryComponent.prototype.setOptions = function () {
            var _this = this;
            this.currentOptions = new NgxGalleryOptions({});
            this.options
                .filter(function (opt) { return opt.breakpoint === undefined || opt.breakpoint >= _this.breakpoint; })
                .map(function (opt) { return _this.combineOptions(_this.currentOptions, opt); });
            this.width = this.currentOptions.width;
            this.height = this.currentOptions.height;
        };
        NgxGalleryComponent.prototype.combineOptions = function (first, second) {
            Object.keys(second).map(function (val) { return first[val] = second[val] !== undefined ? second[val] : first[val]; });
        };
        return NgxGalleryComponent;
    }());
    __decorate([
        core.Input()
    ], exports.NgxGalleryComponent.prototype, "options", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryComponent.prototype, "images", void 0);
    __decorate([
        core.Output()
    ], exports.NgxGalleryComponent.prototype, "imagesReady", void 0);
    __decorate([
        core.Output()
    ], exports.NgxGalleryComponent.prototype, "change", void 0);
    __decorate([
        core.Output()
    ], exports.NgxGalleryComponent.prototype, "previewOpen", void 0);
    __decorate([
        core.Output()
    ], exports.NgxGalleryComponent.prototype, "previewClose", void 0);
    __decorate([
        core.Output()
    ], exports.NgxGalleryComponent.prototype, "previewChange", void 0);
    __decorate([
        core.ViewChild(exports.NgxGalleryPreviewComponent)
    ], exports.NgxGalleryComponent.prototype, "preview", void 0);
    __decorate([
        core.ViewChild(exports.NgxGalleryImageComponent)
    ], exports.NgxGalleryComponent.prototype, "image", void 0);
    __decorate([
        core.ViewChild(exports.NgxGalleryThumbnailsComponent)
    ], exports.NgxGalleryComponent.prototype, "thubmnails", void 0);
    __decorate([
        core.HostBinding('style.width')
    ], exports.NgxGalleryComponent.prototype, "width", void 0);
    __decorate([
        core.HostBinding('style.height')
    ], exports.NgxGalleryComponent.prototype, "height", void 0);
    __decorate([
        core.HostBinding('style.left')
    ], exports.NgxGalleryComponent.prototype, "left", void 0);
    __decorate([
        core.HostListener('window:resize')
    ], exports.NgxGalleryComponent.prototype, "onResize", null);
    exports.NgxGalleryComponent = __decorate([
        core.Component({
            selector: 'ngx-gallery',
            template: "\n    <div class=\"ngx-gallery-layout {{currentOptions?.layout}}\">\n      <ngx-gallery-image *ngIf=\"currentOptions?.image\" [style.height]=\"getImageHeight()\" [images]=\"mediumImages\" [clickable]=\"currentOptions?.preview\" [selectedIndex]=\"selectedIndex\" [arrows]=\"currentOptions?.imageArrows\" [arrowsAutoHide]=\"currentOptions?.imageArrowsAutoHide\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [swipe]=\"currentOptions?.imageSwipe\" [animation]=\"currentOptions?.imageAnimation\" [size]=\"currentOptions?.imageSize\" [autoPlay]=\"currentOptions?.imageAutoPlay\" [autoPlayInterval]=\"currentOptions?.imageAutoPlayInterval\" [autoPlayPauseOnHover]=\"currentOptions?.imageAutoPlayPauseOnHover\" [infinityMove]=\"currentOptions?.imageInfinityMove\"  [lazyLoading]=\"currentOptions?.lazyLoading\" [actions]=\"currentOptions?.imageActions\" [descriptions]=\"descriptions\" [showDescription]=\"currentOptions?.imageDescription\" [bullets]=\"currentOptions?.imageBullets\" (onClick)=\"openPreview($event)\" (onActiveChange)=\"selectFromImage($event)\"></ngx-gallery-image>\n\n      <ngx-gallery-thumbnails *ngIf=\"currentOptions?.thumbnails\" [style.marginTop]=\"getThumbnailsMarginTop()\" [style.marginBottom]=\"getThumbnailsMarginBottom()\" [style.height]=\"getThumbnailsHeight()\" [images]=\"smallImages\" [links]=\"currentOptions?.thumbnailsAsLinks ? links : []\" [labels]=\"labels\" [linkTarget]=\"currentOptions?.linkTarget\" [selectedIndex]=\"selectedIndex\" [columns]=\"currentOptions?.thumbnailsColumns\" [rows]=\"currentOptions?.thumbnailsRows\" [margin]=\"currentOptions?.thumbnailMargin\" [arrows]=\"currentOptions?.thumbnailsArrows\" [arrowsAutoHide]=\"currentOptions?.thumbnailsArrowsAutoHide\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [clickable]=\"currentOptions?.image || currentOptions?.preview\" [swipe]=\"currentOptions?.thumbnailsSwipe\" [size]=\"currentOptions?.thumbnailSize\" [moveSize]=\"currentOptions?.thumbnailsMoveSize\" [order]=\"currentOptions?.thumbnailsOrder\" [remainingCount]=\"currentOptions?.thumbnailsRemainingCount\" [lazyLoading]=\"currentOptions?.lazyLoading\" [actions]=\"currentOptions?.thumbnailActions\"  (onActiveChange)=\"selectFromThumbnails($event)\"></ngx-gallery-thumbnails>\n\n      <ngx-gallery-preview [images]=\"bigImages\" [descriptions]=\"descriptions\" [showDescription]=\"currentOptions?.previewDescription\" [arrowPrevIcon]=\"currentOptions?.arrowPrevIcon\" [arrowNextIcon]=\"currentOptions?.arrowNextIcon\" [closeIcon]=\"currentOptions?.closeIcon\" [fullscreenIcon]=\"currentOptions?.fullscreenIcon\" [spinnerIcon]=\"currentOptions?.spinnerIcon\" [arrows]=\"currentOptions?.previewArrows\" [arrowsAutoHide]=\"currentOptions?.previewArrowsAutoHide\" [swipe]=\"currentOptions?.previewSwipe\" [fullscreen]=\"currentOptions?.previewFullscreen\" [forceFullscreen]=\"currentOptions?.previewForceFullscreen\" [closeOnClick]=\"currentOptions?.previewCloseOnClick\" [closeOnEsc]=\"currentOptions?.previewCloseOnEsc\" [keyboardNavigation]=\"currentOptions?.previewKeyboardNavigation\" [animation]=\"currentOptions?.previewAnimation\" [autoPlay]=\"currentOptions?.previewAutoPlay\" [autoPlayInterval]=\"currentOptions?.previewAutoPlayInterval\" [autoPlayPauseOnHover]=\"currentOptions?.previewAutoPlayPauseOnHover\" [infinityMove]=\"currentOptions?.previewInfinityMove\" [zoom]=\"currentOptions?.previewZoom\" [zoomStep]=\"currentOptions?.previewZoomStep\" [zoomMax]=\"currentOptions?.previewZoomMax\" [zoomMin]=\"currentOptions?.previewZoomMin\" [zoomInIcon]=\"currentOptions?.zoomInIcon\" [zoomOutIcon]=\"currentOptions?.zoomOutIcon\" [actions]=\"currentOptions?.actions\" [rotate]=\"currentOptions?.previewRotate\" [rotateLeftIcon]=\"currentOptions?.rotateLeftIcon\" [rotateRightIcon]=\"currentOptions?.rotateRightIcon\" [download]=\"currentOptions?.previewDownload\" [downloadIcon]=\"currentOptions?.downloadIcon\" [bullets]=\"currentOptions?.previewBullets\" (onClose)=\"onPreviewClose()\" (onOpen)=\"onPreviewOpen()\" (onActiveChange)=\"previewSelect($event)\" [class.ngx-gallery-active]=\"previewEnabled\"></ngx-gallery-preview>\n    </div>\n  ",
            providers: [exports.NgxGalleryHelperService],
            styles: [":host{display:inline-block}:host>*{box-sizing:border-box;float:left}:host>.ngx-gallery-icon{color:#fff;display:inline-block;font-size:25px;position:absolute;z-index:2000}:host>.ngx-gallery-icon .ngx-gallery-icon-content{display:block}:host>.ngx-gallery-clickable{cursor:pointer}:host>.ngx-gallery-icons-wrapper .ngx-gallery-icon{cursor:pointer;font-size:20px;margin-right:5px;margin-top:5px;position:relative}:host>.ngx-gallery-icons-wrapper{float:right}:host .ngx-gallery-layout{-webkit-box-direction:normal;-webkit-box-orient:vertical;display:-webkit-box;display:flex;flex-direction:column;height:100%;width:100%}:host .ngx-gallery-layout.thumbnails-top ngx-gallery-image{-webkit-box-ordinal-group:3;order:2}:host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-image,:host .ngx-gallery-layout.thumbnails-top ngx-gallery-thumbnails{-webkit-box-ordinal-group:2;order:1}:host .ngx-gallery-layout.thumbnails-bottom ngx-gallery-thumbnails{-webkit-box-ordinal-group:3;order:2}"]
        })
    ], exports.NgxGalleryComponent);

    exports.NgxGalleryActionComponent = /** @class */ (function () {
        function NgxGalleryActionComponent() {
            this.disabled = false;
            this.titleText = '';
            this.onClick = new core.EventEmitter();
        }
        NgxGalleryActionComponent.prototype.handleClick = function (event) {
            if (!this.disabled) {
                this.onClick.emit(event);
            }
            event.stopPropagation();
            event.preventDefault();
        };
        return NgxGalleryActionComponent;
    }());
    __decorate([
        core.Input()
    ], exports.NgxGalleryActionComponent.prototype, "icon", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryActionComponent.prototype, "disabled", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryActionComponent.prototype, "titleText", void 0);
    __decorate([
        core.Output()
    ], exports.NgxGalleryActionComponent.prototype, "onClick", void 0);
    exports.NgxGalleryActionComponent = __decorate([
        core.Component({
            selector: 'ngx-gallery-action',
            template: "<div class=\"ngx-gallery-icon\" [class.ngx-gallery-icon-disabled]=\"disabled\"\naria-hidden=\"true\"\ntitle=\"{{ titleText }}\"\n(click)=\"handleClick($event)\">\n    <i class=\"ngx-gallery-icon-content {{ icon }}\"></i>\n</div>",
            changeDetection: core.ChangeDetectionStrategy.OnPush,
            styles: [""]
        })
    ], exports.NgxGalleryActionComponent);

    exports.NgxGalleryArrowsComponent = /** @class */ (function () {
        function NgxGalleryArrowsComponent() {
            this.onPrevClick = new core.EventEmitter();
            this.onNextClick = new core.EventEmitter();
        }
        NgxGalleryArrowsComponent.prototype.handlePrevClick = function () {
            this.onPrevClick.emit();
        };
        NgxGalleryArrowsComponent.prototype.handleNextClick = function () {
            this.onNextClick.emit();
        };
        return NgxGalleryArrowsComponent;
    }());
    __decorate([
        core.Input()
    ], exports.NgxGalleryArrowsComponent.prototype, "prevDisabled", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryArrowsComponent.prototype, "nextDisabled", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryArrowsComponent.prototype, "arrowPrevIcon", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryArrowsComponent.prototype, "arrowNextIcon", void 0);
    __decorate([
        core.Output()
    ], exports.NgxGalleryArrowsComponent.prototype, "onPrevClick", void 0);
    __decorate([
        core.Output()
    ], exports.NgxGalleryArrowsComponent.prototype, "onNextClick", void 0);
    exports.NgxGalleryArrowsComponent = __decorate([
        core.Component({
            selector: 'ngx-gallery-arrows',
            template: "<div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-left\">\n    <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handlePrevClick()\" [class.ngx-gallery-disabled]=\"prevDisabled\">\n        <i class=\"ngx-gallery-icon-content {{arrowPrevIcon}}\"></i>\n    </div>\n</div>\n<div class=\"ngx-gallery-arrow-wrapper ngx-gallery-arrow-right\">\n    <div class=\"ngx-gallery-icon ngx-gallery-arrow\" aria-hidden=\"true\" (click)=\"handleNextClick()\" [class.ngx-gallery-disabled]=\"nextDisabled\">\n        <i class=\"ngx-gallery-icon-content {{arrowNextIcon}}\"></i>\n    </div>\n</div>",
            styles: [".ngx-gallery-arrow-wrapper{display:table;height:100%;position:absolute;table-layout:fixed;width:1px;z-index:2000}.ngx-gallery-arrow-left{left:0}.ngx-gallery-arrow-right{right:0}.ngx-gallery-arrow{-webkit-transform:translateY(-50%);cursor:pointer;top:50%;transform:translateY(-50%)}.ngx-gallery-arrow.ngx-gallery-disabled{cursor:default;opacity:.6}.ngx-gallery-arrow-left .ngx-gallery-arrow{left:10px}.ngx-gallery-arrow-right .ngx-gallery-arrow{right:10px}"]
        })
    ], exports.NgxGalleryArrowsComponent);

    exports.NgxGalleryBulletsComponent = /** @class */ (function () {
        function NgxGalleryBulletsComponent() {
            this.active = 0;
            this.onChange = new core.EventEmitter();
        }
        NgxGalleryBulletsComponent.prototype.getBullets = function () {
            return Array(this.count);
        };
        NgxGalleryBulletsComponent.prototype.handleChange = function (event, index) {
            this.onChange.emit(index);
        };
        return NgxGalleryBulletsComponent;
    }());
    __decorate([
        core.Input()
    ], exports.NgxGalleryBulletsComponent.prototype, "count", void 0);
    __decorate([
        core.Input()
    ], exports.NgxGalleryBulletsComponent.prototype, "active", void 0);
    __decorate([
        core.Output()
    ], exports.NgxGalleryBulletsComponent.prototype, "onChange", void 0);
    exports.NgxGalleryBulletsComponent = __decorate([
        core.Component({
            selector: 'ngx-gallery-bullets',
            template: "<div class=\"ngx-gallery-bullet\" *ngFor=\"let bullet of getBullets(); let i = index;\" (click)=\"handleChange($event, i)\" [ngClass]=\"{ 'ngx-gallery-active': i == active }\"></div>",
            styles: [":host{-webkit-transform:translateX(-50%);bottom:0;display:-webkit-inline-box;display:inline-flex;left:50%;padding:10px;position:absolute;transform:translateX(-50%);z-index:2000}.ngx-gallery-bullet{background:#fff;border-radius:50%;cursor:pointer;height:10px;width:10px}.ngx-gallery-bullet:not(:first-child){margin-left:5px}.ngx-gallery-bullet.ngx-gallery-active,.ngx-gallery-bullet:hover{background:#000}"]
        })
    ], exports.NgxGalleryBulletsComponent);

    exports.NgxGalleryModule = /** @class */ (function () {
        function NgxGalleryModule() {
        }
        return NgxGalleryModule;
    }());
    exports.NgxGalleryModule = __decorate([
        core.NgModule({
            declarations: [
                exports.NgxGalleryComponent,
                exports.NgxGalleryPreviewComponent,
                exports.NgxGalleryImageComponent,
                exports.NgxGalleryThumbnailsComponent,
                exports.NgxGalleryActionComponent,
                exports.NgxGalleryArrowsComponent,
                exports.NgxGalleryBulletsComponent
            ],
            imports: [
                common.CommonModule
            ],
            exports: [exports.NgxGalleryComponent]
        })
    ], exports.NgxGalleryModule);

    var NgxGalleryImage = /** @class */ (function () {
        function NgxGalleryImage(obj) {
            this.small = obj.small;
            this.medium = obj.medium;
            this.big = obj.big;
            this.description = obj.description;
            this.url = obj.url;
            this.label = obj.label;
        }
        return NgxGalleryImage;
    }());

    /*
     * Public API Surface of ngx-gallery
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgxGalleryAction = NgxGalleryAction;
    exports.NgxGalleryAnimation = NgxGalleryAnimation;
    exports.NgxGalleryImage = NgxGalleryImage;
    exports.NgxGalleryImageSize = NgxGalleryImageSize;
    exports.NgxGalleryLayout = NgxGalleryLayout;
    exports.NgxGalleryOptions = NgxGalleryOptions;
    exports.NgxGalleryOrder = NgxGalleryOrder;
    exports.NgxGalleryOrderedImage = NgxGalleryOrderedImage;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-gallery-9.umd.js.map
