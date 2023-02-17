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
  // DEBUT: LOGIQUE NGX-RECAPCTHA V2
  aFormGroup: FormGroup;
  siteKey: string= ''
  ischecked: boolean = false;
  constructor(private formBuilder: FormBuilder) { }
  // FIN: LOGIQUE NGX-RECAPCTHA V2
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
  
  forgetPassword() {
    Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
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
      allowOutsideClick: () => !Swal.isLoading()
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
