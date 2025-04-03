import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Character {
  name: string;
  house: string;
  image: string;
  actor?: string;
  species?: string;
  wizard?: boolean;
  ancestry?: string;
  wand?: {
    wood: string;
    core: string;
    length: number;
  };
}


@Injectable({
  providedIn: 'root'
})
export class HpService {
  private apiUrl = 'https://hp-api.onrender.com/api/characters';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }

  getCharactersByHouse(house: string): Observable<Character[]> {
    const url = `https://hp-api.onrender.com/api/characters/house/${house}`;
    return this.http.get<Character[]>(url);
  }

  getCharacterById(id: string): Observable<Character> {
    const url = `https://hp-api.onrender.com/api/character/${id}`;
    return this.http.get<Character>(url);
  }
  
}
