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
