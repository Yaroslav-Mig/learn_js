//TODO: SYMBOL

let id1 = Symbol('id');
let id2 = Symbol('id');

console.log(id1 === id2);
console.log(id1.description);

const user = {
  name: 'Jo',
};

let id = Symbol('id');
user[id] = 1;
console.log(user);
user.id = 'Новый id';
console.log(user);

//TODO: clone object.assign()

let obj1 = { a: 0, b: { c: 0 } };
let obj2 = Object.assign({}, obj1);

console.log(JSON.stringify(obj1));
obj1.a = 2;
// console.log(obj1);

//TODO: deep clone
let obj3 = JSON.parse(JSON.stringify(obj1));
obj1.b.c = 7;
obj1.a = 4;
console.log(obj1);
console.log(obj3);

const v1 = 'abc';
const v2 = true;
const v3 = 10;
const v4 = Symbol('foo');

const obj = Object.assign({}, v3);
console.log(obj);

let target = Object.defineProperty({}, 'foo', {
  value: 1,
  writable: true,
});

console.log(target);
target = Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
console.log(target);

const object = {
  foo: 1,
  get bar() {
    return this.foo;
  },
};
let copy = Object.assign(
  {
    set val(val) {
      this.foo = val;
    },
  },
  object
);
console.log(copy);
copy.val = 17;
console.log(copy);
