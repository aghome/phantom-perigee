// 長野県空き家ポータル - Property Detail Page

function renderPropertyDetailPage(propertyId) {
    const property = getPropertyById(propertyId);

    if (!property) {
        renderNotFoundPage();
        return;
    }

    const main = document.getElementById('main-content');
    const wellbeingScore = calculateWellbeingScore(property.wellbeing);
    const assessment = getOverallAssessment(wellbeingScore);
    const region = getRegionByCity(property.location.city);

    // Fallback image
    const fallbackImage = 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=1920';
    const heroImage = property.images && property.images[0] ? property.images[0] : fallbackImage;

    main.innerHTML = `
        <div class="detail-page">
            <!-- Hero -->
            <div class="detail-hero">
                <img src="${heroImage}" alt="${property.title}" onerror="this.src='${fallbackImage}'">
                <div class="detail-hero-overlay">
                    <div class="detail-hero-content">
                        <div class="detail-hero-location">
                            <i data-lucide="map-pin"></i>
                            ${property.location.city} ${property.location.district}
                        </div>
                        <h1 class="detail-hero-title">${property.title}</h1>
                        <div class="detail-hero-tags">
                            ${property.tags.map(tag => `
                                <span class="tag" style="background: rgba(255,255,255,0.2); color: white; border: 1px solid rgba(255,255,255,0.3);">
                                    ${tag}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Content -->
            <div class="detail-content">
                <div class="detail-grid">
                    <!-- Main Content -->
                    <div class="detail-main">
                        <!-- Basic Info -->
                        <div class="detail-section">
                            <h2 class="detail-section-title">
                                <i data-lucide="home"></i>
                                基本情報
                            </h2>
                            <div class="info-grid">
                                <div class="info-item">
                                    <span class="info-label">所在地</span>
                                    <span class="info-value">${property.location.address}</span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">築年数</span>
                                    <span class="info-value">${new Date().getFullYear() - property.building.year}年</span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">構造</span>
                                    <span class="info-value">${property.building.structure}</span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">延床面積</span>
                                    <span class="info-value">${property.building.floorArea}㎡</span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">土地面積</span>
                                    <span class="info-value">${property.building.landArea}㎡</span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">間取り</span>
                                    <span class="info-value">${property.building.layout}</span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">空き家状態</span>
                                    <span class="info-value">${getVacancyLabel(property.status.vacancy)}</span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">修繕状況</span>
                                    <span class="info-value">${getRepairLabel(property.status.repair)}</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Environment Info -->
                        <div class="detail-section">
                            <h2 class="detail-section-title">
                                <i data-lucide="mountain"></i>
                                環境・地理情報
                            </h2>
                            <div class="info-grid">
                                <div class="info-item">
                                    <span class="info-label">標高</span>
                                    <span class="info-value">${property.environment.altitude}m</span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">年間平均気温</span>
                                    <span class="info-value">${property.environment.avgTemperature}°C</span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">年間降雪量</span>
                                    <span class="info-value">${property.environment.snowfall}cm</span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">日照時間</span>
                                    <span class="info-value">${property.environment.sunshineHours}時間/年</span>
                                </div>
                                <div class="info-item">
                                    <span class="info-label">周辺自然</span>
                                    <span class="info-value">${property.environment.nearbyNature.join('・')}</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Wellbeing Chart -->
                        <div class="detail-section">
                            <h2 class="detail-section-title">
                                <i data-lucide="sparkles"></i>
                                ウェルビーイング評価
                            </h2>
                            <div class="wellbeing-chart-container">
                                <div style="text-align: center; margin-bottom: var(--space-6);">
                                    <div style="font-size: var(--text-5xl); font-weight: var(--font-bold); color: ${assessment.color};">
                                        ${wellbeingScore}
                                    </div>
                                    <div style="font-size: var(--text-lg); font-weight: var(--font-medium); color: var(--text-secondary);">
                                        ${assessment.title}
                                    </div>
                                    <p style="font-size: var(--text-sm); color: var(--text-secondary); max-width: 400px; margin: var(--space-2) auto 0;">
                                        ${assessment.description}
                                    </p>
                                </div>
                                <div class="wellbeing-chart" id="wellbeing-chart"></div>
                                <div class="wellbeing-legend" id="wellbeing-legend"></div>
                            </div>
                        </div>
                        
                        <!-- Story -->
                        <div class="detail-section">
                            <h2 class="detail-section-title">
                                <i data-lucide="book-open"></i>
                                この場所のストーリー
                            </h2>
                            <div class="story-content">
                                <h3 style="font-size: var(--text-lg); font-weight: var(--font-semibold); color: var(--text-primary); margin-bottom: var(--space-3);">
                                    物件の歴史
                                </h3>
                                <p>${property.story.history}</p>
                                
                                <h3 style="font-size: var(--text-lg); font-weight: var(--font-semibold); color: var(--text-primary); margin-bottom: var(--space-3); margin-top: var(--space-6);">
                                    地域の文化
                                </h3>
                                <p>${property.story.culture}</p>
                            </div>
                        </div>
                        
                        <!-- Ideas -->
                        <div class="detail-section">
                            <h2 class="detail-section-title">
                                <i data-lucide="lightbulb"></i>
                                活用アイデア
                            </h2>
                            <div style="display: flex; flex-wrap: wrap; gap: var(--space-3);">
                                ${property.story.ideas.map(idea => `
                                    <div style="padding: var(--space-4) var(--space-6); background: var(--color-gray-50); border-radius: var(--radius-xl); font-weight: var(--font-medium);">
                                        ${idea}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <!-- Map -->
                        <div class="detail-section">
                            <h2 class="detail-section-title">
                                <i data-lucide="map"></i>
                                所在地マップ
                            </h2>
                            <div class="map-container" id="detail-map" style="height: 400px;"></div>
                        </div>
                    </div>
                    
                    <!-- Sidebar -->
                    <div class="detail-sidebar">
                        <!-- Price Card -->
                        <div class="price-card">
                            <div class="price-label">
                                ${property.priceType === 'rent' ? '月額賃料' : '販売価格'}
                            </div>
                            <div class="price-value">
                                ${formatPrice(property.price, property.priceType)}
                            </div>
                            <button class="contact-btn" onclick="alert('お問い合わせフォームは準備中です')">
                                <i data-lucide="mail"></i>
                                お問い合わせ
                            </button>
                        </div>
                        
                        <!-- Quick Info -->
                        <div class="quick-info-card">
                            <div class="quick-info-list">
                                <div class="quick-info-item">
                                    <div class="quick-info-icon">
                                        <i data-lucide="sparkles"></i>
                                    </div>
                                    <div class="quick-info-text">
                                        <div class="quick-info-label">ウェルビーイングスコア</div>
                                        <div class="quick-info-value">${wellbeingScore}点</div>
                                    </div>
                                </div>
                                <div class="quick-info-item">
                                    <div class="quick-info-icon">
                                        <i data-lucide="mountain"></i>
                                    </div>
                                    <div class="quick-info-text">
                                        <div class="quick-info-label">標高</div>
                                        <div class="quick-info-value">${property.environment.altitude}m</div>
                                    </div>
                                </div>
                                <div class="quick-info-item">
                                    <div class="quick-info-icon">
                                        <i data-lucide="ruler"></i>
                                    </div>
                                    <div class="quick-info-text">
                                        <div class="quick-info-label">延床面積</div>
                                        <div class="quick-info-value">${property.building.floorArea}㎡</div>
                                    </div>
                                </div>
                                <div class="quick-info-item">
                                    <div class="quick-info-icon">
                                        <i data-lucide="layout-grid"></i>
                                    </div>
                                    <div class="quick-info-text">
                                        <div class="quick-info-label">間取り</div>
                                        <div class="quick-info-value">${property.building.layout}</div>
                                    </div>
                                </div>
                                <div class="quick-info-item">
                                    <div class="quick-info-icon">
                                        <i data-lucide="calendar"></i>
                                    </div>
                                    <div class="quick-info-text">
                                        <div class="quick-info-label">築年数</div>
                                        <div class="quick-info-value">${new Date().getFullYear() - property.building.year}年</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Region Info -->
                        ${region ? `
                        <div class="quick-info-card">
                            <h3 style="font-size: var(--text-base); font-weight: var(--font-semibold); margin-bottom: var(--space-4);">
                                エリア情報
                            </h3>
                            <p style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--space-4);">
                                ${region.description}
                            </p>
                            <div style="display: flex; flex-wrap: wrap; gap: var(--space-2);">
                                ${region.features.map(f => `
                                    <span class="tag tag-nature">${f}</span>
                                `).join('')}
                            </div>
                        </div>
                        ` : ''}
                        
                        <!-- Source Info -->
                        ${property.source ? `
                        <div class="quick-info-card" style="background: var(--color-gray-50); border: 1px dashed var(--color-gray-300);">
                            <h3 style="font-size: var(--text-sm); font-weight: var(--font-semibold); margin-bottom: var(--space-3); color: var(--text-secondary);">
                                <i data-lucide="external-link" style="width: 14px; height: 14px; display: inline;"></i>
                                データ出典
                            </h3>
                            <p style="font-size: var(--text-sm); color: var(--text-primary); margin-bottom: var(--space-3);">
                                ${property.source.name}
                            </p>
                            <a href="${property.source.url}" target="_blank" rel="noopener noreferrer" 
                               class="btn btn-outline" style="width: 100%; font-size: var(--text-sm);">
                                <i data-lucide="external-link"></i>
                                元サイトで確認
                            </a>
                            <p style="font-size: var(--text-xs); color: var(--text-muted); margin-top: var(--space-2);">
                                ※詳細情報・お問い合わせは元サイトをご確認ください
                            </p>
                        </div>
                        ` : ''}
                    </div>
                </div>
                
                <!-- Back button -->
                <div style="margin-top: var(--space-8);">
                    <button class="btn btn-outline" onclick="navigateTo('list')">
                        <i data-lucide="arrow-left"></i>
                        一覧に戻る
                    </button>
                </div>
            </div>
        </div>
    `;

    // Initialize icons
    lucide.createIcons();

    // Initialize wellbeing chart
    setTimeout(() => {
        createWellbeingChart('wellbeing-chart', property.wellbeing);
        createWellbeingLegend('wellbeing-legend', property.wellbeing);
    }, 100);

    // Initialize map
    setTimeout(() => {
        initMap('detail-map', {
            center: [property.location.lat, property.location.lng],
            zoom: 13
        });
        addPropertyMarkers([property]);
    }, 200);
}

function renderNotFoundPage() {
    const main = document.getElementById('main-content');
    main.innerHTML = `
        <div style="min-height: 60vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: var(--space-8);">
            <i data-lucide="search-x" style="width: 64px; height: 64px; color: var(--color-gray-300); margin-bottom: var(--space-4);"></i>
            <h1 style="font-size: var(--text-2xl); font-weight: var(--font-bold); margin-bottom: var(--space-2);">物件が見つかりませんでした</h1>
            <p style="color: var(--text-secondary); margin-bottom: var(--space-6);">指定された物件は存在しないか、削除された可能性があります。</p>
            <button class="btn btn-primary" onclick="navigateTo('list')">
                <i data-lucide="arrow-left"></i>
                一覧に戻る
            </button>
        </div>
    `;
    lucide.createIcons();
}

// Export
window.renderPropertyDetailPage = renderPropertyDetailPage;
window.renderNotFoundPage = renderNotFoundPage;
