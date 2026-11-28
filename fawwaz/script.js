document.addEventListener("DOMContentLoaded", () => {
    // =========================================================================
    // DATA PROYEK — Ubah atau tambah objek di array PROJECTS ini
    // =========================================================================
    const PROJECTS = [
        {
            id: "infak-management-system",
            status: "completed",
            isPlaceholder: false,
            tags: ["Web"],
            techStack: ["HTML5", "CSS3", "JavaScript", "Web App"],
            // TODO: Ganti "#" dengan URL repository GitHub dan live demo proyek Infak Management System jika sudah dipublikasikan
            repoUrl: "#TODO-repo-infak",
            demoUrl: "#TODO-demo-infak",
            title: {
                id: "Infak Management System",
                en: "Infak Management System"
            },
            summary: {
                id: "Aplikasi web pencatatan dan manajemen infak untuk transparansi operasional Masjid/Madrasah Assajjad.",
                en: "Web application for recording and managing infak donations to support financial transparency at Masjid/Madrasah Assajjad."
            },
            problem: {
                id: "Pencatatan kas dan laporan infak manual menyulitkan rekapitulasi rutin serta keterbukaan informasi kepada jamaah dan pengurus Masjid/Madrasah Assajjad.",
                en: "Manual donation logging and reporting made routine summaries and financial transparency difficult for Masjid/Madrasah Assajjad administrators and community members."
            },
            solution: {
                id: "Membangun antarmuka web terstruktur untuk mencatat pemasukan, pengelolaan kategori infak, serta penyajian laporan operasional yang mudah diakses.",
                en: "Built a structured web interface for recording incoming donations, managing infak entries, and presenting accessible operational financial summaries."
            },
            impact: {
                id: "Mendukung kerapian pencatatan administrasi dan transparansi laporan dana operasional Masjid/Madrasah Assajjad.",
                en: "Supports structured administrative recordkeeping and transparent operational fund reporting for Masjid/Madrasah Assajjad."
            },
            architecture: {
                nodes: [
                    {
                        label: "Pengurus / User",
                        sub: "Browser",
                        tooltip: {
                            id: "Pengurus masjid mengakses aplikasi pencatatan melalui browser.",
                            en: "Administrators access the recording web app via browser."
                        }
                    },
                    {
                        label: "Web UI",
                        sub: "HTML / CSS / JS",
                        tooltip: {
                            id: "Antarmuka form input & tabel laporan keuangan yang responsif.",
                            en: "Responsive UI for donation entry forms and financial tables."
                        }
                    },
                    {
                        label: "App Logic",
                        sub: "Validation & State",
                        tooltip: {
                            id: "Validasi transaksi infak, perhitungan saldo, dan filter laporan.",
                            en: "Transaction validation, balance calculation, and report filtering."
                        }
                    },
                    {
                        label: "Data & Report",
                        sub: "Operational Log",
                        tooltip: {
                            id: "Penyimpanan catatan transaksi dan ringkasan transparansi dana.",
                            en: "Structured donation log storage and transparency summaries."
                        }
                    }
                ]
            }
        },
        {
            id: "cicd-github-actions-docker",
            status: "in-progress",
            isPlaceholder: true,
            tags: ["DevOps", "CI/CD", "Cloud"],
            techStack: ["GitHub Actions", "Docker", "Reverse Proxy", "Linux"],
            // TODO: Ganti judul, ringkasan, arsitektur, repoUrl, dan demoUrl dengan proyek CI/CD asli Anda
            repoUrl: "#TODO-repo-cicd",
            demoUrl: "#TODO-demo-cicd",
            title: {
                id: "[TODO] CI/CD Pipeline dengan GitHub Actions + Docker",
                en: "[TODO] CI/CD Pipeline with GitHub Actions + Docker"
            },
            summary: {
                id: "TODO: Contoh pipeline otomatis dari push kode, build image Docker, hingga deployment di balik Reverse Proxy.",
                en: "TODO: Sample automated pipeline from code push and Docker image build to deployment behind a Reverse Proxy."
            },
            problem: {
                id: "TODO: Jelaskan masalah deployment manual (misalnya proses rilis berulang yang rawan human error dan downtime).",
                en: "TODO: Describe the manual deployment problem (e.g., error-prone manual releases and inconsistent environments)."
            },
            solution: {
                id: "TODO: Jelaskan alur pipeline otomatis (trigger push ke GitHub, test & build image Docker, lalu deploy ke server Linux di balik Reverse Proxy).",
                en: "TODO: Describe your automated workflow (GitHub push triggers test & Docker image build, then deploys to a Linux server behind a Reverse Proxy)."
            },
            impact: {
                id: "TODO: Isi hasil nyata setelah proyek selesai (misalnya waktu deploy lebih konsisten dan rollback lebih mudah).",
                en: "TODO: Fill in measurable results once completed (e.g., consistent repeatable deployments and faster rollbacks)."
            },
            architecture: {
                nodes: [
                    {
                        label: "Developer",
                        sub: "Git Push",
                        tooltip: {
                            id: "Perubahan kode dikirim ke branch utama repository.",
                            en: "Code changes pushed to the main repository branch."
                        }
                    },
                    {
                        label: "GitHub Actions",
                        sub: "CI/CD Runner",
                        tooltip: {
                            id: "Menjalankan lint, test, dan build Docker image secara otomatis.",
                            en: "Runs automated checks and builds the Docker container image."
                        }
                    },
                    {
                        label: "Docker Registry",
                        sub: "Container Image",
                        tooltip: {
                            id: "Menyimpan image versi terbaru hasil build CI.",
                            en: "Stores versioned container images built by CI."
                        }
                    },
                    {
                        label: "Linux Server",
                        sub: "Reverse Proxy + App",
                        tooltip: {
                            id: "Reverse Proxy mengarahkan trafik ke container aplikasi terbaru.",
                            en: "Reverse Proxy routes incoming traffic to the updated app container."
                        }
                    }
                ]
            }
        },
        {
            id: "monitoring-prometheus-grafana",
            status: "in-progress",
            isPlaceholder: true,
            tags: ["DevOps", "Monitoring", "Cloud", "IaC"],
            techStack: ["Prometheus", "Grafana", "Redis", "Docker", "Terraform"],
            // TODO: Ganti judul, ringkasan, arsitektur, repoUrl, dan demoUrl dengan proyek Monitoring asli Anda
            repoUrl: "#TODO-repo-monitoring",
            demoUrl: "#TODO-demo-monitoring",
            title: {
                id: "[TODO] Monitoring Stack Prometheus + Grafana",
                en: "[TODO] Prometheus + Grafana Monitoring Stack"
            },
            summary: {
                id: "TODO: Contoh observability stack untuk memantau metrik server, container, dan cache Redis lewat dashboard Grafana.",
                en: "TODO: Sample observability stack monitoring server, container, and Redis cache metrics via Grafana dashboards."
            },
            problem: {
                id: "TODO: Jelaskan kendala kurangnya visibilitas metrik CPU, memori, atau latensi cache sebelum ada monitoring terpusat.",
                en: "TODO: Describe the lack of visibility into CPU, memory, and cache latency before centralized monitoring."
            },
            solution: {
                id: "TODO: Jelaskan setup scraping metrik dengan Prometheus, visualisasi panel Grafana, serta provisioning stack berbasis container/IaC.",
                en: "TODO: Describe Prometheus metric scraping, Grafana dashboard visualization, and container/IaC-based stack provisioning."
            },
            impact: {
                id: "TODO: Isi dampak nyata setelah diuji (misalnya deteksi lonjakan resource dan cache hit ratio lebih cepat).",
                en: "TODO: Fill in real impact after testing (e.g., faster detection of resource spikes and cache hit ratio tracking)."
            },
            architecture: {
                nodes: [
                    {
                        label: "App & Redis",
                        sub: "Target Service",
                        tooltip: {
                            id: "Layanan aplikasi dan cache Redis menghasilkan metrik operasional.",
                            en: "Application services and Redis cache emit runtime metrics."
                        }
                    },
                    {
                        label: "Exporters",
                        sub: "/metrics Endpoint",
                        tooltip: {
                            id: "Exporter mengekspos metrik sistem, container, dan Redis untuk di-scrape.",
                            en: "Exporters expose host, container, and Redis metrics for scraping."
                        }
                    },
                    {
                        label: "Prometheus",
                        sub: "TSDB & Scrape",
                        tooltip: {
                            id: "Menarik dan menyimpan metrik time-series secara berkala.",
                            en: "Periodically scrapes and stores time-series metrics."
                        }
                    },
                    {
                        label: "Grafana",
                        sub: "Dashboards",
                        tooltip: {
                            id: "Visualisasi kesehatan sistem, resource, dan performa layanan.",
                            en: "Visualizes system health, resource usage, and service performance."
                        }
                    }
                ]
            }
        }
    ];

    // =========================================================================
    // KAMUS i18n (ID & EN)
    // =========================================================================
    const I18N = {
        id: {
            skip: "Lewati ke konten utama",
            "nav.about": "Tentang",
            "nav.stack": "Kompetensi",
            "nav.experience": "Pengalaman",
            "nav.projects": "Proyek",
            "nav.credentials": "Kredensial",
            "nav.contact": "Kontak",
            "pipelineNav.aboutAria": "Lompat ke bagian Tentang",
            "pipelineNav.stackAria": "Lompat ke bagian Kompetensi",
            "pipelineNav.experienceAria": "Lompat ke bagian Pengalaman",
            "pipelineNav.projectsAria": "Lompat ke bagian Proyek",
            "pipelineNav.credentialsAria": "Lompat ke bagian Kredensial",
            "pipelineNav.contactAria": "Lompat ke bagian Kontak",
            "status.available": "Available for work",
            "hero.badge": "DevOps & Cloud Engineer · Web Dev Fluent",
            "hero.greeting": "Halo, saya",
            "hero.headline": "Membangun infrastruktur cloud yang skalabel, aman, dan otomatis — dengan pemahaman web development yang utuh.",
            "hero.desc": "Saya berfokus pada operasional Cloud & DevOps (AWS, Docker, Kubernetes, Terraform, CI/CD) sekaligus memahami alur pengembangan aplikasi web dari sisi kode hingga deployment ke produksi.",
            "hero.ctaPrimary": "Lihat Proyek",
            "hero.downloadCv": "Download CV",
            "metric.focusLabel": "Fokus Utama",
            "metric.focusVal": "Cloud & DevOps",
            "metric.bridgeLabel": "Nilai Tambah",
            "metric.bridgeVal": "Web Development",
            "metric.certLabel": "Sertifikasi",
            "portrait.status": "Siap Kolaborasi",
            "mini.certSub": "Berlaku s/d 4 Aug 2029",
            "mini.bridgeKicker": "DUAL SKILLSET",
            "mini.bridgeTitle": "Infra + Web Dev",
            "mini.bridgeSub": "Code to Production",
            "cli.label": "Masukkan perintah terminal",
            "cli.placeholder": "Ketik perintah ('help', 'projects', 'open infak', Tab autocomplete, ↑/↓ riwayat)...",
            "about.eyebrow": "ABOUT ME",
            "about.title": "Tentang Saya",
            "about.p1": "Perjalanan teknis saya berawal dari magang sebagai teknisi komputer dan printer pada 2025, menangani troubleshooting perangkat keras dan jaringan secara langsung.",
            "about.p2": "Ketertarikan pada sistem yang lebih terstruktur membawa saya mendalami cloud computing lewat program intensif AWS re/Start hingga meraih sertifikasi AWS Certified Cloud Practitioner pada 2026. Saat ini saya menargetkan karir sebagai Cloud & DevOps Engineer yang juga memahami pengembangan web, sehingga mampu menjembatani penulisan kode hingga otomasi operasional di produksi.",
            "about.statProjectsLabel": "Proyek Selesai",
            "about.statProjectsNote": "+ 2 template DevOps (TODO)",
            "about.statCertLabel": "Sertifikasi Resmi",
            "about.statYearsLabel": "Tahun Belajar & Praktik",
            "about.statYearsNote": "Hardware → Cloud & DevOps",
            "stack.eyebrow": "SYSTEM CAPABILITIES",
            "stack.title": "Kompetensi DevOps & Web Development",
            "stack.subtitle": "Kombinasi engineering infrastruktur cloud, otomasi pipeline, serta pemahaman fundamental pengembangan web modern — dilengkapi level pengalaman yang jujur.",
            "level.proven": "Dipakai di proyek",
            "level.learning": "Sedang dipelajari",
            "level.basic": "Dasar",
            "stack.learningBadge": "learning",
            "stack.c1Title": "Cloud & Infrastruktur",
            "stack.c1Desc": "Arsitektur layanan inti AWS, administrasi sistem Linux, konfigurasi jaringan, dan keamanan infrastruktur dasar.",
            "stack.c2Title": "Container & Orkestrasi",
            "stack.c2Desc": "Mengemas aplikasi agar konsisten di tiap environment dan mengelola deployment berbasis container.",
            "stack.c3Title": "CI/CD & Infrastructure as Code",
            "stack.c3Desc": "Otomatisasi build, testing, provisioning server, dan deployment pipeline agar rilis lebih cepat dan repeatable.",
            "stack.c4Title": "Scripting & Data",
            "stack.c4Desc": "Menulis skrip otomasi tugas sistem harian, integrasi CLI, version control, dan dasar relational database.",
            "stack.c5Title": "Web Development & Application Delivery",
            "stack.c5Desc": "Tidak hanya mengelola server dan pipeline — saya juga membangun antarmuka web modern dan memahami bagaimana aplikasi front-end maupun back-end berinteraksi dengan infrastruktur produksi.",
            "stack.c6Title": "Monitoring & Observability",
            "stack.c6Desc": "Pengumpulan metrik sistem dan aplikasi secara real-time serta visualisasi dashboard untuk memantau performa dan kesehatan layanan.",
            "stack.c7Title": "Reverse Proxy & Caching",
            "stack.c7Desc": "Pengaturan routing lalu lintas layanan di depan aplikasi serta pemanfaatan in-memory caching untuk mempercepat respons sistem.",
            "exp.eyebrow": "GIT LOG --GRAPH",
            "exp.title": "Pengalaman & Pelatihan",
            "exp.subtitle": "Perjalanan teknis dari fondasi perangkat keras hingga cloud engineering dan otomasi DevOps.",
            "exp.e1Date": "Juni 2026 – Sekarang",
            "exp.e1Role": "Cloud Computing Intensive Training",
            "exp.e1Desc": "Pelatihan intensif cloud computing mencakup administrasi Linux, pemrograman Python, networking, cloud security, relational databases, serta layanan inti AWS untuk kesiapan operasional cloud.",
            "exp.e2Date": "Tahun 2025",
            "exp.e2Title": "Teknisi Komputer dan Printer (Internship)",
            "exp.e2Role": "Hardware & Network Support",
            "exp.e2Desc": "Melakukan pemeliharaan, perbaikan perangkat keras komputer dan printer, serta troubleshooting jaringan dasar secara langsung di lingkungan operasional.",
            "proj.eyebrow": "DEPLOYMENTS & LABS",
            "proj.title": "Proyek & Arsitektur",
            "proj.subtitle": "Pilih kategori atau klik kartu proyek untuk melihat diagram arsitektur, masalah yang diselesaikan, dan solusi teknis.",
            "filter.all": "Semua",
            "proj.viewDetail": "Lihat detail & arsitektur",
            "proj.empty": "Belum ada proyek di kategori ini.",
            "status.live": "Live",
            "status.completed": "Selesai",
            "status.in-progress": "In Progress",
            "cred.eyebrow": "VERIFIED CREDENTIALS",
            "cred.title": "Sertifikasi Resmi",
            "cred.subtitle": "Kredensial cloud yang dapat diverifikasi langsung melalui portal resmi penerbit.",
            "cert.desc": "Sertifikasi resmi dari Amazon Web Services yang memvalidasi pemahaman fundamental arsitektur cloud, keamanan, layanan inti AWS, dan model operasional cloud.",
            "cert.holder": "Pemegang",
            "cert.holderNote": "(nama sesuai sertifikat PDF)",
            "cert.issued": "Terbit",
            "cert.expires": "Berlaku s/d",
            "cert.valId": "Validation ID",
            "cert.copy": "Salin",
            "cert.copied": "Tersalin",
            "cert.viewPdf": "Lihat Sertifikat (PDF)",
            "cert.verify": "Verifikasi AWS",
            "contact.eyebrow": "06 / MARI TERHUBUNG",
            "contact.title": "Terbuka untuk peluang DevOps, Cloud, & Web Engineering.",
            "contact.desc": "Ingin berdiskusi tentang otomasi infrastruktur, deployment container, atau proyek pengembangan web? Silakan hubungi saya melalui kanal berikut.",
            "modal.problem": "Masalah yang Diselesaikan",
            "modal.solution": "Solusi",
            "modal.architecture": "Diagram Arsitektur",
            "modal.archHint": "Hover / fokus komponen untuk detail",
            "modal.stack": "Tech Stack",
            "modal.impact": "Hasil / Dampak",
            "modal.repo": "Repository",
            "modal.demo": "Live Demo",
            "modal.todoRepo": "Repo (TODO)",
            "modal.todoDemo": "Demo (TODO)",
            "footer.status": "EOF · All systems operational"
        },
        en: {
            skip: "Skip to main content",
            "nav.about": "About",
            "nav.stack": "Capabilities",
            "nav.experience": "Experience",
            "nav.projects": "Projects",
            "nav.credentials": "Credentials",
            "nav.contact": "Contact",
            "pipelineNav.aboutAria": "Jump to About section",
            "pipelineNav.stackAria": "Jump to Capabilities section",
            "pipelineNav.experienceAria": "Jump to Experience section",
            "pipelineNav.projectsAria": "Jump to Projects section",
            "pipelineNav.credentialsAria": "Jump to Credentials section",
            "pipelineNav.contactAria": "Jump to Contact section",
            "status.available": "Available for work",
            "hero.badge": "DevOps & Cloud Engineer · Web Dev Fluent",
            "hero.greeting": "Hi, I'm",
            "hero.headline": "Building resilient, secure, and automated cloud infrastructure — backed by solid web development fluency.",
            "hero.desc": "Focused on Cloud & DevOps operations (AWS, Docker, Kubernetes, Terraform, CI/CD) while understanding modern web application architecture from source code to production delivery.",
            "hero.ctaPrimary": "Explore Projects",
            "hero.downloadCv": "Download CV",
            "metric.focusLabel": "Core Focus",
            "metric.focusVal": "Cloud & DevOps",
            "metric.bridgeLabel": "Edge",
            "metric.bridgeVal": "Web Development",
            "metric.certLabel": "Certification",
            "portrait.status": "Open to Collaborate",
            "mini.certSub": "Valid until 4 Aug 2029",
            "mini.bridgeKicker": "DUAL SKILLSET",
            "mini.bridgeTitle": "Infra + Web Dev",
            "mini.bridgeSub": "Code to Production",
            "cli.label": "Enter terminal command",
            "cli.placeholder": "Type command ('help', 'projects', 'open infak', Tab autocomplete, ↑/↓ history)...",
            "about.eyebrow": "ABOUT ME",
            "about.title": "About Me",
            "about.p1": "My technical journey started in 2025 as a Computer & Printer Technician intern, handling hands-on hardware maintenance and foundational network troubleshooting.",
            "about.p2": "An interest in structured, automated systems led me into cloud computing through the AWS re/Start program and earning the AWS Certified Cloud Practitioner credential in 2026. Today I'm targeting a Cloud & DevOps Engineer role while bringing solid web development skills to bridge code and production operations.",
            "about.statProjectsLabel": "Completed Project",
            "about.statProjectsNote": "+ 2 DevOps templates (TODO)",
            "about.statCertLabel": "Official Certification",
            "about.statYearsLabel": "Years Learning & Practice",
            "about.statYearsNote": "Hardware → Cloud & DevOps",
            "stack.eyebrow": "SYSTEM CAPABILITIES",
            "stack.title": "DevOps & Web Engineering Stack",
            "stack.subtitle": "Combining cloud infrastructure engineering, pipeline automation, and practical web development fundamentals — with honest experience levels.",
            "level.proven": "Used in project",
            "level.learning": "Currently learning",
            "level.basic": "Foundational",
            "stack.learningBadge": "learning",
            "stack.c1Title": "Cloud & Infrastructure",
            "stack.c1Desc": "AWS core services architecture, Linux system administration, network configuration, and foundational cloud security.",
            "stack.c2Title": "Containers & Orchestration",
            "stack.c2Desc": "Packaging applications consistently across environments and managing containerized workloads.",
            "stack.c3Title": "CI/CD & Infrastructure as Code",
            "stack.c3Desc": "Automating builds, testing, server provisioning, and deployment pipelines for repeatable releases.",
            "stack.c4Title": "Scripting & Data",
            "stack.c4Desc": "Writing system automation scripts, CLI tooling, Git workflows, and relational database fundamentals.",
            "stack.c5Title": "Web Development & Application Delivery",
            "stack.c5Desc": "Beyond managing servers and pipelines — I build clean web interfaces and understand how front-end and back-end apps behave in production.",
            "stack.c6Title": "Monitoring & Observability",
            "stack.c6Desc": "Real-time system and application metrics collection paired with dashboard visualization to monitor service health and performance.",
            "stack.c7Title": "Reverse Proxy & Caching",
            "stack.c7Desc": "Routing incoming service traffic in front of applications and leveraging in-memory caching to improve response speed.",
            "exp.eyebrow": "GIT LOG --GRAPH",
            "exp.title": "Experience & Training",
            "exp.subtitle": "Technical journey from hardware & networking foundations to cloud engineering and DevOps automation.",
            "exp.e1Date": "June 2026 – Present",
            "exp.e1Role": "Cloud Computing Intensive Training",
            "exp.e1Desc": "Intensive cloud computing program covering Linux administration, Python scripting, networking, cloud security, relational databases, and AWS core services.",
            "exp.e2Date": "2025",
            "exp.e2Title": "Computer & Printer Technician (Internship)",
            "exp.e2Role": "Hardware & Network Support",
            "exp.e2Desc": "Performed hands-on computer and printer maintenance, hardware repairs, and foundational network troubleshooting in day-to-day operations.",
            "proj.eyebrow": "DEPLOYMENTS & LABS",
            "proj.title": "Projects & Architecture",
            "proj.subtitle": "Filter by category or click any project card to inspect its architecture diagram, problem solved, and technical solution.",
            "filter.all": "All",
            "proj.viewDetail": "View details & architecture",
            "proj.empty": "No projects match this category yet.",
            "status.live": "Live",
            "status.completed": "Completed",
            "status.in-progress": "In Progress",
            "cred.eyebrow": "VERIFIED CREDENTIALS",
            "cred.title": "Official Certification",
            "cred.subtitle": "Cloud credential verifiable directly through the issuer's official verification portal.",
            "cert.desc": "Official Amazon Web Services certification validating foundational cloud architecture, security, AWS core services, and cloud operational practices.",
            "cert.holder": "Holder",
            "cert.holderNote": "(name as listed on certificate PDF)",
            "cert.issued": "Issued",
            "cert.expires": "Expires",
            "cert.valId": "Validation ID",
            "cert.copy": "Copy",
            "cert.copied": "Copied",
            "cert.viewPdf": "View Certificate (PDF)",
            "cert.verify": "Verify on AWS",
            "contact.eyebrow": "06 / CONNECT",
            "contact.title": "Open to DevOps, Cloud, & Web Engineering opportunities.",
            "contact.desc": "Want to collaborate on infrastructure automation, container deployments, or web engineering projects? Reach out through any channel below.",
            "modal.problem": "Problem Solved",
            "modal.solution": "Solution",
            "modal.architecture": "Architecture Diagram",
            "modal.archHint": "Hover / focus any component for details",
            "modal.stack": "Tech Stack",
            "modal.impact": "Results / Impact",
            "modal.repo": "Repository",
            "modal.demo": "Live Demo",
            "modal.todoRepo": "Repo (TODO)",
            "modal.todoDemo": "Demo (TODO)",
            "footer.status": "EOF · All systems operational"
        }
    };

    let currentLang = "id";
    let currentFilter = "all";
    let currentCmd = "whoami";
    let openProjectId = null;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // =========================================================================
    // 1. ROLE ROTATOR IN HERO
    // =========================================================================
    const roleRotatorEl = document.getElementById("role-rotator");
    const ROLES = ["Cloud Engineer", "DevOps Engineer", "Web Developer"];
    let roleIdx = 0;

    if (roleRotatorEl) {
        if (prefersReducedMotion.matches) {
            roleRotatorEl.textContent = ROLES.join(" · ");
        } else {
            setInterval(() => {
                roleRotatorEl.classList.add("is-swapping");
                setTimeout(() => {
                    roleIdx = (roleIdx + 1) % ROLES.length;
                    roleRotatorEl.textContent = ROLES[roleIdx];
                    roleRotatorEl.classList.remove("is-swapping");
                }, 220);
            }, 2600);
        }
    }

    // =========================================================================
    // 2. ABOUT PROJECT COUNT (Honest non-placeholder count)
    // =========================================================================
    const aboutProjectCountEl = document.getElementById("about-project-count");
    if (aboutProjectCountEl) {
        aboutProjectCountEl.textContent = String(PROJECTS.filter((p) => !p.isPlaceholder).length);
    }

    // =========================================================================
    // 3. LANGUAGE TOGGLE (ID / EN)
    // =========================================================================
    const langButtons = document.querySelectorAll(".lang-btn");

    function applyLanguage(lang) {
        currentLang = I18N[lang] ? lang : "id";
        document.documentElement.lang = currentLang;

        const dict = I18N[currentLang];
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (dict[key]) {
                el.setAttribute("placeholder", dict[key]);
            }
        });

        document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
            const key = el.getAttribute("data-i18n-aria");
            if (dict[key]) {
                el.setAttribute("aria-label", dict[key]);
            }
        });

        langButtons.forEach((btn) => {
            const isActive = btn.getAttribute("data-lang") === currentLang;
            btn.classList.toggle("active", isActive);
            btn.setAttribute("aria-pressed", String(isActive));
        });

        renderProjects(currentFilter, false);
        if (openProjectId) {
            populateProjectModal(openProjectId);
        }
        renderCliCommand(currentCmd);
    }

    langButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const nextLang = btn.getAttribute("data-lang");
            if (nextLang !== currentLang) {
                applyLanguage(nextLang);
            }
        });
    });

    // =========================================================================
    // 4. THEME TOGGLE WITH TRANSITION SUPPRESSION (better-ui)
    // =========================================================================
    const themeToggleBtn = document.getElementById("theme-toggle");

    function setThemeWithSuppression(nextTheme) {
        const style = document.createElement("style");
        style.append(document.createTextNode("*,*::before,*::after{transition:none !important}"));
        document.head.append(style);

        document.documentElement.setAttribute("data-theme", nextTheme);
        try {
            localStorage.setItem("fawwaz-theme", nextTheme);
        } catch (e) {}

        void document.body.offsetHeight;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => style.remove());
        });
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
            setThemeWithSuppression(currentTheme === "dark" ? "light" : "dark");
        });
    }

    // =========================================================================
    // 5. FILTERABLE PROJECTS GRID & ACCESSIBLE MODAL + SVG ARCHITECTURE
    // =========================================================================
    const projectsGrid = document.getElementById("projects-grid");
    const filterChips = document.querySelectorAll(".filter-chip");
    const projectModal = document.getElementById("project-modal");
    const modalBackdrop = document.getElementById("project-modal-backdrop");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    let lastFocusedElement = null;

    function getStatusBadgeClass(status) {
        if (status === "live" || status === "completed") return "badge-green";
        if (status === "in-progress") return "badge-amber";
        return "badge-cyan";
    }

    function renderProjects(filter, animate = true) {
        if (!projectsGrid) return;
        currentFilter = filter;
        const dict = I18N[currentLang];

        filterChips.forEach((chip) => {
            const active = chip.getAttribute("data-filter") === filter;
            chip.classList.toggle("active", active);
            chip.setAttribute("aria-pressed", String(active));
        });

        const filtered = filter === "all"
            ? PROJECTS
            : PROJECTS.filter((p) => p.tags.includes(filter));

        projectsGrid.replaceChildren();

        if (filtered.length === 0) {
            const empty = document.createElement("div");
            empty.className = "surface-card project-empty";
            empty.textContent = dict["proj.empty"];
            projectsGrid.append(empty);
            return;
        }

        filtered.forEach((project, idx) => {
            const card = document.createElement("button");
            card.type = "button";
            card.className = "surface-card project-card";
            if (animate) {
                card.classList.add("is-entering");
                card.style.animationDelay = `${idx * 55}ms`;
            }
            card.setAttribute("data-project-id", project.id);
            card.setAttribute("aria-label", `${project.title[currentLang]} — ${dict["proj.viewDetail"]}`);

            const topMeta = document.createElement("div");
            topMeta.className = "card-top-meta";

            const statusBadge = document.createElement("span");
            statusBadge.className = `badge-pill ${getStatusBadgeClass(project.status)} mono`;
            const dot = document.createElement("span");
            dot.className = "status-dot";
            dot.setAttribute("aria-hidden", "true");
            const statusText = document.createElement("span");
            statusText.textContent = dict[`status.${project.status}`] || project.status;
            statusBadge.append(dot, statusText);
            topMeta.append(statusBadge);

            if (project.isPlaceholder) {
                const todoPill = document.createElement("span");
                todoPill.className = "badge-pill badge-todo mono";
                todoPill.textContent = "TODO";
                topMeta.append(todoPill);
            }

            const title = document.createElement("h3");
            title.className = "showcase-title";
            title.textContent = project.title[currentLang];

            const desc = document.createElement("p");
            desc.className = "showcase-desc";
            desc.textContent = project.summary[currentLang];

            const tagList = document.createElement("ul");
            tagList.className = "tag-list";
            project.techStack.forEach((tech) => {
                const li = document.createElement("li");
                li.className = "tech-tag";
                li.textContent = tech;
                tagList.append(li);
            });

            const footer = document.createElement("div");
            footer.className = "project-card-footer mono";
            const actionLabel = document.createElement("span");
            actionLabel.textContent = dict["proj.viewDetail"];
            const arrow = document.createElement("span");
            arrow.setAttribute("aria-hidden", "true");
            arrow.textContent = "→";
            footer.append(actionLabel, arrow);

            card.append(topMeta, title, desc, tagList, footer);
            card.addEventListener("click", () => openProjectModal(project.id, card));
            projectsGrid.append(card);
        });
    }

    filterChips.forEach((chip, idx) => {
        chip.addEventListener("click", () => {
            renderProjects(chip.getAttribute("data-filter"), true);
        });

        chip.addEventListener("keydown", (event) => {
            const arr = Array.from(filterChips);
            let next = null;
            if (event.key === "ArrowRight") {
                next = arr[(idx + 1) % arr.length];
            } else if (event.key === "ArrowLeft") {
                next = arr[(idx - 1 + arr.length) % arr.length];
            } else if (event.key === "Home") {
                next = arr[0];
            } else if (event.key === "End") {
                next = arr[arr.length - 1];
            }
            if (next) {
                event.preventDefault();
                next.focus();
                renderProjects(next.getAttribute("data-filter"), true);
            }
        });
    });

    function buildArchitectureSvg(project) {
        const container = document.getElementById("modal-arch-svg");
        const tooltipEl = document.getElementById("modal-arch-tooltip");
        if (!container || !tooltipEl) return;

        container.replaceChildren();
        const nodes = project.architecture.nodes;
        const boxW = 132;
        const boxH = 58;
        const gap = 42;
        const padX = 16;
        const padY = 20;
        const totalW = padX * 2 + nodes.length * boxW + (nodes.length - 1) * gap;
        const totalH = boxH + padY * 2;

        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", `0 0 ${totalW} ${totalH}`);
        svg.setAttribute("class", "arch-svg");
        svg.setAttribute("role", "img");
        svg.setAttribute("aria-label", `${I18N[currentLang]["modal.architecture"]}: ${project.title[currentLang]}`);

        const defs = document.createElementNS(svgNS, "defs");
        const marker = document.createElementNS(svgNS, "marker");
        marker.setAttribute("id", "arch-arrow");
        marker.setAttribute("viewBox", "0 0 10 10");
        marker.setAttribute("refX", "8");
        marker.setAttribute("refY", "5");
        marker.setAttribute("markerWidth", "6");
        marker.setAttribute("markerHeight", "6");
        marker.setAttribute("orient", "auto-start-reverse");

        const arrowPath = document.createElementNS(svgNS, "path");
        arrowPath.setAttribute("d", "M 0 1 L 10 5 L 0 9 z");
        arrowPath.setAttribute("fill", "var(--accent-green)");
        marker.append(arrowPath);
        defs.append(marker);
        svg.append(defs);

        const updateTooltip = (nodeIndex) => {
            const node = nodes[nodeIndex];
            tooltipEl.textContent = `${node.label}: ${node.tooltip[currentLang]}`;
            svg.querySelectorAll(".arch-node").forEach((g, idx) => {
                g.classList.toggle("is-active", idx === nodeIndex);
            });
        };

        nodes.forEach((node, idx) => {
            const x = padX + idx * (boxW + gap);
            const y = padY;

            if (idx < nodes.length - 1) {
                const x1 = x + boxW + 2;
                const x2 = x + boxW + gap - 4;
                const cy = y + boxH / 2;

                const line = document.createElementNS(svgNS, "line");
                line.setAttribute("x1", String(x1));
                line.setAttribute("y1", String(cy));
                line.setAttribute("x2", String(x2));
                line.setAttribute("y2", String(cy));
                line.setAttribute("class", "arch-flow-line");
                line.setAttribute("marker-end", "url(#arch-arrow)");
                svg.append(line);
            }

            const g = document.createElementNS(svgNS, "g");
            g.setAttribute("class", "arch-node");
            g.setAttribute("tabindex", "0");
            g.setAttribute("role", "button");
            g.setAttribute("aria-label", `${node.label} — ${node.tooltip[currentLang]}`);

            const rect = document.createElementNS(svgNS, "rect");
            rect.setAttribute("x", String(x));
            rect.setAttribute("y", String(y));
            rect.setAttribute("width", String(boxW));
            rect.setAttribute("height", String(boxH));
            rect.setAttribute("rx", "10");
            rect.setAttribute("class", "arch-node-box");

            const title = document.createElementNS(svgNS, "text");
            title.setAttribute("x", String(x + boxW / 2));
            title.setAttribute("y", String(y + 25));
            title.setAttribute("text-anchor", "middle");
            title.setAttribute("class", "arch-node-title");
            title.textContent = node.label;

            const sub = document.createElementNS(svgNS, "text");
            sub.setAttribute("x", String(x + boxW / 2));
            sub.setAttribute("y", String(y + 42));
            sub.setAttribute("text-anchor", "middle");
            sub.setAttribute("class", "arch-node-sub");
            sub.textContent = node.sub;

            g.append(rect, title, sub);
            g.addEventListener("mouseenter", () => updateTooltip(idx));
            g.addEventListener("focus", () => updateTooltip(idx));
            g.addEventListener("click", () => updateTooltip(idx));
            svg.append(g);
        });

        container.append(svg);
        updateTooltip(0);
    }

    function populateProjectModal(projectId) {
        const project = PROJECTS.find((p) => p.id === projectId);
        if (!project) return;
        const dict = I18N[currentLang];

        const statusBadge = document.getElementById("modal-status-badge");
        const todoBadge = document.getElementById("modal-todo-badge");
        const titleEl = document.getElementById("modal-project-title");
        const summaryEl = document.getElementById("modal-project-summary");
        const problemEl = document.getElementById("modal-problem");
        const solutionEl = document.getElementById("modal-solution");
        const impactEl = document.getElementById("modal-impact");
        const stackEl = document.getElementById("modal-tech-stack");
        const repoBtn = document.getElementById("modal-repo-btn");
        const demoBtn = document.getElementById("modal-demo-btn");
        const repoLabel = document.getElementById("modal-repo-label");
        const demoLabel = document.getElementById("modal-demo-label");

        if (statusBadge) {
            statusBadge.className = `badge-pill ${getStatusBadgeClass(project.status)} mono`;
            statusBadge.textContent = dict[`status.${project.status}`] || project.status;
        }
        if (todoBadge) {
            todoBadge.hidden = !project.isPlaceholder;
        }
        if (titleEl) titleEl.textContent = project.title[currentLang];
        if (summaryEl) summaryEl.textContent = project.summary[currentLang];
        if (problemEl) problemEl.textContent = project.problem[currentLang];
        if (solutionEl) solutionEl.textContent = project.solution[currentLang];
        if (impactEl) impactEl.textContent = project.impact[currentLang];

        if (stackEl) {
            stackEl.replaceChildren();
            project.techStack.forEach((tech) => {
                const li = document.createElement("li");
                li.className = "tech-tag";
                li.textContent = tech;
                stackEl.append(li);
            });
        }

        const repoIsTodo = !project.repoUrl || project.repoUrl.startsWith("#TODO");
        const demoIsTodo = !project.demoUrl || project.demoUrl.startsWith("#TODO");

        if (repoBtn && repoLabel) {
            repoBtn.href = repoIsTodo ? "#projects" : project.repoUrl;
            repoBtn.classList.toggle("btn-disabled-todo", repoIsTodo);
            repoBtn.setAttribute("aria-disabled", String(repoIsTodo));
            if (repoIsTodo) {
                repoBtn.removeAttribute("target");
                repoLabel.textContent = dict["modal.todoRepo"];
            } else {
                repoBtn.target = "_blank";
                repoLabel.textContent = dict["modal.repo"];
            }
        }

        if (demoBtn && demoLabel) {
            demoBtn.href = demoIsTodo ? "#projects" : project.demoUrl;
            demoBtn.classList.toggle("btn-disabled-todo", demoIsTodo);
            demoBtn.setAttribute("aria-disabled", String(demoIsTodo));
            if (demoIsTodo) {
                demoBtn.removeAttribute("target");
                demoLabel.textContent = dict["modal.todoDemo"];
            } else {
                demoBtn.target = "_blank";
                demoLabel.textContent = dict["modal.demo"];
            }
        }

        buildArchitectureSvg(project);
    }

    function openProjectModal(projectId, triggerEl = null) {
        if (!projectModal || !modalBackdrop) return;
        const project = PROJECTS.find((p) => p.id === projectId);
        if (!project) return;

        lastFocusedElement = triggerEl || document.activeElement;
        openProjectId = projectId;
        populateProjectModal(projectId);

        modalBackdrop.hidden = false;
        projectModal.hidden = false;
        projectModal.classList.add("is-open");
        projectModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        if (modalCloseBtn) {
            modalCloseBtn.focus();
        }
    }

    function closeProjectModal() {
        if (!projectModal || !modalBackdrop || projectModal.hidden) return;
        projectModal.classList.remove("is-open");
        projectModal.setAttribute("aria-hidden", "true");
        projectModal.hidden = true;
        modalBackdrop.hidden = true;
        document.body.style.overflow = "";
        openProjectId = null;

        if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
            lastFocusedElement.focus({ preventScroll: true });
        }
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", closeProjectModal);
    }
    ["modal-repo-btn", "modal-demo-btn"].forEach((btnId) => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener("click", (event) => {
                if (btn.getAttribute("aria-disabled") === "true") {
                    event.preventDefault();
                }
            });
        }
    });
    if (projectModal) {
        projectModal.addEventListener("click", (event) => {
            if (event.target === projectModal) {
                closeProjectModal();
            }
        });

        projectModal.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeProjectModal();
                return;
            }
            if (event.key !== "Tab") return;

            const focusable = Array.from(
                projectModal.querySelectorAll(
                    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
                )
            ).filter((el) => !el.hidden && el.offsetParent !== null);

            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        });
    }

    // =========================================================================
    // 7. EXPANDED INTERACTIVE CLI (History, Tab Autocomplete, Suggestions, Open)
    // =========================================================================
    const cliOutput = document.getElementById("cli-output");
    const cliForm = document.getElementById("cli-form");
    const cliInput = document.getElementById("cli-input");
    const cliPresets = document.querySelectorAll(".cli-preset");

    const CLI_COMMANDS = [
        "help",
        "whoami",
        "stack",
        "cert",
        "projects",
        "open",
        "contact",
        "cat resume",
        "theme dark",
        "theme light",
        "lang id",
        "lang en",
        "clear"
    ];
    const cmdHistory = [];
    let historyCursor = 0;

    function levenshtein(a, b) {
        const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
        for (let i = 0; i <= a.length; i++) dp[i][0] = i;
        for (let j = 0; j <= b.length; j++) dp[0][j] = j;
        for (let i = 1; i <= a.length; i++) {
            for (let j = 1; j <= b.length; j++) {
                const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
            }
        }
        return dp[a.length][b.length];
    }

    function findClosestCommand(input) {
        let best = null;
        let bestDist = Infinity;
        CLI_COMMANDS.forEach((cmd) => {
            const d = levenshtein(input, cmd);
            if (d < bestDist) {
                bestDist = d;
                best = cmd;
            }
        });
        return bestDist <= 3 ? best : null;
    }

    function getCliLines(cmdName) {
        const isId = currentLang === "id";
        if (cmdName === "whoami") {
            return [
                { type: "cmd", text: "$ whoami" },
                { type: "kv", key: isId ? "nama    :" : "name    :", val: "Fawwaz Fadel Rahman" },
                { type: "kv", key: isId ? "peran   :" : "role    :", val: "Cloud & DevOps Engineer (Web Dev Fluent)" },
                { type: "kv", key: "status  :", val: isId ? "available_for_work — siap berkontribusi" : "available_for_work — ready to contribute" }
            ];
        }
        if (cmdName === "stack") {
            return [
                { type: "cmd", text: "$ stack --all" },
                { type: "kv", key: "cloud   :", val: "AWS (CCP Certified), Linux, Networking, Security" },
                { type: "kv", key: "ops     :", val: "Docker, Kubernetes, Terraform, Ansible, Jenkins, GitHub Actions" },
                { type: "kv", key: "monitor :", val: "Prometheus, Grafana, Reverse Proxy, Redis" },
                { type: "kv", key: "code    :", val: "Bash, Python, Git, HTML5, CSS3, JavaScript" }
            ];
        }
        if (cmdName === "cert") {
            return [
                { type: "cmd", text: "$ aws --verify-credential" },
                { type: "kv", key: isId ? "sertifikat :" : "credential :", val: "AWS Certified Cloud Practitioner (Fawwaz Fr)" },
                { type: "kv", key: isId ? "masa_aktif :" : "validity   :", val: "4 Aug 2026 -> 4 Aug 2029" },
                { type: "kv", key: isId ? "validasi   :" : "verify_id  :", val: "7ebc4ecc7d044e519d00e1e18565bc2b (aws.amazon.com/verification)" }
            ];
        }
        if (cmdName === "projects") {
            const rows = [{ type: "cmd", text: "$ ls -la ./projects" }];
            PROJECTS.forEach((p) => {
                rows.push({
                    type: "kv",
                    key: `${p.id} :`,
                    val: `[${p.status}] ${p.title[currentLang]}`
                });
            });
            rows.push({
                type: "muted",
                text: isId
                    ? "Tip: ketik 'open <id>' (contoh: 'open infak-management-system') untuk membuka detail."
                    : "Tip: type 'open <id>' (e.g. 'open infak-management-system') to inspect project details."
            });
            return rows;
        }
        if (cmdName === "contact") {
            return [
                { type: "cmd", text: "$ cat ./contact.txt" },
                { type: "kv", key: "github    :", val: "github.com/Fawwazfara" },
                { type: "kv", key: "linkedin  :", val: "linkedin.com/in/fawwaz-fadel-rahman-430360310" },
                { type: "kv", key: "instagram :", val: "instagram.com/wwaz.py" }
            ];
        }
        if (cmdName === "cat resume") {
            return [
                { type: "cmd", text: "$ cat resume.md" },
                { type: "kv", key: isId ? "profil      :" : "profile     :", val: "Fawwaz Fadel Rahman — Cloud & DevOps Engineer · Web Dev Fluent" },
                { type: "kv", key: isId ? "pelatihan   :" : "training    :", val: "AWS re/Start Program (Jun 2026 – Present)" },
                { type: "kv", key: isId ? "pengalaman  :" : "experience  :", val: isId ? "Teknisi Komputer & Printer Internship (2025)" : "Computer & Printer Technician Internship (2025)" },
                { type: "kv", key: isId ? "sertifikasi :" : "credential  :", val: "AWS Certified Cloud Practitioner (2026–2029)" }
            ];
        }
        if (cmdName === "help") {
            return [
                { type: "cmd", text: "$ help" },
                {
                    type: "muted",
                    text: isId
                        ? "Perintah: help, whoami, stack, cert, projects, open <id>, contact, cat resume, theme dark|light, lang id|en, clear"
                        : "Commands: help, whoami, stack, cert, projects, open <id>, contact, cat resume, theme dark|light, lang id|en, clear"
                },
                {
                    type: "muted",
                    text: isId
                        ? "Shortcut: Tab untuk autocomplete · Panah ↑/↓ untuk riwayat perintah."
                        : "Shortcuts: Tab to autocomplete · ↑/↓ arrows for command history."
                }
            ];
        }
        return null;
    }

    function renderCliLines(lines) {
        if (!cliOutput) return;
        cliOutput.replaceChildren();

        lines.forEach((item, index) => {
            const row = document.createElement("div");
            row.style.setProperty("--line-index", String(index));
            if (item.type === "cmd") {
                row.className = "cli-line-cmd cli-line-enter";
                row.textContent = item.text;
            } else if (item.type === "kv") {
                row.className = "cli-line-enter";
                const keySpan = document.createElement("span");
                keySpan.className = "cli-line-key";
                keySpan.textContent = item.key + " ";

                const valSpan = document.createElement("span");
                valSpan.className = "cli-line-val";
                valSpan.textContent = item.val;

                row.append(keySpan, valSpan);
            } else if (item.type === "warn") {
                row.className = "cli-line-warn cli-line-enter";
                row.textContent = item.text;
            } else {
                row.className = "cli-line-muted cli-line-enter";
                row.textContent = item.text;
            }
            cliOutput.append(row);
        });
    }

    function renderCliCommand(cmdName) {
        currentCmd = cmdName;
        cliPresets.forEach((btn) => {
            const match = btn.getAttribute("data-cmd") === cmdName;
            btn.classList.toggle("active", match);
            btn.setAttribute("aria-pressed", String(match));
        });

        if (cmdName === "clear") {
            if (cliOutput) cliOutput.replaceChildren();
            return;
        }

        const lines = getCliLines(cmdName);
        if (lines) {
            renderCliLines(lines);
        }
    }

    cliPresets.forEach((btn) => {
        btn.addEventListener("click", () => {
            renderCliCommand(btn.getAttribute("data-cmd"));
        });
    });

    if (cliForm && cliInput) {
        cliInput.addEventListener("keydown", (event) => {
            if (event.key === "ArrowUp") {
                if (cmdHistory.length === 0) return;
                event.preventDefault();
                historyCursor = Math.max(0, historyCursor - 1);
                cliInput.value = cmdHistory[historyCursor];
            } else if (event.key === "ArrowDown") {
                if (cmdHistory.length === 0) return;
                event.preventDefault();
                historyCursor = Math.min(cmdHistory.length, historyCursor + 1);
                cliInput.value = historyCursor === cmdHistory.length ? "" : cmdHistory[historyCursor];
            } else if (event.key === "Tab") {
                event.preventDefault();
                const val = cliInput.value.trim().toLowerCase();
                if (!val) return;
                if (val.startsWith("open ")) {
                    const partial = val.slice(5).trim();
                    const matchProj = PROJECTS.find((p) => p.id.startsWith(partial));
                    if (matchProj) cliInput.value = `open ${matchProj.id}`;
                    return;
                }
                const matchCmd = CLI_COMMANDS.find((c) => c.startsWith(val));
                if (matchCmd) cliInput.value = matchCmd;
            }
        });

        cliForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const rawOriginal = cliInput.value.trim();
            const raw = rawOriginal.toLowerCase();
            if (!raw) return;

            cmdHistory.push(rawOriginal);
            historyCursor = cmdHistory.length;

            if (raw.startsWith("open ")) {
                const target = raw.slice(5).trim();
                const match = PROJECTS.find(
                    (p) => p.id === target || p.id.includes(target) || p.title[currentLang].toLowerCase().includes(target)
                );
                if (match) {
                    renderCliLines([
                        { type: "cmd", text: `$ ${rawOriginal}` },
                        {
                            type: "muted",
                            text: currentLang === "id"
                                ? `Membuka detail proyek: ${match.title[currentLang]}...`
                                : `Opening project details: ${match.title[currentLang]}...`
                        }
                    ]);
                    openProjectModal(match.id, cliInput);
                } else {
                    renderCliLines([
                        { type: "cmd", text: `$ ${rawOriginal}` },
                        {
                            type: "warn",
                            text: currentLang === "id"
                                ? `Proyek '${target}' tidak ditemukan. Jalankan 'projects' untuk melihat daftar ID.`
                                : `Project '${target}' not found. Run 'projects' to list available IDs.`
                        }
                    ]);
                }
                cliInput.value = "";
                return;
            }

            if (raw === "theme dark" || raw === "theme light") {
                const targetTheme = raw.split(" ")[1];
                setThemeWithSuppression(targetTheme);
                renderCliLines([
                    { type: "cmd", text: `$ ${rawOriginal}` },
                    {
                        type: "muted",
                        text: currentLang === "id"
                            ? `Tema diubah ke mode ${targetTheme}.`
                            : `Theme switched to ${targetTheme} mode.`
                    }
                ]);
                cliInput.value = "";
                return;
            }

            if (raw === "lang id" || raw === "lang en") {
                const targetLang = raw.split(" ")[1];
                applyLanguage(targetLang);
                renderCliLines([
                    { type: "cmd", text: `$ ${rawOriginal}` },
                    {
                        type: "muted",
                        text: targetLang === "id"
                            ? "Bahasa diubah ke Indonesia (ID)."
                            : "Language switched to English (EN)."
                    }
                ]);
                cliInput.value = "";
                return;
            }

            const aliasMap = {
                "aws": "cert",
                "aws --verify": "cert",
                "aws-cert": "cert",
                "stack --all": "stack",
                "skills": "stack",
                "ls ./projects": "projects",
                "project": "projects",
                "resume": "cat resume"
            };
            const normalized = aliasMap[raw] || raw;

            if (normalized === "clear") {
                renderCliCommand("clear");
            } else if (getCliLines(normalized)) {
                renderCliCommand(normalized);
            } else {
                const suggestion = findClosestCommand(raw);
                const msg = suggestion
                    ? (currentLang === "id"
                        ? `command not found: '${rawOriginal}'. Mungkin maksud Anda '${suggestion}'? (ketik 'help')`
                        : `command not found: '${rawOriginal}'. Did you mean '${suggestion}'? (type 'help')`)
                    : (currentLang === "id"
                        ? `command not found: '${rawOriginal}'. Ketik 'help' untuk melihat daftar perintah.`
                        : `command not found: '${rawOriginal}'. Type 'help' to see available commands.`);
                renderCliLines([
                    { type: "cmd", text: `$ ${rawOriginal}` },
                    { type: "warn", text: msg }
                ]);
                cliPresets.forEach((btn) => {
                    btn.classList.remove("active");
                    btn.setAttribute("aria-pressed", "false");
                });
            }

            cliInput.value = "";
        });
    }

    // =========================================================================
    // 8. COPY AWS VALIDATION ID (better-ui icon cross-fade)
    // =========================================================================
    const copyBtn = document.getElementById("copy-cert-id");
    const certIdEl = document.getElementById("aws-validation-id");
    let copyTimer = null;

    if (copyBtn && certIdEl) {
        copyBtn.addEventListener("click", async () => {
            const text = certIdEl.textContent.trim();
            try {
                await navigator.clipboard.writeText(text);
            } catch (err) {
                const tmp = document.createElement("textarea");
                tmp.value = text;
                tmp.setAttribute("readonly", "");
                tmp.style.position = "absolute";
                tmp.style.left = "-9999px";
                document.body.append(tmp);
                tmp.select();
                document.execCommand("copy");
                tmp.remove();
            }

            const labelEl = copyBtn.querySelector(".copy-label");
            copyBtn.classList.add("is-copied");
            if (labelEl) {
                labelEl.textContent = I18N[currentLang]["cert.copied"];
            }

            clearTimeout(copyTimer);
            copyTimer = setTimeout(() => {
                copyBtn.classList.remove("is-copied");
                if (labelEl) {
                    labelEl.textContent = I18N[currentLang]["cert.copy"];
                }
            }, 2000);
        });
    }

    // =========================================================================
    // 9. MOBILE NAVIGATION DRAWER
    // =========================================================================
    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const mobileClose = document.getElementById("mobile-menu-close");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const drawerBackdrop = document.getElementById("drawer-backdrop");
    const drawerLinks = document.querySelectorAll(".drawer-link");

    function setDrawerOpen(isOpen, restoreFocus = true) {
        if (!mobileDrawer || !drawerBackdrop || !mobileToggle) return;
        mobileDrawer.classList.toggle("is-open", isOpen);
        mobileDrawer.setAttribute("aria-hidden", String(!isOpen));
        mobileToggle.setAttribute("aria-expanded", String(isOpen));
        drawerBackdrop.hidden = !isOpen;
        document.body.style.overflow = isOpen ? "hidden" : "";

        if (isOpen && mobileClose) {
            mobileClose.focus();
        } else if (!isOpen && restoreFocus) {
            mobileToggle.focus({ preventScroll: true });
        }
    }

    if (mobileToggle) mobileToggle.addEventListener("click", () => setDrawerOpen(true));
    if (mobileClose) mobileClose.addEventListener("click", () => setDrawerOpen(false));
    if (drawerBackdrop) drawerBackdrop.addEventListener("click", () => setDrawerOpen(false));
    drawerLinks.forEach((link) => {
        link.addEventListener("click", () => setDrawerOpen(false, false));
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && mobileDrawer && mobileDrawer.classList.contains("is-open")) {
            setDrawerOpen(false);
        }
    });

    // =========================================================================
    // 10. CURSOR SPOTLIGHT (Hover-capable fine pointers, reduced-motion safe)
    // =========================================================================
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !prefersReducedMotion.matches) {
        document.addEventListener(
            "pointermove",
            (event) => {
                const card = event.target.closest(".surface-card");
                if (!card) return;
                const rect = card.getBoundingClientRect();
                card.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
                card.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
            },
            { passive: true }
        );
    }

    // =========================================================================
    // 10. NAVBAR PIPELINE PROGRESS, SCROLL-DRAWN TIMELINE, SMOOTH SCROLL & REVEAL
    // =========================================================================
    const scrollProgressEl = document.getElementById("scroll-progress");
    const pipelineNodes = Array.from(document.querySelectorAll(".pipeline-node"));
    const navLinks = Array.from(document.querySelectorAll(".nav-link"));
    const pipelineSections = pipelineNodes
        .map((node) => ({
            id: node.getAttribute("data-target"),
            node,
            section: document.getElementById(node.getAttribute("data-target"))
        }))
        .filter((item) => item.section);

    const timelineList = document.getElementById("experience-timeline");
    const timelineTrackBg = document.getElementById("timeline-track-bg");
    const timelineTrackFill = document.getElementById("timeline-track-fill");
    const timelineItems = Array.from(document.querySelectorAll("#experience-timeline .timeline-item"));
    let timelineStartOffset = 0;
    let timelineSpanPx = 0;

    function measureTimelineTrack() {
        if (!timelineList || !timelineTrackBg || timelineItems.length === 0) return;
        const firstNode = timelineItems[0].querySelector(".timeline-node");
        const lastNode = timelineItems[timelineItems.length - 1].querySelector(".timeline-node");
        if (!firstNode || !lastNode) return;

        const listRect = timelineList.getBoundingClientRect();
        const firstRect = firstNode.getBoundingClientRect();
        const lastRect = lastNode.getBoundingClientRect();

        timelineStartOffset = firstRect.top - listRect.top + firstRect.height / 2;
        const endOffset = lastRect.top - listRect.top + lastRect.height / 2;
        timelineSpanPx = Math.max(0, endOffset - timelineStartOffset);

        timelineTrackBg.style.top = `${timelineStartOffset}px`;
        timelineTrackBg.style.height = `${timelineSpanPx}px`;
    }

    function updateExperienceTimeline() {
        if (!timelineList || timelineItems.length === 0) return;

        if (prefersReducedMotion.matches) {
            if (timelineTrackFill) {
                timelineTrackFill.style.setProperty("--timeline-progress", "1");
            }
            timelineItems.forEach((item) => {
                const node = item.querySelector(".timeline-node");
                const card = item.querySelector(".timeline-card");
                if (node) node.classList.add("is-lit");
                if (card) card.classList.add("is-card-visible");
            });
            return;
        }

        const listRect = timelineList.getBoundingClientRect();
        const triggerViewportY = window.innerHeight * 0.72;
        const trackTopViewport = listRect.top + timelineStartOffset;
        const drawnPx = triggerViewportY - trackTopViewport;
        const ratio = timelineSpanPx > 0 ? Math.min(1, Math.max(0, drawnPx / timelineSpanPx)) : (drawnPx >= 0 ? 1 : 0);

        if (timelineTrackFill) {
            timelineTrackFill.style.setProperty("--timeline-progress", ratio.toFixed(4));
        }

        timelineItems.forEach((item) => {
            const node = item.querySelector(".timeline-node");
            const card = item.querySelector(".timeline-card");
            if (!node) return;
            const nodeCenterViewport = node.getBoundingClientRect().top + node.offsetHeight / 2;
            const reached = nodeCenterViewport <= triggerViewportY + 12;
            node.classList.toggle("is-lit", reached);
            if (card && reached) {
                card.classList.add("is-card-visible");
            }
        });
    }

    function updateNavbarPipeline() {
        if (pipelineSections.length === 0) return;
        const doc = document.documentElement;
        const maxScroll = Math.max(0, doc.scrollHeight - window.innerHeight);
        const y = window.scrollY;
        const offset = 150;

        // Build monotonic anchor scroll positions for each section
        const anchors = pipelineSections.map((item, idx) => {
            if (idx === pipelineSections.length - 1) {
                return Math.min(maxScroll, Math.max(0, item.section.offsetTop - offset));
            }
            return Math.max(0, item.section.offsetTop - offset);
        });

        let activeIndex = -1;
        let fillRatio = 0;
        const n = anchors.length;

        if (y >= maxScroll - 8 && maxScroll > 0) {
            activeIndex = n - 1;
            fillRatio = 1;
        } else if (y < anchors[0]) {
            activeIndex = -1;
            fillRatio = 0;
        } else {
            for (let i = 0; i < n; i++) {
                const start = anchors[i];
                const end = i < n - 1 ? anchors[i + 1] : Math.max(start + 1, maxScroll);
                if (y >= start && (i === n - 1 || y < end)) {
                    activeIndex = i;
                    if (n > 1) {
                        const local = end > start ? Math.min(1, Math.max(0, (y - start) / (end - start))) : 0;
                        fillRatio = i === n - 1 ? 1 : (i + local) / (n - 1);
                    } else {
                        fillRatio = 1;
                    }
                    break;
                }
            }
        }

        if (scrollProgressEl) {
            scrollProgressEl.style.setProperty("--scroll-progress", Math.min(1, Math.max(0, fillRatio)).toFixed(4));
        }

        pipelineSections.forEach((item, idx) => {
            const isPassed = activeIndex > idx;
            const isActive = activeIndex === idx;
            const isUpcoming = activeIndex < idx;

            item.node.classList.toggle("is-passed", isPassed);
            item.node.classList.toggle("is-active", isActive);
            item.node.classList.toggle("is-upcoming", isUpcoming);
            item.node.setAttribute("aria-current", isActive ? "true" : "false");

            navLinks.forEach((link) => {
                if (link.getAttribute("href") === `#${item.id}`) {
                    link.classList.toggle("is-active", isActive);
                }
            });
        });
    }

    function smoothScrollToTarget(targetEl) {
        const navOffset = 98;
        const targetY = Math.max(0, targetEl.getBoundingClientRect().top + window.scrollY - navOffset);

        if (prefersReducedMotion.matches) {
            window.scrollTo({ top: targetY, behavior: "instant" });
            return;
        }

        const startY = window.scrollY;
        const distance = targetY - startY;
        if (Math.abs(distance) < 2) return;

        const duration = Math.min(620, Math.max(320, Math.abs(distance) * 0.25));
        const startTime = performance.now();
        const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

        function step(now) {
            const elapsed = now - startTime;
            const progress = Math.min(1, elapsed / duration);
            window.scrollTo({ top: startY + distance * easeOutQuart(progress), behavior: "instant" });
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }

    pipelineNodes.forEach((node) => {
        node.addEventListener("click", () => {
            const id = node.getAttribute("data-target");
            const target = id ? document.getElementById(id) : null;
            if (!target) return;
            smoothScrollToTarget(target);
            if (history.replaceState) {
                history.replaceState(null, "", `#${id}`);
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const href = anchor.getAttribute("href");
            if (!href || href === "#" || href.startsWith("#TODO")) {
                if (href && href.startsWith("#TODO")) {
                    event.preventDefault();
                }
                return;
            }
            const target = document.querySelector(href);
            if (!target) return;
            event.preventDefault();
            smoothScrollToTarget(target);
            if (history.replaceState) {
                history.replaceState(null, "", href);
            }
        });
    });

    let scrollTicking = false;
    const onScrollOrResize = () => {
        if (!scrollTicking) {
            scrollTicking = true;
            requestAnimationFrame(() => {
                scrollTicking = false;
                updateNavbarPipeline();
                updateExperienceTimeline();
            });
        }
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", () => {
        measureTimelineTrack();
        onScrollOrResize();
    });

    const revealTargets = document.querySelectorAll(
        ".cli-panel, .section-header, .about-card, .about-stat-card, .stack-card, .cert-card, .contact-banner"
    );

    revealTargets.forEach((el) => el.classList.add("reveal-item"));

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                let batchIndex = 0;
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const el = entry.target;
                    const delayMs = prefersReducedMotion.matches ? 0 : Math.min(batchIndex, 5) * 80;
                    batchIndex += 1;

                    el.style.setProperty("--reveal-delay", `${delayMs}ms`);
                    el.classList.remove("is-pending");
                    el.classList.add("is-revealed");

                    setTimeout(() => {
                        el.classList.add("is-settled");
                    }, delayMs + 520);

                    observer.unobserve(el);
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        revealTargets.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top > window.innerHeight * 0.92) {
                el.classList.add("is-pending");
                revealObserver.observe(el);
            } else {
                el.classList.add("is-revealed", "is-settled");
            }
        });
    } else {
        revealTargets.forEach((el) => el.classList.add("is-revealed", "is-settled"));
    }

    window.addEventListener("load", () => {
        measureTimelineTrack();
        updateNavbarPipeline();
        updateExperienceTimeline();
    });

    // Initialize default language, projects, CLI, pipeline progress & timeline
    applyLanguage("id");
    measureTimelineTrack();
    updateNavbarPipeline();
    updateExperienceTimeline();
});
