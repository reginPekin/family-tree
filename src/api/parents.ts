import { Person, createNewPerson } from "./persons";

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

export async function updateParents({
  childName,
  parentsId,
}: {
  childName: string;
  parentsId: number;
}) {
  const mother: Person = await createNewPerson({
    name: `The mother of ${childName}`,
    gender: "female",
  });

  const father: Person = await createNewPerson({
    name: `The father of ${childName}`,
    gender: "male",
  });

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mother: mother.id, father: father.id }),
  };

  const req = await fetch(
    `http://localhost:3000/parents/${parentsId}`,
    options
  );

  return { mother, father };
}
