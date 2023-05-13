import {  NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TestComponentComponent],
  exports:[TestComponentComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Lib2Module {

}
