let usuarios = [
    {"login": "bcf", "email": "bcf@gmail.com", "senha": "bcf"},
    {"login": "mamae", "email": "mamae@gmail.com", "senha": "abacaxi"},
    {"login": "papai", "email": "papai@gmail.com", "senha": "melancia"},
    {"login": "rogerio", "email": "rogerio@gmail.com", "senha": "rogerio123"},
];

function login() {
    let usuario = document.getElementsByName('nome')[0].value.toLowerCase();
    let senha = document.getElementsByName('senha')[0].value;
    let usuarioIncorreto = document.querySelector('#usuario-errado')

    let usernameInput = document.querySelector('#username-input')
    let usernameLabel = document.querySelector('#username-label')
    let usernameErrado = document.querySelector('#username-errado')

    let senhaInput = document.querySelector('#senha-input')
    let senhaLabel = document.querySelector('#senha-label')
    let senhaErrado = document.querySelector('#senha-errado')

    let simboloErrorSenha = document.querySelector('#error-senha')
    let simboloErrorUsername = document.querySelector('#error-username')
    let simboloErrorUsuario = document.querySelector('#error-usuario')

    for (let u in usuarios) {
        let us = usuarios[u];



        if (us.login === usuario && us.senha === senha) {
          window.location = "home-app.html";
          return true;
        }

        if (us.email === usuario && us.senha === senha) {
          window.location = "home-app.html";
          return true;
        }

                
        if (us.login !== usuario && us.senha === senha) {
          usernameInput.style.border='1px solid red'
          usernameLabel.style.color='red'

          usernameErrado.textContent = 'Usuario incorreto.'
          usernameErrado.style.color='red'
          usernameErrado.style.display = 'flex'
          usernameErrado.style.alignSelf = 'flex-start'
          usernameErrado.style.paddingTop = '5px'
          usernameErrado.style.paddingLeft = '5px'
          simboloErrorUsername.style.display ='flex'

          usuarioIncorreto.style.display = 'none'
          simboloErrorUsuario.style.display ='none'

          senhaErrado.style.display = 'none'
          simboloErrorSenha.style.display = 'none'
          senhaInput.style.border='1px solid #4F4F4F'
          senhaLabel.style.color='#4F4F4F'

          return false;
      }

      if (us.email !== usuario && us.senha === senha) {
        usernameInput.style.border='1px solid red'
        usernameLabel.style.color='red'

        usernameErrado.textContent = 'Usuario incorreto.'
        usernameErrado.style.color='red'
        usernameErrado.style.display = 'flex'
        usernameErrado.style.alignSelf = 'flex-start'
        usernameErrado.style.paddingTop = '5px'
        usernameErrado.style.paddingLeft = '5px'
        simboloErrorUsername.style.display ='flex'

        usuarioIncorreto.style.display = 'none'
        simboloErrorUsuario.style.display ='none'

        senhaErrado.style.display = 'none'
        simboloErrorSenha.style.display = 'none'
        senhaInput.style.border='1px solid #4F4F4F'
        senhaLabel.style.color='#4F4F4F'

        return false;
      }

      if (us.login === usuario && us.senha !== senha) {
        senhaInput.style.border='1px solid red'
        senhaLabel.style.color='red'

        senhaErrado.textContent = 'Senha errada.'
        senhaErrado.style.color='red'
        senhaErrado.style.display = 'flex'
        senhaErrado.style.alignSelf = 'flex-start'
        senhaErrado.style.paddingTop = '5px'
        senhaErrado.style.paddingLeft = '5px'
        simboloErrorSenha.style.display = 'flex'

        simboloErrorUsuario.style.display ='none'
        usuarioIncorreto.style.display = 'none'

        usernameErrado.style.display = 'none'
        simboloErrorUsername.style.display ='none'
        usernameInput.style.border='1px solid #4F4F4F'
        usernameLabel.style.color='#4F4F4F'

        return false;
      }

      if (us.email === usuario && us.senha !== senha) {
        senhaInput.style.border='1px solid red'
        senhaLabel.style.color='red'

        senhaErrado.textContent = 'Senha errada.'
        senhaErrado.style.color='red'
        senhaErrado.style.display = 'flex'
        senhaErrado.style.alignSelf = 'flex-start'
        senhaErrado.style.paddingTop = '5px'
        senhaErrado.style.paddingLeft = '5px'
        simboloErrorSenha.style.display = 'flex'

        simboloErrorUsuario.style.display ='none'
        usuarioIncorreto.style.display = 'none'

        usernameErrado.style.display = 'none'
        simboloErrorUsername.style.display ='none'
        usernameInput.style.border='1px solid #4F4F4F'
        usernameLabel.style.color='#4F4F4F'
        
        return false;
      }
    }
    usuarioIncorreto.textContent = 'Dados incorretos, tente novamente.'
    usuarioIncorreto.style.color='red'
    usuarioIncorreto.style.display='flex'
    simboloErrorUsuario.style.display ='flex'
    usuarioIncorreto.style.justifyContent='center'
    
    usernameErrado.style.display = 'none'
    usernameInput.style.border='1px solid #4F4F4F'
    usernameLabel.style.color='#4F4F4F'

    senhaErrado.style.display = 'none'
    simboloErrorSenha.style.display = 'none'
    simboloErrorUsername.style.display ='none'
    senhaInput.style.border='1px solid #4F4F4F'
    senhaLabel.style.color='#4F4F4F'

    return false;
}


