import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SushiBoxService } from 'src/app/service/sushi-box.service';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css']
})
export class BoxListComponent implements OnInit {
  boxes: any[] = [];
  sushiBox: any;

  constructor(private sushiBoxService: SushiBoxService, private router: Router) { }

  ngOnInit() {
    this.sushiBoxService.getBoxes().subscribe((data: any) => {
      this.boxes = data;
    });
  }
}
