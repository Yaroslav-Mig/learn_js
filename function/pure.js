//! pure and muddy func
const f = (x) => x + 1;

//TODO: #1 it depends on outer var and state
{
  const COST_OF_ITEM = 250;
  const totalPrice = (quantity) => COST_OF_ITEM * quantity;
  console.log(totalPrice(2));
}

//TODO: #2 deferent outcome with the same args
{
  const generateID = () => Math.floor(Math.random() * 10000);

  const createUser = (name, age) => ({
    id: generateID(),
    name,
    age,
  });

  console.log(createUser('Alex', 28));
}

//TODO: #3 change state our app
{
  let id = 0;

  const createPerson = (name) => ({
    id: ++id,
    name,
  });
  console.log(createPerson('Alex'));
  console.log(createPerson('Julia'));
}

//TODO: #4 side effect
{
  const logger = (msg) => {
    console.log(msg);
  };

  logger('Всем привет!');
}
