// Base de données des sujets de rédaction — 300 sujets
// Version consolidée — octobre 2026
// Les identifiants sont permanents : ne pas les renuméroter.

const sujets = [
  {
    "id": 1,
    "texte": "Un dimanche après-midi, chez sa grand-mère, Sam s’ennuie à mourir. La maison est à la campagne, isolée, en bordure d’une forêt. En faisant le tour du jardin, Sam découvre dans la haie un trou d’où sort une étrange lumière… Racontez cette histoire.",
    "categories": [
      "Aventure & exploration",
      "Fantastique & magie",
      "Mystère & enquête"
    ],
    "tags": [
      "Lumière mystérieuse",
      "Forêt",
      "Découverte"
    ]
  },
  {
    "id": 2,
    "texte": "En travaillant aux champs, un·e jeun·e paysan·ne découvre un pendentif enterré. Peu de temps après, dans la forêt, il/elle fait la rencontre du peuple des elfes… Racontez cette histoire.",
    "categories": [
      "Aventure & exploration",
      "Fantastique & magie"
    ],
    "tags": [
      "Créatures fantastiques",
      "Nature",
      "Rencontre"
    ]
  },
  {
    "id": 3,
    "texte": "Jack est désespéré, sa mère est gravement malade, elle va mourir. Dans le parc près de chez lui, il fait la rencontre d’un vieux jardinier qui lui dit qu’il existe un monde parallèle, “l’Outremonde”, dans lequel se trouve le remède à la maladie de sa mère. Racontez cette histoire.",
    "categories": [
      "Aventure & exploration",
      "Fantastique & magie",
      "Relations & émotions"
    ],
    "tags": [
      "Monde parallèle",
      "Quête",
      "Famille"
    ]
  },
  {
    "id": 4,
    "texte": "Après une catastrophe naturelle de grande ampleur, une jeune femme / un jeune homme fait preuve d’un courage exceptionnel pour retrouver les siens. Décrivez la catastrophe, décrivez le périple de l’héroïne ou du héros.",
    "categories": [
      "Nature & survie",
      "Aventure & exploration",
      "Relations & émotions"
    ],
    "tags": [
      "Catastrophe naturelle",
      "Recherche",
      "Famille"
    ]
  },
  {
    "id": 5,
    "texte": "Une jeune femme / un jeune homme découvre qu’elle/il a un pouvoir. Elle/il décide de l’utiliser pour faire le bien. Racontez cette histoire au passé, à la troisième personne.",
    "categories": [
      "Fantastique & magie",
      "Aventure & exploration",
      "Justice & conflits"
    ],
    "tags": [
      "Pouvoirs",
      "Héroïsme",
      "Choix"
    ]
  },
  {
    "id": 6,
    "texte": "Tous les jours, mystérieusement, elle/il reçoit dans sa boite aux lettres le journal du lendemain. Elle/il peut savoir à l’avance ce qui va se passer, les numéros gagnants du loto, les crimes qui seront commis… Racontez cette histoire au passé, à la troisième personne.",
    "categories": [
      "Fantastique & magie",
      "Mystère & enquête",
      "Technologie & science-fiction"
    ],
    "tags": [
      "Prédiction",
      "Futur",
      "Crimes"
    ]
  },
  {
    "id": 7,
    "texte": "Une vieille femme raconte l’histoire de sa vie à ses arrières-petits-enfants. Ils découvrent, ébahis et captivés, le récit d’un voyage, d’un couple, de dangers et d’héroïsme. Racontez cette histoire au passé, à la troisième personne.",
    "categories": [
      "Relations & émotions",
      "Aventure & exploration",
      "Histoire & mondes anciens"
    ],
    "tags": [
      "Souvenir",
      "Voyage",
      "Récit de vie"
    ]
  },
  {
    "id": 8,
    "texte": "Elle/Il découvre que son/sa meilleur(e) ami(e) est un fantôme mort depuis des années.",
    "categories": [
      "Fantastique & magie",
      "Relations & émotions"
    ],
    "tags": [
      "Fantôme",
      "Amitié",
      "Mort"
    ]
  },
  {
    "id": 9,
    "texte": "Écrivez la suite : « En entrant dans la ville de New York en ruines, un frisson me parcourut le corps. »",
    "categories": [
      "Technologie & science-fiction",
      "Nature & survie",
      "Aventure & exploration"
    ],
    "tags": [
      "Monde en ruines",
      "Catastrophe",
      "Survie"
    ]
  },
  {
    "id": 10,
    "texte": "Pour échapper à un problème, un homme/une femme se fait passer pour quelqu’un qu’il/elle n’est pas.",
    "categories": [
      "Aventure & exploration",
      "Relations & émotions"
    ],
    "tags": [
      "Usurpation d'identité",
      "Mensonge",
      "Fuite"
    ]
  },
  {
    "id": 11,
    "texte": "Un matin, un homme/une femme trouve un bébé abandonné devant sa porte.",
    "categories": [
      "Relations & émotions",
      "Mystère & enquête"
    ],
    "tags": [
      "Bébé abandonné",
      "Secret",
      "Rencontre"
    ]
  },
  {
    "id": 12,
    "texte": "En se promenant, un homme/une femme découvre quelque chose d’étrange au fond de la forêt.",
    "categories": [
      "Aventure & exploration",
      "Mystère & enquête",
      "Nature & survie"
    ],
    "tags": [
      "Forêt",
      "Objet mystérieux",
      "Découverte"
    ]
  },
  {
    "id": 13,
    "texte": "Au collège, le narrateur/la narratrice est témoin d’un cas de harcèlement. Racontez en décrivant la situation et en expliquant la réaction du narrateur/de la narratrice.",
    "categories": [
      "Vie quotidienne & société",
      "Justice & conflits",
      "Relations & émotions"
    ],
    "tags": [
      "Harcèlement",
      "École",
      "Témoin"
    ]
  },
  {
    "id": 14,
    "texte": "Racontez un souvenir marquant de votre vie impliquant votre famille ou des amis. Ce souvenir peut être réel ou fictif. Il doit être raconté à la première personne.",
    "categories": [
      "Relations & émotions"
    ],
    "tags": [
      "Souvenir",
      "Famille",
      "Amitié"
    ]
  },
  {
    "id": 15,
    "texte": "Pendant les grandes vacances, en camping au bord de la mer, Giulia, 12 ans, a peur de s’ennuyer. Mais elle se fait très vite un petit groupe d’ami(e)s. Ensemble, ils vont enchaîner les bêtises et les aventures. Racontez cette histoire.",
    "categories": [
      "Aventure & exploration",
      "Relations & émotions",
      "Nature & survie"
    ],
    "tags": [
      "Camping",
      "Mer",
      "Amitié"
    ]
  },
  {
    "id": 16,
    "texte": "Ecrivez à partir des mots-clés : « rivalité, amitié, quartier, voyager, talent »",
    "categories": [
      "Relations & émotions",
      "Vie quotidienne & société",
      "Aventure & exploration"
    ],
    "tags": [
      "Rivalité",
      "Quartier",
      "Talent"
    ]
  },
  {
    "id": 17,
    "texte": "Un groupe d’ami(e)s s’amuse à tourner un petit film. Mais en revoyant les images, le film n’a plus rien d’amusant…",
    "categories": [
      "Arts, culture & imagination",
      "Mystère & enquête",
      "Relations & émotions"
    ],
    "tags": [
      "Film",
      "Amitié",
      "Vidéo mystérieuse"
    ]
  },
  {
    "id": 18,
    "texte": "Un personnage découvre que sa femme/son mari a un secret.",
    "categories": [
      "Relations & émotions",
      "Mystère & enquête"
    ],
    "tags": [
      "Couple",
      "Secret",
      "Découverte"
    ]
  },
  {
    "id": 19,
    "texte": "Après une nuit de fête, un homme / une femme de 44 ans se réveille 30 ans plus tôt : il/elle a de nouveau 14 ans…",
    "categories": [
      "Technologie & science-fiction",
      "Relations & émotions",
      "Aventure & exploration"
    ],
    "tags": [
      "Voyage dans le temps",
      "Adolescence",
      "Identité"
    ]
  },
  {
    "id": 20,
    "texte": "Un homme étrange sonne à la porte. Il offre une boîte et explique. Dans la boîte, un interrupteur. Si on l’actionne, quelqu’un mourra subitement, mais dix millions d’euros apparaîtront sur notre compte en banque.",
    "categories": [
      "Fantastique & magie",
      "Justice & conflits"
    ],
    "tags": [
      "Choix impossible",
      "Argent",
      "Mort"
    ]
  },
  {
    "id": 21,
    "texte": "Quand James rencontre Lily, c’est le coup de foudre. Il ne sait pas encore qu’elle est atteinte d’une maladie incurable et mourra dans six mois.",
    "categories": [
      "Relations & émotions"
    ],
    "tags": [
      "Amour",
      "Maladie",
      "Mort"
    ]
  },
  {
    "id": 22,
    "texte": "Attaqués sans cesse par des brigands, des paysans font appel à un vieux samouraï pour les aider à défendre leur village.",
    "categories": [
      "Histoire & mondes anciens",
      "Aventure & exploration",
      "Justice & conflits"
    ],
    "tags": [
      "Samouraï",
      "Brigands",
      "Combat"
    ]
  },
  {
    "id": 23,
    "texte": "En 2225, la criminalité est si élevée à Paris que le gouvernement construit un mur autour de la ville pour en faire une prison géante où règne le chaos. Lorsque l'avion de la Présidente s’écrase dans l’enceinte de la ville, un.e ancien.ne soldat.e est envoyé.e pour tenter de la ramener vivante. Racontez cette histoire.",
    "categories": [
      "Technologie & science-fiction",
      "Aventure & exploration",
      "Justice & conflits"
    ],
    "tags": [
      "Dystopie",
      "Paris futuriste",
      "Mission"
    ]
  },
  {
    "id": 24,
    "texte": "Lors d’un dîner de fête, un membre de la famille fait une annonce qui stupéfie tout le monde.  Racontez cette histoire.",
    "categories": [
      "Relations & émotions",
      "Mystère & enquête"
    ],
    "tags": [
      "Famille",
      "Révélation",
      "Secret"
    ]
  },
  {
    "id": 25,
    "texte": "Pour une journée de liberté loin de ses obligations, une princesse/un prince profite d’un voyage dans une capitale pour essayer de passer inaperçu.e. Racontez cette histoire.",
    "categories": [
      "Histoire & mondes anciens",
      "Aventure & exploration",
      "Relations & émotions"
    ],
    "tags": [
      "Prince ou princesse",
      "Liberté",
      "Vie clandestine"
    ]
  },
  {
    "id": 26,
    "texte": "Un soir d’insomnie devant la télévision, Sam se retrouve projeté(e) à l’intérieur de son film/sa série préféré(e). Il/elle peut interagir avec les personnages et changer le cours des événements. Racontez cette histoire, au passé.",
    "categories": [
      "Arts, culture & imagination",
      "Fantastique & magie",
      "Aventure & exploration"
    ],
    "tags": [
      "Film ou série",
      "Transport dans la fiction",
      "Aventure"
    ]
  },
  {
    "id": 27,
    "texte": "La veille de Noël, le père de Sam revient d’un voyage en Asie. Il lui offre un cadeau étrange : un petit animal, très mignon, d’une espèce complètement inconnue. Les problèmes vont commencer. Racontez cette histoire, au passé.",
    "categories": [
      "Fantastique & magie",
      "Relations & émotions",
      "Nature & survie"
    ],
    "tags": [
      "Créature",
      "Animal",
      "Rencontre"
    ]
  },
  {
    "id": 28,
    "texte": "Le jour du nouvel an, Sam voit une personne inanimée sur le trottoir. Les passants ne font rien. Mais Sam ne peut rester indifférent.e. Racontez cette histoire, au passé.",
    "categories": [
      "Vie quotidienne & société",
      "Justice & conflits",
      "Relations & émotions"
    ],
    "tags": [
      "Indifférence",
      "Solidarité",
      "Rencontre"
    ]
  },
  {
    "id": 29,
    "texte": "Même s’il ne le montre pas, M. Poutifard, professeur de CM1, déteste ses élèves. Quand vient enfin le jour de sa retraite, c’est l’heure de la vengeance… Ecrivez cette histoire. (Sur une idée de Jean-Claude Mourlevat)",
    "categories": [
      "Vie quotidienne & société",
      "Justice & conflits",
      "Arts, culture & imagination"
    ],
    "tags": [
      "École",
      "Vengeance",
      "Enseignant"
    ]
  },
  {
    "id": 30,
    "texte": "Des phénomènes étranges viennent troubler la vie tranquille d’une famille. Ecrivez cette histoire.",
    "categories": [
      "Fantastique & magie",
      "Mystère & enquête",
      "Relations & émotions"
    ],
    "tags": [
      "Phénomène étrange",
      "Famille",
      "Maison"
    ]
  },
  {
    "id": 31,
    "texte": "Après avoir trouvé une vieille radio dans un grenier, il / elle pense pouvoir communiquer avec l’au-delà… Ecrivez cette histoire.",
    "categories": [
      "Fantastique & magie",
      "Mystère & enquête",
      "Relations & émotions"
    ],
    "tags": [
      "Radio mystérieuse",
      "Au-delà",
      "Communication"
    ]
  },
  {
    "id": 32,
    "texte": "Fils / fille d’immigrés, pauvre, il/elle va gravir tous les échelons et finira ministre. Racontez cette histoire.",
    "categories": [
      "Vie quotidienne & société",
      "Justice & conflits",
      "Relations & émotions"
    ],
    "tags": [
      "Pauvreté",
      "Ascension sociale",
      "Politique"
    ]
  },
  {
    "id": 33,
    "texte": "Dégoûté(e) par la société actuelle, un homme / une femme décide de tout quitter pour aller vivre seul(e) dans la nature, renonçant à toute forme de modernité. Tout cela ne sera pas aussi tranquille qu’il /elle l’espérait… Racontez cette histoire.",
    "categories": [
      "Nature & survie",
      "Vie quotidienne & société",
      "Aventure & exploration"
    ],
    "tags": [
      "Isolement",
      "Nature",
      "Vie sauvage"
    ]
  },
  {
    "id": 34,
    "texte": "Quand les robots prennent le pouvoir, l’armée tente de lutter en faisant appel aux meilleurs joueurs de jeux vidéo pour piloter des droïdes. Racontez cette histoire.",
    "categories": [
      "Technologie & science-fiction",
      "Aventure & exploration",
      "Justice & conflits"
    ],
    "tags": [
      "Robots",
      "Jeux vidéo",
      "Guerre"
    ]
  },
  {
    "id": 35,
    "texte": "La maison est un peu isolée, mais encore en bon état. Spacieuse, grand jardin. Pourquoi donc l’agent immobilier avait-il l’air de vouloir s’en débarrasser si vite ? Et pourquoi était-elle si peu chère ? Racontez cette histoire.",
    "categories": [
      "Mystère & enquête",
      "Aventure & exploration"
    ],
    "tags": [
      "Maison abandonnée",
      "Étrangeté",
      "Secret"
    ]
  },
  {
    "id": 36,
    "texte": "Par mégarde, dans le train, vous prenez la valise d’un inconnu au lieu de la vôtre. Arrivé chez vous, vous comprenez votre erreur. Vous ouvrez la valise, son contenu vous laisse sans voix… Racontez cette histoire.",
    "categories": [
      "Mystère & enquête",
      "Aventure & exploration"
    ],
    "tags": [
      "Valise",
      "Erreur",
      "Secret"
    ]
  },
  {
    "id": 37,
    "texte": "Le téléphone sonne régulièrement en plein milieu de la nuit. Racontez cette histoire.",
    "categories": [
      "Mystère & enquête",
      "Fantastique & magie"
    ],
    "tags": [
      "Téléphone",
      "Appels nocturnes",
      "Étrangeté"
    ]
  },
  {
    "id": 38,
    "texte": "Écrivez la suite : “Sur le pont du navire, tous les regards étaient braqués vers ce point que le capitaine montrait du doigt, à l’horizon. Les matelots n’en croyaient pas leurs yeux”.",
    "categories": [
      "Aventure & exploration",
      "Nature & survie",
      "Mystère & enquête"
    ],
    "tags": [
      "Navire",
      "Horizon",
      "Équipage"
    ]
  },
  {
    "id": 39,
    "texte": "Écrivez la suite :  « Quand le nouveau/la nouvelle entra dans la classe, tous les yeux se braquèrent sur lui/elle… »",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "École",
      "Nouvel élève",
      "Intégration"
    ]
  },
  {
    "id": 40,
    "texte": "Écrivez la suite : « Cela faisait dix ans que les plus grands médecins cherchaient un remède… »",
    "categories": [
      "Technologie & science-fiction",
      "Mystère & enquête"
    ],
    "tags": [
      "Médecine",
      "Recherche scientifique",
      "Maladie"
    ]
  },
  {
    "id": 41,
    "texte": "Racontez une histoire qui se finisse par : “Haletante, tremblante, les yeux perdus dans le vague, elle eut tout juste le temps, avant de mourir, de murmurer ces deux mots : « je regrette ».”",
    "categories": [
      "Relations & émotions",
      "Mystère & enquête"
    ],
    "tags": [
      "Mort",
      "Regret",
      "Révélation"
    ]
  },
  {
    "id": 42,
    "texte": "En faisant du jardinage, Marie découvrit quelque chose d’étrange enterré près du mur de sa maison… Racontez cette histoire.",
    "categories": [
      "Mystère & enquête",
      "Aventure & exploration",
      "Relations & émotions"
    ],
    "tags": [
      "Objet enterré",
      "Maison",
      "Découverte"
    ]
  },
  {
    "id": 43,
    "texte": "Dans les rues des favélas de Rio, un jeune enfant marche, hagard. Personne ne l’a jamais vu, personne ne le connaît. Il parle une langue étrange. Racontez cette histoire.",
    "categories": [
      "Vie quotidienne & société",
      "Mystère & enquête",
      "Aventure & exploration"
    ],
    "tags": [
      "Rio",
      "Langue inconnue",
      "Enfant"
    ]
  },
  {
    "id": 44,
    "texte": "Après une catastrophe, les quelques survivants de la planète Terre essaient d’organiser leur nouvelle vie. Racontez.",
    "categories": [
      "Nature & survie",
      "Vie quotidienne & société",
      "Aventure & exploration"
    ],
    "tags": [
      "Catastrophe",
      "Reconstruction",
      "Communauté"
    ]
  },
  {
    "id": 45,
    "texte": "A chaque fois qu’Antonio mettait la main dans la poche de sa nouvelle veste, il y trouvait un billet de banque qui n’y était pas une seconde auparavant… Racontez cette histoire.",
    "categories": [
      "Fantastique & magie",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Argent mystérieux",
      "Conséquences",
      "Étrangeté"
    ]
  },
  {
    "id": 46,
    "texte": "Un personnage de votre choix trouve un smartphone sur un banc, dans un parc. Dans le téléphone, il découvre une application mystérieuse qui n’existe nulle part ailleurs. Racontez cette histoire.",
    "categories": [
      "Technologie & science-fiction",
      "Mystère & enquête",
      "Aventure & exploration"
    ],
    "tags": [
      "Smartphone",
      "Application mystérieuse",
      "Technologie"
    ]
  },
  {
    "id": 47,
    "texte": "Spécialiste des phénomènes paranormaux, Sam est appelé·e dans un petit village où se passent des choses étranges. Racontez cette histoire.",
    "categories": [
      "Fantastique & magie",
      "Mystère & enquête",
      "Aventure & exploration"
    ],
    "tags": [
      "Paranormal",
      "Village",
      "Enquête"
    ]
  },
  {
    "id": 48,
    "texte": "Quand Sam croise cette personne dans la rue, il/elle se dit qu’elle/il l’a déjà vue quelque part. Il s’agit de son premier amour, 20 ans auparavant. Ces retrouvailles inattendues vont changer sa vie. Racontez cette histoire.",
    "categories": [
      "Relations & émotions"
    ],
    "tags": [
      "Premier amour",
      "Retrouvailles",
      "Souvenir"
    ]
  },
  {
    "id": 49,
    "texte": "Au fond d’une bibliothèque, un vieux livre mystérieux sera le point de départ d’une aventure extraordinaire. Racontez cette histoire.",
    "categories": [
      "Arts, culture & imagination",
      "Fantastique & magie",
      "Aventure & exploration"
    ],
    "tags": [
      "Livre mystérieux",
      "Aventure",
      "Découverte"
    ]
  },
  {
    "id": 50,
    "texte": "Coup de foudre entre Eden et Sacha. Mais leurs bandes sont rivales, et leur amour interdit. Racontez cette histoire.",
    "categories": [
      "Relations & émotions",
      "Justice & conflits",
      "Aventure & exploration"
    ],
    "tags": [
      "Amour",
      "Rivalité",
      "Gangs"
    ]
  },
  {
    "id": 51,
    "texte": "Dans un petit village sans problème, la découverte d’un cadavre bouleverse les habitants. Un.e enquêteur/enquêtrice débutant.e est envoyé.e sur les lieux. Racontez cette histoire.",
    "categories": [
      "Mystère & enquête",
      "Justice & conflits"
    ],
    "tags": [
      "Meurtre",
      "Enquête",
      "Village"
    ]
  },
  {
    "id": 52,
    "texte": "Dans une pièce de cette bibliothèque, les messages qu’on laisse dans une boîte peuvent être lus par des gens du passé. Racontez cette histoire.",
    "categories": [
      "Fantastique & magie",
      "Mystère & enquête",
      "Histoire & mondes anciens"
    ],
    "tags": [
      "Messages",
      "Passé",
      "Bibliothèque"
    ]
  },
  {
    "id": 53,
    "texte": "Les élèves d’une classe remarquent des phénomènes étranges dans leur école. Dans un vieux livre d’histoire trouvé au CDI, ils découvrent que leur lycée a été construit sur un ancien cimetière, et que cela pourrait expliquer bien des choses… Racontez cette histoire.",
    "categories": [
      "Vie quotidienne & société",
      "Fantastique & magie",
      "Histoire & mondes anciens"
    ],
    "tags": [
      "École",
      "Cimetière",
      "Phénomènes étranges"
    ]
  },
  {
    "id": 54,
    "texte": "Un problème inattendu dans leur capsule spatiale oblige des astronautes à se mettre en danger pour sauver leur vie. Racontez cette histoire.",
    "categories": [
      "Technologie & science-fiction",
      "Aventure & exploration",
      "Nature & survie"
    ],
    "tags": [
      "Espace",
      "Capsule spatiale",
      "Danger"
    ]
  },
  {
    "id": 55,
    "texte": "En pensant faire le bien, Sam trahit un secret trop lourd à porter. Racontez cette histoire.",
    "categories": [
      "Relations & émotions",
      "Justice & conflits"
    ],
    "tags": [
      "Secret",
      "Trahison",
      "Bonne intention"
    ]
  },
  {
    "id": 56,
    "texte": "Un arbre majestueux se dresse au milieu de la forêt. On dit qu'il exauce les vœux. Racontez cette histoire.",
    "categories": [
      "Fantastique & magie",
      "Nature & survie"
    ],
    "tags": [
      "Arbre magique",
      "Vœu",
      "Nature"
    ]
  },
  {
    "id": 57,
    "texte": "Un.e enfant découvre qu’il/elle a le pouvoir de manipuler les rêves. Racontez cette histoire.",
    "categories": [
      "Fantastique & magie",
      "Relations & émotions"
    ],
    "tags": [
      "Rêves",
      "Pouvoir",
      "Enfant"
    ]
  },
  {
    "id": 58,
    "texte": "Un.e adolescent.e comprend par hasard que son père/sa mère ne vieillit pas et qu’il/elle est né.e il y a trois cents ans. Racontez cette histoire.",
    "categories": [
      "Fantastique & magie",
      "Relations & émotions",
      "Histoire & mondes anciens"
    ],
    "tags": [
      "Immortalité",
      "Parent",
      "Secret de famille"
    ]
  },
  {
    "id": 59,
    "texte": "A force de mentir à tout le monde, Sam se retrouve dans une situation délicate. Racontez cette histoire.",
    "categories": [
      "Relations & émotions",
      "Justice & conflits"
    ],
    "tags": [
      "Mensonge",
      "Secret",
      "Conséquences"
    ]
  },
  {
    "id": 60,
    "texte": "Dans le Far West, un petit village tranquille est bouleversé par l’arrivée d’un personnage mauvais. Racontez cette histoire.",
    "categories": [
      "Histoire & mondes anciens",
      "Justice & conflits",
      "Aventure & exploration"
    ],
    "tags": [
      "Far West",
      "Village",
      "Conflit"
    ]
  },
  {
    "id": 61,
    "texte": "Sam fait la liste de ses rêves, et décide de changer sa vie pour les réaliser. Racontez cette histoire.",
    "categories": [
      "Relations & émotions",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Rêves",
      "Changement de vie",
      "Décision"
    ]
  },
  {
    "id": 62,
    "texte": "En 2225, l’intelligence artificielle a dépassé l’intelligence humaine. Le monde est gouverné par des robots, l’environnement a été sauvé, il n’y a plus de guerres ni de famines. Mais des humains se rebellent.  Racontez cette histoire.",
    "categories": [
      "Technologie & science-fiction",
      "Vie quotidienne & société",
      "Justice & conflits"
    ],
    "tags": [
      "Robots",
      "Société future",
      "Révolte"
    ]
  },
  {
    "id": 63,
    "texte": "Un tournoi sportif révèle la force de caractère d’un.e jeune compétiteur.ice. Racontez cette histoire.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Sport",
      "Compétition",
      "Défi"
    ]
  },
  {
    "id": 64,
    "texte": "Un.e professeur.e bienveillant.e change le destin d’un.e élève rebelle qui est en difficulté, mais recèle un grand talent. Racontez cette histoire.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "École",
      "Enseignant",
      "Réussite"
    ]
  },
  {
    "id": 65,
    "texte": "Un.e chauffeur.e de taxi raconte ses souvenirs à la première personne. (Cela peut être drôle, effrayant, palpitant, étonnant…)",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions",
      "Aventure & exploration"
    ],
    "tags": [
      "Taxi",
      "Souvenirs",
      "Récit de vie"
    ]
  },
  {
    "id": 66,
    "texte": "Dans l’Antiquité romaine, un jeune garçon/une jeune fille vivant à Pompéi ne se doute pas du danger lorsque survient la catastrophe : le Vésuve entre en éruption.  Racontez cette histoire.",
    "categories": [
      "Histoire & mondes anciens",
      "Nature & survie",
      "Aventure & exploration"
    ],
    "tags": [
      "Pompéi",
      "Éruption",
      "Antiquité"
    ]
  },
  {
    "id": 67,
    "texte": "Un homme/une femme comprend que son époux/son épouse l’a trahi(e). Racontez cette histoire.",
    "categories": [
      "Relations & émotions",
      "Justice & conflits"
    ],
    "tags": [
      "Couple",
      "Trahison",
      "Découverte"
    ]
  },
  {
    "id": 68,
    "texte": "Un requin sème la panique dans une station balnéaire.  Racontez cette histoire.",
    "categories": [
      "Nature & survie",
      "Aventure & exploration"
    ],
    "tags": [
      "Requin",
      "Mer",
      "Danger"
    ]
  },
  {
    "id": 69,
    "texte": "Quatre frères et sœurs âgé.e.s de 8 à 19 ans perdent brutalement leurs parents dans un accident de voiture. Une nouvelle vie commence.  Racontez cette histoire.",
    "categories": [
      "Relations & émotions",
      "Nature & survie"
    ],
    "tags": [
      "Famille",
      "Accident",
      "Nouveau départ"
    ]
  },
  {
    "id": 70,
    "texte": "Un.e archéologue part à la recherche d’un objet historique légendaire dans un pays lointain. Il/elle va rencontrer bien des obstacles.  Racontez cette histoire.",
    "categories": [
      "Histoire & mondes anciens",
      "Aventure & exploration"
    ],
    "tags": [
      "Archéologie",
      "Objet historique",
      "Voyage"
    ]
  },
  {
    "id": 71,
    "texte": "Un petit groupe d’ami(e)s décide de coloniser une île déserte pour y fonder une société idéale. Racontez.",
    "categories": [
      "Aventure & exploration",
      "Nature & survie",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Île déserte",
      "Société idéale",
      "Coopération"
    ]
  },
  {
    "id": 72,
    "texte": "Axel et son oncle Otto Lidenbrock découvrent un vieux parchemin qui prétend donner le chemin vers le centre de la Terre. Racontez cette aventure (d’après Jules Verne).",
    "categories": [
      "Aventure & exploration",
      "Fantastique & magie",
      "Histoire & mondes anciens"
    ],
    "tags": [
      "Jules Verne",
      "Centre de la Terre",
      "Exploration"
    ]
  },
  {
    "id": 73,
    "texte": "“ J’avais entendu un bruit. Mes parents avaient beau essayer de me rassurer, j’en étais sûr(e), j’avais entendu un bruit…”. Racontez la suite.",
    "categories": [
      "Mystère & enquête",
      "Fantastique & magie",
      "Relations & émotions"
    ],
    "tags": [
      "Bruit mystérieux",
      "Maison",
      "Peur"
    ]
  },
  {
    "id": 74,
    "texte": "Un chat noir fixe Sam avec insistance. Sam décide de le suivre… Racontez cette histoire.",
    "categories": [
      "Nature & survie",      "Mystère & enquête",
      "Aventure & exploration"
    ],
    "tags": [
      "Chat",
      "Étrangeté",
      "Suivi"
    ]
  },
  {
    "id": 75,
    "texte": "Une serveuse dans un restaurant surprend quelqu’un en train de voler de la nourriture dans l’arrière cuisine. Racontez cette histoire.",
    "categories": [
      "Vie quotidienne & société",
      "Justice & conflits"
    ],
    "tags": [
      "Restaurant",
      "Vol",
      "Témoin"
    ]
  },
  {
    "id": 76,
    "texte": "“Un colis était posé devant ma porte. Je n’avais pourtant rien commandé, et ce n’était pas mon anniversaire…” Racontez la suite.",
    "categories": [
      "Mystère & enquête",
      "Aventure & exploration"
    ],
    "tags": [
      "Colis mystérieux",
      "Maison",
      "Inconnu"
    ]
  },
  {
    "id": 77,
    "texte": "Dans sa salle de bain, Sam découvre sur son corps un détail étrange. Peu à peu, Sam comprend qu’il/elle est en train de se transformer en monstre. Il/elle commence à écrire un journal intime pour raconter sa transformation. Ecrivez le journal intime de Sam. Conseils : Décrivez progressivement la transformation et transcrivez les pensées de Sam. Cette transformation va aussi modifier son comportement, ou lui donner des pouvoirs, imaginez quels événements cela peut créer.",
    "categories": [
      "Fantastique & magie",
      "Relations & émotions"
    ],
    "tags": [
      "Transformation",
      "Monstre",
      "Journal intime"
    ]
  },
  {
    "id": 78,
    "texte": "Des phénomènes étranges se produisent autour d’un petit village de montagne. Au bout de quelques jours, il n’y a plus de doute : des monstres menacent le village, et les habitants vont devoir se défendre. Racontez cette histoire. Conseils : Décrivez les phénomènes étranges, la réaction des villageois, dites quelle est la menace, à quoi ressemblent les monstres et ce que font les villageois pour se défendre.",
    "categories": [
      "Fantastique & magie",
      "Nature & survie",
      "Aventure & exploration"
    ],
    "tags": [
      "Monstres",
      "Village",
      "Danger"
    ]
  },
  {
    "id": 79,
    "texte": "Un personnage de votre choix trouve un smartphone sur un banc, dans un parc. Dans le téléphone, il découvre des informations qui vont bouleverser sa vie. Racontez cette histoire.",
    "categories": [
      "Technologie & science-fiction",
      "Mystère & enquête"
    ],
    "tags": [
      "Smartphone",
      "Information secrète",
      "Découverte"
    ]
  },
  {
    "id": 80,
    "texte": "Je me réveillais sur une plage. Le soleil me brûlait le visage. Les vagues venaient me rafraîchir les pieds. Je n'avais aucune idée de l’endroit où je me trouvais. Écrivez la suite",
    "categories": [
      "Nature & survie",
      "Aventure & exploration",
      "Mystère & enquête"
    ],
    "tags": [
      "Naufrage",
      "Île",
      "Amnésie"
    ]
  },
  {
    "id": 81,
    "texte": "Après avoir passé plusieurs mois sur le Whitebird, Vendredi parvient à rentrer chez lui, dans sa tribu sur les côtes du Chili. Il y retrouve ses frères et sœurs, plus de quinze ans après les avoir quittés. Il leur raconte alors toute son aventure. Il commence son histoire par “Mes frères et soeurs, il faut que je vous raconte”. Écrivez la suite. (D’après Vendredi ou la Vie sauvage)",
    "categories": [
      "Aventure & exploration",
      "Relations & émotions",
      "Histoire & mondes anciens"
    ],
    "tags": [
      "Vendredi",
      "Retour",
      "Voyage"
    ]
  },
  {
    "id": 82,
    "texte": "Un groupe de jeunes aventurier(e)s découvre un passage au fond d’une grotte… Racontez cette histoire.",
    "categories": [
      "Aventure & exploration",
      "Mystère & enquête",
      "Nature & survie"
    ],
    "tags": [
      "Grotte",
      "Passage secret",
      "Exploration"
    ]
  },
  {
    "id": 83,
    "texte": "Un livreur dépose par erreur chez lui/elle un colis. A l’intérieur, une grande boîte en bois. Quand il/elle entre à l’intérieur de la boite, il/elle remonte cinq mois dans le temps. Imaginez cette histoire.",
    "categories": [
      "Technologie & science-fiction",
      "Aventure & exploration",
      "Mystère & enquête"
    ],
    "tags": [
      "Colis",
      "Voyage dans le temps",
      "Erreur"
    ]
  },
  {
    "id": 84,
    "texte": "La police a reçu un message anonyme : un objet de grande valeur va être bientôt volé au Louvre… Imaginez cette histoire.",
    "categories": [
      "Mystère & enquête",
      "Histoire & mondes anciens",
      "Aventure & exploration"
    ],
    "tags": [
      "Louvre",
      "Vol",
      "Objet précieux"
    ]
  },
  {
    "id": 85,
    "texte": "Un(e) orphelin(e) mène l’enquête sur la mort de ses parents. Imaginez cette histoire.",
    "categories": [
      "Mystère & enquête",
      "Relations & émotions",
      "Justice & conflits"
    ],
    "tags": [
      "Orphelin·e",
      "Enquête",
      "Parents"
    ]
  },
  {
    "id": 86,
    "texte": "La compétition sportive ne s’était pas passée comme prévu. Imaginez cette histoire.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Sport",
      "Compétition",
      "Imprévu"
    ]
  },
  {
    "id": 87,
    "texte": "Un vieil homme / une vieille femme raconte un souvenir de sa jeunesse. Ses petits enfants, bouche bée, comprennent qu’il/elle a eu secrètement un grand rôle dans l’Histoire. Imaginez cette histoire.",
    "categories": [
      "Histoire & mondes anciens",
      "Relations & émotions",
      "Mystère & enquête"
    ],
    "tags": [
      "Personnage historique",
      "Secret",
      "Révélation"
    ]
  },
  {
    "id": 88,
    "texte": "Un personnage découvre qu’il a un pouvoir.",
    "categories": [
      "Fantastique & magie",
      "Relations & émotions"
    ],
    "tags": [
      "Pouvoir",
      "Découverte",
      "Identité"
    ]
  },
  {
    "id": 89,
    "texte": "Les parents de Sam lui offrent un pantalon pour son anniversaire. Au début, le cadeau ne lui plait pas du tout. Mais quand Sam se rend compte qu’un billet de banque apparaît dans sa poche à chaque fois qu’on y met la main, c’est autre chose ! Problème : à chaque fois que Sam prend un billet dans sa poche, un grave malheur arrive à ses parents.  Racontez cette histoire.",
    "categories": [
      "Fantastique & magie",
      "Relations & émotions",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Argent magique",
      "Famille",
      "Conséquences"
    ]
  },
  {
    "id": 90,
    "texte": "Racontez un livre ou un film que vous aimez.",
    "categories": [
      "Arts, culture & imagination"
    ],
    "tags": [
      "Livre",
      "Film",
      "Goûts culturels"
    ]
  },
  {
    "id": 91,
    "texte": "Racontez la fois où une sportive ou un sportif vous a impressionné(e).",
    "categories": [
      "Arts, culture & imagination",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Sport",
      "Modèle",
      "Admiration"
    ]
  },
  {
    "id": 92,
    "texte": "Racontez la plus grande peur de votre vie.",
    "categories": [
      "Relations & émotions"
    ],
    "tags": [
      "Peur",
      "Souvenir",
      "Expérience personnelle"
    ]
  },
  {
    "id": 93,
    "texte": "Racontez l’histoire la plus triste possible.",
    "categories": [
      "Relations & émotions"
    ],
    "tags": [
      "Tristesse",
      "Émotions",
      "Drame"
    ]
  },
  {
    "id": 94,
    "texte": "Racontez une histoire d’amitié.",
    "categories": [
      "Relations & émotions"
    ],
    "tags": [
      "Amitié",
      "Rencontre",
      "Émotions"
    ]
  },
  {
    "id": 95,
    "texte": "Racontez votre plus grande fierté.",
    "categories": [
      "Relations & émotions",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Fierté",
      "Réussite",
      "Émotions"
    ]
  },
  {
    "id": 96,
    "texte": "Racontez vos vacances idéales.",
    "categories": [
      "Aventure & exploration",
      "Relations & émotions"
    ],
    "tags": [
      "Vacances",
      "Voyage",
      "Souvenir"
    ]
  },
  {
    "id": 97,
    "texte": "Racontez une histoire de fantôme.",
    "categories": [
      "Fantastique & magie",
      "Mystère & enquête",
      "Relations & émotions"
    ],
    "tags": [
      "Fantôme",
      "Peur",
      "Mort"
    ]
  },
  {
    "id": 98,
    "texte": "Racontez un grand moment de joie ou de rire.",
    "categories": [
      "Relations & émotions",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Joie",
      "Rire",
      "Amitié"
    ]
  },
  {
    "id": 99,
    "texte": "Racontez une histoire sur le thème : « Catastrophe ! »",
    "categories": [
      "Nature & survie",
      "Aventure & exploration"
    ],
    "tags": [
      "Catastrophe",
      "Danger",
      "Survie"
    ]
  },
  {
    "id": 100,
    "texte": "Racontez une histoire de super-pouvoir.",
    "categories": [
      "Fantastique & magie",
      "Aventure & exploration"
    ],
    "tags": [
      "Super-pouvoir",
      "Héroïsme",
      "Aventure"
    ]
  },
  {
    "id": 101,
    "texte": "Racontez une histoire de voyage dans le temps.",
    "categories": [
      "Technologie & science-fiction",
      "Aventure & exploration"
    ],
    "tags": [
      "Voyage dans le temps",
      "Destin",
      "Futur"
    ]
  },
  {
    "id": 102,
    "texte": "Racontez une histoire d’injustice.",
    "categories": [
      "Justice & conflits",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Injustice",
      "Conflit",
      "Justice"
    ]
  },
  {
    "id": 103,
    "texte": "Racontez une histoire à partir d’un objet : La machine à rétrécir.",
    "categories": [
      "Technologie & science-fiction",
      "Aventure & exploration"
    ],
    "tags": [
      "Machine",
      "Rétrécissement",
      "Exploration"
    ]
  },
  {
    "id": 104,
    "texte": "Racontez une histoire de revanche.",
    "categories": [
      "Justice & conflits",
      "Relations & émotions"
    ],
    "tags": [
      "Vengeance",
      "Justice",
      "Colère"
    ]
  },
  {
    "id": 105,
    "texte": "Racontez une histoire à partir d’un objet : la machine à effacer les souvenirs.",
    "categories": [
      "Technologie & science-fiction",
      "Relations & émotions"
    ],
    "tags": [
      "Mémoire",
      "Machine",
      "Souvenir"
    ]
  },
  {
    "id": 106,
    "texte": "Racontez des retrouvailles.",
    "categories": [
      "Relations & émotions"
    ],
    "tags": [
      "Retrouvailles",
      "Famille",
      "Souvenir"
    ]
  },
  {
    "id": 107,
    "texte": "Racontez une histoire de rivalité.",
    "categories": [
      "Relations & émotions",
      "Justice & conflits"
    ],
    "tags": [
      "Rivalité",
      "Amitié",
      "Compétition"
    ]
  },
  {
    "id": 108,
    "texte": "Racontez un phénomène paranormal.",
    "categories": [
      "Fantastique & magie",
      "Mystère & enquête"
    ],
    "tags": [
      "Paranormal",
      "Phénomène étrange",
      "Peur"
    ]
  },
  {
    "id": 109,
    "texte": "Racontez une histoire à partir d’un objet : le plus gros diamant du monde.",
    "categories": [
      "Aventure & exploration",
      "Justice & conflits"
    ],
    "tags": [
      "Diamant",
      "Vol",
      "Trésor"
    ]
  },
  {
    "id": 110,
    "texte": "Racontez un grand moment de honte.",
    "categories": [
      "Relations & émotions",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Honte",
      "École",
      "Émotions"
    ]
  },
  {
    "id": 111,
    "texte": "Racontez une histoire sur le thème : « Coup de théâtre ! »",
    "categories": [
      "Arts, culture & imagination",
      "Mystère & enquête"
    ],
    "tags": [
      "Théâtre",
      "Coup de théâtre",
      "Surprise"
    ]
  },
  {
    "id": 112,
    "texte": "Racontez l’histoire d’un rêve devenu réalité.",
    "categories": [
      "Fantastique & magie",
      "Relations & émotions"
    ],
    "tags": [
      "Rêve",
      "Réalisation",
      "Émotions"
    ]
  },
  {
    "id": 113,
    "texte": "Racontez une histoire de transformation.",
    "categories": [
      "Fantastique & magie",
      "Relations & émotions"
    ],
    "tags": [
      "Transformation",
      "Métamorphose",
      "Identité"
    ]
  },
  {
    "id": 114,
    "texte": "Racontez une histoire à partir d’un objet : La machine qui rend invisible.",
    "categories": [
      "Technologie & science-fiction",
      "Fantastique & magie"
    ],
    "tags": [
      "Invisibilité",
      "Machine",
      "Pouvoir"
    ]
  },
  {
    "id": 115,
    "texte": "Racontez une grande colère.",
    "categories": [
      "Relations & émotions",
      "Justice & conflits"
    ],
    "tags": [
      "Colère",
      "Conflit",
      "Émotions"
    ]
  },
  {
    "id": 116,
    "texte": "Racontez une histoire sur le thème : « Sauver le monde ».",
    "categories": [
      "Aventure & exploration",
      "Justice & conflits",
      "Technologie & science-fiction"
    ],
    "tags": [
      "Sauver le monde",
      "Mission",
      "Héroïsme"
    ]
  },
  {
    "id": 117,
    "texte": "Racontez une histoire à partir d’un objet : la machine à prédire les crimes.",
    "categories": [
      "Technologie & science-fiction",
      "Mystère & enquête",
      "Justice & conflits"
    ],
    "tags": [
      "Crime",
      "Prédiction",
      "Enquête"
    ]
  },
  {
    "id": 118,
    "texte": "Racontez une histoire de pirates.",
    "categories": [
      "Aventure & exploration",
      "Nature & survie"
    ],
    "tags": [
      "Pirates",
      "Mer",
      "Trésor"
    ]
  },
  {
    "id": 119,
    "texte": "Racontez une histoire à partir d’un objet : un téléphone portable.",
    "categories": [
      "Technologie & science-fiction",
      "Mystère & enquête",
      "Relations & émotions"
    ],
    "tags": [
      "Téléphone",
      "Communication",
      "Mystère"
    ]
  },
  {
    "id": 120,
    "texte": "Racontez une histoire sur le thème : « Enquête ».",
    "categories": [
      "Mystère & enquête",
      "Justice & conflits"
    ],
    "tags": [
      "Enquête",
      "Indices",
      "Crime"
    ]
  },
  {
    "id": 121,
    "texte": "Racontez une histoire de jalousie.",
    "categories": [
      "Relations & émotions",
      "Justice & conflits"
    ],
    "tags": [
      "Jalousie",
      "Amour",
      "Rivalité"
    ]
  },
  {
    "id": 122,
    "texte": "Racontez une histoire dans l’espace.",
    "categories": [
      "Technologie & science-fiction",
      "Aventure & exploration"
    ],
    "tags": [
      "Espace",
      "Voyage spatial",
      "Exploration"
    ]
  },
  {
    "id": 123,
    "texte": "Racontez une histoire de générosité.",
    "categories": [
      "Relations & émotions",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Générosité",
      "Solidarité",
      "Entraide"
    ]
  },
  {
    "id": 124,
    "texte": "Racontez une histoire à partir d’un objet : le journal intime d’un aïeul.",
    "categories": [
      "Relations & émotions",
      "Histoire & mondes anciens",
      "Mystère & enquête"
    ],
    "tags": [
      "Journal intime",
      "Ancêtres",
      "Secret de famille"
    ]
  },
  {
    "id": 125,
    "texte": "En rangeant une vieille armoire, Sam découvre un carnet qui raconte avec précision des événements de sa propre vie… alors que le carnet semble avoir été écrit des dizaines d’années auparavant. Racontez cette histoire.",
    "categories": [
      "Fantastique & magie",
      "Technologie & science-fiction",
      "Mystère & enquête"
    ],
    "tags": [
      "Prédiction",
      "Vie future",
      "Objet mystérieux"
    ]
  },
  {
    "id": 126,
    "texte": "Enfants, deux amis se sont fait une promesse qu’ils pensaient ne jamais avoir à tenir. Des années plus tard, l’un d’eux revient demander à l’autre de respecter sa parole. Racontez cette histoire.",
    "categories": [
      "Relations & émotions"
    ],
    "tags": [
      "Promesse",
      "Enfance",
      "Retrouvailles"
    ]
  },
  {
    "id": 127,
    "texte": "Une vieille photographie de famille montre un inconnu que personne ne reconnaît. Pourtant, lorsque le personnage principal demande qui il est, ses proches semblent soudain très mal à l’aise. Racontez cette histoire.",
    "categories": [
      "Relations & émotions",
      "Mystère & enquête"
    ],
    "tags": [
      "Photographie",
      "Secret",
      "Inconnu"
    ]
  },
  {
    "id": 128,
    "texte": "Un adolescent découvre par hasard le métier très particulier qu’exerce son voisin. Fasciné, il lui demande de l’accompagner. Il découvre alors un monde dont il ignorait totalement l’existence. Racontez cette histoire.",
    "categories": [
      "Aventure & exploration",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Voisinage",
      "Métier secret",
      "Découverte"
    ]
  },
  {
    "id": 129,
    "texte": "En ouvrant un carton oublié dans le grenier, une famille découvre une ville miniature parfaitement reproduite. Le lendemain, un détail de la maquette a changé. Puis un deuxième. Puis un troisième. Racontez cette histoire.",
    "categories": [
      "Fantastique & magie",
      "Mystère & enquête"
    ],
    "tags": [
      "Ville miniature",
      "Maison",
      "Étrangeté"
    ]
  },
  {
    "id": 130,
    "texte": "Un soir, Sam reçoit sur son téléphone un message vocal envoyé par quelqu’un qu’il ne connaît pas. Ce n’est pas une erreur et ce message va bouleverser sa vie. Racontez cette histoire.",
    "categories": [
      "Technologie & science-fiction",
      "Mystère & enquête",
      "Relations & émotions"
    ],
    "tags": [
      "Message vocal",
      "Destin",
      "Secret"
    ]
  },
  {
    "id": 131,
    "texte": "Depuis plusieurs jours, Lina remarque qu’une maison inhabitée semble pourtant occupée : une lumière s’allume chaque soir, une fenêtre s’ouvre, puis quelqu’un apparaît derrière les rideaux. Elle décide d’aller voir ce qui s’y passe.",
    "categories": [
      "Fantastique & magie",
      "Mystère & enquête"
    ],
    "tags": [
      "Maison abandonnée",
      "Voisinage",
      "Secret"
    ]
  },
  {
    "id": 132,
    "texte": "Une troupe de théâtre prépare sa dernière représentation dans un vieux théâtre avant sa fermeture définitive. Pendant la répétition générale, un événement inattendu bouleverse complètement le spectacle.",
    "categories": [
      "Arts, culture & imagination",
      "Mystère & enquête"
    ],
    "tags": [
      "Théâtre",
      "Dernière représentation",
      "Événement inattendu"
    ]
  },
  {
    "id": 133,
    "texte": "Dans un lieu qu’il connaît depuis toujours, Sam découvre par hasard une porte qui n’existait pas auparavant. Une inscription lui interdit formellement de l’ouvrir.",
    "categories": [
      "Fantastique & magie",
      "Mystère & enquête",
      "Aventure & exploration"
    ],
    "tags": [
      "Porte interdite",
      "Lieu familier",
      "Découverte"
    ]
  },
  {
    "id": 134,
    "texte": "Une jeune fille dessine machinalement une scène qu’elle n’a jamais vue. Quelques heures plus tard, elle découvre que cette scène est en train de se produire quelque part autour d’elle. Elle comprend alors que son dessin n’était peut-être pas une simple imagination.",
    "categories": [
      "Fantastique & magie",
      "Mystère & enquête"
    ],
    "tags": [
      "Dessin prémonitoire",
      "Prémonition",
      "Événement futur"
    ]
  },
  {
    "id": 135,
    "texte": "En visitant une vieille maison avec sa famille, Lina découvre une chambre dont la porte est condamnée depuis des années. Elle apprend que personne n’a le droit d’y entrer, mais ignore pourquoi.",
    "categories": [
      "Mystère & enquête",
      "Fantastique & magie"
    ],
    "tags": [
      "Pièce condamnée",
      "Maison ancienne",
      "Secret"
    ]
  },
  {
    "id": 136,
    "texte": "Dans le village où Lina vient d’arriver, tout le monde respecte une étrange règle : personne ne sort de chez lui après le coucher du soleil. Un soir, elle découvre ce qui se passe lorsqu’on désobéit.",
    "categories": [
      "Fantastique & magie",
      "Mystère & enquête",
      "Nature & survie"
    ],
    "tags": [
      "Village isolé",
      "Nuit",
      "Interdit"
    ]
  },
  {
    "id": 137,
    "texte": "Dans un musée, Sam remarque qu’un personnage représenté sur un tableau semble avoir changé de position depuis sa première visite. Il revient le lendemain pour vérifier ce qu’il a vu.",
    "categories": [
      "Fantastique & magie",
      "Arts, culture & imagination",
      "Mystère & enquête"
    ],
    "tags": [
      "Tableau",
      "Musée",
      "Personnage vivant"
    ]
  },
  {
    "id": 138,
    "texte": "Un nouveau voisin s’installe dans l’immeuble. Il est particulièrement sympathique, mais il semble toujours savoir ce qui vient de se passer dans les appartements avant même que quelqu’un lui en parle.",
    "categories": [
      "Mystère & enquête",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Voisinage",
      "Secret",
      "Passé"
    ]
  },
  {
    "id": 139,
    "texte": "Au cours d’une promenade, un groupe d’amis s’aperçoit soudain qu’un des leurs a disparu. Aucun d’entre eux ne se souvient du moment où il s’est éloigné.",
    "categories": [
      "Mystère & enquête",
      "Relations & émotions"
    ],
    "tags": [
      "Disparition",
      "Mémoire",
      "Amitié"
    ]
  },
  {
    "id": 140,
    "texte": "Depuis quelque temps, Sam cache à ses amis une situation difficile que sa famille traverse. Un jour, l’un d’eux comprend que quelque chose ne va pas et lui demande des explications. Racontez",
    "categories": [
      "Relations & émotions",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Secret familial",
      "Amitié",
      "Difficulté"
    ]
  },
  {
    "id": 141,
    "texte": "À la suite d’un déménagement, Sasha arrive dans un nouveau collège où il/elle ne connaît personne. Il/elle décide de faire tout son possible pour se faire une place, mais sa première journée ne se déroule pas comme prévu.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "École",
      "Nouvel élève",
      "Intégration"
    ]
  },
  {
    "id": 142,
    "texte": "Sam n’aime pas son apparence et évite depuis longtemps certaines situations : se mettre en maillot, être photographié, prendre la parole devant les autres… Un événement va pourtant l’obliger à affronter ce complexe.",
    "categories": [
      "Relations & émotions",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Image de soi",
      "Adolescence",
      "Confiance en soi"
    ]
  },
  {
    "id": 143,
    "texte": "Lors d'une sortie scolaire, il ne reste qu’une place dans le véhicule. Deux élèves qui ne s’apprécient pas particulièrement doivent pourtant voyager côte à côte pendant plusieurs heures. Racontez ce qui va se passer entre eux.",
    "categories": [
      "Relations & émotions",
      "Aventure & exploration"
    ],
    "tags": [
      "Rivalité",
      "Voyage",
      "Coopération"
    ]
  },
  {
    "id": 144,
    "texte": "Sasha rêve de participer à une compétition sportive, mais il/elle est persuadé·e de ne pas être à la hauteur. Lorsqu’une occasion inattendue se présente, il/elle décide malgré tout de tenter sa chance.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Sport",
      "Doute",
      "Défi"
    ]
  },
  {
    "id": 145,
    "texte": "Une rumeur circule dans le collège au sujet de Sam. Elle est fausse, mais de plus en plus d’élèves commencent à y croire. Sam doit décider comment réagir.",
    "categories": [
      "Vie quotidienne & société",
      "Justice & conflits"
    ],
    "tags": [
      "Rumeur",
      "École",
      "Fausse accusation"
    ]
  },
  {
    "id": 146,
    "texte": "À cause d’un handicap, Sam doit régulièrement faire les choses autrement que les autres élèves. Lors d’une activité organisée par le collège, un problème se pose et personne n’avait prévu la situation.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions",
      "Justice & conflits"
    ],
    "tags": [
      "Handicap",
      "École",
      "Inclusion"
    ]
  },
  {
    "id": 147,
    "texte": "Depuis plusieurs mois, deux adolescent.e.s sont attiré.e.s l’un par l’autre sans jamais oser se parler vraiment. Un événement va les obliger à passer davantage de temps ensemble.",
    "categories": [
      "Relations & émotions"
    ],
    "tags": [
      "Attirance",
      "Adolescence",
      "Amour"
    ]
  },
  {
    "id": 148,
    "texte": "Après des mois d’entraînement, Sam est enfin sélectionné pour participer à une compétition importante. Mais quelques jours avant l’épreuve, un événement lui fait sérieusement douter de ses capacités.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Compétition",
      "Défi",
      "Doute"
    ]
  },
  {
    "id": 149,
    "texte": "En arrivant dans une nouvelle classe, Sasha découvre qu’un·e élève est régulièrement mis à l’écart à cause de ses origines. Il/elle assiste un jour à une situation qu’il/elle ne peut plus simplement laisser passer. Racontez ce qu’il/elle décide de faire et les conséquences de sa décision.",
    "categories": [
      "Vie quotidienne & société",
      "Justice & conflits",
      "Relations & émotions"
    ],
    "tags": [
      "Exclusion",
      "Racisme",
      "Solidarité"
    ]
  },
  {
    "id": 150,    "texte": "Un·e professeur·e arrive dans une classe où les élèves sont réputés particulièrement difficiles. Il/elle décide de leur proposer un projet qui n’a encore jamais été réalisé dans l’établissement. Racontez comment le projet se met en place et ce qu’il va provoquer.",
    "categories": [
      "Vie quotidienne & société",
      "Arts, culture & imagination",
      "Relations & émotions"
    ],
    "tags": [
      "École",
      "Projet",
      "Classe"
    ]
  },
  {
    "id": 151,
    "texte": "Deux élèves qui ne s’apprécient pas sont contraint·e·s de travailler ensemble pour préparer une épreuve importante. Au début, chacun est persuadé que l’autre va faire échouer le projet. Racontez comment leur relation évolue.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "École",
      "Rivalité",
      "Coopération"
    ]
  },
  {
    "id": 152,
    "texte": "À la suite d’un imprévu, un·e adolescent·e se retrouve à devoir traverser une région entière avec une personne qu’il connaît à peine. Ce voyage, qui devait durer quelques heures, va finalement changer leur relation.",
    "categories": [
      "Aventure & exploration",
      "Relations & émotions"
    ],
    "tags": [
      "Voyage",
      "Rencontre",
      "Coopération"
    ]
  },
  {
    "id": 153,
    "texte": "Pour résoudre un problème qui lui paraît insurmontable, Sasha demande à un·e camarade de classe de se faire passer pour son/sa petit·e ami·e pendant quelques jours. Ils/elles pensent pouvoir facilement jouer la comédie. Mais les choses deviennent rapidement plus compliquées que prévu.",
    "categories": [
      "Relations & émotions",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Amour",
      "Mensonge",
      "Adolescence"
    ]
  },
  {
    "id": 154,
    "texte": "Pour remplacer au dernier moment un·e camarade absent·e, Sasha accepte de jouer un rôle important dans un spectacle. Il/Elle n’a jamais fait de théâtre et pense simplement devoir apprendre son texte. Mais les répétitions vont l’amener à découvrir quelque chose sur lui/elle-même.",
    "categories": [
      "Arts, culture & imagination",
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Théâtre",
      "Remplacement",
      "Découverte de soi"
    ]
  },
  {
    "id": 155,
    "texte": "Après des années sans nouvelles, un·e adolescent·e retrouve soudain un membre de sa famille qu’il/elle ne connaissait presque pas. Cette rencontre fait ressurgir des histoires que les adultes avaient toujours refusé de lui raconter.",
    "categories": [
      "Relations & émotions",
      "Mystère & enquête"
    ],
    "tags": [
      "Famille",
      "Secret",
      "Retrouvailles"
    ]
  },
  {
    "id": 156,
    "texte": "Après une dispute particulièrement violente avec ses parents, Sam décide de partir de chez lui/elle pour quelques jours. Il/elle pensait pouvoir facilement se débrouiller seul·e, mais les événements prennent une tournure inattendue.",
    "categories": [
      "Relations & émotions",
      "Justice & conflits",
      "Nature & survie"
    ],
    "tags": [
      "Conflit familial",
      "Fuite",
      "Adolescence"
    ]
  },
  {
    "id": 157,
    "texte": "Cinq adolescent·e·s qui ne se connaissent pas vraiment doivent réaliser ensemble un projet : un concours pour remporter un prix important. Chacun·e possède un talent très différent des autres, mais aussi une raison personnelle de vouloir réussir. Peu à peu, leurs désaccords vont mettre le projet en danger.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "École",
      "Projet",
      "Compétition"
    ]
  },
  {
    "id": 158,
    "texte": "Sam commence à échanger des lettres avec un·e adolescent·e de son âge qu’elle/il ne connaît pas. Ils/elles deviennent rapidement très proches, sans jamais s’être rencontré·e·s. Puis l’un·e d’eux/d'elles découvre que l’autre lui a caché quelque chose d’important.",
    "categories": [
      "Relations & émotions",
      "Mystère & enquête"
    ],
    "tags": [
      "Correspondance",
      "Amitié",
      "Secret"
    ]
  },
  {
    "id": 159,
    "texte": "En préparant un exposé sur l’histoire de sa famille, Sam découvre un événement dont personne ne lui avait jamais parlé.",
    "categories": [
      "Relations & émotions",
      "Histoire & mondes anciens",
      "Mystère & enquête"
    ],
    "tags": [
      "Famille",
      "Histoire familiale",
      "Secret"
    ]
  },
  {
    "id": 160,
    "texte": "Pour impressionner ses amis, Lina/Tom affirme qu’elle/il est capable de relever un défi qu’elle/il redoute depuis toujours. Lorsqu’ils la prennent au sérieux, elle n’a plus d’autre choix que d’essayer.",
    "categories": [
      "Relations & émotions",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Défi",
      "Peur",
      "Dépassement de soi"
    ]
  },
  {
    "id": 161,
    "texte": "Un nouvel élève arrive dans la classe. Il ne parle presque jamais et reste toujours seul. Sam décide pourtant d’essayer de faire connaissance avec lui et découvre peu à peu les raisons de son silence.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "École",
      "Amitié",
      "Solitude"
    ]
  },
  {
    "id": 162,
    "texte": "À la suite d’un concours de circonstances, un groupe d’adolescents se retrouve pendant plusieurs jours sans aucun adulte pour les aider. Ils commencent par profiter de cette liberté inattendue, avant de comprendre qu’ils vont devoir apprendre à s’organiser.",
    "categories": [
      "Nature & survie",
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Survie",
      "Adolescence",
      "Organisation"
    ]
  },
  {
    "id": 163,
    "texte": "À la fin de l’année scolaire, Sam apprend qu’il/elle va devoir quitter ses amis et changer complètement de vie. Il/elle décide de profiter des dernières semaines pour réaliser avec eux tout ce qu’ils avaient toujours rêvé de faire ensemble.",
    "categories": [
      "Relations & émotions",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Amitié",
      "Séparation",
      "Changement de vie"
    ]
  },
  {
    "id": 164,
    "texte": "Une équipe de recherche installée sur une station spatiale capte un signal provenant d’une région de l’espace que les scientifiques pensaient totalement silencieuse.",
    "categories": [
      "Technologie & science-fiction",
      "Aventure & exploration",
      "Mystère & enquête"
    ],
    "tags": [
      "Station spatiale",
      "Signal",
      "Découverte"
    ]
  },
  {
    "id": 165,
    "texte": "Une mission scientifique doit étudier une planète récemment découverte. Alors que l’équipage se prépare à repartir, un problème technique empêche le vaisseau de décoller. Sam et Alex doivent trouver une solution avec les ressources disponibles sur place.",
    "categories": [
      "Technologie & science-fiction",
      "Aventure & exploration",
      "Nature & survie"
    ],
    "tags": [
      "Planète inconnue",
      "Panne",
      "Survie"
    ]
  },
  {
    "id": 166,
    "texte": "Après des années de recherche, une sonde rapporte enfin des preuves de l’existence d’une forme de vie ailleurs dans l’univers. L’équipe scientifique doit décider comment transmettre cette découverte à la Terre et surtout s’il faut tenter d’entrer en contact.",
    "categories": [
      "Technologie & science-fiction",
      "Aventure & exploration",
      "Relations & émotions"
    ],
    "tags": [
      "Vie extraterrestre",
      "Contact",
      "Découverte"
    ]
  },
  {
    "id": 167,
    "texte": "À bord d’une station spatiale située très loin de la Terre, Sam reçoit un message qui annonce une situation catastrophique. Mais le message a été envoyé loin de là, plusieurs années auparavant. L’équipage doit comprendre ce qui s’est passé et décider s’il peut encore agir.",
    "categories": [
      "Technologie & science-fiction",
      "Mystère & enquête",
      "Aventure & exploration"
    ],
    "tags": [
      "Message du futur",
      "Catastrophe",
      "Mission"
    ]
  },
  {
    "id": 168,
    "texte": "Une équipe d’astronautes découvre une planète qui possède de l’eau liquide, une atmosphère respirable et des traces évidentes d’une ancienne civilisation. Leur mission était seulement l’observation scientifique : faut-il désormais explorer les lieux malgré les risques ?",
    "categories": [
      "Technologie & science-fiction",
      "Aventure & exploration",
      "Mystère & enquête"
    ],
    "tags": [
      "Planète habitable",
      "Civilisation ancienne",
      "Exploration"
    ]
  },
  {
    "id": 169,
    "texte": "En consultant les archives d’un ancien programme spatial, Alex découvre les travaux d’une scientifique dont le nom a disparu des documents officiels.",
    "categories": [
      "Technologie & science-fiction",
      "Mystère & enquête",
      "Arts, culture & imagination"
    ],
    "tags": [
      "Scientifique",
      "Archives",
      "Mémoire"
    ]
  },
  {
    "id": 170,
    "texte": "Cinquante ans après l’arrivée des premier·ères colonisateur·rices sur Mars, Sam fait partie de la première génération née sur la planète. Alors qu’une mission venue de la Terre arrive, une discussion oppose les deux générations sur l’avenir de la colonie.",
    "categories": [
      "Technologie & science-fiction",
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Mars",
      "Colonisation",
      "Générations"
    ]
  },
  {
    "id": 171,
    "texte": "Après une mission de vingt ans, une équipe d’astronautes revient enfin sur Terre. Mais le monde qu’elle retrouve a profondément changé pendant son absence. Sam doit retrouver sa famille et comprendre cette nouvelle société.",
    "categories": [
      "Technologie & science-fiction",
      "Relations & émotions",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Retour sur Terre",
      "Famille",
      "Société transformée"
    ]
  },
  {
    "id": 172,
    "texte": "En arrivant dans une petite ville de l’Ouest, Sam découvre que personne ne semble oser s’opposer à une personne riche et puissante qui fait régner sa loi. Un événement va pousser Sam à intervenir.",
    "categories": [
      "Histoire & mondes anciens",
      "Justice & conflits",
      "Aventure & exploration"
    ],
    "tags": [
      "Far West",
      "Pouvoir",
      "Injustice"
    ]
  },
  {
    "id": 173,
    "texte": "Dans l’Ouest américain sauvage, un groupe de voyageur·euses doit traverser une vaste région avant l’arrivée de l’hiver. Lorsque leur guide disparaît, les membres du groupe doivent apprendre à s’organiser pour poursuivre leur route.",
    "categories": [
      "Histoire & mondes anciens",
      "Aventure & exploration",
      "Nature & survie"
    ],
    "tags": [
      "Far West",
      "Voyage",
      "Survie"
    ]
  },
  {
    "id": 174,
    "texte": "Après la mort de son oncle, Alex hérite d’un petit ranch en difficulté. Une personne propose de racheter les terres à bas prix, mais Alex découvre que cette personne veut s’emparer de la propriété pour une raison bien précise, et que la mort de son oncle n’est peut-être pas accidentelle…",
    "categories": [
      "Histoire & mondes anciens",
      "Mystère & enquête",
      "Relations & émotions"
    ],
    "tags": [
      "Ranch",
      "Héritage",
      "Mort suspecte"
    ]
  },
  {
    "id": 175,
    "texte": "Une récompense importante a été promise pour retrouver une personne hors-la-loi. Sam décide de partir à sa recherche, mais découvre rapidement que l’histoire racontée par les autorités n’est peut-être pas toute la vérité.",
    "categories": [
      "Histoire & mondes anciens",
      "Justice & conflits",
      "Mystère & enquête"
    ],
    "tags": [
      "Far West",
      "Hors-la-loi",
      "Vérité"
    ]
  },
  {
    "id": 176,
    "texte": "Au Far West, une famille entreprend un long voyage vers une nouvelle région où elle espère commencer une nouvelle vie. Après plusieurs semaines de route, un accident oblige le groupe à abandonner son moyen de transport et à continuer à pied.",
    "categories": [
      "Histoire & mondes anciens",
      "Aventure & exploration",
      "Nature & survie"
    ],
    "tags": [
      "Far West",
      "Famille",
      "Survie"
    ]
  },
  {
    "id": 177,
    "texte": "Dans une ville où la justice est rarement équitable, une personne est accusée d’un vol qu’elle affirme ne pas avoir commis. Sam assiste au procès et réalise peu à peu que plusieurs témoignages ont été arrangés.",
    "categories": [
      "Histoire & mondes anciens",
      "Justice & conflits",
      "Mystère & enquête"
    ],
    "tags": [
      "Far West",
      "Procès",
      "Fausse accusation"
    ]
  },
  {
    "id": 178,
    "texte": "Dans une ancienne bibliothèque, Sam découvre une carte représentant un territoire qui ne figure sur aucune autre carte du royaume. Une partie de la carte a été déchirée, arrachée. Sam décide de retrouver ce qui manque en explorant lui-même le territoire interdit.",
    "categories": [
      "Aventure & exploration",
      "Mystère & enquête",
      "Histoire & mondes anciens"
    ],
    "tags": [
      "Carte",
      "Territoire inconnu",
      "Exploration"
    ]
  },
  {
    "id": 179,
    "texte": "Après des années d’apprentissage, Alex est enfin autorisé·e à utiliser la magie seul·e. Pour sa première mission, il lui est confié un sort qui paraît extrêmement simple. Pourtant, rien ne se passe comme prévu.",
    "categories": [
      "Fantastique & magie",
      "Aventure & exploration"
    ],
    "tags": [
      "Magie",
      "Apprenti",
      "Sortilège"
    ]
  },
  {
    "id": 180,
    "texte": "Après des années de guerre, deux royaumes ennemis acceptent enfin de négocier la paix. Sam accompagne la délégation de son royaume. Mais, à peine arrivé·e dans la capitale ennemie, Sam découvre que quelqu’un cherche à empêcher l’accord.",
    "categories": [
      "Histoire & mondes anciens",
      "Justice & conflits",
      "Relations & émotions"
    ],
    "tags": [
      "Moyen Âge",
      "Guerre",
      "Paix"
    ]
  },
  {
    "id": 181,
    "texte": "Depuis des générations, un dragon protège les habitant·es d’une vallée. Un jour, il disparaît sans laisser de traces. Sam part à sa recherche.",
    "categories": [
      "Fantastique & magie",
      "Nature & survie",
      "Mystère & enquête"
    ],
    "tags": [
      "Dragon",
      "Disparition",
      "Vallée"
    ]
  },
  {
    "id": 182,
    "texte": "Lors d’une expédition, Alex découvre l’entrée d’une cité entièrement construite sous une montagne. Elle semble abandonnée depuis des siècles, mais des signes montrent que quelqu’un y vit encore.",
    "categories": [
      "Fantastique & magie",
      "Aventure & exploration",
      "Mystère & enquête"
    ],
    "tags": [
      "Ville souterraine",
      "Montagne",
      "Secret"
    ]
  },
  {
    "id": 183,
    "texte": "Une ancienne épée est découverte dans un lieu où personne ne l’avait jamais remarquée. Selon une vieille légende, la personne qui pourra la retirer de son socle deviendra la protectrice ou le protecteur du royaume. Sam parvient à la retirer, mais refuse d’abord d’assumer ce rôle.",
    "categories": [
      "Fantastique & magie",
      "Histoire & mondes anciens",
      "Aventure & exploration"
    ],
    "tags": [
      "Épée magique",
      "Gardien",
      "Destin"
    ]
  },
  {
    "id": 184,
    "texte": "En traversant une forêt, Sam découvre un village qui ne figure sur aucune carte. Ses habitant·es vivent comme si le monde extérieur n’existait pas.",
    "categories": [
      "Fantastique & magie",
      "Aventure & exploration",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Village isolé",
      "Monde inconnu",
      "Découverte"
    ]
  },
  {
    "id": 185,
    "texte": "Une créature inconnue est capturée près d’un village. Tout le monde veut la tuer par peur de ce qu’elle pourrait faire. Sam est pourtant convaincu·e qu’elle essaie de communiquer.",
    "categories": [
      "Fantastique & magie",
      "Nature & survie",
      "Relations & émotions"
    ],
    "tags": [
      "Créature",
      "Communication",
      "Compréhension"
    ]
  },
  {
    "id": 186,
    "texte": "Depuis des siècles, une personne est chargée de protéger un lieu secret dont dépend l’équilibre du royaume. Lorsque Sam découvre qu’il ou elle est la prochaine personne désignée pour cette mission, il lui faut choisir entre cette responsabilité et la vie qu’il ou elle avait imaginée.",
    "categories": [
      "Fantastique & magie",
      "Relations & émotions",
      "Justice & conflits"
    ],
    "tags": [
      "Gardien",
      "Devoir",
      "Liberté"
    ]
  },
  {
    "id": 187,
    "texte": "Une fois par siècle, les étoiles changent de position dans le ciel et un phénomène magique se produit dans tout le royaume. Cette nuit-là, Sam découvre qu’un événement que les ancien·nes avaient annoncé depuis longtemps est sur le point de commencer.",
    "categories": [
      "Fantastique & magie",
      "Histoire & mondes anciens",
      "Mystère & enquête"
    ],
    "tags": [
      "Étoiles",
      "Prophétie",
      "Destin"
    ]
  },
  {
    "id": 188,
    "texte": "En rentrant chez lui, Sam est témoin d’une scène étrange dans une rue presque déserte. Le lendemain, la police recherche quelqu’un qui pourrait avoir vu ce qui s’est passé.",
    "categories": [
      "Mystère & enquête",
      "Justice & conflits"
    ],
    "tags": [
      "Témoin",
      "Scène étrange",
      "Police"
    ]
  },
  {
    "id": 189,
    "texte": "En regardant les photographies prises lors d’une fête, Alex remarque un détail que personne n’avait vu. Ce détail pourrait permettre de résoudre une affaire criminelle.",
    "categories": [
      "Mystère & enquête",
      "Technologie & science-fiction"
    ],
    "tags": [
      "Photographie",
      "Indice",
      "Crime"
    ]
  },
  {
    "id": 190,
    "texte": "Pendant la nuit, un objet sans grande valeur apparente disparaît d’une maison. Pourtant, la personne qui l’a volé semble avoir soigneusement préparé son coup. Sam décide de chercher pourquoi cet objet l’intéressait autant.",
    "categories": [
      "Mystère & enquête",
      "Justice & conflits"
    ],
    "tags": [
      "Vol",
      "Objet sans valeur",
      "Motif caché"
    ]
  },
  {
    "id": 191,
    "texte": "Sam est accusé·e d’avoir volé un objet appartenant à un·e autre élève. Elle/il sait qu’elle /il n’a rien fait, mais plusieurs indices semblent pourtant l’accuser. Elle/il doit trouver comment prouver son innocence.",
    "categories": [
      "Vie quotidienne & société",
      "Justice & conflits",
      "Mystère & enquête"
    ],
    "tags": [
      "École",
      "Accusation",
      "Innocence"
    ]
  },
  {
    "id": 192,
    "texte": "Un matin, Sam reçoit un message anonyme contenant seulement une adresse et une heure. Il ou elle décide de s’y rendre…",
    "categories": [
      "Mystère & enquête",
      "Aventure & exploration"
    ],
    "tags": [
      "Message anonyme",
      "Adresse",
      "Rendez-vous"
    ]
  },
  {
    "id": 193,
    "texte": "Une personne disparaît sans laisser de traces. Quelques jours plus tard, Sam découvre par hasard un objet qui pourrait avoir appartenu à cette personne. Il ou elle décide de comprendre ce qui lui est arrivé.",
    "categories": [
      "Mystère & enquête",
      "Aventure & exploration"
    ],
    "tags": [
      "Disparition",
      "Indice",
      "Recherche"
    ]
  },
  {
    "id": 194,
    "texte": "Depuis plusieurs semaines, un voisin se comporte de manière inhabituelle : allées et venues nocturnes, colis mystérieux, conversations discrètes… Sam commence à se poser des questions.",
    "categories": [
      "Mystère & enquête",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Voisinage",
      "Activité nocturne",
      "Soupçon"
    ]
  },
  {
    "id": 195,
    "texte": "Après un incident au collège, Sam est convaincu·e que la version officielle ne correspond pas à ce qui s’est réellement passé. Avec l’aide d’un·e ami·e, il ou elle commence à mener sa propre enquête.",
    "categories": [
      "Vie quotidienne & société",
      "Justice & conflits",
      "Mystère & enquête"
    ],
    "tags": [
      "École",
      "Enquête",
      "Vérité cachée"
    ]
  },
  {
    "id": 196,
    "texte": "En faisant du rangement dans les archives d’un commissariat, Alex découvre un dossier ancien qui n’a jamais été résolu. Un détail attire son attention : une personne mentionnée dans le dossier porte le même nom qu’une personne qu’il ou elle connaît.",
    "categories": [
      "Mystère & enquête",
      "Relations & émotions"
    ],
    "tags": [
      "Affaire ancienne",
      "Archives",
      "Identité"
    ]
  },
  {
    "id": 197,
    "texte": "Une enquête est sur le point d’être classée faute de preuves. Sam, qui connaît bien l’affaire, remarque pourtant un détail que tout le monde semble avoir oublié. Il ou elle décide de retourner sur les lieux pour vérifier son intuition.",
    "categories": [
      "Mystère & enquête",
      "Justice & conflits"
    ],
    "tags": [
      "Enquête",
      "Indice oublié",
      "Crime"
    ]
  },
  {
    "id": 198,
    "texte": "Sam envoie par erreur à une personne qu’il ou elle connaît à peine un message qui était destiné à quelqu’un d’autre. Cela va avoir des conséquences…",
    "categories": [
      "Technologie & science-fiction",
      "Relations & émotions",
      "Justice & conflits"
    ],
    "tags": [
      "Message envoyé par erreur",
      "Malentendu",
      "Conséquences"
    ]
  },
  {
    "id": 199,
    "texte": "Lina/Tom tombe amoureux·se d’une personne qui doit bientôt partir vivre dans un autre pays. Ils/elles décident malgré tout d’essayer de faire fonctionner leur relation.",
    "categories": [
      "Relations & émotions",
      "Aventure & exploration"
    ],
    "tags": [
      "Amour",
      "Départ",
      "Relation à distance"
    ]
  },
  {
    "id": 200,
    "texte": "Alex retrouve par hasard une personne dont il ou elle était très proche quelques années auparavant. Ils ont tous les deux changé depuis leur séparation, mais certains sentiments semblent être restés.",
    "categories": [
      "Relations & émotions"
    ],
    "tags": [
      "Retrouvailles",
      "Ancienne relation",
      "Souvenir"
    ]
  },
  {
    "id": 201,
    "texte": "Sam est amoureux·se de son meilleur ami ou de sa meilleure amie depuis longtemps, mais n’a jamais osé lui avouer ses sentiments. Un jour, Sam apprend que cette personne est sur le point de partir vivre loin et décide enfin de lui parler.",
    "categories": [
      "Relations & émotions"
    ],
    "tags": [
      "Amour",
      "Amitié",
      "Séparation"
    ]
  },
  {
    "id": 202,
    "texte": "Lors de leur première rencontre, Alex et Sam se détestent immédiatement. Plusieurs mois plus tard, un événement les oblige à passer beaucoup de temps ensemble. Peu à peu, chacun·e découvre que l’autre est très différent·e de ce qu’il ou elle imaginait.",
    "categories": [
      "Relations & émotions",
      "Justice & conflits"
    ],
    "tags": [
      "Rivalité",
      "Amour",
      "Coopération"
    ]
  },
  {
    "id": 203,
    "texte": "En rangeant de vieilles affaires familiales, Sam découvre une lettre d’amour écrite plusieurs décennies auparavant. Intrigué·e par cette histoire inconnue, Sam décide de retrouver les deux personnes qui s’aimaient à l’époque.",
    "categories": [
      "Relations & émotions",
      "Histoire & mondes anciens",
      "Mystère & enquête"
    ],
    "tags": [
      "Lettre d'amour",
      "Famille",
      "Passé"
    ]
  },
  {
    "id": 204,
    "texte": "Sam aime deux personnes très différentes et ne sait plus ce qu’il ou elle ressent réellement. Lorsque l’une des deux lui demande de faire un choix, Sam comprend qu’il ne sera pas possible de repousser la décision indéfiniment.",
    "categories": [
      "Relations & émotions"
    ],
    "tags": [
      "Amour",
      "Choix",
      "Dilemme"
    ]
  },
  {
    "id": 205,
    "texte": "Des années après avoir quitté le collège, Alex retrouve une ancienne photo de classe. En regardant les visages, une personne qu’il ou elle avait complètement oubliée lui revient soudainement en mémoire. Alex décide de chercher ce qu’elle est devenue.",
    "categories": [
      "Relations & émotions",
      "Mystère & enquête"
    ],
    "tags": [
      "Photographie",
      "Amitié",
      "Retrouvailles"
    ]
  },
  {
    "id": 206,
    "texte": "Après une rupture difficile, Sam décide de ne plus tomber amoureux·se et de se consacrer entièrement à ses projets personnels. Puis une rencontre imprévue vient remettre en question cette décision.",
    "categories": [
      "Relations & émotions"
    ],
    "tags": [
      "Rupture",
      "Rencontre",
      "Changement"
    ]
  },
  {
    "id": 207,
    "texte": "Après la mort de son grand-père, Sam découvre parmi ses affaires une carte annotée de plusieurs endroits du monde. Une note affirme qu’elle mène à un lieu que personne n’a jamais réussi à retrouver. Sam décide de partir sur les traces de cette mystérieuse expédition.",
    "categories": [
      "Aventure & exploration",
      "Histoire & mondes anciens",
      "Relations & émotions"
    ],
    "tags": [
      "Carte ancienne",
      "Grand-père",
      "Expédition"
    ]
  },
  {
    "id": 208,
    "texte": "Lors de travaux sur un barrage, un lac est asséché. Une équipe d’archéologues découvre les ruines d’une ancienne cité au fond du lac. Le niveau de l’eau doit bientôt monter à nouveau et recouvrir définitivement les vestiges. On dispose de quelques heures pour explorer le site et comprendre pourquoi la cité a été abandonnée.",
    "categories": [
      "Histoire & mondes anciens",
      "Aventure & exploration",
      "Mystère & enquête"
    ],
    "tags": [
      "Archéologie",
      "Ville engloutie",
      "Exploration"
    ]
  },
  {
    "id": 209,
    "texte": "Après un accident en mer, Alex échoue sur une île absente de toutes les cartes. En explorant les lieux, il ou elle découvre les traces d’une présence humaine.",
    "categories": [
      "Aventure & exploration",
      "Nature & survie",
      "Mystère & enquête"
    ],
    "tags": [
      "Île inconnue",
      "Survie",
      "Traces humaines"
    ]
  },
  {
    "id": 210,
    "texte": "Une vieille légende raconte qu’une cité construite au cœur d’une région inaccessible aurait été abandonnée avec toutes ses richesses. Une expédition décide de partir à sa recherche. Mais une autre équipe poursuit exactement le même objectif.",
    "categories": [
      "Aventure & exploration",
      "Histoire & mondes anciens",
      "Justice & conflits"
    ],
    "tags": [
      "Cité légendaire",
      "Trésor",
      "Rivalité"
    ]
  },
  {
    "id": 211,
    "texte": "Dans une bibliothèque, Sam découvre le carnet d’un explorateur disparu un siècle auparavant. Ses dernières pages décrivent un lieu extraordinaire, mais plusieurs ont été arrachées. Lina décide de retrouver cet endroit et ce qui est arrivé à l’explorateur.",
    "categories": [
      "Aventure & exploration",
      "Histoire & mondes anciens",
      "Mystère & enquête"
    ],
    "tags": [
      "Carnet d'explorateur",
      "Pages manquantes",
      "Expédition"
    ]
  },
  {
    "id": 212,
    "texte": "Alors qu’il ou elle visite un ancien château, Sam remarque un détail qui semble indiquer l’existence d’un passage caché. Avec l’aide d’un·e ami·e, il ou elle entreprend de le retrouver.",
    "categories": [
      "Mystère & enquête",
      "Aventure & exploration",
      "Histoire & mondes anciens"
    ],
    "tags": [
      "Château",
      "Passage secret",
      "Indice"
    ]
  },
  {
    "id": 213,
    "texte": "Une région montagneuse est interdite d’accès depuis des décennies. Une légende affirme qu’un explorateur y aurait découvert quelque chose d’extraordinaire avant de disparaître. Alex décide de franchir la limite et de découvrir ce qui se cache derrière.",
    "categories": [
      "Aventure & exploration",
      "Nature & survie",
      "Mystère & enquête"
    ],
    "tags": [
      "Montagne",
      "Explorateur disparu",
      "Découverte"
    ]
  },
  {
    "id": 214,
    "texte": "Trois équipes se lancent simultanément à la recherche d’un trésor dont l’emplacement est indiqué par une série d’énigmes. Chaque équipe possède une partie des informations nécessaires. Pour avancer, Sam va devoir choisir entre faire confiance à ses rival·es ou les devancer.",
    "categories": [
      "Aventure & exploration",
      "Mystère & enquête",
      "Justice & conflits"
    ],
    "tags": [
      "Trésor",
      "Énigmes",
      "Rivalité"
    ]
  },
  {
    "id": 215,
    "texte": "Une chasse au trésor commencée cinquante ans auparavant n’a jamais été résolue. Sam retrouve par hasard le dernier indice laissé par la personne qui l’avait imaginée.",
    "categories": [
      "Aventure & exploration",
      "Mystère & enquête",
      "Histoire & mondes anciens"
    ],
    "tags": [
      "Chasse au trésor",
      "Indice",
      "Histoire"
    ]
  },
  {
    "id": 216,
    "texte": "Dans la société où vit Sam, chaque personne reçoit à la naissance un score qui détermine son école, son logement et son futur métier. Un matin, Sam découvre que son score vient mystérieusement de changer.",
    "categories": [
      "Technologie & science-fiction",
      "Vie quotidienne & société",
      "Justice & conflits"
    ],
    "tags": [
      "Dystopie",
      "Score de naissance",
      "Inégalités"
    ]
  },
  {
    "id": 217,
    "texte": "Alex vit dans une ville où tout semble fonctionner parfaitement : aucune criminalité, aucun embouteillage, aucune pauvreté. Pourtant, certaines personnes disparaissent régulièrement sans que personne ne semble trouver cela étrange. Un jour, Alex reçoit un message envoyé par l’une d’elles.",
    "categories": [
      "Technologie & science-fiction",
      "Mystère & enquête",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Ville parfaite",
      "Disparitions",
      "Société"
    ]
  },
  {
    "id": 218,
    "texte": "Pour éviter les conflits, les habitant·es peuvent faire effacer les souvenirs douloureux de leur choix. Lina vient justement de demander l’effacement d’un souvenir. Mais elle commence à regretter.",
    "categories": [
      "Technologie & science-fiction",
      "Relations & émotions",
      "Justice & conflits"
    ],
    "tags": [
      "Effacement de mémoire",
      "Souvenirs",
      "Choix"
    ]
  },
  {
    "id": 219,
    "texte": "Après une catastrophe écologique, les survivant·es vivent dans des villes protégées par d’immenses murs. Sam n’a jamais vu ce qui se trouve à l’extérieur. Lorsqu’une brèche apparaît dans le mur, il ou elle décide de découvrir ce que les autorités cherchent à cacher.",
    "categories": [
      "Technologie & science-fiction",
      "Nature & survie",
      "Aventure & exploration"
    ],
    "tags": [
      "Catastrophe écologique",
      "Ville fortifiée",
      "Monde extérieur"
    ]
  },
  {
    "id": 220,
    "texte": "Dans une société futuriste, les écrans sont présents partout et permettent de travailler, apprendre, communiquer et se divertir. Un matin, ils cessent tous de fonctionner. Pour la première fois depuis des générations, les habitant·es doivent apprendre à vivre sans eux.",
    "categories": [
      "Technologie & science-fiction",
      "Vie quotidienne & société",
      "Nature & survie"
    ],
    "tags": [
      "Écrans",
      "Panne technologique",
      "Société"
    ]
  },
  {
    "id": 221,
    "texte": "Pour lutter contre les conflits et le désordre, le gouvernement a interdit les cris, les insultes et toute manifestation publique de colère, mais aussi de toute autre émotion. Sam découvre qu’une personne proche de lui ou d’elle participe secrètement à un groupe qui refuse cette règle.",
    "categories": [
      "Technologie & science-fiction",
      "Justice & conflits",
      "Relations & émotions"
    ],
    "tags": [
      "Dystopie",
      "Résistance",
      "Émotions interdites"
    ]
  },
  {
    "id": 222,
    "texte": "Dans l’état de Dystopia, chaque personne reçoit automatiquement à dix-huit ans le métier qu’elle exercera toute sa vie. Alex attend avec impatience sa désignation, persuadé·e qu’elle correspondra à ses goûts et à ses talents. Mais le résultat est tout autre.",
    "categories": [
      "Technologie & science-fiction",
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Travail",
      "Orientation",
      "Société future"
    ]
  },
  {
    "id": 223,
    "texte": "Les livres papier ont été interdits depuis longtemps et remplacés par un système d’information contrôlé. Dans la maison d’un proche disparu, Sam découvre pourtant une bibliothèque clandestine. Il ou elle doit décider quoi faire de cette découverte.",
    "categories": [
      "Technologie & science-fiction",
      "Arts, culture & imagination",
      "Justice & conflits"
    ],
    "tags": [      "Livres interdits",
      "Bibliothèque secrète",
      "Censure"
    ]
  },
  {
    "id": 224,
    "texte": "Dans une société futuriste où chaque habitant·e reçoit à l’avance la date et l’heure de sa mort, personne ne remet jamais ce système en question. Jusqu’au jour où Lina découvre que le système ne fonctionne pas comme il devrait…",
    "categories": [
      "Technologie & science-fiction",
      "Mystère & enquête",
      "Relations & émotions"
    ],
    "tags": [
      "Date de mort",
      "Système défaillant",
      "Destin"
    ]
  },
  {
    "id": 225,
    "texte": "Deux sociétés séparées par une frontière vivent selon des règles complètement différentes. Sam appartient à l’une d’elles, mais rencontre un jour une personne venue de l’autre côté. Cette rencontre lui fait découvrir que ce qu’on lui a appris sur les « autres » n’est peut-être pas toute la vérité.",
    "categories": [
      "Technologie & science-fiction",
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Frontière",
      "Deux sociétés",
      "Rencontre"
    ]
  },
  {
    "id": 226,
    "texte": "Depuis plusieurs semaines, les marins racontent avoir aperçu au loin un navire qui apparaît puis disparaît dans la brume. Sam se moque de cette histoire jusqu’au soir où le mystérieux bateau apparaît juste devant leur propre navire.",
    "categories": [
      "Aventure & exploration",
      "Mystère & enquête"
    ],
    "tags": [
      "Navire fantôme",
      "Mer",
      "Mystère"
    ]
  },
  {
    "id": 227,
    "texte": "Après plusieurs mois de recherche, Sam et son équipage atteignent enfin l’île indiquée sur leur carte au trésor. Ils trouvent bien le coffre recherché, mais ce qu’il contient n’a rien à voir avec ce qu’ils imaginaient.",
    "categories": [
      "Aventure & exploration",
      "Mystère & enquête"
    ],
    "tags": [
      "Île au trésor",
      "Trésor",
      "Surprise"
    ]
  },
  {
    "id": 228,
    "texte": "Un vieux capitaine accepte une dernière mission avant de quitter définitivement la mer : transporter une personne et une mystérieuse cargaison jusqu’à une île lointaine. Au cours du voyage, l’équipage comprend que quelqu’un cherche à les empêcher d’atteindre leur destination.",
    "categories": [
      "Aventure & exploration",
      "Mystère & enquête"
    ],
    "tags": [
      "Capitaine",
      "Mission",
      "Sabotage"
    ]
  },
  {
    "id": 229,
    "texte": "Sam est chargé·e de porter un message important jusqu’à un château situé à plusieurs jours de marche. En chemin, il ou elle découvre que quelqu’un cherche à empêcher le message d’arriver à destination.",
    "categories": [
      "Histoire & mondes anciens",
      "Aventure & exploration",
      "Mystère & enquête"
    ],
    "tags": [
      "Message",
      "Château",
      "Mission"
    ]
  },
  {
    "id": 230,
    "texte": "Au Moyen-âge, Lina arrive dans un château pour y travailler et découvre un monde très différent du sien. Alors qu’une grande fête se prépare, elle apprend qu’un événement important risque de bouleverser la vie de tout le château.",
    "categories": [
      "Histoire & mondes anciens",
      "Aventure & exploration",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Moyen Âge",
      "Château",
      "Fête"
    ]
  },
  {
    "id": 231,
    "texte": "Un mystérieux chevalier arrive dans une auberge et demande à rester incognito. Sam, qui travaille dans l’établissement, découvre peu à peu que cette personne est poursuivie et qu’elle cache son véritable nom.",
    "categories": [
      "Histoire & mondes anciens",
      "Mystère & enquête",
      "Aventure & exploration"
    ],
    "tags": [
      "Chevalier",
      "Identité secrète",
      "Fuite"
    ]
  },
  {
    "id": 232,
    "texte": "Alors qu’une armée approche du château, Sam n’est ni chevalier·ère ni soldat·e. Pourtant, chacun·e doit participer à la défense de la forteresse.",
    "categories": [
      "Histoire & mondes anciens",
      "Justice & conflits",
      "Aventure & exploration"
    ],
    "tags": [
      "Siège",
      "Château",
      "Défense"
    ]
  },
  {
    "id": 233,
    "texte": "Dans un monastère, Alex participe à la copie d’un manuscrit ancien. En travaillant sur les pages, il ou elle remarque des annotations qui semblent révéler un secret concernant le royaume.",
    "categories": [
      "Histoire & mondes anciens",
      "Arts, culture & imagination",
      "Mystère & enquête"
    ],
    "tags": [
      "Manuscrit",
      "Monastère",
      "Message secret"
    ]
  },
  {
    "id": 234,
    "texte": "À la cour du roi Arthur, un jeune chevalier arrive sans blason ni nom. Il demande seulement à être admis à la Table ronde. Une épreuve lui est imposée avant qu’il puisse être accepté.",
    "categories": [
      "Histoire & mondes anciens",
      "Aventure & exploration",
      "Arts, culture & imagination"
    ],
    "tags": [
      "Camelot",
      "Chevalier",
      "Table ronde"
    ]
  },
  {
    "id": 235,
    "texte": "Un grand tournoi est organisé à Camelot. Un jeune personnage qui n'est ni chevalier ni noble assiste aux épreuves et découvre qu'une tricherie pourrait décider de l'issue du tournoi.",
    "categories": [
      "Histoire & mondes anciens",
      "Mystère & enquête",
      "Aventure & exploration"
    ],
    "tags": [
      "Camelot",
      "Tournoi",
      "Tricherie"
    ]
  },
  {
    "id": 236,
    "texte": "Perceval arrive dans un château mystérieux où un roi blessé lui offre l’hospitalité…",
    "categories": [
      "Histoire & mondes anciens",
      "Aventure & exploration",
      "Mystère & enquête"
    ],
    "tags": [
      "Perceval",
      "Château mystérieux",
      "Roi blessé"
    ]
  },
  {
    "id": 237,
    "texte": "En 1429, alors que les troupes françaises cherchent à reprendre Orléans, un jeune personnage reçoit une mission qui semble secondaire : transmettre un message à Jeanne d’Arc. Le cours de l’Histoire pourrait en être bouleversé.",
    "categories": [
      "Histoire & mondes anciens",
      "Aventure & exploration",
      "Justice & conflits"
    ],
    "tags": [
      "Jeanne d'Arc",
      "Guerre",
      "Message"
    ]
  },
  {
    "id": 238,
    "texte": "Une ville médiévale est assiégée depuis plusieurs semaines. Alors que les habitants commencent à manquer de nourriture, un jeune personnage découvre un passage secret…",
    "categories": [
      "Histoire & mondes anciens",
      "Nature & survie",
      "Aventure & exploration"
    ],
    "tags": [
      "Moyen Âge",
      "Siège",
      "Passage secret"
    ]
  },
  {
    "id": 239,
    "texte": "À la mort d'un roi, plusieurs seigneurs se disputent déjà sa succession. Un jeune messager découvre dans les appartements royaux une lettre qui pourrait modifier l'avenir du royaume.",
    "categories": [
      "Histoire & mondes anciens",
      "Justice & conflits",
      "Mystère & enquête"
    ],
    "tags": [
      "Succession",
      "Royaume",
      "Lettre secrète"
    ]
  },
  {
    "id": 240,
    "texte": "Lors d'une randonnée, Alex se retrouve séparé·e du groupe. La nuit approche, le téléphone ne capte plus et il faut trouver un endroit où passer la nuit.",
    "categories": [
      "Nature & survie",
      "Aventure & exploration"
    ],
    "tags": [
      "Randonnée",
      "Isolement",
      "Abri"
    ]
  },
  {
    "id": 241,
    "texte": "Après le naufrage d'un bateau, quelques survivant·es atteignent une île inconnue. Ils découvrent rapidement qu'ils ne disposent que de très peu d'eau et de nourriture.",
    "categories": [
      "Nature & survie",
      "Aventure & exploration"
    ],
    "tags": [
      "Naufrage",
      "Île",
      "Ressources"
    ]
  },
  {
    "id": 242,
    "texte": "Une violente tempête bloque les routes et prive un village d'électricité. Alors que les adultes cherchent une solution, un petit groupe d’adolescent·e·s doit rejoindre une habitation isolée où une personne a besoin d’aide.",
    "categories": [
      "Nature & survie",
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Tempête",
      "Coupure d'électricité",
      "Entraide"
    ]
  },
  {
    "id": 243,
    "texte": "Un groupe d'explorateur·rices se retrouve sans véhicule au milieu d'une région désertique. Il faut atteindre un point d'eau indiqué sur une vieille carte, mais celle-ci est incomplète.",
    "categories": [
      "Nature & survie",
      "Aventure & exploration"
    ],
    "tags": [
      "Désert",
      "Eau",
      "Carte"
    ]
  },
  {
    "id": 244,
    "texte": "Le bateau coule pendant une traversée. Quelques heures plus tard, les survivant·es se retrouvent dans une embarcation de secours dont les réserves sont insuffisantes pour rejoindre la terre.",
    "categories": [
      "Nature & survie",
      "Aventure & exploration"
    ],
    "tags": [
      "Naufrage",
      "Canot de sauvetage",
      "Ressources"
    ]
  },
  {
    "id": 245,
    "texte": "Après une catastrophe naturelle, plusieurs personnes trouvent refuge dans un bâtiment isolé. Elles doivent s'organiser pour survivre…",
    "categories": [
      "Nature & survie",
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Catastrophe naturelle",
      "Refuge",
      "Organisation"
    ]
  },
  {
    "id": 246,
    "texte": "Parti·es explorer une forêt inconnue, un groupe découvre que son chemin de retour a été rendu impraticable. Il faut trouver une autre route avant la tombée de la nuit.",
    "categories": [
      "Nature & survie",
      "Aventure & exploration"
    ],
    "tags": [
      "Forêt",
      "Orientation",
      "Nuit"
    ]
  },
  {
    "id": 247,
    "texte": "Un train tombe en panne au milieu d'une région isolée. Aucun secours ne peut arriver avant plusieurs heures. Peu à peu, les passager·ères comprennent qu'ils vont devoir quitter le train et trouver eux-mêmes de l’aide.",
    "categories": [
      "Nature & survie",
      "Aventure & exploration",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Train",
      "Panne",
      "Entraide"
    ]
  },
  {
    "id": 248,
    "texte": "Une catastrophe oblige la population à quitter précipitamment une ville. Sam arrive dans un refuge avec quelques objets seulement et réalise qu'une personne importante n'a pas pu suivre le groupe.",
    "categories": [
      "Nature & survie",
      "Relations & émotions",
      "Aventure & exploration"
    ],
    "tags": [
      "Évacuation",
      "Catastrophe",
      "Disparition"
    ]
  },
  {
    "id": 249,
    "texte": "Après un accident, Sam se réveille seul·e dans un endroit inconnu.",
    "categories": [
      "Nature & survie",
      "Mystère & enquête",
      "Aventure & exploration"
    ],
    "tags": [
      "Accident",
      "Lieu inconnu",
      "Solitude"
    ]
  },
  {
    "id": 250,
    "texte": "Après une randonnée, sur le chemin du retour, Sam et ses ami·es doivent s’abriter dans une vieille maison abandonnée. À l’intérieur, ils découvrent des photographies intrigantes.",
    "categories": [
      "Mystère & enquête",
      "Relations & émotions",
      "Aventure & exploration"
    ],
    "tags": [
      "Maison abandonnée",
      "Photographies",
      "Amitié"
    ]
  },
  {
    "id": 251,
    "texte": "Dans un hôtel presque désert, Axel découvre que la chambre 13 n’apparaît sur aucun plan. Elle en trouve pourtant la clé…",
    "categories": [
      "Mystère & enquête",
      "Aventure & exploration"
    ],
    "tags": [
      "Hôtel",
      "Chambre secrète",
      "Plan"
    ]
  },
  {
    "id": 252,
    "texte": "Des ami·es trouvent dans le grenier une très vieille cassette vidéo. Sur l'enregistrement, ils reconnaissent leur maison…",
    "categories": [
      "Mystère & enquête",
      "Arts, culture & imagination",
      "Fantastique & magie"
    ],
    "tags": [
      "Cassette vidéo",
      "Maison",
      "Souvenir"
    ]
  },
  {
    "id": 253,
    "texte": "Une famille emménage dans sa nouvelle maison. Dans la cave, elle découvre une porte fermée par des planches, dont les anciens propriétaires ne lui avaient jamais parlé. Une inscription gravée dans le bois indique simplement : « condamné ».",
    "categories": [
      "Mystère & enquête",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Sous-sol",
      "Maison",
      "Secret"
    ]
  },
  {
    "id": 254,
    "texte": "Parti·es camper dans une forêt réputée inquiétante, un groupe entend chaque nuit quelqu’un marcher autour des tentes. Au matin, aucune trace n'est visible… jusqu’au quatrième jour.",
    "categories": [
      "Mystère & enquête",
      "Nature & survie"
    ],
    "tags": [
      "Camping",
      "Bruits mystérieux",
      "Traces"
    ]
  },
  {
    "id": 255,
    "texte": "Sam entre dans un vieux cinéma qui doit être démoli le lendemain. Une séance est pourtant en cours dans la dernière salle. Sur l'écran, le film montre une chose étrange…",
    "categories": [
      "Arts, culture & imagination",
      "Fantastique & magie",
      "Mystère & enquête"
    ],
    "tags": [
      "Cinéma",
      "Dernière séance",
      "Étrangeté"
    ]
  },
  {
    "id": 256,
    "texte": "Sam décroche enfin un petit emploi après plusieurs semaines de recherche. Le premier jour, une situation inattendue lui fait comprendre que le travail ne sera pas aussi simple qu'il l’imaginait.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Petit boulot",
      "Travail",
      "Imprévu"
    ]
  },
  {
    "id": 257,
    "texte": "Une famille doit faire face à une dépense imprévue alors qu'il ne reste presque plus d'argent. Chacun propose une solution, mais une décision difficile finit par s’imposer.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions",
      "Justice & conflits"
    ],
    "tags": [
      "Argent",
      "Difficulté familiale",
      "Décision"
    ]
  },
  {
    "id": 258,
    "texte": "Alex accepte de remplacer quelqu'un pour quelques jours dans un emploi qu’elle/il ne connaît pas. Elle/il découvre rapidement que ce n’est pas aussi simple que prévu.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Travail",
      "Remplacement",
      "Défi"
    ]
  },
  {
    "id": 259,
    "texte": "En rentrant chez lui, Sam apprend que son père / sa mère vient de perdre son emploi. Les jours suivants, il/elle découvre peu à peu les conséquences de cette nouvelle sur toute la famille.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Chômage",
      "Famille",
      "Travail"
    ]
  },
  {
    "id": 260,
    "texte": "Dans un immeuble, une famille ne peut plus payer certaines dépenses essentielles. Peu à peu, les voisin·es découvrent la situation et commencent à s'organiser pour lui venir en aide — mais tout le monde n'est pas d’accord.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions",
      "Justice & conflits"
    ],
    "tags": [
      "Difficultés financières",
      "Solidarité",
      "Voisinage"
    ]
  },
  {
    "id": 261,
    "texte": "Sam reçoit enfin une proposition de travail qui pourrait améliorer considérablement sa situation. Mais accepter signifie quitter sa famille, abandonner une personne qui compte sur lui/elle, et partir dans une autre région.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Travail",
      "Départ",
      "Choix"
    ]
  },
  {
    "id": 262,
    "texte": "En rentrant du travail, Alex rencontre régulièrement la même personne qui vit dans la rue. Un jour, il/elle découvre que cette personne avait autrefois un métier, une famille et une vie très différente. Une circonstance particulière les amène à se revoir.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Sans-abri",
      "Rencontre",
      "Solidarité"
    ]
  },
  {
    "id": 263,
    "texte": "En se promenant près d’une rivière, Sam remarque que l’eau a changé de couleur et que les poissons ont disparu. En cherchant l’origine du problème, il ou elle découvre que personne ne semble vouloir en parler.",
    "categories": [
      "Nature & survie",
      "Mystère & enquête",
      "Justice & conflits"
    ],
    "tags": [
      "Pollution",
      "Rivière",
      "Enquête"
    ]
  },
  {
    "id": 264,
    "texte": "Une famille recueille un animal sauvage blessé. En cherchant à comprendre ce qui lui est arrivé, elle découvre que son habitat est progressivement détruit.",
    "categories": [
      "Nature & survie",
      "Relations & émotions"
    ],
    "tags": [
      "Animal blessé",
      "Protection de la nature",
      "Habitat"
    ]
  },
  {
    "id": 265,
    "texte": "Après une tempête, une plage est recouverte de déchets venus de la mer. Un groupe de jeunes décide de participer au nettoyage et découvre parmi les détritus un objet qui raconte une histoire inattendue.",
    "categories": [
      "Nature & survie",
      "Aventure & exploration"
    ],
    "tags": [
      "Pollution marine",
      "Nettoyage",
      "Objet mystérieux"
    ]
  },
  {
    "id": 266,
    "texte": "Un petit village apprend qu'un projet industriel pourrait transformer durablement son environnement. Les habitant·es se divisent entre celles et ceux qui y voient une chance économique et celles et ceux qui craignent ses conséquences.",
    "categories": [
      "Nature & survie",
      "Vie quotidienne & société",
      "Justice & conflits"
    ],
    "tags": [
      "Projet industriel",
      "Environnement",
      "Conflit"
    ]
  },
  {
    "id": 267,
    "texte": "Pour un devoir, Sam doit imaginer comment rendre son quartier plus écologique. Mais lorsque son projet est présenté, il provoque une réaction inattendue chez les habitant·es.",
    "categories": [
      "Nature & survie",
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Écoquartier",
      "Projet",
      "Habitants"
    ]
  },
  {
    "id": 268,
    "texte": "Sam part pour la première fois seul·e dans un pays dont il ou elle ne connaît ni la langue ni les habitudes. Dès son arrivée, un événement imprévu l'oblige à sortir des sentiers touristiques.",
    "categories": [
      "Aventure & exploration",
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Voyage à l'étranger",
      "Choc culturel",
      "Rencontre"
    ]
  },
  {
    "id": 269,
    "texte": "En arrivant dans une grande ville étrangère, Lina se trompe de rue et se retrouve dans un quartier qu'aucun guide touristique ne mentionne. Une rencontre va changer complètement la suite de son voyage.",
    "categories": [
      "Aventure & exploration",
      "Relations & émotions",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Voyage",
      "Ville étrangère",
      "Rencontre"
    ]
  },
  {
    "id": 270,
    "texte": "En visitant une vieille maison, Sam découvre le carnet d'une personne qui a parcouru le monde un siècle plus tôt. Cela lui donne une idée…",
    "categories": [
      "Aventure & exploration",
      "Histoire & mondes anciens",
      "Arts, culture & imagination"
    ],
    "tags": [
      "Carnet d'explorateur",
      "Voyage",
      "Inspiration"
    ]
  },
  {
    "id": 271,
    "texte": "Pendant un voyage, Alex fait la connaissance d'une personne de son âge avec qui il ou elle ne partage presque rien : langue, habitudes, mode de vie… Pourtant, quelques heures passées ensemble suffisent à créer un lien inattendu.",
    "categories": [
      "Relations & émotions",
      "Aventure & exploration",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Voyage à l'étranger",
      "Amitié",
      "Différences culturelles"
    ]
  },
  {
    "id": 272,
    "texte": "En parcourant une région reculée, un groupe découvre un village absent des cartes et presque coupé du reste du monde. Ses habitant·es accueillent les voyageur·euses, mais leur manière de vivre surprend profondément le groupe.",
    "categories": [
      "Aventure & exploration",
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Village isolé",
      "Rencontre",
      "Mode de vie"
    ]
  },
  {
    "id": 273,
    "texte": "Une famille décide de quitter l'itinéraire prévu pour découvrir une région autrement. Ce détour, d'abord considéré comme une erreur, devient le moment le plus marquant du voyage.",
    "categories": [
      "Aventure & exploration",
      "Relations & émotions"
    ],
    "tags": [
      "Voyage",
      "Famille",
      "Imprévu"
    ]
  },
  {
    "id": 274,
    "texte": "Après plusieurs jours de voyage, Sam découvre enfin le paysage qu’il/elle rêvait de voir depuis son enfance.",
    "categories": [
      "Aventure & exploration",
      "Nature & survie",
      "Relations & émotions"
    ],
    "tags": [
      "Voyage",
      "Paysage",
      "Émerveillement"
    ]
  },
  {
    "id": 275,
    "texte": "Au cours d'une randonnée dans une région inconnue, Sam découvre un lieu qui ne figure sur aucune carte : une grotte, une vallée, une ancienne construction ou un village abandonné. Il ou elle décide de comprendre son histoire.",
    "categories": [
      "Aventure & exploration",
      "Mystère & enquête",
      "Nature & survie"
    ],
    "tags": [
      "Randonnée",
      "Lieu inconnu",
      "Histoire"
    ]
  },
  {
    "id": 276,
    "texte": "Dans l'Égypte des pharaons, un jeune scribe découvre dans un temple une inscription qui semble révéler un événement que les prêtres cherchent à dissimuler.",
    "categories": [
      "Histoire & mondes anciens",
      "Mystère & enquête",
      "Arts, culture & imagination"
    ],
    "tags": [
      "Égypte antique",
      "Scribe",
      "Inscription"
    ]
  },
  {
    "id": 277,
    "texte": "Dans l’Égypte ancienne, Osis apprend le métier de scribe. Un jour, il doit recopier un document officiel et remarque une modification qui pourrait avoir des conséquences importantes.",
    "categories": [
      "Histoire & mondes anciens",
      "Mystère & enquête",
      "Justice & conflits"
    ],
    "tags": [
      "Égypte antique",
      "Document officiel",
      "Falsification"
    ]
  },
  {
    "id": 278,
    "texte": "À bord d’un navire marchand romain, Maximus doit rejoindre une autre cité avec une cargaison précieuse. Une violente tempête contraint l’équipage à changer complètement d’itinéraire.",
    "categories": [
      "Histoire & mondes anciens",
      "Aventure & exploration"
    ],
    "tags": [
      "Rome antique",
      "Navire marchand",
      "Tempête"
    ]
  },
  {
    "id": 279,
    "texte": "Dans la Grèce antique, un jeune athlète se prépare à participer à une grande compétition. Peu avant l’épreuve, un événement imprévu survient.",
    "categories": [
      "Histoire & mondes anciens",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Grèce antique",
      "Sport",
      "Compétition"
    ]
  },
  {
    "id": 280,
    "texte": "À Pompéi, une journée ordinaire commence. Au fil des heures, Iulia remarque des signes inhabituels autour d’elle. Personne ne sait encore ce qui va se produire.",
    "categories": [
      "Histoire & mondes anciens",
      "Nature & survie",
      "Mystère & enquête"
    ],
    "tags": [
      "Pompéi",
      "Éruption",
      "Présages"
    ]
  },
  {
    "id": 281,
    "texte": "Après un long voyage, Caius arrive pour la première fois à Rome. La ville de César est immense, bruyante. Et au Sénat, un complot se trame…",
    "categories": [
      "Histoire & mondes anciens",
      "Mystère & enquête",
      "Justice & conflits"
    ],
    "tags": [
      "Rome antique",
      "Sénat",
      "Complot"
    ]
  },
  {
    "id": 282,
    "texte": "Dans une ville romaine, Flavius/Flavia est apprenti·e dans l’atelier d'un artisan. Alors qu'une commande importante doit être terminée rapidement, un événement change les plans.",
    "categories": [
      "Histoire & mondes anciens",
      "Vie quotidienne & société",
      "Aventure & exploration"
    ],
    "tags": [
      "Rome antique",
      "Artisanat",
      "Commande"
    ]
  },
  {
    "id": 283,
    "texte": "Une famille romaine accueille Flavius/Flavia dans sa villa. En explorant les lieux, le personnage découvre une pièce dont l’existence semble volontairement cachée aux autres habitant·es de la maison.",
    "categories": [
      "Histoire & mondes anciens",
      "Mystère & enquête",
      "Relations & émotions"
    ],
    "tags": [
      "Rome antique",
      "Villa",
      "Pièce secrète"
    ]
  },
  {
    "id": 284,
    "texte": "Dans l’Empire romain, un soldat doit porter un message d’une ville à une autre. En chemin, il comprend l’importance de sa mission.",
    "categories": [
      "Histoire & mondes anciens",
      "Aventure & exploration",
      "Justice & conflits"
    ],
    "tags": [
      "Rome antique",
      "Soldat",
      "Message"
    ]
  },
  {
    "id": 285,
    "texte": "Dans son quartier, il y a une règle que tout le monde respecte depuis toujours. Lorsqu'Axel décide de ne pas l'appliquer, les conséquences sont bien plus importantes que prévu.",
    "categories": [
      "Vie quotidienne & société",
      "Justice & conflits"
    ],
    "tags": [
      "Règle",
      "Interdit",
      "Transgression"
    ]
  },
  {
    "id": 286,
    "texte": "Une information inquiétante circule dans l'établissement et se répand rapidement sur les réseaux sociaux. Sam doute de sa véracité et commence à chercher d'où elle vient. Mais plus il/elle enquête, plus il/elle découvre que quelqu'un cherche à empêcher les autres de connaître la vérité.",
    "categories": [
      "Vie quotidienne & société",
      "Technologie & science-fiction",
      "Mystère & enquête"
    ],
    "tags": [
      "Réseaux sociaux",
      "Rumeur",
      "École"
    ]
  },
  {
    "id": 287,
    "texte": "En rangeant de vieilles affaires, Sam retrouve une lettre écrite des années auparavant par une personne de sa famille, mais qui n'a jamais été envoyée. Sa lecture révèle un événement que personne n'avait jamais raconté.",
    "categories": [
      "Relations & émotions",
      "Mystère & enquête"
    ],
    "tags": [
      "Lettre familiale",
      "Secret",
      "Passé"
    ]
  },
  {
    "id": 288,
    "texte": "Une classe participe à un projet destiné à observer une espèce animale menacée dans une région isolée. Lorsque les élèves découvrent que le lieu doit bientôt être transformé, ils doivent décider de ce qu'ils peuvent faire pour le protéger.",
    "categories": [
      "Vie quotidienne & société",
      "Nature & survie",
      "Justice & conflits"
    ],
    "tags": [
      "École",
      "Espèce menacée",
      "Protection"
    ]
  },
  {
    "id": 289,
    "texte": "Des années après avoir perdu contact avec une personne qui comptait beaucoup pour lui/elle, Sam reçoit soudain un message. Il/Elle hésite à répondre, puis accepte finalement de retrouver cette personne. Leur rencontre ne se passe pas du tout comme il/elle l'avait imaginée.",
    "categories": [
      "Relations & émotions",
      "Mystère & enquête"
    ],
    "tags": [
      "Message",
      "Retrouvailles",
      "Surprise"
    ]
  },
  {
    "id": 290,
    "texte": "Une guerre vient de prendre fin. Dans un village presque entièrement détruit, Sam participe aux travaux pour remettre les maisons en état. En déplaçant des pierres, Sam découvre un objet appartenant à une personne qui avait disparu pendant les combats. Il/elle décide de retrouver sa famille pour le lui rendre.",
    "categories": [
      "Histoire & mondes anciens",
      "Relations & émotions",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Après-guerre",
      "Reconstruction",
      "Famille"
    ]
  },
  {
    "id": 291,
    "texte": "Depuis quelque temps, Sam remarque que certaines personnes de son entourage sont traitées différemment en raison de leurs origines. Jusqu’à présent, Sam n’a jamais vraiment su comment réagir. Un jour, une situation particulièrement injuste se produit devant Sam, qui décide cette fois d’intervenir. Racontez ce qui se passe et les conséquences de cette décision.",
    "categories": [
      "Justice & conflits",
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Racisme",
      "Témoin",
      "Intervention"
    ]
  },
  {
    "id": 292,
    "texte": "Lors d’un voyage, Sam se lie d’amitié avec une personne qui lui raconte une expérience de racisme qu’elle vient de vivre. Sam réalise que plusieurs personnes présentes ont assisté à la scène sans réagir. Plus tard, une nouvelle situation donne à Sam l’occasion d’agir différemment.",
    "categories": [
      "Justice & conflits",
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Racisme",
      "Témoignage",
      "Solidarité"
    ]
  },
  {
    "id": 293,
    "texte": "Un jeune renard quitte pour la première fois le territoire où il a grandi. En explorant les environs, il découvre une ville humaine et se retrouve entraîné dans une aventure.",
    "categories": [
      "Nature & survie",
      "Aventure & exploration"
    ],
    "tags": [
      "Renard",
      "Ville",
      "Découverte"
    ]
  },
  {
    "id": 294,
    "texte": "Une vieille baleine parcourt depuis des années le même océan. Un jour, elle rencontre un jeune animal qui semble avoir perdu son groupe. Elle décide de l’accompagner pour l’aider à retrouver les siens.",
    "categories": [
      "Nature & survie",
      "Relations & émotions",
      "Aventure & exploration"
    ],
    "tags": [
      "Baleine",
      "Animal perdu",
      "Entraide"
    ]
  },
  {
    "id": 295,
    "texte": "Un·e médecin reçoit un jour la visite d’un·e patient·e qu’elle/il a soigné plusieurs années auparavant. Le motif de cette visite est inattendu : cette personne veut lui raconter ce qui s’est passé après leur dernière rencontre. Son récit va profondément surprendre la/le médecin.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Médecin",
      "Ancien patient",
      "Retrouvailles"
    ]
  },
  {
    "id": 296,
    "texte": "Un·e avocat·e accepte de défendre quelqu’un qui affirme être accusé·e à tort. En préparant le dossier, elle/il découvre un élément qui semble confirmer la culpabilité de son client ou de sa cliente…",
    "categories": [
      "Justice & conflits",
      "Mystère & enquête",
      "Vie quotidienne & société"
    ],
    "tags": [
      "Avocat",
      "Procès",
      "Preuves"
    ]  },
  {
    "id": 297,
    "texte": "Un·e architecte est chargé·e de transformer un bâtiment ancien que l’on croyait vide depuis des décennies. En examinant les plans, elle/il remarque une pièce qui n’existe pas sur le bâtiment lui-même. Elle/il décide de comprendre pourquoi cette pièce figure sur les plans.",
    "categories": [
      "Vie quotidienne & société",
      "Mystère & enquête",
      "Arts, culture & imagination"
    ],
    "tags": [
      "Architecture",
      "Bâtiment ancien",
      "Pièce cachée"
    ]
  },
  {
    "id": 298,
    "texte": "Un·e travailleus·e social·e accompagne une personne qui refuse systématiquement l’aide qu’on lui propose. Un jour, cette personne accepte enfin de parler et révèle une situation que personne n’avait imaginée. La personne travailleuse sociale doit alors trouver une manière inhabituelle de l’aider.",
    "categories": [
      "Vie quotidienne & société",
      "Relations & émotions"
    ],
    "tags": [
      "Travail social",
      "Accompagnement",
      "Rencontre"
    ]
  },
  {
    "id": 299,
    "texte": "Un chat qui vit dans une maison depuis plusieurs années remarque qu’une personne vient régulièrement rendre visite à ses humain·es. Chaque fois, cette personne agit de manière étrange. Un jour, le chat décide de la suivre lorsqu’elle quitte la maison.",
    "categories": [
      "Nature & survie",
      "Mystère & enquête",
      "Aventure & exploration"
    ],
    "tags": [
      "Chat",
      "Visiteur mystérieux",
      "Maison"
    ]
  },
  {
    "id": 300,
    "texte": "Une personne très âgée vit depuis longtemps dans la même maison. Un jour, elle reçoit une lettre qui semble avoir été écrite par une personne qu’elle n’a plus revue depuis son enfance. Elle décide alors de partir à la recherche de cette personne, malgré les années qui ont passé.",
    "categories": [
      "Relations & émotions",
      "Histoire & mondes anciens"
    ],
    "tags": [
      "Lettre",
      "Amitié",
      "Retrouvailles"
    ]
  }
];