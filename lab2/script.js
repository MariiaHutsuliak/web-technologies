console.log("Task: 1.1");
function findMinMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    return [Math.min(...arr), Math.max(...arr)];
}
const numbers = [1, 2, 3, 4, 5];
console.log(findMinMax(numbers));



console.log("Task: 1.2");
function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

const objA = {name: "John", age: 20, city: "New York"};
const objB = {name: "Mary", age: 25, city: "London"}
const objC = {name: "John", age: 20, city: "New York"};
console.log(compareObjects(objA, objB));
console.log(compareObjects(objA, objC));



console.log("Task: 2.1");
function isInRange(num, min, max) {
    return num >= min && num <= max;
}
console.log(isInRange(10, 5, 15));
console.log(isInRange(10, 15, 20));



console.log("Task: 2.2");
function toggleState(state) {
    return !state;
}
console.log(toggleState(true));
console.log(toggleState(false))



console.log("Task: 3.1.1");
function getGrade(grade) {
    if (grade >= 90) {
        return "Відмінно";
    } else if (grade >= 70) {
        return "Добре";
    } else if (grade >= 50) {
        return "Задовільно";
    } else {
        return "Незадовільно";
    }
}
console.log(getGrade(94));
console.log(getGrade(70));
console.log(getGrade(55));
console.log(getGrade(30));



console.log("Task: 3.1-2");
function getGradeTernary(score) {
    return score >= 90 ? "Відмінно" :
           score >= 70 ? "Добре" :
           score >= 50 ? "Задовільно" :
           "Незадовільно";
}
console.log(getGradeTernary(94));
console.log(getGradeTernary(70));
console.log(getGradeTernary(55));
console.log(getGradeTernary(30));



console.log("3.2-1");
function getSeason(month) {
    if (month >= 3 && month <= 5) {
        return "Весна";
    } else if (month >= 6 && month <= 8) {
        return "Літо";
    } else if (month >= 9 && month <= 11) {
        return "Осінь";
    } else if (month === 12 || month === 1 || month === 2) {
        return "Зима";
    } else {
        return "Некоректний номер місяця";
    }
}
console.log(getSeason(4));
console.log(getSeason(12));
console.log(getSeason(13));


console.log("3.2-2");
function getSeasonTernary(month) {
    return (month >= 3 && month <= 5) ? "Весна" :
        (month >= 6 && month <= 8) ? "Літо" :
            (month >= 9 && month <= 11) ? "Осінь" :
                (month === 12 || month === 1 || month === 2) ? "Зима" :
                    "Некоректний номер місяця";
}

console.log(getSeasonTernary(4));
console.log(getSeasonTernary(12));
console.log(getSeasonTernary(13));