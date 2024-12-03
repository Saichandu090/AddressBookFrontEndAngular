import { Component, inject } from '@angular/core';
import { IRegisterUser, LoginResponse } from '../model/UserDetails';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private loginService = inject(LoginService);

  registerObj: IRegisterUser = {
    userName: '',
    email: '',
    password: ''
  }

  router=inject(Router);

  onRegister() {
    this.loginService.register(this.registerObj).subscribe((res: LoginResponse) => {
      if (res.result) {
        alert(res.message)
        console.log('User Registered Successfully')
        this.router.navigateByUrl('/login');
      } else {
        alert(res.message)
      }
    });
  }
}
