import { Injectable } from '@angular/core';

export type UserSimple = {
  id: string;
  username: string;
  email: string;
  subscribed: boolean;
};

export type ProductInfo = {
  id: string;
  name: string;
  price: number;
  sold: number;
  rating: number;
  total: number;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  avatar: string;
  active: boolean;
  priority: 'Low' | 'Standard' | 'High';
  satisfaction: number;
  registeredAt: Date;
  department: string;
  employmentType: 'Full-Time' | 'Part-Time' | 'Contract';
};

@Injectable({
  providedIn: 'root'
})
export class GridLiteDataService {
  private counter = 0;

  private maleFirstNames = ['John', 'Bob', 'Charlie', 'Frank', 'Henry', 'Jack', 'Liam', 'Noah', 'Peter'];
  private femaleFirstNames = ['Jane', 'Alice', 'Diana', 'Eve', 'Grace', 'Ivy', 'Kate', 'Mia', 'Olivia', 'Quinn', 'Rachel'];
  private lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
    'Rodriguez', 'Martinez', 'Wilson', 'Anderson', 'Taylor', 'Thomas', 'Moore', 'Jackson', 'White', 'Harris'];
  private productNames = ['Widget', 'Gadget', 'Doohickey', 'Thingamajig', 'Gizmo', 'Contraption',
    'Device', 'Tool', 'Apparatus', 'Instrument', 'Machine', 'Equipment'];
  private priorities: ('Low' | 'Standard' | 'High')[] = ['Low', 'Standard', 'High'];

  // HR-style data arrays
  private departments = ['Engineering', 'Marketing', 'Sales', 'Finance'];
  private employmentTypes: ('Full-Time' | 'Part-Time' | 'Contract')[] = ['Full-Time', 'Part-Time', 'Contract'];

  private randomFirstName(): { name: string; gender: 'men' | 'women' } {
    const isMale = this.randomBoolean();
    return isMale
      ? { name: this.randomElement(this.maleFirstNames), gender: 'men' }
      : { name: this.randomElement(this.femaleFirstNames), gender: 'women' };
  }

  private randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private randomFloat(min: number, max: number, precision = 2): number {
    // Get a random float in [0,1) using crypto.getRandomValues
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    // Divide by 2^32 to get a float in [0,1)
    const random01 = array[0] / 2 ** 32;
    return parseFloat((random01 * (max - min) + min).toFixed(precision));
  }

  private randomElement<T>(array: T[]): T {
    return array[this.randomInt(0, array.length - 1)];
  }

  private randomBoolean(): boolean {
    const array = new Uint8Array(1);
    window.crypto.getRandomValues(array);
    return (array[0] & 1) === 0;
  }

  private generateId(): string {
    return `${Date.now()}-${this.counter++}-${this.randomInt(1000, 9999)}`;
  }

  createProductInfo(): ProductInfo {
    const price = this.randomFloat(50, 500, 2);
    const sold = this.randomInt(10, 100);
    const total = parseFloat((price * sold).toFixed(2));

    return {
      price,
      sold,
      total,
      id: this.generateId(),
      name: `${this.randomElement(this.productNames)} ${this.randomElement(['Pro', 'Plus', 'Max', 'Ultra', 'Mini', 'Lite'])}`,
      rating: this.randomFloat(0, 5, 1)
    };
  }

  createUserSimple(): UserSimple {
    const { name: firstName } = this.randomFirstName();
    const lastName = this.randomElement(this.lastNames);
    return {
      id: this.generateId(),
      username: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${this.randomInt(1, 99)}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
      subscribed: this.randomBoolean()
    };
  }

  createUser(): User {
    const { name: firstName, gender } = this.randomFirstName();
    const lastName = this.randomElement(this.lastNames);
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;

    return {
      id: this.generateId(),
      firstName,
      lastName,
      age: this.randomInt(18, 65),
      email,
      avatar: `assets/images/${gender}/${this.randomInt(1, 70)}.jpg`,
      active: this.randomBoolean(),
      priority: this.randomElement(this.priorities),
      satisfaction: this.randomInt(0, 5),
      registeredAt: new Date(Date.now() - this.randomInt(0, 365 * 24 * 60 * 60 * 1000)),
      department: this.randomElement(this.departments),
      employmentType: this.randomElement(this.employmentTypes)
    };
  }

  generateUsers(count: number): User[] {
    return Array.from({ length: count }, () => this.createUser());
  }

  generateProducts(count: number): ProductInfo[] {
    return Array.from({ length: count }, () => this.createProductInfo());
  }

  generateSimpleUsers(count: number): UserSimple[] {
    return Array.from({ length: count }, () => this.createUserSimple());
  }
}
