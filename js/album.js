function loadAlbumData() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => getAlbum(data))
}
loadAlbumData();

function getAlbum(data) {
    const albumContainer = document.getElementById('albums');
    for (const each of data){
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.innerText = each.title;
        albumContainer.appendChild(p);
    }
}
