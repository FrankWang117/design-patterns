/**
 * 概论
 * 它能使不兼容的对象能够相互合作。
 */

/**
 * 实现
 * 适配器可担任两个对象间的封装器， 它会接收对于一个对象的调用， 并将其转换为另一个对象可识别的格式和接口。
 */
class Target {
  public request(): string {
    return "Target: The default target's behavior.";
  }
}

class Adaptee {
  public specificRequest(): string {
    return ".eetpadA eht fo roivaheb laicepS";
  }
}

class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest().split("").reverse().join("");
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

function clientCode(target: Target) {
  console.log(target.request());
}

console.log("Client: I can work just fine with the Target objects:");
const target = new Target();
clientCode(target);

console.log("");

const adaptee = new Adaptee();
console.log(
  "Client: The Adaptee class has a weird interface. See, I don't understand it:"
);
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log("");

console.log("Client: But I can work with it via the Adapter:");
const adapter = new Adapter(adaptee);
clientCode(adapter);

/**
  结果
  Client: I can work just fine with the Target objects:
  Target: The default target's behavior.

  Client: The Adaptee class has a weird interface. See, I don't understand it:
  Adaptee: .eetpadA eht fo roivaheb laicepS

  Client: But I can work with it via the Adapter:
  Adapter: (TRANSLATED) Special behavior of the Adaptee.
*/
