import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@core/http/http.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {DynamicFormsCoreModule} from '@ng-dynamic-forms/core';
import {DynamicFormsNGBootstrapUIModule} from '@ng-dynamic-forms/ui-ng-bootstrap';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ModalHeaderComponent} from '@core/components/modals/modal-header/modal-header.component';
import {ModalFooterComponent} from '@core/components/modals/modal-footer/modal-footer.component';
import {
    CoreFormValidationMessageComponent
} from '@core/components/core-form-validation-message/core-form-validation-message.component';
import {
    AppDateFormatPipe, AppDateTimeToDefaultDateTimeFormatPipe, AppDateTimeToTimeFormatPipe,
    AppDefaultDateTimeFormatToDateTimePipe, AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe,
    AppEnumToHumanReadablePipe, AppFlattenObjectPipe, AppLocalDateAggregateSumsToGraphDataPipe, AppNonZeroDayPipe,
    AppObjectArrayToPropertyArrayPipe, AppOffsetToPageNumberPipe, AppPageNumberToOffsetPipe, AppSortNumberKeyValuePipe,
    AppStringToNumberPipe, AppWeekNumberToWeekStartDayNumberPipe
} from '@core/core.pipe';
import {NgxMaskModule} from 'ngx-mask';
import {
    CoreTagInputFormControlComponent
} from '@core/components/forms/core-tag-input-form-control/core-tag-input-form-control.component';
import {TagInputModule} from 'ngx-chips';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {CoreGraphRangeComponent} from '@core/components/core-graph-range/core-graph-range.component';
import {FeatherModule} from 'angular-feather';
import {
    NgxStripeModule, StripeCardComponent, StripeCardCvcComponent, StripeCardExpiryComponent, StripeCardGroupDirective,
    StripeCardNumberComponent
} from 'ngx-stripe';
import {environment} from '@environment/environment';

import {
    ArrowLeft, ArrowRight, Bell, Calendar, Camera, Check, CheckCircle, ChevronDown, ChevronLeft, ChevronRight,
    ChevronsRight, ChevronUp, Clipboard, Clock, Copy, Delete, DollarSign, Download, Edit2, Edit3, Facebook, FileText,
    Filter, Github, Globe, Hash, Heart, HelpCircle, Image, Info, Instagram, Link, Linkedin, Lock, Mail, MapPin, Minus,
    MoreHorizontal, MoreVertical, Percent, PieChart, Plus, PlusCircle, Printer, RotateCcw, Search, Send, Share2,
    Smartphone, Tag, ThumbsUp, Trash, Trash2, Twitter, Upload, User, UserPlus, Users, X, XCircle, MessageSquare
} from 'angular-feather/icons';
import {ClipboardModule} from 'ngx-clipboard';
import {CoreClickStopPropogationDirective} from './directives/core-click-stop-propogation.directive';
import {Angular2PromiseButtonModule} from '@core/external/angular2-promise-buttons';
import {PROMISE_BUTTON_MODULE_OPTIONS} from '@core/core.constants';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {
    CoreAutoCompleteFormControlComponent
} from '@core/components/forms/core-auto-complete-form-control/core-auto-complete-form-control.component';
import {
    CoreUpdateContentMetaComponent, CoreUpdateContentMetaNoTemplateComponent
} from '@core/components/core-update-content-meta/core-update-content-meta.component';
import {NgxCsvParserModule} from 'ngx-csv-parser';
import {
    CoreGoogleAddressAutoCompletionFormControlComponent
} from './components/forms/core-google-address-auto-completion-form-control/core-google-address-auto-completion-form-control.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {ImageCropperModule} from 'ngx-image-cropper';


const icons = {
    Camera,
    Heart,
    Github,
    Search,
    MapPin,
    ChevronDown,
    Bell,
    Instagram,
    Share2,
    Users,
    Calendar,
    Plus,
    Mail,
    Lock,
    User,
    Facebook,
    Twitter,
    Linkedin,
    Clock, HelpCircle, DollarSign, Delete, Trash2, Trash, Check,
    X, Minus, ArrowRight, ChevronRight, Link, Copy, Tag, PieChart, Hash, Info, Edit2, Percent,
    ChevronLeft, ChevronsRight, Clipboard, Edit3, Download, ChevronUp, PlusCircle, Filter, Send,
    UserPlus, MoreHorizontal, XCircle, Globe, FileText, Image, Upload, Smartphone, ArrowLeft,
    MoreVertical, RotateCcw, ThumbsUp, CheckCircle, Printer, MessageSquare
};

