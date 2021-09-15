const fatorial1 = num => {

    let fatorial = 1;

    for (let i = 2; i <= num; i++) {
        fatorial = fatorial * i;
    }

    return fatorial;

}

console.log(fatorial1(6));

const fatorial2 = num => {
    
    let fatorial = 1;

    for (let i = num; i > 1; i--) {
        fatorial = fatorial * i;
    }

    return fatorial;
}

console.log(fatorial2(6));

const fatorial3 = num => {
    
    if (num == 1 && num == 0) {
        return 1;
    }

    return fatorial3(num - 1) * num;

}

console.log(fatorial3(1));