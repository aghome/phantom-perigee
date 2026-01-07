// 長野県空き家ポータル - WellbeingChart Component

function createWellbeingChart(containerId, wellbeingData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const chartData = getChartData(wellbeingData);
    const canvas = document.createElement('canvas');
    canvas.id = `${containerId}-canvas`;
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: chartData.map(d => d.category),
            datasets: [{
                label: 'ウェルビーイングスコア',
                data: chartData.map(d => d.value),
                backgroundColor: 'rgba(26, 77, 46, 0.2)',
                borderColor: 'rgba(26, 77, 46, 1)',
                borderWidth: 2,
                pointBackgroundColor: chartData.map(d => d.color),
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    min: 0,
                    ticks: {
                        stepSize: 20,
                        font: {
                            size: 11
                        },
                        backdropColor: 'transparent'
                    },
                    pointLabels: {
                        font: {
                            size: 12,
                            family: "'Noto Sans JP', sans-serif"
                        },
                        color: '#374151'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: '#111827',
                    bodyColor: '#4b5563',
                    borderColor: '#e5e7eb',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function (context) {
                            return `スコア: ${context.raw}点`;
                        }
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// Create wellbeing legend
function createWellbeingLegend(containerId, wellbeingData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    Object.entries(WELLBEING_CATEGORIES).forEach(([key, category]) => {
        const score = wellbeingData[key];
        const evaluation = getScoreLabel(score);

        const item = document.createElement('div');
        item.className = 'wellbeing-legend-item';
        item.innerHTML = `
            <span class="wellbeing-legend-dot" style="background-color: ${category.color}"></span>
            <span>${category.name}: <strong>${score}</strong>点</span>
        `;
        container.appendChild(item);
    });
}

// Create wellbeing summary card
function createWellbeingSummary(wellbeingData) {
    const score = calculateWellbeingScore(wellbeingData);
    const assessment = getOverallAssessment(score);
    const analysis = analyzeWellbeing(wellbeingData);

    return `
        <div class="wellbeing-summary">
            <div class="wellbeing-score-main" style="border-color: ${assessment.color}">
                <div class="wellbeing-score-value" style="color: ${assessment.color}">${score}</div>
                <div class="wellbeing-score-label">${assessment.title}</div>
            </div>
            <p class="wellbeing-assessment">${assessment.description}</p>
            <div class="wellbeing-analysis">
                <div class="wellbeing-strengths">
                    <h4><i data-lucide="trending-up"></i> 強み</h4>
                    ${analysis.strengths.map(s => `
                        <div class="analysis-item">
                            <span class="analysis-category">${s.category}</span>
                            <span class="analysis-score">${s.score}点</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Export
window.createWellbeingChart = createWellbeingChart;
window.createWellbeingLegend = createWellbeingLegend;
window.createWellbeingSummary = createWellbeingSummary;
