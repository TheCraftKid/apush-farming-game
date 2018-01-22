import Item from './items';

function store(key: string, value: string) {
  localStorage.setItem(key, value);
}

function updateItems(items: Map<Item, number>) {
  
} 