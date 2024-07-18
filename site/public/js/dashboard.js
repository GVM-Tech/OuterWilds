const ctx = document.getElementById('grafico');

let perguntas = ['Questão 1', 'Questão 2', 'Questão 3', 'Questão 4', 'Questão 5', 'Questão 6', 'Questão 7','Questão 8' ,'Questão 9' ,'Questão 10']
let acertos = [15, 7, 12, 9, 10, 3, 2, 3,4 ,1]

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: perguntas,
    datasets: [{
      label: 'Quantidade de acertos de acordo com cada questão:',
      data: acertos,
      borderWidth: 0
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});