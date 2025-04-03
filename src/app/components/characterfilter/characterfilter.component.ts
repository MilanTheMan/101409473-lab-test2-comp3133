import { Component } from '@angular/core';
import { HpService, Character } from '../../services/hp.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
  ],
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.css']
})

export class CharacterfilterComponent {
  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  characters: Character[] = [];
  selectedHouse = '';

  constructor(private hpService: HpService) {}

  onHouseChange() {
    if (this.selectedHouse) {
      this.hpService.getCharactersByHouse(this.selectedHouse).subscribe(data => {
        this.characters = data;
      });
    } else {
      this.characters = [];
    }
  }
}
