function enviarConvite() {
    const resposta = document.getElementById('resposta');
    resposta.textContent = 'EBAAAAAA!!!!';
}

function moverBotao() {
    const button = document.getElementById('nao');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width;
    const maxY = containerRect.height;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}


// Função para criar corações em posições e tamanhos aleatórios
function criarCorações() {
    const container = document.getElementById('hearts');

    // Criar 20 corações
    for (let i = 0; i < 20; i++) {
        const coracao = document.createElement('div');
        coracao.classList.add('coracao');

        // Definir posição aleatória
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;

        coracao.style.left = posX + 'px';
        coracao.style.top = posY + 'px';

        // Adicionar o SVG do coração
        coracao.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';

        container.appendChild(coracao);
    }
}

// Chamar a função para criar corações quando a página carregar
window.onload = criarCorações;

