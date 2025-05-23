        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.width = `${Math.random() * 3 + 1}px`;
            star.style.height = star.style.width;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
            star.style.setProperty('--opacity', Math.random() * 0.5 + 0.1);
            starsContainer.appendChild(star);
        }
        
        const iconsContainer = document.getElementById('floating-icons');
        const icons = [
            'fa-code', 'fa-laptop-code', 'fa-microchip', 'fa-server', 'fa-database', 
            'fa-robot', 'fa-gamepad', 'fa-mobile-screen', 'fa-globe', 'fa-cloud',
            'fa-github', 'fa-discord', 'fa-instagram' // Added new icons here
        ];
        
        for (let i = 0; i < 20; i++) { // Increased number of floating icons
            const icon = document.createElement('i');
            icon.classList.add('floating-icon', 'fab', icons[Math.floor(Math.random() * icons.length)]);
            icon.style.left = `${Math.random() * 100}%`;
            icon.style.top = `${Math.random() * 100 + 100}%`;
            icon.style.fontSize = `${Math.random() * 20 + 10}px`;
            icon.style.animationDuration = `${Math.random() * 30 + 20}s`;
            icon.style.animationDelay = `${Math.random() * 5}s`;
            iconsContainer.appendChild(icon);
        }
        
        const profileCard = document.querySelector('.profile-card');
        profileCard.addEventListener('mousemove', (e) => {
            const x = e.clientX - profileCard.getBoundingClientRect().left;
            const y = e.clientY - profileCard.getBoundingClientRect().top;
            
            const centerX = profileCard.offsetWidth / 2;
            const centerY = profileCard.offsetHeight / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            profileCard.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
        
        profileCard.addEventListener('mouseleave', () => {
            profileCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });

        // Music Play/Pause functionality
        const musicToggle = document.getElementById('music-toggle');
        const backgroundMusic = document.getElementById('background-music');
        let isPlaying = false;

        musicToggle.addEventListener('click', () => {
            if (isPlaying) {
                backgroundMusic.pause();
                musicToggle.innerHTML = '<i class="fas fa-play"></i>';
            } else {
                backgroundMusic.play();
                musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            }
            isPlaying = !isPlaying;
        });