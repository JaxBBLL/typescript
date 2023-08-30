const log = (
  value: Function,
  context: ClassDecoratorContext | ClassMethodDecoratorContext
) => {
  context.addInitializer(() => {
    console.log(`initial ${context.kind}:`, context.name);
  });
};

const delay = (milliseconds: number = 0) => {
  return function (value: Function, context: ClassMethodDecoratorContext) {
    if (context.kind === "method") {
      return function (...args: any[]) {
        setTimeout(() => {
          value.apply(this, args);
        }, milliseconds);
      };
    }
  };
};

@log
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @log
  @delay(1000)
  say() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const u = new User("Peter");
u.say();

class C {
  static accessor y = 0;
  accessor x = 1;
}

const c = new C();

console.log(c.x);
console.log(C.y);
