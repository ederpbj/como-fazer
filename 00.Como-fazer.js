//Caminho
//D:\dev\projetos\react-devPleno\como-fazer

//Atalho para formatar
shift+alt+F

//Cria pasta
mkdir como-fazer

//ir para pasta
cd como-fazer

//gerar projeto
npm init

//abrir no code
code .

//gerar projeto.
npm install express

//Obs: para enviar para outra maquina, 
//inclui no envio package.json e package-lock.json, 
//não será enviado o node_modules
//ao abrir projeto em outra máquina damos o comando:
//para instalar todas as dependências do package.json
npm install
ou 
yarn

//************Usando git*****************
git init

//checar verão
git --version

//checar se esta logado
git config --list

//para sair
q

//Confirgurar
git config --global user.name "Eder Pires"

git config --global user.email "ederpbj@yahoo.com.br"

//criar redme
type nul > README.rdoc

//status se foi enviado
git status

//enviar
git add .

//primeiro commit
git commit -m "primeiro commit"

//enviando para web
git remote add origin https://github.com/ederpbj/como-fazer.git

//finalizar envio
git push -u origin master

//Se quiser continuar fazendo alterações e as enviando para o GitHub, você precisará utilizar os três seguintes comandos:
//******>
git add .

git commit -m "menssagem"

git push origin master
//<*****

//criar o gitignore
touch .gitignore

// ignora os arquivos com extensões 
.gitignore
// ignora quaisquer diretórios chamados "metadata"
.metadata/
.recommenders/

//Interface gráfica padrão
gitk

//******************************************
//AULA 02 INICIANDO PROJETO
//Criar index.js
//rodar
node index.js

//Ajuda a manipular html
npm install ejs

//criar banco de dados firebase
https://como-fazer-fullstak.firebaseio.com/
https://como-fazer-fullstak.firebaseio.com/teste.json

//instalar axios
npm install axios

yarn add axios
yarn add express
yarn add ejs

//instalar
npm install body-parser

/* standby
<%= JSON.stringify(categorias)%>
<% categorias.forEach(categoria => { %>
<%= categoria.categoria %> <a href="/categorias/excluir/<%= categoria.id %>">Excluir</a> <br />
<% }) %>
<!--Exibe como string -->
<!--JSON.stringify(categorias) -->
<% Object.keys(categorias).forEach(function (key){ %>
    <% console.log(categorias[key]); %>
<% }); %>

<% Object.keys(categorias).forEach(categoria => { %>
    <%= categoria.categoria %> <a href="/categorias/excluir/<%= categoria.id %>">Excluir</a> <br />
<% }); %> 

//Quase deu certo
<% Object.keys(categorias).forEach(function (key){ %>
    <% categorias[key].categoria  %> <a href="/categorias/excluir/<%= categorias[key].categoria.key %>">Excluir</a> <br />
    <% console.log(categorias[key].categoria)%>
     <h1>(categorias[key].categoria) </h1>
<% }); %>
*/

//site Bootstrap
//https://getbootstrap.com/docs/4.1/getting-started/introduction/
/*Bootstrap template inicial 
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
</html>

 */

 //instalar node moon 
 //automatiza a reinicialização do servidor

 //Preparando banco de dados para subir aplicação

 {
  "rules": {
    ".read": false,
    ".write": false
  }
}



