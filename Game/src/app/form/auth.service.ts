import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: "root"
})


export class authService {

    Username = ""
    userAuth : any  = [
        {
            username: 'user1',
        },
        {
            username: 'user2',
        }
    ]
    
    isLogin = new Subject<boolean>();
    
    add(user: any): void {

        this.Username = user.username

        let findUser = this.userAuth.find((u: any) => u.username === user.username)
        if (findUser) this.isLogin.next(true)
        else this.isLogin.next(false)
    }

}