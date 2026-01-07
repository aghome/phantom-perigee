// 長野県空き家ポータル - Regions Page

function renderRegionsPage(regionId = null) {
    const main = document.getElementById('main-content');

    if (regionId) {
        renderRegionDetail(regionId);
        return;
    }

    main.innerHTML = `
        <div style="padding-top: calc(64px + var(--space-8));">
            <!-- Header -->
            <section style="background: linear-gradient(135deg, var(--color-mountain) 0%, var(--color-forest) 100%); color: var(--color-snow); padding: var(--space-16) 0;">
                <div class="container" style="text-align: center;">
                    <h1 style="font-family: var(--font-display); font-size: var(--text-4xl); font-weight: var(--font-bold); margin-bottom: var(--space-4);">
                        長野県エリア紹介
                    </h1>
                    <p style="font-size: var(--text-lg); opacity: 0.9; max-width: 600px; margin: 0 auto;">
                        北信から南信まで、それぞれの地域が持つ<br>
                        自然環境、文化、暮らしの特徴をご紹介します
                    </p>
                </div>
            </section>
            
            <!-- Regions Grid -->
            <section class="section">
                <div class="container">
                    <div class="regions-grid" style="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));">
                        ${REGIONS.map(region => `
                            <article class="region-card" onclick="navigateTo('regions', '${region.id}')" style="height: 400px;">
                                <img src="${region.image}" alt="${region.name}">
                                <div class="region-card-overlay" style="padding: var(--space-8);">
                                    <div style="margin-bottom: auto;">
                                        <div style="display: flex; flex-wrap: wrap; gap: var(--space-2); margin-bottom: var(--space-4);">
                                            ${region.features.slice(0, 3).map(f => `
                                                <span class="tag" style="background: rgba(255,255,255,0.2); color: white; border: 1px solid rgba(255,255,255,0.3);">
                                                    ${f}
                                                </span>
                                            `).join('')}
                                        </div>
                                    </div>
                                    <h3 class="region-card-name" style="font-size: var(--text-3xl);">${region.name}</h3>
                                    <p style="font-size: var(--text-sm); opacity: 0.9; margin-bottom: var(--space-2);">
                                        ${region.description}
                                    </p>
                                    <p class="region-card-count">
                                        <i data-lucide="home" style="display: inline; width: 16px; height: 16px;"></i>
                                        ${getPropertyCountByRegion(region.id)}件の物件
                                    </p>
                                </div>
                            </article>
                        `).join('')}
                    </div>
                </div>
            </section>
            
            <!-- Map Section -->
            <section class="section" style="background: var(--bg-secondary);">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">エリアマップ</h2>
                        <p class="section-subtitle">
                            各エリアの位置関係と物件分布をご確認ください
                        </p>
                    </div>
                    <div class="map-container" id="regions-map"></div>
                </div>
            </section>
        </div>
    `;

    lucide.createIcons();

    // Initialize map
    setTimeout(() => {
        initMap('regions-map');
        addPropertyMarkers(PROPERTIES);
    }, 100);
}

