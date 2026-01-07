// 長野県空き家ポータル - SearchFilter Component

let currentFilters = {
    city: '',
    minPrice: null,
    maxPrice: null,
    minAltitude: null,
    maxAltitude: null,
    minWellbeing: null,
    vacancy: '',
    repair: '',
    tags: []
};

let currentSort = 'wellbeing-desc';

function createSearchBar() {
    return `
        <div class="search-section">
            <div class="search-grid">
                <div class="search-group">
                    <label class="search-label">エリア</label>
                    <select class="search-select" id="search-city">
                        <option value="">すべてのエリア</option>
                        ${ALL_CITIES.map(city => `<option value="${city}">${city}</option>`).join('')}
                    </select>
                </div>
                <div class="search-group">
                    <label class="search-label">価格帯</label>
                    <select class="search-select" id="search-price">
                        <option value="">すべての価格</option>
                        <option value="0-5000000">500万円以下</option>
                        <option value="5000000-10000000">500万〜1,000万円</option>
                        <option value="10000000-20000000">1,000万〜2,000万円</option>
                        <option value="20000000-999999999">2,000万円以上</option>
                    </select>
                </div>
                <div class="search-group">
                    <label class="search-label">標高</label>
                    <select class="search-select" id="search-altitude">
                        <option value="">すべての標高</option>
                        <option value="0-500">500m以下</option>
                        <option value="500-800">500m〜800m</option>
                        <option value="800-1000">800m〜1,000m</option>
                        <option value="1000-9999">1,000m以上</option>
                    </select>
                </div>
                <div class="search-group">
                    <label class="search-label">ウェルビーイング</label>
                    <select class="search-select" id="search-wellbeing">
                        <option value="">すべてのスコア</option>
                        <option value="90">90点以上</option>
                        <option value="80">80点以上</option>
                        <option value="70">70点以上</option>
                    </select>
                </div>
                <button class="btn btn-primary search-btn" onclick="applyFilters()">
                    <i data-lucide="search"></i>
                    検索
                </button>
            </div>
        </div>
    `;
}

