import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1'

function fetchData(urlApi){
    return fetch(urlApi);
}

// fetchData(`${API}/products`)
//     .then(resp => resp.json())
//     .then(prod => {
//         console.log(prod);
//     })
//     .then(()=>{
//         console.log('Hola')
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
//     .finally(console.log('Finalizo la promesa'))

fetchData(`${API}/products`)
    .then(res => res.json())
    .then(products => {
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(res=>res.json())
    .then(product => {
        console.log(product.id)
        console.log(product.title)
       return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(res => res.json())
    .then(category => {
        console.log(category.name)
    })
    .catch(err => console.log(err))
    .finally(()=>console.log('Termino'))