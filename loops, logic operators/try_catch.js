function readData() {
  let json = '{"name":"John", "age": 30 }';
  try {
    let user = JSON.parse(json);
    if (!user.name) {
      throw new Error('There is no property name');
    }
    blabla();
  } catch (e) {
    if (e.name === 'Error') {
      console.log('JSON Error: ' + e.message);
    }
    if (e.name !== 'Error') {
      throw e;
    }
  }
}

try {
  readData();
} catch (e) {
  console.log(e);
}

//TODO: extend Error, construct private error

class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = 'ReadError';
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
// class ValidationError extends MyError {}
class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super(`no field ${property}`);
    this.property = property;
  }
}

const validateUser = (user) => {
  if (!user.age) {
    throw new PropertyRequiredError('age');
  }
  if (!user.name) {
    throw new PropertyRequiredError('name');
  }
};

const readUser = (json) => {
  let user;

  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError('Wrong syntax in the JSON', err);
    } else {
      throw err;
    }
  }

  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError('Incorrect data in the object', err);
    } else {
      throw err;
    }
  }

  return user;
};

let user;

try {
  user = readUser('{"age": 25}');
} catch (err) {
  if (err instanceof ReadError) {
    console.log(err.cause);
    console.log('Message: ' + err.message);
  } else {
    throw err;
  }
}

// try {
//   user = readUser('{"age": 25}');
// } catch (err) {
//   if (err instanceof ValidationError) {
//     console.log(err.name);
//     console.log(err.property);
//     console.log('Incorrect data: ' + err.message);
//   } else if (err instanceof SyntaxError) {
//     console.log('JSON error: ' + err.message);
//   } else {
//     throw err;
//   }
// }
