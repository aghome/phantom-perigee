// 長野県空き家ポータル - 実際の空き家バンク物件データ
// データ出典: 長野市空き家バンク、楽園信州空き家バンク
// 最終更新: 2026.01

const PROPERTIES = [
    {
        id: '411047',
        title: '戸隠の上楠川（かみくすがわ）沿いの古民家',
        location: {
            city: '長野市',
            district: '戸隠',
            address: '長野市戸隠270',
            lat: 36.7206511,
            lng: 138.0662547
        },
        price: 1500000,
        priceType: 'sale',
        priceDisplay: '150万円',
        building: {
            year: 1960, // 推定
            structure: '木造',
            floorArea: 61.48,
            landArea: 411.47,
            layout: '5K',
            floors: 2
        },
        status: {
            vacancy: 'longterm',
            repair: 'major'
        },
        environment: {
            altitude: 1050,
            avgTemperature: 9.2,
            snowfall: 180,
            sunshineHours: 1750,
            nearbyNature: ['山', '川', '森林']
        },
        wellbeing: {
            natureConnection: 95,
            viewValue: 88,
            physicalWellbeing: 82,
            mentalWellbeing: 96,
            lifeConvenience: 45
        },
        tags: ['山が近い', '古民家', '静寂', '補修必要'],
        images: [
            'https://nagano-akiyabank.jp/img/bukken/9001/411047-MkMrTIkmcN.jpg',
            'https://nagano-akiyabank.jp/img/bukken/9001/411047-7668IHXeWV.jpg',
            'https://nagano-akiyabank.jp/img/bukken/9001/411047-alOz62OuSN.jpg'
        ],
        source: {
            name: '長野市空き家バンク',
            url: 'https://nagano-akiyabank.jp/bukken/411047/',
            id: '411047'
        },
        story: {
            history: '戸隠の上楠川（かみくすがわ）沿いの小さな集落に建つ物件。空き家期間が長く大規模な改修が必要ですが、その分、自分好みに再生する余地があります。',
            culture: '戸隠は古くから修験道の聖地として知られ、荘厳な杉並木や戸隠神社が有名。冬は厳しい寒さですが、その分春の訪れの喜びは格別です。',
            ideas: ['古民家カフェ', 'アトリエ', '隠れ家']
        }
    },
    {
        id: '367741',
        title: '長野市大岡の築33年の別荘風住宅',
        location: {
            city: '長野市',
            district: '大岡',
            address: '長野市大岡中牧275-83',
            lat: 36.4849876,
            lng: 138.0332759
        },
        price: 2200000,
        priceType: 'sale',
        priceDisplay: '220万円',
        building: {
            year: 1991, // 築33年
            structure: '木造',
            floorArea: 82.8,
            landArea: 797.0,
            layout: '3LDK',
            floors: 2
        },
        status: {
            vacancy: 'short',
            repair: 'minor'
        },
        environment: {
            altitude: 800,
            avgTemperature: 10.5,
            snowfall: 80,
            sunshineHours: 2100,
            nearbyNature: ['北アルプス眺望', '棚田']
        },
        wellbeing: {
            natureConnection: 94,
            viewValue: 98,
            physicalWellbeing: 90,
            mentalWellbeing: 95,
            lifeConvenience: 55
        },
        tags: ['別荘風', '北アルプス眺望', '避暑地', '状態良好'],
        images: [
            'https://nagano-akiyabank.jp/img/bukken/9001/367741-ASZadJhUjW.jpg',
            'https://nagano-akiyabank.jp/img/bukken/9001/367741-K4o09I6E2h.jpg',
            'https://nagano-akiyabank.jp/img/bukken/9001/367741-2yv44k390O.jpg'
        ],
        source: {
            name: '長野市空き家バンク',
            url: 'https://nagano-akiyabank.jp/bukken/367741/',
            id: '367741'
        },
        story: {
            history: '長野市大岡地区、聖山の麓に位置する別荘風の住宅。築33年で比較的新しく、夏の涼しさは格別です。',
            culture: '大岡地区は北アルプスの展望や美しい棚田で知られる地域。「日本の原風景」とも言える景観が広がっています。',
            ideas: ['週末移住', 'ワーケーション拠点', '創作活動']
        }
    },
    {
        id: '418879',
        title: '戸隠南部 追通地区ののどかな古民家',
        location: {
            city: '長野市',
            district: '戸隠',
            address: '長野市戸隠栃原8737',
            lat: 36.67487,
            lng: 138.0550636
        },
        price: 2500000,
        priceType: 'sale',
        priceDisplay: '250万円',
        building: {
            year: 1950, // 推定
            structure: '木造',
            floorArea: 125.95,
            landArea: 419.52,
            layout: '4K',
            floors: 2
        },
        status: {
            vacancy: 'medium',
            repair: 'minor'
        },
        environment: {
            altitude: 900,
            avgTemperature: 9.8,
            snowfall: 150,
            sunshineHours: 1800,
            nearbyNature: ['山', '川']
        },
        wellbeing: {
            natureConnection: 92,
            viewValue: 85,
            physicalWellbeing: 88,
            mentalWellbeing: 90,
            lifeConvenience: 60
        },
        tags: ['家庭菜園', '山が見える', '静かな環境', '農的暮らし'],
        images: [
            'https://nagano-akiyabank.jp/img/bukken/9001/418879-6O1FPlpz47.jpg',
            'https://nagano-akiyabank.jp/img/bukken/9001/418879-L6fJb5qN6V.jpg',
            'https://nagano-akiyabank.jp/img/bukken/9001/418879-4L896j1d9O.jpg'
        ],
        source: {
            name: '長野市空き家バンク',
            url: 'https://nagano-akiyabank.jp/bukken/418879/',
            id: '418879'
        },
        story: {
            history: '戸隠南部を流れる裾花川流域の追通（おっかよう）地区に建つ古民家。山に囲まれたのどかな環境です。',
            culture: '静かな山村の生活が残る地域。家庭菜園や畑を楽しむことができ、土と共に生きる暮らしが実現できます。',
            ideas: ['自給自足', 'ファミリー移住', '田舎暮らし']
        }
    },
    {
        id: 'REAL004',
        title: '飯山市静間 RC造マンション',
        location: {
            city: '飯山市',
            district: '静間',
            address: '飯山市大字静間',
            lat: 36.8403,
            lng: 138.3565
        },
        price: 30000,
        priceType: 'rent',
        priceDisplay: '賃料 3万円/月',
        building: {
            year: 1994,
            structure: 'RC造 5階建',
            floorArea: 55.0, // 推定
            landArea: 0,
            layout: '3DK',
            floors: 5
        },
        status: {
            vacancy: 'unused',
            repair: 'ready'
        },
        environment: {
            altitude: 350,
            avgTemperature: 11.5,
            snowfall: 200,
            sunshineHours: 1600,
            nearbyNature: ['山', '雪景色']
        },
        wellbeing: {
            natureConnection: 75,
            viewValue: 80,
            physicalWellbeing: 85,
            mentalWellbeing: 78,
            lifeConvenience: 85
        },
        tags: ['マンション', 'RC造', '利便性良好', '雪国'],
        images: [
            'https://rakuen-akiya.jp/img/bukken/9013/436031-lmtibVJ54k.jpg',
            'https://rakuen-akiya.jp/img/bukken/9013/436031-tRyMESgIIM.jpg',
            'https://rakuen-akiya.jp/img/bukken/9013/436031-jWSWaVEWSU.jpg',
            'https://rakuen-akiya.jp/img/bukken/9013/436031-fZIO3I9wtl.jpg'
        ],
        source: {
            name: '楽園信州空き家バンク',
            url: 'https://rakuen-akiya.jp/bukken/436031/',
            id: '436031'
        },
        story: {
            history: '飯山市のRC造5階建てマンションの2階部分。雪国飯山ですが、マンションなら除雪の手間も少なく安心です。',
            culture: '飯山市は「雪国の小京都」と呼ばれ、寺社が多く残る風情ある街。冬はスキー、夏は千曲川でのアクティビティが楽しめます。',
            ideas: ['雪国暮らし体験', 'ワーケーション', '定住拠点']
        }
    },
    {
        id: 'REAL005',
        title: '大桑村須原 旧中山道沿いの古民家',
        location: {
            city: '大桑村',
            district: '須原',
            address: '木曽郡大桑村大字須原',
            lat: 35.6975,
            lng: 137.6947
        },
        price: 300000,
        priceType: 'sale',
        priceDisplay: '30万円',
        building: {
            year: 1943,
            structure: '木造',
            floorArea: 100.82,
            landArea: 136.6,
            layout: '6DK',
            floors: 2
        },
        status: {
            vacancy: 'longterm',
            repair: 'major'
        },
        environment: {
            altitude: 580,
            avgTemperature: 12.0,
            snowfall: 30,
            sunshineHours: 1900,
            nearbyNature: ['川', '歴史的景観']
        },
        wellbeing: {
            natureConnection: 85,
            viewValue: 90,
            physicalWellbeing: 75,
            mentalWellbeing: 88,
            lifeConvenience: 65
        },
        tags: ['古民家', '中山道', '格安', 'DIY向け'],
        images: [
            'https://rakuen-akiya.jp/img/bukken/9057/417832-p2TOnq8GnD.jpg',
            'https://rakuen-akiya.jp/img/bukken/9057/417832-SqGxNNyT3J.jpg',
            'https://rakuen-akiya.jp/img/bukken/9057/417832-nnzl56mFWE.jpg',
            'https://rakuen-akiya.jp/img/bukken/9057/417832-872fUvP2W3.jpg'
        ],
        source: {
            name: '楽園信州空き家バンク',
            url: 'https://rakuen-akiya.jp/bukken/417832/',
            id: '417832'
        },
        story: {
            history: '旧中山道の須原宿と野尻宿の間にある古民家。築80年を超え、歴史の息吹を感じさせます。30万円という価格はDIYで再生したい方に魅力的です。',
            culture: '須原は水舟の里として知られ、街道沿いに美しい水舟が点在しています。往時の旅人の賑わいに思いを馳せながら暮らすことができます。',
            ideas: ['古民家再生プロジェクト', 'ゲストハウス', '歴史体験施設']
        }
    }
];

