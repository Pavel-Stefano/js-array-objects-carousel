const slider = [
    {
      immagine:"img/01.jpg",
      title:"Svezia",
      text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
    },
    {
      immagine:"img/02.jpg",
      title:"Svizzera",
      text:"Lorem ipsum",
    },
    {
      immagine:"img/03.jpg",
      title:"Gran Bretagna",
      text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  
    },
    {
      immagine:"img/04.jpg",
      title:"Germania",
      text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
    },
    {
      immagine:"img/05.jpg",
      title: "Paradise",
      text:"Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
  
    },
  ];

  let itemTemplate = "";
  let thumbTemplate = "";
  let currentIndexActive = 0;

    
    

  for (let i = 0; i < slider.length; i++) {
    let classActive = "";
    if (i === currentIndexActive) {
      classActive = "active";
    }
    itemTemplate += `
    <div class="item ${classActive}">
      <img src="${slider[i].immagine}" />
        <div class="title">
          <h2>${slider[i].title}</h2>
          <p>${slider[i].text}</p>
        </div>
    </div>`;
    thumbTemplate += `
    <div class="thumb ${classActive}">
      <img src="${slider[i].immagine}" alt="" />
    </div>`;
  }

// metto in due variabili rispettivamente i contenitori che si trovano nell'html
const itemsContainer = document.querySelector(".items-container");
const thumbsContainer = document.querySelector(".thumbs-container");
//console.log(itemContainer);

//stampo l'html corrispondente nei due contenitori
itemsContainer.innerHTML = itemTemplate;
thumbsContainer.innerHTML += thumbTemplate;
//document.querySelector(".item").classList.add("active");

//Pulsanti
//.next .fa-circle-chevron-down
//.prev .fa-circle-chevron-up
//metto nelle variabili next e prev i due pulsanti
const next = document.querySelector(" .fa-circle-chevron-down");
const prev = document.querySelector(" .fa-circle-chevron-up");

function slideUpDown(evento) {
  const direction = this.id;
  const imgs = document.getElementsByClassName("item");
  imgs[currentIndexActive].classList.remove("active");
  const thumbs = document.getElementsByClassName("thumb");
  thumbs[currentIndexActive].classList.remove("active");
  //console.log(imgs);
  if(direction === 'iNext'){
    if (currentIndexActive === 0) {
      currentIndexActive = slider.length - 1;
    } else {
      currentIndexActive--;
    }
  }
  else {
    if (currentIndexActive === 4) {
      currentIndexActive = 0;
    } else {
      currentIndexActive++;
    }
  }
  
  
  //console.log(currentIndexActive);
  imgs[currentIndexActive].classList.add("active");
  //console.log(currentIndexActive);
  thumbs[currentIndexActive].classList.add("active");
}

next.addEventListener("click",slideUpDown);
prev.addEventListener("click",slideUpDown);
const timer = setInterval(slideUpDown, 3000);
