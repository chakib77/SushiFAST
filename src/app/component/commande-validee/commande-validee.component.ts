import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PanierService } from 'src/app/service/panier.service';
import { Box } from 'src/app/box';


@Component({
  selector: 'app-commande-validee',
  templateUrl: './commande-validee.component.html',
  styleUrls: ['./commande-validee.component.css']
})
export class CommandeValideeComponent implements OnInit {
  commandeValidee: Box[] = [];

  constructor(private router: Router, private panierService: PanierService) { }

  ngOnInit(): void {
    const commandeValidee = localStorage.getItem('commandeValidee');
    if (commandeValidee) {
      this.commandeValidee = JSON.parse(commandeValidee);
      console.log(this.commandeValidee); // Vérifier que les données sont correctement stockées dans la variable commandeValidee
    }
  }

  getTotal(): number {
    let total: number = 0;
    for (let box of this.commandeValidee) {
      total += box.prix;
    }
    return total;
  }
}