//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get("presensiId");

export let urlFetch = "https://ws-ghaida2024-10da574be531.herokuapp.com/presensi/" + presensiId;