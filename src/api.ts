interface Person {
  id: number;
  parents: number;
  gender: "male" | "female";
  name: string;
}

interface Parents {
  mother: number;
  father: number;
  id: number;
}

export async function createNewPerson(data: any) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch("http://localhost:3000/persons", options).then((response) =>
    response.json()
  );
}

export async function createNewParents(data: any) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch("http://localhost:3000/parents", options).then((response) =>
    response.json()
  );
}

export async function getPersons(): Promise<Person[]> {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch("http://localhost:3000/persons", options).then((response) =>
    response.json()
  );
}

export async function getParents(): Promise<Parents[]> {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch("http://localhost:3000/parents", options).then((response) =>
    response.json()
  );
}
