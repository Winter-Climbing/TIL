const doSomeThing = () => {
    let a = document.querySelector('#inputA').value;
    let b = document.querySelector('#inputB').value;
    document.querySelector('#valueA').innerHTML = a
    document.querySelector('#valueB').innerHTML = b
    document.querySelector('#valueC').innerHTML = Number(a) + Number(b)
}