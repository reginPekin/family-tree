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

export async function getPersons() {
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

export async function getParents() {
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
