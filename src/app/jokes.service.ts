import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JokesService {
  private apiUrl = 'https://api.chucknorris.io/jokes/'

  constructor(
    private http: HttpClient
  ) { }

  // Random
  getRandomJoke(){
    return this.http.get(this.apiUrl + 'random');
  }

  // Categories
  getCategories(){
    return this.http.get(this.apiUrl + 'categories');
  }

  // Joke By Category
  getCategoryJoke(category: string) {
    return this.http.get(this.apiUrl + `random?category=${category}`)
  }
}


