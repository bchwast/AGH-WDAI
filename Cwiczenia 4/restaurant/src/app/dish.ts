export class Dish {
  public constructor(
    public id: number,
    public name: string,
    public cuisine: string,
    public type: string,
    public category: string,
    public ingredients: Array<string>,
    public maxAmount: number,
    public ordered: number,
    public price: number,
    public description: string,
    public photos: Array<string>,
    public rating: number,
    public ratings: Array<number>
  ) {
  }
}

