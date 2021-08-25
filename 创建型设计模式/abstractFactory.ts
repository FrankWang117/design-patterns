/**
 * 概论
 * 创建一系列相关的产品，而无需指定其具体类。
 */

/**
 * 实现
 */
interface Checkbox {
    style: string;
    data: string[];
    render(): void;
    onClick(): void;
}

interface Table {
    hasBoard: boolean;
    lineCount: number;
    rowClick(): void;
}

class ReactCheckbox implements Checkbox {
    style: 'circle';
    data: ['A','B','C'];
    render() { }
    onClick() {}
}

class AngularCheckbox implements Checkbox {
    style: 'square';
    data: ['a','b','c'];
    render() { }
    onClick() {}
}

class ReactTable implements Table {
    hasBoard: true
    lineCount: 3
    rowClick(){ }
}

class AngularTable implements Table {
    hasBoard: false
    lineCount: 4
    rowClick(){}
}

interface AbstractApplication {
    createCheckbox(): Checkbox;
    createTable(): Table;
}

class ReactApplication implements AbstractApplication {
    createCheckbox() {
        return new ReactCheckbox()
    }

    createTable() {
        return new ReactTable()
    }
}

class AngularApplication implements AbstractApplication {
    createCheckbox() {
        return new AngularCheckbox()
    }

    createTable() {
        return new AngularTable()
    }
}