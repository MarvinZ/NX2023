import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
})
export class Lib1Module {}
export function doSomething(): void {
    alert("this works!");
  }

  export function doSomethingwithNumbers(product_type: string, tier: string, max_dimension: string, weight: string): any {
    let price = 'Not found';
    const price_list = {
      "prices": [
        {
          "type": "FBA fulfillment fees (non-apparel)",
          "tier": [
            {
              "name": "Small standard",
              "max_dimension": "15 x 12 x 0.75",
              "weightsAndPrices": [
                {
                  "name": "4 oz or less",
                  "price": "$3.22"
                },
                {
                  "name": "4+ to 8 oz",
                  "price": "$3.40"
                },
                {
                  "name": "8+ to 12 oz",
                  "price": "$3.58"
                },
                {
                  "name": "12+ to 16 oz",
                  "price": "$3.77"
                }
              ]
            },
            {
              "name": "Large standard",
              "max_dimension": "18 x 14 x 8",
              "weightsAndPrices": [
                {
                  "name": "4 oz or less",
                  "price": "$3.86"
                },
                {
                  "name": "4+ to 8 oz",
                  "price": "$4.08"
                },
                {
                  "name": "8+ to 12 oz",
                  "price": "$4.24"
                },
                {
                  "name": "12+ to 16 oz",
                  "price": "$4.75"
                },
                {
                  "name": "1+ to 1.5 lb",
                  "price": "$5.40"
                },
                {
                  "name": "1.5+ to 2 lb",
                  "price": "$5.69"
                },
                {
                  "name": "2+ to 2.5 lb",
                  "price": "$6.10"
                },
                {
                  "name": "2.5+ to 3 lb",
                  "price": "$6.39"
                },
                {
                  "name": "3+ lb to 20 lb",
                  "price": "$7.17 + $0.16/half-lb above first 3 lb"
                }
              ]
            },
            {
              "name": "Small oversize",
              "max_dimension": "60 x 30",
              "weightsAndPrices": [
                {
                  "name": "70 lb or less",
                  "price": "$9.73 + $0.42/lb above first lb"
                }
              ]
            },
            {
              "name": "Medium oversize",
              "max_dimension": "108 (longest side)",
              "weightsAndPrices": [
                {
                  "name": "150 lb or less",
                  "price": "$19.05 + $0.42/lb above first lb"
                }
              ]
            },
            {
              "name": "Large oversize",
              "max_dimension": "108 (longest side)",
              "weightsAndPrices": [
                {
                  "name": "150 lb or less",
                  "price": "$89.98 + $0.83/lb above first 90 lbs"
                }
              ]
            },
            {
              "name": "Special oversize",
              "max_dimension": ">108 (longest side)",
              "weightsAndPrices": [
                {
                  "name": "Over 150 lb",
                  "price": "$158.49 + $0.83/lb above first 90 lb"
                }
              ]
            }
          ]
        },
        {
          "type": "FBA fulfillment fees (apparel)",
          "tier": [
            {
              "name": "Small standard",
              "max_dimension": "15 x 12 x 0.75",
              "weightsAndPrices": [
                {
                  "name": "4 oz or less",
                  "price": "$3.43"
                },
                {
                  "name": "4+ to 8 oz",
                  "price": "$3.58"
                },
                {
                  "name": "8+ to 12 oz",
                  "price": "$3.87"
                },
                {
                  "name": "12+ to 16 oz",
                  "price": "$4.15"
                }
              ]
            },
            {
              "name": "Large standard",
              "max_dimension": "18 x 14 x 8",
              "weightsAndPrices": [
                {
                  "name": "4 oz or less",
                  "price": "$4.43"
                },
                {
                  "name": "4+ to 8 oz",
                  "price": "$4.63"
                },
                {
                  "name": "8+ to 12 oz",
                  "price": "$4.84"
                },
                {
                  "name": "12+ to 16 oz",
                  "price": "$5.32"
                },
                {
                  "name": "1+ to 1.5 lb",
                  "price": "$6.10"
                },
                {
                  "name": "1.5+ to 2 lb",
                  "price": "$6.37"
                },
                {
                  "name": "2+ to 2.5 lb",
                  "price": "$6.83"
                },
                {
                  "name": "2.5+ to 3 lb",
                  "price": "$7.05"
                },
                {
                  "name": "3+ lb to 20 lb",
                  "price": "$7.17 + $0.16/half-lb above first 3 lb"
                }
              ]
            },
            {
              "name": "Small oversize",
              "weightsAndPrices": [
                {
                  "name": "70 lb or less",
                  "price": "$9.73 + $0.42/lb above first lb"
                }
              ]
            },
            {
              "name": "Medium oversize",
              "weightsAndPrices": [
                {
                  "name": "150 lb or less",
                  "price": "$19.05 + $0.42/lb above first lb"
                }
              ]
            },
            {
              "name": "Large oversize",
              "weightsAndPrices": [
                {
                  "name": "150 lb or less",
                  "price": "$89.98 + $0.83/lb above first 90 lbs"
                }
              ]
            },
            {
              "name": "Special oversize",
              "weightsAndPrices": [
                {
                  "name": "Over 150 lb",
                  "price": "$158.49 + $0.83/lb above first 90 lbs"
                }
              ]
            }
          ]
        },
        {
          "type": "FBA fulfillment fees Small and Light",
          "tier": [
            {
              "name": "FBA Small & Light small standard",
              "max_dimension": "15 x 12 x 0.75",
              "weightsAndPrices": [
                {
                  "name": "4 oz or less",
                  "price": "$2.47"
                }
              ]
            },
            {
              "name": "FBA Small & Light large standard",
              "max_dimension": "18 x 14 x 8",
              "weightsAndPrices": [
                {
                  "name": "4+ to 8 oz",
                  "price": "$2.54"
                },
                {
                  "name": "8+ to 12 oz",
                  "price": "$2.61"
                },
                {
                  "name": "12+ to 16 oz",
                  "price": "$3.15"
                },
                {
                  "name": "4 oz or less",
                  "price": "$2.66"
                },
                {
                  "name": "4+ to 8 oz",
                  "price": "$2.77"
                },
                {
                  "name": "8+ to 12 oz",
                  "price": "$2.94"
                },
                {
                  "name": "12+ to 16 oz",
                  "price": "$3.77"
                },
                {
                  "name": "1+ to 1.5 lb",
                  "price": "$4.42"
                },
                {
                  "name": "1.5+ to 2 lb",
                  "price": "$4.68"
                },
                {
                  "name": "2+ to 2.5 lb",
                  "price": "$5.19"
                },
                {
                  "name": "2.5+ to 3 lb",
                  "price": "$5.40"
                }
              ]
            }
          ]
        }
      ]
    };
    for (const product of price_list.prices) {
      if (product.type === product_type) {
        for (const t of product.tier) {
          if (t.name === tier && t.max_dimension === max_dimension) {
            for (const w of t.weightsAndPrices) {
              if (w.name === weight) {
                console.log(w);
                price = w.price;
                break;
              }
            }
          }
        }
      }
    }
    return price;
  }
