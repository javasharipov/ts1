//task1
{
    function full_name(name) {
        var names = name.trim().split(' ');
        if (names.length === 2) {
            return names[0][0] + names[1][0];
        }
        return '';
    }
    console.log(full_name('John Doe'));
}
//task2
{
    function yesOrNo(input) {
        if (input === 'Yes')
            return true;
        if (input === 'No')
            return false;
        return null;
    }
    console.log(yesOrNo('Yes'));
}
//task3
{
    function userInfo(name, age, isStudent) {
        if (isStudent) {
            return "".concat(name, " is ").concat(age, " years old and is a student.");
        }
        return "".concat(name, " is ").concat(age, " years old and is not a student.");
    }
    console.log(userInfo('John', 25, true));
}
//task4
{
    function handleInput(input) {
        if (typeof input === 'number') {
            return input * input;
        }
        return "Hello, ".concat(input);
    }
    console.log(handleInput(5));
    console.log(handleInput('Alice'));
}
//task5
{
    var user = [1, 'Alice', true];
    console.log(user);
}
//task6
{
    var myCar = { brand: 'Tesla', year: 2023, isElectric: true };
    console.log(myCar);
}
//task7
{
    function getLength(u) {
        return u.length;
    }
    console.log(getLength('Hello'));
    console.log(getLength([1, 2, 3, 4]));
}
//8task
{
    function arrayFromOneToN(n) {
        var result = [];
        for (var i = 1; i <= n; i++) {
            result.push(i);
        }
        return result;
    }
    console.log(arrayFromOneToN(5));
}
//9 task
{
    function evenNumbersFromKToN(k, n) {
        var result = [];
        for (var i = k; i <= n; i++) {
            if (i % 2 === 0)
                result.push(i);
        }
        return result;
    }
    console.log(evenNumbersFromKToN(2, 10));
}
//10 task
{
    function error(message) {
        throw new Error(message);
    }
}
