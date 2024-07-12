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
  
    putData(urlPUT, data, AmbilResponse)
      .then((response) => {
        if (response.ok) {
          alert("Data successfully updated!");
          document.getElementById("menu_form").reset();
        } else {
          alert("Terjadi kesalahan saat mengirim data.");
        }
      })
      .catch((error) => {
        alert("Terjadi kesalahan response: " + error.message);
      });
  }
  
  onClick("button", pushData);
