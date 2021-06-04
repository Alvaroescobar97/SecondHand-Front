import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clothe } from 'src/app/models/clothe';
import { ClotheService } from 'src/app/services/clothe.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  clothes: Array<Clothe>;

  constructor(private clotheService:ClotheService, private router : Router) { 
    this.clothes = new Array();
  }

  ngOnInit(): void {
    this.getAllClothes();
  }

  async getAllClothes(){
    const res = await this.clotheService.getClothesForSaleByUser();
    this.clothes = res.clothesForSale;
    console.log(this.clothes);
  }

  onClick(clothe: Clothe){
    console.log(clothe);
    //Cambiar esto aqui debe estar el detalle de la ropa
    this.router.navigate([`/clothesOnSale/edit/${clothe._id}`]);
  }
}
