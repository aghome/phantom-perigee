// 長野県空き家ポータル - About Page

function renderAboutPage() {
    const main = document.getElementById('main-content');

    main.innerHTML = `
        <div class="about-hero">
            <h1 class="about-hero-title">ウェルビーイング指標とは</h1>
            <p class="about-hero-subtitle">
                価格や間取りだけでなく、暮らしの質を可視化する<br>
                新しい不動産価値の基準
            </p>
        </div>
        
        <div class="about-content">
            <!-- Introduction -->
            <section class="about-section">
                <h2 class="about-section-title">
                    <i data-lucide="sparkles"></i>
                    ウェルビーイングとは
                </h2>
                <p style="font-size: var(--text-lg); color: var(--text-secondary); line-height: var(--leading-relaxed); margin-bottom: var(--space-6);">
                    ウェルビーイング（Well-being）とは、身体的・精神的・社会的に良好な状態を指す概念です。
                    私たちは、住まい選びにおいてもこの「良好な状態」を数値化し、
                    本当に豊かな暮らしができる場所を見つけるお手伝いをします。
                </p>
                <p style="font-size: var(--text-lg); color: var(--text-secondary); line-height: var(--leading-relaxed);">
                    長野県は、豊かな自然環境、多様な気候、地域ごとに異なる文化・伝統を有しています。
                    しかし既存の不動産情報は「価格・間取り・築年数」といった取引前提の情報に偏りがちです。
                    私たちの「ウェルビーイング指標」は、土地そのものの価値や暮らしの質を可視化します。
                </p>
            </section>
            
            <!-- Score Explanation -->
            <section class="about-section">
                <h2 class="about-section-title">
                    <i data-lucide="gauge"></i>
                    スコアの見方
                </h2>
                <div style="background: var(--color-gray-50); border-radius: var(--radius-2xl); padding: var(--space-8); margin-bottom: var(--space-8);">
                    <div style="display: flex; align-items: center; gap: var(--space-6); flex-wrap: wrap;">
                        <div style="text-align: center;">
                            <div style="font-size: var(--text-6xl); font-weight: var(--font-bold); color: var(--color-primary);">85</div>
                            <div style="font-size: var(--text-sm); color: var(--text-secondary);">総合スコア例</div>
                        </div>
                        <div style="flex: 1; min-width: 300px;">
                            <p style="font-size: var(--text-base); color: var(--text-secondary); line-height: var(--leading-relaxed);">
                                ウェルビーイング総合スコアは<strong>100点満点</strong>で評価されます。
                                5つのサブ指標の平均値として算出され、
                                その物件で「どれだけ豊かな暮らしができるか」を示します。
                            </p>
                        </div>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-4);">
                    <div style="padding: var(--space-4); border-left: 4px solid #1a4d2e;">
                        <div style="font-weight: var(--font-bold); color: var(--text-primary);">90〜100点</div>
                        <div style="font-size: var(--text-sm); color: var(--text-secondary);">ウェルビーイング最適地</div>
                    </div>
                    <div style="padding: var(--space-4); border-left: 4px solid #4a6fa5;">
                        <div style="font-weight: var(--font-bold); color: var(--text-primary);">80〜89点</div>
                        <div style="font-size: var(--text-sm); color: var(--text-secondary);">ウェルビーイング推奨地</div>
                    </div>
                    <div style="padding: var(--space-4); border-left: 4px solid #8b7355;">
                        <div style="font-weight: var(--font-bold); color: var(--text-primary);">70〜79点</div>
                        <div style="font-size: var(--text-sm); color: var(--text-secondary);">バランスの取れた環境</div>
                    </div>
                    <div style="padding: var(--space-4); border-left: 4px solid #9ca3af;">
                        <div style="font-weight: var(--font-bold); color: var(--text-primary);">〜69点</div>
                        <div style="font-size: var(--text-sm); color: var(--text-secondary);">都市近接型</div>
                    </div>
                </div>
            </section>
            
            <!-- Categories -->
            <section class="about-section">
                <h2 class="about-section-title">
                    <i data-lucide="layers"></i>
                    5つの評価カテゴリ
                </h2>
                <div class="wellbeing-categories">
                    ${Object.entries(WELLBEING_CATEGORIES).map(([key, category]) => `
                        <div class="wellbeing-category" style="border-left-color: ${category.color};">
                            <div style="display: flex; align-items: center; gap: var(--space-3); margin-bottom: var(--space-4);">
                                <div style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: ${category.color}; border-radius: var(--radius-lg); color: white;">
                                    <i data-lucide="${category.icon}"></i>
                                </div>
                                <div>
                                    <h3 class="wellbeing-category-title" style="margin: 0;">${category.name}</h3>
                                    <p style="font-size: var(--text-sm); color: var(--text-secondary); margin: 0;">${category.nameEn}</p>
                                </div>
                            </div>
                            <p style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--space-4);">
                                ${category.description}
                            </p>
                            <div class="wellbeing-category-items">
                                ${category.indicators.map(ind => `
                                    <div class="wellbeing-category-item">
                                        <strong>${ind.name}</strong>: ${ind.description}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
            
            <!-- Methodology -->
            <section class="about-section">
                <h2 class="about-section-title">
                    <i data-lucide="flask-conical"></i>
                    評価の方法論
                </h2>
                <div style="display: grid; gap: var(--space-6);">
                    <div style="display: flex; gap: var(--space-4); align-items: flex-start;">
                        <div style="width: 48px; height: 48px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: var(--color-primary); color: white; border-radius: 50%; font-weight: var(--font-bold);">1</div>
                        <div>
                            <h3 style="font-size: var(--text-lg); font-weight: var(--font-semibold); margin-bottom: var(--space-2);">現地調査</h3>
                            <p style="color: var(--text-secondary);">
                                すべての物件について現地を訪問し、周辺環境、眺望、静けさなどを直接確認します。
                            </p>
                        </div>
                    </div>
                    <div style="display: flex; gap: var(--space-4); align-items: flex-start;">
                        <div style="width: 48px; height: 48px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: var(--color-primary); color: white; border-radius: 50%; font-weight: var(--font-bold);">2</div>
                        <div>
                            <h3 style="font-size: var(--text-lg); font-weight: var(--font-semibold); margin-bottom: var(--space-2);">データ分析</h3>
                            <p style="color: var(--text-secondary);">
                                標高、気温、降雪量などの地理データ、光害マップ、大気質データなどを統合的に分析します。
                            </p>
                        </div>
                    </div>
                    <div style="display: flex; gap: var(--space-4); align-items: flex-start;">
                        <div style="width: 48px; height: 48px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: var(--color-primary); color: white; border-radius: 50%; font-weight: var(--font-bold);">3</div>
                        <div>
                            <h3 style="font-size: var(--text-lg); font-weight: var(--font-semibold); margin-bottom: var(--space-2);">アクセス計算</h3>
                            <p style="color: var(--text-secondary);">
                                医療機関、スーパー、公共交通機関などへの距離と所要時間を算出し、生活利便性を評価します。
                            </p>
                        </div>
                    </div>
                    <div style="display: flex; gap: var(--space-4); align-items: flex-start;">
                        <div style="width: 48px; height: 48px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: var(--color-primary); color: white; border-radius: 50%; font-weight: var(--font-bold);">4</div>
                        <div>
                            <h3 style="font-size: var(--text-lg); font-weight: var(--font-semibold); margin-bottom: var(--space-2);">専門家レビュー</h3>
                            <p style="color: var(--text-secondary);">
                                地域の有識者、移住体験者の意見を取り入れ、数値では表しにくい「暮らしの質」を補完します。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Data Sources -->
            <section class="about-section">
                <h2 class="about-section-title">
                    <i data-lucide="database"></i>
                    データ出典
                </h2>
                <div style="background: var(--color-gray-50); border-radius: var(--radius-xl); padding: var(--space-6);">
                    <ul style="display: grid; gap: var(--space-3);">
                        <li style="display: flex; align-items: center; gap: var(--space-2);">
                            <i data-lucide="check-circle" style="color: var(--color-primary); flex-shrink: 0;"></i>
                            国土地理院 - 標高・地形データ
                        </li>
                        <li style="display: flex; align-items: center; gap: var(--space-2);">
                            <i data-lucide="check-circle" style="color: var(--color-primary); flex-shrink: 0;"></i>
                            気象庁 - 気温・降雪量・日照時間データ
                        </li>
                        <li style="display: flex; align-items: center; gap: var(--space-2);">
                            <i data-lucide="check-circle" style="color: var(--color-primary); flex-shrink: 0;"></i>
                            環境省 - 大気質データ
                        </li>
                        <li style="display: flex; align-items: center; gap: var(--space-2);">
                            <i data-lucide="check-circle" style="color: var(--color-primary); flex-shrink: 0;"></i>
                            長野県各市町村 - 空き家バンクデータ
                        </li>
                        <li style="display: flex; align-items: center; gap: var(--space-2);">
                            <i data-lucide="check-circle" style="color: var(--color-primary); flex-shrink: 0;"></i>
                            OpenStreetMap - 施設アクセスデータ
                        </li>
                    </ul>
                </div>
            </section>
            
            <!-- CTA -->
            <section style="text-align: center; padding: var(--space-12) 0;">
                <h2 style="font-size: var(--text-2xl); font-weight: var(--font-bold); margin-bottom: var(--space-4);">
                    ウェルビーイングスコアで物件を探そう
                </h2>
                <p style="color: var(--text-secondary); margin-bottom: var(--space-8);">
                    新しい基準で、本当に豊かな暮らしができる空き家を見つけましょう
                </p>
                <button class="btn btn-primary btn-lg" onclick="navigateTo('list')">
                    <i data-lucide="search"></i>
                    物件を探す
                </button>
            </section>
        </div>
    `;

    lucide.createIcons();
}

// Export
window.renderAboutPage = renderAboutPage;
