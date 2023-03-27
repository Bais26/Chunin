// contoh if else
const nilai = 90;
if(nilai >= 73){
     console.log("anda lulus");
}else{
     console.log("anda tidak lulus");
}

//contoh switch case
switch(true){
    case nilai >80:
        keterangan = " A";
        break;
    case nilai >70:
        keterangan = " B";
        break;
    case nilai >60:
        keterangan = " C";
        break;
    case nilai >50:
        keterangan = " D";
        break;
    default:
        keterangan = " Anda di DO";
        break;
        
}
console.log("nilai anda adalah" +keterangan);