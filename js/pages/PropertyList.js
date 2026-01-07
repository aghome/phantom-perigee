// 長野県空き家ポータル - Property List Page

function renderPropertyListPage() {
    const main = document.getElementById('main-content');

    main.innerHTML = `
        <div class="list-page">
            <div class="container">
                <div class="list-header">
                    <h1 class="list-title">空き家一覧</h1>
                    <p class="list-count" id="property-count"></p>
                </div>
                
                <div class="list-layout">
                    ${createFilterSidebar()}
                    
                    <div class="list-main">
                        <div class="list-sort">
                            <span style="font-size: var(--text-sm); color: var(--text-secondary);">
                                並び替え
                            </span>
                            <select class="sort-select" id="sort-select" onchange="setSort(this.value); renderPropertyListContent();">
                                <option value="wellbeing-desc">ウェルビーイングスコア（高い順）</option>
                                <option value="price-asc">価格（安い順）</option>
                                <option value="price-desc">価格（高い順）</option>
                                <option value="altitude-desc">標高（高い順）</option>
                                <option value="altitude-asc">標高（低い順）</option>
                            </select>
                        </div>
                        
                        <div id="property-list-container"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Initialize icons
    lucide.createIcons();

    // Initialize filter listeners
    initFilterListeners();

    // Render initial property list
    renderPropertyListContent();
}

function renderPropertyListContent() {
    const container = document.getElementById('property-list-container');
    const countDisplay = document.getElementById('property-count');

    if (!container) return;

    const filteredProperties = getFilteredProperties();

    // Update count
    if (countDisplay) {
        countDisplay.textContent = `${filteredProperties.length}件の物件が見つかりました`;
    }

    // Clear container
    container.innerHTML = '';

    if (filteredProperties.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i data-lucide="search-x"></i>
                <h3 class="empty-state-title">該当する物件がありません</h3>
                <p>検索条件を変更してお試しください</p>
                <button class="btn btn-outline" style="margin-top: var(--space-4);" onclick="clearFilters()">
                    条件をクリア
                </button>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    // Render property grid
    renderPropertyGrid(container, filteredProperties);
}

// Export
window.renderPropertyListPage = renderPropertyListPage;
window.renderPropertyListContent = renderPropertyListContent;
