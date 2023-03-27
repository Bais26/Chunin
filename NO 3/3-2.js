function hasil(NilaiAwal,NilaiAkhir,DataArray){
    if (NilaiAwal >= NilaiAkhir){
        return "Nilai Akhir harus lebih besar";
    }
    if (DataArray.length <= 5){
        return "masukan nilai lebih dari 5";
    }
    const nilai = DataArray.filter(data => data > NilaiAwal && data < NilaiAkhir);
    return nilai ;
}
console.log(hasil (25,50,[90,92,81,80,92,89,76]));