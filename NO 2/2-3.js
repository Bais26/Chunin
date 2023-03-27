function printsegitiga(panjang) {
    let hasil= "";
    for (let i=0;i<=panjang;i++){
        for (let y = 0; y < i; y++) {
            hasil += ' ';
        }
        for (let k = panjang; k>=i;k--){
            hasil += " 1";
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(printsegitiga("10"));