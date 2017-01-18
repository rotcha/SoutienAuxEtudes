import {Component} from "@angular/core";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
/**
 * Created by louly on 2017-01-17.
 */
@Component({
    selector:'app-user',
    templateUrl:'./usermenu.template.html'
})
export class UserMenuComponent
{
    constructor(private authService:AuthService, private router:Router){}
    isUserLoggedIn(){
        return this.authService.isLoggedIn();
    }
    login()
    {
        this.router.navigate(['/auth', 'signin']);
    }
}