import { HttpClient } from '@angular/common/http';
import { Injectable }              from '@angular/core';
@Injectable()
export class CommanService {
  data: any;
  title = 'Read A JSON File From Assets';
  lunguage = 'TL/bible.json';
  private URL = '../assets/'+this.lunguage;
  private heroesUrl = 'api/heroes';  // URL to web API
  constructor (private http: HttpClient) {}
  
  public get ():any {
    this.http.get(this.URL);
  }
}