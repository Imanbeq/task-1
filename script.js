/******** 1-способ использования атрибута html ********/
const showMessage = () => {
    alert('hello');
}

/******** 2-способ использования свойства DOM - обьекта ********/
// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// const btn3 = document.querySelector('#btn3');
//
// btn1.onclick = () => {
//     alert('Вы кликнули по первой кнопке');
// }
//
// btn2.onclick = () => {
//     alert('Вы кликнули по второй кнопке');
// }
//
// btn3.onclick = () => {
//     alert('Вы кликнули по третьей кнопке');
// }
//
// /******** 3-споспоб использование AddEventListener ********/
// btn1.addEventListener('click', () => {
//     alert('AddEventListener1');
// })
//
// btn1.addEventListener('click', () => {
//     alert('AddEventListener2');
// })
//

const btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', () => {

});
