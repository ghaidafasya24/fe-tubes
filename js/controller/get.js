import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";

export function GetAllMenu(results) {
    results.forEach(isiRow);
}

function isiRow(value) {
    // Format the harga to Rupiah currency
    let formattedHarga = value.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

    let content =
        isiTabel.replace("#MENU#", value.nama)
            .replace("#HARGA#", formattedHarga)
            .replace("#DESKRIPSI#", value.deskripsi)
            .replace("#KATEGORI#", value.kategori.kategori)
            .replace("#BAHANBAKU#", value.bahan_baku.bahan_baku)
            .replace("#JUMLAH#", value.bahan_baku.jumlah)
            .replace("#IDEDIT#", value._id)
            .replace("#IDHAPUS#", value._id)    
            .replace("#IDDETAIL#", value._id)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}
