import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { HpService, Character } from '../../services/hp.service';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {
  characters: Character[] = [];

  constructor(private hpService: HpService) {}
  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/Placeholder.jpg';
  }
  ngOnInit(): void {
    this.hpService.getCharacters().subscribe((data: Character[]) => {
      this.characters = data;
    });
  }
}
