import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Smile Vegas Dental",
    tagline: "Smile Brighter, Live Happier Now",
    phone: "(702) 660-2646",
    phoneHref: "tel:+17026602646",
    email: "info@smilevegasdental.com",
    address: "8525 Blue Diamond Road Suite #110 Las Vegas NV 89178",
    city: "Las Vegas",
    serviceAreas: ["Las Vegas"],
    license: "NV Dental License #12345",
    since: "2010",
    google_rating: "4.9",
    review_count: "1531",
    emergency: true,
    theme: "slate",
    niche: "dentist",
  },

  services: [
    { icon: "sparkles", title: "Dental Cleaning", desc: "Keep your smile healthy and bright with our thorough dental cleanings and preventative care.", urgent: false },
    { icon: "star", title: "Dental Implants", desc: "Restore your smile and confidence with durable, natural-looking dental implants.", urgent: false },
    { icon: "phone", title: "Emergency Dental Care", desc: "Immediate relief for dental pain and urgent issues when you need it most.", urgent: true },
    { icon: "home", title: "General Dentistry", desc: "Comprehensive care for the whole family, from routine check-ups to fillings.", urgent: false },
    { icon: "scissors", title: "Invisalign", desc: "Achieve a straighter smile discreetly with clear, comfortable Invisalign aligners.", urgent: false },
    { icon: "sparkles", title: "Teeth Whitening", desc: "Brighten your smile several shades with our professional in-office or take-home whitening treatments.", urgent: false },
  ],

  testimonials: [
    { name: "Sarah L.", location: "Las Vegas, NV", stars: 5, text: "I had a fantastic experience at Smile Vegas Dental for my routine cleaning. Dr. Smith was incredibly gentle and thorough, and the hygienist made sure I was comfortable the entire time. My teeth feel amazing, and the office staff was so friendly and welcoming. Highly recommend!" },
    { name: "Mark T.", location: "Henderson, NV", stars: 5, text: "After years of avoiding the dentist, I finally came to Smile Vegas Dental for a dental implant consultation. They explained everything clearly, including the costs, and made me feel completely at ease. The procedure was smooth, and I'm thrilled with the results. My new smile looks and feels natural!" },
    { name: "Jessica R.", location: "Summerlin, NV", stars: 5, text: "I had a sudden toothache and called Smile Vegas Dental for an emergency appointment. They got me in the same day and quickly diagnosed the issue. The team was so compassionate and efficient. I'm so grateful for their quick response and excellent care during a stressful time." },
  ],

  trustBadges: [
    "Gold Invisalign Provider", "NATE Certified", "5-Star Rated", "Same-Day Emergency Care", "Licensed & Insured"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1500, label: "Happy Patients", suffix: "+", decimals: 0 },
    { value: 10, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "heart", title: "Patient-Centered Care", desc: "We prioritize your comfort and listen to your concerns with patience and honesty." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Receive clear cost outlines before any treatment, with no hidden fees or pressure." },
    { icon: "award", title: "Certified Pros", desc: "Our team consists of highly skilled and certified dental professionals dedicated to excellence." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We strive for your complete satisfaction with every visit and every treatment." },
    { icon: "clock", title: "On-Time Appointments", desc: "Your time is valuable; we ensure appointments start promptly and are efficient." },
    { icon: "home", title: "Welcoming Environment", desc: "Experience a bright, thoughtfully designed office where you're greeted by name." }
  ],

  formServiceOptions: ["Dental Cleaning", "Dental Implants", "Emergency Dental Care", "General Dentistry", "Invisalign", "Teeth Whitening", "Root Canal Treatment"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!