@NgModule({

    declarations: [
        ModalHeaderComponent,
        ModalFooterComponent,
        CoreFormValidationMessageComponent,
        AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe,
        AppNonZeroDayPipe,
        AppSortNumberKeyValuePipe,
        AppStringToNumberPipe,
        AppWeekNumberToWeekStartDayNumberPipe,
        AppObjectArrayToPropertyArrayPipe,
        AppPageNumberToOffsetPipe,
        AppOffsetToPageNumberPipe,
        CoreTagInputFormControlComponent,
        AppFlattenObjectPipe,
        AppLocalDateAggregateSumsToGraphDataPipe,
        CoreGraphRangeComponent,
        AppDateTimeToDefaultDateTimeFormatPipe,
        AppDefaultDateTimeFormatToDateTimePipe,
        AppDateFormatPipe,
        AppDateTimeToTimeFormatPipe,
        CoreClickStopPropogationDirective,
        AppEnumToHumanReadablePipe,
        CoreAutoCompleteFormControlComponent,
        CoreUpdateContentMetaComponent,
        CoreUpdateContentMetaNoTemplateComponent,
        CoreGoogleAddressAutoCompletionFormControlComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        NgbModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        DynamicFormsCoreModule,
        DynamicFormsNGBootstrapUIModule,
        InfiniteScrollModule,
        // MomentModule,
        NgxMaskModule.forRoot(),
        LoadingBarRouterModule,
        LoadingBarModule,
        NgxDatatableModule,
        TagInputModule,
        NgxChartsModule,
        FeatherModule.pick(icons),
        ClipboardModule,
        Angular2PromiseButtonModule.forRoot(PROMISE_BUTTON_MODULE_OPTIONS),
        NgxStripeModule.forRoot(environment.stripe.publicKey),
        AutocompleteLibModule,
        NgxCsvParserModule,
        ClipboardModule,
        StripeCardGroupDirective,
        StripeCardNumberComponent,
        StripeCardExpiryComponent,
        StripeCardCvcComponent,
        StripeCardComponent,
        GoogleMapsModule,
        ImageCropperModule,
    ],


    exports: [
        CommonModule,
        HttpModule,
        NgbModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        DynamicFormsCoreModule,
        DynamicFormsNGBootstrapUIModule,
        InfiniteScrollModule,
        // MomentModule,
        LoadingBarRouterModule,
        LoadingBarModule,
        NgxDatatableModule,
        ModalHeaderComponent,
        ModalFooterComponent,
        CoreFormValidationMessageComponent,
        AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe,
        AppNonZeroDayPipe,
        AppSortNumberKeyValuePipe,
        AppStringToNumberPipe,
        AppWeekNumberToWeekStartDayNumberPipe,
        AppObjectArrayToPropertyArrayPipe,
        AppPageNumberToOffsetPipe,
        NgxMaskModule,
        AppOffsetToPageNumberPipe,
        CoreTagInputFormControlComponent,
        TagInputModule,
        AppFlattenObjectPipe,
        NgxChartsModule,
        AppLocalDateAggregateSumsToGraphDataPipe,
        CoreGraphRangeComponent,
        FeatherModule,
        AppDateTimeToDefaultDateTimeFormatPipe,
        AppDateTimeToTimeFormatPipe,
        AppDefaultDateTimeFormatToDateTimePipe,
        AppDateFormatPipe,
        CoreClickStopPropogationDirective,
        Angular2PromiseButtonModule,
        AppEnumToHumanReadablePipe,
        AutocompleteLibModule,
        CoreAutoCompleteFormControlComponent,
        CoreUpdateContentMetaComponent,
        NgxCsvParserModule,
        ClipboardModule,

        StripeCardGroupDirective,
        StripeCardNumberComponent,
        StripeCardExpiryComponent,
        StripeCardCvcComponent,
        StripeCardComponent,

    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {
    constructor() {

    }
}

