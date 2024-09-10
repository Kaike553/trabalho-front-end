const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual das seguintes práticas contribui mais para a redução de resíduos?",
        alternativas: [           
            {
                texto: "Reciclar materiais corretamente.",
                afirmacao: "Reciclar materiais corretamente é fundamental para reduzir a quantidade de resíduos que vão parar em aterros, além de promover a reutilização de recursos naturais."
            },
            {
                texto:  "jogar lixo em aterros sanitários.",
                afirmacao: "Jogar lixo em aterros sanitários, embora seja uma forma de descarte, não contribui para a redução de resíduos e pode gerar impactos negativos a longo prazo."
            }
        ]
    },
  {
        enunciado: "Qual é a forma mais eficiente de economizar energia em casa?",
        alternativas: [           
            {
                texto: "Desligar aparelhos eletrônicos quando não estão em uso.",
                afirmacao: "Desligar aparelhos eletrônicos quando não estão em uso é uma prática simples que ajuda a economizar energia e reduzir a pegada de carbono"
            },
            {
                texto:  " Manter todos os aparelhos ligados para evitar o desgaste de ligar e desligar.",
                afirmacao: "Manter todos os aparelhos ligados resulta em desperdício de energia, contrariando as práticas de consumo consciente e sustentável."
            }
        ]
    },
  {
        enunciado: "Qual dessas atitudes ajuda a preservar a biodiversidade?",
        alternativas: [           
            {
                texto: "Comprar produtos de empresas que respeitam o meio ambiente.",
                afirmacao: "Comprar produtos de empresas que adotam práticas sustentáveis ajuda a preservar a biodiversidade, incentivando o consumo consciente e a proteção dos ecossistemas."
            },
            {
                texto:  "Utilizar pesticidas sem controle nas plantações..",
                afirmacao: "O uso indiscriminado de pesticidas pode contaminar o solo, a água e prejudicar a biodiversidade local, sendo uma prática prejudicial ao meio ambiente."
            }
        ]
    },
  ]
    // adicione acima as pergundas substituindo as originais
    let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Suas ações mudam o mundo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent  = "";
}

mostraPergunta();