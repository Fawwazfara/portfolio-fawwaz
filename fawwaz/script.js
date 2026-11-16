document.addEventListener("DOMContentLoaded", () => {
    const I18N = {
        id: {
            skip: "Lewati ke konten utama",
            "nav.about": "Profil",
            "nav.stack": "Kompetensi",
            "nav.experience": "Pengalaman",
            "nav.projects": "Proyek & Sertifikasi",
            "nav.contact": "Kontak",
            "status.available": "Available for work",
            "hero.badge": "DevOps & Cloud Engineer · Web Dev Fluent",
            "hero.greeting": "Halo, saya",
            "hero.headline": "Membangun infrastruktur cloud yang skalabel, aman, dan otomatis — dengan pemahaman web development yang utuh.",
            "hero.desc": "Saya berfokus pada operasional Cloud & DevOps (AWS, Docker, Kubernetes, Terraform, CI/CD) sekaligus memahami alur pengembangan aplikasi web dari sisi kode hingga deployment ke produksi.",
            "hero.ctaPrimary": "Lihat Proyek & Sertifikasi",
            "metric.focusLabel": "Fokus Utama",
            "metric.focusVal": "Cloud & DevOps",
            "metric.bridgeLabel": "Nilai Tambah",
            "metric.bridgeVal": "Web Development",
            "metric.certLabel": "Sertifikasi",
            "portrait.status": "Siap Kolaborasi",
            "mini.bridgeKicker": "DUAL SKILLSET",
            "mini.bridgeTitle": "Infra + Web Dev",
            "mini.bridgeSub": "Code to Production",
            "cli.label": "Masukkan perintah terminal",
            "cli.placeholder": "Ketik 'help', 'whoami', 'stack', 'cert', atau klik preset di atas...",
            "stack.eyebrow": "SYSTEM CAPABILITIES",
            "stack.title": "Kompetensi DevOps & Web Development",
            "stack.subtitle": "Kombinasi engineering infrastruktur cloud, otomasi pipeline, serta pemahaman fundamental pengembangan web modern.",
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
            "proj.eyebrow": "DEPLOYMENTS & CREDENTIALS",
            "proj.title": "Proyek Pilihan & Sertifikasi",
            "proj.subtitle": "Implementasi aplikasi web nyata yang mendukung transparansi operasional serta sertifikasi cloud terverifikasi.",
            "proj.infakDesc": "Aplikasi web pencatatan dan manajemen infak untuk mendukung transparansi laporan keuangan serta operasional Masjid/Madrasah Assajjad.",
            "cert.desc": "Sertifikasi resmi dari Amazon Web Services yang memvalidasi pemahaman fundamental arsitektur cloud, keamanan, layanan inti AWS, dan model operasional cloud.",
            "cert.holder": "Pemegang",
            "cert.issued": "Terbit",
            "cert.expires": "Berlaku s/d",
            "cert.valId": "Validation ID",
            "cert.copy": "Salin",
            "cert.copied": "Tersalin",
            "cert.viewPdf": "Lihat Sertifikat (PDF)",
            "cert.verify": "Verifikasi AWS",
            "contact.eyebrow": "04 / MARI TERHUBUNG",
            "contact.title": "Terbuka untuk peluang DevOps, Cloud, & Web Engineering.",
            "contact.desc": "Ingin berdiskusi tentang otomasi infrastruktur, deployment container, atau proyek pengembangan web? Silakan hubungi saya melalui kanal berikut.",
            "footer.status": "EOF · All systems operational"
        },
        en: {
            skip: "Skip to main content",
            "nav.about": "About",
            "nav.stack": "Capabilities",
            "nav.experience": "Experience",
            "nav.projects": "Projects & Certs",
            "nav.contact": "Contact",
            "status.available": "Available for work",
            "hero.badge": "DevOps & Cloud Engineer · Web Dev Fluent",
            "hero.greeting": "Hi, I'm",
            "hero.headline": "Building resilient, secure, and automated cloud infrastructure — backed by solid web development fluency.",
            "hero.desc": "Focused on Cloud & DevOps operations (AWS, Docker, Kubernetes, Terraform, CI/CD) while understanding modern web application architecture from source code to production delivery.",
            "hero.ctaPrimary": "Explore Work & Credentials",
            "metric.focusLabel": "Core Focus",
            "metric.focusVal": "Cloud & DevOps",
            "metric.bridgeLabel": "Edge",
            "metric.bridgeVal": "Web Development",
            "metric.certLabel": "Certification",
            "portrait.status": "Open to Collaborate",
            "mini.bridgeKicker": "DUAL SKILLSET",
            "mini.bridgeTitle": "Infra + Web Dev",
            "mini.bridgeSub": "Code to Production",
            "cli.label": "Enter terminal command",
            "cli.placeholder": "Type 'help', 'whoami', 'stack', 'cert', or click a preset above...",
            "stack.eyebrow": "SYSTEM CAPABILITIES",
            "stack.title": "DevOps & Web Engineering Stack",
            "stack.subtitle": "Combining cloud infrastructure engineering, pipeline automation, and practical web development fundamentals.",
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
            "proj.eyebrow": "DEPLOYMENTS & CREDENTIALS",
            "proj.title": "Featured Project & Certification",
            "proj.subtitle": "Real-world web application supporting operational transparency alongside verified cloud credentials.",
            "proj.infakDesc": "Web application for recording and managing infak donations to support financial transparency and operations at Masjid/Madrasah Assajjad.",
            "cert.desc": "Official Amazon Web Services certification validating foundational cloud architecture, security, AWS core services, and cloud operational practices.",
            "cert.holder": "Holder",
            "cert.issued": "Issued",
            "cert.expires": "Expires",
            "cert.valId": "Validation ID",
            "cert.copy": "Copy",
            "cert.copied": "Copied",
            "cert.viewPdf": "View Certificate (PDF)",
            "cert.verify": "Verify on AWS",
            "contact.eyebrow": "04 / CONNECT",
            "contact.title": "Open to DevOps, Cloud, & Web Engineering opportunities.",
            "contact.desc": "Want to collaborate on infrastructure automation, container deployments, or web engineering projects? Reach out through any channel below.",
            "footer.status": "EOF · All systems operational"
        }
    };

    const CLI_RESPONSES = {
        id: {
            whoami: [
                { type: "cmd", text: "$ whoami" },
                { type: "kv", key: "nama    :", val: "Fawwaz Fadel Rahman" },
                { type: "kv", key: "peran   :", val: "Cloud & DevOps Engineer (Web Dev Fluent)" },
                { type: "kv", key: "status  :", val: "available_for_work — siap berkontribusi di tim infra & product" }
            ],
            stack: [
                { type: "cmd", text: "$ stack --all" },
                { type: "kv", key: "cloud   :", val: "AWS (CCP Certified), Linux, Networking, Security" },
                { type: "kv", key: "ops     :", val: "Docker, Kubernetes, Terraform, Ansible, Jenkins, GitHub Actions" },
                { type: "kv", key: "code    :", val: "Bash, Python, Git, HTML5, CSS3, JavaScript" }
            ],
            "aws-cert": [
                { type: "cmd", text: "$ aws --verify-credential" },
                { type: "kv", key: "sertifikat :", val: "AWS Certified Cloud Practitioner (Fawwaz Fr)" },
                { type: "kv", key: "masa_aktif :", val: "4 Aug 2026 -> 4 Aug 2029" },
                { type: "kv", key: "validasi   :", val: "7ebc4ecc7d044e519d00e1e18565bc2b (aws.amazon.com/verification)" }
            ],
            projects: [
                { type: "cmd", text: "$ ls -la ./projects" },
                { type: "kv", key: "infak-mgmt :", val: "Web App Pencatatan & Manajemen Infak — Masjid/Madrasah Assajjad" },
                { type: "muted", text: "Fokus: transparansi operasional, antarmuka bersih, siap deploy." }
            ],
            help: [
                { type: "cmd", text: "$ help" },
                { type: "muted", text: "Perintah tersedia: whoami, stack, cert, projects, contact, clear" }
            ],
            contact: [
                { type: "cmd", text: "$ cat ./contact.txt" },
                { type: "kv", key: "github    :", val: "github.com/Fawwazfara" },
                { type: "kv", key: "linkedin  :", val: "linkedin.com/in/fawwaz-fadel-rahman-430360310" },
                { type: "kv", key: "instagram :", val: "@wwaz.py" }
            ]
        },
        en: {
            whoami: [
                { type: "cmd", text: "$ whoami" },
                { type: "kv", key: "name    :", val: "Fawwaz Fadel Rahman" },
                { type: "kv", key: "role    :", val: "Cloud & DevOps Engineer (Web Dev Fluent)" },
                { type: "kv", key: "status  :", val: "available_for_work — ready for cloud infra & web delivery teams" }
            ],
            stack: [
                { type: "cmd", text: "$ stack --all" },
                { type: "kv", key: "cloud   :", val: "AWS (CCP Certified), Linux, Networking, Security" },
                { type: "kv", key: "ops     :", val: "Docker, Kubernetes, Terraform, Ansible, Jenkins, GitHub Actions" },
                { type: "kv", key: "code    :", val: "Bash, Python, Git, HTML5, CSS3, JavaScript" }
            ],
            "aws-cert": [
                { type: "cmd", text: "$ aws --verify-credential" },
                { type: "kv", key: "credential :", val: "AWS Certified Cloud Practitioner (Fawwaz Fr)" },
                { type: "kv", key: "validity   :", val: "Aug 4, 2026 -> Aug 4, 2029" },
                { type: "kv", key: "verify_id  :", val: "7ebc4ecc7d044e519d00e1e18565bc2b (aws.amazon.com/verification)" }
            ],
            projects: [
                { type: "cmd", text: "$ ls -la ./projects" },
                { type: "kv", key: "infak-mgmt :", val: "Infak Management System Web App — Masjid/Madrasah Assajjad" },
                { type: "muted", text: "Focus: operational financial transparency, clean web interface." }
            ],
            help: [
                { type: "cmd", text: "$ help" },
                { type: "muted", text: "Available commands: whoami, stack, cert, projects, contact, clear" }
            ],
            contact: [
                { type: "cmd", text: "$ cat ./contact.txt" },
                { type: "kv", key: "github    :", val: "github.com/Fawwazfara" },
                { type: "kv", key: "linkedin  :", val: "linkedin.com/in/fawwaz-fadel-rahman-430360310" },
                { type: "kv", key: "instagram :", val: "@wwaz.py" }
            ]
        }
    };

    let currentLang = "id";
    let currentCmd = "whoami";

    // ----------------------------------------------------------------------
    // 1. Language Toggle (ID / EN)
    // ----------------------------------------------------------------------
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

        langButtons.forEach((btn) => {
            const isActive = btn.getAttribute("data-lang") === currentLang;
            btn.classList.toggle("active", isActive);
            btn.setAttribute("aria-pressed", String(isActive));
        });

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

    // ----------------------------------------------------------------------
    // 2. Theme Toggle with Transition Suppression (better-ui recipe)
    // ----------------------------------------------------------------------
    const themeToggleBtn = document.getElementById("theme-toggle");

    function setThemeWithSuppression(nextTheme) {
        const style = document.createElement("style");
        style.append(document.createTextNode("*,*::before,*::after{transition:none !important}"));
        document.head.append(style);

        document.documentElement.setAttribute("data-theme", nextTheme);
        try {
            localStorage.setItem("fawwaz-theme", nextTheme);
        } catch (e) {}

        // Force synchronous style flush so new palette commits while transitions are suppressed
        void document.body.offsetHeight;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => style.remove());
        });
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
            const nextTheme = currentTheme === "dark" ? "light" : "dark";
            setThemeWithSuppression(nextTheme);
        });
    }

    // ----------------------------------------------------------------------
    // 3. Interactive CLI Terminal
    // ----------------------------------------------------------------------
    const cliOutput = document.getElementById("cli-output");
    const cliForm = document.getElementById("cli-form");
    const cliInput = document.getElementById("cli-input");
    const cliPresets = document.querySelectorAll(".cli-preset");

    function renderCliLines(lines) {
        if (!cliOutput) return;
        cliOutput.replaceChildren();

        lines.forEach((item) => {
            const row = document.createElement("div");
            if (item.type === "cmd") {
                row.className = "cli-line-cmd";
                row.textContent = item.text;
            } else if (item.type === "kv") {
                const keySpan = document.createElement("span");
                keySpan.className = "cli-line-key";
                keySpan.textContent = item.key + " ";

                const valSpan = document.createElement("span");
                valSpan.className = "cli-line-val";
                valSpan.textContent = item.val;

                row.append(keySpan, valSpan);
            } else {
                row.className = "cli-line-muted";
                row.textContent = item.text;
            }
            cliOutput.append(row);
        });
    }

    function renderCliCommand(cmdName) {
        currentCmd = cmdName;
        const langSet = CLI_RESPONSES[currentLang];

        cliPresets.forEach((btn) => {
            const match = btn.getAttribute("data-cmd") === cmdName;
            btn.classList.toggle("active", match);
            btn.setAttribute("aria-pressed", String(match));
        });

        if (cmdName === "clear") {
            if (cliOutput) cliOutput.replaceChildren();
            return;
        }

        if (langSet[cmdName]) {
            renderCliLines(langSet[cmdName]);
        }
    }

    cliPresets.forEach((btn) => {
        btn.addEventListener("click", () => {
            renderCliCommand(btn.getAttribute("data-cmd"));
        });
    });

    if (cliForm && cliInput) {
        cliForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const raw = cliInput.value.trim().toLowerCase();
            if (!raw) return;

            const normalized = raw === "cert" || raw === "aws" || raw === "aws --verify"
                ? "aws-cert"
                : raw === "stack --all" || raw === "skills"
                    ? "stack"
                    : raw === "ls ./projects" || raw === "project"
                        ? "projects"
                        : raw;

            if (normalized === "clear") {
                renderCliCommand("clear");
            } else if (CLI_RESPONSES[currentLang][normalized]) {
                renderCliCommand(normalized);
            } else {
                const msg = currentLang === "id"
                    ? `command not found: ${raw}. Ketik 'help' untuk daftar perintah.`
                    : `command not found: ${raw}. Type 'help' for available commands.`;
                renderCliLines([
                    { type: "cmd", text: `$ ${raw}` },
                    { type: "muted", text: msg }
                ]);
                cliPresets.forEach((btn) => {
                    btn.classList.remove("active");
                    btn.setAttribute("aria-pressed", "false");
                });
            }

            cliInput.value = "";
        });
    }

    // ----------------------------------------------------------------------
    // 4. Copy AWS Validation ID (better-ui icon cross-fade)
    // ----------------------------------------------------------------------
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

    // ----------------------------------------------------------------------
    // 5. Mobile Navigation Drawer
    // ----------------------------------------------------------------------
    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const mobileClose = document.getElementById("mobile-menu-close");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const drawerBackdrop = document.getElementById("drawer-backdrop");
    const drawerLinks = document.querySelectorAll(".drawer-link");

    function setDrawerOpen(isOpen) {
        if (!mobileDrawer || !drawerBackdrop || !mobileToggle) return;
        mobileDrawer.classList.toggle("is-open", isOpen);
        mobileDrawer.setAttribute("aria-hidden", String(!isOpen));
        mobileToggle.setAttribute("aria-expanded", String(isOpen));
        drawerBackdrop.hidden = !isOpen;
        document.body.style.overflow = isOpen ? "hidden" : "";

        if (isOpen && mobileClose) {
            mobileClose.focus();
        } else if (!isOpen) {
            mobileToggle.focus();
        }
    }

    if (mobileToggle) {
        mobileToggle.addEventListener("click", () => setDrawerOpen(true));
    }
    if (mobileClose) {
        mobileClose.addEventListener("click", () => setDrawerOpen(false));
    }
    if (drawerBackdrop) {
        drawerBackdrop.addEventListener("click", () => setDrawerOpen(false));
    }
    drawerLinks.forEach((link) => {
        link.addEventListener("click", () => setDrawerOpen(false));
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && mobileDrawer && mobileDrawer.classList.contains("is-open")) {
            setDrawerOpen(false);
        }
    });

    // ----------------------------------------------------------------------
    // 6. Scroll Reveal & Active Nav Link Observer
    // ----------------------------------------------------------------------
    const revealSections = document.querySelectorAll(".reveal-section");
    const navLinks = document.querySelectorAll(".nav-link");
    const trackedSections = document.querySelectorAll("main > section[id]");

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove("is-pending");
                        entry.target.classList.add("is-revealed");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
        );

        revealSections.forEach((sec) => {
            const rect = sec.getBoundingClientRect();
            if (rect.top > window.innerHeight * 0.92) {
                sec.classList.add("is-pending");
                revealObserver.observe(sec);
            } else {
                sec.classList.add("is-revealed");
            }
        });

        const navObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("id");
                        navLinks.forEach((link) => {
                            const active = link.getAttribute("href") === `#${id}`;
                            link.classList.toggle("is-active", active);
                        });
                    }
                });
            },
            { rootMargin: "-35% 0px -55% 0px" }
        );

        trackedSections.forEach((sec) => navObserver.observe(sec));
    } else {
        revealSections.forEach((sec) => sec.classList.add("is-revealed"));
    }

    // Initialize default language & CLI state
    applyLanguage("id");
});
