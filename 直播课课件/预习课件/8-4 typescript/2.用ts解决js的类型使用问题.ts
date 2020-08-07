// 为了能够让ts检测出来类型使用上的错误。首先我们得在编码过程中，对需要使用的数据进行类型的标注，只有标注了类型，那么ts在编译（检测）过程中才有依据
// 我们给数据标注了类型以后，如果后面我们的代码中没有按照标注类型去使用这个数据，那么ts就可以根据标注的类型检测出来对应的错误
// 我们可以把 类型标注+类型检测 = 类型系统
// 有了类型系统，不仅仅只是可以帮助我们做程序上的代码类型检测，同时编辑器（vscode）也可以借助这个类型系统为它提供的接口进行智能提示等高级特性

let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
let button: HTMLButtonElement = document.querySelector('button');
let span: HTMLSpanElement = document.querySelector('span');

button.onclick = function() {
    let result: number = Number(inputs[0].value) + Number(inputs[1].value);
    span.innerHTML = '' + result;
}

