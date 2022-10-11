# Boas vindas ao repositório do projeto TrybeTunes!

Projeto realizado no curso de Desenvolvimento Web da Trybe. Toda a estrutura do projeto foi fornecida pela Trybe.

Requisitos realizados nos arquivos src/components src/images src/pages src/app src/index.css


# Entregáveis

A proposta deste projeto foi a criação de um aplicativo de músicas, sendo possível fazer login, pesquisar por artista, listar os seus albuns e as músicas contidas nele, favoritar músicas, ver e editar o perfil da pessoa logada.
Neste projeto foi utilizado React.js usando state para gerenciamento do estado; BrowserRouter, Route, Switch do React Router, para realizar o mapeamento das rotas na URL, e o componente Link para navegar na aplicação. Além de consumir uma API pública de músicas.


# Requisitos do projeto
## 1. Crie as rotas necessárias para a aplicação



## 2. Crie um formulário para identificação
Dentro do componente `Login`, que é renderizado na rota `/`, crie um formulário para que a pessoa usuária se identifique com um nome.

  
## 3. Crie um componente de cabeçalho


## 4. Crie os links de navegação no cabeçalho

  

## 5. Crie o formulário para pesquisar artistas


## 6. Faça a requisição para pesquisar artistas


## 7. Crie a lista de músicas do álbum selecionado
Agora que está tudo pronto, você poderá exibir a lista de músicas do álbum selecionado. Crie a lista dentro do componente `Album`, que é renderizado na rota `/album/:id`.
  
  

## 8. Crie o mecanismo para adicionar músicas na lista de músicas favoritas
Você já consegue listar as músicas dos álbuns, nessa etapa você poderá marcar quais são as músicas que você mais gosta.

  


## 9. Faça a requisição para recuperar as músicas favoritas ao entrar na página do Álbum
Ao entrar na página com a lista de músicas de um álbum, na rota `/album/:id`, as músicas que já foram favoritadas anteriormente devem estar com o checkbox marcado.

 


## 10. Faça a requisição para recuperar as músicas favoritas e atualizar a lista após favoritar uma música
Após adicionar uma música na lista de favoritas usando a função `addSong` (requisito 8), faça uma requisição usando a função `getFavoriteSongs` para atualizar a lista de músicas favoritas.

  


## 11. Crie o mecanismo para remover músicas na lista de músicas favoritas
Depois de listar e favoritar as músicas de um álbum, você também deve poder remover uma música da lista de favoritas.

  

# Requisitos bônus

## 12. Crie a lista de músicas favoritas
Crie a lista dentro do componente `Favorites`, que é renderizado na rota `/favorites`.

  


## 13. Crie a exibição de perfil
Crie a exibição do perfil dentro do componente `Profile`, que é renderizado na rota `/profile`.

  

## 14. Crie o formulário de edição de perfil
Crie o formulário de edição de perfil dentro do componente `ProfileEdit`, que é renderizado na rota `/profile/edit`.
