import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  products: any[];
  pageName:string ="Route-2";
  isGridView:boolean = true;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.products;
  }

  changeView(view: string) {
    if (view === 'list') {
      this.isGridView = false;
    } else {
      this.isGridView = true;
    }
  }

  lowToHigh() {
    this.products.sort((a, b) => {
      return a['cost'] - b['cost'];
    });
  }

  highToLow() {
    this.products.sort((a, b) => {
      return b['cost'] - a['cost'];
    });
  }

  priceFilter(filter:any) {
    if(filter.target.value === "lowToHigh") {
      this.lowToHigh();
    }
    else {
      this.highToLow();
    }
   

  }
}
