export let isiTabel = 
`
 <tbody>
    <tr >  
    <td class="text-truncate">#MENU#</td>
    <td class="text-truncate">#HARGA#</td>
    <td class="text-truncate">#DESKRIPSI#</td>
    <td class="text-truncate">#KATEGORI#</td>
    <td class="text-truncate">#BAHANBAKU#</td>
    <td class="text-truncate">#JUMLAH#</td>
    <td class="text-truncate">
        <a class="text-truncate" type="button" href="edit.html?restoranId=#IDEDIT#">EDIT</a>
        <button class="text-truncate" type="button" id="del_button" onclick="ConfirmDelete('#IDHAPUS#')">DELETE</button>
        <button class="text-truncate" type="button">DETAIL</button>
    </td>
    </tr>
</tbody>
`