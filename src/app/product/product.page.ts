import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  id:string
  products
  productRows
  heartType: string ="clipboard"
  constructor(private activatedRoute: ActivatedRoute, private cart: CartService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadCategories()
    
  }

  loadCategories()
    {
       //load categories
   this.products = this.cart.getProduct(this.id);
    }
  
}
