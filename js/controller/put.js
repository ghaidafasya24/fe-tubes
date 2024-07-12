import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url_put.js";


function pushData() {
    var bahan_baku = getValue("bahan-baku");

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

        putData(urlPUT, data, AmbilResponse);
   
}

onClick("button", pushData);
