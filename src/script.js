const botoesComConteudo = document.querySelectorAll('.botao-conteudo');

botoesComConteudo.forEach((botaoComConteudo) => {
  const botao = botaoComConteudo.querySelector('button');
  const conteudo = botaoComConteudo.querySelector('.conteudo');
  const conteudoHeight = conteudo.scrollHeight + 'px';

  botao.addEventListener('click', () => {
    // Toggle (alternar) a exibição do conteúdo ajustando a altura máxima
    if (conteudo.style.maxHeight === '0px' || conteudo.style.maxHeight === '') {
      conteudo.style.maxHeight = conteudoHeight;
    } else {
      conteudo.style.maxHeight = '0px';
    }
  });
});

let galeriaAberta = false;
let janelaGaleria;

function abrirGaleria() {
  if (!galeriaAberta) {
    // Crie uma nova janela (popup) para a galeria
    janelaGaleria = window.open('', '_blank', 'width=800,height=600');
    // Defina o conteúdo HTML da galeria na nova janela
    janelaGaleria.document.body.innerHTML = `
      <h1>Galeria de Projetos</h1>
      <img src="imagens/pontoeletronico-inicio.png" alt="Projeto 1">
      <!-- Adicione mais imagens conforme necessário -->
      <button onclick="fecharGaleria()">Fechar</button>
    `;
    
    galeriaAberta = true;
  } else {
    // Se a galeria já estiver aberta, traga o foco para a janela existente
    janelaGaleria.focus();
  }
}

function fecharGaleria() {
  if (galeriaAberta) {
    // Feche a janela da galeria
    janelaGaleria.close();
    galeriaAberta = false;
  }
}