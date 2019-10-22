import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
interface product{
  key: string,
  cat_id: string,

}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  sliderRef: AngularFireList<any>;
  slides: Observable<any[]>;
  catRef: AngularFireList<any>;
  categories: Observable<any[]>;
  productRef: AngularFireList<any>;
  products: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.itemsRef = db.list('products');
    this.sliderRef = db.list('promotions');
    this.catRef = db.list('categories');
    
  }
  getCartItem(){
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    return this.items
  }
  getSlider(){
    // Use snapshotChanges().map() to store the key
    this.slides = this.sliderRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    return this.slides
  }
  getCategories(){
    
    // Use snapshotChanges().map() to store the key
    this.categories = this.catRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    return this.categories
  }
  getProduct(id){
    console.log(id)
    this.productRef = this.db.list('/products', ref => ref.orderByChild('category_id').equalTo(id))
    // Use snapshotChanges().map() to store the key
    this.products = this.productRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    
    return this.products
  }
}
