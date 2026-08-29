document.addEventListener("DOMContentLoaded", () => {
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        document.querySelectorAll('.cloud-layer, .orbit-ring, .orbit-icon-wrapper, .glitch-effect').forEach(el => el.classList.add('no-anim'));
    }

    // 1. Typing Animation for Hero Terminal
    const typeTarget = document.getElementById("typewriter");
    const termOutput = document.getElementById("term-output");
    const cursor = document.querySelector(".cursor");
    const textToType = "whoami";
    let typeIndex = 0;
    
    function typeWriter() {
        if (prefersReducedMotion) {
            typeTarget.innerHTML = textToType;
            cursor.style.display = "none";
            termOutput.classList.remove("hidden");
            termOutput.classList.add("visible");
            return;
        }

        if (typeIndex < textToType.length) {
            typeTarget.innerHTML += textToType.charAt(typeIndex);
            typeIndex++;
            setTimeout(typeWriter, Math.floor(Math.random() * 100) + 50);
        } else {
            setTimeout(() => {
                cursor.style.display = "none";
                termOutput.classList.remove("hidden");
                termOutput.classList.add("visible");
            }, 400);
        }
    }
    setTimeout(typeWriter, 800);

    // 2. Scroll Reveal & Dynamic Animations
    const bootElements = document.querySelectorAll('.boot-stagger');
    const gitTimeline = document.getElementById('git-timeline');
    const progressElements = document.querySelectorAll('.progress-boot');

    if (!prefersReducedMotion) {
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    
                    // Boot stagger fade up
                    if (entry.target.classList.contains('boot-stagger')) {
                        entry.target.classList.add('boot-up');
                    }
                    
                    // Git Timeline Draw
                    if (entry.target.id === 'git-timeline') {
                        const line = entry.target.querySelector('.timeline-line');
                        if (line) line.classList.add('drawn');
                        
                        const nodes = entry.target.querySelectorAll('.commit-node');
                        nodes.forEach((node, idx) => {
                            setTimeout(() => {
                                node.classList.add('pop-in');
                            }, 500 + (idx * 300)); // Stagger nodes popping in
                        });
                    }

                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        bootElements.forEach(el => observer.observe(el));
        if (gitTimeline) observer.observe(gitTimeline);

        // Progress Bar Observer
        const progressObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    simulateProgressBar(entry.target);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        progressElements.forEach(el => progressObserver.observe(el));

    } else {
        // Fallback for reduced motion
        bootElements.forEach(el => { el.classList.add('boot-up'); el.style.transition = 'none'; });
        if (gitTimeline) {
            const line = gitTimeline.querySelector('.timeline-line');
            if (line) line.classList.add('drawn');
            gitTimeline.querySelectorAll('.commit-node').forEach(node => node.classList.add('pop-in'));
        }
        progressElements.forEach(el => {
            el.innerHTML = el.getAttribute('data-final');
        });
    }

    // 3. System Booting Progress Bar Simulation
    function simulateProgressBar(el) {
        const finalStatus = el.getAttribute('data-final');
        let progress = 0;
        el.innerHTML = `[          ] 0%`;
        
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 15) + 5;
            if (progress > 100) progress = 100;
            
            const barsCount = Math.floor(progress / 10);
            const bars = '#'.repeat(barsCount);
            const spaces = '&nbsp;'.repeat(10 - barsCount);
            
            el.innerHTML = `[${bars}${spaces}] ${progress}%`;
            
            if (progress === 100) {
                clearInterval(interval);
                setTimeout(() => {
                    el.innerHTML = finalStatus;
                }, 300);
            }
        }, 80);
    }

    // 4. Network Traffic Particles in Orbit
    if (!prefersReducedMotion) {
        const container = document.getElementById('particles-container');
        if (container) {
            setInterval(() => {
                createParticle(container);
            }, 1200); // spawn a particle every 1.2s
        }
    }

    function createParticle(container) {
        const particle = document.createElement('div');
        particle.classList.add('data-particle');
        container.appendChild(particle);

        // Randomize starting angle and radius (ring 1, 2, or 3)
        const angle = Math.random() * Math.PI * 2;
        const radiusOptions = [80, 140, 200]; // matching roughly ring 1, 2, 3 radii
        const startRadius = radiusOptions[Math.floor(Math.random() * radiusOptions.length)];
        
        const startX = Math.cos(angle) * startRadius;
        const startY = Math.sin(angle) * startRadius;

        // Animate from outer radius to center (0,0)
        particle.style.transform = `translate(${startX}px, ${startY}px)`;
        
        particle.animate([
            { transform: `translate(${startX}px, ${startY}px)`, opacity: 0 },
            { opacity: 1, offset: 0.1 },
            { opacity: 1, offset: 0.8 },
            { transform: `translate(0px, 0px)`, opacity: 0 }
        ], {
            duration: 1500 + Math.random() * 1000,
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
            fill: 'forwards'
        });

        // Cleanup
        setTimeout(() => {
            if(particle.parentNode) particle.parentNode.removeChild(particle);
        }, 3000);
    }

});
