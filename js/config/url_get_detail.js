//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const restoranId = urlParams.get("restoranId");

export let urlFetch = "https://bp-tubes-c48fa88ca6a5.herokuapp.com/restoran/" + restoranId;