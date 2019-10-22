import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { LoadingService } from '../services/loading.service';
import { CartService } from '../services/cart.service';
import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public isSearchbarOpened = false;
  slideOpts = {
    effect: 'fade',
    autoplay: true,
    speed:700
  };
 items
 categories

  constructor(private router: Router, 
    private qrScanner: QRScanner,
    private db: AngularFireDatabase,
    private cart: CartService,
    private loading: LoadingService
    ) { 
      
    }
    ionViewWillEnter() {
      //load slider
      this.loading.present();
      this.loadSlider();
      this.loadCategories();
      this.loading.dismiss();
    }

    loadSlider(){
   this.items = this.cart.getSlider();
    }

    loadCategories()
    {
       //load categories
   this.categories = this.cart.getCategories();
    }
    getCategoryId(asdsad){

    }
  
  ngOnInit() {
  }
 
  


  searchbarToggle(value: boolean){
    this.isSearchbarOpened = value;
  }

  goTo(route:string){
    this.router.navigate([route])
  }

  scanCode(){
        // Optionally request the permission early
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        // camera permission was granted


        // start scanning
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);

          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
        });

      } else if (status.denied) {
        // camera permission was permanently denied
        // you must use QRScanner.openSettings() method to guide the user to the settings page
        // then they can grant the permission from there
      } else {
        // permission was denied, but not permanently. You can ask for permission again at a later time.
      }
    })
    .catch((e: any) => console.log('Error is', e));
  }

  ngOnDestroy() {
  } 

}
