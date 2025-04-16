import Product, { Weight } from 'src/types/product';

export default class InfoSectionVM {
  volume: string;

  size: string;

  sizeOfTheClosedBag: boolean;

  weight: Weight;

  material: string;

  description: string;

  conclusion: string;

  mounts: string;

  constructor(product: Product) {
    this.volume = product.volume;
    this.size = product.size;
    this.sizeOfTheClosedBag = product.sizeOfTheClosedBag;
    this.weight = product.weight;
    this.material = product.material;
    this.description = product.description.main;
    this.conclusion = product.description.conclusion;
    this.mounts = product.mounts || '';
  }
}
