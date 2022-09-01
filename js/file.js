const loadPhotos = async () => {
    const url = (`https://jsonplaceholder.typicode.com/photos`)

    const res = await fetch(url);
    const data = await res.json();
    return data;

}



const displayPhotos = async () => {
    const data = await loadPhotos();

    data.forEach(photos => {
        // console.log(photos)


        const { albumId, id, title, url, thumbnailUrl } = photos;

        const albumContainer = document.getElementById('album-container');
        const div = document.createElement('div');
        div.classList.add('card', "w-full", 'bg-base-100', 'shadow-xl', 'p-10')

        div.innerHTML = `
    <figure><img src="${thumbnailUrl}" /></figure>
    <div class="card-body">
        <h2 class="card-title">${title.length > 20 ? title.slice(0, 20) + "..." : title}</h2>
        <p></p>
        <div class="card-actions justify-center">
        <a href="#showDetailsButton" onclick="showModal(${id},'${title}','${url}')" class="btn btn-primary text-white">Show Details</a>
        </div>
    </div>
    `
        albumContainer.appendChild(div)

    });




};

const showModal = (id, title, url) => {
    // console.log(id, title, url)

    const showDetails = document.getElementById('modal-body');
    showDetails.innerHTML = `
       <img src="${url}" alt="">
        <h3 class="font-bold text-lg">Title: ${title}</h3>
        <p>ID: ${id}</p>

        <p>Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi qui odit eaque, doloremque ut voluptates asperiores quod accusantium illum!</p>

        <div class="modal-action">
        <a href="#" class="btn text-white">close</a>
        </div>

`
}




displayPhotos();

