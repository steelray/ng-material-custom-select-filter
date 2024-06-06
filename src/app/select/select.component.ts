import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

export interface IOption {
  value: any;
  title: string;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnChanges{
  @Input() options: IOption[] = [];
  @Input() label!: string | undefined;
  @Input() control: FormControl = new FormControl();
  @Input() showFilterInputLength = 10; // if more than input value show filter input
  @Input() hideFilterInput = false; // force hiding filter input event if options length more than given "showFilterInputLength"
  @Input() filterInputPlaceholder: string = 'search...';

  filteredOptions: IOption[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['options']?.currentValue) {
      this.filteredOptions = changes['options'].currentValue; // always reset filtered list whene getting new options 
    }
  }

  onFilter(event: KeyboardEvent): void {
    const target = event.target;
    if(target instanceof HTMLInputElement) {
      const options = [...this.options]; // clone to avoid affect the origin options
      const value = target.value?.trim().toLocaleLowerCase(); // transforming to avoid case sensitive
      this.filteredOptions = value ? options.filter(option => option.title.trim().toLocaleLowerCase().includes(value)) : this.options;
    } 
  }

}
