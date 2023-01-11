//TODO: descriptor
{
  const user = {
    name: 'John',
  };
  const descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  console.log(descriptor);
}
{
  const user = Object.defineProperties(
    {},
    {
      name: {
        value: 'John',
        writable: true,
        enumerable: true,
      },
      surname: {
        value: 'Smith',
        writable: true,
        enumerable: true,
      },
    }
  );
  let cloneUser = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
  console.log(cloneUser);
  console.log(cloneUser !== user);
}
//TODO: getter and setter
{
  const lang = {
    history: [],
    get current() {
      return this.history.length ? this.history[this.history.length - 1] : null;
    },
    set current(value) {
      this.history.push(value);
    },
  };
  console.log(lang);
  console.log(lang.current);
  lang.current = 'ru';
  console.log(lang.current);
  lang.current = 'en';
  console.log(lang.current);

  const rect = {
    a: 10,
    b: 15,
  };

  Object.defineProperty(rect, 'sides', {
    get() {
      return `${this.a} x ${this.b}`;
    },
    set(value) {
      [this.a, this.b] = value;
    },
  });
  console.dir(rect);
  console.log(rect.sides);
  rect.sides = [20, 25];
  console.log(rect.sides);

  const messages = {};
  Object.defineProperties(messages, {
    list: { value: [] },
    add: {
      value: function (item) {
        this.list.push(item);
      },
    },
    last: {
      get() {
        return this.list.length > 0 ? this.list[this.list.length - 1] : '';
      },
    },
  });
  messages.add('Green');
  messages.add('Red');
  console.log(messages);
}

{
  function Archiver() {
    let temperature = null;
    let archive = [];

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
  const arc = new Archiver();
  console.log(arc);
  arc.temperature = 10;
  console.log(arc.temperature);
  arc.temperature = 11;
  console.log(arc.getArchive());
}

{
  const jar = {};
  Object.defineProperties(jar, {
    numberOfCookies: {
      value: 0,
      writable: true,
      enumerable: true,
    },
    cookies: {
      get() {
        return this.numberOfCookies;
      },
      set(value) {
        if (value >= 0 && value <= 10) {
          this.numberOfCookies = value;
        }
      },
      configurable: true,
    },
  });
  console.log(jar);
  jar.cookies = 5;
  console.log(jar.numberOfCookies);
}

{
  const user = {
    get name() {
      return this._name;
    },
    set name(value) {
      return value.length > 4 ? (this._name = value) : null;
    },
  };
  console.log(user);
	user.name = 'Pete';
	console.log(user.name);
	user.name = 'Peter';
	console.log(user.name);
}

{
	function User(name, birthday) {
		this.name = name;
		this.birthday = birthday;

		Object.defineProperty(this, 'age', {
			get() {
				const todayYear = new Date().getFullYear();
				return todayYear - this.birthday.getFullYear()
			}
		})
	}
	const bob = new User('Bob', new Date(1887, 7, 15));
	console.log(bob);
	console.log(bob.birthday);
}
