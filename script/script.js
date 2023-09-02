// categorys handle
const handleCategories = async () => {

    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();
    // console.log(data.data);

    const tabContainer = document.getElementById('tab-container');
    data.data.forEach((categoris) => {
        const createNewDiv = document.createElement('div')
        createNewDiv.innerHTML = `
        <a onclick="handleVideos('${categoris.category_id}')" class="tab bg-slate-200 rounded-md">${categoris.category}</a> 
        `;
        tabContainer.appendChild(createNewDiv)
    })
};

// adding videos in categoris
handleVideos = async (categoriId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoriId}`)
    const data = await response.json();
    const video = data.data;
    // console.log(video);

    // Showing Error massege in empty categoris 
    const errorMassege = document.getElementById('errorMassege');
    const errorImage = document.getElementById('errorImage');
    if (video.length == 0) {
        errorMassege.classList.remove('hidden');
        errorImage.classList.remove('hidden');
    } else {
        errorMassege.classList.add('hidden');
        errorImage.classList.add('hidden');
    }

    //    appaind catagoris and item
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = '';
    data.data.forEach((video) => {
        const newDiv = document.createElement('card-container');
        newDiv.innerHTML = `
                <div class="card  bg-base-100  ">
                    <figure><img class="max-h-44" src="${video.thumbnail}" /></figure>
                    <div class="card-body flex-grow-0 w-96 pl-0 text-left">
                        <!-- author info -->
                        <div class="card-actions justify-start ">
                            <!-- author img  -->
                            <div class="avatar md:px-5"> 
                                <div class="w-10 h-10 mr-4 rounded-full">
                                    <img src="${video.authors[0].profile_picture}" alt=""> 
                                </div>
                            <div class="">
                                <!-- videos title  -->
                                <h2 class="card-title ">${video.title}</h2>
                                <!-- author name -->
                                <div class="text-sm mt-5 flex gap-3 align-baseline   ">
                                <p class="">${video.authors[0].profile_name}</p> 
                                <span class="text-center w-auto h-auto" >${video.authors[0].verified ? '<img class=""  src="../img/veryfied.svg"/>'
                : ""}</span>
                                </div>
                                <!-- viewed info -->
                                <p>${video.others.views}</p>
                            </div>
                        </div>
                    </div>
                </div>

        `;
        cardContainer.appendChild(newDiv);

    });


    // console.log(categoriId);
}







handleCategories()
handleVideos('1000')