// -----------------------------------------------------------------------------
// Helper Methods (Keep existing)
// -----------------------------------------------------------------------------

function formatPrice(price, type) {
    if (type === 'rent') {
        return `賃料 ${(price / 10000).toFixed(1)}万円/月`;
    }
    if (price >= 100000000) {
        return `${(price / 100000000).toFixed(1)}億円`;
    } else if (price >= 10000) {
        return `${(price / 10000).toFixed(0)}万円`;
    }
    return `${price.toLocaleString()}円`;
}

function getVacancyLabel(value) {
    const labels = {
        'short': '空き期間 短',
        'longterm': '空き期間 長',
        'unused': '未入居',
        'medium': '空き期間 中'
    };
    return labels[value] || value;
}

function getRepairLabel(value) {
    const labels = {
        'ready': '即入居可',
        'minor': '多少の補修要',
        'major': '大規模修繕要'
    };
    return labels[value] || value;
}

function calculateWellbeingScore(wellbeing) {
    const scores = Object.values(wellbeing);
    const average = scores.reduce((a, b) => a + b, 0) / scores.length;
    return Math.round(average * 10) / 10;
}

function getAllTags() {
    const tags = new Set();
    PROPERTIES.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
}

function filterProperties(filters) {
    return PROPERTIES.filter(p => {
        if (filters.city && p.location.city !== filters.city) return false;
        if (filters.minPrice && p.price < filters.minPrice) return false;
        if (filters.maxPrice && p.price > filters.maxPrice) return false;
        if (filters.nature && !p.environment.nearbyNature.includes(filters.nature)) return false;
        return true;
    });
}

function getPropertyById(id) {
    // Determine if id is string or potentially number, though properties use strings/numbers mixed in original?
    // My new ones are strings '411047'. The mock ones were 'REAL004' (string) or maybe numbers in previous versions?
    // In the file I read, they are all strings e.g. '411047' or 'REAL004'.
    return PROPERTIES.find(p => p.id === String(id));
}

function sortProperties(properties, sortKey) {
    const sorted = [...properties];
    switch (sortKey) {
        case 'price-asc':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return sorted.sort((a, b) => b.price - a.price);
        case 'score-desc':
        case 'wellbeing-desc':
            return sorted.sort((a, b) => calculateWellbeingScore(b.wellbeing) - calculateWellbeingScore(a.wellbeing));
        case 'altitude-desc':
            return sorted.sort((a, b) => b.environment.altitude - a.environment.altitude);
        case 'newest':
        default:
            return sorted;
    }
}
