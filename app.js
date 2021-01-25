const btns = document.querySelectorAll('.btn-modale');

const modaleSoiree = document.querySelector('.bloc-modal');

const fermetureModale = document.querySelector('.fermeture-modale');

const imgIndex = document.querySelector('.bloc-modal img');

btns .forEach(btn =>{
  btn.addEventListener('click', (e) =>{

    imgIndex.src = `ressources/ressources-soiree/img${e.target.getAttribute('data-index')}-soiree.jpg`;
    modaleSoiree.classList.add('active-modale');
  })
})

fermetureModale.addEventListener('click', ()=>{
  modaleSoiree.classList.remove('active-modale');
})

modaleSoiree.addEventListener('click', ()=>{
  modaleSoiree.classList.remove('active-modale');
})

