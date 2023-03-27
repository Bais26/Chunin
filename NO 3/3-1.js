// Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan callback function dengan data sebagai berikut: const name = [‘Abigail’, ‘Alexandra’, ‘Alison’, ‘Amanda’, ‘Angela’, ’Bella’, ‘Carol’, ‘Caroline’, ‘Carolyn’, ‘Deirdre’, ‘Diana’, ‘Elizabeth’, ‘Ella’, ‘Faith’, ‘Olivia’, ‘Penelope’]. Contoh: searchName(“an”, 3, callback)

const name= ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

function searchName(keyword, limit, callback) {
    const filter = name.filter(name => name.toLowerCase().includes(keyword.toLowerCase())).slice(0, limit);
    callback(filter);
  }
  
  //melakukan callback
  searchName("an", 3, function(filter) {
    console.log(filter);
  });