import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post.js";

function pushData() {
    var bahan_baku = getValue("bahan_baku");

        let data = {
            nama: getValue("nama"),
            harga: parseFloat(getValue("harga")),
            deskripsi: getValue("deskripsi"),
            kategori: {
                kategori: getValue("kategori"),
            },
            bahan_baku: {
                // bahan_baku: getValue("bahan_baku"),
                bahan_baku : bahan_baku.split(","),
                jumlah: getValue("jumlah"),
            },
        };

        postData(urlPOST, data, AmbilResponse);
        alert('Data successfully saved!')
   
}

onClick("button", pushData);
