window.onload = () => {

    /* pregunta edad*/
    const age = parseFloat(prompt('¿Cual es su edad?'));
    console.log(typeof age);
    console.log(age);

    /* comprueba que es un numero*/
    const errTwo = 'Debe ingresar un numero';
    if (isNaN(age)) {
        return document.getElementById('resultAge').innerHTML = errTwo;
    }

    /* comprueba num entero*/
    const whole = age % 1;
    const errOne = 'Debe ingresar un numero entero';
    console.log(whole);
    if (whole !== 0) {
        return document.getElementById('resultAge').innerHTML = errOne;
    }

    /* califica edades*/
    const errThree = 'Debe ingresar un numero mayor a 0';
    const tod = 'Toddler';
    const pre = 'Preschooler';
    const gra = 'Gradeschoooler';
    const tee = 'Teenager';
    const you = 'Young adult';
    const adu = 'Adult';
    if (age < 1) {
        return document.getElementById('resultAge').innerHTML = errThree;
    }
    if (age >= 1 && age < 3) {
        return document.getElementById('resultAge').innerHTML = tod;
    }
    if (age >= 3 && age < 5) {
        return document.getElementById('resultAge').innerHTML = pre;
    }
    if (age >= 5 && age < 12) {
        return document.getElementById('resultAge').innerHTML = gra;
    }
    if (age >= 12 && age < 18) {
        return document.getElementById('resultAge').innerHTML = tee;
    }
    if (age >= 18 && age < 21) {
        return document.getElementById('resultAge').innerHTML = you;
    }
    if (age >= 21) {
        return document.getElementById('resultAge').innerHTML = adu;
    }
}