// 長野県空き家ポータル - Home Page

function renderHomePage() {
    const main = document.getElementById('main-content');

    main.innerHTML = `
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-background">
                <img src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1920" alt="長野県の山々">
            </div>
            <div class="hero-overlay"></div>
            <div class="hero-content animate-fade-in">
                <div class="hero-badge">
                    <i data-lucide="sparkles"></i>
                    ウェルビーイングで選ぶ新しい住まい探し
                </div>
                <h1 class="hero-title">
                    長野の自然と暮らす<br>
                    空き家ポータル
                </h1>
                <p class="hero-subtitle">
                    自然・眺望・ウェルビーイング・文化背景という新たな軸で<br>
                    長野県の空き家価値を再定義します
                </p>
                <div class="hero-actions">
                    <button class="btn btn-primary btn-lg" onclick="navigateTo('list')">
                        <i data-lucide="search"></i>
                        物件を探す
                    </button>
                    <button class="btn btn-secondary btn-lg" onclick="navigateTo('about')">
                        <i data-lucide="info"></i>
                        ウェルビーイングとは
                    </button>
                </div>
            </div>
            <div class="hero-scroll">
                <span>スクロール</span>
                <i data-lucide="chevron-down"></i>
            </div>
        </section>

        <!-- Search Section -->
        <section class="section" style="background: var(--bg-secondary); padding-top: 0;">
            <div class="container">
                ${createSearchBar()}
            </div>
        </section>

        <!-- Map Section -->
        <section class="section map-section">
            <div class="container">
                <div class="section-header">
                    <div class="section-badge">
                        <i data-lucide="map"></i>
                        エリアマップ
                    </div>
                    <h2 class="section-title">長野県全域の空き家分布</h2>
                    <p class="section-subtitle">
                        マップ上のマーカーをクリックして物件情報をご確認ください
                    </p>
                </div>
                <div class="map-container" id="home-map"></div>
            </div>
        </section>

        <!-- Featured Properties Section -->
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <div class="section-badge">
                        <i data-lucide="star"></i>
                        おすすめ物件
                    </div>
                    <h2 class="section-title">ウェルビーイングスコアの高い物件</h2>
                    <p class="section-subtitle">
                        自然環境と暮らしやすさのバランスが取れた、厳選物件をご紹介
                    </p>
                </div>
                <div id="featured-properties"></div>
                <div style="text-align: center; margin-top: var(--space-10);">
                    <button class="btn btn-outline btn-lg" onclick="navigateTo('list')">
                        <i data-lucide="grid"></i>
                        すべての物件を見る
                    </button>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="section stats-section">
            <div class="container">
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-value">${PROPERTIES.length}</div>
                        <div class="stat-label">掲載物件数</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${REGIONS.length}</div>
                        <div class="stat-label">対象エリア</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">5</div>
                        <div class="stat-label">ウェルビーイング指標</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">100%</div>
                        <div class="stat-label">現地確認済み</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <div class="section-badge">
                        <i data-lucide="lightbulb"></i>
                        特徴
                    </div>
                    <h2 class="section-title">新しい不動産価値の基準</h2>
                    <p class="section-subtitle">
                        価格や間取りだけでなく、暮らしの質を可視化して物件を選べます
                    </p>
                </div>
                <div class="feature-grid">
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i data-lucide="trees"></i>
                        </div>
                        <h3 class="feature-title">自然との接続性</h3>
                        <p class="feature-description">
                            周辺の森林、川、山へのアクセスを数値化。四季を感じる暮らしを実現できるかを評価します。
                        </p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i data-lucide="mountain"></i>
                        </div>
                        <h3 class="feature-title">眺望・空間価値</h3>
                        <p class="feature-description">
                            窓から見える景色、空の広がり、星空の美しさ。視覚的な豊かさを評価します。
                        </p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i data-lucide="heart-pulse"></i>
                        </div>
                        <h3 class="feature-title">身体的ウェルビーイング</h3>
                        <p class="feature-description">
                            空気質、静けさ、標高。健康的な暮らしをサポートする環境要素を評価します。
                        </p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i data-lucide="brain"></i>
                        </div>
                        <h3 class="feature-title">心理的ウェルビーイング</h3>
                        <p class="feature-description">
                            静けさ、自然音、人口密度。心の安らぎを得られる環境かを評価します。
                        </p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i data-lucide="store"></i>
                        </div>
                        <h3 class="feature-title">生活利便性</h3>
                        <p class="feature-description">
                            医療機関、買い物、交通アクセス。日常生活に必要な施設との距離を評価します。
                        </p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i data-lucide="book-open"></i>
                        </div>
                        <h3 class="feature-title">地域文化</h3>
                        <p class="feature-description">
                            その土地の歴史、伝統、暮らしの知恵。文化的な背景と共に物件を紹介します。
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Regions Section -->
        <section class="section" style="background: var(--bg-secondary);">
            <div class="container">
                <div class="section-header">
                    <div class="section-badge">
                        <i data-lucide="map-pin"></i>
                        エリア紹介
                    </div>
                    <h2 class="section-title">長野県の地域を知る</h2>
                    <p class="section-subtitle">
                        北信から南信まで、それぞれの地域が持つ魅力をご紹介
                    </p>
                </div>
                <div class="regions-grid">
                    ${REGIONS.slice(0, 6).map(region => `
                        <div class="region-card" onclick="navigateTo('regions', '${region.id}')">
                            <img src="${region.image}" alt="${region.name}">
                            <div class="region-card-overlay">
                                <h3 class="region-card-name">${region.name}</h3>
                                <p class="region-card-count">${getPropertyCountByRegion(region.id)}件の物件</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="section" style="background: linear-gradient(135deg, var(--color-forest) 0%, var(--color-mountain) 100%); color: var(--color-snow);">
            <div class="container" style="text-align: center;">
                <h2 class="section-title" style="color: inherit;">あなたにぴったりの空き家を見つけよう</h2>
                <p class="section-subtitle" style="color: rgba(255,255,255,0.9);">
                    ウェルビーイングスコアで、本当に豊かな暮らしができる物件を探しましょう
                </p>
                <div style="margin-top: var(--space-8);">
                    <button class="btn btn-lg" style="background: white; color: var(--color-forest);" onclick="navigateTo('list')">
                        <i data-lucide="search"></i>
                        物件を探す
                    </button>
                </div>
            </div>
        </section>
    `;

    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize map
    setTimeout(() => {
        initMap('home-map');
        addPropertyMarkers(PROPERTIES);
    }, 100);

    // Render featured properties (Show top 3 latest/featured properties)
    const featuredContainer = document.getElementById('featured-properties');
    // Using the first 3 properties as they represent the "latest" real data we added
    const topProperties = PROPERTIES.slice(0, 3);
    renderPropertyGrid(featuredContainer, topProperties);
}

// Export
window.renderHomePage = renderHomePage;
