import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') class = 'row';
  @Input() article: Article;

  constructor() {
    this.article = new Article('', '', 0);
  }

  ngOnInit(): void {}

  public voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  public voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}
