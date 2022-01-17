const myTitle = document.getElementById('myTitle');
const myImgae = document.getElementById('myImage');

let seizoenen = [
    {
        "titel":"seizoenen",
        "image":"img/seasons.jpg",
        "backGround":"gray"
    },
    {
        "titel":"lente",
        "image":"img/spring.jpg",
        "backGround":"green"
    },
    {
        "titel":"zomer",
        "image":"img/summer.jpg",
        "backGround":"yellow"
    },
    {
        "titel":"autum",
        "image":"img/autumn.jpg",
        "backGround":"brown"
    },
    {
        "titel":"winter",
        "image":"img/winter.jpg",
        "backGround":"white"
    }

];

//let seizoen = {
//   "titel":"lente",
//    "image":"img/spring.jpg"
//};

function show(index){
    myTitle.innerHTML = seizoenen[index].titel;
    myImgae.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].backGround;
}

