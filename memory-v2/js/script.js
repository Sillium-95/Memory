var point = 0;  
var wait;

var section = document.getElementById('plateau-de-jeu')
const cartes = document.querySelectorAll('.carte-div');

var reset = document.getElementById('reset').addEventListener('click', reset)


document.getElementById('point').innerHTML = 'Vos points : 0'
//__________________________________________________BOARD________________________________________________


function board(){
  for (i = 1; i < 11; i++){
    var div = document.createElement('div')
    var div_double = document.createElement('div')
    var img_face = document.createElement('img')
    var img_dos = document.createElement('img')
    var img_face_double = document.createElement('img')
    var img_dos_double = document.createElement('img')


    // carte simple 
    
    div.className = "carte-div"
    
    img_dos.className = "dos-de-carte"
    img_face.className = "face-de-la-carte"
    
    img_face.src = "img/"+i+".PNG"
    img_dos.src = "img/dos_de_carte.jpg"
    
    div.id = i
    div.style.order = Math.floor(Math.random() * 1000);

    div.addEventListener('click', retournCard)

    div.appendChild(img_face)
    div.appendChild(img_dos)

    // double de la carte 

    div_double.className = "carte-div"
     
    img_dos_double.className = "dos-de-carte"
    img_face_double.className = "face-de-la-carte"

    img_face_double.src = "img/"+i+".PNG"
    img_dos_double.src = "img/dos_de_carte.jpg"

    div_double.addEventListener('click', retournCard)

    div_double.appendChild(img_face_double)
    div_double.appendChild(img_dos_double)

    div_double.id = i
    div_double.style.order = Math.floor(Math.random() * 1000);


    // append child des div 
    section.appendChild(div)
    section.appendChild(div_double)
  }
}



//______________________________________________CLICK + ANIM_____________________________________________

cartes.forEach(
  // animcard n'a pas besoin de parenthèses car aucun argument 
  animcard => {
    animcard.addEventListener('click', retournCard);
});



function retournCard() {
  this.classList.toggle('anim'); // ajout de anim dans le nos de la class HTML pour charger l'anim css
  if(!wait){
    carte1 = this;
    wait = "click1" ;
  } else if(wait) {
    var carte2 = this;
    wait = null;
    compare(carte1,carte2)
  };


};

function compare(c1,c2){
  if(c1.id===c2.id){
    point = point + 10
    console.log(c1 + "Compares" )
    document.getElementById('point').innerHTML = 'Vos points : ' + point;
  }else{
    setTimeout(function(){
      point = point - 1
      c2.classList.toggle('anim')
      c1.classList.toggle('anim')
      document.getElementById('point').innerHTML = 'Vos points : ' + point;
    },1500);
  };
}


function calcul(envoi){
  pointhtml = document.getElementById('point').innerHTML = 'Vos points : ' + point;
  envoi = recep
  if(recep = 0){
    point + 10
    pointhtml
  }else{
    point - 1
    pointhtml
  }

}


function reset(){

  list = document.getElementById('list')

  li = document.createElement('li')
  li.innerHTML = point

  list.appendChild(li)

  section.innerHTML = ""
  point = 0
  document.getElementById('point').innerHTML = 'Vos points : ' + point;
  board()
}






//____________________________set la partie ____________________________________
board()

 