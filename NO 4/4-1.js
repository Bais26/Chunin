//Contoh 1 menggunakan promise secara langsung
let ditepati = true;
const janji1 = new Promise((resolve,reject)=>{
    if (ditepati) {
        resolve ('janji telah di tepati')
    }else{
        reject ('kamu ingkar janji')
    }
});
console.log(janji1);

//Contoh 2 menggunakan promise dengan than dan catch
let nilai = true;
const janji2 = new Promise((resolve,reject)=>{
    if (nilai) {
        resolve ('nilai telah di input')
    }else{
        reject ('masukan nilai yang benar')
    }
});
janji2
    .then(respone => console.log('Done : ' + respone))
    .catch(respone => console.log('Failed : ' + respone))

// contoh 3 menggunakan timeout
let berjanji = true;
const janji3 = new Promise((resolve,reject)=>{
    if (berjanji) {
        setTimeout(() => { 
            resolve ('nilai telah di input')
        },5000);
    }else{
        setTimeout (() => {
            reject ('kamu ingkar janji')
        },5000)
    }
});

console.log('start');
console.log(janji3.then(() => console.log(janji3)));
console.log('end');