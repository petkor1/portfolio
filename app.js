const kask = document.querySelector('.kask-image'); 
let currentRotation = 0;  


// rotacja kasku
document.addEventListener('mousemove', (event) => {  
  const x = event.clientX;  
  const y = event.clientY;  

  const targetRotation = Math.atan2(-y + kask.offsetTop, -x + kask.offsetLeft) * 180 / Math.PI;  
  const limitedRotation = Math.max(Math.min(targetRotation, 8), 0);  
  const rotationDiff = limitedRotation - currentRotation;  
  currentRotation += rotationDiff * 0.1;  
  kask.style.transform = `rotate(${currentRotation}deg)`;  
});

