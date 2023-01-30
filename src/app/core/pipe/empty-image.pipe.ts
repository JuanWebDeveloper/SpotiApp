import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyImage',
})
export class EmptyImagePipe implements PipeTransform {
  transform(images: string): string {
    if (!images) {
      return 'assets/img/emptyImage.png';
    } else {
      return images;
    }
  }
}
