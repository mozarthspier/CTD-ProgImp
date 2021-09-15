const fizzBuzz = (num1, num2, palavra1 = "Fizz", palavra2 = "Buzz") => {

    for (let i = 1; i <= 100; i++) {

        if (i % num1 == 0 && i % num2 == 0) {
            console.log(palavra1 + palavra2);
        }
        else if (i % num1 == 0) {
            console.log(palavra1);
        }
        else if (i % num2 == 0) {
            console.log(palavra2);
        }
        else {
            console.log(i);
        }

    }

}

fizzBuzz(3, 5, "Digital", "House");