import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse} from "../config/url_put.js";


function pushData(){
    let data = {
        menu: getValue("menu"),
        harga: parseFloat(getValue("harga")),
        deskripsi: getValue("deskripsi"),
        kategori: {
            kategori: getValue("kategori"),
        },
        bahanbaku: {
            bahanbaku: getValue("bahanbaku"),
            jumlah: getValue("jumlah"),
        },
    };
    putData(urlPUT, data, AmbilResponse);

}

onClick("button", pushData);