/**
 * 概论
 */

/**
 * 实现
 */

interface Button {
    render: () => void,
    onClick: (event:Event) => void
}

class AngularButton implements Button {
    constructor() {  }

    render() {
        // 实现 Angular Button
    }
    onClick() {
        // 触发 Angular Button
    }
}

class ReactButton implements Button {
    constructor() { }

    render() {
        // 实现 React Button
    }

    onClick() {
        // 触发 React Button
    }
}

abstract class BaseApplication {
    button:Button;
    abstract createButton():Button;
    abstract clickButton(event:Event):void;
}

class AngularApplication extends BaseApplication {

    createButton() {
        this.button = new AngularButton()
        return this.button;
    }

    clickButton(event:Event) {
        this.button.onClick(event)
    }
}

class ReactApplication extends BaseApplication {

    createButton() {
        this.button = new ReactButton()
        return this.button;
    }

    clickButton(event:Event) {
        this.button.onClick(event)
    }
}