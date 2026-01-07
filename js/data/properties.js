// 長野県空き家ポータル - 実際の空き家バンク物件データ
// データ出典: 長野市空き家バンク、楽園信州空き家バンク
// 最終更新: 2026.01

const PROPERTIES = [
    {
        id: 'REAL001',
        title: 'No.472 戸隠の上楠川沿いの古民家',
        location: {
            city: '長野市',
            district: '戸隠',
            address: '長野市戸隠270',
            lat: 36.7206,
            lng: 138.0662
        },
        price: 1500000,
        priceType: 'sale',
        priceDisplay: '150万円',
        building: {
            year: 1960, // 推定
            structure: '木造 2階建',
            floorArea: 61.48, // 坪換算約18.6坪
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
        tags: ['山が近い', '古民家', '静寂を楽しむ', '補修必要'],
        images: [
            'https://nagano-akiyabank.jp/img/bukken/9001/411047-MkMrTIkmcN.jpg',
            'https://nagano-akiyabank.jp/img/bukken/9001/411047-7668IHXeWV.jpg',
            'https://nagano-akiyabank.jp/img/bukken/9001/411047-alOz62OuSN.jpg',
            'https://nagano-akiyabank.jp/img/bukken/9001/411047-FNtf9TnE9j.jpg'
        ],
        source: {
            name: '長野市空き家バンク',
            url: 'https://nagano-akiyabank.jp/bukken/411047/',
            id: '472'
        },
        story: {
            history: '戸隠の上楠川（かみくすがわ）沿いの小さな集落に建つ物件。空き家期間が長く大規模な改修が必要ですが、その分、自分好みに再生する余地があります。',
            culture: '戸隠は古くから修験道の聖地として知られ、荘厳な杉並木や戸隠神社が有名。冬は厳しい寒さですが、その分春の訪れの喜びは格別です。',
            ideas: ['古民家カフェ', 'アトリエ', '隠れ家']
        }
    },
    {
        id: 'REAL002',
        title: '阿智村浪合宮の原 高原の賃貸住宅',
        location: {
            city: '阿智村', // regions.jsで南信エリアに追加が必要
            district: '浪合',
            address: '下伊那郡阿智村浪合宮の原',
            lat: 35.3766,
            lng: 137.6944
        },
        price: 25000,
        priceType: 'rent',
        priceDisplay: '賃料 2.5万円/月',
        building: {
            year: 1980, // 推定
            structure: '木造',
            floorArea: 80.0, // 推定
            landArea: 300.0, // 推定
            layout: '4DK',
            floors: 1
        },
        status: {
            vacancy: 'unused',
            repair: 'minor'
        },
        environment: {
            altitude: 1100,
            avgTemperature: 9.5,
            snowfall: 100,
            sunshineHours: 2000,
            nearbyNature: ['高原', '星空']
        },
        wellbeing: {
            natureConnection: 98,
            viewValue: 95,
            physicalWellbeing: 90,
            mentalWellbeing: 94,
            lifeConvenience: 50
        },
        tags: ['賃貸', '高原', '日本一の星空', '避暑地'],
        images: [
            'https://rakuen-akiya.jp/img/bukken/9043/448229-yn6pr2G7Vk.jpg',
            'https://rakuen-akiya.jp/img/bukken/9043/448229-97g3nRPykS.jpg',
            'https://rakuen-akiya.jp/img/bukken/9043/448229-cwfiSV8mwj.jpg',
            'https://rakuen-akiya.jp/img/bukken/9043/448229-xIlS2NXNXH.jpg'
        ],
        source: {
            name: '楽園信州空き家バンク',
            url: 'https://rakuen-akiya.jp/bukken/448229/',
            id: '448229'
        },
        story: {
            history: '標高約1,100mの高原に位置する賃貸物件。夏はエアコンがいらないほど涼しく、快適に過ごせます。',
            culture: '阿智村は「日本一の星空」で有名な場所。夜には満天の星空が広がり、宇宙とのつながりを感じられる特別な場所です。',
            ideas: ['避暑地ステイ', '星空観賞拠点', 'お試し移住']
        }
    },
    {
        id: 'REAL003',
        title: '木曽町開田高原 御嶽山を望む店舗物件',
        location: {
            city: '木曽町',
            district: '開田高原',
            address: '木曽郡木曽町開田高原西野',
            lat: 35.9654,
            lng: 137.5760
        },
        price: 20000,
        priceType: 'rent',
        priceDisplay: '賃料 2万円/月',
        building: {
            year: 2003,
            structure: '軽量鉄骨造',
            floorArea: 135.53,
            landArea: 0, // 記載なし
            layout: '店舗',
            floors: 1
        },
        status: {
            vacancy: 'unused',
            repair: 'minor'
        },
        environment: {
            altitude: 1200,
            avgTemperature: 8.5,
            snowfall: 150,
            sunshineHours: 1800,
            nearbyNature: ['御嶽山', '高原']
        },
        wellbeing: {
            natureConnection: 92,
            viewValue: 98,
            physicalWellbeing: 85,
            mentalWellbeing: 92,
            lifeConvenience: 60
        },
        tags: ['貸店舗', '御嶽山眺望', '高原', '事業用'],
        images: [
            'https://rakuen-akiya.jp/img/bukken/9058/401164-Z647wz5hdT.png',
            'https://rakuen-akiya.jp/img/bukken/9058/401164-vBTpdgwGgV.jpg',
            'https://rakuen-akiya.jp/img/bukken/9058/401164-0KvNIpsBH2.jpg',
            'https://rakuen-akiya.jp/img/bukken/9058/401164-y2WpK0bcP8.jpg'
        ],
        source: {
            name: '楽園信州空き家バンク',
            url: 'https://rakuen-akiya.jp/bukken/401164/',
            id: '401164'
        },
        story: {
            history: '開田高原の豊かな自然の中に建つ店舗物件。庭からは雄大な御嶽山を望むことができます。',
            culture: '開田高原は木曽馬の里としても知られ、冷涼な気候を活かした蕎麦の栽培が盛ん。「開田そば」は地域の特産品です。',
            ideas: ['カフェ', 'ギャラリー', '高原野菜直売所']
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

function getStatusLabel(status) {
    const labels = {
        vacancy: {
            'short': '空き期間 短',
            'longterm': '空き期間 長',
            'unused': '未入居'
        },
        repair: {
            'ready': '即入居可',
            'minor': '多少の補修要',
            'major': '大規模修繕要'
        }
    };
    return labels[status.type]?.[status.value] || status.value;
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