function renderRegionDetail(regionId) {
    const region = getRegionById(regionId);

    if (!region) {
        renderRegionsPage();
        return;
    }

    const regionProperties = PROPERTIES.filter(p => region.cities.includes(p.location.city));
    const main = document.getElementById('main-content');

    main.innerHTML = `
        <div style="padding-top: 64px;">
            <!-- Hero -->
            <section style="position: relative; height: 50vh; min-height: 400px; overflow: hidden;">
                <img src="${region.image}" alt="${region.name}" style="width: 100%; height: 100%; object-fit: cover;">
                <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.8) 100%); display: flex; align-items: flex-end; padding: var(--space-8);">
                    <div class="container">
                        <div style="color: white;">
                            <div style="display: flex; flex-wrap: wrap; gap: var(--space-2); margin-bottom: var(--space-4);">
                                ${region.features.map(f => `
                                    <span class="tag" style="background: rgba(255,255,255,0.2); color: white; border: 1px solid rgba(255,255,255,0.3);">
                                        ${f}
                                    </span>
                                `).join('')}
                            </div>
                            <h1 style="font-family: var(--font-display); font-size: var(--text-4xl); font-weight: var(--font-bold); margin-bottom: var(--space-4);">
                                ${region.name}
                            </h1>
                            <p style="font-size: var(--text-lg); opacity: 0.9; max-width: 600px;">
                                ${region.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <div class="container">
                <!-- Stats -->
                <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-4); margin: calc(var(--space-8) * -1) 0 var(--space-8); position: relative; z-index: 10;">
                    <div class="detail-section" style="text-align: center; margin: 0;">
                        <div style="font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-primary);">
                            ${regionProperties.length}
                        </div>
                        <div style="font-size: var(--text-sm); color: var(--text-secondary);">物件数</div>
                    </div>
                    <div class="detail-section" style="text-align: center; margin: 0;">
                        <div style="font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-primary);">
                            ${region.avgAltitude}m
                        </div>
                        <div style="font-size: var(--text-sm); color: var(--text-secondary);">平均標高</div>
                    </div>
                    <div class="detail-section" style="text-align: center; margin: 0;">
                        <div style="font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-primary);">
                            ${region.avgSnowfall}cm
                        </div>
                        <div style="font-size: var(--text-sm); color: var(--text-secondary);">平均降雪量</div>
                    </div>
                    <div class="detail-section" style="text-align: center; margin: 0;">
                        <div style="font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-primary);">
                            ${region.cities.length}
                        </div>
                        <div style="font-size: var(--text-sm); color: var(--text-secondary);">市町村数</div>
                    </div>
                </section>
                
                <!-- Cities -->
                <section class="section" style="padding-top: 0;">
                    <h2 class="section-title" style="text-align: left; margin-bottom: var(--space-6);">
                        対象市町村
                    </h2>
                    <div style="display: flex; flex-wrap: wrap; gap: var(--space-2);">
                        ${region.cities.map(city => `
                            <span style="padding: var(--space-2) var(--space-4); background: var(--color-gray-100); border-radius: var(--radius-lg); font-size: var(--text-sm);">
                                ${city}
                            </span>
                        `).join('')}
                    </div>
                </section>
                
                <!-- Properties -->
                <section class="section" style="padding-top: 0;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-6);">
                        <h2 class="section-title" style="margin-bottom: 0;">
                            ${region.name}の物件
                        </h2>
                        <span style="color: var(--text-secondary);">${regionProperties.length}件</span>
                    </div>
                    
                    ${regionProperties.length > 0 ? `
                        <div id="region-properties"></div>
                    ` : `
                        <div class="empty-state">
                            <i data-lucide="home"></i>
                            <h3 class="empty-state-title">現在、このエリアに掲載物件はありません</h3>
                            <p>他のエリアをご確認ください</p>
                        </div>
                    `}
                </section>
                
                <!-- Map -->
                <section class="section" style="padding-top: 0;">
                    <h2 class="section-title" style="text-align: left; margin-bottom: var(--space-6);">
                        エリアマップ
                    </h2>
                    <div class="map-container" id="region-detail-map"></div>
                </section>
                
                <!-- Back -->
                <div style="margin-bottom: var(--space-8);">
                    <button class="btn btn-outline" onclick="navigateTo('regions')">
                        <i data-lucide="arrow-left"></i>
                        エリア一覧に戻る
                    </button>
                </div>
            </div>
        </div>
    `;

    lucide.createIcons();

    // Render properties
    if (regionProperties.length > 0) {
        const container = document.getElementById('region-properties');
        renderPropertyGrid(container, regionProperties);
    }

    // Initialize map
    setTimeout(() => {
        initMap('region-detail-map', {
            center: [region.center.lat, region.center.lng],
            zoom: 9
        });
        addPropertyMarkers(regionProperties);
    }, 100);
}

// Export
window.renderRegionsPage = renderRegionsPage;
