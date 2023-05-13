import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import SwaggerUI from 'swagger-ui';


@Component({
  selector: 'nx208-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
})
export class TestComponentComponent implements OnInit, AfterContentInit {
  public swaggerUrl = 'https://petstore.swagger.io/v2/swagger.json';

  @ViewChild('customersapidocumentation', { static: true })
  custApiDocElement: ElementRef | undefined;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  ngAfterContentInit(): void {
    const ui = SwaggerUI({
      url: this.swaggerUrl,
      domNode: this.custApiDocElement?.nativeElement,
    });
  }
}
