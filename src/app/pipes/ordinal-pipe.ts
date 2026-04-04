import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {
  transform(value: number): string {
    if (!value && value !== 0) return '';

    const s = ['th', 'st', 'nd', 'rd'];
    const v = value % 100;
    // Handles exceptions like 11th, 12th, 13th
    return value + (s[(v - 20) % 10] || s[v] || s[0]);
  }
}
