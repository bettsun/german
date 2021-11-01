const picture = document.getElementById('person-img');
const choosePicBtn = document.getElementById('choosePicture');
const chooseThemaBtn = document.getElementById('chooseThema');

choosePicBtn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * 102);
  console.log(currentItem);
  picture.src="./img/Pictures/picture" + currentItem + ".png";

})

chooseThemaBtn.addEventListener('click', () => {
  fileNumber = Math.floor(Math.random() * 12);
  if(fileNumber === 0 ) {
    pictureNumber = Math.floor(Math.random() * 13);
    picture.src="./img/Thema/Thema" + fileNumber + "/picture" + pictureNumber + ".png";
  }
  else if(fileNumber === 1) {
    pictureNumber = Math.floor(Math.random() * 7);
    picture.src="./img/Thema/Thema" + fileNumber + "/picture" + pictureNumber + ".png";
  }
   else if(fileNumber === 2) {
    pictureNumber = Math.floor(Math.random() * 19);
    picture.src="./img/Thema/Thema" + fileNumber + "/picture" + pictureNumber + ".png";
  }
   else if(fileNumber === 3) {
    pictureNumber = Math.floor(Math.random() * 12);
    picture.src="./img/Thema/Thema" + fileNumber + "/picture" + pictureNumber + ".png";
  }
   else if(fileNumber === 4) {
    pictureNumber = Math.floor(Math.random() * 18);
    picture.src="./img/Thema/Thema" + fileNumber + "/picture" + pictureNumber + ".png";
  }
   else if(fileNumber === 5) {
    pictureNumber = Math.floor(Math.random() * 19);
    picture.src="./img/Thema/Thema" + fileNumber + "/picture" + pictureNumber + ".png";
  }
   else if(fileNumber === 6) {
    pictureNumber = Math.floor(Math.random() * 22);
    picture.src="./img/Thema/Thema" + fileNumber + "/picture" + pictureNumber + ".png";
  }
   else if(fileNumber === 7) {
    pictureNumber = Math.floor(Math.random() * 16);
    picture.src="./img/Thema/Thema" + fileNumber + "/picture" + pictureNumber + ".png";
  }
   else if(fileNumber === 8) {
    pictureNumber = Math.floor(Math.random() * 16);
    picture.src="./img/Thema/Thema" + fileNumber + "/picture" + pictureNumber + ".png";
  }
   else if(fileNumber === 9) {
    pictureNumber = Math.floor(Math.random() * 16);
    picture.src="./img/Thema/Thema" + fileNumber + "/picture" + pictureNumber + ".png";
  }
   else if(fileNumber === 10) {
    pictureNumber = Math.floor(Math.random() * 13);
    picture.src="./img/Thema/Thema" + fileNumber + "/picture" + pictureNumber + ".png";
  }  
  else if(fileNumber === 11) {
    pictureNumber = Math.floor(Math.random() * 16);
    picture.src="./img/Thema/Thema" + fileNumber + "/picture" + pictureNumber + ".png";
  }  
  else {
    pictureNumber = Math.floor(Math.random() * 19);
    picture.src="./img/Thema/Thema" + fileNumber + "/picture" + pictureNumber + ".png";
  }

  

})