import { default as _Chart } from 'chart.js/auto';

export class Chart {
  private element: HTMLElement;
  private chartCanvas: HTMLCanvasElement;

  constructor() {
    this.element = document.createElement('section');
    this.element.classList.add('charts');
    this.element.innerHTML = `
      <h2>Аналитические Графики</h2>
      <canvas id="myChart" width="400" height="100"></canvas>
    `;

    this.chartCanvas = this.element.querySelector(
      '#myChart'
    ) as HTMLCanvasElement;

    this.createChart();
  }

  createChart() {
    const ctx = this.chartCanvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const data = {
      labels: ['Янв', 'Фев', 'Март', 'Апр', 'Май'],
      datasets: [
        {
          label: 'Продажи',
          data: [12, 19, 3, 5, 2],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    new _Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  render(targetElement: HTMLElement) {
    targetElement.appendChild(this.element);
  }
}
