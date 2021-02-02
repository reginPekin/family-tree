export interface Person {
  id: number;
  parents: number;
  gender: "male" | "female";
  name: string;
}

export interface Parents {
  mother: number | null;
  father: number | null;
  id: number;
}

export async function createNewPerson(data: Omit<Person, "id" | "parents">) {
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

export async function getParents(): Promise<Parents[]> {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
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
