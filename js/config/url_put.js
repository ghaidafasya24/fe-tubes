const urlParams = new URLSearchParams(window.location.search);
const restoranId = urlParams.get('restoranId');

export let urlPUT = "https://bp-tubes-c48fa88ca6a5.herokuapp.com/update/" + restoranId;

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.href = "index.html"; //reload halaman setelah klik ok pada alert
}