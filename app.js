import getElement from "./utils/getElement.js";

const kask = document.querySelector('.kask-image');
const closeBtn = document.querySelector('.close-sidebar-btn');
const openBtn = document.querySelector('.open-sidebar-btn')
const sidebar = document.querySelector('.nav-sidebar');

let currentRotation = 0;  


// rotacja kasku darth vadera
if(kask){
  document.addEventListener('mousemove', (event) => {  
  const x = event.clientX;  
  const y = event.clientY;  

  const targetRotation = Math.atan2(-y + kask.offsetTop, -x + kask.offsetLeft) * 180 / Math.PI;  
  const limitedRotation = Math.max(Math.min(targetRotation, 20), 0);  
  const rotationDiff = limitedRotation - currentRotation;  
  currentRotation += rotationDiff * 0.1;  
  kask.style.transform = `rotate(${currentRotation}deg)`;  
});
}

if(sidebar){
  closeBtn.addEventListener('click', function(){
  sidebar.classList.remove('show-sidebar')
});
openBtn.addEventListener('click', function(){
  sidebar.classList.add('show-sidebar')
})
}


