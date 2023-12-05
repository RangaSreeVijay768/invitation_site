// import {BaseComponent} from '@core/components/base.component';
// import {
//   DynamicCheckboxGroupModel,
//   DynamicCheckboxModel,
//   DynamicDatePickerModel,
//   DynamicFormControlModel,
//   DynamicFormService,
//   DynamicFormValueControlModel,
//   DynamicInputModel,
//   DynamicRadioGroupModel,
//   DynamicSelectModel,
//   DynamicTextAreaModel,
//   DynamicTimePickerModel
// } from '@ng-dynamic-forms/core';
// import {UntypedFormGroup} from '@angular/forms';
// import { AfterViewInit, ChangeDetectorRef, Injector, Directive } from '@angular/core';
// import {FormConstants} from '@core/form.constants';
// import validator from 'validator';
// import {CommonsService} from '@core/commons.service';
// // import {Moment} from 'moment';
// import {DateTime} from 'luxon';
// import {AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe} from '@core/core.pipe';
//
// @Directive()
// export abstract class FormComponent extends BaseComponent implements AfterViewInit {
//
//   formGroup: UntypedFormGroup;
//   formModel: DynamicFormControlModel[];
//
//   formModelMap: { [key: string]: DynamicFormControlModel };
//   appDynamicFormControlModelArrayToDynamicFormControlModelMapPipe
//     = new AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe();
//
//
//   changeDetectorDef: ChangeDetectorRef;
//
//   protected formService: DynamicFormService;
//
//   constructor(injector: Injector) {
//     super(injector);
//     this.formService = injector.get(DynamicFormService);
//     this.changeDetectorDef = injector.get(ChangeDetectorRef);
//   }
//
//   abstract getFormModel(): DynamicFormControlModel[];
//
//   createFormModel() {
//     this.formGroup = this.formService.createFormGroup(this.formModel);
//     this.formModelMap =
//       this.appDynamicFormControlModelArrayToDynamicFormControlModelMapPipe.transform(
//         this.formModel);
//   }
//
//   // noinspection TsLint
//   ngOnInit() {
//     this.formModel = this.getFormModel();
//     this.createFormModel();
//     super.ngOnInit();
//   }
//
//   // for form update
//   ngAfterViewInit() {
//     this.afterInitializeComponent();
//     this.changeDetectorDef.detectChanges(); // run change detection after changes
//   }
//
//   registerModelForChanges<T>(model: DynamicFormValueControlModel<T>) {
//     model.valueChanges.subscribe(value => {
//       this.changeDetectorDef.markForCheck();
//     });
//   }
//
//   abstract afterInitializeComponent();
//
//   protected getInputModel(id: string): DynamicInputModel {
//     return this.formService.findById(id, this.formModel) as DynamicInputModel;
//   }
//
//   protected getDateModel(id: string): DynamicDatePickerModel {
//     return this.formService.findById(id, this.formModel) as DynamicDatePickerModel;
//   }
//
//   protected getTimeModel(id: string): DynamicTimePickerModel {
//     return this.formService.findById(id, this.formModel) as DynamicTimePickerModel;
//   }
//
//   protected getRadioGroupInputModel<T>(id: string): DynamicRadioGroupModel<T> {
//     return this.formService.findById(id, this.formModel) as DynamicRadioGroupModel<T>;
//   }
//
//   protected getCheckboxInputModel(id: string): DynamicCheckboxModel {
//     return this.formService.findById(id, this.formModel) as DynamicCheckboxModel;
//   }
//
//   protected getCheckboxGroupInputModel(id: string): DynamicCheckboxGroupModel {
//     return this.formService.findById(id, this.formModel) as DynamicCheckboxGroupModel;
//   }
//
//   protected getDateModelValue(id: string): Date {
//     const value: any = this.getDateModel(id).value;
//     return value ? new Date(value.year, value.month - 1, value.day) : undefined;
//   }
//
//   protected getCheckboxGroupModelValueAsArray(id: string): any[] {
//     const map = this.getCheckboxGroupInputModel(id)
//       .group
//       .map(group => {
//         const val = {};
//         // @ts-ignore
//         val.id = group.id;
//         // @ts-ignore
//         val.checked = group.checked;
//         return val;
//       });
//     return map;
//   }
//
//   protected getCheckboxGroupModelCheckedValues(id: string): any[] {
//     const map = this.getCheckboxGroupModelValueAsArray(id);
//
//     return map.filter(value => value.checked).map(value => value.id);
//   }
//
//   protected getInputModelValueAsString(id: string): string {
//     const value = this.getInputModel(id)
//       .value;
//     return value ? value.toString() : undefined;
//   }
//
//   protected getTimeModelValueAsString(id: string): string {
//     const value = this.getTimeModel(id)
//       .value;
//     return value ? CommonsService.getTimeStringFromJSON(value) : undefined;
//   }
//
//   protected getInputModelValueAsNumber(id: string, noSymbols?: boolean): number {
//     const value = this.getInputModelValueAsString(id);
//     return validator.isNumeric(value || '', {no_symbols: CommonsService.isNullOrUndefined(noSymbols) ? true : noSymbols}) ?
//       Number(value) :
//       undefined;
//   }
//
//   resetForm(value?: any, options?: any) {
//     this.formGroup.reset(value, options);
//   }
// }
//
// /**
//  * @deprecated Use Form Builder Patter
//  */
// export function getTextInputModel(id: string, label?: string, maxLength?: number,
//                                   placeHolder?: string, inputType?: string) {
//   return new DynamicInputModel({
//     id,
//     label,
//     inputType: inputType || 'text',
//     maxLength: maxLength || FormConstants.DEFAULT_TEXT_MAX_LENGTH,
//     placeholder: placeHolder || FormConstants.DEFAULT_PLACE_HOLDER,
//   });
// }
//
// /**
//  * @deprecated Use getDateJSONFromMoment from CommonsService
//  */
// export function convertToDateModel(date: DateTime) {
//   return {
//     year: date.year(),
//     month: date.month() + 1,
//     day: date.date()
//   };
// }
//
// /**
//  * @deprecated Use Form Builder Patter
//  */
// export function getDateInputModel(id: string, label?: string, placeholder ?: string) {
//   return new DynamicDatePickerModel({
//     id,
//     label,
//     placeholder,
//   });
// }
//
// /**
//  * @deprecated Use Form Builder Patter
//  */
// export function getTextAreaInputModel(id: string, maxLength?: number, placeHolder?: string, rows?: number, cols?: number, label?: string) {
//   return new DynamicTextAreaModel({
//     id,
//     maxLength: maxLength || FormConstants.DEFAULT_TEXT_MAX_LENGTH,
//     placeholder: placeHolder || FormConstants.DEFAULT_PLACE_HOLDER,
//     rows: rows || FormConstants.DEFAULT_TEXT_AREA_ROWS,
//     cols: cols || FormConstants.DEFAULT_TEXT_AREA_COLS,
//     label,
//   });
// }
//
// /**
//  * @deprecated Use Form Builder Patter
//  */
// export function getRadioGroupInputModel(id: string, label: string, options: any, value: string) {
//   return new DynamicRadioGroupModel({
//     id,
//     label,
//     options,
//     value
//   });
// }
//
// /**
//  * @deprecated Use Form Builder Patter
//  */
// export function getSelectInputModel(id: string, label: string, options: any, value: string) {
//   return new DynamicSelectModel({
//     id,
//     label,
//     options,
//     value
//   });
// }
//
// /**
//  * @deprecated Use Form Builder Patter
//  */
// export function getOption(labelString: string, valueString: string) {
//   return ({
//     label: labelString,
//     value: valueString,
//   });
// }


