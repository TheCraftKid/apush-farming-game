import { Item } from './items'


interface Event {
  id: string,
  explanation: string,
  effects: Effect[],
}

interface Effect {
  affectedItem: Item,
  effect: number,
}