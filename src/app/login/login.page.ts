import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = ""
  password:string = ""
  constructor(private afAuth: AngularFireAuth,
     private alertController: AlertController,
     private router: Router,
     private user: UserService) { }

  ngOnInit() {
  }


  async login(){
    const {email, password} =this
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      if (res.user){
        this.user.setUser({
          email,
          uid: res.user.uid
        })
      this.router.navigate(['/home'])
      }
    }catch(error){
      this.showAlert('Error',error.message)
    }
  }

  async showAlert(header: string, message: string){
    const alert = await this.alertController.create({
      header,
      message,
      buttons:["ok"]
    })
    await alert.present()
  }

  goTo(route: string){
    this.router.navigate([route])
  }

}
