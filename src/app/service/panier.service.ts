import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Box } from '../box';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private _panier: Box[] = [];
  private _panierSubject: BehaviorSubject<Box[]> = new BehaviorSubject<Box[]>(this._panier);

  constructor() { }

  ajouterBox(box: Box) {
    console.log("Ajout de la box dans le panier : ", box);
    this._panier.push(box);
    this._panierSubject.next(this._panier);
  }

  addToPanier(box: Box) {
    this.ajouterBox(box);
  }

  viderPanier() {
    this._panier = [];
    this._panierSubject.next(this._panier);
  }

  get panier(): BehaviorSubject<Box[]> {
    return this._panierSubject;
  }
}