import {BaseComponent} from '@core/components/base.component';
import {
  DynamicCheckboxGroupModel,
  DynamicCheckboxModel,
  DynamicDatePickerModel,
  DynamicFormControlModel,
  DynamicFormService,
  DynamicFormValueControlModel,
  DynamicInputModel,
  DynamicRadioGroupModel,
  DynamicSelectModel,
  DynamicTextAreaModel,
  DynamicTimePickerModel
} from '@ng-dynamic-forms/core';
import {UntypedFormGroup} from '@angular/forms';
import { AfterViewInit, ChangeDetectorRef, Injector, Directive } from '@angular/core';
import {FormConstants} from '@core/form.constants';
import validator from 'validator';
import {CommonsService} from '@core/commons.service';
// import {Moment} from 'moment';
import {DateTime} from 'luxon';
import {AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe} from '@core/core.pipe';

@Directive()
export abstract class FormComponent extends BaseComponent implements AfterViewInit {

  formGroup: UntypedFormGroup;
  formModel: DynamicFormControlModel[];

  formModelMap: { [key: string]: DynamicFormControlModel };
  appDynamicFormControlModelArrayToDynamicFormControlModelMapPipe
      = new AppDynamicFormControlModelArrayToDynamicFormControlModelMapPipe();


  changeDetectorDef: ChangeDetectorRef;

