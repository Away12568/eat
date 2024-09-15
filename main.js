const cardsData = [
{  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lCKG3uhQjcjf20C6zowXVfXNeAUb_5eu0A&s", 
    name: "simplest salad",
    p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Vero provident voluptas numquam pariatur magni in!",
    time:"  6 mins ago",
    comment:"comment",
    icon1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9e8uHtDbDu1BYvVV5BZV8Vn9KVLe6Fx1N_QS8TXkFhCNaKY7L8RqT6Z7R57Jm342FLg&usqp=CAU",
    icon2: "https://w7.pngwing.com/pngs/351/950/png-transparent-byggekort-business-no-entrepreneur-%C3%85s-comment-icon-face-head-black.png"

},
{  image: "https://hips.hearstapps.com/hmg-prod/images/copycat-western-bacon-cheeseburger-2-1649170836.jpeg", 
    name: "simplest salad",
    p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Vero provident voluptas numquam pariatur magni in!",
    time:"  6 mins ago",
    comment:"comment",
    icon1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9e8uHtDbDu1BYvVV5BZV8Vn9KVLe6Fx1N_QS8TXkFhCNaKY7L8RqT6Z7R57Jm342FLg&usqp=CAU",
    icon2: "https://w7.pngwing.com/pngs/351/950/png-transparent-byggekort-business-no-entrepreneur-%C3%85s-comment-icon-face-head-black.png"

},
{  image: "https://naturespath.com/cdn/shop/articles/iStock-512488958-104681.jpg?v=1725927894", 
    name: "simplest salad",
    p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Vero provident voluptas numquam pariatur magni in!",
    time: "6 mins ago",
    comment:"comment",
    icon1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9e8uHtDbDu1BYvVV5BZV8Vn9KVLe6Fx1N_QS8TXkFhCNaKY7L8RqT6Z7R57Jm342FLg&usqp=CAU",
    icon2: "https://w7.pngwing.com/pngs/351/950/png-transparent-byggekort-business-no-entrepreneur-%C3%85s-comment-icon-face-head-black.png"

}
]
 const wrapper = document.querySelector(".wrapper")
   const cards = cardsData.map(cards => {
    return`
        
            <div class="card">
                <div class="imgbgc">
       <img src=${cards.image} alt="">
            </div>
                <div class="text">
                <h1>${cards.name}</h1>
                <p>${cards.p}</p>
                <div class="time-main">
                <p>${cards.time}</p>
                <p>${cards.comment}</p>
            </div>
            </div>
            </div>
    `
   })
   wrapper.innerHTML = cards
   