const h1 = document.querySelector("h1");
const main = document.querySelector("main");

const loadPeople = async () => {
  const data = await fetch("/api/people");
  const people = await data.json();

  const sections = people.map((person) => {
    const section = document.createElement("section");
    const a = document.createElement("a");
    const em = document.createElement("em");

    a.setAttribute("id", person.id);
    a.setAttribute("href", "/");
    a.textContent = person.name;

    a.addEventListener("click", peopleAnchorHandler);

    em.textContent = person.age;

    section.append(a, " is ", em, " years old");
    return section;
  });

  main.replaceChildren(...sections);
};

const peopleAnchorHandler = async (event) => {
  event.preventDefault();
  const p = document.createElement("p");
  const a = document.createElement("a");

  const data = await fetch(`/api/people/${event.target.id}`);
  const person = await data.json();

  p.textContent = `id: ${person.id}, age: ${person.age}`;
  h1.textContent = person.name;
  a.setAttribute("href", "/");
  a.textContent = "Back to the main page";

  a.addEventListener("click", (event) => {
    event.preventDefault();
    loadPeople();
  });

  main.replaceChildren(p, a);
};

loadPeople();
