function sumFirst50() {
    let sum = 0;
    let i = 1;
    while (i <= 50) {
        sum += i;
        i++;
    }
    console.log("1. Сума перших 50 натуральних чисел: ", sum);
}
sumFirst50();

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    console.log("2. Факторіал числа: ", result);
}
factorial(5);

function getMonthName(month) {
    let monthName;
    switch (month) {
        case 1: monthName = "Січень"; break;
        case 2: monthName = "Лютий"; break;
        case 3: monthName = "Березень"; break;
        case 4: monthName = "Квітень"; break;
        case 5: monthName = "Травень"; break;
        case 6: monthName = "Червень"; break;
        case 7: monthName = "Липень"; break;
        case 8: monthName = "Серпень"; break;
        case 9: monthName = "Вересень"; break;
        case 10: monthName = "Жовтень"; break;
        case 11: monthName = "Листопад"; break;
        case 12: monthName = "Грудень"; break;
        default: monthName = "Некоректний номер місяця";
    }
    console.log("3. Місяць: ", monthName);
}
getMonthName(3);

function sumEvenNumbers(arr) {
    let sum = arr.filter(x => x % 2 === 0).reduce((a, b) => a + b);
    console.log("4. Сума парних чисел у масиві: ", sum);
}
sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const countVowels = (str) => {
    const vowels = "аеєиіїоуюяАЕЄИІЇОУЮЯ"
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log("5. Кількість голосних у рядку: ", count);
}
countVowels("Привіт, світ!");

function pow(base, exponent) {
    console.log("6. Число у степені: ", base ** exponent);
}
pow(2, 3);