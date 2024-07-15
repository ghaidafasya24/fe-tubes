import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url_put.js";

function pushData() {
  let data = {
    nama: getValue("nama"),
    harga: parseFloat(getValue("harga")),
    deskripsi: getValue("deskripsi"),
    kategori: {
      kategori: getValue("kategori"),
    },
    bahan_baku: {
      bahan_baku: getValue("bahan_baku"),
      jumlah: getValue("jumlah"),
    },
  };

  console.log(data);
  const nama = document.getElementById("nama");
  const harga = document.getElementById("harga");
  const deskripsi = document.getElementById("deskripsi");
  const kategori = document.getElementById("kategori");
  const bahan_baku = document.getElementById("bahan_baku");
  const jumlah = document.getElementById("jumlah");

  if (nama.value === "") {
    alert("Harap Masukan nama menu terlebih dahulu");
  } else if (harga.value === "") {
    alert("Harap Masukan harga menu terlebih dahulu");
  } else if (deskripsi.value === "") {
    alert("Harap Masukan deskripsi menu terlebih dahulu");
  } else if (kategori.value === "" || kategori.value === "Pilih Kategori") {
    alert("Harap memilih kategori menu terlebih dahulu");
  } else if (bahan_baku.value === "") {
    alert("Harap Masukan bahan baku menu terlebih dahulu");
  } else if (jumlah.value === "") {
    alert("Harap Masukan jumlah bahan baku terlebih dahulu");
  } else {
    
    putData(urlPUT, data, AmbilResponse)
      .then((response) => {
        if (response.ok) {
          alert("Data successfully saved!");
          document.getElementById("menu_form").reset();
        } else {
          alert("Terjadi kesalahan saat mengirim data.");
        }
      })
      .catch((error) => {
        alert("Terjadi kesalahan response: " + error.message);
      });
  }
}

onClick("button", pushData);
