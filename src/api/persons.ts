import { Parents, createNewParents } from "./parents";

export interface Person {
  id: number;
  parents: number;
  gender: "male" | "female";
  name: string;
}

export async function getMe(): Promise<Person> {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const req = await fetch("http://localhost:3000/persons/1", options);
  return req.json();
}

export async function getPersons(): Promise<Person[]> {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const req = await fetch("http://localhost:3000/persons", options);
  return req.json();
}

export async function getPerson(personId: number): Promise<Person> {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const req = await fetch(`http://localhost:3000/persons/${personId}`, options);
  return req.json();
}

export async function createNewPerson({
  data,
  childId,
}: {
  data: Omit<Person, "id" | "parents">;
  childId: number;
}) {
  const parents: Parents = await createNewParents({
    mother: null,
    father: null,
  });

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data, parents: parents.id }),
  };

  const req = await fetch("http://localhost:3000/persons", options);
  return { person: req.json(), childId };
}
