import { Component, OnInit } from '@angular/core';
import { HpService, Character } from '../../services/hp.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {
  characters: Character[] = [];

  constructor(private hpService: HpService) { }

  ngOnInit(): void {
    this.hpService.getCharacters().subscribe((data: Character[]) => {
      this.characters = data;
    });
  }
}
