// 長野県空き家ポータル - ウェルビーイング指標

const WELLBEING_CATEGORIES = {
    natureConnection: {
        name: '自然との接続性',
        nameEn: 'Nature Connection',
        description: '周辺の自然環境への近さと質を評価します。',
        color: '#1a4d2e',
        icon: 'trees',
        indicators: [
            { name: '周辺自然密度', description: '徒歩圏内の森林・緑地面積' },
            { name: '徒歩圏の自然要素', description: '山・川・湖・森林へのアクセス' },
            { name: '四季の変化体感度', description: '季節の移ろいを感じられる環境か' }
        ]
    },
    viewValue: {
        name: '眺望・空間価値',
        nameEn: 'View Value',
        description: '景観の美しさと空間の開放感を評価します。',
        color: '#4a6fa5',
        icon: 'mountain',
        indicators: [
            { name: '山岳眺望', description: '山々を望める度合い' },
            { name: '空の広がり', description: '空が広く見える開放感' },
            { name: '夜間光害の少なさ', description: '星空が見える暗さ' }
        ]
    },
    physicalWellbeing: {
        name: '身体的ウェルビーイング',
        nameEn: 'Physical Wellbeing',
        description: '健康的な暮らしをサポートする環境を評価します。',
        color: '#e07b53',
        icon: 'heart-pulse',
        indicators: [
            { name: '空気質', description: '大気汚染の少なさ' },
            { name: '騒音レベル', description: '静かな環境か' },
            { name: '標高による運動負荷適性', description: '散歩・ハイキングの環境' }
        ]
    },
    mentalWellbeing: {
        name: '心理的ウェルビーイング',
        nameEn: 'Mental Wellbeing',
        description: '心の安らぎと精神的な豊かさを評価します。',
        color: '#87ceeb',
        icon: 'brain',
        indicators: [
            { name: '静けさ', description: '喧騒から離れた環境' },
            { name: '人口密度', description: '過密でないゆとりのある空間' },
            { name: '自然音指数', description: '鳥のさえずり、川のせせらぎなど' }
        ]
    },
    lifeConvenience: {
        name: '生活利便性',
        nameEn: 'Life Convenience',
        description: '日常生活に必要な施設へのアクセスを評価します。',
        color: '#8b7355',
        icon: 'store',
        indicators: [
            { name: '医療機関アクセス', description: '病院・診療所への距離' },
            { name: '食料調達', description: 'スーパー・直売所への距離' },
            { name: '交通アクセス', description: '公共交通・高速道路ICへの距離' }
        ]
    }
};

// スコアの評価ラベル
function getScoreLabel(score) {
    if (score >= 90) return { label: '非常に優れている', class: 'excellent' };
    if (score >= 80) return { label: '優れている', class: 'good' };
    if (score >= 70) return { label: '良好', class: 'fair' };
    if (score >= 60) return { label: '普通', class: 'average' };
    return { label: '改善の余地あり', class: 'below' };
}

// 総合スコアからの評価
function getOverallAssessment(score) {
    if (score >= 85) {
        return {
            title: 'ウェルビーイング最適地',
            description: '自然環境と生活環境のバランスが非常に優れた物件です。心身ともに健康的な暮らしが期待できます。',
            color: '#1a4d2e'
        };
    }
    if (score >= 75) {
        return {
            title: 'ウェルビーイング推奨地',
            description: '豊かな自然環境の中で、質の高い暮らしを送ることができる物件です。',
            color: '#4a6fa5'
        };
    }
    if (score >= 65) {
        return {
            title: 'バランスの取れた環境',
            description: '自然と利便性のバランスが取れた、暮らしやすい環境の物件です。',
            color: '#8b7355'
        };
    }
    return {
        title: '都市近接型',
        description: '利便性を重視した立地の物件です。自然環境は限られますが、生活しやすい環境です。',
        color: '#6b7280'
    };
}

// レーダーチャート用のデータ形成
function getChartData(wellbeing) {
    return Object.keys(WELLBEING_CATEGORIES).map(key => ({
        category: WELLBEING_CATEGORIES[key].name,
        value: wellbeing[key],
        fullMark: 100,
        color: WELLBEING_CATEGORIES[key].color
    }));
}

// 強み・弱みの分析
function analyzeWellbeing(wellbeing) {
    const entries = Object.entries(wellbeing);
    const sorted = entries.sort((a, b) => b[1] - a[1]);

    return {
        strengths: sorted.slice(0, 2).map(([key, value]) => ({
            category: WELLBEING_CATEGORIES[key].name,
            score: value,
            description: WELLBEING_CATEGORIES[key].description
        })),
        improvements: sorted.slice(-2).map(([key, value]) => ({
            category: WELLBEING_CATEGORIES[key].name,
            score: value,
            description: WELLBEING_CATEGORIES[key].description
        }))
    };
}

// Export
window.WELLBEING_CATEGORIES = WELLBEING_CATEGORIES;
window.getScoreLabel = getScoreLabel;
window.getOverallAssessment = getOverallAssessment;
window.getChartData = getChartData;
window.analyzeWellbeing = analyzeWellbeing;
