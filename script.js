// Giriş animasyonları
gsap.from(".esra-name", {
    duration: 2,
    y: -100,
    opacity: 0,
    ease: "bounce.out"
  });
  
  gsap.from(".tagline", {
    duration: 2,
    delay: 1,
    y: 50,
    opacity: 0,
    ease: "power2.out"
  });
  
  gsap.from(".scroll-btn", {
    duration: 1,
    delay: 2,
    scale: 0.5,
    opacity: 0,
    ease: "back.out(1.7)"
  });
  
  // Anı kartları animasyonu
  gsap.from(".memory-card", {
    scrollTrigger: {
      trigger: "#memory-cards",
      start: "top 80%",
    },
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
  });

// Navbar giriş animasyonu
gsap.to(".animated-navbar", {
    duration: 1.2,
    delay: 0.5,
    y: 0,
    opacity: 1,
    ease: "power4.out",
    from: {
      y: -100
    }
  });

  gsap.to(".esra-photo", {
    duration: 1.8,
    delay: 0.3,
    opacity: 1,
    scale: 1,
    y: 40, // ⬅ GSAP ile de destekliyoruz
    ease: "power3.out"
  });
  
// Hikayemiz bölümü animasyon
gsap.to(".story-image img", {
    scrollTrigger: {
      trigger: ".story-section",
      start: "top 80%",
    },
    duration: 1.2,
    x: 0,
    opacity: 1,
    ease: "power3.out"
  });
  
  gsap.to(".story-text", {
    scrollTrigger: {
      trigger: ".story-section",
      start: "top 80%",
    },
    duration: 1.5,
    x: 0,
    opacity: 1,
    ease: "power2.out"
  });

  // Fotoğraf soldan kayarak gelsin
gsap.from(".story-image", {
    scrollTrigger: {
      trigger: ".story-section",
      start: "top 80%",
    },
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
  
  // Başlık yukarıdan kayarak gelsin
  gsap.from(".story-text h2", {
    scrollTrigger: {
      trigger: ".story-section",
      start: "top 80%",
    },
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.out"
  });
  
  // Paragraflar aşağıdan parça parça gelsin
  gsap.from(".story-text p", {
    scrollTrigger: {
      trigger: ".story-section",
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power2.out"
  });

  document.addEventListener("mousemove", function(e) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";
    heart.innerText = "💙";
    document.getElementById("heart-container").appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 2000);
  });

  gsap.utils.toArray(".timeline-item").forEach((item, i) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      delay: i * 0.1,
      ease: "power2.out"
    });
  });

  gsap.utils.toArray(".timeline-item").forEach(item => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    });
  });

  // 31 Mayıs 2025 12:00 (Türkiye saati UTC+3)
const revealTime = new Date("2025-05-31T13:00:00+03:00").getTime();

const checkSurprise = () => {
  const now = new Date().getTime();
  const surpriseSection = document.getElementById("surprise");

  if (now >= revealTime) {
    surpriseSection.classList.remove("hidden");
  } else {
    surpriseSection.classList.add("hidden");
  }
};

checkSurprise(); // Sayfa yüklendiğinde kontrol et

// 10 saniyede bir tekrar kontrol edelim (sayfa açık kalırsa)
setInterval(checkSurprise, 10000);