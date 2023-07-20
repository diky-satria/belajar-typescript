class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

class Admin extends User {
  public read: boolean = true;
  public write: boolean = true;
  public phone: string;
  private _email: string = "";
  static address: string = "jakarta";

  constructor(phone: string, name: string) {
    super(name);
    this.phone = phone;
  }

  set email(val: string) {
    this._email = val;
  }

  get email() {
    return this._email;
  }

  static getAddress() {
    return this.address;
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }
}

let a = new Admin("9089765433", "diky");

abstract class Vehicle {
  abstract wheel: number;

  getWheel(): void {
    console.log(this.wheel);
  }
}

class Car extends Vehicle {
  public wheel: number = 4;
}

let c = new Car();

// interface
interface IKendaraan {
  name: string;
  on(): void;
  off(): void;
}

class Motor implements IKendaraan {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  on(): void {
    console.log("motor on");
  }

  off(): void {
    console.log("motor off");
  }
}

class Komponent extends Motor {
  public wheel: number;

  constructor(wheel: number, name: string) {
    super(name);
    this.wheel = wheel;
  }
}

let k = new Komponent(2, "motor");

// generic
const gen = <T>(val: T): T => {
  return val;
};

// generic class
class List<T> {
  private arr: T[];

  constructor(arr: T[]) {
    this.arr = arr;
  }

  add(val: T): void {
    this.arr.push(val);
  }

  addMultiple(val: T[]): void {
    this.arr.push(...val);
  }

  getAll(): T[] {
    return this.arr;
  }
}

// let numList = new List<number>([1, 2, 3]);
// console.log(numList.getAll());

// let mixList = new List<number | string>([1, 2, "tiga", 4, "lima"]);
// mixList.add(6);
// mixList.addMultiple(["tujuh", 8]);
// console.log(mixList.getAll());
