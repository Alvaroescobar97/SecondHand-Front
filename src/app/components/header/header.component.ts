import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,DoCheck   {

  token:any;

  constructor() {
    this.token='';
  }

  ngOnInit(): void {
    this.token = localStorage.getItem("token") || '';
    console.log(this.token)
  }
  
  ngDoCheck(){
    this.token = localStorage.getItem("token") || '';
    console.log(this.token)
  }

  onClick(){
    console.log("click")
    localStorage.removeItem("token");
  }

}
