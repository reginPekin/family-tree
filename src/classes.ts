export type Gender = "male" | "female";

interface PersonArgs {
  id: number;
  name: string;
  gender: Gender;
  parents: Parents;
}

export class Person {
  id: number;
  name: string;
  gender: Gender;
  parents: Parents;

  constructor(args: PersonArgs) {
    const { id, name, gender, parents } = args;

    this.id = id;
    this.name = name;
    this.gender = gender;
    this.parents = parents;
  }
}

interface ParentsArgs {
  id: number;
  mother: Person | null;
  father: Person | null;
}

export class Parents {
  id: number;
  mother: Person | null;
  father: Person | null;

  constructor(args: ParentsArgs) {
    const { id, father, mother } = args;

    this.id = id;
    this.father = father;
    this.mother = mother;
  }
}

export class Tree {
  root: Person;

  constructor(rootPerson: Person) {
    this.root = rootPerson;
  }
}
