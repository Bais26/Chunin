const PecahAngka = () => {
    const angka = 56431046145403146;
    if (typeof(angka) === "number" && String(angka).length >= 16 ) {
        const pemisah = angka.toString().split(0)
        let result = '';

        pemisah.map((response) => {
            return result = result + response.split('').sort((a, b) =>{
                return a - b
            }).join('')
        })
        resultToInteger
    }
}