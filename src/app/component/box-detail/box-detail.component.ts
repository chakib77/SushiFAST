import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SushiBoxService } from 'src/app/service/sushi-box.service';
import { Box } from 'src/app/box';
import { PanierService } from 'src/app/service/panier.service';

@Component({
  selector: 'app-box-detail',
  templateUrl: './box-detail.component.html',
  styleUrls: ['./box-detail.component.css']
})
export class BoxDetailComponent implements OnInit {
  boxId: number = 0;
  box!: Box;

  constructor(private route: ActivatedRoute, 
    private sushiBoxService: SushiBoxService, 
    private panierService: PanierService, 
    private router: Router) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.boxId = +idParam;
      this.getBoxById(this.boxId);
    } else {
      // Gérer l'absence de l'ID dans l'URL de la route ici
    }
  }

  getBoxById(id: number) {
    this.sushiBoxService.getBoxById(id).subscribe(
      (data) => {
        this.box = data;
      },
      (error) => console.error(error)
    );
  }

  addToPanier(box: Box) {
    let panier: any = localStorage.getItem('panier');
    if (!panier) {
      panier = [];
    } else {
      panier = JSON.parse(panier);
    }
    panier.push(box);
    localStorage.setItem('panier', JSON.stringify(panier));
   // alert('La boîte a été ajoutée au panier.');
  }

  goToPanier() {
    this.router.navigate(['/panier']);
  }
}
