document.addEventListener('DOMContentLoaded', () => {
    // Animações GSAP para o botão explorar
    const exploreButton = document.getElementById('exploreButton');
    exploreButton.addEventListener('click', () => {
        gsap.to(window, { scrollTo: "#temas", duration: 2 });
    });

    // Animações de entrada das cards de temas
    gsap.from(".card", { opacity: 0, y: 50, stagger: 0.3, duration: 1 });

    // Animação das notícias
    gsap.from(".news-item", { opacity: 0, y: 50, stagger: 0.5, duration: 1 });

    // Animação do quiz
    const quizButton = document.getElementById('startQuizButton');
    quizButton.addEventListener('click', () => {
        alert("O quiz estará disponível em breve!");
    });

    // Exemplo de gráfico com Chart.js
    const ctx = document.createElement('canvas');
    document.querySelector('#temas').appendChild(ctx);
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Globalização', 'Geopolítica', 'Mudanças Climáticas'],
            datasets: [{
                label: 'Importância no Cenário Atual',
                data: [70, 85, 90],
                backgroundColor: 'rgba(41, 128, 185, 0.6)',
                borderColor: 'rgba(41, 128, 185, 1)',
                borderWidth: 1
            }]
        }
    });
});
