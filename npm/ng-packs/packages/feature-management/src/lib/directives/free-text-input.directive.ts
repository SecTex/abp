import { FeatureDto } from '@abp/ng.feature-management/proxy';
import { Directive, HostBinding, Input } from '@angular/core';

// TODO: improve this type
export type FreeTextType = FeatureDto & { style?: { [key: string]: number; }; initialValue: any; };

export const INPUT_TYPES = {
  numeric: 'number',
  default: 'text',
};

@Directive({
  selector: 'input[abpFeatureManagementFreeText]',
  exportAs: 'inputAbpFeatureManagementFreeText',
})
export class FreeTextInputDirective {
  _feature: FreeTextType;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('abpFeatureManagementFreeText') set feature(val: FreeTextType) {
    this._feature = val;
    this.setInputType();
  }

  get feature() {
    return this._feature;
  }

  @HostBinding('type') type: string;

  private setInputType() {
    const validatorType = this.feature?.valueType?.validator?.name.toLowerCase();
    this.type = INPUT_TYPES[validatorType] ?? INPUT_TYPES.default;
  }
}
