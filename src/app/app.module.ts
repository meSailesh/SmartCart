import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FIREBASE_CONFIG } from './app.firebase.config'
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { UserService} from './services/user.service'
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service'
import { LoadingService } from './services/loading.service' 
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp(FIREBASE_CONFIG),
AngularFireAuthModule,
AngularFireDatabaseModule,
AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService,
    AuthService,
    CartService,
    LoadingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
