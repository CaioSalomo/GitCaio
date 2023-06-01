const elemento = document.querySelector('[data-botao="menu"]')

elemento.addEventListener('click', (evento)=>{
    mostraMenu(evento.target.parentNode);
  })
function mostraMenu(controle){
  const lista= controle.querySelector('[data-botao = "lista"]');
  if (lista.style.display == 'none') {
    lista.style.display = 'block';
  }else{
    lista.style.display ='none';
  }
}

const imagens = document.querySelectorAll('[data-imagem]');

function atualizarImagem(imagem) {
  const dataImagem = imagem.getAttribute("data-imagem");
  const larguraTela = window.innerWidth;

  if (larguraTela < 760) {
    switch (dataImagem) {
      case "banner":
        imagem.src = "./Assets/Tema-Boreal/Mobile/Imagens/1 - Banner - Homepage.png";
        imagem.alt = "Banner(Tablet)";
        break;
      case "homestart":
        imagem.src = './Assets/Tema-Boreal/Mobile/Imagens/1 - Homepage1.png';
        imagem.alt = "HomePage(Tablet))";
        break;
      case "homeend":
        imagem.src = "./Assets/Tema-Boreal/Mobile/Imagens/1 - Homepage2.png";
        imagem.alt = "Homepage2(Tablet)";
        break;
    }
  } else if (larguraTela<1400) {
    switch (dataImagem) {
      case "banner":
        imagem.src = "./Assets/Tema-Boreal/Tablet/Imagens/1 - Banner- Homepage.png";
        imagem.alt = "Banner(Tablet)";
        break;
      case "homestart":
        imagem.src = './Assets/Tema-Boreal/Tablet/Imagens/1 - Homepage1.png';
        imagem.alt = "HomePage(Tablet)";
        break;
      case "homeend":
        imagem.src = "./Assets/Tema-Boreal/Tablet/Imagens/1 - Homepage2.png";
        imagem.alt = "Homepage2(Tablet)";
        break;
    }
  } else if (larguraTela>1400) {
    switch (dataImagem) {
      case "banner":
        imagem.src = "./Assets/Tema-Boreal/Desktop/Imagens/1 - Banner - homepage.png";
        imagem.alt = "Banner(Desktop)";
        break;
      case "homestart":
        imagem.src = './Assets/Tema-Boreal/Desktop/Imagens/1 - Imagem - homepage1.png';
        imagem.alt = "HomePage(Desktop)";
        break;
      case "homeend":
        imagem.src = "./Assets/Tema-Boreal/Desktop/Imagens/1 - Imagem - homepage2.png";
        imagem.alt = "Homepage2(Desktop)";
        break;
    }
  }
}


function atualizarImagens() {
  imagens.forEach(function (imagem) {
    atualizarImagem(imagem);
  });
}

// Chama a função inicialmente
atualizarImagens();

// Adiciona um listener para redimensionamento da janela
window.addEventListener("resize", atualizarImagens);
