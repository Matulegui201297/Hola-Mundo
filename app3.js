console.log('Inicio de script');

setTimeout(() => {
    console.log('Primer Time out');
},5000);

setTimeout(() => {
    console.log('Segundo Time out');
},0);

setTimeout(() => {
    console.log('TercerTime out');
},0);

console.log('Fin de script');