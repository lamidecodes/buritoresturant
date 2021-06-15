let  slider = document.querySelector('.thumbnail-container')
let thumbnail = document.querySelectorAll('.thumbnail')
let form = document.getElementById('form')
let email = document.getElementById('mail')
let submit = document.getElementById('submit')
let alertM = document.getElementById('mailalert')
let response = document.getElementById('res')
let maxscroll = slider.scrollWidth - slider.clientWidth


function autoplay(){
  if(slider.scrollLeft > (maxscroll - 1)){
      slider.scrollLeft -= maxscroll
  }else{
      slider.scrollLeft += 1
  }
 
}

let play  = setInterval(autoplay,50)

for(k=0;k<thumbnail.length;k++){
   thumbnail[k].addEventListener('mouseover', () => {
       clearInterval(play)
   })
   thumbnail[k].addEventListener('mouseout', () => {
       return play = setInterval(autoplay,50)
   })
}

form.addEventListener('submit', (e) => {
   e.preventDefault()
    const emailValue = email.value.trim()
   if(!emailValue){
      alert('enter a valid email')
   }else{
      form.style.display = "none"
       alertM.style.display = "none"
       response.innerHTML = "Thanks for subcribing !"
       response.style.fontSize = '25px'
       response.style.fontWeight = '100'
       response.style.color = 'red'
       response.style.marginTop = "100px"
   }
})



function showlist(){
   let body =  document.querySelector('#lists')
  body.style.top = "0%"
}

function closelist(){
   let body =  document.querySelector('#lists')
  body.style.top = "100%"
}