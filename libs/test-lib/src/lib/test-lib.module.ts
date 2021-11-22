import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
})
export class TestLibModule {
  constructor() {
    console.log('hello module');
  }
}
