import { AppContent } from './types';
import { Zap, Shield, Smartphone, Globe, BarChart3, Users } from 'lucide-react';

export const APP_NAME = "RealKit™";

export const FEATURE_ICONS = [Zap, Shield, Smartphone, Globe, BarChart3, Users];

export const CONTENT: AppContent = {
  nav: {
    about: "Čo je RealKit™",
    features: "Obsah Balíka",
    pricing: "Cenník",
    reviews: "Recenzie",
    contact: "Kontakt",
    cta: "Získať RealKit™",
    mobileCta: "Kúpiť Teraz"
  },
  hero: {
    trustedBadge: "Používa viac ako 2,400+ maklérov",
    headline: "Kompletný digitálny systém",
    headlineGradient: "pre moderných realitných maklérov.",
    subheadline: "Získajte 80+ Canva šablón, 40+ podkladov k nehnuteľnostiam, 50+ skriptov a AI pack v jednom balíku. Všetko, čo potrebujete na profesionálny marketing and predaj.",
    ctaPrimary: "Získať celý balík teraz",
    ctaSecondary: "Pozrieť obsah",
    valueProps: [
      "80+ šablón na socialné siete",
      "50+ Komunikačných Skriptov",
      "Doživotný prístup"
    ]
  },
  story: {
    headline: "Marketing ti berie hodiny. RealKit™ ti ich vráti.",
    subheadline: "Priemerný maklér strávi 10+ hodín týždenne tvorbou marketingu. S RealKitom™ máte všetko pripravené za pár minút.",
    bullets: [
      "Nekonečné hľadanie inšpirácie na Facebook a Instagram",
      "Amatérsky pôsobiaca grafika, ktorá znižuje vašu cenu",
      "Stres z písania emailov a odpovedí na námietky",
      "Chýbajúce podklady na obhliadky a Open House",
      "Nulový systém v následnej komunikácii s klientmi"
    ],
    bridge: "RealKit™ tieto problémy neodstraňuje učením – ale hotovými riešeniami."
  },
  solution: {
    headline: "Všetko-v-jednom pre váš realitný úspech",
    description: "Spojili sme najpoužívanejšie marketingové materiály, overené komunikačné postupy a silu AI do jedného balíka.",
    pillars: [
      {
        title: "80+ Canva Šablón",
        description: "Hotové dizajny pre IG/FB posty, Stories a Reels. Plne editovateľné v bezplatnej verzii Canvy."
      },
      {
        title: "50+ Skriptov & Správ",
        description: "Pripravené správy for nový lead, follow-up po obhliadke či žiadosti o referenciu. Copy-paste ready."
      },
      {
        title: "30 Video Skriptov & AI",
        description: "Pripravené scenáre pre Reels a TikTok + AI PROMPT PACK pre ChatGPT na bleskové texty."
      }
    ],
    cta: "Viac o RealKit™"
  },
  showcase: {
    headline: "Čo presne nájdete v RealKite™?",
    subheadline: "Každý prvok je navrhnutý tak, aby zvyšoval vašu profesionalitu a šetril čas.",
    modules: [
      {
        id: "marketing",
        title: "📱 80+ šablón na socialné siete",
        description: "Vaše sociálne siete budú vyzerať ako od agentúry. Plne editovateľné v Canve.",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2000&auto=format&fit=crop", // Elegant UI/Social media
        features: [
          "IG / FB posty & Stories",
          "Reels cover obrázky",
          "Edukačné Carousel posty",
          "Tipy, procesy a referencie"
        ]
      },
      {
        id: "systems",
        title: "🏡 40+ podkladov k nehnuteľnostiam",
        description: "Všetko, čo potrebuješ na profesionálnu prezentáciu nehnuteľnosti.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop", // Modern House Exterior
        features: [
          "Property info sheet (A4)",
          "Open house pozvánka",
          "Letáčik k nehnuteľnosti",
          "Inzerát – textová kostra"
        ]
      },
      {
        id: "scripts",
        title: "💬 50+ Komunikačné skripty",
        description: "Zvládnite každú konverzáciu. Pripravené pre Email, SMS aj DM.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop", // Professional work environment
        features: [
          "Nový lead & po obhliadke",
          "Oživenie studených leadov",
          "Žiadosť o referenciu",
          "Odpovede na námietky"
        ]
      },
      {
        id: "crm",
        title: "🎥 30 Video Skriptov & AI",
        description: "Odlíšte sa cez video a využite silu AI asistenta vo svoj prospech.",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2000&auto=format&fit=crop", // Person with smartphone/video
        features: [
          "Scenáre pre Reels / TikTok",
          "AI popisy nehnuteľností",
          "AI odpovede na námietky",
          "AI prompt pack pre ChatGPT"
        ]
      }
    ]
  },
  whoIsFor: {
    headline: "Pre koho je RealKit™ určený?",
    perfectFor: {
      title: "Ušetrí vám hodiny stresu, ak...",
      items: [
        "Chcete profesionálny vizuál bez drahej agentúry.",
        "Potrebujete mať texty a skripty vždy po ruke.",
        "Hľadáte moderný spôsob, ako zaujať nových klientov."
      ]
    },
    notFor: {
      title: "RealKit™ nie je pre vás, ak...",
      items: [
        "Máte vlastného full-time grafika and marketéra.",
        "Neveríte v silu sociálnych sietí pri predaji.",
        "Nechcete skúšať nové, efektívnejšie postupy."
      ]
    }
  },
  features: {
    headline: "Navrhnuté pre rýchlosť",
    subheadline: "Žiadne zložité návody. Všetko je pripravené na okamžité použitie.",
    items: [
      {
        title: "Editácia v Canve",
        description: "Stačí prekliknúť fotky and texty. Zvládne to úplne každý."
      },
      {
        title: "Copy-Paste Ready",
        description: "Skripty sú pripravené tak, aby ste ich len skopírovali."
      },
      {
        title: "Moderná Estetika",
        description: "Čistý a prevádzkový dizajn, ktorý buduje dôveru u klientov."
      },
      {
        title: "Bez Mesačných Platieb",
        description: "Platíte raz, balík a všetky aktualizácie sú vaše navždy."
      },
      {
        title: "Slovenský Jazyk",
        description: "Všetky materiály sú v slovenčine a pre náš trh."
      }
    ],
    aiBox: {
      title: "AI Integrácia",
      description: "Náš prompt pack urobí z ChatGPT vášho copywritera na plný úväzok.",
      link: "Viac o AI packu"
    }
  },
  testimonials: {
    headline: "Recenzie našich zákazníkov",
    list: [
      {
        id: 1,
        name: "Marek T.",
        role: "Realitný Maklér",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        text: "Konečne mám v marketingu poriadok. Tie Canva šablóny sú perfektné a skripty na follow-up mi reálne pomohli uzavrieť dva nábory za mesiac.",
        rating: 5
      },
      {
        id: 2,
        name: "Andrea V.",
        role: "Luxury Broker",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        text: "RealKit™ mi ušetril toľko času, že som sa mohla venovať obhliadkam namiesto grafiky. Investícia sa mi vrátila hneď pri prvom predaji.",
        rating: 5
      },
      {
        id: 3,
        name: "Juraj L.",
        role: "Majiteľ RK",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
        text: "Skvelé spracovanie. AI prompty sú totálny game-changer pri písaní inzerátov. Už žiadne trápenie sa nad prázdnou stranou.",
        rating: 5
      },
      {
        id: 4,
        name: "Lucia K.",
        role: "Rezidenčný maklér",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
        text: "Konečne môj Instagram nevyzerá ako nástenka z 90. rokov. Klienti mi sami píšu, že sa im páči môj profesionálny vizuál.",
        rating: 5
      },
      {
        id: 5,
        name: "Peter M.",
        role: "Realitný poradca",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        text: "Tie skripty na námietky sú top. Pomohli mi v situáciách, kde som predtým nevedel, čo rýchlo odpovedať. Odporúčam každému.",
        rating: 5
      },
      {
        id: 6,
        name: "Zuzana S.",
        role: "Independent Agent",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
        text: "Balík je prehľadný a okamžite použiteľný. Pre makléra, ktorý je v teréne od rána do večera, je to obrovské uľahčenie života.",
        rating: 5
      },
      {
        id: 7,
        name: "Michal R.",
        role: "Hypotekárny & Realitný špecialista",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
        text: "Hľadal som spôsob, ako zjednotiť svoj brand. RealKit™ mi dal všetko na striebornom podnose. Pomer cena/výkon je bezkonkurenčný.",
        rating: 5
      }
    ]
  },
  pricing: {
    headline: "Získajte kompletný RealKit™ balík ešte dnes.",
    subheadline: "Všetky šablóny, skripty a systémy v jednom balíku za cenu, teraz za zvýhodnenú cenu",
    listHeader: "V balíku RealKit™ získate:",
    items: [
      { name: "📱 80+ šablón na socialné siete", value: 147 },
      { name: "🏡 40+ podkladov k nehnuteľnostiam", value: 97 },
      { name: "💬 50+ Komunikačné skripty", value: 87 },
      { name: "🎥 30 Video skriptov & AI Pack", value: 67 },
      { name: "📊 Lead & Follow-up Tracker", value: 47 },
      { name: "📘 2× Praktické Mini eBooky", value: 27 }
    ],
    mainFeatures: [
      "80+ Canva dizajnov",
      "50+ Skriptov a správ",
      "30 Video scenárov",
      "AI Prompt Pack"
    ],
    bonuses: [
      { title: "50 Call-to-Action textov", value: "27€" },
      { title: "30-dňový Content plán", value: "47€" },
      { title: "Google Sheet Tracker", value: "67€" }
    ],
    totalValue: "Celková Hodnota",
    offerLabel: "Launch Ponuka -90%",
    urgency: "Limitovaná ponuka za",
    secureLabel: "Bezpečný nákup",
    cta: "Získať prístup k RealKit™",
    subtext: "Jednorazová platba. Doživotný prístup k balíku."
  },
  faq: {
    headline: "Čo vás zaujíma",
    items: [
      {
        question: "Ako presne fungujú Canva šablóny?",
        answer: "Po nákupe získate špeciálny odkaz. Ten otvoríte v Canve a šablóny sa skopírujú do vášho účtu. Potom už len meníte fotky a texty podľa potreby."
      },
      {
        question: "Dostanem k nákupu faktúru?",
        answer: "Áno, po úspešnej platbe vám automaticky zašleme faktúru, ktorú si môžete uplatniť v účtovníctve."
      },
      {
        question: "Sú skripty vhodné aj pre začínajúcich maklérov?",
        answer: "Určite. Sú postavené na psychológii predaja tak, aby vám pomohli pôsobiť profesionálne a sebavedomo od prvého dňa."
      }
    ]
  },
  contact: {
    headline: "Sme tu pre vás",
    subheadline: "Máte otázky pred nákupom alebo potrebujete technickú pomoc?",
    form: {
      nameLabel: "Meno",
      emailLabel: "Váš E-mail",
      messageLabel: "Vaša správa",
      submitButton: "Odoslať",
      successMessage: "Vďaka! Ozveme sa vám do 24 hodín."
    },
    info: {
      email: "ahoj@realkit.sk",
      support: "Rýchla podpora 7 dní v týždni"
    }
  },
  finalCta: {
    headline: "Váš profesionálny marketing začína tu",
    subheadline: "Nestrácajte čas vecami, ktoré sme už urobili za vás. Aktivujte si RealKit™ a sústreďte sa na predaj.",
    pricing: {
      today: "Špeciálna cena: 39€",
      value: "Skutočná hodnota: 510€+",
    },
    cta: "Získať prístup k RealKit™",
    subtext: "Pridajte sa k maklérom, ktorí už používajú moderné nástroje."
  },
  modal: {
    headline: "Získajte prístup k RealKitu™ za 39 €",
    subheadline: "Zadajte e-mail a ihneď vás presmerujeme k dokončeniu objednávky.",
    emailPlaceholder: "Zadaj e-mail",
    submitButton: "Pokračovať k objednávke",
    disclaimer: "Vaše súkromie je u nás prioritou."
  },
  footer: {
    rights: "Všetky práva vyhradené.",
    links: ["Ochrana súkromia", "Podmienky používania"]
  }
};