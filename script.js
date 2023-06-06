function transferirConteudo() {
    // Obter o conteúdo da div de origem
    var origemDiv = document.getElementById('origem');
    var conteudo = origemDiv.innerHTML;
    
    // Armazenar o conteúdo em localStorage
    localStorage.setItem('conteudoTransferido', conteudo);
    
    // Redirecionar para o destino.html
   
  }
  