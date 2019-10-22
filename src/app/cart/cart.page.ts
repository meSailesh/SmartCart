import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  
  constructor(private db: AngularFireDatabase, private router: Router, private cart:CartService) { 
    
  }
  items= this.cart.getSlider()
 
  ngOnInit() {
  }

}
