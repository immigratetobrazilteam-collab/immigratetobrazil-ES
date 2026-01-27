
// Master JS for State: ES - Persona: Heritage Coast
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 768;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const es_index_section_immigrate_to_esprito_santo = document.getElementById('es-index-section-immigrate-to-esprito-santo');
  if (es_index_section_immigrate_to_esprito_santo) {
    gsap.fromTo('#es-index-section-immigrate-to-esprito-santo', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_form_immigrate_to_esprito_santo = document.getElementById('es-index-form-immigrate-to-esprito-santo');
  if (es_index_form_immigrate_to_esprito_santo) {
    gsap.from('#es-index-form-immigrate-to-esprito-santo input, #es-index-form-immigrate-to-esprito-santo textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_section_state_vibe = document.getElementById('es-index-section-state-vibe');
  if (es_index_section_state_vibe) {
    gsap.fromTo('#es-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_section_quick_facts_snapshot = document.getElementById('es-index-section-quick-facts-snapshot');
  if (es_index_section_quick_facts_snapshot) {
    gsap.fromTo('#es-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_section_esprito_santo_map = document.getElementById('es-index-section-esprito-santo-map');
  if (es_index_section_esprito_santo_map) {
    gsap.fromTo('#es-index-section-esprito-santo-map', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_section_cost_of_living_esprito_santo = document.getElementById('es-index-section-cost-of-living-esprito-santo');
  if (es_index_section_cost_of_living_esprito_santo) {
    gsap.fromTo('#es-index-section-cost-of-living-esprito-santo', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_section_government_context = document.getElementById('es-index-section-government-context');
  if (es_index_section_government_context) {
    gsap.fromTo('#es-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_hero_immigration_notes = document.getElementById('es-index-hero-immigration-notes');
  if (es_index_hero_immigration_notes) {
    gsap.fromTo('#es-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_list_common_applicant_profiles = document.getElementById('es-index-list-common-applicant-profiles');
  if (es_index_list_common_applicant_profiles) {
    gsap.from('#es-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_list_economic_drivers = document.getElementById('es-index-list-economic-drivers');
  if (es_index_list_economic_drivers) {
    gsap.from('#es-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_section_demographics = document.getElementById('es-index-section-demographics');
  if (es_index_section_demographics) {
    gsap.fromTo('#es-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_section_regional_challenges = document.getElementById('es-index-section-regional-challenges');
  if (es_index_section_regional_challenges) {
    gsap.fromTo('#es-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_section_regional_opportunities = document.getElementById('es-index-section-regional-opportunities');
  if (es_index_section_regional_opportunities) {
    gsap.fromTo('#es-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_section_culture_daily_life = document.getElementById('es-index-section-culture-daily-life');
  if (es_index_section_culture_daily_life) {
    gsap.fromTo('#es-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_list_local_language_expressions = document.getElementById('es-index-list-local-language-expressions');
  if (es_index_list_local_language_expressions) {
    gsap.from('#es-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_list_food_cuisine = document.getElementById('es-index-list-food-cuisine');
  if (es_index_list_food_cuisine) {
    gsap.from('#es-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_list_festivals_traditions = document.getElementById('es-index-list-festivals-traditions');
  if (es_index_list_festivals_traditions) {
    gsap.from('#es-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_list_music_artistic_expression = document.getElementById('es-index-list-music-artistic-expression');
  if (es_index_list_music_artistic_expression) {
    gsap.from('#es-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_list_sports_recreation = document.getElementById('es-index-list-sports-recreation');
  if (es_index_list_sports_recreation) {
    gsap.from('#es-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_list_landmarks_historical_sites = document.getElementById('es-index-list-landmarks-historical-sites');
  if (es_index_list_landmarks_historical_sites) {
    gsap.from('#es-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_list_natural_features = document.getElementById('es-index-list-natural-features');
  if (es_index_list_natural_features) {
    gsap.from('#es-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_list_parks_protected_areas = document.getElementById('es-index-list-parks-protected-areas');
  if (es_index_list_parks_protected_areas) {
    gsap.from('#es-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_list_museums_cultural_institutions = document.getElementById('es-index-list-museums-cultural-institutions');
  if (es_index_list_museums_cultural_institutions) {
    gsap.from('#es-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_section_image_gallery = document.getElementById('es-index-section-image-gallery');
  if (es_index_section_image_gallery) {
    gsap.fromTo('#es-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_section_useful_government_links = document.getElementById('es-index-section-useful-government-links');
  if (es_index_section_useful_government_links) {
    gsap.fromTo('#es-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_hero_federal_police_immigration_links = document.getElementById('es-index-hero-federal-police-immigration-links');
  if (es_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#es-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_section_external_references = document.getElementById('es-index-section-external-references');
  if (es_index_section_external_references) {
    gsap.fromTo('#es-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_list_immigration_services_overview = document.getElementById('es-index-list-immigration-services-overview');
  if (es_index_list_immigration_services_overview) {
    gsap.from('#es-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_section_why_immigrate_here = document.getElementById('es-index-section-why-immigrate-here');
  if (es_index_section_why_immigrate_here) {
    gsap.fromTo('#es-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_list_travel_services = document.getElementById('es-index-list-travel-services');
  if (es_index_list_travel_services) {
    gsap.from('#es-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_list_how_the_process_works = document.getElementById('es-index-list-how-the-process-works');
  if (es_index_list_how_the_process_works) {
    gsap.from('#es-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_index_section__frequently_asked_questions_about_living_in_esprito_santo_ = document.getElementById('es-index-section--frequently-asked-questions-about-living-in-esprito-santo-');
  if (es_index_section__frequently_asked_questions_about_living_in_esprito_santo_) {
    gsap.fromTo('#es-index-section--frequently-asked-questions-about-living-in-esprito-santo-', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_contactcta_section_get_started_in_esprito_santo = document.getElementById('es-contactcta-section-get-started-in-esprito-santo');
  if (es_contactcta_section_get_started_in_esprito_santo) {
    gsap.fromTo('#es-contactcta-section-get-started-in-esprito-santo', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('es-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (es_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#es-renouncingcitizenship-form-renounce-brazilian-citizenship input, #es-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_list_quick_facts = document.getElementById('es-renouncingcitizenship-list-quick-facts');
  if (es_renouncingcitizenship_list_quick_facts) {
    gsap.from('#es-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('es-renouncingcitizenship-list-common-challenges-applicants-face');
  if (es_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#es-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('es-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (es_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#es-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_section_renunciation_overview = document.getElementById('es-renouncingcitizenship-section-renunciation-overview');
  if (es_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#es-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_form_who_is_this_for = document.getElementById('es-renouncingcitizenship-form-who-is-this-for');
  if (es_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#es-renouncingcitizenship-form-who-is-this-for input, #es-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_list_required_documents = document.getElementById('es-renouncingcitizenship-list-required-documents');
  if (es_renouncingcitizenship_list_required_documents) {
    gsap.from('#es-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_list_process = document.getElementById('es-renouncingcitizenship-list-process');
  if (es_renouncingcitizenship_list_process) {
    gsap.from('#es-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_section_timelines_deadlines = document.getElementById('es-renouncingcitizenship-section-timelines-deadlines');
  if (es_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#es-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_section_fees_costs = document.getElementById('es-renouncingcitizenship-section-fees-costs');
  if (es_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#es-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('es-renouncingcitizenship-list-risks-common-mistakes');
  if (es_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#es-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('es-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (es_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_section_esprito_santo_specific_context = document.getElementById('es-renouncingcitizenship-section-esprito-santo-specific-context');
  if (es_renouncingcitizenship_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-renouncingcitizenship-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_section_what_our_clients_say = document.getElementById('es-renouncingcitizenship-section-what-our-clients-say');
  if (es_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#es-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('es-renouncingcitizenship-section-frequently-asked-questions');
  if (es_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#es-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_section_international_support = document.getElementById('es-renouncingcitizenship-section-international-support');
  if (es_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#es-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_list_our_credentials = document.getElementById('es-renouncingcitizenship-list-our-credentials');
  if (es_renouncingcitizenship_list_our_credentials) {
    gsap.from('#es-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_list_related_services = document.getElementById('es-renouncingcitizenship-list-related-services');
  if (es_renouncingcitizenship_list_related_services) {
    gsap.from('#es-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('es-renouncingcitizenship-section-youre-in-good-hands');
  if (es_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#es-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_renouncingcitizenship_section_21 = document.getElementById('es-renouncingcitizenship-section-21');
  if (es_renouncingcitizenship_section_21) {
    gsap.fromTo('#es-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('es-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (es_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#es-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #es-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_list_quick_facts = document.getElementById('es-provisional-list-quick-facts');
  if (es_provisional_list_quick_facts) {
    gsap.from('#es-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_list_common_challenges_applicants_face = document.getElementById('es-provisional-list-common-challenges-applicants-face');
  if (es_provisional_list_common_challenges_applicants_face) {
    gsap.from('#es-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_list_how_we_solve_these_challenges = document.getElementById('es-provisional-list-how-we-solve-these-challenges');
  if (es_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#es-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_section_naturalisation_overview = document.getElementById('es-provisional-section-naturalisation-overview');
  if (es_provisional_section_naturalisation_overview) {
    gsap.fromTo('#es-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_form_who_is_this_naturalisation_for = document.getElementById('es-provisional-form-who-is-this-naturalisation-for');
  if (es_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#es-provisional-form-who-is-this-naturalisation-for input, #es-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_list_required_documents = document.getElementById('es-provisional-list-required-documents');
  if (es_provisional_list_required_documents) {
    gsap.from('#es-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_list_application_process = document.getElementById('es-provisional-list-application-process');
  if (es_provisional_list_application_process) {
    gsap.from('#es-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_section_timelines_deadlines = document.getElementById('es-provisional-section-timelines-deadlines');
  if (es_provisional_section_timelines_deadlines) {
    gsap.fromTo('#es-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_section_fees_costs = document.getElementById('es-provisional-section-fees-costs');
  if (es_provisional_section_fees_costs) {
    gsap.fromTo('#es-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_list_risks_common_mistakes = document.getElementById('es-provisional-list-risks-common-mistakes');
  if (es_provisional_list_risks_common_mistakes) {
    gsap.from('#es-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_section_diy_vs_professional_assistance = document.getElementById('es-provisional-section-diy-vs-professional-assistance');
  if (es_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_section_esprito_santo_specific_context = document.getElementById('es-provisional-section-esprito-santo-specific-context');
  if (es_provisional_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-provisional-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_section_what_our_clients_say = document.getElementById('es-provisional-section-what-our-clients-say');
  if (es_provisional_section_what_our_clients_say) {
    gsap.fromTo('#es-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_section_frequently_asked_questions = document.getElementById('es-provisional-section-frequently-asked-questions');
  if (es_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#es-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_section_international_support = document.getElementById('es-provisional-section-international-support');
  if (es_provisional_section_international_support) {
    gsap.fromTo('#es-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_list_our_credentials = document.getElementById('es-provisional-list-our-credentials');
  if (es_provisional_list_our_credentials) {
    gsap.from('#es-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_list_related_services = document.getElementById('es-provisional-list-related-services');
  if (es_provisional_list_related_services) {
    gsap.from('#es-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_section_youre_in_good_hands = document.getElementById('es-provisional-section-youre-in-good-hands');
  if (es_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#es-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_provisional_section_21 = document.getElementById('es-provisional-section-21');
  if (es_provisional_section_21) {
    gsap.fromTo('#es-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('es-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (es_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#es-special-form-special-naturalisation-in-brazil-for-particular-cases input, #es-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_list_quick_facts = document.getElementById('es-special-list-quick-facts');
  if (es_special_list_quick_facts) {
    gsap.from('#es-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_list_common_challenges_applicants_face = document.getElementById('es-special-list-common-challenges-applicants-face');
  if (es_special_list_common_challenges_applicants_face) {
    gsap.from('#es-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_list_how_we_solve_these_challenges = document.getElementById('es-special-list-how-we-solve-these-challenges');
  if (es_special_list_how_we_solve_these_challenges) {
    gsap.from('#es-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_section_naturalisation_overview = document.getElementById('es-special-section-naturalisation-overview');
  if (es_special_section_naturalisation_overview) {
    gsap.fromTo('#es-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_form_who_is_this_naturalisation_for = document.getElementById('es-special-form-who-is-this-naturalisation-for');
  if (es_special_form_who_is_this_naturalisation_for) {
    gsap.from('#es-special-form-who-is-this-naturalisation-for input, #es-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_list_required_documents = document.getElementById('es-special-list-required-documents');
  if (es_special_list_required_documents) {
    gsap.from('#es-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_list_application_process = document.getElementById('es-special-list-application-process');
  if (es_special_list_application_process) {
    gsap.from('#es-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_section_timelines_deadlines = document.getElementById('es-special-section-timelines-deadlines');
  if (es_special_section_timelines_deadlines) {
    gsap.fromTo('#es-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_section_fees_costs = document.getElementById('es-special-section-fees-costs');
  if (es_special_section_fees_costs) {
    gsap.fromTo('#es-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_list_risks_common_mistakes = document.getElementById('es-special-list-risks-common-mistakes');
  if (es_special_list_risks_common_mistakes) {
    gsap.from('#es-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_section_diy_vs_professional_assistance = document.getElementById('es-special-section-diy-vs-professional-assistance');
  if (es_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_section_esprito_santo_specific_context = document.getElementById('es-special-section-esprito-santo-specific-context');
  if (es_special_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-special-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_section_what_our_clients_say = document.getElementById('es-special-section-what-our-clients-say');
  if (es_special_section_what_our_clients_say) {
    gsap.fromTo('#es-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_section_frequently_asked_questions = document.getElementById('es-special-section-frequently-asked-questions');
  if (es_special_section_frequently_asked_questions) {
    gsap.fromTo('#es-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_section_international_support = document.getElementById('es-special-section-international-support');
  if (es_special_section_international_support) {
    gsap.fromTo('#es-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_list_our_credentials = document.getElementById('es-special-list-our-credentials');
  if (es_special_list_our_credentials) {
    gsap.from('#es-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_list_related_services = document.getElementById('es-special-list-related-services');
  if (es_special_list_related_services) {
    gsap.from('#es-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_section_youre_in_good_hands = document.getElementById('es-special-section-youre-in-good-hands');
  if (es_special_section_youre_in_good_hands) {
    gsap.fromTo('#es-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_special_section_21 = document.getElementById('es-special-section-21');
  if (es_special_section_21) {
    gsap.fromTo('#es-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('es-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (es_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#es-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #es-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_list_quick_facts = document.getElementById('es-ordinary-list-quick-facts');
  if (es_ordinary_list_quick_facts) {
    gsap.from('#es-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_list_common_challenges_applicants_face = document.getElementById('es-ordinary-list-common-challenges-applicants-face');
  if (es_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#es-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_list_how_we_solve_these_challenges = document.getElementById('es-ordinary-list-how-we-solve-these-challenges');
  if (es_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#es-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_section_naturalisation_overview = document.getElementById('es-ordinary-section-naturalisation-overview');
  if (es_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#es-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_form_who_is_this_naturalisation_for = document.getElementById('es-ordinary-form-who-is-this-naturalisation-for');
  if (es_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#es-ordinary-form-who-is-this-naturalisation-for input, #es-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_list_required_documents = document.getElementById('es-ordinary-list-required-documents');
  if (es_ordinary_list_required_documents) {
    gsap.from('#es-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_list_application_process = document.getElementById('es-ordinary-list-application-process');
  if (es_ordinary_list_application_process) {
    gsap.from('#es-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_section_timelines_deadlines = document.getElementById('es-ordinary-section-timelines-deadlines');
  if (es_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#es-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_section_fees_costs = document.getElementById('es-ordinary-section-fees-costs');
  if (es_ordinary_section_fees_costs) {
    gsap.fromTo('#es-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_list_risks_common_mistakes = document.getElementById('es-ordinary-list-risks-common-mistakes');
  if (es_ordinary_list_risks_common_mistakes) {
    gsap.from('#es-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_section_diy_vs_professional_assistance = document.getElementById('es-ordinary-section-diy-vs-professional-assistance');
  if (es_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_section_esprito_santo_specific_context = document.getElementById('es-ordinary-section-esprito-santo-specific-context');
  if (es_ordinary_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-ordinary-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_section_what_our_clients_say = document.getElementById('es-ordinary-section-what-our-clients-say');
  if (es_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#es-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_section_frequently_asked_questions = document.getElementById('es-ordinary-section-frequently-asked-questions');
  if (es_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#es-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_section_international_support = document.getElementById('es-ordinary-section-international-support');
  if (es_ordinary_section_international_support) {
    gsap.fromTo('#es-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_list_our_credentials = document.getElementById('es-ordinary-list-our-credentials');
  if (es_ordinary_list_our_credentials) {
    gsap.from('#es-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_list_related_services = document.getElementById('es-ordinary-list-related-services');
  if (es_ordinary_list_related_services) {
    gsap.from('#es-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_section_youre_in_good_hands = document.getElementById('es-ordinary-section-youre-in-good-hands');
  if (es_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#es-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_ordinary_section_21 = document.getElementById('es-ordinary-section-21');
  if (es_ordinary_section_21) {
    gsap.fromTo('#es-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('es-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (es_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#es-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #es-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_list_quick_facts = document.getElementById('es-extraordinary-list-quick-facts');
  if (es_extraordinary_list_quick_facts) {
    gsap.from('#es-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_list_common_challenges_applicants_face = document.getElementById('es-extraordinary-list-common-challenges-applicants-face');
  if (es_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#es-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_list_how_we_solve_these_challenges = document.getElementById('es-extraordinary-list-how-we-solve-these-challenges');
  if (es_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#es-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_section_naturalisation_overview = document.getElementById('es-extraordinary-section-naturalisation-overview');
  if (es_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#es-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('es-extraordinary-form-who-is-this-naturalisation-for');
  if (es_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#es-extraordinary-form-who-is-this-naturalisation-for input, #es-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_list_required_documents = document.getElementById('es-extraordinary-list-required-documents');
  if (es_extraordinary_list_required_documents) {
    gsap.from('#es-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_list_application_process = document.getElementById('es-extraordinary-list-application-process');
  if (es_extraordinary_list_application_process) {
    gsap.from('#es-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_section_timelines_deadlines = document.getElementById('es-extraordinary-section-timelines-deadlines');
  if (es_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#es-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_section_fees_costs = document.getElementById('es-extraordinary-section-fees-costs');
  if (es_extraordinary_section_fees_costs) {
    gsap.fromTo('#es-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_list_risks_common_mistakes = document.getElementById('es-extraordinary-list-risks-common-mistakes');
  if (es_extraordinary_list_risks_common_mistakes) {
    gsap.from('#es-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_section_diy_vs_professional_assistance = document.getElementById('es-extraordinary-section-diy-vs-professional-assistance');
  if (es_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_section_esprito_santo_specific_context = document.getElementById('es-extraordinary-section-esprito-santo-specific-context');
  if (es_extraordinary_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-extraordinary-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_section_what_our_clients_say = document.getElementById('es-extraordinary-section-what-our-clients-say');
  if (es_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#es-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_section_frequently_asked_questions = document.getElementById('es-extraordinary-section-frequently-asked-questions');
  if (es_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#es-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_section_international_support = document.getElementById('es-extraordinary-section-international-support');
  if (es_extraordinary_section_international_support) {
    gsap.fromTo('#es-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_list_our_credentials = document.getElementById('es-extraordinary-list-our-credentials');
  if (es_extraordinary_list_our_credentials) {
    gsap.from('#es-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_list_related_services = document.getElementById('es-extraordinary-list-related-services');
  if (es_extraordinary_list_related_services) {
    gsap.from('#es-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_section_youre_in_good_hands = document.getElementById('es-extraordinary-section-youre-in-good-hands');
  if (es_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#es-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extraordinary_section_21 = document.getElementById('es-extraordinary-section-21');
  if (es_extraordinary_section_21) {
    gsap.fromTo('#es-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('es-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (es_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#es-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #es-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_list_quick_facts = document.getElementById('es-reacquisitioncitizenship-list-quick-facts');
  if (es_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#es-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('es-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (es_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#es-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('es-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (es_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#es-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('es-reacquisitioncitizenship-section-reacquisition-overview');
  if (es_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#es-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('es-reacquisitioncitizenship-form-who-is-this-for');
  if (es_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#es-reacquisitioncitizenship-form-who-is-this-for input, #es-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_list_required_documents = document.getElementById('es-reacquisitioncitizenship-list-required-documents');
  if (es_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#es-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_list_process = document.getElementById('es-reacquisitioncitizenship-list-process');
  if (es_reacquisitioncitizenship_list_process) {
    gsap.from('#es-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('es-reacquisitioncitizenship-section-timelines-deadlines');
  if (es_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#es-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_section_fees_costs = document.getElementById('es-reacquisitioncitizenship-section-fees-costs');
  if (es_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#es-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('es-reacquisitioncitizenship-list-risks-common-mistakes');
  if (es_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#es-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('es-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (es_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_section_esprito_santo_specific_context = document.getElementById('es-reacquisitioncitizenship-section-esprito-santo-specific-context');
  if (es_reacquisitioncitizenship_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-reacquisitioncitizenship-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('es-reacquisitioncitizenship-section-what-our-clients-say');
  if (es_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#es-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('es-reacquisitioncitizenship-section-frequently-asked-questions');
  if (es_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#es-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_section_international_support = document.getElementById('es-reacquisitioncitizenship-section-international-support');
  if (es_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#es-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_list_our_credentials = document.getElementById('es-reacquisitioncitizenship-list-our-credentials');
  if (es_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#es-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_list_related_services = document.getElementById('es-reacquisitioncitizenship-list-related-services');
  if (es_reacquisitioncitizenship_list_related_services) {
    gsap.from('#es-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('es-reacquisitioncitizenship-section-youre-in-good-hands');
  if (es_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#es-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_reacquisitioncitizenship_section_21 = document.getElementById('es-reacquisitioncitizenship-section-21');
  if (es_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#es-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('es-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (es_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#es-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #es-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_list_quick_facts = document.getElementById('es-scientificresearch-list-quick-facts');
  if (es_scientificresearch_list_quick_facts) {
    gsap.from('#es-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_list_common_challenges_applicants_face = document.getElementById('es-scientificresearch-list-common-challenges-applicants-face');
  if (es_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#es-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('es-scientificresearch-list-how-we-solve-these-challenges');
  if (es_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#es-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_section_residency_overview = document.getElementById('es-scientificresearch-section-residency-overview');
  if (es_scientificresearch_section_residency_overview) {
    gsap.fromTo('#es-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_form_who_is_this_residency_for = document.getElementById('es-scientificresearch-form-who-is-this-residency-for');
  if (es_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#es-scientificresearch-form-who-is-this-residency-for input, #es-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_list_required_documents = document.getElementById('es-scientificresearch-list-required-documents');
  if (es_scientificresearch_list_required_documents) {
    gsap.from('#es-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_list_application_process = document.getElementById('es-scientificresearch-list-application-process');
  if (es_scientificresearch_list_application_process) {
    gsap.from('#es-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_section_timelines_deadlines = document.getElementById('es-scientificresearch-section-timelines-deadlines');
  if (es_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#es-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_section_fees_costs = document.getElementById('es-scientificresearch-section-fees-costs');
  if (es_scientificresearch_section_fees_costs) {
    gsap.fromTo('#es-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_list_risks_common_mistakes = document.getElementById('es-scientificresearch-list-risks-common-mistakes');
  if (es_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#es-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('es-scientificresearch-section-diy-vs-professional-assistance');
  if (es_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_section_esprito_santo_specific_context = document.getElementById('es-scientificresearch-section-esprito-santo-specific-context');
  if (es_scientificresearch_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-scientificresearch-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_section_what_our_clients_say = document.getElementById('es-scientificresearch-section-what-our-clients-say');
  if (es_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#es-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_section_frequently_asked_questions = document.getElementById('es-scientificresearch-section-frequently-asked-questions');
  if (es_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#es-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_section_international_support = document.getElementById('es-scientificresearch-section-international-support');
  if (es_scientificresearch_section_international_support) {
    gsap.fromTo('#es-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_list_our_credentials = document.getElementById('es-scientificresearch-list-our-credentials');
  if (es_scientificresearch_list_our_credentials) {
    gsap.from('#es-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_list_related_services = document.getElementById('es-scientificresearch-list-related-services');
  if (es_scientificresearch_list_related_services) {
    gsap.from('#es-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_section_youre_in_good_hands = document.getElementById('es-scientificresearch-section-youre-in-good-hands');
  if (es_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#es-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_scientificresearch_section_21 = document.getElementById('es-scientificresearch-section-21');
  if (es_scientificresearch_section_21) {
    gsap.fromTo('#es-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_form_study_in_brazil_with_study_residency = document.getElementById('es-study-form-study-in-brazil-with-study-residency');
  if (es_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#es-study-form-study-in-brazil-with-study-residency input, #es-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_list_quick_facts = document.getElementById('es-study-list-quick-facts');
  if (es_study_list_quick_facts) {
    gsap.from('#es-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_list_common_challenges_applicants_face = document.getElementById('es-study-list-common-challenges-applicants-face');
  if (es_study_list_common_challenges_applicants_face) {
    gsap.from('#es-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_list_how_we_solve_these_challenges = document.getElementById('es-study-list-how-we-solve-these-challenges');
  if (es_study_list_how_we_solve_these_challenges) {
    gsap.from('#es-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_section_residency_overview = document.getElementById('es-study-section-residency-overview');
  if (es_study_section_residency_overview) {
    gsap.fromTo('#es-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_form_who_is_this_residency_for = document.getElementById('es-study-form-who-is-this-residency-for');
  if (es_study_form_who_is_this_residency_for) {
    gsap.from('#es-study-form-who-is-this-residency-for input, #es-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_list_required_documents = document.getElementById('es-study-list-required-documents');
  if (es_study_list_required_documents) {
    gsap.from('#es-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_list_application_process = document.getElementById('es-study-list-application-process');
  if (es_study_list_application_process) {
    gsap.from('#es-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_section_timelines_deadlines = document.getElementById('es-study-section-timelines-deadlines');
  if (es_study_section_timelines_deadlines) {
    gsap.fromTo('#es-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_section_fees_costs = document.getElementById('es-study-section-fees-costs');
  if (es_study_section_fees_costs) {
    gsap.fromTo('#es-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_list_risks_common_mistakes = document.getElementById('es-study-list-risks-common-mistakes');
  if (es_study_list_risks_common_mistakes) {
    gsap.from('#es-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_section_diy_vs_professional_assistance = document.getElementById('es-study-section-diy-vs-professional-assistance');
  if (es_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_section_esprito_santo_specific_context = document.getElementById('es-study-section-esprito-santo-specific-context');
  if (es_study_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-study-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_section_what_our_clients_say = document.getElementById('es-study-section-what-our-clients-say');
  if (es_study_section_what_our_clients_say) {
    gsap.fromTo('#es-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_section_frequently_asked_questions = document.getElementById('es-study-section-frequently-asked-questions');
  if (es_study_section_frequently_asked_questions) {
    gsap.fromTo('#es-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_section_international_support = document.getElementById('es-study-section-international-support');
  if (es_study_section_international_support) {
    gsap.fromTo('#es-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_list_our_credentials = document.getElementById('es-study-list-our-credentials');
  if (es_study_list_our_credentials) {
    gsap.from('#es-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_list_related_services = document.getElementById('es-study-list-related-services');
  if (es_study_list_related_services) {
    gsap.from('#es-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_section_youre_in_good_hands = document.getElementById('es-study-section-youre-in-good-hands');
  if (es_study_section_youre_in_good_hands) {
    gsap.fromTo('#es-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_study_section_21 = document.getElementById('es-study-section-21');
  if (es_study_section_21) {
    gsap.fromTo('#es-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('es-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (es_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#es-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #es-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_list_quick_facts = document.getElementById('es-educationalexchange-list-quick-facts');
  if (es_educationalexchange_list_quick_facts) {
    gsap.from('#es-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_list_common_challenges_applicants_face = document.getElementById('es-educationalexchange-list-common-challenges-applicants-face');
  if (es_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#es-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('es-educationalexchange-list-how-we-solve-these-challenges');
  if (es_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#es-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_section_residency_overview = document.getElementById('es-educationalexchange-section-residency-overview');
  if (es_educationalexchange_section_residency_overview) {
    gsap.fromTo('#es-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_form_who_is_this_residency_for = document.getElementById('es-educationalexchange-form-who-is-this-residency-for');
  if (es_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#es-educationalexchange-form-who-is-this-residency-for input, #es-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_list_required_documents = document.getElementById('es-educationalexchange-list-required-documents');
  if (es_educationalexchange_list_required_documents) {
    gsap.from('#es-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_list_application_process = document.getElementById('es-educationalexchange-list-application-process');
  if (es_educationalexchange_list_application_process) {
    gsap.from('#es-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_section_timelines_deadlines = document.getElementById('es-educationalexchange-section-timelines-deadlines');
  if (es_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#es-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_section_fees_costs = document.getElementById('es-educationalexchange-section-fees-costs');
  if (es_educationalexchange_section_fees_costs) {
    gsap.fromTo('#es-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_list_risks_common_mistakes = document.getElementById('es-educationalexchange-list-risks-common-mistakes');
  if (es_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#es-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('es-educationalexchange-section-diy-vs-professional-assistance');
  if (es_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_section_esprito_santo_specific_context = document.getElementById('es-educationalexchange-section-esprito-santo-specific-context');
  if (es_educationalexchange_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-educationalexchange-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_section_what_our_clients_say = document.getElementById('es-educationalexchange-section-what-our-clients-say');
  if (es_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#es-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_section_frequently_asked_questions = document.getElementById('es-educationalexchange-section-frequently-asked-questions');
  if (es_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#es-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_section_international_support = document.getElementById('es-educationalexchange-section-international-support');
  if (es_educationalexchange_section_international_support) {
    gsap.fromTo('#es-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_list_our_credentials = document.getElementById('es-educationalexchange-list-our-credentials');
  if (es_educationalexchange_list_our_credentials) {
    gsap.from('#es-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_list_related_services = document.getElementById('es-educationalexchange-list-related-services');
  if (es_educationalexchange_list_related_services) {
    gsap.from('#es-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_section_youre_in_good_hands = document.getElementById('es-educationalexchange-section-youre-in-good-hands');
  if (es_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#es-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_educationalexchange_section_21 = document.getElementById('es-educationalexchange-section-21');
  if (es_educationalexchange_section_21) {
    gsap.fromTo('#es-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('es-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (es_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#es-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #es-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_list_quick_facts = document.getElementById('es-humanitarian-list-quick-facts');
  if (es_humanitarian_list_quick_facts) {
    gsap.from('#es-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_list_common_challenges_applicants_face = document.getElementById('es-humanitarian-list-common-challenges-applicants-face');
  if (es_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#es-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_list_how_we_solve_these_challenges = document.getElementById('es-humanitarian-list-how-we-solve-these-challenges');
  if (es_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#es-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_section_residency_overview = document.getElementById('es-humanitarian-section-residency-overview');
  if (es_humanitarian_section_residency_overview) {
    gsap.fromTo('#es-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_form_who_is_this_residency_for = document.getElementById('es-humanitarian-form-who-is-this-residency-for');
  if (es_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#es-humanitarian-form-who-is-this-residency-for input, #es-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_list_required_documents = document.getElementById('es-humanitarian-list-required-documents');
  if (es_humanitarian_list_required_documents) {
    gsap.from('#es-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_list_application_process = document.getElementById('es-humanitarian-list-application-process');
  if (es_humanitarian_list_application_process) {
    gsap.from('#es-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_section_timelines_deadlines = document.getElementById('es-humanitarian-section-timelines-deadlines');
  if (es_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#es-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_section_fees_costs = document.getElementById('es-humanitarian-section-fees-costs');
  if (es_humanitarian_section_fees_costs) {
    gsap.fromTo('#es-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_list_risks_common_mistakes = document.getElementById('es-humanitarian-list-risks-common-mistakes');
  if (es_humanitarian_list_risks_common_mistakes) {
    gsap.from('#es-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_section_diy_vs_professional_assistance = document.getElementById('es-humanitarian-section-diy-vs-professional-assistance');
  if (es_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_section_esprito_santo_specific_context = document.getElementById('es-humanitarian-section-esprito-santo-specific-context');
  if (es_humanitarian_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-humanitarian-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_section_what_our_clients_say = document.getElementById('es-humanitarian-section-what-our-clients-say');
  if (es_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#es-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_section_frequently_asked_questions = document.getElementById('es-humanitarian-section-frequently-asked-questions');
  if (es_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#es-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_section_international_support = document.getElementById('es-humanitarian-section-international-support');
  if (es_humanitarian_section_international_support) {
    gsap.fromTo('#es-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_list_our_credentials = document.getElementById('es-humanitarian-list-our-credentials');
  if (es_humanitarian_list_our_credentials) {
    gsap.from('#es-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_list_related_services = document.getElementById('es-humanitarian-list-related-services');
  if (es_humanitarian_list_related_services) {
    gsap.from('#es-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_section_youre_in_good_hands = document.getElementById('es-humanitarian-section-youre-in-good-hands');
  if (es_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#es-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_humanitarian_section_21 = document.getElementById('es-humanitarian-section-21');
  if (es_humanitarian_section_21) {
    gsap.fromTo('#es-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('es-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (es_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#es-digitalnomad-form-digital-nomad-residency-in-brazil input, #es-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_list_quick_facts = document.getElementById('es-digitalnomad-list-quick-facts');
  if (es_digitalnomad_list_quick_facts) {
    gsap.from('#es-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_list_common_challenges_applicants_face = document.getElementById('es-digitalnomad-list-common-challenges-applicants-face');
  if (es_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#es-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('es-digitalnomad-list-how-we-solve-these-challenges');
  if (es_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#es-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_section_residency_overview = document.getElementById('es-digitalnomad-section-residency-overview');
  if (es_digitalnomad_section_residency_overview) {
    gsap.fromTo('#es-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_form_who_is_this_residency_for = document.getElementById('es-digitalnomad-form-who-is-this-residency-for');
  if (es_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#es-digitalnomad-form-who-is-this-residency-for input, #es-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_list_required_documents = document.getElementById('es-digitalnomad-list-required-documents');
  if (es_digitalnomad_list_required_documents) {
    gsap.from('#es-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_list_application_process = document.getElementById('es-digitalnomad-list-application-process');
  if (es_digitalnomad_list_application_process) {
    gsap.from('#es-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_section_timelines_deadlines = document.getElementById('es-digitalnomad-section-timelines-deadlines');
  if (es_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#es-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_section_fees_costs = document.getElementById('es-digitalnomad-section-fees-costs');
  if (es_digitalnomad_section_fees_costs) {
    gsap.fromTo('#es-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_list_risks_common_mistakes = document.getElementById('es-digitalnomad-list-risks-common-mistakes');
  if (es_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#es-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('es-digitalnomad-section-diy-vs-professional-assistance');
  if (es_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_section_esprito_santo_specific_context = document.getElementById('es-digitalnomad-section-esprito-santo-specific-context');
  if (es_digitalnomad_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-digitalnomad-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_section_what_our_clients_say = document.getElementById('es-digitalnomad-section-what-our-clients-say');
  if (es_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#es-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_section_frequently_asked_questions = document.getElementById('es-digitalnomad-section-frequently-asked-questions');
  if (es_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#es-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_section_international_support = document.getElementById('es-digitalnomad-section-international-support');
  if (es_digitalnomad_section_international_support) {
    gsap.fromTo('#es-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_list_our_credentials = document.getElementById('es-digitalnomad-list-our-credentials');
  if (es_digitalnomad_list_our_credentials) {
    gsap.from('#es-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_list_related_services = document.getElementById('es-digitalnomad-list-related-services');
  if (es_digitalnomad_list_related_services) {
    gsap.from('#es-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_section_youre_in_good_hands = document.getElementById('es-digitalnomad-section-youre-in-good-hands');
  if (es_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#es-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_digitalnomad_section_21 = document.getElementById('es-digitalnomad-section-21');
  if (es_digitalnomad_section_21) {
    gsap.fromTo('#es-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('es-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (es_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#es-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #es-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_list_quick_facts = document.getElementById('es-familyreunion-list-quick-facts');
  if (es_familyreunion_list_quick_facts) {
    gsap.from('#es-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_list_common_challenges_applicants_face = document.getElementById('es-familyreunion-list-common-challenges-applicants-face');
  if (es_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#es-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_list_how_we_solve_these_challenges = document.getElementById('es-familyreunion-list-how-we-solve-these-challenges');
  if (es_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#es-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_section_residency_overview = document.getElementById('es-familyreunion-section-residency-overview');
  if (es_familyreunion_section_residency_overview) {
    gsap.fromTo('#es-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_form_who_is_this_residency_for = document.getElementById('es-familyreunion-form-who-is-this-residency-for');
  if (es_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#es-familyreunion-form-who-is-this-residency-for input, #es-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_list_required_documents = document.getElementById('es-familyreunion-list-required-documents');
  if (es_familyreunion_list_required_documents) {
    gsap.from('#es-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_list_application_process = document.getElementById('es-familyreunion-list-application-process');
  if (es_familyreunion_list_application_process) {
    gsap.from('#es-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_section_timelines_deadlines = document.getElementById('es-familyreunion-section-timelines-deadlines');
  if (es_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#es-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_section_fees_costs = document.getElementById('es-familyreunion-section-fees-costs');
  if (es_familyreunion_section_fees_costs) {
    gsap.fromTo('#es-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_list_risks_common_mistakes = document.getElementById('es-familyreunion-list-risks-common-mistakes');
  if (es_familyreunion_list_risks_common_mistakes) {
    gsap.from('#es-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_section_diy_vs_professional_assistance = document.getElementById('es-familyreunion-section-diy-vs-professional-assistance');
  if (es_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_section_esprito_santo_specific_context = document.getElementById('es-familyreunion-section-esprito-santo-specific-context');
  if (es_familyreunion_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-familyreunion-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_section_what_our_clients_say = document.getElementById('es-familyreunion-section-what-our-clients-say');
  if (es_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#es-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_section_frequently_asked_questions = document.getElementById('es-familyreunion-section-frequently-asked-questions');
  if (es_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#es-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_section_international_support = document.getElementById('es-familyreunion-section-international-support');
  if (es_familyreunion_section_international_support) {
    gsap.fromTo('#es-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_list_our_credentials = document.getElementById('es-familyreunion-list-our-credentials');
  if (es_familyreunion_list_our_credentials) {
    gsap.from('#es-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_list_related_services = document.getElementById('es-familyreunion-list-related-services');
  if (es_familyreunion_list_related_services) {
    gsap.from('#es-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_section_youre_in_good_hands = document.getElementById('es-familyreunion-section-youre-in-good-hands');
  if (es_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#es-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_familyreunion_section_21 = document.getElementById('es-familyreunion-section-21');
  if (es_familyreunion_section_21) {
    gsap.fromTo('#es-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('es-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (es_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#es-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #es-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_list_quick_facts = document.getElementById('es-mercosul-list-quick-facts');
  if (es_mercosul_list_quick_facts) {
    gsap.from('#es-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_list_common_challenges_applicants_face = document.getElementById('es-mercosul-list-common-challenges-applicants-face');
  if (es_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#es-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_list_how_we_solve_these_challenges = document.getElementById('es-mercosul-list-how-we-solve-these-challenges');
  if (es_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#es-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_section_residency_overview = document.getElementById('es-mercosul-section-residency-overview');
  if (es_mercosul_section_residency_overview) {
    gsap.fromTo('#es-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_form_who_is_this_residency_for = document.getElementById('es-mercosul-form-who-is-this-residency-for');
  if (es_mercosul_form_who_is_this_residency_for) {
    gsap.from('#es-mercosul-form-who-is-this-residency-for input, #es-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_list_required_documents = document.getElementById('es-mercosul-list-required-documents');
  if (es_mercosul_list_required_documents) {
    gsap.from('#es-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_list_application_process = document.getElementById('es-mercosul-list-application-process');
  if (es_mercosul_list_application_process) {
    gsap.from('#es-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_section_timelines_deadlines = document.getElementById('es-mercosul-section-timelines-deadlines');
  if (es_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#es-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_section_fees_costs = document.getElementById('es-mercosul-section-fees-costs');
  if (es_mercosul_section_fees_costs) {
    gsap.fromTo('#es-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_list_risks_common_mistakes = document.getElementById('es-mercosul-list-risks-common-mistakes');
  if (es_mercosul_list_risks_common_mistakes) {
    gsap.from('#es-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_section_diy_vs_professional_assistance = document.getElementById('es-mercosul-section-diy-vs-professional-assistance');
  if (es_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_section_esprito_santo_specific_context = document.getElementById('es-mercosul-section-esprito-santo-specific-context');
  if (es_mercosul_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-mercosul-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_section_what_our_clients_say = document.getElementById('es-mercosul-section-what-our-clients-say');
  if (es_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#es-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_section_frequently_asked_questions = document.getElementById('es-mercosul-section-frequently-asked-questions');
  if (es_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#es-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_section_international_support = document.getElementById('es-mercosul-section-international-support');
  if (es_mercosul_section_international_support) {
    gsap.fromTo('#es-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_list_our_credentials = document.getElementById('es-mercosul-list-our-credentials');
  if (es_mercosul_list_our_credentials) {
    gsap.from('#es-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_list_related_services = document.getElementById('es-mercosul-list-related-services');
  if (es_mercosul_list_related_services) {
    gsap.from('#es-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_section_youre_in_good_hands = document.getElementById('es-mercosul-section-youre-in-good-hands');
  if (es_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#es-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_mercosul_section_21 = document.getElementById('es-mercosul-section-21');
  if (es_mercosul_section_21) {
    gsap.fromTo('#es-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('es-retiree-form-retire-in-brazil-with-retiree-residency');
  if (es_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#es-retiree-form-retire-in-brazil-with-retiree-residency input, #es-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_list_quick_facts = document.getElementById('es-retiree-list-quick-facts');
  if (es_retiree_list_quick_facts) {
    gsap.from('#es-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_list_common_challenges_applicants_face = document.getElementById('es-retiree-list-common-challenges-applicants-face');
  if (es_retiree_list_common_challenges_applicants_face) {
    gsap.from('#es-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_list_how_we_solve_these_challenges = document.getElementById('es-retiree-list-how-we-solve-these-challenges');
  if (es_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#es-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_section_residency_overview = document.getElementById('es-retiree-section-residency-overview');
  if (es_retiree_section_residency_overview) {
    gsap.fromTo('#es-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_form_who_is_this_residency_for = document.getElementById('es-retiree-form-who-is-this-residency-for');
  if (es_retiree_form_who_is_this_residency_for) {
    gsap.from('#es-retiree-form-who-is-this-residency-for input, #es-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_list_required_documents = document.getElementById('es-retiree-list-required-documents');
  if (es_retiree_list_required_documents) {
    gsap.from('#es-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_list_application_process = document.getElementById('es-retiree-list-application-process');
  if (es_retiree_list_application_process) {
    gsap.from('#es-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_section_timelines_deadlines = document.getElementById('es-retiree-section-timelines-deadlines');
  if (es_retiree_section_timelines_deadlines) {
    gsap.fromTo('#es-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_section_fees_costs = document.getElementById('es-retiree-section-fees-costs');
  if (es_retiree_section_fees_costs) {
    gsap.fromTo('#es-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_list_risks_common_mistakes = document.getElementById('es-retiree-list-risks-common-mistakes');
  if (es_retiree_list_risks_common_mistakes) {
    gsap.from('#es-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_section_diy_vs_professional_assistance = document.getElementById('es-retiree-section-diy-vs-professional-assistance');
  if (es_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_section_esprito_santo_specific_context = document.getElementById('es-retiree-section-esprito-santo-specific-context');
  if (es_retiree_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-retiree-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_section_what_our_clients_say = document.getElementById('es-retiree-section-what-our-clients-say');
  if (es_retiree_section_what_our_clients_say) {
    gsap.fromTo('#es-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_section_frequently_asked_questions = document.getElementById('es-retiree-section-frequently-asked-questions');
  if (es_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#es-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_section_international_support = document.getElementById('es-retiree-section-international-support');
  if (es_retiree_section_international_support) {
    gsap.fromTo('#es-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_list_our_credentials = document.getElementById('es-retiree-list-our-credentials');
  if (es_retiree_list_our_credentials) {
    gsap.from('#es-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_list_related_services = document.getElementById('es-retiree-list-related-services');
  if (es_retiree_list_related_services) {
    gsap.from('#es-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_section_youre_in_good_hands = document.getElementById('es-retiree-section-youre-in-good-hands');
  if (es_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#es-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_retiree_section_21 = document.getElementById('es-retiree-section-21');
  if (es_retiree_section_21) {
    gsap.fromTo('#es-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('es-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (es_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#es-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #es-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_list_quick_facts = document.getElementById('es-volunteer-list-quick-facts');
  if (es_volunteer_list_quick_facts) {
    gsap.from('#es-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_list_common_challenges_applicants_face = document.getElementById('es-volunteer-list-common-challenges-applicants-face');
  if (es_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#es-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_list_how_we_solve_these_challenges = document.getElementById('es-volunteer-list-how-we-solve-these-challenges');
  if (es_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#es-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_section_residency_overview = document.getElementById('es-volunteer-section-residency-overview');
  if (es_volunteer_section_residency_overview) {
    gsap.fromTo('#es-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_form_who_is_this_residency_for = document.getElementById('es-volunteer-form-who-is-this-residency-for');
  if (es_volunteer_form_who_is_this_residency_for) {
    gsap.from('#es-volunteer-form-who-is-this-residency-for input, #es-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_list_required_documents = document.getElementById('es-volunteer-list-required-documents');
  if (es_volunteer_list_required_documents) {
    gsap.from('#es-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_list_application_process = document.getElementById('es-volunteer-list-application-process');
  if (es_volunteer_list_application_process) {
    gsap.from('#es-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_section_timelines_deadlines = document.getElementById('es-volunteer-section-timelines-deadlines');
  if (es_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#es-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_section_fees_costs = document.getElementById('es-volunteer-section-fees-costs');
  if (es_volunteer_section_fees_costs) {
    gsap.fromTo('#es-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_list_risks_common_mistakes = document.getElementById('es-volunteer-list-risks-common-mistakes');
  if (es_volunteer_list_risks_common_mistakes) {
    gsap.from('#es-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_section_diy_vs_professional_assistance = document.getElementById('es-volunteer-section-diy-vs-professional-assistance');
  if (es_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_section_esprito_santo_specific_context = document.getElementById('es-volunteer-section-esprito-santo-specific-context');
  if (es_volunteer_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-volunteer-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_section_what_our_clients_say = document.getElementById('es-volunteer-section-what-our-clients-say');
  if (es_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#es-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_section_frequently_asked_questions = document.getElementById('es-volunteer-section-frequently-asked-questions');
  if (es_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#es-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_section_international_support = document.getElementById('es-volunteer-section-international-support');
  if (es_volunteer_section_international_support) {
    gsap.fromTo('#es-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_list_our_credentials = document.getElementById('es-volunteer-list-our-credentials');
  if (es_volunteer_list_our_credentials) {
    gsap.from('#es-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_list_related_services = document.getElementById('es-volunteer-list-related-services');
  if (es_volunteer_list_related_services) {
    gsap.from('#es-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_section_youre_in_good_hands = document.getElementById('es-volunteer-section-youre-in-good-hands');
  if (es_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#es-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_volunteer_section_21 = document.getElementById('es-volunteer-section-21');
  if (es_volunteer_section_21) {
    gsap.fromTo('#es-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('es-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (es_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#es-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #es-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_list_quick_facts = document.getElementById('es-skilledworker-list-quick-facts');
  if (es_skilledworker_list_quick_facts) {
    gsap.from('#es-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_list_common_challenges_applicants_face = document.getElementById('es-skilledworker-list-common-challenges-applicants-face');
  if (es_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#es-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_list_how_we_solve_these_challenges = document.getElementById('es-skilledworker-list-how-we-solve-these-challenges');
  if (es_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#es-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_section_residency_overview = document.getElementById('es-skilledworker-section-residency-overview');
  if (es_skilledworker_section_residency_overview) {
    gsap.fromTo('#es-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_form_who_is_this_residency_for = document.getElementById('es-skilledworker-form-who-is-this-residency-for');
  if (es_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#es-skilledworker-form-who-is-this-residency-for input, #es-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_list_required_documents = document.getElementById('es-skilledworker-list-required-documents');
  if (es_skilledworker_list_required_documents) {
    gsap.from('#es-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_list_application_process = document.getElementById('es-skilledworker-list-application-process');
  if (es_skilledworker_list_application_process) {
    gsap.from('#es-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_section_timelines_deadlines = document.getElementById('es-skilledworker-section-timelines-deadlines');
  if (es_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#es-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_section_fees_costs = document.getElementById('es-skilledworker-section-fees-costs');
  if (es_skilledworker_section_fees_costs) {
    gsap.fromTo('#es-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_list_risks_common_mistakes = document.getElementById('es-skilledworker-list-risks-common-mistakes');
  if (es_skilledworker_list_risks_common_mistakes) {
    gsap.from('#es-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_section_diy_vs_professional_assistance = document.getElementById('es-skilledworker-section-diy-vs-professional-assistance');
  if (es_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_section_esprito_santo_specific_context = document.getElementById('es-skilledworker-section-esprito-santo-specific-context');
  if (es_skilledworker_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-skilledworker-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_section_what_our_clients_say = document.getElementById('es-skilledworker-section-what-our-clients-say');
  if (es_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#es-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_section_frequently_asked_questions = document.getElementById('es-skilledworker-section-frequently-asked-questions');
  if (es_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#es-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_section_international_support = document.getElementById('es-skilledworker-section-international-support');
  if (es_skilledworker_section_international_support) {
    gsap.fromTo('#es-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_list_our_credentials = document.getElementById('es-skilledworker-list-our-credentials');
  if (es_skilledworker_list_our_credentials) {
    gsap.from('#es-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_list_related_services = document.getElementById('es-skilledworker-list-related-services');
  if (es_skilledworker_list_related_services) {
    gsap.from('#es-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_section_youre_in_good_hands = document.getElementById('es-skilledworker-section-youre-in-good-hands');
  if (es_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#es-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_skilledworker_section_21 = document.getElementById('es-skilledworker-section-21');
  if (es_skilledworker_section_21) {
    gsap.fromTo('#es-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('es-religious-form-religious-residency-in-brazil-for-missions');
  if (es_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#es-religious-form-religious-residency-in-brazil-for-missions input, #es-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_list_quick_facts = document.getElementById('es-religious-list-quick-facts');
  if (es_religious_list_quick_facts) {
    gsap.from('#es-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_list_common_challenges_applicants_face = document.getElementById('es-religious-list-common-challenges-applicants-face');
  if (es_religious_list_common_challenges_applicants_face) {
    gsap.from('#es-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_list_how_we_solve_these_challenges = document.getElementById('es-religious-list-how-we-solve-these-challenges');
  if (es_religious_list_how_we_solve_these_challenges) {
    gsap.from('#es-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_section_residency_overview = document.getElementById('es-religious-section-residency-overview');
  if (es_religious_section_residency_overview) {
    gsap.fromTo('#es-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_form_who_is_this_residency_for = document.getElementById('es-religious-form-who-is-this-residency-for');
  if (es_religious_form_who_is_this_residency_for) {
    gsap.from('#es-religious-form-who-is-this-residency-for input, #es-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_list_required_documents = document.getElementById('es-religious-list-required-documents');
  if (es_religious_list_required_documents) {
    gsap.from('#es-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_list_application_process = document.getElementById('es-religious-list-application-process');
  if (es_religious_list_application_process) {
    gsap.from('#es-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_section_timelines_deadlines = document.getElementById('es-religious-section-timelines-deadlines');
  if (es_religious_section_timelines_deadlines) {
    gsap.fromTo('#es-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_section_fees_costs = document.getElementById('es-religious-section-fees-costs');
  if (es_religious_section_fees_costs) {
    gsap.fromTo('#es-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_list_risks_common_mistakes = document.getElementById('es-religious-list-risks-common-mistakes');
  if (es_religious_list_risks_common_mistakes) {
    gsap.from('#es-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_section_diy_vs_professional_assistance = document.getElementById('es-religious-section-diy-vs-professional-assistance');
  if (es_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_section_esprito_santo_specific_context = document.getElementById('es-religious-section-esprito-santo-specific-context');
  if (es_religious_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-religious-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_section_what_our_clients_say = document.getElementById('es-religious-section-what-our-clients-say');
  if (es_religious_section_what_our_clients_say) {
    gsap.fromTo('#es-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_section_frequently_asked_questions = document.getElementById('es-religious-section-frequently-asked-questions');
  if (es_religious_section_frequently_asked_questions) {
    gsap.fromTo('#es-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_section_international_support = document.getElementById('es-religious-section-international-support');
  if (es_religious_section_international_support) {
    gsap.fromTo('#es-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_list_our_credentials = document.getElementById('es-religious-list-our-credentials');
  if (es_religious_list_our_credentials) {
    gsap.from('#es-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_list_related_services = document.getElementById('es-religious-list-related-services');
  if (es_religious_list_related_services) {
    gsap.from('#es-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_section_youre_in_good_hands = document.getElementById('es-religious-section-youre-in-good-hands');
  if (es_religious_section_youre_in_good_hands) {
    gsap.fromTo('#es-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_religious_section_21 = document.getElementById('es-religious-section-21');
  if (es_religious_section_21) {
    gsap.fromTo('#es-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('es-investor-form-gain-residency-in-brazil-through-investment');
  if (es_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#es-investor-form-gain-residency-in-brazil-through-investment input, #es-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_list_quick_facts = document.getElementById('es-investor-list-quick-facts');
  if (es_investor_list_quick_facts) {
    gsap.from('#es-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_list_common_challenges_applicants_face = document.getElementById('es-investor-list-common-challenges-applicants-face');
  if (es_investor_list_common_challenges_applicants_face) {
    gsap.from('#es-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_list_how_we_solve_these_challenges = document.getElementById('es-investor-list-how-we-solve-these-challenges');
  if (es_investor_list_how_we_solve_these_challenges) {
    gsap.from('#es-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_section_residency_overview = document.getElementById('es-investor-section-residency-overview');
  if (es_investor_section_residency_overview) {
    gsap.fromTo('#es-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_form_who_is_this_residency_for = document.getElementById('es-investor-form-who-is-this-residency-for');
  if (es_investor_form_who_is_this_residency_for) {
    gsap.from('#es-investor-form-who-is-this-residency-for input, #es-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_list_required_documents = document.getElementById('es-investor-list-required-documents');
  if (es_investor_list_required_documents) {
    gsap.from('#es-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_list_application_process = document.getElementById('es-investor-list-application-process');
  if (es_investor_list_application_process) {
    gsap.from('#es-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_section_timelines_deadlines = document.getElementById('es-investor-section-timelines-deadlines');
  if (es_investor_section_timelines_deadlines) {
    gsap.fromTo('#es-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_section_fees_costs = document.getElementById('es-investor-section-fees-costs');
  if (es_investor_section_fees_costs) {
    gsap.fromTo('#es-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_list_risks_common_mistakes = document.getElementById('es-investor-list-risks-common-mistakes');
  if (es_investor_list_risks_common_mistakes) {
    gsap.from('#es-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_section_diy_vs_professional_assistance = document.getElementById('es-investor-section-diy-vs-professional-assistance');
  if (es_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_section_esprito_santo_specific_context = document.getElementById('es-investor-section-esprito-santo-specific-context');
  if (es_investor_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-investor-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_section_what_our_clients_say = document.getElementById('es-investor-section-what-our-clients-say');
  if (es_investor_section_what_our_clients_say) {
    gsap.fromTo('#es-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_section_frequently_asked_questions = document.getElementById('es-investor-section-frequently-asked-questions');
  if (es_investor_section_frequently_asked_questions) {
    gsap.fromTo('#es-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_section_international_support = document.getElementById('es-investor-section-international-support');
  if (es_investor_section_international_support) {
    gsap.fromTo('#es-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_list_our_credentials = document.getElementById('es-investor-list-our-credentials');
  if (es_investor_list_our_credentials) {
    gsap.from('#es-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_list_related_services = document.getElementById('es-investor-list-related-services');
  if (es_investor_list_related_services) {
    gsap.from('#es-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_section_youre_in_good_hands = document.getElementById('es-investor-section-youre-in-good-hands');
  if (es_investor_section_youre_in_good_hands) {
    gsap.fromTo('#es-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_investor_section_21 = document.getElementById('es-investor-section-21');
  if (es_investor_section_21) {
    gsap.fromTo('#es-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('es-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (es_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#es-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #es-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_list_quick_facts = document.getElementById('es-healthtreatment-list-quick-facts');
  if (es_healthtreatment_list_quick_facts) {
    gsap.from('#es-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_list_common_challenges_applicants_face = document.getElementById('es-healthtreatment-list-common-challenges-applicants-face');
  if (es_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#es-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('es-healthtreatment-list-how-we-solve-these-challenges');
  if (es_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#es-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_section_residency_overview = document.getElementById('es-healthtreatment-section-residency-overview');
  if (es_healthtreatment_section_residency_overview) {
    gsap.fromTo('#es-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_form_who_is_this_residency_for = document.getElementById('es-healthtreatment-form-who-is-this-residency-for');
  if (es_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#es-healthtreatment-form-who-is-this-residency-for input, #es-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_list_required_documents = document.getElementById('es-healthtreatment-list-required-documents');
  if (es_healthtreatment_list_required_documents) {
    gsap.from('#es-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_list_application_process = document.getElementById('es-healthtreatment-list-application-process');
  if (es_healthtreatment_list_application_process) {
    gsap.from('#es-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_section_timelines_deadlines = document.getElementById('es-healthtreatment-section-timelines-deadlines');
  if (es_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#es-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_section_fees_costs = document.getElementById('es-healthtreatment-section-fees-costs');
  if (es_healthtreatment_section_fees_costs) {
    gsap.fromTo('#es-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_list_risks_common_mistakes = document.getElementById('es-healthtreatment-list-risks-common-mistakes');
  if (es_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#es-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('es-healthtreatment-section-diy-vs-professional-assistance');
  if (es_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_section_esprito_santo_specific_context = document.getElementById('es-healthtreatment-section-esprito-santo-specific-context');
  if (es_healthtreatment_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-healthtreatment-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_section_what_our_clients_say = document.getElementById('es-healthtreatment-section-what-our-clients-say');
  if (es_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#es-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_section_frequently_asked_questions = document.getElementById('es-healthtreatment-section-frequently-asked-questions');
  if (es_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#es-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_section_international_support = document.getElementById('es-healthtreatment-section-international-support');
  if (es_healthtreatment_section_international_support) {
    gsap.fromTo('#es-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_list_our_credentials = document.getElementById('es-healthtreatment-list-our-credentials');
  if (es_healthtreatment_list_our_credentials) {
    gsap.from('#es-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_list_related_services = document.getElementById('es-healthtreatment-list-related-services');
  if (es_healthtreatment_list_related_services) {
    gsap.from('#es-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_section_youre_in_good_hands = document.getElementById('es-healthtreatment-section-youre-in-good-hands');
  if (es_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#es-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_healthtreatment_section_21 = document.getElementById('es-healthtreatment-section-21');
  if (es_healthtreatment_section_21) {
    gsap.fromTo('#es-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('es-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (es_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#es-cplp-form-residency-for-cplp-citizens-in-brazil input, #es-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_list_quick_facts = document.getElementById('es-cplp-list-quick-facts');
  if (es_cplp_list_quick_facts) {
    gsap.from('#es-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_list_common_challenges_applicants_face = document.getElementById('es-cplp-list-common-challenges-applicants-face');
  if (es_cplp_list_common_challenges_applicants_face) {
    gsap.from('#es-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_list_how_we_solve_these_challenges = document.getElementById('es-cplp-list-how-we-solve-these-challenges');
  if (es_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#es-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_section_residency_overview = document.getElementById('es-cplp-section-residency-overview');
  if (es_cplp_section_residency_overview) {
    gsap.fromTo('#es-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_form_who_is_this_residency_for = document.getElementById('es-cplp-form-who-is-this-residency-for');
  if (es_cplp_form_who_is_this_residency_for) {
    gsap.from('#es-cplp-form-who-is-this-residency-for input, #es-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_list_required_documents = document.getElementById('es-cplp-list-required-documents');
  if (es_cplp_list_required_documents) {
    gsap.from('#es-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_list_application_process = document.getElementById('es-cplp-list-application-process');
  if (es_cplp_list_application_process) {
    gsap.from('#es-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_section_timelines_deadlines = document.getElementById('es-cplp-section-timelines-deadlines');
  if (es_cplp_section_timelines_deadlines) {
    gsap.fromTo('#es-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_section_fees_costs = document.getElementById('es-cplp-section-fees-costs');
  if (es_cplp_section_fees_costs) {
    gsap.fromTo('#es-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_list_risks_common_mistakes = document.getElementById('es-cplp-list-risks-common-mistakes');
  if (es_cplp_list_risks_common_mistakes) {
    gsap.from('#es-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_section_diy_vs_professional_assistance = document.getElementById('es-cplp-section-diy-vs-professional-assistance');
  if (es_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_section_esprito_santo_specific_context = document.getElementById('es-cplp-section-esprito-santo-specific-context');
  if (es_cplp_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-cplp-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_section_what_our_clients_say = document.getElementById('es-cplp-section-what-our-clients-say');
  if (es_cplp_section_what_our_clients_say) {
    gsap.fromTo('#es-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_section_frequently_asked_questions = document.getElementById('es-cplp-section-frequently-asked-questions');
  if (es_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#es-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_section_international_support = document.getElementById('es-cplp-section-international-support');
  if (es_cplp_section_international_support) {
    gsap.fromTo('#es-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_list_our_credentials = document.getElementById('es-cplp-list-our-credentials');
  if (es_cplp_list_our_credentials) {
    gsap.from('#es-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_list_related_services = document.getElementById('es-cplp-list-related-services');
  if (es_cplp_list_related_services) {
    gsap.from('#es-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_section_youre_in_good_hands = document.getElementById('es-cplp-section-youre-in-good-hands');
  if (es_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#es-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_cplp_section_21 = document.getElementById('es-cplp-section-21');
  if (es_cplp_section_21) {
    gsap.fromTo('#es-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('es-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (es_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#es-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #es-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_list_quick_facts = document.getElementById('es-youthexchange-list-quick-facts');
  if (es_youthexchange_list_quick_facts) {
    gsap.from('#es-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_list_common_challenges_applicants_face = document.getElementById('es-youthexchange-list-common-challenges-applicants-face');
  if (es_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#es-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_list_how_we_solve_these_challenges = document.getElementById('es-youthexchange-list-how-we-solve-these-challenges');
  if (es_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#es-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_section_residency_overview = document.getElementById('es-youthexchange-section-residency-overview');
  if (es_youthexchange_section_residency_overview) {
    gsap.fromTo('#es-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_form_who_is_this_residency_for = document.getElementById('es-youthexchange-form-who-is-this-residency-for');
  if (es_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#es-youthexchange-form-who-is-this-residency-for input, #es-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_list_required_documents = document.getElementById('es-youthexchange-list-required-documents');
  if (es_youthexchange_list_required_documents) {
    gsap.from('#es-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_list_application_process = document.getElementById('es-youthexchange-list-application-process');
  if (es_youthexchange_list_application_process) {
    gsap.from('#es-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_section_timelines_deadlines = document.getElementById('es-youthexchange-section-timelines-deadlines');
  if (es_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#es-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_section_fees_costs = document.getElementById('es-youthexchange-section-fees-costs');
  if (es_youthexchange_section_fees_costs) {
    gsap.fromTo('#es-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_list_risks_common_mistakes = document.getElementById('es-youthexchange-list-risks-common-mistakes');
  if (es_youthexchange_list_risks_common_mistakes) {
    gsap.from('#es-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_section_diy_vs_professional_assistance = document.getElementById('es-youthexchange-section-diy-vs-professional-assistance');
  if (es_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_section_esprito_santo_specific_context = document.getElementById('es-youthexchange-section-esprito-santo-specific-context');
  if (es_youthexchange_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-youthexchange-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_section_what_our_clients_say = document.getElementById('es-youthexchange-section-what-our-clients-say');
  if (es_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#es-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_section_frequently_asked_questions = document.getElementById('es-youthexchange-section-frequently-asked-questions');
  if (es_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#es-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_section_international_support = document.getElementById('es-youthexchange-section-international-support');
  if (es_youthexchange_section_international_support) {
    gsap.fromTo('#es-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_list_our_credentials = document.getElementById('es-youthexchange-list-our-credentials');
  if (es_youthexchange_list_our_credentials) {
    gsap.from('#es-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_list_related_services = document.getElementById('es-youthexchange-list-related-services');
  if (es_youthexchange_list_related_services) {
    gsap.from('#es-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_section_youre_in_good_hands = document.getElementById('es-youthexchange-section-youre-in-good-hands');
  if (es_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#es-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_youthexchange_section_21 = document.getElementById('es-youthexchange-section-21');
  if (es_youthexchange_section_21) {
    gsap.fromTo('#es-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('es-work-form-work-and-reside-in-brazil-with-work-residency');
  if (es_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#es-work-form-work-and-reside-in-brazil-with-work-residency input, #es-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_list_quick_facts = document.getElementById('es-work-list-quick-facts');
  if (es_work_list_quick_facts) {
    gsap.from('#es-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_list_common_challenges_applicants_face = document.getElementById('es-work-list-common-challenges-applicants-face');
  if (es_work_list_common_challenges_applicants_face) {
    gsap.from('#es-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_list_how_we_solve_these_challenges = document.getElementById('es-work-list-how-we-solve-these-challenges');
  if (es_work_list_how_we_solve_these_challenges) {
    gsap.from('#es-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_section_residency_overview = document.getElementById('es-work-section-residency-overview');
  if (es_work_section_residency_overview) {
    gsap.fromTo('#es-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_form_who_is_this_residency_for = document.getElementById('es-work-form-who-is-this-residency-for');
  if (es_work_form_who_is_this_residency_for) {
    gsap.from('#es-work-form-who-is-this-residency-for input, #es-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_list_required_documents = document.getElementById('es-work-list-required-documents');
  if (es_work_list_required_documents) {
    gsap.from('#es-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_list_application_process = document.getElementById('es-work-list-application-process');
  if (es_work_list_application_process) {
    gsap.from('#es-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_section_timelines_deadlines = document.getElementById('es-work-section-timelines-deadlines');
  if (es_work_section_timelines_deadlines) {
    gsap.fromTo('#es-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_section_fees_costs = document.getElementById('es-work-section-fees-costs');
  if (es_work_section_fees_costs) {
    gsap.fromTo('#es-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_list_risks_common_mistakes = document.getElementById('es-work-list-risks-common-mistakes');
  if (es_work_list_risks_common_mistakes) {
    gsap.from('#es-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_section_diy_vs_professional_assistance = document.getElementById('es-work-section-diy-vs-professional-assistance');
  if (es_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_section_esprito_santo_specific_context = document.getElementById('es-work-section-esprito-santo-specific-context');
  if (es_work_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-work-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_section_what_our_clients_say = document.getElementById('es-work-section-what-our-clients-say');
  if (es_work_section_what_our_clients_say) {
    gsap.fromTo('#es-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_section_frequently_asked_questions = document.getElementById('es-work-section-frequently-asked-questions');
  if (es_work_section_frequently_asked_questions) {
    gsap.fromTo('#es-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_section_international_support = document.getElementById('es-work-section-international-support');
  if (es_work_section_international_support) {
    gsap.fromTo('#es-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_list_our_credentials = document.getElementById('es-work-list-our-credentials');
  if (es_work_list_our_credentials) {
    gsap.from('#es-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_list_related_services = document.getElementById('es-work-list-related-services');
  if (es_work_list_related_services) {
    gsap.from('#es-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_section_youre_in_good_hands = document.getElementById('es-work-section-youre-in-good-hands');
  if (es_work_section_youre_in_good_hands) {
    gsap.fromTo('#es-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_work_section_21 = document.getElementById('es-work-section-21');
  if (es_work_section_21) {
    gsap.fromTo('#es-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('es-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (es_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#es-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #es-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_list_quick_facts = document.getElementById('es-startup-list-quick-facts');
  if (es_startup_list_quick_facts) {
    gsap.from('#es-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_list_common_challenges_applicants_face = document.getElementById('es-startup-list-common-challenges-applicants-face');
  if (es_startup_list_common_challenges_applicants_face) {
    gsap.from('#es-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_list_how_we_solve_these_challenges = document.getElementById('es-startup-list-how-we-solve-these-challenges');
  if (es_startup_list_how_we_solve_these_challenges) {
    gsap.from('#es-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_section_visa_overview = document.getElementById('es-startup-section-visa-overview');
  if (es_startup_section_visa_overview) {
    gsap.fromTo('#es-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_form_who_is_this_visa_for = document.getElementById('es-startup-form-who-is-this-visa-for');
  if (es_startup_form_who_is_this_visa_for) {
    gsap.from('#es-startup-form-who-is-this-visa-for input, #es-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_list_required_documents = document.getElementById('es-startup-list-required-documents');
  if (es_startup_list_required_documents) {
    gsap.from('#es-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_list_application_process = document.getElementById('es-startup-list-application-process');
  if (es_startup_list_application_process) {
    gsap.from('#es-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_section_timelines_deadlines = document.getElementById('es-startup-section-timelines-deadlines');
  if (es_startup_section_timelines_deadlines) {
    gsap.fromTo('#es-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_section_fees_costs = document.getElementById('es-startup-section-fees-costs');
  if (es_startup_section_fees_costs) {
    gsap.fromTo('#es-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_list_risks_common_mistakes = document.getElementById('es-startup-list-risks-common-mistakes');
  if (es_startup_list_risks_common_mistakes) {
    gsap.from('#es-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_section_diy_vs_professional_assistance = document.getElementById('es-startup-section-diy-vs-professional-assistance');
  if (es_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_section_esprito_santo_specific_context = document.getElementById('es-startup-section-esprito-santo-specific-context');
  if (es_startup_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-startup-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_section_what_our_clients_say = document.getElementById('es-startup-section-what-our-clients-say');
  if (es_startup_section_what_our_clients_say) {
    gsap.fromTo('#es-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_section_frequently_asked_questions = document.getElementById('es-startup-section-frequently-asked-questions');
  if (es_startup_section_frequently_asked_questions) {
    gsap.fromTo('#es-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_section_international_support = document.getElementById('es-startup-section-international-support');
  if (es_startup_section_international_support) {
    gsap.fromTo('#es-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_list_our_credentials = document.getElementById('es-startup-list-our-credentials');
  if (es_startup_list_our_credentials) {
    gsap.from('#es-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_list_related_services = document.getElementById('es-startup-list-related-services');
  if (es_startup_list_related_services) {
    gsap.from('#es-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_section_youre_in_good_hands = document.getElementById('es-startup-section-youre-in-good-hands');
  if (es_startup_section_youre_in_good_hands) {
    gsap.fromTo('#es-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_startup_section_21 = document.getElementById('es-startup-section-21');
  if (es_startup_section_21) {
    gsap.fromTo('#es-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('es-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (es_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#es-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #es-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_list_quick_facts = document.getElementById('es-family-list-quick-facts');
  if (es_family_list_quick_facts) {
    gsap.from('#es-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_list_common_challenges_applicants_face = document.getElementById('es-family-list-common-challenges-applicants-face');
  if (es_family_list_common_challenges_applicants_face) {
    gsap.from('#es-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_list_how_we_solve_these_challenges = document.getElementById('es-family-list-how-we-solve-these-challenges');
  if (es_family_list_how_we_solve_these_challenges) {
    gsap.from('#es-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_section_visa_overview = document.getElementById('es-family-section-visa-overview');
  if (es_family_section_visa_overview) {
    gsap.fromTo('#es-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_form_who_is_this_visa_for = document.getElementById('es-family-form-who-is-this-visa-for');
  if (es_family_form_who_is_this_visa_for) {
    gsap.from('#es-family-form-who-is-this-visa-for input, #es-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_list_required_documents = document.getElementById('es-family-list-required-documents');
  if (es_family_list_required_documents) {
    gsap.from('#es-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_list_application_process = document.getElementById('es-family-list-application-process');
  if (es_family_list_application_process) {
    gsap.from('#es-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_section_timelines_deadlines = document.getElementById('es-family-section-timelines-deadlines');
  if (es_family_section_timelines_deadlines) {
    gsap.fromTo('#es-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_section_fees_costs = document.getElementById('es-family-section-fees-costs');
  if (es_family_section_fees_costs) {
    gsap.fromTo('#es-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_list_risks_common_mistakes = document.getElementById('es-family-list-risks-common-mistakes');
  if (es_family_list_risks_common_mistakes) {
    gsap.from('#es-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_section_diy_vs_professional_assistance = document.getElementById('es-family-section-diy-vs-professional-assistance');
  if (es_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_section_esprito_santo_specific_context = document.getElementById('es-family-section-esprito-santo-specific-context');
  if (es_family_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-family-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_section_what_our_clients_say = document.getElementById('es-family-section-what-our-clients-say');
  if (es_family_section_what_our_clients_say) {
    gsap.fromTo('#es-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_section_frequently_asked_questions = document.getElementById('es-family-section-frequently-asked-questions');
  if (es_family_section_frequently_asked_questions) {
    gsap.fromTo('#es-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_section_international_support = document.getElementById('es-family-section-international-support');
  if (es_family_section_international_support) {
    gsap.fromTo('#es-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_list_our_credentials = document.getElementById('es-family-list-our-credentials');
  if (es_family_list_our_credentials) {
    gsap.from('#es-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_list_related_services = document.getElementById('es-family-list-related-services');
  if (es_family_list_related_services) {
    gsap.from('#es-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_section_youre_in_good_hands = document.getElementById('es-family-section-youre-in-good-hands');
  if (es_family_section_youre_in_good_hands) {
    gsap.fromTo('#es-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_family_section_21 = document.getElementById('es-family-section-21');
  if (es_family_section_21) {
    gsap.fromTo('#es-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('es-sports-form-compete-in-brazil-with-the-sports-visa');
  if (es_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#es-sports-form-compete-in-brazil-with-the-sports-visa input, #es-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_list_quick_facts = document.getElementById('es-sports-list-quick-facts');
  if (es_sports_list_quick_facts) {
    gsap.from('#es-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_list_common_challenges_applicants_face = document.getElementById('es-sports-list-common-challenges-applicants-face');
  if (es_sports_list_common_challenges_applicants_face) {
    gsap.from('#es-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_list_how_we_solve_these_challenges = document.getElementById('es-sports-list-how-we-solve-these-challenges');
  if (es_sports_list_how_we_solve_these_challenges) {
    gsap.from('#es-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_section_visa_overview = document.getElementById('es-sports-section-visa-overview');
  if (es_sports_section_visa_overview) {
    gsap.fromTo('#es-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_form_who_is_this_visa_for = document.getElementById('es-sports-form-who-is-this-visa-for');
  if (es_sports_form_who_is_this_visa_for) {
    gsap.from('#es-sports-form-who-is-this-visa-for input, #es-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_list_required_documents = document.getElementById('es-sports-list-required-documents');
  if (es_sports_list_required_documents) {
    gsap.from('#es-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_list_application_process = document.getElementById('es-sports-list-application-process');
  if (es_sports_list_application_process) {
    gsap.from('#es-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_section_timelines_deadlines = document.getElementById('es-sports-section-timelines-deadlines');
  if (es_sports_section_timelines_deadlines) {
    gsap.fromTo('#es-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_section_fees_costs = document.getElementById('es-sports-section-fees-costs');
  if (es_sports_section_fees_costs) {
    gsap.fromTo('#es-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_list_risks_common_mistakes = document.getElementById('es-sports-list-risks-common-mistakes');
  if (es_sports_list_risks_common_mistakes) {
    gsap.from('#es-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_section_diy_vs_professional_assistance = document.getElementById('es-sports-section-diy-vs-professional-assistance');
  if (es_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_section_esprito_santo_specific_context = document.getElementById('es-sports-section-esprito-santo-specific-context');
  if (es_sports_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-sports-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_section_what_our_clients_say = document.getElementById('es-sports-section-what-our-clients-say');
  if (es_sports_section_what_our_clients_say) {
    gsap.fromTo('#es-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_section_frequently_asked_questions = document.getElementById('es-sports-section-frequently-asked-questions');
  if (es_sports_section_frequently_asked_questions) {
    gsap.fromTo('#es-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_section_international_support = document.getElementById('es-sports-section-international-support');
  if (es_sports_section_international_support) {
    gsap.fromTo('#es-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_list_our_credentials = document.getElementById('es-sports-list-our-credentials');
  if (es_sports_list_our_credentials) {
    gsap.from('#es-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_list_related_services = document.getElementById('es-sports-list-related-services');
  if (es_sports_list_related_services) {
    gsap.from('#es-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_section_youre_in_good_hands = document.getElementById('es-sports-section-youre-in-good-hands');
  if (es_sports_section_youre_in_good_hands) {
    gsap.fromTo('#es-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_sports_section_21 = document.getElementById('es-sports-section-21');
  if (es_sports_section_21) {
    gsap.fromTo('#es-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('es-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (es_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#es-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #es-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_list_quick_facts = document.getElementById('es-medical-list-quick-facts');
  if (es_medical_list_quick_facts) {
    gsap.from('#es-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_list_common_challenges_applicants_face = document.getElementById('es-medical-list-common-challenges-applicants-face');
  if (es_medical_list_common_challenges_applicants_face) {
    gsap.from('#es-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_list_how_we_solve_these_challenges = document.getElementById('es-medical-list-how-we-solve-these-challenges');
  if (es_medical_list_how_we_solve_these_challenges) {
    gsap.from('#es-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_section_visa_overview = document.getElementById('es-medical-section-visa-overview');
  if (es_medical_section_visa_overview) {
    gsap.fromTo('#es-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_form_who_is_this_visa_for = document.getElementById('es-medical-form-who-is-this-visa-for');
  if (es_medical_form_who_is_this_visa_for) {
    gsap.from('#es-medical-form-who-is-this-visa-for input, #es-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_list_required_documents = document.getElementById('es-medical-list-required-documents');
  if (es_medical_list_required_documents) {
    gsap.from('#es-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_list_application_process = document.getElementById('es-medical-list-application-process');
  if (es_medical_list_application_process) {
    gsap.from('#es-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_section_timelines_deadlines = document.getElementById('es-medical-section-timelines-deadlines');
  if (es_medical_section_timelines_deadlines) {
    gsap.fromTo('#es-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_section_fees_costs = document.getElementById('es-medical-section-fees-costs');
  if (es_medical_section_fees_costs) {
    gsap.fromTo('#es-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_list_risks_common_mistakes = document.getElementById('es-medical-list-risks-common-mistakes');
  if (es_medical_list_risks_common_mistakes) {
    gsap.from('#es-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_section_diy_vs_professional_assistance = document.getElementById('es-medical-section-diy-vs-professional-assistance');
  if (es_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_section_esprito_santo_specific_context = document.getElementById('es-medical-section-esprito-santo-specific-context');
  if (es_medical_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-medical-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_section_what_our_clients_say = document.getElementById('es-medical-section-what-our-clients-say');
  if (es_medical_section_what_our_clients_say) {
    gsap.fromTo('#es-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_section_frequently_asked_questions = document.getElementById('es-medical-section-frequently-asked-questions');
  if (es_medical_section_frequently_asked_questions) {
    gsap.fromTo('#es-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_section_international_support = document.getElementById('es-medical-section-international-support');
  if (es_medical_section_international_support) {
    gsap.fromTo('#es-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_list_our_credentials = document.getElementById('es-medical-list-our-credentials');
  if (es_medical_list_our_credentials) {
    gsap.from('#es-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_list_related_services = document.getElementById('es-medical-list-related-services');
  if (es_medical_list_related_services) {
    gsap.from('#es-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_section_youre_in_good_hands = document.getElementById('es-medical-section-youre-in-good-hands');
  if (es_medical_section_youre_in_good_hands) {
    gsap.fromTo('#es-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_medical_section_21 = document.getElementById('es-medical-section-21');
  if (es_medical_section_21) {
    gsap.fromTo('#es-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('es-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (es_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#es-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #es-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_list_quick_facts = document.getElementById('es-tourist-list-quick-facts');
  if (es_tourist_list_quick_facts) {
    gsap.from('#es-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_list_common_challenges_applicants_face = document.getElementById('es-tourist-list-common-challenges-applicants-face');
  if (es_tourist_list_common_challenges_applicants_face) {
    gsap.from('#es-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_list_how_we_solve_these_challenges = document.getElementById('es-tourist-list-how-we-solve-these-challenges');
  if (es_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#es-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_section_visa_overview = document.getElementById('es-tourist-section-visa-overview');
  if (es_tourist_section_visa_overview) {
    gsap.fromTo('#es-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_form_who_is_this_visa_for = document.getElementById('es-tourist-form-who-is-this-visa-for');
  if (es_tourist_form_who_is_this_visa_for) {
    gsap.from('#es-tourist-form-who-is-this-visa-for input, #es-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_list_required_documents = document.getElementById('es-tourist-list-required-documents');
  if (es_tourist_list_required_documents) {
    gsap.from('#es-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_list_application_process = document.getElementById('es-tourist-list-application-process');
  if (es_tourist_list_application_process) {
    gsap.from('#es-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_section_timelines_deadlines = document.getElementById('es-tourist-section-timelines-deadlines');
  if (es_tourist_section_timelines_deadlines) {
    gsap.fromTo('#es-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_section_fees_costs = document.getElementById('es-tourist-section-fees-costs');
  if (es_tourist_section_fees_costs) {
    gsap.fromTo('#es-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_list_risks_common_mistakes = document.getElementById('es-tourist-list-risks-common-mistakes');
  if (es_tourist_list_risks_common_mistakes) {
    gsap.from('#es-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_section_diy_vs_professional_assistance = document.getElementById('es-tourist-section-diy-vs-professional-assistance');
  if (es_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_section_esprito_santo_specific_context = document.getElementById('es-tourist-section-esprito-santo-specific-context');
  if (es_tourist_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-tourist-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_section_what_our_clients_say = document.getElementById('es-tourist-section-what-our-clients-say');
  if (es_tourist_section_what_our_clients_say) {
    gsap.fromTo('#es-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_section_frequently_asked_questions = document.getElementById('es-tourist-section-frequently-asked-questions');
  if (es_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#es-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_section_international_support = document.getElementById('es-tourist-section-international-support');
  if (es_tourist_section_international_support) {
    gsap.fromTo('#es-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_list_our_credentials = document.getElementById('es-tourist-list-our-credentials');
  if (es_tourist_list_our_credentials) {
    gsap.from('#es-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_list_related_services = document.getElementById('es-tourist-list-related-services');
  if (es_tourist_list_related_services) {
    gsap.from('#es-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_section_youre_in_good_hands = document.getElementById('es-tourist-section-youre-in-good-hands');
  if (es_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#es-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_tourist_section_21 = document.getElementById('es-tourist-section-21');
  if (es_tourist_section_21) {
    gsap.fromTo('#es-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('es-transit-form-transit-through-brazil-with-the-transit-visa');
  if (es_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#es-transit-form-transit-through-brazil-with-the-transit-visa input, #es-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_list_quick_facts = document.getElementById('es-transit-list-quick-facts');
  if (es_transit_list_quick_facts) {
    gsap.from('#es-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_list_common_challenges_applicants_face = document.getElementById('es-transit-list-common-challenges-applicants-face');
  if (es_transit_list_common_challenges_applicants_face) {
    gsap.from('#es-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_list_how_we_solve_these_challenges = document.getElementById('es-transit-list-how-we-solve-these-challenges');
  if (es_transit_list_how_we_solve_these_challenges) {
    gsap.from('#es-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_section_visa_overview = document.getElementById('es-transit-section-visa-overview');
  if (es_transit_section_visa_overview) {
    gsap.fromTo('#es-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_form_who_is_this_visa_for = document.getElementById('es-transit-form-who-is-this-visa-for');
  if (es_transit_form_who_is_this_visa_for) {
    gsap.from('#es-transit-form-who-is-this-visa-for input, #es-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_list_required_documents = document.getElementById('es-transit-list-required-documents');
  if (es_transit_list_required_documents) {
    gsap.from('#es-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_list_application_process = document.getElementById('es-transit-list-application-process');
  if (es_transit_list_application_process) {
    gsap.from('#es-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_section_timelines_deadlines = document.getElementById('es-transit-section-timelines-deadlines');
  if (es_transit_section_timelines_deadlines) {
    gsap.fromTo('#es-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_section_fees_costs = document.getElementById('es-transit-section-fees-costs');
  if (es_transit_section_fees_costs) {
    gsap.fromTo('#es-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_list_risks_common_mistakes = document.getElementById('es-transit-list-risks-common-mistakes');
  if (es_transit_list_risks_common_mistakes) {
    gsap.from('#es-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_section_diy_vs_professional_assistance = document.getElementById('es-transit-section-diy-vs-professional-assistance');
  if (es_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_section_esprito_santo_specific_context = document.getElementById('es-transit-section-esprito-santo-specific-context');
  if (es_transit_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-transit-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_section_what_our_clients_say = document.getElementById('es-transit-section-what-our-clients-say');
  if (es_transit_section_what_our_clients_say) {
    gsap.fromTo('#es-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_section_frequently_asked_questions = document.getElementById('es-transit-section-frequently-asked-questions');
  if (es_transit_section_frequently_asked_questions) {
    gsap.fromTo('#es-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_section_international_support = document.getElementById('es-transit-section-international-support');
  if (es_transit_section_international_support) {
    gsap.fromTo('#es-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_list_our_credentials = document.getElementById('es-transit-list-our-credentials');
  if (es_transit_list_our_credentials) {
    gsap.from('#es-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_list_related_services = document.getElementById('es-transit-list-related-services');
  if (es_transit_list_related_services) {
    gsap.from('#es-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_section_youre_in_good_hands = document.getElementById('es-transit-section-youre-in-good-hands');
  if (es_transit_section_youre_in_good_hands) {
    gsap.fromTo('#es-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_transit_section_21 = document.getElementById('es-transit-section-21');
  if (es_transit_section_21) {
    gsap.fromTo('#es-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_form_study_in_brazil_with_the_student_visa = document.getElementById('es-student-form-study-in-brazil-with-the-student-visa');
  if (es_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#es-student-form-study-in-brazil-with-the-student-visa input, #es-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_list_quick_facts = document.getElementById('es-student-list-quick-facts');
  if (es_student_list_quick_facts) {
    gsap.from('#es-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_list_common_challenges_applicants_face = document.getElementById('es-student-list-common-challenges-applicants-face');
  if (es_student_list_common_challenges_applicants_face) {
    gsap.from('#es-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_list_how_we_solve_these_challenges = document.getElementById('es-student-list-how-we-solve-these-challenges');
  if (es_student_list_how_we_solve_these_challenges) {
    gsap.from('#es-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_section_visa_overview = document.getElementById('es-student-section-visa-overview');
  if (es_student_section_visa_overview) {
    gsap.fromTo('#es-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_form_who_is_this_visa_for = document.getElementById('es-student-form-who-is-this-visa-for');
  if (es_student_form_who_is_this_visa_for) {
    gsap.from('#es-student-form-who-is-this-visa-for input, #es-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_list_required_documents = document.getElementById('es-student-list-required-documents');
  if (es_student_list_required_documents) {
    gsap.from('#es-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_list_application_process = document.getElementById('es-student-list-application-process');
  if (es_student_list_application_process) {
    gsap.from('#es-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_section_timelines_deadlines = document.getElementById('es-student-section-timelines-deadlines');
  if (es_student_section_timelines_deadlines) {
    gsap.fromTo('#es-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_section_fees_costs = document.getElementById('es-student-section-fees-costs');
  if (es_student_section_fees_costs) {
    gsap.fromTo('#es-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_list_risks_common_mistakes = document.getElementById('es-student-list-risks-common-mistakes');
  if (es_student_list_risks_common_mistakes) {
    gsap.from('#es-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_section_diy_vs_professional_assistance = document.getElementById('es-student-section-diy-vs-professional-assistance');
  if (es_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_section_esprito_santo_specific_context = document.getElementById('es-student-section-esprito-santo-specific-context');
  if (es_student_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-student-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_section_what_our_clients_say = document.getElementById('es-student-section-what-our-clients-say');
  if (es_student_section_what_our_clients_say) {
    gsap.fromTo('#es-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_section_frequently_asked_questions = document.getElementById('es-student-section-frequently-asked-questions');
  if (es_student_section_frequently_asked_questions) {
    gsap.fromTo('#es-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_section_international_support = document.getElementById('es-student-section-international-support');
  if (es_student_section_international_support) {
    gsap.fromTo('#es-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_list_our_credentials = document.getElementById('es-student-list-our-credentials');
  if (es_student_list_our_credentials) {
    gsap.from('#es-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_list_related_services = document.getElementById('es-student-list-related-services');
  if (es_student_list_related_services) {
    gsap.from('#es-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_section_youre_in_good_hands = document.getElementById('es-student-section-youre-in-good-hands');
  if (es_student_section_youre_in_good_hands) {
    gsap.fromTo('#es-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_student_section_21 = document.getElementById('es-student-section-21');
  if (es_student_section_21) {
    gsap.fromTo('#es-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('es-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (es_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#es-business-form-conduct-business-in-brazil-with-the-business-visa input, #es-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_list_quick_facts = document.getElementById('es-business-list-quick-facts');
  if (es_business_list_quick_facts) {
    gsap.from('#es-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_list_common_challenges_applicants_face = document.getElementById('es-business-list-common-challenges-applicants-face');
  if (es_business_list_common_challenges_applicants_face) {
    gsap.from('#es-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_list_how_we_solve_these_challenges = document.getElementById('es-business-list-how-we-solve-these-challenges');
  if (es_business_list_how_we_solve_these_challenges) {
    gsap.from('#es-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_section_visa_overview = document.getElementById('es-business-section-visa-overview');
  if (es_business_section_visa_overview) {
    gsap.fromTo('#es-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_form_who_is_this_visa_for = document.getElementById('es-business-form-who-is-this-visa-for');
  if (es_business_form_who_is_this_visa_for) {
    gsap.from('#es-business-form-who-is-this-visa-for input, #es-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_list_required_documents = document.getElementById('es-business-list-required-documents');
  if (es_business_list_required_documents) {
    gsap.from('#es-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_list_application_process = document.getElementById('es-business-list-application-process');
  if (es_business_list_application_process) {
    gsap.from('#es-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_section_timelines_deadlines = document.getElementById('es-business-section-timelines-deadlines');
  if (es_business_section_timelines_deadlines) {
    gsap.fromTo('#es-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_section_fees_costs = document.getElementById('es-business-section-fees-costs');
  if (es_business_section_fees_costs) {
    gsap.fromTo('#es-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_list_risks_common_mistakes = document.getElementById('es-business-list-risks-common-mistakes');
  if (es_business_list_risks_common_mistakes) {
    gsap.from('#es-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_section_diy_vs_professional_assistance = document.getElementById('es-business-section-diy-vs-professional-assistance');
  if (es_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_section_esprito_santo_specific_context = document.getElementById('es-business-section-esprito-santo-specific-context');
  if (es_business_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-business-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_section_what_our_clients_say = document.getElementById('es-business-section-what-our-clients-say');
  if (es_business_section_what_our_clients_say) {
    gsap.fromTo('#es-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_section_frequently_asked_questions = document.getElementById('es-business-section-frequently-asked-questions');
  if (es_business_section_frequently_asked_questions) {
    gsap.fromTo('#es-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_section_international_support = document.getElementById('es-business-section-international-support');
  if (es_business_section_international_support) {
    gsap.fromTo('#es-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_list_our_credentials = document.getElementById('es-business-list-our-credentials');
  if (es_business_list_our_credentials) {
    gsap.from('#es-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_list_related_services = document.getElementById('es-business-list-related-services');
  if (es_business_list_related_services) {
    gsap.from('#es-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_section_youre_in_good_hands = document.getElementById('es-business-section-youre-in-good-hands');
  if (es_business_section_youre_in_good_hands) {
    gsap.fromTo('#es-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_business_section_21 = document.getElementById('es-business-section-21');
  if (es_business_section_21) {
    gsap.fromTo('#es-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('es-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (es_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#es-research-form-conduct-research-in-brazil-with-the-research-visa input, #es-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_list_quick_facts = document.getElementById('es-research-list-quick-facts');
  if (es_research_list_quick_facts) {
    gsap.from('#es-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_list_common_challenges_applicants_face = document.getElementById('es-research-list-common-challenges-applicants-face');
  if (es_research_list_common_challenges_applicants_face) {
    gsap.from('#es-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_list_how_we_solve_these_challenges = document.getElementById('es-research-list-how-we-solve-these-challenges');
  if (es_research_list_how_we_solve_these_challenges) {
    gsap.from('#es-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_section_visa_overview = document.getElementById('es-research-section-visa-overview');
  if (es_research_section_visa_overview) {
    gsap.fromTo('#es-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_form_who_is_this_visa_for = document.getElementById('es-research-form-who-is-this-visa-for');
  if (es_research_form_who_is_this_visa_for) {
    gsap.from('#es-research-form-who-is-this-visa-for input, #es-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_list_required_documents = document.getElementById('es-research-list-required-documents');
  if (es_research_list_required_documents) {
    gsap.from('#es-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_list_application_process = document.getElementById('es-research-list-application-process');
  if (es_research_list_application_process) {
    gsap.from('#es-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_section_timelines_deadlines = document.getElementById('es-research-section-timelines-deadlines');
  if (es_research_section_timelines_deadlines) {
    gsap.fromTo('#es-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_section_fees_costs = document.getElementById('es-research-section-fees-costs');
  if (es_research_section_fees_costs) {
    gsap.fromTo('#es-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_list_risks_common_mistakes = document.getElementById('es-research-list-risks-common-mistakes');
  if (es_research_list_risks_common_mistakes) {
    gsap.from('#es-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_section_diy_vs_professional_assistance = document.getElementById('es-research-section-diy-vs-professional-assistance');
  if (es_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_section_esprito_santo_specific_context = document.getElementById('es-research-section-esprito-santo-specific-context');
  if (es_research_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-research-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_section_what_our_clients_say = document.getElementById('es-research-section-what-our-clients-say');
  if (es_research_section_what_our_clients_say) {
    gsap.fromTo('#es-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_section_frequently_asked_questions = document.getElementById('es-research-section-frequently-asked-questions');
  if (es_research_section_frequently_asked_questions) {
    gsap.fromTo('#es-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_section_international_support = document.getElementById('es-research-section-international-support');
  if (es_research_section_international_support) {
    gsap.fromTo('#es-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_list_our_credentials = document.getElementById('es-research-list-our-credentials');
  if (es_research_list_our_credentials) {
    gsap.from('#es-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_list_related_services = document.getElementById('es-research-list-related-services');
  if (es_research_list_related_services) {
    gsap.from('#es-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_section_youre_in_good_hands = document.getElementById('es-research-section-youre-in-good-hands');
  if (es_research_section_youre_in_good_hands) {
    gsap.fromTo('#es-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_research_section_21 = document.getElementById('es-research-section-21');
  if (es_research_section_21) {
    gsap.fromTo('#es-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('es-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (es_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#es-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #es-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_list_quick_facts = document.getElementById('es-diplomatic-list-quick-facts');
  if (es_diplomatic_list_quick_facts) {
    gsap.from('#es-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_list_common_challenges_applicants_face = document.getElementById('es-diplomatic-list-common-challenges-applicants-face');
  if (es_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#es-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_list_how_we_solve_these_challenges = document.getElementById('es-diplomatic-list-how-we-solve-these-challenges');
  if (es_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#es-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_section_visa_overview = document.getElementById('es-diplomatic-section-visa-overview');
  if (es_diplomatic_section_visa_overview) {
    gsap.fromTo('#es-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_form_who_is_this_visa_for = document.getElementById('es-diplomatic-form-who-is-this-visa-for');
  if (es_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#es-diplomatic-form-who-is-this-visa-for input, #es-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_list_required_documents = document.getElementById('es-diplomatic-list-required-documents');
  if (es_diplomatic_list_required_documents) {
    gsap.from('#es-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_list_application_process = document.getElementById('es-diplomatic-list-application-process');
  if (es_diplomatic_list_application_process) {
    gsap.from('#es-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_section_timelines_deadlines = document.getElementById('es-diplomatic-section-timelines-deadlines');
  if (es_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#es-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_section_fees_costs = document.getElementById('es-diplomatic-section-fees-costs');
  if (es_diplomatic_section_fees_costs) {
    gsap.fromTo('#es-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_list_risks_common_mistakes = document.getElementById('es-diplomatic-list-risks-common-mistakes');
  if (es_diplomatic_list_risks_common_mistakes) {
    gsap.from('#es-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_section_diy_vs_professional_assistance = document.getElementById('es-diplomatic-section-diy-vs-professional-assistance');
  if (es_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_section_esprito_santo_specific_context = document.getElementById('es-diplomatic-section-esprito-santo-specific-context');
  if (es_diplomatic_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-diplomatic-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_section_what_our_clients_say = document.getElementById('es-diplomatic-section-what-our-clients-say');
  if (es_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#es-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_section_frequently_asked_questions = document.getElementById('es-diplomatic-section-frequently-asked-questions');
  if (es_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#es-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_section_international_support = document.getElementById('es-diplomatic-section-international-support');
  if (es_diplomatic_section_international_support) {
    gsap.fromTo('#es-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_list_our_credentials = document.getElementById('es-diplomatic-list-our-credentials');
  if (es_diplomatic_list_our_credentials) {
    gsap.from('#es-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_list_related_services = document.getElementById('es-diplomatic-list-related-services');
  if (es_diplomatic_list_related_services) {
    gsap.from('#es-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_section_youre_in_good_hands = document.getElementById('es-diplomatic-section-youre-in-good-hands');
  if (es_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#es-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_diplomatic_section_21 = document.getElementById('es-diplomatic-section-21');
  if (es_diplomatic_section_21) {
    gsap.fromTo('#es-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('es-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (es_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#es-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #es-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_list_quick_facts = document.getElementById('es-journalist-list-quick-facts');
  if (es_journalist_list_quick_facts) {
    gsap.from('#es-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_list_common_challenges_applicants_face = document.getElementById('es-journalist-list-common-challenges-applicants-face');
  if (es_journalist_list_common_challenges_applicants_face) {
    gsap.from('#es-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_list_how_we_solve_these_challenges = document.getElementById('es-journalist-list-how-we-solve-these-challenges');
  if (es_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#es-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_section_visa_overview = document.getElementById('es-journalist-section-visa-overview');
  if (es_journalist_section_visa_overview) {
    gsap.fromTo('#es-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_form_who_is_this_visa_for = document.getElementById('es-journalist-form-who-is-this-visa-for');
  if (es_journalist_form_who_is_this_visa_for) {
    gsap.from('#es-journalist-form-who-is-this-visa-for input, #es-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_list_required_documents = document.getElementById('es-journalist-list-required-documents');
  if (es_journalist_list_required_documents) {
    gsap.from('#es-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_list_application_process = document.getElementById('es-journalist-list-application-process');
  if (es_journalist_list_application_process) {
    gsap.from('#es-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_section_timelines_deadlines = document.getElementById('es-journalist-section-timelines-deadlines');
  if (es_journalist_section_timelines_deadlines) {
    gsap.fromTo('#es-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_section_fees_costs = document.getElementById('es-journalist-section-fees-costs');
  if (es_journalist_section_fees_costs) {
    gsap.fromTo('#es-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_list_risks_common_mistakes = document.getElementById('es-journalist-list-risks-common-mistakes');
  if (es_journalist_list_risks_common_mistakes) {
    gsap.from('#es-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_section_diy_vs_professional_assistance = document.getElementById('es-journalist-section-diy-vs-professional-assistance');
  if (es_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_section_esprito_santo_specific_context = document.getElementById('es-journalist-section-esprito-santo-specific-context');
  if (es_journalist_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-journalist-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_section_what_our_clients_say = document.getElementById('es-journalist-section-what-our-clients-say');
  if (es_journalist_section_what_our_clients_say) {
    gsap.fromTo('#es-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_section_frequently_asked_questions = document.getElementById('es-journalist-section-frequently-asked-questions');
  if (es_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#es-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_section_international_support = document.getElementById('es-journalist-section-international-support');
  if (es_journalist_section_international_support) {
    gsap.fromTo('#es-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_list_our_credentials = document.getElementById('es-journalist-list-our-credentials');
  if (es_journalist_list_our_credentials) {
    gsap.from('#es-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_list_related_services = document.getElementById('es-journalist-list-related-services');
  if (es_journalist_list_related_services) {
    gsap.from('#es-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_section_youre_in_good_hands = document.getElementById('es-journalist-section-youre-in-good-hands');
  if (es_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#es-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_journalist_section_21 = document.getElementById('es-journalist-section-21');
  if (es_journalist_section_21) {
    gsap.fromTo('#es-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('es-fines-form-resolve-immigration-fines-in-brazil');
  if (es_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#es-fines-form-resolve-immigration-fines-in-brazil input, #es-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_list_quick_facts = document.getElementById('es-fines-list-quick-facts');
  if (es_fines_list_quick_facts) {
    gsap.from('#es-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_list_common_challenges_applicants_face = document.getElementById('es-fines-list-common-challenges-applicants-face');
  if (es_fines_list_common_challenges_applicants_face) {
    gsap.from('#es-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_list_how_we_solve_these_challenges = document.getElementById('es-fines-list-how-we-solve-these-challenges');
  if (es_fines_list_how_we_solve_these_challenges) {
    gsap.from('#es-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_section_service_overview = document.getElementById('es-fines-section-service-overview');
  if (es_fines_section_service_overview) {
    gsap.fromTo('#es-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_form_who_is_this_service_for = document.getElementById('es-fines-form-who-is-this-service-for');
  if (es_fines_form_who_is_this_service_for) {
    gsap.from('#es-fines-form-who-is-this-service-for input, #es-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_list_required_documents = document.getElementById('es-fines-list-required-documents');
  if (es_fines_list_required_documents) {
    gsap.from('#es-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_list_process = document.getElementById('es-fines-list-process');
  if (es_fines_list_process) {
    gsap.from('#es-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_section_timelines_deadlines = document.getElementById('es-fines-section-timelines-deadlines');
  if (es_fines_section_timelines_deadlines) {
    gsap.fromTo('#es-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_section_fees_costs = document.getElementById('es-fines-section-fees-costs');
  if (es_fines_section_fees_costs) {
    gsap.fromTo('#es-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_list_risks_common_mistakes = document.getElementById('es-fines-list-risks-common-mistakes');
  if (es_fines_list_risks_common_mistakes) {
    gsap.from('#es-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_section_diy_vs_professional_assistance = document.getElementById('es-fines-section-diy-vs-professional-assistance');
  if (es_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_section_esprito_santo_specific_context = document.getElementById('es-fines-section-esprito-santo-specific-context');
  if (es_fines_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-fines-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_section_what_our_clients_say = document.getElementById('es-fines-section-what-our-clients-say');
  if (es_fines_section_what_our_clients_say) {
    gsap.fromTo('#es-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_section_frequently_asked_questions = document.getElementById('es-fines-section-frequently-asked-questions');
  if (es_fines_section_frequently_asked_questions) {
    gsap.fromTo('#es-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_section_international_support = document.getElementById('es-fines-section-international-support');
  if (es_fines_section_international_support) {
    gsap.fromTo('#es-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_list_our_credentials = document.getElementById('es-fines-list-our-credentials');
  if (es_fines_list_our_credentials) {
    gsap.from('#es-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_list_related_services = document.getElementById('es-fines-list-related-services');
  if (es_fines_list_related_services) {
    gsap.from('#es-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_section_youre_in_good_hands = document.getElementById('es-fines-section-youre-in-good-hands');
  if (es_fines_section_youre_in_good_hands) {
    gsap.fromTo('#es-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_fines_section_21 = document.getElementById('es-fines-section-21');
  if (es_fines_section_21) {
    gsap.fromTo('#es-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_form_deportation_assistance_in_brazil = document.getElementById('es-deportation-form-deportation-assistance-in-brazil');
  if (es_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#es-deportation-form-deportation-assistance-in-brazil input, #es-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_list_quick_facts = document.getElementById('es-deportation-list-quick-facts');
  if (es_deportation_list_quick_facts) {
    gsap.from('#es-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_list_common_challenges_applicants_face = document.getElementById('es-deportation-list-common-challenges-applicants-face');
  if (es_deportation_list_common_challenges_applicants_face) {
    gsap.from('#es-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_list_how_we_solve_these_challenges = document.getElementById('es-deportation-list-how-we-solve-these-challenges');
  if (es_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#es-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_section_service_overview = document.getElementById('es-deportation-section-service-overview');
  if (es_deportation_section_service_overview) {
    gsap.fromTo('#es-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_form_who_is_this_service_for = document.getElementById('es-deportation-form-who-is-this-service-for');
  if (es_deportation_form_who_is_this_service_for) {
    gsap.from('#es-deportation-form-who-is-this-service-for input, #es-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_list_required_documents = document.getElementById('es-deportation-list-required-documents');
  if (es_deportation_list_required_documents) {
    gsap.from('#es-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_list_process = document.getElementById('es-deportation-list-process');
  if (es_deportation_list_process) {
    gsap.from('#es-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_section_timelines_deadlines = document.getElementById('es-deportation-section-timelines-deadlines');
  if (es_deportation_section_timelines_deadlines) {
    gsap.fromTo('#es-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_section_fees_costs = document.getElementById('es-deportation-section-fees-costs');
  if (es_deportation_section_fees_costs) {
    gsap.fromTo('#es-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_list_risks_common_mistakes = document.getElementById('es-deportation-list-risks-common-mistakes');
  if (es_deportation_list_risks_common_mistakes) {
    gsap.from('#es-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_section_diy_vs_professional_assistance = document.getElementById('es-deportation-section-diy-vs-professional-assistance');
  if (es_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_section_esprito_santo_specific_context = document.getElementById('es-deportation-section-esprito-santo-specific-context');
  if (es_deportation_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-deportation-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_section_what_our_clients_say = document.getElementById('es-deportation-section-what-our-clients-say');
  if (es_deportation_section_what_our_clients_say) {
    gsap.fromTo('#es-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_section_frequently_asked_questions = document.getElementById('es-deportation-section-frequently-asked-questions');
  if (es_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#es-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_section_international_support = document.getElementById('es-deportation-section-international-support');
  if (es_deportation_section_international_support) {
    gsap.fromTo('#es-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_list_our_credentials = document.getElementById('es-deportation-list-our-credentials');
  if (es_deportation_list_our_credentials) {
    gsap.from('#es-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_list_related_services = document.getElementById('es-deportation-list-related-services');
  if (es_deportation_list_related_services) {
    gsap.from('#es-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_section_youre_in_good_hands = document.getElementById('es-deportation-section-youre-in-good-hands');
  if (es_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#es-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_deportation_section_21 = document.getElementById('es-deportation-section-21');
  if (es_deportation_section_21) {
    gsap.fromTo('#es-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('es-translation-form-sworn-document-translation-services-in-brazil');
  if (es_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#es-translation-form-sworn-document-translation-services-in-brazil input, #es-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_list_quick_facts = document.getElementById('es-translation-list-quick-facts');
  if (es_translation_list_quick_facts) {
    gsap.from('#es-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_list_common_challenges_applicants_face = document.getElementById('es-translation-list-common-challenges-applicants-face');
  if (es_translation_list_common_challenges_applicants_face) {
    gsap.from('#es-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_list_how_we_solve_these_challenges = document.getElementById('es-translation-list-how-we-solve-these-challenges');
  if (es_translation_list_how_we_solve_these_challenges) {
    gsap.from('#es-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_section_service_overview = document.getElementById('es-translation-section-service-overview');
  if (es_translation_section_service_overview) {
    gsap.fromTo('#es-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_form_who_is_this_service_for = document.getElementById('es-translation-form-who-is-this-service-for');
  if (es_translation_form_who_is_this_service_for) {
    gsap.from('#es-translation-form-who-is-this-service-for input, #es-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_list_required_documents = document.getElementById('es-translation-list-required-documents');
  if (es_translation_list_required_documents) {
    gsap.from('#es-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_list_process = document.getElementById('es-translation-list-process');
  if (es_translation_list_process) {
    gsap.from('#es-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_section_timelines_deadlines = document.getElementById('es-translation-section-timelines-deadlines');
  if (es_translation_section_timelines_deadlines) {
    gsap.fromTo('#es-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_section_fees_costs = document.getElementById('es-translation-section-fees-costs');
  if (es_translation_section_fees_costs) {
    gsap.fromTo('#es-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_list_risks_common_mistakes = document.getElementById('es-translation-list-risks-common-mistakes');
  if (es_translation_list_risks_common_mistakes) {
    gsap.from('#es-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_section_diy_vs_professional_assistance = document.getElementById('es-translation-section-diy-vs-professional-assistance');
  if (es_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_section_esprito_santo_specific_context = document.getElementById('es-translation-section-esprito-santo-specific-context');
  if (es_translation_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-translation-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_section_what_our_clients_say = document.getElementById('es-translation-section-what-our-clients-say');
  if (es_translation_section_what_our_clients_say) {
    gsap.fromTo('#es-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_section_frequently_asked_questions = document.getElementById('es-translation-section-frequently-asked-questions');
  if (es_translation_section_frequently_asked_questions) {
    gsap.fromTo('#es-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_section_international_support = document.getElementById('es-translation-section-international-support');
  if (es_translation_section_international_support) {
    gsap.fromTo('#es-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_list_our_credentials = document.getElementById('es-translation-list-our-credentials');
  if (es_translation_list_our_credentials) {
    gsap.from('#es-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_list_related_services = document.getElementById('es-translation-list-related-services');
  if (es_translation_list_related_services) {
    gsap.from('#es-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_section_youre_in_good_hands = document.getElementById('es-translation-section-youre-in-good-hands');
  if (es_translation_section_youre_in_good_hands) {
    gsap.fromTo('#es-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_translation_section_21 = document.getElementById('es-translation-section-21');
  if (es_translation_section_21) {
    gsap.fromTo('#es-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('es-expulsion-form-expulsion-assistance-in-brazil');
  if (es_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#es-expulsion-form-expulsion-assistance-in-brazil input, #es-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_list_quick_facts = document.getElementById('es-expulsion-list-quick-facts');
  if (es_expulsion_list_quick_facts) {
    gsap.from('#es-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_list_common_challenges_applicants_face = document.getElementById('es-expulsion-list-common-challenges-applicants-face');
  if (es_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#es-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_list_how_we_solve_these_challenges = document.getElementById('es-expulsion-list-how-we-solve-these-challenges');
  if (es_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#es-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_section_service_overview = document.getElementById('es-expulsion-section-service-overview');
  if (es_expulsion_section_service_overview) {
    gsap.fromTo('#es-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_form_who_is_this_service_for = document.getElementById('es-expulsion-form-who-is-this-service-for');
  if (es_expulsion_form_who_is_this_service_for) {
    gsap.from('#es-expulsion-form-who-is-this-service-for input, #es-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_list_required_documents = document.getElementById('es-expulsion-list-required-documents');
  if (es_expulsion_list_required_documents) {
    gsap.from('#es-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_list_process = document.getElementById('es-expulsion-list-process');
  if (es_expulsion_list_process) {
    gsap.from('#es-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_section_timelines_deadlines = document.getElementById('es-expulsion-section-timelines-deadlines');
  if (es_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#es-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_section_fees_costs = document.getElementById('es-expulsion-section-fees-costs');
  if (es_expulsion_section_fees_costs) {
    gsap.fromTo('#es-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_list_risks_common_mistakes = document.getElementById('es-expulsion-list-risks-common-mistakes');
  if (es_expulsion_list_risks_common_mistakes) {
    gsap.from('#es-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_section_diy_vs_professional_assistance = document.getElementById('es-expulsion-section-diy-vs-professional-assistance');
  if (es_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_section_esprito_santo_specific_context = document.getElementById('es-expulsion-section-esprito-santo-specific-context');
  if (es_expulsion_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-expulsion-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_section_what_our_clients_say = document.getElementById('es-expulsion-section-what-our-clients-say');
  if (es_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#es-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_section_frequently_asked_questions = document.getElementById('es-expulsion-section-frequently-asked-questions');
  if (es_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#es-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_section_international_support = document.getElementById('es-expulsion-section-international-support');
  if (es_expulsion_section_international_support) {
    gsap.fromTo('#es-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_list_our_credentials = document.getElementById('es-expulsion-list-our-credentials');
  if (es_expulsion_list_our_credentials) {
    gsap.from('#es-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_list_related_services = document.getElementById('es-expulsion-list-related-services');
  if (es_expulsion_list_related_services) {
    gsap.from('#es-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_section_youre_in_good_hands = document.getElementById('es-expulsion-section-youre-in-good-hands');
  if (es_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#es-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_expulsion_section_21 = document.getElementById('es-expulsion-section-21');
  if (es_expulsion_section_21) {
    gsap.fromTo('#es-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('es-appeals-form-appeal-immigration-denials-in-brazil');
  if (es_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#es-appeals-form-appeal-immigration-denials-in-brazil input, #es-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_list_quick_facts = document.getElementById('es-appeals-list-quick-facts');
  if (es_appeals_list_quick_facts) {
    gsap.from('#es-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_list_common_challenges_applicants_face = document.getElementById('es-appeals-list-common-challenges-applicants-face');
  if (es_appeals_list_common_challenges_applicants_face) {
    gsap.from('#es-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_list_how_we_solve_these_challenges = document.getElementById('es-appeals-list-how-we-solve-these-challenges');
  if (es_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#es-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_section_service_overview = document.getElementById('es-appeals-section-service-overview');
  if (es_appeals_section_service_overview) {
    gsap.fromTo('#es-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_form_who_is_this_service_for = document.getElementById('es-appeals-form-who-is-this-service-for');
  if (es_appeals_form_who_is_this_service_for) {
    gsap.from('#es-appeals-form-who-is-this-service-for input, #es-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_list_required_documents = document.getElementById('es-appeals-list-required-documents');
  if (es_appeals_list_required_documents) {
    gsap.from('#es-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_list_appeal_process = document.getElementById('es-appeals-list-appeal-process');
  if (es_appeals_list_appeal_process) {
    gsap.from('#es-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_section_timelines_deadlines = document.getElementById('es-appeals-section-timelines-deadlines');
  if (es_appeals_section_timelines_deadlines) {
    gsap.fromTo('#es-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_section_fees_costs = document.getElementById('es-appeals-section-fees-costs');
  if (es_appeals_section_fees_costs) {
    gsap.fromTo('#es-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_list_risks_common_mistakes = document.getElementById('es-appeals-list-risks-common-mistakes');
  if (es_appeals_list_risks_common_mistakes) {
    gsap.from('#es-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_section_diy_vs_professional_assistance = document.getElementById('es-appeals-section-diy-vs-professional-assistance');
  if (es_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_section_esprito_santo_specific_context = document.getElementById('es-appeals-section-esprito-santo-specific-context');
  if (es_appeals_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-appeals-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_section_what_our_clients_say = document.getElementById('es-appeals-section-what-our-clients-say');
  if (es_appeals_section_what_our_clients_say) {
    gsap.fromTo('#es-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_section_frequently_asked_questions = document.getElementById('es-appeals-section-frequently-asked-questions');
  if (es_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#es-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_section_international_support = document.getElementById('es-appeals-section-international-support');
  if (es_appeals_section_international_support) {
    gsap.fromTo('#es-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_list_our_credentials = document.getElementById('es-appeals-list-our-credentials');
  if (es_appeals_list_our_credentials) {
    gsap.from('#es-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_list_related_services = document.getElementById('es-appeals-list-related-services');
  if (es_appeals_list_related_services) {
    gsap.from('#es-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_section_youre_in_good_hands = document.getElementById('es-appeals-section-youre-in-good-hands');
  if (es_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#es-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_appeals_section_21 = document.getElementById('es-appeals-section-21');
  if (es_appeals_section_21) {
    gsap.fromTo('#es-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('es-consular-form-consular-services-in-brazil-for-citizens');
  if (es_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#es-consular-form-consular-services-in-brazil-for-citizens input, #es-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_list_quick_facts = document.getElementById('es-consular-list-quick-facts');
  if (es_consular_list_quick_facts) {
    gsap.from('#es-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_list_common_challenges_applicants_face = document.getElementById('es-consular-list-common-challenges-applicants-face');
  if (es_consular_list_common_challenges_applicants_face) {
    gsap.from('#es-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_list_how_we_solve_these_challenges = document.getElementById('es-consular-list-how-we-solve-these-challenges');
  if (es_consular_list_how_we_solve_these_challenges) {
    gsap.from('#es-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_section_service_overview = document.getElementById('es-consular-section-service-overview');
  if (es_consular_section_service_overview) {
    gsap.fromTo('#es-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_form_who_is_this_service_for = document.getElementById('es-consular-form-who-is-this-service-for');
  if (es_consular_form_who_is_this_service_for) {
    gsap.from('#es-consular-form-who-is-this-service-for input, #es-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_list_required_documents = document.getElementById('es-consular-list-required-documents');
  if (es_consular_list_required_documents) {
    gsap.from('#es-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_list_process = document.getElementById('es-consular-list-process');
  if (es_consular_list_process) {
    gsap.from('#es-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_section_timelines_deadlines = document.getElementById('es-consular-section-timelines-deadlines');
  if (es_consular_section_timelines_deadlines) {
    gsap.fromTo('#es-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_section_fees_costs = document.getElementById('es-consular-section-fees-costs');
  if (es_consular_section_fees_costs) {
    gsap.fromTo('#es-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_list_risks_common_mistakes = document.getElementById('es-consular-list-risks-common-mistakes');
  if (es_consular_list_risks_common_mistakes) {
    gsap.from('#es-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_section_diy_vs_professional_assistance = document.getElementById('es-consular-section-diy-vs-professional-assistance');
  if (es_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_section_esprito_santo_specific_context = document.getElementById('es-consular-section-esprito-santo-specific-context');
  if (es_consular_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-consular-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_section_what_our_clients_say = document.getElementById('es-consular-section-what-our-clients-say');
  if (es_consular_section_what_our_clients_say) {
    gsap.fromTo('#es-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_section_frequently_asked_questions = document.getElementById('es-consular-section-frequently-asked-questions');
  if (es_consular_section_frequently_asked_questions) {
    gsap.fromTo('#es-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_section_international_support = document.getElementById('es-consular-section-international-support');
  if (es_consular_section_international_support) {
    gsap.fromTo('#es-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_list_our_credentials = document.getElementById('es-consular-list-our-credentials');
  if (es_consular_list_our_credentials) {
    gsap.from('#es-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_list_related_services = document.getElementById('es-consular-list-related-services');
  if (es_consular_list_related_services) {
    gsap.from('#es-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_section_youre_in_good_hands = document.getElementById('es-consular-section-youre-in-good-hands');
  if (es_consular_section_youre_in_good_hands) {
    gsap.fromTo('#es-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_consular_section_21 = document.getElementById('es-consular-section-21');
  if (es_consular_section_21) {
    gsap.fromTo('#es-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('es-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (es_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#es-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #es-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_list_quick_facts = document.getElementById('es-criminalrecords-list-quick-facts');
  if (es_criminalrecords_list_quick_facts) {
    gsap.from('#es-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_list_common_challenges_applicants_face = document.getElementById('es-criminalrecords-list-common-challenges-applicants-face');
  if (es_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#es-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('es-criminalrecords-list-how-we-solve-these-challenges');
  if (es_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#es-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_section_service_overview = document.getElementById('es-criminalrecords-section-service-overview');
  if (es_criminalrecords_section_service_overview) {
    gsap.fromTo('#es-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_form_who_is_this_service_for = document.getElementById('es-criminalrecords-form-who-is-this-service-for');
  if (es_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#es-criminalrecords-form-who-is-this-service-for input, #es-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_list_required_documents = document.getElementById('es-criminalrecords-list-required-documents');
  if (es_criminalrecords_list_required_documents) {
    gsap.from('#es-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_list_process = document.getElementById('es-criminalrecords-list-process');
  if (es_criminalrecords_list_process) {
    gsap.from('#es-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_section_timelines_deadlines = document.getElementById('es-criminalrecords-section-timelines-deadlines');
  if (es_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#es-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_section_fees_costs = document.getElementById('es-criminalrecords-section-fees-costs');
  if (es_criminalrecords_section_fees_costs) {
    gsap.fromTo('#es-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_list_risks_common_mistakes = document.getElementById('es-criminalrecords-list-risks-common-mistakes');
  if (es_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#es-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('es-criminalrecords-section-diy-vs-professional-assistance');
  if (es_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_section_esprito_santo_specific_context = document.getElementById('es-criminalrecords-section-esprito-santo-specific-context');
  if (es_criminalrecords_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-criminalrecords-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_section_what_our_clients_say = document.getElementById('es-criminalrecords-section-what-our-clients-say');
  if (es_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#es-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_section_frequently_asked_questions = document.getElementById('es-criminalrecords-section-frequently-asked-questions');
  if (es_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#es-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_section_international_support = document.getElementById('es-criminalrecords-section-international-support');
  if (es_criminalrecords_section_international_support) {
    gsap.fromTo('#es-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_list_our_credentials = document.getElementById('es-criminalrecords-list-our-credentials');
  if (es_criminalrecords_list_our_credentials) {
    gsap.from('#es-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_list_related_services = document.getElementById('es-criminalrecords-list-related-services');
  if (es_criminalrecords_list_related_services) {
    gsap.from('#es-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_section_youre_in_good_hands = document.getElementById('es-criminalrecords-section-youre-in-good-hands');
  if (es_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#es-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_criminalrecords_section_21 = document.getElementById('es-criminalrecords-section-21');
  if (es_criminalrecords_section_21) {
    gsap.fromTo('#es-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_form_extradition_assistance_in_brazil = document.getElementById('es-extradition-form-extradition-assistance-in-brazil');
  if (es_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#es-extradition-form-extradition-assistance-in-brazil input, #es-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_list_quick_facts = document.getElementById('es-extradition-list-quick-facts');
  if (es_extradition_list_quick_facts) {
    gsap.from('#es-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_list_common_challenges_applicants_face = document.getElementById('es-extradition-list-common-challenges-applicants-face');
  if (es_extradition_list_common_challenges_applicants_face) {
    gsap.from('#es-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_list_how_we_solve_these_challenges = document.getElementById('es-extradition-list-how-we-solve-these-challenges');
  if (es_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#es-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_section_service_overview = document.getElementById('es-extradition-section-service-overview');
  if (es_extradition_section_service_overview) {
    gsap.fromTo('#es-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_form_who_is_this_service_for = document.getElementById('es-extradition-form-who-is-this-service-for');
  if (es_extradition_form_who_is_this_service_for) {
    gsap.from('#es-extradition-form-who-is-this-service-for input, #es-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_list_required_documents = document.getElementById('es-extradition-list-required-documents');
  if (es_extradition_list_required_documents) {
    gsap.from('#es-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_list_process = document.getElementById('es-extradition-list-process');
  if (es_extradition_list_process) {
    gsap.from('#es-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_section_timelines_deadlines = document.getElementById('es-extradition-section-timelines-deadlines');
  if (es_extradition_section_timelines_deadlines) {
    gsap.fromTo('#es-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_section_fees_costs = document.getElementById('es-extradition-section-fees-costs');
  if (es_extradition_section_fees_costs) {
    gsap.fromTo('#es-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_list_risks_common_mistakes = document.getElementById('es-extradition-list-risks-common-mistakes');
  if (es_extradition_list_risks_common_mistakes) {
    gsap.from('#es-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_section_diy_vs_professional_assistance = document.getElementById('es-extradition-section-diy-vs-professional-assistance');
  if (es_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_section_esprito_santo_specific_context = document.getElementById('es-extradition-section-esprito-santo-specific-context');
  if (es_extradition_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-extradition-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_section_what_our_clients_say = document.getElementById('es-extradition-section-what-our-clients-say');
  if (es_extradition_section_what_our_clients_say) {
    gsap.fromTo('#es-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_section_frequently_asked_questions = document.getElementById('es-extradition-section-frequently-asked-questions');
  if (es_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#es-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_section_international_support = document.getElementById('es-extradition-section-international-support');
  if (es_extradition_section_international_support) {
    gsap.fromTo('#es-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_list_our_credentials = document.getElementById('es-extradition-list-our-credentials');
  if (es_extradition_list_our_credentials) {
    gsap.from('#es-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_list_related_services = document.getElementById('es-extradition-list-related-services');
  if (es_extradition_list_related_services) {
    gsap.from('#es-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_section_youre_in_good_hands = document.getElementById('es-extradition-section-youre-in-good-hands');
  if (es_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#es-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_extradition_section_21 = document.getElementById('es-extradition-section-21');
  if (es_extradition_section_21) {
    gsap.fromTo('#es-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_form_discover_the_north_amazon_and_beyond = document.getElementById('es-north-form-discover-the-north-amazon-and-beyond');
  if (es_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#es-north-form-discover-the-north-amazon-and-beyond input, #es-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_list_quick_facts = document.getElementById('es-north-list-quick-facts');
  if (es_north_list_quick_facts) {
    gsap.from('#es-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_list_common_challenges_applicants_face = document.getElementById('es-north-list-common-challenges-applicants-face');
  if (es_north_list_common_challenges_applicants_face) {
    gsap.from('#es-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_list_how_we_solve_these_challenges = document.getElementById('es-north-list-how-we-solve-these-challenges');
  if (es_north_list_how_we_solve_these_challenges) {
    gsap.from('#es-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_section_trip_overview = document.getElementById('es-north-section-trip-overview');
  if (es_north_section_trip_overview) {
    gsap.fromTo('#es-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_form_who_is_this_trip_for = document.getElementById('es-north-form-who-is-this-trip-for');
  if (es_north_form_who_is_this_trip_for) {
    gsap.from('#es-north-form-who-is-this-trip-for input, #es-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_list_required_documents = document.getElementById('es-north-list-required-documents');
  if (es_north_list_required_documents) {
    gsap.from('#es-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_list_booking_process = document.getElementById('es-north-list-booking-process');
  if (es_north_list_booking_process) {
    gsap.from('#es-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_section_timelines_deadlines = document.getElementById('es-north-section-timelines-deadlines');
  if (es_north_section_timelines_deadlines) {
    gsap.fromTo('#es-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_section_fees_costs = document.getElementById('es-north-section-fees-costs');
  if (es_north_section_fees_costs) {
    gsap.fromTo('#es-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_list_risks_common_mistakes = document.getElementById('es-north-list-risks-common-mistakes');
  if (es_north_list_risks_common_mistakes) {
    gsap.from('#es-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_section_diy_vs_professional_assistance = document.getElementById('es-north-section-diy-vs-professional-assistance');
  if (es_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_section_esprito_santo_specific_context = document.getElementById('es-north-section-esprito-santo-specific-context');
  if (es_north_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-north-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_section_what_our_clients_say = document.getElementById('es-north-section-what-our-clients-say');
  if (es_north_section_what_our_clients_say) {
    gsap.fromTo('#es-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_section_frequently_asked_questions = document.getElementById('es-north-section-frequently-asked-questions');
  if (es_north_section_frequently_asked_questions) {
    gsap.fromTo('#es-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_section_international_support = document.getElementById('es-north-section-international-support');
  if (es_north_section_international_support) {
    gsap.fromTo('#es-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_list_our_credentials = document.getElementById('es-north-list-our-credentials');
  if (es_north_list_our_credentials) {
    gsap.from('#es-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_list_related_services = document.getElementById('es-north-list-related-services');
  if (es_north_list_related_services) {
    gsap.from('#es-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_section_youre_in_good_hands = document.getElementById('es-north-section-youre-in-good-hands');
  if (es_north_section_youre_in_good_hands) {
    gsap.fromTo('#es-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_north_section_21 = document.getElementById('es-north-section-21');
  if (es_north_section_21) {
    gsap.fromTo('#es-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('es-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (es_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#es-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #es-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_list_quick_facts = document.getElementById('es-centralwest-list-quick-facts');
  if (es_centralwest_list_quick_facts) {
    gsap.from('#es-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_list_common_challenges_applicants_face = document.getElementById('es-centralwest-list-common-challenges-applicants-face');
  if (es_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#es-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_list_how_we_solve_these_challenges = document.getElementById('es-centralwest-list-how-we-solve-these-challenges');
  if (es_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#es-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_section_trip_overview = document.getElementById('es-centralwest-section-trip-overview');
  if (es_centralwest_section_trip_overview) {
    gsap.fromTo('#es-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_form_who_is_this_trip_for = document.getElementById('es-centralwest-form-who-is-this-trip-for');
  if (es_centralwest_form_who_is_this_trip_for) {
    gsap.from('#es-centralwest-form-who-is-this-trip-for input, #es-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_list_required_documents = document.getElementById('es-centralwest-list-required-documents');
  if (es_centralwest_list_required_documents) {
    gsap.from('#es-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_list_booking_process = document.getElementById('es-centralwest-list-booking-process');
  if (es_centralwest_list_booking_process) {
    gsap.from('#es-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_section_timelines_deadlines = document.getElementById('es-centralwest-section-timelines-deadlines');
  if (es_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#es-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_section_fees_costs = document.getElementById('es-centralwest-section-fees-costs');
  if (es_centralwest_section_fees_costs) {
    gsap.fromTo('#es-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_list_risks_common_mistakes = document.getElementById('es-centralwest-list-risks-common-mistakes');
  if (es_centralwest_list_risks_common_mistakes) {
    gsap.from('#es-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_section_diy_vs_professional_assistance = document.getElementById('es-centralwest-section-diy-vs-professional-assistance');
  if (es_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_section_esprito_santo_specific_context = document.getElementById('es-centralwest-section-esprito-santo-specific-context');
  if (es_centralwest_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-centralwest-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_section_what_our_clients_say = document.getElementById('es-centralwest-section-what-our-clients-say');
  if (es_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#es-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_section_frequently_asked_questions = document.getElementById('es-centralwest-section-frequently-asked-questions');
  if (es_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#es-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_section_international_support = document.getElementById('es-centralwest-section-international-support');
  if (es_centralwest_section_international_support) {
    gsap.fromTo('#es-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_list_our_credentials = document.getElementById('es-centralwest-list-our-credentials');
  if (es_centralwest_list_our_credentials) {
    gsap.from('#es-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_list_related_services = document.getElementById('es-centralwest-list-related-services');
  if (es_centralwest_list_related_services) {
    gsap.from('#es-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_section_youre_in_good_hands = document.getElementById('es-centralwest-section-youre-in-good-hands');
  if (es_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#es-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_centralwest_section_21 = document.getElementById('es-centralwest-section-21');
  if (es_centralwest_section_21) {
    gsap.fromTo('#es-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('es-southeast-form-dynamic-southeast-cities-and-history');
  if (es_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#es-southeast-form-dynamic-southeast-cities-and-history input, #es-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_list_quick_facts = document.getElementById('es-southeast-list-quick-facts');
  if (es_southeast_list_quick_facts) {
    gsap.from('#es-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_list_common_challenges_applicants_face = document.getElementById('es-southeast-list-common-challenges-applicants-face');
  if (es_southeast_list_common_challenges_applicants_face) {
    gsap.from('#es-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_list_how_we_solve_these_challenges = document.getElementById('es-southeast-list-how-we-solve-these-challenges');
  if (es_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#es-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_section_trip_overview = document.getElementById('es-southeast-section-trip-overview');
  if (es_southeast_section_trip_overview) {
    gsap.fromTo('#es-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_form_who_is_this_trip_for = document.getElementById('es-southeast-form-who-is-this-trip-for');
  if (es_southeast_form_who_is_this_trip_for) {
    gsap.from('#es-southeast-form-who-is-this-trip-for input, #es-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_list_required_documents = document.getElementById('es-southeast-list-required-documents');
  if (es_southeast_list_required_documents) {
    gsap.from('#es-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_list_booking_process = document.getElementById('es-southeast-list-booking-process');
  if (es_southeast_list_booking_process) {
    gsap.from('#es-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_section_timelines_deadlines = document.getElementById('es-southeast-section-timelines-deadlines');
  if (es_southeast_section_timelines_deadlines) {
    gsap.fromTo('#es-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_section_fees_costs = document.getElementById('es-southeast-section-fees-costs');
  if (es_southeast_section_fees_costs) {
    gsap.fromTo('#es-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_list_risks_common_mistakes = document.getElementById('es-southeast-list-risks-common-mistakes');
  if (es_southeast_list_risks_common_mistakes) {
    gsap.from('#es-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_section_diy_vs_professional_assistance = document.getElementById('es-southeast-section-diy-vs-professional-assistance');
  if (es_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_section_esprito_santo_specific_context = document.getElementById('es-southeast-section-esprito-santo-specific-context');
  if (es_southeast_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-southeast-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_section_what_our_clients_say = document.getElementById('es-southeast-section-what-our-clients-say');
  if (es_southeast_section_what_our_clients_say) {
    gsap.fromTo('#es-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_section_frequently_asked_questions = document.getElementById('es-southeast-section-frequently-asked-questions');
  if (es_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#es-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_section_international_support = document.getElementById('es-southeast-section-international-support');
  if (es_southeast_section_international_support) {
    gsap.fromTo('#es-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_list_our_credentials = document.getElementById('es-southeast-list-our-credentials');
  if (es_southeast_list_our_credentials) {
    gsap.from('#es-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_list_related_services = document.getElementById('es-southeast-list-related-services');
  if (es_southeast_list_related_services) {
    gsap.from('#es-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_section_youre_in_good_hands = document.getElementById('es-southeast-section-youre-in-good-hands');
  if (es_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#es-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_southeast_section_21 = document.getElementById('es-southeast-section-21');
  if (es_southeast_section_21) {
    gsap.fromTo('#es-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('es-northeast-form-vibrant-northeast-beaches-and-culture');
  if (es_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#es-northeast-form-vibrant-northeast-beaches-and-culture input, #es-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_list_quick_facts = document.getElementById('es-northeast-list-quick-facts');
  if (es_northeast_list_quick_facts) {
    gsap.from('#es-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_list_common_challenges_applicants_face = document.getElementById('es-northeast-list-common-challenges-applicants-face');
  if (es_northeast_list_common_challenges_applicants_face) {
    gsap.from('#es-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_list_how_we_solve_these_challenges = document.getElementById('es-northeast-list-how-we-solve-these-challenges');
  if (es_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#es-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_section_trip_overview = document.getElementById('es-northeast-section-trip-overview');
  if (es_northeast_section_trip_overview) {
    gsap.fromTo('#es-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_form_who_is_this_trip_for = document.getElementById('es-northeast-form-who-is-this-trip-for');
  if (es_northeast_form_who_is_this_trip_for) {
    gsap.from('#es-northeast-form-who-is-this-trip-for input, #es-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_list_required_documents = document.getElementById('es-northeast-list-required-documents');
  if (es_northeast_list_required_documents) {
    gsap.from('#es-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_list_booking_process = document.getElementById('es-northeast-list-booking-process');
  if (es_northeast_list_booking_process) {
    gsap.from('#es-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_section_timelines_deadlines = document.getElementById('es-northeast-section-timelines-deadlines');
  if (es_northeast_section_timelines_deadlines) {
    gsap.fromTo('#es-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_section_fees_costs = document.getElementById('es-northeast-section-fees-costs');
  if (es_northeast_section_fees_costs) {
    gsap.fromTo('#es-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_list_risks_common_mistakes = document.getElementById('es-northeast-list-risks-common-mistakes');
  if (es_northeast_list_risks_common_mistakes) {
    gsap.from('#es-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_section_diy_vs_professional_assistance = document.getElementById('es-northeast-section-diy-vs-professional-assistance');
  if (es_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_section_esprito_santo_specific_context = document.getElementById('es-northeast-section-esprito-santo-specific-context');
  if (es_northeast_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-northeast-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_section_what_our_clients_say = document.getElementById('es-northeast-section-what-our-clients-say');
  if (es_northeast_section_what_our_clients_say) {
    gsap.fromTo('#es-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_section_frequently_asked_questions = document.getElementById('es-northeast-section-frequently-asked-questions');
  if (es_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#es-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_section_international_support = document.getElementById('es-northeast-section-international-support');
  if (es_northeast_section_international_support) {
    gsap.fromTo('#es-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_list_our_credentials = document.getElementById('es-northeast-list-our-credentials');
  if (es_northeast_list_our_credentials) {
    gsap.from('#es-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_list_related_services = document.getElementById('es-northeast-list-related-services');
  if (es_northeast_list_related_services) {
    gsap.from('#es-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_section_youre_in_good_hands = document.getElementById('es-northeast-section-youre-in-good-hands');
  if (es_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#es-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_northeast_section_21 = document.getElementById('es-northeast-section-21');
  if (es_northeast_section_21) {
    gsap.fromTo('#es-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_form_charming_south_wine_and_gauchos = document.getElementById('es-south-form-charming-south-wine-and-gauchos');
  if (es_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#es-south-form-charming-south-wine-and-gauchos input, #es-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_list_quick_facts = document.getElementById('es-south-list-quick-facts');
  if (es_south_list_quick_facts) {
    gsap.from('#es-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_list_common_challenges_applicants_face = document.getElementById('es-south-list-common-challenges-applicants-face');
  if (es_south_list_common_challenges_applicants_face) {
    gsap.from('#es-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_list_how_we_solve_these_challenges = document.getElementById('es-south-list-how-we-solve-these-challenges');
  if (es_south_list_how_we_solve_these_challenges) {
    gsap.from('#es-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_section_trip_overview = document.getElementById('es-south-section-trip-overview');
  if (es_south_section_trip_overview) {
    gsap.fromTo('#es-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_form_who_is_this_trip_for = document.getElementById('es-south-form-who-is-this-trip-for');
  if (es_south_form_who_is_this_trip_for) {
    gsap.from('#es-south-form-who-is-this-trip-for input, #es-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_list_required_documents = document.getElementById('es-south-list-required-documents');
  if (es_south_list_required_documents) {
    gsap.from('#es-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_list_booking_process = document.getElementById('es-south-list-booking-process');
  if (es_south_list_booking_process) {
    gsap.from('#es-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_section_timelines_deadlines = document.getElementById('es-south-section-timelines-deadlines');
  if (es_south_section_timelines_deadlines) {
    gsap.fromTo('#es-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_section_fees_costs = document.getElementById('es-south-section-fees-costs');
  if (es_south_section_fees_costs) {
    gsap.fromTo('#es-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_list_risks_common_mistakes = document.getElementById('es-south-list-risks-common-mistakes');
  if (es_south_list_risks_common_mistakes) {
    gsap.from('#es-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_section_diy_vs_professional_assistance = document.getElementById('es-south-section-diy-vs-professional-assistance');
  if (es_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#es-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_section_esprito_santo_specific_context = document.getElementById('es-south-section-esprito-santo-specific-context');
  if (es_south_section_esprito_santo_specific_context) {
    gsap.fromTo('#es-south-section-esprito-santo-specific-context', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_section_what_our_clients_say = document.getElementById('es-south-section-what-our-clients-say');
  if (es_south_section_what_our_clients_say) {
    gsap.fromTo('#es-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_section_frequently_asked_questions = document.getElementById('es-south-section-frequently-asked-questions');
  if (es_south_section_frequently_asked_questions) {
    gsap.fromTo('#es-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_section_international_support = document.getElementById('es-south-section-international-support');
  if (es_south_section_international_support) {
    gsap.fromTo('#es-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_list_our_credentials = document.getElementById('es-south-list-our-credentials');
  if (es_south_list_our_credentials) {
    gsap.from('#es-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_list_related_services = document.getElementById('es-south-list-related-services');
  if (es_south_list_related_services) {
    gsap.from('#es-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_section_youre_in_good_hands = document.getElementById('es-south-section-youre-in-good-hands');
  if (es_south_section_youre_in_good_hands) {
    gsap.fromTo('#es-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

  const es_south_section_21 = document.getElementById('es-south-section-21');
  if (es_south_section_21) {
    gsap.fromTo('#es-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.4, ease: 'easeInOutExpo'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
