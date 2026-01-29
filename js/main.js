/** ES JS - Vitória - Fresh-natural with green tones */
const STATE_CONFIG = {
  stateCode: 'es',
  capital: 'Vitória',
  formspreeUrl: 'https://formspree.io/f/xesqbddb',
  colors: { primary: '#228b22', secondary: '#32cd32', accent: '#90ee90' },
  animations: {"enabled": true, "header": {"type": "mountainSlide", "duration": "0.8s", "easing": "ease-in-out", "delay": "0s"}, "sections": {"type": "capixabaReveal", "duration": "1.1s", "easing": "ease-out", "stagger": "0.2s"}, "hero": {"type": "coastalParallax", "speed": 0.6, "direction": "vertical"}, "cards": {"type": "mountainLift", "scale": 1.05, "shadow": "deep"}, "images": {"type": "panoramicReveal", "direction": "horizontal", "duration": "1s"}},
  interactions: {"hover": "mountain-rise", "scroll": "coastal-glide", "transitions": "natural-ease", "click": "stone-ripple"},
  premiumEffects: ["mountain-gradient", "coastal-breeze", "rock-texture", "sea-mist"]
};

const SECTIONS = ["es-index-section--map", "es-index-section-frequently-asked-questions-about-living-in-", "es-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
