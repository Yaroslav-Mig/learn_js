//TODO: get and set
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
}
