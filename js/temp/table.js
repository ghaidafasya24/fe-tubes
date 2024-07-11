export let isiTabel = `
          <tr>
            <td>
              <div class="d-flex align-items-center">
                  <h6 class="mb-0 text-truncate">
                    #MENU#
                  </h6>
                </div>
              </div>
            </td>
            <td class="text-truncate">
              #HARGA#
            </td>
            <td class="text-truncate">
              #DESKRIPSI#
            </td>
            <td class="text-truncate">#KATEGORI#</td>
            <td class="text-truncate">#BAHANBAKU#</td>
            <td class="text-truncate">#JUMLAH#</td>
            <td>
              #JUMLAH#
            </td>
            <td>
             <button type="button" href="edit.html?restoranId=#IDEDIT#">EDIT</button>
             <button type="button" id="del_button" onclick="ConfirmDelete('#IDHAPUS#')">HAPUS </button>
             <button type="button" href="detail.html?restoranId=#IDDETAIL#">DETAIL </button>
            </td>
          </tr>
`;
