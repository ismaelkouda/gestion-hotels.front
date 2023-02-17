import { Component, OnInit } from '@angular/core';
import { CripterService } from './shared/services/cripter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string='';
  constructor(private cripterService: CripterService) {}
  ngOnInit(): void {
    localStorage.setItem('clef','clef')
    this.cripterService.saveData('token','Gestionnaire des Hotels')
    console.log(this.cripterService.getData('token')) 
    this.title = this.cripterService.getData('token')
  }
}
