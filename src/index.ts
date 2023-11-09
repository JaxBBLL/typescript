class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @log
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

function log(originalMethod: any, context: ClassMethodDecoratorContext) {
  const methodName = String(context.name);

  function replacementMethod(this: any, ...args: any[]) {
    console.log(`LOG: Entering method '${methodName}'.`);
    const result = originalMethod.call(this, ...args);
    console.log(`LOG: Exiting method '${methodName}'.`);
    return result;
  }

  return replacementMethod;
}

const person = new Person("张三");
person.greet();
// "LOG: Entering method 'greet'."
// "Hello, my name is 张三."
// "LOG: Exiting method 'greet'."
