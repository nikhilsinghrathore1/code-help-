// display none of discount screen
let discount = document.querySelector("#discount")
let cut = document.querySelector("#cut-discount ion-icon")
cut.addEventListener("click",function(){
            discount.style.display="none"
})


// typing effect
console.log("working");
var typed = new Typed(".typed-text",{

               strings : ["Love","Babber"],
               typeSpeed: 50,
               backSpeed:100,
               loop:true
})

// increasing count of the followers


gsap.from("#mainText,#sub-text,#typedText-buttons,#merged-img-typedText",{
               x:-100,
               duration:1,
               opacity:0,
               stagger:0.3,

})


let FY = document.querySelector("#Fyoutube");
let Ft = document.querySelector("#Ftwitter");
let Fi = document.querySelector("#Finstagram");
let Fl = document.querySelector("#Flinkedin");
FY.innerText ="0";
Ft.innerText ="0";
Fi.innerText ="0";
Fl.innerText ="0";


function timey(){
               let rand = 0 ;
               let interval = setInterval(function(){
               rand = rand+ Math.floor(Math.random()*60);
               FY.innerText = rand ;
               if(rand>850){
                              FY.innerText = "900K+"
                              clearInterval(interval)

               }
               },50)
}
function timel(){
               let rand = 0 ;
               let interval = setInterval(function(){
               rand = rand+ Math.floor(Math.random()*60);
               Fl.innerText = rand ;
               if(rand>390){
                              Fl.innerText = "410K+"
                              clearInterval(interval)

               }
               },100)
}
function timet(){
               let rand = 0 ;
               let interval = setInterval(function(){
                              
               Ft.innerText = rand ;
               rand++;
               if(rand>3){
                              Ft.innerText = "4K+"
                              clearInterval(interval)

               }
               },200)
}
function timei(){
               let rand = 0 ;
               let interval = setInterval(function(){
               rand = rand+ Math.floor(Math.random()*10);
               Fi.innerText = rand ;
               if(rand>90){
                              Fi.innerText = "100K+"
                              clearInterval(interval)

               }
               },100)
}

function all(){
               timei();
               timey();
               timel();
               timet();
}
gsap.to("#increasing-number",{
               onStart:all,
               scrollTrigger:{
                              trigger:"#increasing-number",
                              scroller:"body",
                              start:"top 650px",
                              end:"top 650px",
                              
               }
})
gsap.from("#data-structure",{
               x:-100,
               opacity:0,
               duration:1,
               scrollTrigger:{
                              trigger:"#grid",
                              scroller:"body",
                              start:"top 550px",
                              end:"top 200px"
               }
})

gsap.from("#placement",{
               y:100,
               opacity:0,
               duration:1,
               scrollTrigger:{
                              trigger:"#grid",
                              scroller:"body",
                              start:"top 550px",
                              end:"top 200px"
               }
})
gsap.from("#question",{
               x:100,
               opacity:0,
               duration:1,
               scrollTrigger:{
                              trigger:"#grid",
                              scroller:"body",
                              start:"top 550px",
                              end:"top 200px"
               }
})
gsap.from("#curated-content",{
               x:-100,
               opacity:0,
               duration:1,
               scrollTrigger:{
                              trigger:"#grid",
                              scroller:"body",
                              start:"top 240px",
                              end:"top 200px"
               }
})
gsap.from("#best",{
               y:100,
               opacity:0,
               duration:1,
               scrollTrigger:{
                              trigger:"#grid",
                              scroller:"body",
                              start:"top 240px",
                              end:"top 200px"
               }      
})
gsap.from("#new",{
               x:100,
               opacity:0,
               duration:1,
               scrollTrigger:{
                              trigger:"#grid",
                              scroller:"body",
                              start:"top 240px",
                              end:"top 200px"
               }             
})

gsap.from("#inside-main-img img",{
               y:50,
               duration:1,
               opacity:0,
               scrollTrigger:{
                              trigger:"#inside-main-img",                        
                              scroller:"body",
                              start:"top 500px",
                              end:"top 400px"
               }
})
gsap.from("#compines .firstCompany",{
               y:50,
               opacity:0,
               duration:0.7,
               stagger:0.5,
               scrollTrigger:{
                              trigger:"#inside-main-img",                        
                              scroller:"body",
                              start:"top 200px",
                              end:"top 100px"
               }                           
})

gsap.from("#left-blue,#left-main-text,#left-sub-text",{
               y:30,
               opacity:0,
               stagger:0.4,
               duration:0.5,
               scrollTrigger:{
                              trigger:"#left-blue",
                              scroller:"body",
                              start:"top 500px",
                              end:"top 400px"
               }
})

gsap.from("#page5h1",{
               opacity:0,
               y:50,
               scrollTrigger:{
                              trigger:"#page5",
                              scroller:"body",
                              start:"top 400px",
                              end:"top 300px",
               }
})
gsap.from("#page5h12",{
               opacity:0,
               y:50,
               scrollTrigger:{
                              trigger:"#recorded-courses",
                              scroller:"body",
                              start:"top 400px",
                              end:"top 300px",
               }
})

gsap.from("#page7h1",{
               opacity:0,
               y:50,
               scrollTrigger:{
                              trigger:"#page7",
                              scroller:"body",
                              start:"top 400px",
                              end:"top 300px"
               }
})

const slide = document.querySelectorAll('.window');
slide.forEach(function(val,index){
               val.style.left=`${index*43}%`
})
let counter = 0 ;
function slidingRight(){
               counter = (counter+1)%slide.length;
               console.log(counter);
               slide.forEach(function(val){
                              val.style.transform =`translateX(-${counter*100}%)`
               })

}
function slidingLeft(){
               if(counter>0){
                              counter = (counter+1)%slide.length;
                              slide.forEach(function(val){
                                             val.style.transform =`translateX(${counter*3}%)`
                              })
               }

}
sliding();