describe("Form-Test", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });
  it("verifica o titulo da aplicação", () => {
    cy.title().should("be.equal", "Form Test");
  });

  it("preenche os campos obrigatórios e envie o formulário", () => {
    const longText =
      "Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste,";

    cy.get("#firstName").type("Leonardo");
    cy.get("#lastName").type("Baestero");
    cy.get("#email").type("leonardobaestero@gmail.com");
    cy.get("#open-text-area").type(longText, { delay: 0 });
    cy.contains("button", "Enviar").click();

    cy.get(".success").should("be.visible");
  });

  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    cy.get("#firstName").type("Leonardo");
    cy.get("#lastName").type("Baestero");
    cy.get("#email").type("leonardobaestero");
    cy.get("#open-text-area").type("ok");
    cy.contains("button", "Enviar").click();

    cy.get(".error").should("be.visible");
  });

  it("campo telefone continua vazio quando preenchido com valor não numérico", () => {
    cy.get("#phone").type("abc").should("have.value", "");
  });

  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", () => {
    cy.get("#firstName").type("Leonardo");
    cy.get("#lastName").type("Baestero");
    cy.get("#email").type("leonardobaestero@gmail.com");
    cy.get("#open-text-area").type("ok");
    cy.get("#phone-checkbox").check();
    cy.contains("button", "Enviar").click();

    cy.get(".error").should("be.visible");
  });

  it("preenche e limpa os campos nome, sobrenome, email e telefone", () => {
    cy.get("#firstName")
      .type("Leonardo")
      .should("have.value", "Leonardo")
      .clear()
      .should("have.value", "");
    cy.get("#lastName")
      .type("Baestero")
      .should("have.value", "Baestero")
      .clear()
      .should("have.value", "");
    cy.get("#email")
      .type("leonardobaestero@gmail.com")
      .should("have.value", "leonardobaestero@gmail.com")
      .clear()
      .should("have.value", "");
    cy.get("#phone")
      .type("11933059787")
      .should("have.value", "11933059787")
      .clear()
      .should("have.value", "");
  });

  it("Envia um formulário com sucesso usando um comando customizado", () => {
    cy.fillMandatoryFieldsAndSubmit();
    cy.get(".success").should("be.visible");
  });

  it("Seleciona um produto (Youtube) por seu texto", () => {
    cy.get("#product").select("YouTube").should("have.value", "youtube");
  });
  it("Seleciona um produto (Mentoria) por seu valor", () => {
    cy.get("#product").select("mentoria").should("have.value", "mentoria");
  });
  it("Seleciona um produto (Blog) pelo seu índice", () => {
    cy.get("#product").select(1).should("have.value", "blog");
  });

  it('Marca o tipo de atendimento o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should("have.value", "feedback");
  });

  it("Marca cada tipo de atendimento", () => {
    cy.get('input[type="radio"]')
      .should("have.length", 3)
      .each(($radio) => {
        cy.wrap($radio).check();
        cy.wrap($radio).should("be.checked");
      });
  });

  it("marca ambos checkboxes, depois desmarca o ultimo e verifica", () => {
    cy.get('input[type="checkbox"]')
      .check()
      .last()
      .uncheck()
      .should("not.be.checked");

    cy.get('input[type="checkbox"]').first().should("be.checked");
  });

  it("Seleciona um arquivo da pasta fixtures", () => {
    cy.get('input[type="file"]')
      .should("not.have.value")
      .selectFile("cypress/fixtures/example.json")
      .should(($input) => {
        expect($input[0].files[0].name).to.equal("example.json");
      });
  });

  it("seleciona um arquivo simulando um drag-and-drop", () => {
    cy.get('input[type="file"]') // simulando que estamos arrastando um arquivo
      .should("not.have.value")
      .selectFile("cypress/fixtures/example.json", { action: "drag-drop" })
      .should(($input) => {
        expect($input[0].files[0].name).to.equal("example.json");
      });
  });

  it("Seleciona um arquivo utilizando uma fixture para a qual foi dada um alias", () => {
    cy.fixture("example.json").as("sampleFile"); // sem passar o caminho relativo
    cy.get('input[type="file"]')
      .selectFile("@sampleFile") // sem passar o caminho relativo
      .should(($input) => {
        expect($input[0].files[0].name).to.equal("example.json");
      });
  });

  it("verifica que a politica de privacidade abra em outra aba sem necessidade de um click", () => {
    cy.get("#privacy a").should("have.attr", "target", "_blank");
  });

  it("acessa a politica removendo o target e clicando no link", () => {
    cy.get("#privacy a")
      .should("have.attr", "target", "_blank")
      .invoke("removeAttr", "target")
      .click();

    cy.contains("Política de privacidade").should("be.visible");
  });
});
