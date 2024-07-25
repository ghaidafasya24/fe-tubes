export let isiTabel = 
`
 <tbody>
    <tr class="text-center">  
    <td class="text-truncate">#MENU#</td>
    <td class="text-truncate">#HARGA#</td>
    <td class="text-truncate">#DESKRIPSI#</td>
    <td class="text-truncate">#KATEGORI#</td>
    <td class="text-truncate">#BAHANBAKU#</td>
    <td class="text-truncate">#JUMLAH#</td>
    <td class="text-truncate">
        <a class="text-truncate btn btn btn-warning" type="button" href="edit.html?restoranId=#IDEDIT#">EDIT</a>
        <a class="text-truncate btn btn btn-info" type="button" href="detail.html?restoranId=#IDDETAIL#">DETAIL</a>
        <button class="text-truncate btn btn-danger" type="button" id="del_button" onclick="confirmDelete('#IDHAPUS#')">DELETE</button>
    </td>
    </tr>
</tbody>
`