function createFilterSidebar() {
    return `
        <aside class="filter-sidebar">
            <div class="filter-section">
                <h3 class="filter-title">エリア</h3>
                <div class="filter-options">
                    <select class="search-select" id="filter-city" style="width: 100%;">
                        <option value="">すべてのエリア</option>
                        ${ALL_CITIES.map(city => `<option value="${city}">${city}</option>`).join('')}
                    </select>
                </div>
            </div>
            
            <div class="filter-section">
                <h3 class="filter-title">価格帯（万円）</h3>
                <div class="range-slider">
                    <input type="range" id="filter-price-min" min="0" max="5000" step="100" value="0">
                    <div class="range-values">
                        <span id="price-min-display">0万円</span>
                        <span id="price-max-display">上限なし</span>
                    </div>
                </div>
            </div>
            
            <div class="filter-section">
                <h3 class="filter-title">標高（m）</h3>
                <div class="range-slider">
                    <input type="range" id="filter-altitude-min" min="0" max="1500" step="100" value="0">
                    <div class="range-values">
                        <span id="altitude-min-display">0m</span>
                        <span id="altitude-max-display">上限なし</span>
                    </div>
                </div>
            </div>
            
            <div class="filter-section">
                <h3 class="filter-title">ウェルビーイングスコア</h3>
                <div class="filter-options">
                    <label class="filter-option">
                        <input type="radio" name="wellbeing" value="" checked>
                        <span class="filter-checkbox"></span>
                        <span class="filter-option-label">すべて</span>
                    </label>
                    <label class="filter-option">
                        <input type="radio" name="wellbeing" value="90">
                        <span class="filter-checkbox"></span>
                        <span class="filter-option-label">90点以上</span>
                    </label>
                    <label class="filter-option">
                        <input type="radio" name="wellbeing" value="80">
                        <span class="filter-checkbox"></span>
                        <span class="filter-option-label">80点以上</span>
                    </label>
                    <label class="filter-option">
                        <input type="radio" name="wellbeing" value="70">
                        <span class="filter-checkbox"></span>
                        <span class="filter-option-label">70点以上</span>
                    </label>
                </div>
            </div>
            
            <div class="filter-section">
                <h3 class="filter-title">空き家状態</h3>
                <div class="filter-options">
                    <label class="filter-option">
                        <input type="checkbox" name="vacancy" value="unused">
                        <span class="filter-checkbox"></span>
                        <span class="filter-option-label">未使用</span>
                    </label>
                    <label class="filter-option">
                        <input type="checkbox" name="vacancy" value="partial">
                        <span class="filter-checkbox"></span>
                        <span class="filter-option-label">一部使用</span>
                    </label>
                    <label class="filter-option">
                        <input type="checkbox" name="vacancy" value="longterm">
                        <span class="filter-checkbox"></span>
                        <span class="filter-option-label">長期未使用</span>
                    </label>
                </div>
            </div>
            
            <div class="filter-section">
                <h3 class="filter-title">修繕レベル</h3>
                <div class="filter-options">
                    <label class="filter-option">
                        <input type="checkbox" name="repair" value="ready">
                        <span class="filter-checkbox"></span>
                        <span class="filter-option-label">即入居可</span>
                    </label>
                    <label class="filter-option">
                        <input type="checkbox" name="repair" value="minor">
                        <span class="filter-checkbox"></span>
                        <span class="filter-option-label">軽微修繕</span>
                    </label>
                    <label class="filter-option">
                        <input type="checkbox" name="repair" value="major">
                        <span class="filter-checkbox"></span>
                        <span class="filter-option-label">大規模修繕必要</span>
                    </label>
                </div>
            </div>
            
            <div class="filter-section">
                <h3 class="filter-title">特徴タグ</h3>
                <div class="filter-options" style="flex-wrap: wrap; flex-direction: row; gap: 8px;">
                    ${getUniqueTags().map(tag => `
                        <label class="filter-option" style="flex: 0 0 auto;">
                            <input type="checkbox" name="tags" value="${tag}">
                            <span class="filter-checkbox"></span>
                            <span class="filter-option-label">${tag}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
            
            <button class="btn btn-primary" style="width: 100%; margin-top: var(--space-4);" onclick="applySidebarFilters()">
                <i data-lucide="search"></i>
                この条件で検索
            </button>
            
            <button class="btn btn-outline" style="width: 100%; margin-top: var(--space-2);" onclick="clearFilters()">
                <i data-lucide="x"></i>
                条件をクリア
            </button>
        </aside>
    `;
}

function getUniqueTags() {
    const tags = new Set();
    PROPERTIES.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags).slice(0, 10);
}

function applyFilters() {
    const city = document.getElementById('search-city')?.value || '';
    const priceRange = document.getElementById('search-price')?.value || '';
    const altitudeRange = document.getElementById('search-altitude')?.value || '';
    const wellbeing = document.getElementById('search-wellbeing')?.value || '';

    currentFilters.city = city;

    if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        currentFilters.minPrice = min;
        currentFilters.maxPrice = max;
    } else {
        currentFilters.minPrice = null;
        currentFilters.maxPrice = null;
    }

    if (altitudeRange) {
        const [min, max] = altitudeRange.split('-').map(Number);
        currentFilters.minAltitude = min;
        currentFilters.maxAltitude = max;
    } else {
        currentFilters.minAltitude = null;
        currentFilters.maxAltitude = null;
    }

    currentFilters.minWellbeing = wellbeing ? Number(wellbeing) : null;

    // Navigate to list page with filters
    navigateTo('list');
}

function applySidebarFilters() {
    // City
    currentFilters.city = document.getElementById('filter-city')?.value || '';

    // Price
    const priceMin = document.getElementById('filter-price-min');
    if (priceMin) {
        currentFilters.minPrice = Number(priceMin.value) * 10000;
    }

    // Altitude
    const altitudeMin = document.getElementById('filter-altitude-min');
    if (altitudeMin) {
        currentFilters.minAltitude = Number(altitudeMin.value);
    }

    // Wellbeing
    const wellbeingRadio = document.querySelector('input[name="wellbeing"]:checked');
    currentFilters.minWellbeing = wellbeingRadio?.value ? Number(wellbeingRadio.value) : null;

    // Tags
    const tagCheckboxes = document.querySelectorAll('input[name="tags"]:checked');
    currentFilters.tags = Array.from(tagCheckboxes).map(cb => cb.value);

    // Re-render list
    renderPropertyListContent();
}

function clearFilters() {
    currentFilters = {
        city: '',
        minPrice: null,
        maxPrice: null,
        minAltitude: null,
        maxAltitude: null,
        minWellbeing: null,
        vacancy: '',
        repair: '',
        tags: []
    };

    // Reset form elements
    const filterCity = document.getElementById('filter-city');
    if (filterCity) filterCity.value = '';

    const priceMin = document.getElementById('filter-price-min');
    if (priceMin) priceMin.value = 0;

    const altitudeMin = document.getElementById('filter-altitude-min');
    if (altitudeMin) altitudeMin.value = 0;

    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('input[type="radio"]').forEach(rb => {
        if (rb.value === '') rb.checked = true;
    });

    // Re-render list
    renderPropertyListContent();
}

function getFilteredProperties() {
    let result = filterProperties(currentFilters);
    result = sortProperties(result, currentSort);
    return result;
}

function setSort(sortBy) {
    currentSort = sortBy;
    renderPropertyListContent();
}

// Initialize filter event listeners
function initFilterListeners() {
    // Price range slider
    const priceMin = document.getElementById('filter-price-min');
    if (priceMin) {
        priceMin.addEventListener('input', (e) => {
            const display = document.getElementById('price-min-display');
            if (display) {
                display.textContent = `${e.target.value}万円`;
            }
        });
    }

    // Altitude range slider
    const altitudeMin = document.getElementById('filter-altitude-min');
    if (altitudeMin) {
        altitudeMin.addEventListener('input', (e) => {
            const display = document.getElementById('altitude-min-display');
            if (display) {
                display.textContent = `${e.target.value}m`;
            }
        });
    }
}

// Export
window.createSearchBar = createSearchBar;
window.createFilterSidebar = createFilterSidebar;
window.applyFilters = applyFilters;
window.applySidebarFilters = applySidebarFilters;
window.clearFilters = clearFilters;
window.getFilteredProperties = getFilteredProperties;
window.setSort = setSort;
window.initFilterListeners = initFilterListeners;
window.currentFilters = currentFilters;
window.currentSort = currentSort;
