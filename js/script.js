/*const { json } = require("stream/consumers");
*/
const d = document;
const cl = console.log;

function setAtrs(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

var xhr = new XMLHttpRequest();
xhr.open('GET', 'js/data.json', false);
xhr.send();
if (xhr.status != 200)
{
    cl(xhr.status + ': '+xhr.statusText);
    
}
else
{
    let rooms = JSON.parse(xhr.responseText);
  
    function cabInt(e){
        let cabId = parseInt(e.target.getAttribute("data-id"));
        let modalTitle = d.querySelector(".modal-title")
        let modalBody = d.querySelector(".modal-body")
        let modalImg = modalBody.querySelector(".carousel-inner")
        modalImg.innerHTML="";
        let modalImgBtn = modalBody.querySelector(".carousel-indicators")
        modalImgBtn.innerHTML="";
        let modalText = modalBody.querySelector(".modal-text")
        for(let i in rooms){
            if (cabId == rooms[i].name) {
                
               
                modalTitle.innerHTML = rooms[i].status 
            
                if (Object.keys(rooms[i].img).length > 0)
                {
                    for(let j=0; j<Object.keys(rooms[i].img).length; j++)
                    {
                        let div = d.createElement("div")
                        let img = d.createElement("img")

                        div.setAttribute("class", "carousel-item") // добавление картинки
                        setAtrs(img, {"src":rooms[i].img[j], "class" : "d-block w-100", "alt":"Фото "+(j+1)})

                        let li = d.createElement("li") // добавление нижней кнопки
                        setAtrs(li, {"data-target": "#carouselExampleIndicators", "data-slide-to": j})

                        if (j==0)
                        {
                            li.classList.add("active")
                            div.classList.add("active")
                        }

                        div.append(img)
                        modalImg.append(div)
                        modalImgBtn.append(li)
                    }
                }
                else {
                    let div = d.createElement("div")
                    let img = d.createElement("img")

                    div.setAttribute("class", "carousel-item active")
                    setAtrs(img, {"src":"img/content/noimg.jpg", "class" : "d-block w-100", "alt":"Нет фото"})
                    div.append(img)
                    modalImg.append(div)
                }
               
            }
        }
    }

    const cabinets = d.querySelectorAll("#cabinet")


    // FOREACH
     for(let cabinet of cabinets){
        cabinet.addEventListener("click", cabInt)
        
    }
}


let floorControls = d.querySelectorAll(".floorControl")
let btnControls = d.querySelectorAll(".btn-control")
for(let i = 0; i < btnControls.length;i++){
    let btn = btnControls[i]
    btn.addEventListener("click", () => {
        for(floor of floorControls){
            floor.classList.add("hideFloor")
            
            floor.classList.add("d-none")
            
        }
        floorControls[i].classList.add("showFloor")
        floorControls[i].classList.remove("d-none")
        floorControls[i].style.opacity = "1"
    })
}


let preloader = document.querySelector('.preloader');

window.addEventListener('load', ()=>{
 
  setTimeout(() => {
    preloader.classList.add('done')

  }, 500)
   
})

  











/*
const d = document;
const c = console;

var xhr = new XMLHttpRequest();
xhr.open('GET', 'js/data.json', false);
xhr.send();
if (xhr.status != 200)
{
    c.log(xhr.status + ': '+xhr.statusText);
    
}
else
{
    let rooms = JSON.parse(xhr.responseText);
  
    function cabInt(e){
        let cabId = e.target.getAttribute("data-id");
        c.log(cabId)

        
    }

    const cabinets = d.querySelectorAll(".cabinet")
   
    // FOREACH
     for(let cabinet of cabinets){
        cabinet.addEventListener("click", cabInt)
       
    }
}
*/