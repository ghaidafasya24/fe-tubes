export function isiData(results) {  
    const inputMapping = [
        { id: 'nama', path: 'nama' },
        { id: 'harga', path: 'harga' },
        { id: 'deskripsi', path: 'deskripsi' },
        { id: 'kategori', path: 'kategori.kategori' },
        { id: 'bahan_baku', path: 'bahan_baku.bahan_baku' },
        { id: 'jumlah', path: 'bahan_baku.jumlah' }
    ];
  
    inputMapping.forEach(({ id, path, index, property }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path, index, property);
      inputElement.value = value;
    });
}
  
function getNestedValue(obj, path, index, property) {
    const value = path.split('.').reduce((value, key) => (value && value[key]) ? value[key] : '', obj);
    // console.log(`Value at path ${path}:`, value);
  
    if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
      return value[index][property];
    }
  
    return value;
}