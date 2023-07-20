// overriding
class Overriding1 {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): void {
    console.log(this.name + " o1");
  }
}

class Overriding2 extends Overriding1 {
  public email: string;

  constructor(name: string, email: string) {
    super(name);
    this.email = email;
  }

  getName(): void {
    console.log(this.name + " o2");
  }
}

let o2 = new Overriding2("diky", "diky@mail.com");
// o2.getName();

// readonly
class Readonly1 {
  public readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

let r1 = new Readonly1("diky");
// r1.name = 'satria'
// console.log(r1);

// abstract class dan method
abstract class Abstract1 {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract getName(): void;
}

class Abstract2 extends Abstract1 {
  getName(): void {
    console.log(this.name);
  }
}

const a2 = new Abstract2("ayu");
// a2.getName();

// interface optional property
interface Interface1 {
  name: string;
  handphone?: string | number;
}

// interface readonly property
interface Interface2 {
  name: string;
  readonly age: number;
  handphone?: string | number;
}

let IC: Interface2 = { name: "diky", age: 25, handphone: 123123 };
// console.log(IC);

// interface inharitance
interface In1 {
  name: string;
  email: string;
}
interface In2 extends In1 {
  handphone: number;
}
class In3 implements In2 {
  public handphone: number;
  public name: string;
  public email: string;

  constructor(name: string, email: string, handphone: number) {
    this.name = name;
    this.email = email;
    this.handphone = handphone;
  }

  getData(): void {
    console.log({
      name: this.name,
      email: this.email,
      handphone: this.handphone,
    });
  }
}

let In3Data = new In3("diky", "diky@mail.com", 8765432);
// In3Data.getData();

// interface extends class
class Ec {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
interface EI extends Ec {
  email: string;
  getName(): void;
}
class CEI implements EI {
  public name: string;
  public email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  getName(): void {
    console.log({
      name: this.name,
      email: this.email,
    });
  }
}

// generic
const gen1 = <T extends {}>(val: T): T => {
  return val;
};
// console.log(gen1<number>(333));

// generic interface
interface GenI<T> {
  name: string;
  handphone: T;
}

class GenIClass<T> implements GenI<T> {
  public name: string;
  public handphone: T;

  constructor(name: string, handphone: T) {
    this.name = name;
    this.handphone = handphone;
  }

  getData(): void {
    console.log({
      name: this.name,
      handphone: this.handphone,
    });
  }
}

let GenIClassData = new GenIClass("diky", 10);
// GenIClassData.getData();

// generic type
type GT<T> = T;

function getGT<T>(val: T): GT<T> {
  return val;
}
// console.log(getGT(234));
