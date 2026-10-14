const citations = [
  // Tech, Code & Build
  "Toute autorite vient de Dieu.",
  "Fais ta part, Dieu fera le reste.",
  "Code aujourd'hui, regne demain.",
  "Kinshasa ne dort jamais.",
  "Petit a petit, on devient grand.",
  "Make it work, make it right, make it fast.",
  "Talk is cheap. Show me the code.",
  "Un bug n'est qu'une fonctionnalité non documentée.",
  "Du bon code est son propre commentaire.",
  "Automatise ou recommence.",
  "commit -m 'Fix everything at once'.",
  "Pas de bug, pas de chocolat.",
  "L'optimisation prématurée est la racine de tous les maux.",
  "Pense en architecte, code en artisan.",
  
  // Mindset, Résilience & Hustle
  "Le succès n'est pas final, l'échec n'est pas fatal.",
  "La discipline bat le talent quand le talent ne s'entraîne pas.",
  "Chaque grand projet commence par un premier git init.",
  "Tombe 7 fois, relève-toi 8.",
  "L'excellence n'est pas un acte, c'est une habitude.",
  "Travaille en silence, laisse ton code parler.",
  "La seule limite est celle que tu t'imposes dans ton IDE.",
  "Rien ne remplace le travail acharné et la sueur sur le clavier.",
  "Sois le développeur que tu aimerais recruter.",
  
  // Vibe locale & Énergie
  "Biso na biso, on avance toujours.",
  "Motema Pamba, le travail paie toujours.",
  "Kin la belle, la source de l'inspiration.",
  "Ici on ne lâche rien, on debug jusqu'au bout.",
  "De tshangu au sommet du monde tech.",
  "La persévérance est la clé de chaque API réussie."
];

const citation = citations[Math.floor(Math.random() * citations.length)];
const barre = document.createElement("div");
barre.innerText = "✨ " + citation;
barre.style.cssText = "position:fixed;top:0;left:0;right:0;background:#111;color:white;padding:10px;text-align:center;font-family:sans-serif;font-size:14px;z-index:999999;";
document.body.prepend(barre);
document.body.style.marginTop = "40px";