  protected formService: DynamicFormService;

  constructor(injector: Injector) {
    super(injector);
    this.formService = injector.get(DynamicFormService);
    this.changeDetectorDef = injector.get(ChangeDetectorRef);
  }

  abstract getFormModel(): DynamicFormControlModel[];

  createFormModel() {
    this.formGroup = this.formService.createFormGroup(this.formModel);
    this.formModelMap =
        this.appDynamicFormControlModelArrayToDynamicFormControlModelMapPipe.transform(
            this.formModel);
  }

  // noinspection TsLint
  ngOnInit() {
    this.formModel = this.getFormModel();
    this.createFormModel();
    super.ngOnInit();
  }

  // for form update
  ngAfterViewInit() {
    this.afterInitializeComponent();
    this.changeDetectorDef.detectChanges(); // run change detection after changes
  }

  registerModelForChanges<T>(model: DynamicFormValueControlModel<T>) {
    model.valueChanges.subscribe(value => {
      this.changeDetectorDef.markForCheck();
    });
  }

  abstract afterInitializeComponent();

  protected getInputModel(id: string): DynamicInputModel {
    return this.formService.findById(id, this.formModel) as DynamicInputModel;
  }

  protected getDateModel(id: string): DynamicDatePickerModel {
    return this.formService.findById(id, this.formModel) as DynamicDatePickerModel;
  }

  protected getTimeModel(id: string): DynamicTimePickerModel {
    return this.formService.findById(id, this.formModel) as DynamicTimePickerModel;
  }

  protected getRadioGroupInputModel<T>(id: string): DynamicRadioGroupModel<T> {
    return this.formService.findById(id, this.formModel) as DynamicRadioGroupModel<T>;
  }

  protected getCheckboxInputModel(id: string): DynamicCheckboxModel {
    return this.formService.findById(id, this.formModel) as DynamicCheckboxModel;
  }

  protected getCheckboxGroupInputModel(id: string): DynamicCheckboxGroupModel {
    return this.formService.findById(id, this.formModel) as DynamicCheckboxGroupModel;
  }

  protected getDateModelValue(id: string): Date {
    const value: any = this.getDateModel(id).value;
    return value ? new Date(value.year, value.month - 1, value.day) : undefined;
  }

  protected getCheckboxGroupModelValueAsArray(id: string): any[] {
    const map = this.getCheckboxGroupInputModel(id)
        .group
        .map(group => {
          const val = {};
          // @ts-ignore
          val.id = group.id;
          // @ts-ignore
          val.checked = group.checked;
          return val;
        });
    return map;
  }

  protected getCheckboxGroupModelCheckedValues(id: string): any[] {
    const map = this.getCheckboxGroupModelValueAsArray(id);

    return map.filter(value => value.checked).map(value => value.id);
  }

  protected getInputModelValueAsString(id: string): string {
    const value = this.getInputModel(id)
        .value;
    return value ? value.toString() : undefined;
  }

  // protected getTimeModelValueAsString(id: string): string {
  //   const value = this.getTimeModel(id)
  //     .value;
  //   return value ? CommonsService.getTimeStringFromJSON(value) : undefined;
  // }

  protected getInputModelValueAsNumber(id: string, noSymbols?: boolean): number {
    const value = this.getInputModelValueAsString(id);
    return validator.isNumeric(value || '', {no_symbols: CommonsService.isNullOrUndefined(noSymbols) ? true : noSymbols}) ?
        Number(value) :
        undefined;
  }

  resetForm(value?: any, options?: any) {
    this.formGroup.reset(value, options);
  }
}
