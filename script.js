// Banco de dados do Quiz (Perguntas e Alternativas)
const questoes = [
    {
        pergunta: "Qual é o principal objetivo de uma horta em formato de mandala?",
        alternativas: [
            "Estética visual voltada exclusivamente para o turismo urbano.",
            "Integrar cultivos diversificados em espiral para que as plantas se beneficiem mutuamente.",
            "Maximizar o uso de fertilizantes químicos industriais.",
            "Produzir uma única cultura em larga escala sem variação de espécies."
        ],
        correta: 1 // Índice da alternativa correta (começa em 0)
    },
    {
        pergunta: "O equilíbrio entre a produção (Agro forte) e o meio ambiente é alcançado principalmente através de qual prática?",
        alternativas: [
            "Monocultura intensiva com desmatamento controlado.",
            "Uso focado em poços artesianos sem controle de fluxo.",
            "Práticas agroecológicas, compostagem e preservação de recursos naturais.",
            "Substituição total da vegetação nativa por estufas plásticas."
        ],
        correta: 2
    },
    {
        pergunta: "Como a comercialização de excedentes da produção orgânica escolar ajuda a comunidade interna?",
        alternativas: [
            "Gera fundos revertidos para a compra de materiais pedagógicos e passeios de estudo.",
            "Serve para pagar salários extras aos professores da semana.",
            "Substitui todas as disciplinas tradicionais da base curricular nacional.",
            "É enviada como taxa de exportação para prefeituras vizinhas."
        ],
        correta: 0
    }
];

let indiceAtual = 0;
let pontuacao = 0;

// Elementos do DOM
const textoPergunta = document.getElementById("texto-pergunta");
const alternativasBox = document.getElementById("alternativas-box");
const resultadoBox = document.getElementById("resultado-box");
const perguntaBox = document.getElementById("pergunta-box");
const mensagemFinal = document.getElementById("mensagem-final");

function carregarPergunta() {
    // Limpar alternativas anteriores
    alternativasBox.innerHTML = "";
    
    if (indiceAtual < questoes.length) {
        // Exibir pergunta atual
        textoPergunta.innerText = `Pergunta ${indiceAtual + 1} de ${questoes.length}: ${questoes[indiceAtual].pergunta}`;
        
        // Gerar botões de resposta
        questoes[indiceAtual].alternativas.forEach((alternativa, index) => {
            const botao = document.createElement("button");
            botao.innerText = alternativa;
            botao.classList.add("btn-alternativa");
            botao.onclick = () => verificarResposta(index);
            alternativasBox.appendChild(botao);
        });
    } else {
        exibirResultado();
    }
}

function verificarResposta(indexSelecionado) {
    if (indexSelecionado === questoes[indiceAtual].correta) {
        pontuacao++;
    }
    indiceAtual++;
    carregarPergunta();
}

function exibirResultado() {
    perguntaBox.classList.add("hidden");
    resultadoBox.classList.remove("hidden");
    mensagemFinal.innerText = `Você acertou ${pontuacao} de ${questoes.length} perguntas sobre sustentabilidade no campo!`;
}

function reiniciarQuiz() {
    indiceAtual = 0;
    pontuacao = 0;
    resultadoBox.classList.add("hidden");
    perguntaBox.classList.remove("hidden");
    carregarPergunta();
}

// Inicializar o quiz ao carregar a página
window.onload = carregarPergunta;