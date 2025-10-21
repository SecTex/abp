import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'abp-card-header',
  template: `
    <div [ngClass]="cardHeaderClass" [ngStyle]="cardHeaderStyle">
      <ng-content></ng-content>
    </div>
  `,
  styles: [],
  imports: [CommonModule],
})
export class CardHeaderComponent {
  @HostBinding('class') componentClass = 'card-header';
  @Input() cardHeaderClass: string | string[] | Set<string> | { [klass: string]: any } | null = null;
  @Input() cardHeaderStyle: { [klass: string]: any } | null = null;
}
