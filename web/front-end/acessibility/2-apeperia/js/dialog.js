// Variáveis,
var conteudoForaDialog = document.querySelector('#conteudoForaDialog')
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');

btnAbreDialog.style.display = 'block';
var video =  document.querySelector('video') 



// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  dialog.classList.add('dialogNewsletter--aberto');
  document.querySelector('.emailNewsletter').focus();
  conteudoForaDialog.inert = true;
  video.removeAttribute('controls')
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');  
  conteudoForaDialog.inert = false
  btnAbreDialog.focus();   
  video.setAttribute('controls', true)
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);
dialogOverlay.addEventListener('click', fechandoDialog())

document.addEventListener('keyup', function(event){
  if(event.keycode === 27){
    fechandoDialog()
  }  
})