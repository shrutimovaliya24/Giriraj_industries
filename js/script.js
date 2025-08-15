// Wafer machine videos data
const waferVideos = [
    {
        id: 1,
        title: "Automatic Wafer Baking Machine",
        description: "High-capacity automatic wafer baking system with precise temperature control and continuous production capability.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your actual video
        specs: ["500 sheets/hr", "Automatic", "Energy Efficient", "Temperature Control"]
    },
    {
        id: 2,
        title: "Wafer Cream Spreading Machine",
        description: "Precision cream spreading equipment for uniform wafer cream application with adjustable thickness settings.",
        videoUrl: "https://www.w3schools.com/html/movie.mp4", // Replace with your actual video
        specs: ["Adjustable Thickness", "Uniform Spread", "Food Grade", "Easy Cleaning"]
    },
    {
        id: 3,
        title: "Wafer Cutting & Packaging Line",
        description: "Complete cutting and packaging solution for wafer products with automated quality control systems.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your actual video
        specs: ["Precision Cutting", "Auto Packaging", "Quality Control", "High Speed"]
    },
    {
        id: 4,
        title: "Wafer Sheet Forming Machine",
        description: "Advanced wafer sheet forming equipment with multiple pattern options and consistent thickness control.",
        videoUrl: "https://www.w3schools.com/html/movie.mp4", // Replace with your actual video
        specs: ["Multiple Patterns", "Consistent Thickness", "High Output", "Low Waste"]
    },
    {
        id: 5,
        title: "Wafer Cooling Conveyor System",
        description: "Specialized cooling conveyor system for optimal wafer cooling with controlled airflow and temperature zones.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with your actual video
        specs: ["Controlled Cooling", "Adjustable Speed", "Modular Design", "Energy Saving"]
    },
    {
        id: 6,
        title: "Complete Wafer Production Line",
        description: "Full integrated wafer production line from batter mixing to final packaging with automated controls.",
        videoUrl: "https://www.w3schools.com/html/movie.mp4", // Replace with your actual video
        specs: ["Fully Integrated", "Automated Control", "High Capacity", "Quality Assured"]
    }
];

// Show wafer videos section
function showWaferVideos() {
    document.getElementById('categorySection').style.display = 'none';
    document.getElementById('videosSection').classList.add('active');
    
    // Populate videos grid
    const grid = document.getElementById('videosGrid');
    grid.innerHTML = '';
    
    waferVideos.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card fade-in';
        card.onclick = () => openVideo(video);
        
        card.innerHTML = `
            <div class="video-thumbnail"></div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.description}</p>
                <div class="video-specs">
                    ${video.specs.map(spec => `<span class="spec-tag">${spec}</span>`).join('')}
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Show categories section
function showCategories() {
    document.getElementById('videosSection').classList.remove('active');
    setTimeout(() => {
        document.getElementById('categorySection').style.display = 'block';
    }, 300);
}

// Open video modal
function openVideo(video) {
    const modal = document.getElementById('videoModal');
    const videoElement = document.getElementById('modalVideo');
    const title = document.getElementById('videoTitle');
    
    videoElement.src = video.videoUrl;
    title.textContent = video.title;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Try to play video (some browsers may block autoplay)
    videoElement.play().catch(e => console.log('Autoplay prevented'));
}

// Close video modal
function closeVideo() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    
    modal.classList.remove('active');
    video.pause();
    video.currentTime = 0;
    document.body.style.overflow = '';
}

// Open contact modal
function openContactModal() {
    document.getElementById('contactModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close contact modal
function closeContactModal() {
    document.getElementById('contactModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Close modals when clicking outside
    document.getElementById('videoModal').addEventListener('click', function(e) {
        if (e.target === this) closeVideo();
    });
    
    document.getElementById('contactModal').addEventListener('click', function(e) {
        if (e.target === this) closeContactModal();
    });
    
    // Mobile swipe gestures
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', e => {
        touchStartY = e.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', e => {
        touchEndY = e.changedTouches[0].screenY;
        
        // Swipe down to close video modal
        if (touchEndY - touchStartY > 100) {
            if (document.getElementById('videoModal').classList.contains('active')) {
                closeVideo();
            }
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeVideo();
            closeContactModal();
        }
    });
});