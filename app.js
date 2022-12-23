const object = document.querySelector('.kask-image'); // pobierz obiekt HTML
const  target1 = document.querySelector('.description-button');
let currentRotation = 0;  // zmienna przechowująca obecny kąt obrotu

document.addEventListener('mousemove', (event) => {  // nasłuchuj na ruch myszy
  const x = event.clientX;  // pobierz pozycję x kursora
  const y = event.clientY;  // pobierz pozycję y kursora

  const targetRotation = Math.atan2(-y + object.offsetTop, -x + object.offsetLeft) * 180 / Math.PI;  // oblicz kąt docelowy
  const limitedRotation = Math.max(Math.min(targetRotation, 8), 0);  // ogranicz kąt do zakresu od 0 do 35 stopni
  const rotationDiff = limitedRotation - currentRotation;  // oblicz różnicę między obecnym a docelowym kątem
  currentRotation += rotationDiff * 0.1;  
  object.style.transform = `rotate(${currentRotation}deg)`;  
});