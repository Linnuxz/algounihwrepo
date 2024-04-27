// Project 28

const mimeTypes = {
    aac: 'audio/aac',
    abw: 'application/x-abiword',
    apng: 'image/apng',
    arc: 'application/x-freearc',
    avif: 'image/avif',
    avi: 'video/x-msvideo',
    azw: 'application/vnd.amazon.ebook',
    bin: 'application/octet-stream',
    bmp: 'image/bmp',
    bz: 'application/x-bzip',
    bz2: 'application/x-bzip2',
    cda: 'application/x-cdf',
    csh: 'application/x-csh',
    css: 'text/css',
    csv: 'text/csv',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    eot: 'application/vnd.ms-fontobject',
    epub: 'application/epub+zip',
    gz: 'application/gzip',
    gif: 'image/gif',
    html: 'text/html',
    ico: 'image/vnd.microsoft.icon',
    ics: 'text/calendar',
    jar: 'application/java-archive',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
    js: 'text/javascript',
    json: 'application/json',
    jsonld: 'application/ld+json',
    mid: 'audio/midi',
    midi: 'audio/midi',
    mjs: 'text/javascript',
    mp3: 'audio/mpeg',
    mp4: 'video/mp4',
    mpeg: 'video/mpeg',
    mpkg: 'application/vnd.apple.installer+xml',
    odp: 'application/vnd.oasis.opendocument.presentation',
    ods: 'application/vnd.oasis.opendocument.spreadsheet',
    odt: 'application/vnd.oasis.opendocument.text',
    oga: 'audio/ogg',
    ogv: 'video/ogg',
    ogx: 'application/ogg',
    opus: 'audio/opus',
    otf: 'font/otf',
    png: 'image/png',
    pdf: 'application/pdf',
    php: 'application/x-httpd-php',
    ppt: 'application/vnd.ms-powerpoint',
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    rar: 'application/vnd.rar',
    rtf: 'application/rtf',
    sh: 'application/x-sh',
    svg: 'image/svg+xml',
    tar: 'application/x-tar',
    tif: 'image/tiff',
    tiff: 'image/tiff',
    ts: 'video/mp2t',
    ttf: 'font/ttf',
    txt: 'text/plain',
    vsd: 'application/vnd.visio',
    wav: 'audio/wav',
    weba: 'audio/webm',
    webm: 'video/webm',
    webp: 'image/webp',
    woff: 'font/woff',
    woff2: 'font/woff2',
    xhtml: 'application/xhtml+xml',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    xml: 'application/xml',
    xul: 'application/vnd.mozilla.xul+xml',
    zip: 'application/zip',
    '3gp': 'video/3gpp',
    '3g2': 'video/3gpp2',
    '7z': 'application/x-7z-compressed',
};
const fileName = prompt('Enter file name:');
const extension = fileName.split('.').pop().toLowerCase();

if (mimeTypes[extension]) {
    console.log(mimeTypes[extension]);
} else {
    console.log('application/octet-stream');
}

// Project 29

const mathInterpreter = (userInput) => {
    let splitParts = userInput.split(' ');
    x = splitParts[0];
    y = splitParts[1];
    z = splitParts[2];

    switch (y) {
        case '+':
            return Number(x) + Number(z);
        case '-':
            return Number(x) - Number(z);
        case '*':
            return Number(x) * Number(z);
        case '/':
            return Number(x) / Number(z);
        default:
            console.log('Invalid Input');
            return;
    }
};

// Project 30

const mealTime = (inputTime) => {
    const [hours, minutes] = inputTime.split(':').map(Number);
    let time = hours + minutes / 60;

    if (time >= 7 && time < 8) {
        return 'Breakfast time';
    }
    if (time >= 12 && time < 13) {
        return 'Lunch time';
    }
    if (time >= 18 && time < 19) {
        return 'Dinner time';
    }
};

let time = prompt('What time is it?');
console.log(mealTime(time));

// Project 31

const addingNumbers = () => {
    let numberInput;
    let sum = 0;
    for (let i = 0; i <= 4; i++) {
        numberInput = Number(prompt('Enter a number'));
        sum += numberInput;
    }
    return `The total is ${sum}`;
};

// Project 32

const taxCalculator = () => {
    let orderAmount = Number(prompt('What is the order amount?'));
    let state = prompt('What is the state?');

    if (state === 'WI') console.log(`The tax is ${orderAmount * 0.055}`);

    return `The total is ${
        state === 'WI' ? orderAmount + orderAmount * 0.055 : orderAmount
    }`;
};

// Project 33

const passwordValidation = (passwordInput) => {
    let passwordBase = ['abc$123', '321', '456'];
    const passwordCheck = (passwordInput) => {
        return passwordBase.includes(passwordInput);
    };

    if (passwordCheck(passwordInput)) {
        console.log('Welcome');
    } else {
        console.log("I don't know you");
    }
};

// Project 34

let age = Number(prompt('Enter your age'));

const legalDrivingAge = (inputAge) => {
    const legalAge = 16;
    if (inputAge >= legalAge) {
        return 'You are old enough to legally drive';
    }
    return 'You are not old enough to legally drive';
};

console.log(legalDrivingAge(age));
