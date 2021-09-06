/**
 * 概论
 * 在父类中提供一个创建对象的接口以允许子类决定实例化对象的类型。
 */

/**
 * 概念示例
 */

interface Product {
  operate(): string;
}

class Product1 implements Product {
  operate() {
    return "Product1 is here.";
  }
}

class Product2 implements Product {
  operate() {
    return "return Product2.";
  }
}
abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation() {
    const product = this.factoryMethod();

    return product.operate();
  }
}

class ConcreteCreator1 extends Creator {
  factoryMethod() {
    return new Product1();
  }
}

class ConcreteCreator2 extends Creator {
  factoryMethod() {
    return new Product2();
  }
}

function clientCode() {
  const c1 = new ConcreteCreator1();
  const c2 = new ConcreteCreator2();
  c1.someOperation();
  c2.someOperation();
}

/**
 * 实现示例
 */

interface Button {
  render: () => void;
  onClick: (event: Event) => void;
}

class AngularButton implements Button {
  constructor() {}

  render() {
    // 实现 Angular Button
  }
  onClick() {
    // 触发 Angular Button
  }
}

class ReactButton implements Button {
  constructor() {}

  render() {
    // 实现 React Button
  }

  onClick() {
    // 触发 React Button
  }
}

abstract class BaseApplication {
  button: Button;
  abstract createButton(): Button;
  abstract clickButton(event: Event): void;
}

class AngularApplication extends BaseApplication {
  createButton() {
    this.button = new AngularButton();
    return this.button;
  }

  clickButton(event: Event) {
    this.button.onClick(event);
  }
}

class ReactApplication extends BaseApplication {
  createButton() {
    this.button = new ReactButton();
    return this.button;
  }

  clickButton(event: Event) {
    this.button.onClick(event);
  }
}
