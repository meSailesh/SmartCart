import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {first} from 'rxjs/operators'

interface user{
  email: string
  uid: string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: user
  constructor(private afAuth: AngularFireAuth) { }

  setUser(user: user){
    this.user = user
  }

  async isAuthenticated(){
    if(this.user) return true;

    const user= await this.afAuth.authState.pipe(first()).toPromise()
    if(user){
        this.setUser({
            email: user.email,
            uid: user.uid
        })
        return true
    }
    return false
}

  getUID(): string{
       
    return this.user.uid
        
  }
}
