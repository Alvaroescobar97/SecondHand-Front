import { Component, Input, OnInit } from '@angular/core';
import { Clothe } from 'src/app/models/clothe';

@Component({
  selector: 'app-clothe',
  templateUrl: './clothe.component.html',
  styleUrls: ['./clothe.component.css']
})
export class ClotheComponent implements OnInit {

  @Input() clothe = new Clothe;

  constructor() { }

  ngOnInit(): void {
  }

  
}
