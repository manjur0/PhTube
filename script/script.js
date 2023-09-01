// categorys handle
const handleCategories = async () => {

    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();
    console.log(data.data);

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
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = '';
    data.data.forEach((video) => {
        console.log(video);
        const newDiv = document.createElement('card-container');
        newDiv.innerHTML = `
                <div class="card mx-auto  bg-base-100 ">
                    <figure><img class="max-h-44" src="${video.thumbnail}" /></figure>
                    <div class="card-body w-96 pl-0 text-left">
                        <!-- author info -->
                        <div class="card-actions justify-start ">
                            <!-- author img  -->
                            <div class="avatar"> 
                                <div class="w-10 h-10 mr-4 rounded-full">
                                    <img src="${video.authors[0].profile_picture}" alt="">
                                </div>
                            <div class="">
                                <!-- videos title  -->
                                <h2 class="card-title">${video.title}</h2>
                                <!-- author name -->
                                <p class="text-sm mt-3">${video.authors[0].profile_name} ${video.authors[0].verified}</p>
                                <!-- viewed info -->
                                <p>${video.others.views}</p>
                            </div>
                        </div>
                    </div>
                </div>

        `;
        cardContainer.appendChild(newDiv);

    })

    // console.log(categoriId);

}

handleCategories()
handleVideos('1000')