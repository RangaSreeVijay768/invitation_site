import {
  DynamicCheckboxGroupModel, DynamicCheckboxModel, DynamicCheckboxModelConfig, DynamicDatePickerModel,
  DynamicFormControlModel, DynamicInputModel, DynamicRadioGroupModel, DynamicSelectModel, DynamicTextAreaModel,
  DynamicTimePickerModel
} from '@ng-dynamic-forms/core';
import {FormConstants} from '@core/form.constants';
import {FORM_VALIDATIONS} from '@core/core.constants';
import {CommonsService} from '@core/commons.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {MaskService} from 'ngx-mask';

// allowed error fields
type ErrorFields = 'label' | 'placeholder' | 'id';

export class DynamicInputModelBuilder<T extends DynamicFormControlModel> {

  private input_model: any;
  private validators = {};
  private asyncValidators = {};
  private errorMessages = {};

  inputModel(input_model: T): DynamicInputModelBuilder<T> {
    this.input_model = input_model;
    return this;
  }

  getTextInputModel(id: string, label?: string, maxLength?: number, placeHolder?: string,
                    inputType?: string, minLength?: number, min?: number, max?: number, mask?: string, showConfig?: boolean): DynamicInputModelBuilder<T> {
    this.input_model = new DynamicInputModel({
      id,
      label,
      inputType: inputType || 'text',
      maxLength: CommonsService.isNullOrUndefined(maxLength) ? FormConstants.DEFAULT_TEXT_MAX_LENGTH : maxLength,
      minLength: CommonsService.isNullOrUndefined(minLength) ? FormConstants.DEFAULT_TEXT_MIN_LENGTH : minLength,
      placeholder: placeHolder || FormConstants.DEFAULT_PLACE_HOLDER,
      min,
      max,
      mask,
      maskConfig: {
        showMaskTyped: showConfig,
      },

    });
    return this;
  }


  getTextAreaInputModel(id: string, maxLength?: number, placeHolder?: string, rows?: number, cols?: number,
                        label?: string): DynamicInputModelBuilder<T> {
    this.input_model = new DynamicTextAreaModel({
      id,
      maxLength: CommonsService.isNullOrUndefined(maxLength) ? FormConstants.DEFAULT_TEXT_AREA_MAX_LENGTH :
        maxLength,
      placeholder: placeHolder || FormConstants.DEFAULT_PLACE_HOLDER,
      rows: rows || FormConstants.DEFAULT_TEXT_AREA_ROWS,
      cols: cols || FormConstants.DEFAULT_TEXT_AREA_COLS,
      label,
    });
    return this;
  }

  getDateInputModel(id: string, label?: string, placeHolder ?: string, min?: NgbDateStruct,
                    max?: NgbDateStruct, focusedDate?: NgbDateStruct, format?: string): DynamicInputModelBuilder<T> {
    this.input_model = new DynamicDatePickerModel({
      id,
      label,
      placeholder: placeHolder,
      min: min || {year: 1951, month: 1, day: 26},
      max: max || {year: 2025, month: 12, day: 7},
      focusedDate,
      autoFocus: true,
      value: focusedDate,
      toggleIcon: 'assets/images/calendar-icon.svg',
      // format: format || CommonsService.DEFAULT_DATE_FORMAT
    });
    return this;
  }

  getTimeInputModel(id: string, label?: string, placeHolder ?: string, value?: any,
                    spinners?: boolean): DynamicInputModelBuilder<T> {
    this.input_model = new DynamicTimePickerModel({
      id,
      label,
      placeholder: placeHolder,
      meridian: true,
      value,
      additional: {spinners: spinners}
    });
    return this;
  }


  getRadioGroupInputModel(id: string, label: string, options: any, value?: string): DynamicInputModelBuilder<T> {
    this.input_model = new DynamicRadioGroupModel({
      id,
      label,
      options,
      value
    });
    return this;
  }

  getCheckBoxInputModel(id: string, label: string): DynamicInputModelBuilder<T> {
    this.input_model = new DynamicCheckboxModel({
      id,
      label
    });
    return this;
  }

  getSelectInputModel(id: string, label: string, options: any, value?: string): DynamicInputModelBuilder<T> {
    this.input_model = new DynamicSelectModel({
      id,
      label,
      options,
      value
    });
    return this;
  }

  getCheckboxInputModel(id?: string, name?: string, label?: string): DynamicInputModelBuilder<T> {
    this.input_model = new DynamicCheckboxModel({
      id,
      name,
      label
    });
    return this;
  }

  getCheckboxGroupInputModel(id: string, label: string, legend?: string,
                             checkboxModelConfigs?: DynamicCheckboxModelConfig[]): DynamicInputModelBuilder<T> {
    this.input_model = new DynamicCheckboxGroupModel({
      id,
      label,
      legend
    });

    checkboxModelConfigs.forEach(config => {
      this.input_model.group = this.input_model.group || [];
      this.input_model.group.push(new DynamicCheckboxModel(config));
    });

    return this;
  }

  addValidatorAndErrorMessage(name: string, errorMsgField?: ErrorFields, args?: any): DynamicInputModelBuilder<T> {
    this.addValidator(name, args);
    this.addErrorMessage(name, errorMsgField);
    return this;
  }

  addAsyncValidatorAndErrorMessage(name: string, errorMsgField?: ErrorFields,
                                   args?: any): DynamicInputModelBuilder<T> {
    this.addAsyncValidator(name, args);
    this.addErrorMessage(name, errorMsgField);
    return this;
  }

  addErrorMessage(name: string, errorMsgField?: ErrorFields): DynamicInputModelBuilder<T> {
    this.errorMessages[this.getValidator(name)] =
      this.getValidatorErrorMessage(name) + this.addErrorMessageField(errorMsgField);
    return this;
  }

  addErrorMessageField(errorMsgField: ErrorFields) {
    return (errorMsgField ? '{{' + errorMsgField + '}}' : '');
  }

  addValidator(name: string, args?: any): DynamicInputModelBuilder<T> {
    this.validators[this.getValidator(name)] = {name: this.getValidator(name), args};
    return this;
  }

  addAsyncValidator(name: string, args?: any): DynamicInputModelBuilder<T> {
    this.asyncValidators[this.getValidator(name)] = {name: this.getValidator(name), args};
    return this;
  }

  getValidator(name: string) {
    return FORM_VALIDATIONS[name].validator;
  }

  getValidatorErrorMessage(name: string) {
    return FORM_VALIDATIONS[name].errorMessage;
  }

  build(): T {
    this.input_model.validators = this.validators;
    this.input_model.asyncValidators = this.asyncValidators;
    this.input_model.errorMessages = this.errorMessages;
    return this.input_model;
  }

}
