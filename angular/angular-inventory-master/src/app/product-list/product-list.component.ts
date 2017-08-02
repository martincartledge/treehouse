import { 
  Component,
  EventEmitter,
  Input,
  Output, 
} from '@angular/core';
import {Product} from '../product/product.model';

/**
 * @ProductList: A component for rendering all ProductRows and 
 * storing the currently selected Product
 */

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  /**
   * @input productList - the Product[] passed to us
   */
  @Input() productList: Product[];
  /**
   * @output onProductSelected - outputs the current 
   * Product whenever a new Product is selected
   */
  @Output() onProductSelected: EventEmitter<Product>;

  /**
   * @property currentProduct - local state containing 
   * the currently selected `Product`
   */
  private currentProduct: Product;

  constructor() { 
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

}
