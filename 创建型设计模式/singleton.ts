/**
 * 概论
 * 能够保证一个类只有一个实例，并提供一个访问该实例的全局节点。
 */

/**
 * 实现
 */

class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public otherMethod() {}
}

/**
 * client code
 */

function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
    console.log("same");
  } else {
    console.log("different");
  }
}
