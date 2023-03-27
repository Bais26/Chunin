//menghitung nilai rata-rata
function rata_rata(nilai) {
    var nilai = nilai_Indonesia + nilai_Inggris + nilai_Matematika + nilai_Pkn;
    var total = nilai / 4;
    return total;
}

var total = "";
var nilai_Indonesia =90;
var nilai_Inggris =90;
var nilai_Pkn =70;
var nilai_Matematika=90;
//output
var Rata_rata = rata_rata (nilai_Indonesia,nilai_Inggris,nilai_Matematika,nilai_Pkn);


var grade ="";
if (Rata_rata >=90){
    grade = "A";
}else if(Rata_rata >=80){
    grade = "B"
}else if(Rata_rata >=70){
    grade = "C"
}else if(Rata_rata >=60){
    grade = "D"
}else if(Rata_rata <=60){
    grade = "E"
}else{
    grade= "Masukan nilai yang benar"
}
console.log("nilai anda adalah " + Rata_rata);
console.log("grade "+ grade);