import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mn-photos-uploader',
  templateUrl: './photos-uploader.component.html',
  styleUrls: ['./photos-uploader.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => PhotosUploaderComponent),
      multi: true,
    }
  ]
})

export class PhotosUploaderComponent implements OnInit, ControlValueAccessor {

  public readonly inputId: string = Math.random().toString(36).slice(-6)
  public images: string[] = []
  public isDisabled: boolean = false

  constructor() { }

  public onClickRemooveButton(imageIndex: number): void {
    this.images = this.images.filter((_, index) => index !== imageIndex)
  }

  public onChangePhotosInput(event: Event): void {
    const target: HTMLElement = event.target as HTMLElement;
    const files: File[] = Array.from(target.files);
    const filesPending: Promise<string>[] = files.map((file) => getDataUrlFromImageFile(file))
  }

  public onChange(value: string[]): void {
  }

  public onTouch(): void {
  }

  public writeValue(value: string[]): void {
    if (value == null) {
      return
    }

    this.images = value
  }
  public registerOnChange(fn: (value: string[]) => void ): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public ngOnInit(): void {
  }

}