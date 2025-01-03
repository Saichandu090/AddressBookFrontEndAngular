import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { ILoginUser, IRegisterUser, LoginResponse } from '../model/UserDetails';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private loginService = inject(LoginService);

  loginObj: ILoginUser = {
    userName: '',
    password: ''
  }

  router = inject(Router);

  // ---------------------------------------------------//

  onLogin() {
    this.loginService.login(this.loginObj).subscribe((res: LoginResponse) => {
      if(res===null)
        alert('Wrong user Credentials');
      else if (res.result) {
        localStorage.setItem('angularToken', res.message);
        alert('Login Success')
        this.router.navigateByUrl('/homepage')
      } else {
        alert(res.message)
      }
    });
  }

  getRegister(){
    this.router.navigateByUrl('/register');
  }

  // ---------------------------------------------------//
}
