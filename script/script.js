// categorys handle
const handleCategories = async () => {

    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();
    console.log(data.data);

    const tabContainer = document.getElementById('tab-container');
    data.data.forEach((categoris) => {
        const createNewDiv = document.createElement('div')
        createNewDiv.innerHTML = `
        <a class="tab bg-slate-200 rounded-md">${categoris.category}</a> 
        `;
        tabContainer.appendChild(createNewDiv)
    })

}

handleCategories()