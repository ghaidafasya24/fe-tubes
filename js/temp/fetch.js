import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://bp-tubes-c48fa88ca6a5.herokuapp.com/restoran";
get(urlAPI,isiTableRestoran);
function isiTableRestoran(results){
    console.log(results);
}