import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 0,
      name: 'Buck Naked',
      brand: 'Bold and Stocky',
      flavors: ['bald', 'stocky'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    return this.coffees.find((item) => item.id === +id);
  }

  create(createCoffee: any) {
    this.coffees.push(createCoffee);
    return createCoffee;
  }

  update(id: string, coffeeData: any) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees[coffeeIndex] = coffeeData;
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
