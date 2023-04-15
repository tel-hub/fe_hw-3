// task 1

let products = [
  {title: "BMW", price: "40000", count: "15"},
  {title: "Toyota", price: "20000", count: "13"},
  {title: "Ford", price: "30000", count: "20"},
  {title: "Chevrolet", price: "60000", count: "9"},
  {title: "Volkswagen", price: "30000", count: "13"}
];

const getProducts = (arr) => {
  let totalSum = 0;
  let totalCount = 0;
  let ul = document.createElement('ul');

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const keys = Object.keys(el);
    let li = document.createElement('li');

    for (let j = 0; j < keys.length; j++) {
      const key = keys[j];

      li.textContent += `${key}: ${el[key]} \n`;
    }

    totalSum += +el.price;
    totalCount += +el.count;

    ul.appendChild(li);

  }

  let total = document.createElement('div');

  total.textContent = `totalSum: ${totalSum}, totalCount: ${totalCount}`

  document.body.append(ul);
  document.body.append(total);
}

getProducts(products);

// task 2

let persons = [
  {"Full Name": "Bill Gates", Position: "Founder Microsoft", Salary: "1000"},
  {"Full Name": "Steve Jobs", Position: "Founder Apple", Salary: "1200"},
  {"Full Name": "Larry Page", Position: "Founder Google", Salary: "1100"},
  {"Full Name": "Mark Zuckerberg", Position: "Founder Facebook", Salary: "1300"}
];

const makeCell = (text = "", head = false) => {
  let cell = document.createElement(head ? 'th' : 'td');
  cell.textContent = text;
  return cell;
}

const getSalary = (arr) => {
  let table = document.createElement('table');
  let tHead = document.createElement('thead');
  let rHead = document.createElement('tr');
  let tBody = document.createElement('tbody');

  rHead.appendChild(makeCell('№', true));

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const keys = Object.keys(el);
    let rBody = document.createElement('tr');

    rBody.appendChild(makeCell(String(i + 1)));

    for (let j = 0; j < keys.length; j++) {
      const key = keys[j];

      if (!i) {
        rHead.appendChild(makeCell(key, true));
      }

      rBody.appendChild(makeCell(el[key]));
    }

    tBody.appendChild(rBody);
  }

  tHead.appendChild(rHead);
  table.appendChild(tHead);
  table.appendChild(tBody);

  document.body.append(table);
}

getSalary(persons);

// task 3

const dogs = [
  {breed: "golden retriever", age: 7},
  {breed: "labrador retriever", age: 4},
  {breed: "french bulldog", age: 12},
  {breed: "beagle", age: 6},
  {breed: "german shepherd dog", age: 2},
  {breed: "poodle", age: 3},
  {breed: "bulldog", age: 4}
];

const getDogs = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    let text = document.createElement('p');

    text.textContent = `${el.breed} age is ${el.age}`;

    document.body.append(text);
  }
}

getDogs(dogs);

// task 4

const films = [
  {name: "golden retriever", year: 2007},
  {name: "labrador retriever", year: 2004},
  {name: "french bulldog", year: 2012},
  {name: "beagle", year: 2006},
  {name: "german shepherd dog", year: 2002},
  {name: "poodle", year: 2003},
  {name: "bulldog", year: 2004}
];

const getFilms = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    let text = document.createElement('p');

    text.textContent = `Film ${el.name} year ${el.year}`;

    document.body.append(text);
  }
}

getFilms(films);
