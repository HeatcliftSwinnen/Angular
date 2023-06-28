import { Injectable } from '@angular/core';
import { Fan } from '../models/fan';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  private _fanList: Fan[] = [
    { id: 1, name: "Bernard", birthdate: new Date(1952, 1, 23), series: ["Breaking Bad", "Columbo"] },
    { id: 2, name: "Kevin", birthdate: new Date(1995, 5, 23), series: ["Peaky Blinders"] }
  ]

  constructor() { }

  getAll(): Fan[] {
    return this._fanList;
  }

  getById(id: number): Fan | undefined {
    return this._fanList.find(f => f.id === id);
  }

  add(fanToAdd: Fan): void {
    // Rajouter un id
    // Si la liste est vide, Math.max(...this._fanList.map(f => f.id) va donner Math.max(rien) et donc Infinity)
    fanToAdd.id = this._fanList.length > 0 ? Math.max(...this._fanList.map(f => f.id)) + 1 : 1;

    // Transformer la date qu'on aura reçu en string, en date
    // En recevant, les données du formulaire, on va recevoir un truc comme ça pour la date : "1995-04-08", or, nous souhaitons un type date
    fanToAdd.birthdate = new Date(fanToAdd.birthdate);

    this._fanList.push(fanToAdd);

  }

  update(id : number, fanUpdated : Fan) : void {
    let fanToUpdate = this._fanList.find(f => f.id === id);
    //Si on a trouvé le fan à modifier
    if(fanToUpdate) {
      Object.assign(fanToUpdate, fanUpdated);
    }
  }

  delete(id : number) : void {
    this._fanList = this._fanList.filter(f => f.id !== id);
  }


}
