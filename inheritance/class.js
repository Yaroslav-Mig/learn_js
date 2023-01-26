class Car {
  constructor(brand, engine) {
    this.brand = brand;
    this.engine = engine;
  }

  static type = 'Car';
  static guarantee() {
    console.log(`warranty period depends on brand that you\`ll buy`);
  }

  start() {
    console.log(`this ${this.brand} is starting`);
  }
  stop() {
    console.log(`this ${this.brand} has stopped`);
  }

  set safety(value) {
    this.safetyRating = value;
  }
  get safety() {
    return this.safetyRating;
  }
}

const volvoDiesel = new Car('volvo', 'diesel');
const bmwGasoline = new Car('bmw', 'gasoline');
console.log(Car.type);
Car.guarantee();
console.log(volvoDiesel);
console.log(bmwGasoline);
volvoDiesel.safety = 5;
bmwGasoline.safety = 4;

class Volvo extends Car {
  constructor(brand, engine, model, color, kit) {
    super(brand, engine);
    this.model = model;
    this.color = color;
    this.kit = kit;
  }

  get fuel() {
    return console.log(this._fuelTank);
  }
  set fuel(val) {
    this._fuelTank > 0 ? (this._fuelTank += val) : (this._fuelTank = val);
  }

  drive(val = 0) {
    if (!this._fuelTank) {
      console.log('Fuel tank is empty');
      return;
    } else if (this._fuelTank < val) {
      this._fuelTank = 0;
      console.log('Fuel tank run out');
      return;
    } else {
      this._fuelTank -= val;
    }
  }

  start() {
    super.start();
    console.log(`this ${this.model} is starting`);
  }
}

const volvoV60 = new Volvo('volvo', 'gasoline', 'v60', 'bursting blue effect ', 'r-design');
console.log(volvoV60);
volvoV60.start();
volvoV60.fuel = 60;
volvoV60.drive(50);
volvoV60.fuel;
volvoV60.drive(11);
volvoV60.drive(30);

//TODO: Class with DOM elements
{
  class Component {
    constructor(selector) {
      this.$el = document.querySelector(selector);
    }
    setOpacity(val) {
      this.$el.style.opacity = val;
		}
		hide() {
      this.$el.style.display = 'none';
    }
    show() {
      this.$el.style.display = 'block';
    }
  }

  class Box extends Component {
    constructor(options) {
			super(options.selector);
			this.$el.style.width = this.$el.style.height = options.size + 'px';
			this.$el.style.background = options.bgColor;
    }
	}

	const boxBlue = new Box({
		selector: '#box_1',
		size: 50,
		bgColor: 'lightblue'
	})
	console.log(boxBlue);
	boxBlue.setOpacity(0.5)
	boxBlue.hide();
	// boxBlue.show();

	const boxBrown = new Box({
		selector: '#box_2',
		size: 70,
		bgColor: 'brown'
	})

	console.log(boxBrown);
	boxBlue.setOpacity(0.3)

	class Circle extends Box {
		constructor(options) {
			super(options)
			this.$el.style.borderRadius = '50%';
		}
	}

	const circleGreen = new Circle({
		selector: '#box_3',
		size: 100,
		bgColor: 'seagreen'
	})

	console.log(circleGreen);
}
