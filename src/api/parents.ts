import { Person as PersonInterface, createNewPerson } from "./persons";

import { updateHashTableParents } from "../stores/parents/events";
import { addPersonFx } from "../stores/persons/effects";
import type { Person, Parents as ParentsClass } from "../classes";
import { addPersonToHashTable } from "../stores/persons/events";

export interface Parents {
  mother: number | null;
  father: number | null;
  id: number;
}

export async function getAllParents(): Promise<Parents[]> {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const req = await fetch("http://localhost:3000/parents", options);
  return req.json();
}

export async function getParents(parentsId: number): Promise<Parents> {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const req = await fetch(
    `http://localhost:3000/parents/${parentsId}`,
    options
  );
  return req.json();
}

export async function createNewParents(data: Omit<Parents, "id">) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const req = await fetch("http://localhost:3000/parents", options);

  return req.json();
}

export async function updateParents({ child }: { child: Person }) {
  if (child.parents.mother && child.parents.father) {
    alert("Parents already exists");
    return;
  }

  const { person: mother }: { person: PersonInterface } = await createNewPerson(
    {
      data: {
        name: `The mother of ${child.name}`,
        gender: "female",
      },
    }
  );

  const { person: father }: { person: PersonInterface } = await createNewPerson(
    {
      data: {
        name: `The father of ${child.name}`,
        gender: "male",
      },
    }
  );

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mother: mother.id, father: father.id }),
  };
  await fetch(`http://localhost:3000/parents/${child.parents.id}`, options);

  addPersonToHashTable({ child: child, mother, father });

  return { mother, father };
}
