import { Component } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component {
  productList : Product[] = [
    { id : 1, name : 'Chocolat', quantity : 6 },
    { id : 2, name : 'Banane', quantity : 2 },
  ];

  nameToAdd : string = "";

  addProduct() : void {

    //Si input pas vide
    if( this.nameToAdd.trim() != "" ){

      // On cherche si le produit existe dans le tableau
      // Renvoie le produit si trouvé, sinon undefined
      let searchProduct = this.productList.find(p => p.name.trim().toLowerCase() == this.nameToAdd.trim().toLowerCase());
      
      // Si le produit existe déjà
      if(searchProduct){
        searchProduct.quantity++;
      }
      // Sinon
      else{
        //Transformer le tableau d'objets en tableaux de nombres (juste les id)
        // console.log(this.productList.map(p => p.id));
        //On fournit à Max tous les id
        let nextId = Math.max(...this.productList.map(p => p.id)) + 1;
    
        let productToAdd : Product = { id : nextId, name : this.nameToAdd, quantity : 1};
        
        this.productList.push(productToAdd);
      }
    }
    this.nameToAdd = "";

  }

  deleteProduct(id : number) : void {
    // this.productList.splice(this.productList.findIndex(p => p.id == id), 1);
    this.productList = this.productList.filter(p => p.id !== id)  
  }
}
