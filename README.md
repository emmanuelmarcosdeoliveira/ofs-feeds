
<div align="center">

# OFS Feeds

![Badge React](https://img.shields.io/badge/React-20232A?style=plastic&logo=react&logoColor=61DAFB)
![Badge TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=plastic&logo=typescript&logoColor=white)
![Badge Vite](https://img.shields.io/badge/Vite-646CFF?style=plastic&logo=vite&logoColor=FFD62E)

## </div>

## 📋 Menu

- 🖼️ [Imagem do Projeto](#imagem-do-projeto)
- 📖 [Sobre](#sobre)
- 🛠️ [Tecnologias](#tecnologias)
- ⚙️ [Funcionalidades](#funcionalidades)
- 🗂️ [Arquitetura de Dados](#arquitetura-de-dados)
- 📁 [Estrutura do Projeto](#estrutura-do-projeto)
- 🚀 [Configuração](#configuração)
- 🗺️ [Rotas](#rotas)
- 👥 [Contributors](#contributors-or-owners)
- 🤝 [Contribuir](#contribute-to-the-projects-or-owner)
- 📬 [Contact](#contact)
- 📄 [License](#license)


<div align="center">

## Imagem do Projeto

<img  src="./public/thumb.png">
</div>

## Sobre

OFS Feeds é um projeto frontend desenvolvido em React + TypeScript, utilizando Vite para o ambiente de desenvolvimento moderno e rápido. O objetivo é simular um feed de publicações, semelhante a redes sociais, com foco em boas práticas de componentes, estilização com CSS Modules e manipulação de dados em memória.

| Item                | Detalhe                                  |
| ------------------- | ---------------------------------------- |
| Tipo de repositório | Monolito                                 |
| Estrutura           | Vite SPA standalone                      |

Desenvolvido por **Emmanuel Oliveira**.

## Tecnologias

| Tecnologia              | Versão    | Descrição                                 |
| ----------------------- | --------- | ----------------------------------------- |
| React                   | ^19.2.6   | Biblioteca principal de UI                |
| TypeScript              | ~6.0.2    | Tipagem estática                          |
| Vite                    | ^8.0.12   | Bundler e ambiente de desenvolvimento     |
| @phosphor-icons/react   | ^2.1.10   | Ícones para interface                     |
| date-fns                | ^4.4.0    | Manipulação de datas                      |
| @biomejs/biome          | 2.4.16    | Linter e formatter                        |

## Funcionalidades

- Visualização de posts simulados
- Componente de comentários
- Sidebar com informações do usuário
- Estilização com CSS Modules

## Arquitetura de Dados

Estrutura dos posts:

```ts
type PostType = {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: Array<{
    type: 'paragraph' | 'link';
    content: string;
    href?: string;
  }>;
  publishedAt: Date;
};
```

## Estrutura do Projeto

```
src/
  app.tsx
  main.tsx
  assets/
    svg/
  components/
    avatar/
    comment/
    core/
      container/
    header/
    post/
    sidebar/
  styles/
    index.css
  utils/
    posts.ts
public/
  thumb.png (adicione uma imagem de capa do projeto aqui)
```

## Configuração

1. Instale as dependências:
   ```sh
   pnpm install
   ```
2. Rode o projeto em modo desenvolvimento:
   ```sh
   pnpm dev
   ```
3. Acesse em [http://localhost:5173](http://localhost:5173)

## Rotas

SPA — apenas rota principal `/`.

## Contributors
`Pull requests são bem-vindos! Siga o padrão de código e abra uma issue para discutir mudanças.`

<img height="64px" src="https://res.cloudinary.com/delo0gvyb/image/upload/v1752287431/profile_mjvmdb.png">

<br>


[Emmanuel Oliveira](https://www.linkedin.com/in/oliveira-emmanuel/)


<br>

<small>

[developed by 💖Emmanuel Oliveira](https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit)

</small>

<br>

&copy; Todos os Direitos Reservados


## Contribute to the projects or Owner
  
Clique na seta abaixo e veja como você pode contribuir para o projeto


<details close>

<summary>
Como fazer uma contribuição ao Projeto ?
</summary>
 Familiarize-se com a documentação do projeto, que geralmente inclui guias de instalação.

 <br>

Explore o código do projeto para entender sua estrutura e funcionamento.

<br>

**Faça um Fork**

Crie uma cópia (fork) do repositório original em sua conta do GitHub.

<br> 

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">

<a href="https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo"></a>
  

**Clone o Repositório**
  
Isso criará uma cópia local do projeto, onde você poderá fazer suas modificações.

<img alt="Static Badge" src="https://img.shields.io/badge/-path?style=social&logo=git&label=GitHub%20Docs&color=%23000">

<a href="https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository"></a>
  
**Crie uma Nova Branch:**

  Crie uma nova branch para isolar suas alterações.

  <br>

Isso facilita a organização do seu trabalho e a criação de pull requests.

<br>  

**Faça as Alterações:**

  

Crie funcionalidades, mude estilos ou resolva `bugs` que iram contribuir para a melhoria do Projeto.

<br>

 **Crie um Pull Request:**
  
Inclua uma descrição clara das suas alterações e explique como elas resolvem o problema ou melhoram o projeto.<br>

Solicitação: Envie um pull request para o repositório original, solicitando que suas alterações sejam incorporadas ao projeto.

 <br>

  
**Revise e Responda a Feedback:**

  Colabore: Os mantenedores do projeto podem solicitar alterações ou fornecer feedback sobre o seu código.

  </details>

## Contact

[![Lindekin](https://img.shields.io/badge/--path?style=social&logo=Linkedin&logoColor=%230664C1&logoSize=auto&label=Linkedin&labelColor=%23fff&cacheSeconds=https%3A%2F%2Fwww.linkedin.com%2Fin%2Femmanuel-marcos-oliveira%2F)](https://www.linkedin.com/in/oliveira-emmanuel/)
[![WhatsApp](https://img.shields.io/badge/--path?style=social&logo=WhatsApp&logoColor=%231F3833&logoSize=auto&label=WhatsApp&color=%23fff&cacheSeconds=https%3A%2F%2Fwa.me%2F5511968336094)](https://wa.me/5511968336094)
<a href="mailto:ofs.dev.br@gmail.com"><img alt="Static Badge" src="https://img.shields.io/badge/--path?style=social&logo=Gmail&logoSize=auto&label=Gmail&cacheSeconds=--query&link=mailto%3Adev-oliveira%40outlook.com.br%22"> </a>  

<sub>😁Obrigado por chegar até aqui!<sub>

  
## License

![Static Badge](https://img.shields.io/badge/--path?style=plastic&logo=mit&logoSize=auto&label=license%20MIT&labelColor=%23555555&color=%2397CA00)<br>
Released in 2026 This project is under the **MIT license**<br>

<br> 
<div align="center">
<strong>⭐ Se este projeto foi útil para você, considere dar uma estrela!</strong> 
</div>


Caso julge importante acrescentar algo que faça uma pergunta
