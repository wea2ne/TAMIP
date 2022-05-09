const data = [
  {
      "title": "MONGO STICKY RICE",
      "tag": "Dessert",
      "colorTag": "#bda4f7",
      "time": "30 Minutes",
      "ingredients": [
          "2 blancs de poulet",
          "1 oignon",
          "4 càs de moutarde",
          "1 cas de miel 1/2 jus de citron"
      ],
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo sint debitis? Dolorem est at voluptatum obcaecati tempore eaque perferendis. Totam at consectetur commodi porro atque eligendi rerum vero nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo sint debitis? Dolorem est at voluptatum obcaecati tempore eaque perferendis. Totam at consectetur commodi porro atque eligendi rerum vero nam?"
  },
  {
      "title": "MONGO STICKY RICE",
      "tag": "Dessert",
      "colorTag": "#bda4f7",
      "time": "30 Minutes",
      "ingredients": [
          "2 blancs de poulet",
          "1 oignon",
          "4 càs de moutarde",
          "1 cas de miel 1/2 jus de citron"
      ],
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo sint debitis? Dolorem est at voluptatum obcaecati tempore eaque perferendis. Totam at consectetur commodi porro atque eligendi rerum vero nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo sint debitis? Dolorem est at voluptatum obcaecati tempore eaque perferendis. Totam at consectetur commodi porro atque eligendi rerum vero nam?"
  },
  {
      "title": "MONGO STICKY RICE",
      "tag": "Dessert",
      "colorTag": "#bda4f7",
      "time": "30 Minutes",
      "ingredients": [
          "2 blancs de poulet",
          "1 oignon",
          "4 càs de moutarde",
          "1 cas de miel 1/2 jus de citron"
      ],
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo sint debitis? Dolorem est at voluptatum obcaecati tempore eaque perferendis. Totam at consectetur commodi porro atque eligendi rerum vero nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo sint debitis? Dolorem est at voluptatum obcaecati tempore eaque perferendis. Totam at consectetur commodi porro atque eligendi rerum vero nam?"
  },
  {
      "title": "MONGO STICKY RICE",
      "tag": "Dessert",
      "colorTag": "#bda4f7",
      "time": "30 Minutes",
      "ingredients": [
          "2 blancs de poulet",
          "1 oignon",
          "4 càs de moutarde",
          "1 cas de miel 1/2 jus de citron"
      ],
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo sint debitis? Dolorem est at voluptatum obcaecati tempore eaque perferendis. Totam at consectetur commodi porro atque eligendi rerum vero nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo sint debitis? Dolorem est at voluptatum obcaecati tempore eaque perferendis. Totam at consectetur commodi porro atque eligendi rerum vero nam?"
  },
  {
      "title": "MONGO STICKY RICE",
      "tag": "Dessert",
      "colorTag": "#bda4f7",
      "time": "30 Minutes",
      "ingredients": [
          "2 blancs de poulet",
          "1 oignon",
          "4 càs de moutarde",
          "1 cas de miel 1/2 jus de citron"
      ],
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo sint debitis? Dolorem est at voluptatum obcaecati tempore eaque perferendis. Totam at consectetur commodi porro atque eligendi rerum vero nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo sint debitis? Dolorem est at voluptatum obcaecati tempore eaque perferendis. Totam at consectetur commodi porro atque eligendi rerum vero nam?"
  },
]

jQuery('.card-slider').slick({
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll:1,
    dots: false,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  
  let cards = document.querySelectorAll('.card');
  let card;
  let modal = document.querySelector('.modal');
  let closeButton = document.querySelector('.modal__close-button');
  let page = document.querySelector('.page');
  const cardBorderRadius = 20;
  const openingDuration = 600; //ms
  const closingDuration = 600; //ms
  const timingFunction = 'cubic-bezier(.76,.01,.65,1.38)';
  
  var Scrollbar = window.Scrollbar;
  Scrollbar.init(document.querySelector('.modal__scroll-area'));
  
  
  function flipAnimation(first, last, options) {
    let firstRect = first.getBoundingClientRect();
    let lastRect = last.getBoundingClientRect();
    
    let deltas = {
      top: firstRect.top - lastRect.top,
      left: firstRect.left - lastRect.left,
      width: firstRect.width / lastRect.width,
      height: firstRect.height / lastRect.height
    };
    
    return last.animate([{
      transformOrigin: 'top left',
      borderRadius:`
      ${cardBorderRadius/deltas.width}px / ${cardBorderRadius/deltas.height}px`,
      transform: `
        translate(${deltas.left}px, ${deltas.top}px) 
        scale(${deltas.width}, ${deltas.height})
      `
    },{
      transformOrigin: 'top left',
      transform: 'none',
      borderRadius: `${cardBorderRadius}px`
    }],options);
  }
  cards.forEach((item)=>{
    item.addEventListener('click',(e)=>{
      jQuery('.card-slider').slick('slickPause');
      card = e.currentTarget;
      page.dataset.modalState = 'opening';
      card.classList.add('card--opened');
      card.style.opacity = 0;
      document.querySelector('body').classList.add('no-scroll');
  
      let animation = flipAnimation(card,modal,{
        duration: openingDuration,
        easing: timingFunction,
        fill:'both'
      });
  
      animation.onfinish = ()=>{
        page.dataset.modalState = 'open';
        animation.cancel();
      };
    });
  });
  
  closeButton.addEventListener('click',(e)=>{
    page.dataset.modalState = 'closing';
    document.querySelector('body').classList.remove('no-scroll');
    
    let animation = flipAnimation(card,modal,{
      duration: closingDuration,
      easing: timingFunction,
      direction: 'reverse',
      fill:'both'
    });
  
    animation.onfinish = ()=>{
      page.dataset.modalState = 'closed';
      card.style.opacity = 1;
      card.classList.remove('card--opened');
      jQuery('.card-slider').slick('slickPlay');
      animation.cancel();
    };
  });
 
  <div class="card-wrapper"><article class="card">
  <picture class="card__background">
    <img src="">
  </picture>
  <div class="card__category__chicken"><a href="chicken.html"></a>
    POULET
  </div>
  <h3 class="card__title">Poulet curry rouge</h3>
  <div class="card__duration">
    Durée : e.time
  </div>
  </article></div>

data.map((e, i) => {
  console.log(e)
  document.createElement()
//   let container = document.getElementsByClassName("card-slider")
//   let div = document.createElement("div");
//   let article = document.createElement("article");
//   const tag = document.createTextNode(e.tag);
//   let pic = document.createElement("picture");
//   let div2 = document.createElement("div");
//   let h3 = document.createElement("h3");
//   const title = document.createTextNode(e.tag);
//   let div3 = document.createElement("div");
//   let div4 = document.createElement("div");
//   div.appendChild(tag);

// container[0].appendChild('<p>je sius la</p>')


  // let titleButton = document.getElementsByClassName("card__title");
  // console.log(titleButton[0].textContent)
  // titleButton[0].textContent = e.title
})