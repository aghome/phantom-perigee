// 長野県空き家ポータル - 地域データ

const REGIONS = [
    {
        id: 'hokushin',
        name: '北信エリア',
        nameEn: 'Hokushin',
        description: '日本有数の豪雪地帯。スキーリゾートと温泉、そして雪国ならではの文化が息づく地域。',
        cities: ['長野市', '飯山市', '中野市', '須坂市', '千曲市', '信濃町', '飯綱町', '小布施町'],
        features: ['豪雪地帯', '温泉', 'スキーリゾート', '善光寺'],
        avgAltitude: 500,
        avgSnowfall: 200,
        image: 'https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=800',
        center: { lat: 36.75, lng: 138.2 }
    },
    {
        id: 'toshin',
        name: '東信エリア',
        nameEn: 'Toshin',
        description: '軽井沢を中心とした避暑地。日照時間が長く、比較的温暖な気候が特徴。',
        cities: ['上田市', '小諸市', '佐久市', '軽井沢町', '御代田町', '立科町'],
        features: ['避暑地', '長い日照時間', '浅間山', '真田の里'],
        avgAltitude: 700,
        avgSnowfall: 60,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        center: { lat: 36.35, lng: 138.45 }
    },
    {
        id: 'chushin',
        name: '中信エリア',
        nameEn: 'Chushin',
        description: '松本平と北アルプスの麓。城下町の文化と雄大な山岳景観が共存する地域。',
        cities: ['松本市', '塩尻市', '安曇野市', '大町市', '白馬村', '池田町'],
        features: ['北アルプス', '松本城', 'わさび', '白馬スキー'],
        avgAltitude: 650,
        avgSnowfall: 100,
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
        center: { lat: 36.25, lng: 137.95 }
    },
    {
        id: 'suwa',
        name: '諏訪エリア',
        nameEn: 'Suwa',
        description: '諏訪湖を中心とした高原地帯。精密機械産業と諏訪大社の信仰文化が特徴。',
        cities: ['諏訪市', '茅野市', '岡谷市', '下諏訪町', '富士見町', '原村'],
        features: ['諏訪湖', '蓼科高原', '八ヶ岳', '温泉'],
        avgAltitude: 800,
        avgSnowfall: 70,
        image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800',
        center: { lat: 36.05, lng: 138.15 }
    },
    {
        id: 'kiso',
        name: '木曽エリア',
        nameEn: 'Kiso',
        description: '中山道の宿場町が連なる山深い地域。木曽檜と伝統的な町並みが魅力。',
        cities: ['木曽町', '上松町', '南木曽町', '木祖村', '王滝村', '大桑村'],
        features: ['中山道', '木曽檜', '御嶽山', '宿場町'],
        avgAltitude: 900,
        avgSnowfall: 130,
        image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800',
        center: { lat: 35.85, lng: 137.7 }
    },
    {
        id: 'nanshin',
        name: '南信エリア',
        nameEn: 'Nanshin',
        description: '伊那谷に広がる温暖な地域。南アルプスと中央アルプスに挟まれた独自の文化圏。',
        cities: ['伊那市', '駒ヶ根市', '飯田市', '阿南町', '喬木村', '阿智村'],
        features: ['南アルプス', '中央アルプス', '果樹栽培', '独自の食文化'],
        avgAltitude: 600,
        avgSnowfall: 40,
        image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800',
        center: { lat: 35.75, lng: 137.95 }
    }
];

// 全市町村リスト
const ALL_CITIES = [
    '長野市', '松本市', '上田市', '飯田市', '諏訪市', '須坂市', '小諸市', '伊那市',
    '駒ヶ根市', '中野市', '大町市', '飯山市', '茅野市', '塩尻市', '佐久市', '千曲市',
    '東御市', '安曇野市', '白馬村', '軽井沢町', '御代田町', '木曽町', '信濃町', '小布施町',
    '大桑村', '阿智村'
].sort();

// 地域からエリアを取得
function getRegionByCity(cityName) {
    return REGIONS.find(region => region.cities.includes(cityName));
}

// エリアIDから地域を取得
function getRegionById(regionId) {
    return REGIONS.find(region => region.id === regionId);
}

// エリア内の物件数を取得
function getPropertyCountByRegion(regionId) {
    const region = getRegionById(regionId);
    if (!region) return 0;

    return PROPERTIES.filter(property =>
        region.cities.includes(property.location.city)
    ).length;
}

// Export
window.REGIONS = REGIONS;
window.ALL_CITIES = ALL_CITIES;
window.getRegionByCity = getRegionByCity;
window.getRegionById = getRegionById;
window.getPropertyCountByRegion = getPropertyCountByRegion;
