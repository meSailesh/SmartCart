import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from '@ionic/angular';
import { AngularFirestore} from '@angular/fire/firestore'
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string = ""
  password: string = ""
  cpassword: string = "" 

  constructor(private router: Router,
     private afAuth: AngularFireAuth,
     private alertController: AlertController,
     private afStore: AngularFirestore,
     private user: UserService) { }

  async register(){
    const {email, password, cpassword} = this
    if(password != cpassword){
      this.showAlert('Error',"Password don't match")
    }
    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email,password)
      this.showAlert("Success","You are successfully registered!")
      console.log(res)
      this.router.navigate(['/home'])

      this.afStore.doc(`users/${res.user.uid}`).set({
        email
      })
      this.user.setUser({
        email,
        uid: res.user.uid
      })

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


  ngOnInit() {
  }

  goTo(){
    this.router.navigate(['/login'])
  }
}
