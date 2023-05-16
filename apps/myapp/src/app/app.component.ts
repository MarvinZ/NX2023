import { Component, OnInit } from '@angular/core';
import { doSomething, doSomethingwithNumbers } from '@nx208/lib1';

@Component({
  selector: 'nx208-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public product_type: string;
  public tier: string;
  public max_dimension: string;
  public weight: string;

  constructor() {
    this.product_type = '';
    this.tier = '';
    this.max_dimension = '';
    this.weight = '';
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    // doSomething();
    // this.myCoolValueFromAmazon = doSomethingwithNumbers("FBA fulfillment fees (apparel)",
    //  "Small standard",
    //  "15 x 12 x 0.75",
    //  "4 oz or less");
  }
  title = 'myapp2';
  myCoolValueFromAmazon = '';

  public GetPrice(): void {
    // Perform the necessary logic to retrieve the price based on the provided inputs
    // For example, you can call the existing `doSomethingwithNumbers` function here
    const price = doSomethingwithNumbers(
      this.product_type,
      this.tier,
      this.max_dimension,
      this.weight
    );
    console.log('Price:', price);
    this.myCoolValueFromAmazon = price;
  }
}
