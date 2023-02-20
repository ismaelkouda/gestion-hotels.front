import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Environnement } from '../../../shared/environnement/environnement.prod';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // LOGIQUE NGX-RECAPCTHA V2
  aFormGroup: FormGroup;
  siteKey: string= ''
  ischecked: boolean = false;
  // NGMODEL INPUT
  registerForm: FormGroup;
  password: string
  email: string
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    // DEBUT: LOGIQUE NGX-RECAPCTHA V2
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    })
    this.siteKey = Environnement.recaptchaKey
    // FIN: LOGIQUE NGX-RECAPCTHA V2
  }

  handleSuccess(event: any){
    this.ischecked = true;
  }
  // onSubmit() {
  //   alert("hello")
  // }
  forgetPassword() {
    Swal.fire({
      title: 'Entrez votre adresse email',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
        placeholder: 'Ex: ismaelkouda00@gmail.com'
      },
      showCancelButton: true,
      confirmButtonText: 'Enregistrer',
      cancelButtonText: 'Annuler',
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      // allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        })
      }
    })
  }
}
