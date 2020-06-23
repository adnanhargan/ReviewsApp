//local reviews data

const reviews = [
    {
        id: 1,
        name: "adnanali",
        job: "web developer",
        img: "https://res.cloudinary.com/adnan786/image/upload/v1592887338/images/person1_u1guye.png",
        text: "adnan ali info Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis facere quod sint assumenda repellendus nemo dolorum quas iste nobis magnam fuga sapiente, dolores hic qui",
    },
    {
        id: 2,
        name: "zeeshanali",
        job: "UI/UX designer",
        img: "https://res.cloudinary.com/adnan786/image/upload/v1592887264/images/person2_gafpk3.png",
        text: "zeeshan ali info Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis facere quod sint assumenda repellendus nemo dolorum quas iste nobis magnam fuga sapiente, dolores hic qui",
    },
    {
        id: 3,
        name: "abdullhawarraich",
        job: "intern",
        img: "https://res.cloudinary.com/adnan786/image/upload/v1592887378/images/person3_zjzfze.png",
        text: "Abdullha warraich Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis facere quod sint assumenda repellendus nemo dolorum quas iste nobis magnam fuga sapiente, dolores hic qui.",
    },
    {
        id: 4,
        name: "mnasiraliali",
        job: "web developer",
        img: "https://res.cloudinary.com/adnan786/image/upload/v1592887419/images/person4_obqm98.png",
        text: "Muhammad Nasir Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis facere quod sint assumenda repellendus nemo dolorum quas iste nobis magnam fuga sapiente, dolores hic qui.",
    },
    {
        id: 5,
        name: "Ghulam rasool",
        job: "Backend Developer",
        img: "https://res.cloudinary.com/adnan786/image/upload/v1592887266/images/person5_mlntr1.png",
        text: "Ghulam Rasool Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis facere quod sint assumenda repellendus nemo dolorum quas iste nobis magnam fuga sapiente, dolores hic qui.",
    },
];

//select items 
const img = document.getElementById("img1");
const author  = document.getElementById("author");
const job  = document.getElementById("job");
const info  = document.getElementById("info");

//select buttons

const prevBtn = document.querySelector('.prev-btn'); 
const nextBtn = document.querySelector('.next-btn'); 
const randomBtn = document.querySelector('.random-btn'); 

//load initial item

let currentitem =0  ;

//function to show the person

function showPerson(){
    const item = reviews[currentitem]

    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

//event listner for page loaded 

window.addEventListener("DOMContentLoaded", function(){
    showPerson()
});

//adding event listner for prev button

prevBtn.addEventListener('click', function(){
    currentitem--;
    if(currentitem < 0){
        currentitem =3;
    }
    showPerson();
});
nextBtn.addEventListener('click', function(){
    currentitem++;
    if(currentitem > reviews.length -1){
        currentitem = 0;
    }
    showPerson();
});

//event listner for random button

randomBtn.addEventListener('click', function(){
    currentitem = Math.floor(Math.random()* reviews.length);
    console.log(currentitem);
    
    showPerson();
})
