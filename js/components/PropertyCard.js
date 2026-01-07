// 長野県空き家ポータル - PropertyCard Component

function createPropertyCard(property, onClick) {
    const wellbeingScore = calculateWellbeingScore(property.wellbeing);
    const card = document.createElement('article');
    card.className = 'property-card';
    card.setAttribute('data-property-id', property.id);

    const tagIcons = {
        '山岳眺望': 'mountain',
        '静寂': 'volume-x',
        '星空': 'star',
        '里山文化': 'home',
        '雪と共に生きる': 'snowflake',
        'アウトドア': 'compass',
        '湖畔': 'waves',
        '温泉近く': 'flame',
        '温泉付き': 'flame',
        '森林浴': 'trees',
        '避暑地': 'sun',
        '文化の香り': 'book-open',
        '田園風景': 'wheat',
        '北アルプス眺望': 'mountain-snow',
        '大きな敷地': 'maximize',
        '伝統建築': 'landmark',
        '中山道': 'map',
        '高原': 'cloud',
        '星空が主役': 'moon',
        '城下町': 'castle',
        '歴史的建造物': 'scroll',
        '歴史地区': 'scroll',
        '利便性良好': 'map-pin',
        '広い敷地': 'maximize',
        '街並み眺望': 'building',
        'アクセス良好': 'car',
        '文化都市': 'palette',
        '外国人避暑地': 'globe',
        '静寂を楽しむ': 'volume-x',
        '果樹園付き': 'apple',
        '南アルプス眺望': 'mountain',
        '日照良好': 'sun',
        '山が近い': 'mountain',
        '山が見える': 'mountain',
        '古民家': 'home',
        '別荘風': 'sun',
        '夏涼しい': 'snowflake',
        '家庭菜園・畑付き': 'wheat',
        '建築条件なし': 'hammer',
        '解体更地渡し': 'hammer',
        '大型住宅': 'building',
        '多用途対応': 'layout-grid',
        '芝生の庭': 'trees',
        '手ごろなサイズ': 'home',
        '収納豊富': 'box',
        '農地山林付': 'trees',
        '大きな古民家': 'home',
        '安曇野': 'mountain-snow',
        '築浅': 'sparkles',
        '即入居可': 'check-circle',
        '田舎暮らし': 'wheat',
        '犀川沿い': 'waves'
    };

    const getTagClass = (tag) => {
        if (tag.includes('山') || tag.includes('森') || tag.includes('里山') || tag.includes('古民家')) return 'tag-nature';
        if (tag.includes('眺望') || tag.includes('高原') || tag.includes('別荘')) return 'tag-view';
        if (tag.includes('静') || tag.includes('温泉')) return 'tag-quiet';
        if (tag.includes('雪') || tag.includes('涼')) return 'tag-snow';
        if (tag.includes('星') || tag.includes('築浅')) return 'tag-star';
        return 'tag-nature';
    };

    // Fallback image if property image fails to load
    const fallbackImage = 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800';
    const propertyImage = property.images && property.images[0] ? property.images[0] : fallbackImage;

    card.innerHTML = `
        <div class="property-card-image">
            <img src="${propertyImage}" alt="${property.title}" loading="lazy" onerror="this.src='${fallbackImage}'">
            <div class="property-card-badges">
                ${property.status.repair === 'ready' ? '<span class="tag tag-nature">即入居可</span>' : ''}
            </div>
            <div class="property-card-score">
                <i data-lucide="sparkles"></i>
                <span>${wellbeingScore}</span>
            </div>
        </div>
        <div class="property-card-body">
            <div class="property-card-location">
                <i data-lucide="map-pin"></i>
                <span>${property.location.city} ${property.location.district}</span>
            </div>
            <h3 class="property-card-title">${property.title}</h3>
            <div class="property-card-meta">
                <span class="property-card-meta-item">
                    <i data-lucide="mountain"></i>
                    ${property.environment.altitude}m
                </span>
                <span class="property-card-meta-item">
                    <i data-lucide="ruler"></i>
                    ${property.building.floorArea}㎡
                </span>
                <span class="property-card-meta-item">
                    <i data-lucide="layout-grid"></i>
                    ${property.building.layout}
                </span>
            </div>
            <div class="property-card-footer">
                <div class="property-card-price">
                    ${formatPrice(property.price, property.priceType)}
                </div>
                <div class="property-card-tags">
                    ${property.tags.slice(0, 2).map(tag => `
                        <span class="tag ${getTagClass(tag)}">
                            <i data-lucide="${tagIcons[tag] || 'tag'}"></i>
                            ${tag}
                        </span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    // Add click handler
    card.addEventListener('click', () => {
        if (onClick) {
            onClick(property);
        } else {
            navigateTo('detail', property.id);
        }
    });

    return card;
}

// Render property grid
function renderPropertyGrid(container, properties, limit = null) {
    const grid = document.createElement('div');
    grid.className = 'property-grid stagger-animation';

    const displayProperties = limit ? properties.slice(0, limit) : properties;

    displayProperties.forEach(property => {
        const card = createPropertyCard(property);
        grid.appendChild(card);
    });

    container.appendChild(grid);

    // Initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Export
window.createPropertyCard = createPropertyCard;
window.renderPropertyGrid = renderPropertyGrid;
