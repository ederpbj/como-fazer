//Caminho
\dev\projetos\react-devPleno\

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

git commit -m "digite sua mensagem de commit aqui"

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