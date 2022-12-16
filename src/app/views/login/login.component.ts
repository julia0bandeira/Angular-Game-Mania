import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  userModel = new User();

  onSubmit() {
    console.log("Modelo:", this.loginModel)

    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", "--", "#", "*",]

    listaPalavras.forEach(palavra => {
      if (this.loginModel.email.toLowerCase().includes(palavra)) {
        this.userModel.email = "";
        alert("SQL injection detectado!");

      }
    })

  }

  receberDados() {
    console.log(this.userModel)

    this.loginService.login(this.userModel).subscribe((response) => {
      console.log("Deu certo")
      this.router.navigateByUrl("/")

    }, (erro) => {
      console.log("Deu erro")
    }

    )

  }

  loginModel(arg0: string, loginModel: any) {
    throw new Error('Method not implemented.');
  }


}