import { Component, OnInit } from '@angular/core';
import { Clothe } from 'src/app/models/clothe';
import { ClotheService } from 'src/app/services/clothe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clothes: Array<Clothe>;

  constructor(private clotheService: ClotheService) { 
    this.clothes = new Array();
  }

  ngOnInit(): void {
    this.getAllClothes();
  }

  async getAllClothes(){
    const res = await this.clotheService.getAllClothes();
    this.clothes = res.clothes;
    console.log(this.clothes);
  }
}
