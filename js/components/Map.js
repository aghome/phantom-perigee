// 長野県空き家ポータル - Map Component

let map = null;
let markers = [];

function initMap(containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Default center on Nagano Prefecture
    const defaultCenter = [36.2048, 137.9653];
    const defaultZoom = 8;

    map = L.map(containerId, {
        center: options.center || defaultCenter,
        zoom: options.zoom || defaultZoom,
        scrollWheelZoom: true,
        zoomControl: true
    });

    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    // Custom styling for the map
    container.style.borderRadius = 'var(--radius-2xl)';
    container.style.overflow = 'hidden';

    return map;
}

function createCustomMarker(property) {
    const wellbeingScore = calculateWellbeingScore(property.wellbeing);

    // Create custom icon
    const icon = L.divIcon({
        className: 'custom-marker-container',
        html: `<div class="custom-marker">${wellbeingScore}</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -20]
    });

    return icon;
}

function addPropertyMarkers(properties) {
    if (!map) return;

    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    properties.forEach(property => {
        const { lat, lng } = property.location;
        const icon = createCustomMarker(property);

        const marker = L.marker([lat, lng], { icon }).addTo(map);

        // Create popup content
        const popupContent = createMapPopup(property);
        marker.bindPopup(popupContent, {
            className: 'map-popup',
            maxWidth: 280,
            minWidth: 280
        });

        // Store marker
        markers.push(marker);
    });

    // Fit bounds to show all markers
    if (markers.length > 0) {
        const group = L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.1));
    }
}

function createMapPopup(property) {
    const wellbeingScore = calculateWellbeingScore(property.wellbeing);

    return `
        <div class="map-popup-content" onclick="navigateTo('detail', '${property.id}')" style="cursor: pointer;">
            <div class="map-popup-image">
                <img src="${property.images[0]}" alt="${property.title}">
            </div>
            <div class="map-popup-body">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                    <span style="font-size: 12px; color: #6b7280;">${property.location.city}</span>
                    <span style="display: inline-flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 600; color: #1a4d2e;">
                        ⭐ ${wellbeingScore}
                    </span>
                </div>
                <h4 class="map-popup-title">${property.title}</h4>
                <div style="display: flex; gap: 12px; font-size: 12px; color: #6b7280; margin-bottom: 8px;">
                    <span>🏔 ${property.environment.altitude}m</span>
                    <span>📐 ${property.building.floorArea}㎡</span>
                </div>
                <div class="map-popup-price">${formatPrice(property.price, property.priceType)}</div>
            </div>
        </div>
    `;
}

function highlightMarker(propertyId) {
    markers.forEach((marker, index) => {
        if (PROPERTIES[index] && PROPERTIES[index].id === propertyId) {
            marker.openPopup();
            map.panTo(marker.getLatLng());
        }
    });
}

function setMapView(lat, lng, zoom = 12) {
    if (map) {
        map.setView([lat, lng], zoom);
    }
}

function destroyMap() {
    if (map) {
        map.remove();
        map = null;
        markers = [];
    }
}

// Add CSS for custom markers dynamically
const style = document.createElement('style');
style.textContent = `
    .custom-marker-container {
        background: transparent;
    }
    .custom-marker {
        background: linear-gradient(135deg, #1a4d2e 0%, #2d6a4f 100%);
        border: 3px solid white;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        color: white;
        font-weight: 700;
        font-size: 11px;
        transition: transform 0.2s ease;
    }
    .custom-marker:hover {
        transform: scale(1.2);
    }
    .leaflet-popup-content-wrapper {
        padding: 0;
        border-radius: 16px;
        overflow: hidden;
    }
    .leaflet-popup-content {
        margin: 0;
    }
    .leaflet-popup-tip {
        background: white;
    }
`;
document.head.appendChild(style);

// Export
window.initMap = initMap;
window.addPropertyMarkers = addPropertyMarkers;
window.highlightMarker = highlightMarker;
window.setMapView = setMapView;
window.destroyMap = destroyMap;