// Limita a data do usuario na hora de cadastrar
calendario.max = new Date().toISOString().split("T")[0];

function cadastrar(){

    //Senha:
    let senhaLabel = document.querySelector('#senha-label')
    let senhaInput = document.querySelector('#senha-input')
    let senhaErrado = document.querySelector('#senha-errado')

    let senhaNovamentLabel = document.querySelector('#senha-novamente-label')
    let senhaNovamenteInput = document.querySelector('#senha-novamente-input')
    let senhaErradoNovamente = document.querySelector('#senha-errado-novamente')

    let simboloErrorSenha = document.querySelector('#error-senha')
    let simboloErrorSenhaNovamente = document.querySelector('#error-senha-novamente')

    //Pegando o valor da senha e atribuindo pra ela
    let senha = formuser.senha.value;
    
    // Senha repetida
    let senhaNovamente = formuser.senha_novamente.value;

    // Verificando se a senha é maior que 9 e se não possui nem um caracter
    if(senha ==="" || senha.length <= 8){
      senhaLabel.style.color='red'
      senhaInput.style.border = '1px solid red'
      senhaErrado.textContent = 'No minimo 9 caracteres'
      senhaErrado.style.color='red'
      senhaErrado.style.display = 'flex'
      simboloErrorSenha.style.display = 'flex'
      senhaErrado.style.alignSelf = 'flex-start'
      senhaErradoNovamente.style.paddingTop = '5px'
      senhaErradoNovamente.style.paddingleft = '5px'

      senhaErradoNovamente.style.display = 'none'
      simboloErrorSenhaNovamente.style.display = 'none'
      senhaNovamenteInput.style.border='1px solid #4F4F4F'
      senhaNovamentLabel.style.color='#4F4F4F'

      // Ele cria focos no campo caso entre nesse if
      formuser.senha.focus();
      return false;
    }

    //Senha novamente tem que ser obrigatorio
    if(senhaNovamente==="" || senhaNovamente.length <= 8){
      senhaNovamenteInput.style.border='1px solid red'
      senhaNovamentLabel.style.color='red'
      senhaErradoNovamente.style.display = 'flex'
      senhaErradoNovamente.style.alignSelf = 'flex-start'
      senhaErradoNovamente.style.color = 'red'
      senhaErradoNovamente.textContent = 'No minimo 9 caracteres'
      simboloErrorSenhaNovamente.style.display = 'flex'
      senhaErradoNovamente.style.paddingTop = '5px'
      senhaErradoNovamente.style.paddingleft = '5px'

      senhaErrado.style.display = 'none'
      simboloErrorSenha.style.display = 'none'
      senhaInput.style.border='1px solid #4F4F4F'
      senhaLabel.style.color='#4F4F4F'

      // Ele cria focos caso entre nesse if
      formuser.senha_novamente.focus();
      return false;
    }

    // Verificar se a primeira variavel senha é a mesma que a senha novamente
    if(senha !== senhaNovamente){
      senhaErrado.style.display = 'none'
      simboloErrorSenha.style.display = 'none'
      senhaInput.style.border='1px solid #4F4F4F'
      senhaLabel.style.color='#4F4F4F'

      senhaNovamenteInput.style.border='1px solid red'
      senhaNovamentLabel.style.color='red'
      senhaErradoNovamente.style.display = 'flex'
      senhaErradoNovamente.style.alignSelf = 'flex-start'
      senhaErradoNovamente.style.color = 'red'
      senhaErradoNovamente.textContent = 'As senhas estão diferentes'
      simboloErrorSenhaNovamente.style.display = 'flex'
      senhaErradoNovamente.style.paddingTop = '5px'
      senhaErradoNovamente.style.paddingleft = '5px'

      // Ele cria focos caso entre nesse if
      formuser.senha_novamente.focus();
      return false;
    }

    // Senhas iguais
    if(senha === senhaNovamente){
      senhaErrado.style.display = 'none'
      simboloErrorSenha.style.display = 'none'
      senhaInput.style.border='1px solid #4F4F4F'
      senhaLabel.style.color='#4F4F4F'

      senhaErradoNovamente.style.display = 'none'
      simboloErrorSenhaNovamente.style.display = 'none'
      senhaNovamenteInput.style.border='1px solid #4F4F4F'
      senhaNovamentLabel.style.color='#4F4F4F'
      return true;
  }

}

// Pra tela de login
function mostrarSenha(e) {
    let tipo = e.parentNode.querySelector("[name='senha']");
    if (tipo.type == "password") {
      tipo.type = "text";
      document.getElementById('olho-fechado').style.display = 'none';
      document.getElementById('olho-aberto').style.display = 'flex';
    } else {
      tipo.type = "password";
      document.getElementById('olho-aberto').style.display = 'none';
      document.getElementById('olho-fechado').style.display = 'flex';
    }

    tipo.type = tipo.type; //aplica o tipo que ficou no primeiro campo

  }

// Pra tela cadastrar
function mostrarSenhaNovamente(e) {
  let tipo = e.parentNode.querySelector("[name='senha_novamente']");
  if (tipo.type == "password") {
    tipo.type = "text";
    document.getElementById('olho-fechado-novamente').style.display = 'none';
    document.getElementById('olho-aberto-novamente').style.display = 'flex';
  } else {
    tipo.type = "password";
    document.getElementById('olho-aberto-novamente').style.display = 'none';
    document.getElementById('olho-fechado-novamente').style.display = 'flex';
  }

  tipo.type = tipo.type; //aplica o tipo que ficou no primeiro campo
}