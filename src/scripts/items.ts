import * as items from '../assets/items';

export function initialize() {

}

export interface Item {
  name: string,
  cost: number,
  type: ItemType,
}

export enum ItemType {
  CROP, CATTLE
}