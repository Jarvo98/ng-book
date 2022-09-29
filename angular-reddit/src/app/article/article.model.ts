export class Article {
  private _title: string;
  private _link: string;
  private _votes: number;

  constructor(title: string, link: string, votes: number = 0) {
    this._title = title;
    this._link = link;
    this._votes = votes;
  }

  public get title(): string {
    return this._title;
  }

  public get link(): string {
    return this._link;
  }

  public get votes(): number {
    return this._votes;
  }

  public voteUp(): void {
    this._votes++;
  }

  public voteDown(): void {
    this._votes--;
  }

  public getDomain(): string {
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (err) {
      return '';
    }
  }
}
