# Testes Automatizados com Cypress para Formulário

Este projeto contém testes automatizados para a aplicação "Form Test" utilizando Cypress. O objetivo é garantir a funcionalidade e a correta operação do formulário em diferentes cenários.

## Índice

1. [Sobre](#sobre)
2. [Funcionalidades dos Testes](#funcionalidades-dos-testes)
3. [Instalação](#instalacao)
4. [Execução dos Testes](#execucao-dos-testes)
5. [Localização dos Testes](#localizacao-dos-testes)
6. [Contribuição](#contribuicao)
7. [Licença](#licenca)

## Sobre

O projeto "Form Test" é uma aplicação de exemplo que demonstra a validação e envio de formulários. Os testes automatizados foram desenvolvidos para garantir que todos os aspectos do formulário funcionem corretamente conforme esperado.

## Funcionalidades dos Testes

- **Verificação do Título**: Confirma se o título da aplicação é exibido corretamente.
- **Preenchimento e Envio**: Testa o preenchimento dos campos obrigatórios e o envio do formulário.
- **Validação de Erros**: Verifica se mensagens de erro são exibidas corretamente para entradas inválidas.
- **Limpeza de Campos**: Garante que os campos possam ser preenchidos e limpos adequadamente.
- **Seleção de Produtos**: Testa a seleção de produtos por texto, valor e índice.
- **Seleção de Atendimento**: Marca os tipos de atendimento por radio button.
- **Manipulação de Checkboxes**: Testa a marcação e desmarcação de checkboxes.
- **Upload de Arquivos**: Simula o upload de arquivos e verifica a seleção correta.
- **Política de Privacidade**: Verifica se o link da política de privacidade abre em uma nova aba.

## Instalação

### 1. Instalar o Node.js e npm

Antes de começar, é necessário ter o Node.js e npm instalados. Siga estas etapas para configurar o ambiente de desenvolvimento:

- **Windows/Mac/Linux:**
  - Visite a [página de downloads do Node.js](https://nodejs.org/).
  - Baixe e instale a versão recomendada (ou a versão LTS) que inclui o npm.
  - Inicie o npm:
    ```bash
    npm init --yes
    ```

### 2. Instalar o Cypress

Com o Node.js e npm configurados, instale o Cypress na versão 9.5.1:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd nome-do-repositorio
   ```
3. Instale as dependências do projeto, incluindo o Cypress na versão 9.5.1:
   ```bash
   npm install cypress@9.5.1 --save-dev
   ```

## Execução dos Testes

Para executar os testes automatizados com Cypress, utilize o seguinte comando:

```bash
npx cypress open
```

Isso abrirá a interface do Cypress, onde você poderá selecionar e executar os testes individualmente ou todos de uma vez.

## Localização dos Testes

Os testes automatizados estão localizados no diretório `cypress/integration`. Lá você encontrará os arquivos de teste que cobrem as funcionalidades descritas anteriormente.

## Contribuição

Se deseja contribuir para o projeto "Form Test - Testes Automatizados com Cypress", siga estas etapas:

1. **Fork o Repositório**: Faça um fork do repositório para sua própria conta do GitHub.
2. **Clone o Repositório**: Clone o repositório forkado para sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
3. **Crie uma Branch**: Crie uma nova branch para sua contribuição:
   ```bash
   git checkout -b minha-contribuicao
   ```
4. **Faça suas Alterações**: Implemente as alterações necessárias e adicione testes conforme apropriado.
5. **Commit e Push**: Faça commit das suas alterações e envie para o repositório forkado:
   ```bash
   git add .
   git commit -m "Descrição das minhas alterações"
   git push origin minha-contribuicao
   ```
6. **Abra um Pull Request**: Vá até o repositório original e abra um pull request para que suas alterações possam ser revisadas e, se aprovadas, integradas ao projeto.

Agradecemos suas contribuições para melhorar a qualidade dos testes automatizados!

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Esse README fornece todas as informações necessárias para configurar, executar e contribuir com os testes automatizados para o projeto "Form Test" utilizando Cypress.
