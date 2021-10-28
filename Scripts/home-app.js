function listaDinamica(){

    // Ela armazena qual quer coisa que digitar no campo de pesquisa
    let texto = document.getElementById('texto').value;

    // variavel que vai armazenar todos os valores do datalist
    let lista = document.getElementById('historico');

    //variavel adicional do tipo boolean
    let adicionar = true;

    //Ela vai ser responsavel por criar elementos
    let opt = document.createElement('option');

    //percorrendo todo o conteudo da nossa lista historico
    for(i = 0; i<lista.options.length; i++){

        /*Comparação pra que sempre que digitar algo que não existe na minha lista da barra de pesquisa
        ele vai ser adicionado ao novo datalist
        */
       //se ja existir, a minha variavel adicionar ela da false
        if(texto == lista.options[i].value){
            adicionar = false;
        }
       //se não existir ele adiciona, e a variavel adiconar ela continua como valor true
       //chamo minha variavel opt porque ela esta responsavel por criar novos tipos de opções
       //o seu valor corresponde ao texto(a variavel que representa o que eu acabei de digitar no campo de pesquisa)
       if(adicionar == true){
           opt.value = texto;
           lista.appendChild(opt);
       }
    }
}

//Bloqueia todo tipo de caracter especial
document.getElementById("texto").onkeypress = function(e) {
    let chr = String.fromCharCode(e.which);
    if ("-1234567890ABCEDFGHIJKLMNOPQRSTUVXWYZ abcdefghijklmnopqrstuvxwyzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ".indexOf(chr) < 0)
      return false;
  };
