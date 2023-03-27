fetch ('http://dev007.my.id:7070/articles')
.then(respone  => respone.json())
.then(json => json.data.map(hasil => {
    console.log(hasil.tittle);
}))
.catch(error => console.log(error));
console.log('pending : ' );