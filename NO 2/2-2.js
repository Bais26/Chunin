//klik gambar ini https://res.cloudinary.com/devloops7/image/upload/v1612761431/chunin/screenshot-docs.google.com-2021.02.08-12_14_19_byiobb.png lalu Ubahlah data tersebut menggunakan spread operator menjadi: name: nama anda email: email anda hobby: hobi anda . 2. Ambilah data “street dan city” tersebut menggunakan destructuring
let data={
    id:1,
    nama:"Leane Graham",
    username:"Bret",
    email:"Sincare@april.biz",
    address:
    {
        street:"kulas Light",
        suite:"Apt.558",
        city:"Gwenborough",
        zipcode:"92998-3874",
    },
    phone:"0895-4228-26811",
    website:"babas.xyz",
}
//menggubah data ke spreadoperator
const newdata = {...data,hobi:"nyakitin",nama:"bais yufan",email:"babasganteng@haha.xyz"};
//destructuring nilai dari data
const { street, city } = data;
console.log(data.address.street);
console.log(data.address.city);
console.log(newdata);

