import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private _articleList: Article[];

  constructor() {
    this._articleList = [
      new Article('Angular', 'https://angular.io', 3),
      new Article('Fullstack', 'https://www.newline.co', 2),
      new Article('Google', 'https://google.com', 1),
    ];
  }

  addArticle = (title: HTMLInputElement, link: HTMLInputElement): boolean => {
    this._articleList.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  };

  public get articleList(): Article[] {
    return [...this._articleList].sort((art1, art2) => art2.votes - art1.votes);
  }
}
