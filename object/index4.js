// TODO - optional ?
let user = null;
console.log(user?.address);
console.log(user?.address.street);

let user3 = {
  firstName: 'Bob',
  admin() {
    console.log('YO!');
  },
};
let user4 = {};

user3.admin?.();
user4.admin?.();

let key = 'firstName';

console.log(user3?.[key]);
console.log(user4?.[key]);

//TODO: valueof() and toString()
{
  let user = { name: 'John' };
  console.log(user.toString());
  console.log(user.valueOf());
}
{
  let user = {
    name: 'John',
    money: 1000,
    toString() {
      return `{name: "${this.name}"}`;
    },
    valueOf() {
      return this.money;
    },
  };
  console.log(user);
  console.log(+user);
}

//TODO: Property getters and setters
function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get() {
      console.log('get!');
      return temperature;
    },
    set(value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = function () {
    return archive;
  };
}
var arc = new Archiver();
console.log(arc);

// TODO - Destructuring assignment
{
  let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };

  const topSalary = (object) => {
    let maxSalary = 0;
    let maxName = null;

    for (let [name, salary] of Object.entries(salaries)) {
      if (salary > maxSalary) {
        maxSalary = salary;
        maxName = name;
      }
    }
    return maxName;
  };
}

// let user = {
//   name: 'John',
//   years: 30,
// };
// let { name, years: age, isAdmin = false } = user;
