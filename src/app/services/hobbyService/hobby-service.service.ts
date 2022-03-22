import { Injectable } from '@angular/core';
import {Ihobby} from "../../interfaces/ihobby";

@Injectable({
  providedIn: 'root'
})
export class HobbyServiceService {

  constructor() { }

  public getAllHobbys():Ihobby[]{
    return [
      {
        title: "Jeux Vidéos",
        description: "Je suis passionné par les jeux vidéos, tels que The Witcher, Batman Arkham Saga, Minecraft.",
        pictures: [
          'hobby_03.webp',
          'hobby_04.webp',
          'hobby_05.webp'
        ]
      },
      {
        title: "Programmation",
        description: "Sur mon temps libre, j'adore développer, que ce soit des logiciels, ou même des jeux vidéos avec Unity.",
        pictures: [
          'hobby_01.webp',
          'hobby_02.webp'
        ]
      }
    ]
  }
}
