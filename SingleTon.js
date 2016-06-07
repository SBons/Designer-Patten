class SingleTon{
  constructor() {
    console.log('test');
    this.test = 'Created Once';
  }
  static getInstance() {
    console.log('in');
    if (!SingleTon.instance) {
      SingleTon.instance = new SingleTon();
    }
    return SingleTon.instance;
  }
}

//Test
console.log('create first');
var a = SingleTon.getInstance();
console.log('created first');
var b = SingleTon.getInstance();
