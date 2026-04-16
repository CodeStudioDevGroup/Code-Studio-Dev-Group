document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // MENÚ MÓVIL
    // =========================
    const openBtn = document.getElementById("openMenu");
    const closeBtn = document.getElementById("closeMenu");
    const mobileOverlay = document.getElementById("mobileOverlay");
    const mobileLinks = document.querySelectorAll(".nav-mobile a");

    if (openBtn && closeBtn && mobileOverlay) {

        openBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            mobileOverlay.classList.add("active");
            document.body.style.overflow = "hidden";
        });

        closeBtn.addEventListener("click", () => {
            mobileOverlay.classList.remove("active");
            document.body.style.overflow = "";
        });

        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileOverlay.classList.remove("active");
                document.body.style.overflow = "";
            });
        });

        mobileOverlay.addEventListener("click", (e) => {
            if (e.target === mobileOverlay) {
                mobileOverlay.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    }

    // =========================
    // SCROLL ACTIVO
    // =========================
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-desktop a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // =========================
    // TYPEWRITER
    // =========================
    const phrases = [
        "Expertos en Análisis de Software",
        "Desarrollo Web que Genera Ventas",
        "Creamos Experiencias Digitales",
        "Automatizamos Procesos de Negocio",
        "Diseño + Tecnología + Resultados"
    ];

    const typingElement = document.getElementById("typing-text");

    if (typingElement) {
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeLoop() {
            const current = phrases[phraseIndex];

            if (!isDeleting) {
                charIndex++;
                typingElement.textContent = current.substring(0, charIndex);

                if (charIndex === current.length) {
                    isDeleting = true;
                    setTimeout(typeLoop, 1500);
                    return;
                }
            } else {
                charIndex--;
                typingElement.textContent = current.substring(0, charIndex);

                if (charIndex === 0) {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                }
            }

            setTimeout(typeLoop, isDeleting ? 40 : 70);
        }

        setTimeout(typeLoop, 800);
    }

    // =========================
    // FORMULARIO
    // =========================
    const form = document.querySelector(".contact-form");
    const submitBtn = document.getElementById("submitBtn");
    const successMessage = document.getElementById("formSuccess");

    if (form && submitBtn && successMessage) {

        form.addEventListener("submit", function () {

            submitBtn.classList.add("loading");
            submitBtn.textContent = "Enviando...";

            setTimeout(() => {
                submitBtn.classList.remove("loading");
                submitBtn.textContent = "Enviar solicitud";

                successMessage.classList.add("show");

                form.reset();
            }, 2000);

        });
    }

    // =========================
    // 🔒 PROYECTO CONFIDENCIAL (NUEVO)
    // =========================
    const lockedCards = document.querySelectorAll(".project-locked-card");

    lockedCards.forEach(card => {
        const button = card.querySelector(".btn");

        if (button) {
            button.addEventListener("click", () => {

                // 🔥 Tracking básico (puedes usarlo luego)
                console.log("Usuario solicitó acceso a proyecto confidencial");

                // 💡 Aquí puedes luego:
                // - Abrir modal
                // - Guardar en localStorage
                // - Integrar CRM
            });
        }
    });

});