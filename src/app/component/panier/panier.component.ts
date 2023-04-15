import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/service/panier.service';
import { Router } from '@angular/router';
import { Box } from 'src/app/box';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier: any = [];

  constructor(private panierService: PanierService, private router: Router) { }


  ngOnInit(): void { // Cette méthode est appelée automatiquement lors de l'initialisation du composant Angular
    let panier: any = localStorage.getItem('panier');  // Récupère les données stockées dans la clé 'panier' du stockage local de l'utilisateur  
    if (panier) { // Vérifie si des données ont été trouvées
      this.panier = JSON.parse(panier); // Si des données ont été trouvées, les convertit en objet JavaScript et les stocke dans la propriété this.panier
    }
  }


  getTotal(): number { // Cette méthode calcule le total du panier en parcourant tous les éléments stockés dans this.panier
    let total: number = 0; // Initialise la variable total à zéro
    for (let box of this.panier) { // Parcourt tous les éléments du panier à l'aide d'une boucle for of
      total += box.prix; // Pour chaque élément, ajoute le prix à la variable total
    }
    return total; // Renvoie le total calculé
  }

  // Cette méthode permet de retirer un élément du panier
  // Elle prend un objet Box en paramètre
  removeFromPanier(box: Box) {
    const index = this.panier.indexOf(box); // On cherche l'index de l'élément à retirer dans le tableau panier
    if (index !== -1) {  // Si l'élément est présent dans le panier
      this.panier.splice(index, 1); // On retire l'élément du panier en utilisant la méthode splice
      localStorage.setItem('panier', JSON.stringify(this.panier)); // On sauvegarde le nouveau tableau panier dans le stockage local
    }
  }

  validerCommande() {
    // Récupérer les informations du panier depuis le localstorage
    let panier: any = localStorage.getItem('panier');
    if (panier) {
      this.panier = JSON.parse(panier);

      // Afficher un récapitulatif de chaque box commandée
      console.log("Récapitulatif de la commande :");
      for (let box of this.panier) {
        console.log("Box : " + box.nom + " - Prix : " + box.prix + " €");
      }

      // Enregistrer les informations de la commande dans l'historique
      let historique: any = localStorage.getItem('historique');
      if (!historique) {
        historique = [];
      } else {
        historique = JSON.parse(historique);
      }
      historique.push(this.panier);
      localStorage.setItem('historique', JSON.stringify(historique));

      // Vider le panier et enregistrer les modifications dans le localstorage
      this.panier = [];
      localStorage.setItem('panier', JSON.stringify(this.panier));
      this.router.navigate(['/historique']);
    }
  }

}