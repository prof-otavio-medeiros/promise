import fetch from 'node-fetch';

const fn01 = async () => {
    console.log(1);
    let ret = await fetch("https://jsonplaceholder.typicode.com");
    console.log(ret);
    console.log(2);
}

const fn02 = () => {
    console.log("Essa é a 'fn02'");
}

const fn03 = () => {
    console.log("Essa é a 'fn03'");
}

switch (process.argv[2]) {
    case '1':
        fn01();
        break;
    case '2':
        fn02();
        break;
    case '3':
        fn03();
        break;
    default:
        console.log(`O argumento passado << ${process.argv[2]} >> não é válido`);
        break;
}

// if (process.argv[2] === '1') {
//     fn01();
// } else if (process.argv[2] === '2') {
//     fn02();
// } else if (process.argv[2] === '3') {
//     fn03();
// } else {
//     console.log(`O argumento passado << ${process.argv[2]} >> não é válido`);
// }