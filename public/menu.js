const menuSection = document.querySelector('.menu-items')
const filterBtns = document.querySelectorAll('.filter-btn')

window.addEventListener('DOMContentLoaded', ()=>{
    displayMenuItems(menu)
});


filterBtns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const category = e.currentTarget.dataset.id;

        const menuCategory = menu.filter((menuItem)=>{
            if(menuItem.category === category){
                return menuItem;
            }
        })  
        if(category === "all"){
            displayMenuItems(menu)
        }  
        else{
            displayMenuItems(menuCategory)
        }
    })
})

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map((items)=>{

        return `<div class="flex flex-col md:flex-row gap-5 w-[300px] md:w-[500px]">
                    <div>
                        <img src=${items.img} alt="${items.title}" class="w-full border-2 border-amber-600 rounded-lg">
                    </div>
                    <div>
                        <div class="flex justify-between">
                            <h1 class="font-bold tracking-widest capitalize">${items.title}</h1>
                            <p class="font-bold tracking-widest text-amber-600">$${items.price}</p>
                        </div>
                        <div class="border-b-slate-300 border-b-2"></div>
                        <p class="text-justify">${items.desc}</p>
                    </div>
                </div>`
    })

    displayMenu = displayMenu.join("");
    menuSection.innerHTML = displayMenu;
}



















