import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


interface AuthResponseData{
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({providedIn: 'root'})
export class AuthService{

    constructor(private http: HttpClient) {}

    signup(){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCnQL26bYEm499MHn-J-WSHoD0gt_rBmkw',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        );
    }

}