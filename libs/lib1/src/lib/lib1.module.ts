import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
})
export class Lib1Module {}
export function doSomething() {
  alert("this works!!!!");
  }
