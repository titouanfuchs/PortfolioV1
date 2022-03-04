import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICompetences} from "../../interfaces/ICompetences";
import {ILanguage} from "../../interfaces/ilanguage";
import {ITechno} from "../../interfaces/itechno";

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  constructor(private http:HttpClient) { }

  public getAllCompetences(): Observable<ICompetences>{
    return this.http.get('/api/competences');
  }

  public patchLanguage(language:ILanguage){
    return this.http.patch('/api/competence/language', language);
  }

  public patchTechno(techno:ITechno){
    return this.http.patch('/api/competence/techno', techno);
  }
}
