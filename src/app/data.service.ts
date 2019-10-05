import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getDefaultObject(): any {
    return { username: "adil.khurshed", firstName: "adil", lastName: "khurshed" };
  }

  logObject(obj: any) {
    console.log('Submited:', obj);
  }
}
