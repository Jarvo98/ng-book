export class Product {
  public static empty = (): Product => new Product('', '', '', [], 0);

  constructor(
    private _sku: string,
    private _name: string,
    private _imageUrl: string,
    private _department: string[],
    private _price: number
  ) {}

  public get sku(): string {
    return this._sku;
  }

  public get name(): string {
    return this._name;
  }

  public get imageUrl(): string {
    return this._imageUrl;
  }

  public get price(): number {
    return this._price;
  }

  public get department(): string[] {
    return [...this._department];
  }
}
