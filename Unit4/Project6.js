const convert = (str) => {
    str = str.replaceAll(':)', '🙂');
    str = str.replaceAll(':(', '🙁');
    return str;
};

console.log(convert('hello :)'));
console.log(convert('hello :('));
