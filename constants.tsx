import { AppContent } from './types';
import { Zap, Shield, Smartphone, Globe, BarChart3, Users } from 'lucide-react';

export const APP_NAME = "RealKit";

export const FEATURE_ICONS = [Zap, Shield, Smartphone, Globe, BarChart3, Users];

export const CONTENT: AppContent = {
  nav: {
    features: "Funkcie",
    preview: "Ukážka",
    pricing: "Cena",
    reviews: "Recenzie",
    contact: "Kontakt",
    cta: "Získať Balík",
    mobileCta: "Získať Prístup"
  },
  hero: {
    trustedBadge: "Používa viac ako 2,400+ maklérov",
    headline: "Operačný systém pre",
    headlineGradient: "moderných maklérov.",
    subheadline: "Prestaňte bojovať s rozhádzanými tabuľkami a zastaranými šablónami. Získajte all-in-one Notion CRM, marketingový systém a bibliu skriptov, ktoré používajú tí najlepší.",
    ctaPrimary: "Získať okamžitý prístup",
    ctaSecondary: "Čo je vo vnútri?",
    valueProps: [
      "Jednorazová platba",
      "Doživotné aktualizácie",
      "Okamžité stiahnutie"
    ]
  },
  story: {
    headline: "Prečo väčšina maklérov stagnuje na rovnakom príjme",
    subheadline: "Neprichádzate o obchody preto, že ste leniví. Strácate ich, pretože zakaždým znovu 'vynaliezate koleso' – nový text inzerátu, nový email, nová prezentácia... zatiaľ čo top makléri používajú overené systémy každý deň.",
    bullets: [
      "Hodiny strávené písaním popisov nehnuteľností bez výsledkov",
      "Strach a ticho v telefóne, keď presne neviete, čo povedať ďalej",
      "Chaotický follow-up – horúci klienti utekajú k pripravenejším maklérom",
      "Žiadny jasný 'systém' od prvého kontaktu až po podpis zmluvy",
      "Pocit, že neustále len hasíte problémy namiesto strategického plánovania"
    ],
    bridge: "Predstavte si, že každý jeden krok máte vopred napísaný a pripravený…"
  },
  solution: {
    headline: "Predstavujeme RealKit: Váš kompletný Plug-and-Play systém pre realitný úspech",
    description: "RealKit je digitálny balík hotových skriptov, šablón, checklistov a mini-systémov vytvorený špeciálne pre realitných maklérov. Namiesto hádania, čo povedať alebo čo poslať klientovi, jednoducho otvoríte RealKit, skopírujete šablónu a idete na istotu.",
    pillars: [
      {
        title: "Skripty, ktoré predávajú",
        description: "Telefónne, stretávacie a follow-up skripty, ktoré menia „len sa pozerám“ na „kde mám podpísať?“."
      },
      {
        title: "Marketing, ktorý priťahuje",
        description: "Hotové šablóny pre sociálne siete, emaily a reklamy – nepotrebujete byť copywriter."
      },
      {
        title: "Systémy, ktoré šetria čas",
        description: "Checklisty a workflow procesy, aby ste vždy vedeli, aký je ďalší krok od náberu po predaj."
      }
    ],
    cta: "Pozrieť si obsah RealKitu"
  },
  showcase: {
    headline: "Váš motor pre rast biznisu",
    subheadline: "Spojili sme štyri piliere úspešného realitného podnikania do jedného plynulého ekosystému.",
    modules: [
      {
        id: "crm",
        title: "Notion Riadiace Centrum",
        description: "Srdce vášho biznisu. Sledujte každý lead, aktívny náber a rozpracovaný obchod v jednom vizuálnom dashboarde bez mesačných poplatkov za drahý softvér.",
        image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop",
        features: [
          "Manažment obchodného lievika (Pipeline)",
          "Automatické pripomienky follow-upov",
          "Checklist pre aktívne nábery",
          "Sledovanie provízií a obratu"
        ]
      },
      {
        id: "scripts",
        title: "Biblia Skriptov",
        description: "Už nikdy sa nezaseknete pri telefonovaní. Toto nie je len PDF; je to bojom overená knižnica presvedčovacích rámcov pre každú možnú námietku.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop",
        features: [
          "Skripty na exspirácie a samopredajcov (FSBO)",
          "Scenár pre 'Zníženie Ceny'",
          "Cestovná mapa náberovej prezentácie",
          "Dialógy na získavanie referencií"
        ]
      },
      {
        id: "marketing",
        title: "Marketingová Sada",
        description: "Vyzerať ako luxusná kancelária môžete od prvého dňa. Dizajny s vysokou konverziou, ktoré vás postavia do pozície autority na trhu.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
        features: [
          "Luxusná Naberacia Prezentácia (Canva)",
          "Hárky pre Obhliadky (Open House)",
          "Letáky Práve Naberané / Predané",
          "Šablóny pre Instagram Stories"
        ]
      },
      {
        id: "systems",
        title: "Rastové Systémy",
        description: "Prestaňte vymýšľať koleso. Zapojte sa do overených pracovných postupov, ktoré automaticky 'zohrievajú' vašich klientov.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        features: [
          "365-dňový Kalendár Obsahu",
          "Sady Emailových Sekvencií",
          "Dotazník pred náberom",
          "Databáza dodávateľov a partnerov"
        ]
      }
    ]
  },
  whoIsFor: {
    headline: "Pre koho je RealKit (a pre koho nie)",
    perfectFor: {
      title: "Ideálne pre vás, ak...",
      items: [
        "Ste nový alebo rastúci maklér, ktorý chce mať vo veciach poriadok.",
        "Už vás nebaví hádať, čo povedať do telefónu a v správach.",
        "Chcete ušetriť čas hotovými šablónami namiesto písania od nuly."
      ]
    },
    notFor: {
      title: "Nie je pre vás, ak...",
      items: [
        "Hľadáte 'magické tlačidlo', ktoré zarobí peniaze bez práce.",
        "Máte už dokonale zdokumentovaný systém, ktorý funguje.",
        "Odmietate používať akékoľvek skripty alebo šablóny."
      ]
    }
  },
  features: {
    headline: "Všetko potrebné pre škálovanie",
    subheadline: "Žiadna vata. Len nástroje, ktoré reálne posúvajú váš realitný biznis vpred.",
    items: [
      {
        title: "Okamžité nastavenie",
        description: "Duplikujte si Notion pracovnú plochu a začnite fungovať do 5 minút."
      },
      {
        title: "Optimalizované pre mobil",
        description: "Pristupujte k svojim skriptom a CRM priamo z mobilu, aj keď ste v teréne."
      },
      {
        title: "Doživotné aktualizácie",
        description: "Zaplatíte raz a každú budúcu aktualizáciu a novú šablónu máte zadarmo."
      },
      {
        title: "Žiadne mesačné poplatky",
        description: "Prestaňte platiť stovky eur mesačne za zložitý softvér, ktorý nevyužívate."
      },
      {
        title: "Súkromie dát",
        description: "Vaše dáta žijú vo vašom Notion účte. My vaše kontakty nikdy nevidíme."
      }
    ],
    aiBox: {
      title: "Pripravené na AI",
      description: "Postavené tak, aby sa dalo ľahko integrovať s najnovšími AI nástrojmi pre maklérov.",
      link: "Viac o AI integrácii"
    }
  },
  testimonials: {
    headline: "Skutoční makléri. Skutočné výsledky.",
    list: [
      {
        id: 1,
        name: "Jana Kováčová",
        role: "Top Maklérka, Bratislava",
        image: "https://picsum.photos/100/100?random=1",
        text: "Topila som sa v neorganizovaných excel tabuľkách. RealKit kompletne zefektívnil môj biznis. Len vďaka systému follow-upov som minulý mesiac uzavrela o 3 obchody viac.",
        rating: 5
      },
      {
        id: 2,
        name: "Marek Tóth",
        role: "Majiteľ RK",
        image: "https://picsum.photos/100/100?random=2",
        text: "Len tie naberacie šablóny majú hodnotu celého balíka. Vyzerajú profesionálnejšie než to, čo poskytuje naša sieť. Klienti sú nadšení.",
        rating: 5
      },
      {
        id: 3,
        name: "Elena R.",
        role: "Realitná Maklérka",
        image: "https://picsum.photos/100/100?random=3",
        text: "Jednoduché, čisté a efektívne. Nechcela som zložitý softvér s mesačným poplatkom. Táto jednorazová investícia bola to najlepšie rozhodnutie roka.",
        rating: 5
      }
    ]
  },
  pricing: {
    headline: "Získajte nefér výhodu ešte dnes.",
    subheadline: "Pridajte sa k stovkám maklérov, ktorí škálujú svoj biznis s RealKitom.",
    listHeader: "Čo všetko je v balíku:",
    items: [
      { name: "RealKit Notion CRM Systém", value: 497 },
      { name: "Ultimátna Biblia Skriptov (50+)", value: 197 },
      { name: "Šablóna Luxusnej Naberacej Prezentácie", value: 147 },
      { name: "365-dňový Kalendár Obsahu", value: 97 },
      { name: "Sada Emailových Sekvencií", value: 197 },
      { name: "Bonus: Sprievodca pre Kupujúcich", value: 97 },
      { name: "Kartičky na Zvládanie Námietok", value: 47 },
      { name: "Hárky pre Obhliadky (Open House)", value: 27 },
    ],
    mainFeatures: [
      "Kompletný Notion CRM Dashboard",
      "50+ Bojom overených Skriptov",
      "Luxusná Marketingová Sada",
      "Automatizované Emailové Toky"
    ],
    bonuses: [
      { title: "Sprievodca pre Kupujúcich", value: "97€" },
      { title: "Kartičky na Námietky", value: "47€" },
      { title: "Hárky na Obhliadky", value: "27€" }
    ],
    totalValue: "Celková Hodnota",
    offerLabel: "Limitovaná Ponuka",
    urgency: "Cena onedlho stúpne",
    secureLabel: "Bezpečná SSL Platba",
    cta: "Získať Prístup Teraz",
    subtext: "Jednorazová platba. Doživotný prístup."
  },
  faq: {
    headline: "Časté Otázky",
    items: [
      {
        question: "Musím platiť mesačné poplatky?",
        answer: "Nikdy. RealKit je jednorazová investícia. Všetky šablóny, systémy a budúce aktualizácie vlastníte navždy."
      },
      {
        question: "Funguje to aj na mobile?",
        answer: "Áno! Keďže jadro systému je postavené na platformách Notion a Canva, k svojmu CRM a šablónam máte prístup z akéhokoľvek zariadenia, kdekoľvek."
      },
      {
        question: "Som začínajúci maklér. Je to pre mňa?",
        answer: "Absolútne. Toto je 'biznis v krabici', ktorý si väčšina nováčikov želá mať na začiatku. Nastaví vám profesionálne systémy od prvého dňa."
      },
      {
        question: "Ako získam prístup?",
        answer: "Okamžite po zakúpení obdržíte email s bezpečným odkazom na duplikovanie pracovnej plochy a stiahnutie všetkých materiálov."
      }
    ]
  },
  contact: {
    headline: "Kontaktujte Nás",
    subheadline: "Máte otázky o balíku? Potrebujete pomôcť so stiahnutím? Sme tu pre vás.",
    form: {
      nameLabel: "Vaše Meno",
      emailLabel: "Emailová Adresa",
      messageLabel: "Správa",
      submitButton: "Odoslať Správu",
      successMessage: "Vďaka za správu! Čoskoro sa vám ozveme."
    },
    info: {
      email: "podpora@realkit.sk",
      support: "24/7 Podpora cez Email"
    }
  },
  finalCta: {
    headline: "Pripravení nainštalovať overený systém do vášho biznisu?",
    subheadline: "Môžete ďalej hádať, čo povedať a čo poslať… alebo môžete zapojiť RealKit a začať používať skripty a systémy, ktoré sú pripravené ešte dnes.",
    pricing: {
      today: "Dnes: 97€ (jednorazovo)",
      value: "Hodnota: 1,300€+",
      guarantee: "30-dňová garancia vrátenia peňazí"
    },
    cta: "Získať Okamžitý Prístup k RealKitu",
    subtext: "Ste jedno rozhodnutie od predvídateľnejšieho realitného biznisu."
  },
  modal: {
    headline: "Odomknite Špeciálnu Ponuku 49€",
    subheadline: "Pre prístup k RealKitu za špeciálnu cenu 49€ zadajte prosím vašu emailovú adresu nižšie.",
    emailPlaceholder: "Zadajte váš email",
    submitButton: "Získať Prístup",
    disclaimer: "Rešpektujeme vaše súkromie. Odhlásiť sa môžete kedykoľvek."
  },
  footer: {
    rights: "Všetky práva vyhradené.",
    links: ["Ochrana Súkromia", "Podmienky Používania"]
  }
};