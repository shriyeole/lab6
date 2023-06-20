import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.page.html',
  styleUrls: ['./placements.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PlacementsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
