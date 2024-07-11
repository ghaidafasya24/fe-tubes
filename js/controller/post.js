import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post.js";

function pushData() {
    try {
        let harga = parseFloat(getValue("harga"));
        
        // Validate harga
        if (isNaN(harga)) {
            throw new Error("Invalid harga");
        }

        let data = {
            nama: getValue("nama"),
            harga: harga,
            deskripsi: getValue("deskripsi"),
            kategori: {
                kategori: getValue("kategori"),
            },
            bahanbaku: {
                bahanbaku: getValue("bahanbaku"),
                jumlah: getValue("jumlah"),
            },
        };

        postData(urlPOST, data, AmbilResponse);
    } catch (error) {
        console.error("Failed to push data:", error);
    }
}

onClick("button", pushData);
