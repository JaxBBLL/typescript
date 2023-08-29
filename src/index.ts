const log = (value: Function, context: ClassDecoratorContext) => {
  context.addInitializer(() => {
    console.log("initial class:", context.name);
  });
};

@log
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const u = new User("Peter");

console.log(u.name);
