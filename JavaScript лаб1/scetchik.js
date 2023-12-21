let counter = 0;

function increaseCounter() {
    counter++;
}

for (i = 0; i < 3; i++) {
    increaseCounter();
    console.log(counter);
};

function leapYear() {

    function isLeapYear() {
        let year = 2020;
        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
            console.log(year + 'год високосный');
        }
        else {
            console.log(year + 'год невисокосный');
        }
    }

}

function leapYear() {

    function isLeapYear(year) {
        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
            console.log(year + 'год високосный');
        }
        else {
            console.log(year + 'год невисокосный');
        }
    }

}

function leapYear() {

    function isLeapYear() {
        let year = 2020;
        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
            console.log(year + 'год високосный');
        }
        else {
            console.log(year + 'год невисокосный');
        }
    }

    for (year = 2020; year < 2023; year++) {
        isLeapYear(year);
    };
}

function leapYear() {

    function isLeapYear(year) {
        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
            return year + 'год високосный';
        }
        else {
            return year + 'год невисокосный';
        }
    }

}

function leapYear() {

    function isLeapYear(year) {
        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
            return year + 'год високосный';
        }
        else {
            return year + 'год невисокосный';
        }
    }

    for (year = 2020; year < 2021; year++){
        result = isLeapYear(year);
    };
    alert(result);
}