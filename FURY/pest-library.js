// ==============================================
// PEST DATA — 10 pests with real encyclopedia content
// ==============================================
var PEST_DATA = [
  {
    id: 'ants',
    name: 'Ants',
    emoji: '🐜',
    image: 'images/pest-ants.png',
    shortDesc: 'Carpenter ants, fire ants, odorous house ants — colonies of thousands invading your home.',
    scientificName: 'Formicidae',
    overview: 'Ants are social insects belonging to the family Formicidae, closely related to wasps and bees. There are more than 12,000 known species worldwide. They form colonies ranging from a few dozen to millions of individuals. In the United States, the most common pest species include carpenter ants (Camponotus spp.), fire ants (Solenopsis invicta), odorous house ants (Tapinoma sessile), and pavement ants (Tetramorium caespitum).',
    identification: [
      'Body divided into three segments: head, thorax, and abdomen with a narrow "waist" (petiole)',
      'Six legs and elbowed antennae',
      'Carpenter ants: large (6–13 mm), black or dark brown, often found near moist wood',
      'Fire ants: reddish-brown, 1.5–5 mm, build large soil mounds',
      'Odorous house ants: small (2.5–3 mm), dark brown, emit coconut-like odor when crushed'
    ],
    behavior: 'Ants live in highly organized colonies with a queen, workers, and sometimes soldiers. They communicate using pheromone trails, which is why you often see them marching in lines. Carpenter ants excavate wood to build nests (they do not eat wood) and can cause significant structural damage over time. Fire ants are aggressive and deliver painful stings. Most species are attracted to sweet or greasy foods indoors.',
    signs: [
      'Visible ant trails along baseboards, countertops, or exterior walls',
      'Small piles of sawdust or wood shavings (carpenter ants)',
      'Soil mounds in the yard (fire ants)',
      'Rustling sounds inside walls (carpenter ants in large colonies)',
      'Finding winged ants indoors, especially in spring — a sign of a mature colony'
    ],
    prevention: [
      'Seal cracks and gaps around doors, windows, and foundation',
      'Keep food in airtight containers; wipe down counters regularly',
      'Fix leaky pipes — moisture attracts carpenter ants',
      'Trim tree branches and vegetation away from the house',
      'Remove woodpiles and debris from near the foundation'
    ],
    treatment: 'Professional ant control involves identifying the species and locating the colony. Baiting systems are highly effective — workers carry bait back to the colony, eliminating the queen and the entire nest. Perimeter treatments and targeted crack-and-crevice applications prevent re-entry. For carpenter ants, locating and treating satellite nests is critical.'
  },
  {
    id: 'bed-bugs',
    name: 'Bed Bugs',
    emoji: '🛏️',
    image: 'images/pest-bed-bugs.png',
    shortDesc: 'Nocturnal blood-feeders that hide in mattresses and furniture — notoriously hard to eliminate.',
    scientificName: 'Cimex lectularius',
    overview: 'Bed bugs (Cimex lectularius) are small, parasitic insects that feed exclusively on blood, primarily human blood. They have made a dramatic resurgence worldwide since the early 2000s, partly due to increased travel and resistance to common pesticides. Bed bugs are expert hitchhikers, spreading via luggage, used furniture, and clothing. They do not transmit diseases but cause itchy welts and significant psychological distress.',
    identification: [
      'Flat, oval, reddish-brown body about 4–5 mm long (apple seed size)',
      'Wingless; cannot fly or jump',
      'After feeding, body swells and turns more reddish',
      'Nymphs (juveniles) are translucent to yellowish-white and very small',
      'Eggs are tiny (1 mm), white, and often found in clusters'
    ],
    behavior: 'Bed bugs are nocturnal and typically feed while the host sleeps, attracted by body heat and carbon dioxide. A feeding takes 5–10 minutes, after which they retreat to hiding spots. They prefer to hide within 8 feet of where people sleep — in mattress seams, box springs, headboards, bed frames, and nightstands. A single female can lay 200–500 eggs in her lifetime.',
    signs: [
      'Itchy, red welts in a line or cluster, often on arms, neck, or torso',
      'Small dark spots (fecal stains) on mattress seams and sheets',
      'Tiny blood smears on pillowcases or sheets',
      'Cast skins (shed exoskeletons) near hiding spots',
      'A sweet, musty odor in heavily infested rooms'
    ],
    prevention: [
      'Inspect hotel rooms before unpacking — check mattress seams and headboards',
      'Use protective encasements on mattresses and box springs',
      'Avoid placing luggage on beds or upholstered furniture when traveling',
      'Inspect and vacuum used furniture before bringing it home',
      'Reduce clutter to minimize hiding spots'
    ],
    treatment: 'Professional bed bug treatment is strongly recommended due to their resilience. Heat treatment (raising room temperature to 120–140°F) is one of the most effective methods, killing all life stages including eggs. Chemical treatments using residual insecticides target cracks and crevices. Most infestations require 2–3 treatment visits for complete elimination.'
  },
  {
    id: 'cockroaches',
    name: 'Cockroaches',
    emoji: '🪳',
    image: 'images/pest-cockroaches.png',
    shortDesc: 'German, American, and Oriental species — rapid breeders that spread allergens and bacteria.',
    scientificName: 'Blattodea',
    overview: 'Cockroaches are among the most common and resilient household pests, with fossil records dating back over 300 million years. Of the roughly 4,600 species worldwide, about 30 are associated with human habitats. In the United States, the three most problematic species are the German cockroach (Blattella germanica), the American cockroach (Periplaneta americana), and the Oriental cockroach (Blatta orientalis). Cockroaches are known to spread bacteria including Salmonella and E. coli, and their droppings and shed skins are significant allergens and asthma triggers.',
    identification: [
      'German cockroach: 13–16 mm, light brown with two dark stripes on the pronotum, most common indoors',
      'American cockroach: 35–40 mm, reddish-brown, the largest common species, often called "palmetto bug"',
      'Oriental cockroach: 25–30 mm, dark brown to black, shiny, prefers cool damp areas',
      'All species have six legs, long antennae, and a flattened oval body',
      'Most adults have wings, though not all species fly readily'
    ],
    behavior: 'Cockroaches are primarily nocturnal. Seeing them during the day often indicates a large infestation. German cockroaches reproduce rapidly — a single female can produce 300+ offspring in a year. They prefer warm, humid areas near food and water: kitchens, bathrooms, and behind appliances. American cockroaches often enter from sewer systems. All species are omnivorous and eat nearly anything organic.',
    signs: [
      'Live cockroaches scurrying when lights are turned on, especially in kitchens',
      'Droppings that look like coffee grounds or black pepper (German) or cylindrical pellets (American)',
      'Egg cases (oothecae) — brown, purse-shaped capsules found in hidden areas',
      'Musty, oily odor in areas with heavy infestation',
      'Smear marks along walls and surfaces where they travel regularly'
    ],
    prevention: [
      'Keep kitchen spotlessly clean — wipe surfaces, sweep floors, wash dishes promptly',
      'Store food in sealed containers; take trash out regularly',
      'Fix all plumbing leaks and eliminate standing water',
      'Seal gaps around pipes, vents, and where utilities enter the building',
      'Reduce cardboard and paper clutter — roaches feed on the glue and hide inside'
    ],
    treatment: 'Effective cockroach control combines sanitation, exclusion, and targeted chemical treatment. Gel baits are the gold standard for German cockroaches — they are applied in cracks, crevices, and behind appliances. Boric acid dust is effective in wall voids. For American and Oriental cockroaches, perimeter treatment and sewer access point sealing are essential. Ongoing monitoring ensures long-term control.'
  },
  {
    id: 'mosquitoes',
    name: 'Mosquitoes',
    emoji: '🦟',
    image: 'images/pest-mosquitoes.png',
    shortDesc: 'Disease-carrying biters that breed in standing water — a major summer nuisance and health risk.',
    scientificName: 'Culicidae',
    overview: 'Mosquitoes are small, flying insects in the family Culicidae. There are approximately 3,500 species worldwide, with about 200 found in the United States. Only female mosquitoes bite — they need blood protein to develop their eggs. Mosquitoes are the deadliest animals on Earth, responsible for transmitting diseases that kill hundreds of thousands of people each year, including malaria, dengue fever, Zika virus, West Nile virus, and Eastern equine encephalitis.',
    identification: [
      'Small (3–6 mm), slender body with long legs and a long proboscis for piercing skin',
      'One pair of wings with scales along the veins',
      'Aedes mosquitoes: black with white stripe markings, day-biters, carry Zika and dengue',
      'Culex mosquitoes: brownish, dusk-to-dawn biters, primary vector for West Nile virus',
      'Anopheles mosquitoes: brown with spotted wings, rest at 45° angle, carry malaria'
    ],
    behavior: 'Females locate hosts by detecting carbon dioxide, body heat, and body odors from up to 150 feet away. After feeding, they rest for 2–3 days while eggs develop, then lay 100–200 eggs on or near standing water. The entire life cycle (egg → larva → pupa → adult) takes 7–14 days depending on temperature. Most species are most active at dawn and dusk, though Aedes mosquitoes bite aggressively during the day.',
    signs: [
      'Itchy, raised red welts appearing within minutes of a bite',
      'Buzzing sound near ears, especially at night',
      'Mosquitoes resting on shaded exterior walls or under eaves',
      'Larvae (wigglers) visible in standing water — birdbaths, gutters, flower pot saucers',
      'High activity near dawn and dusk in warm months'
    ],
    prevention: [
      'Eliminate all standing water — empty flower pot saucers, clean gutters, fix drainage',
      'Change birdbath water at least weekly',
      'Keep swimming pools properly chlorinated and filtered',
      'Use screens on all windows and doors; repair any tears',
      'Wear long sleeves and EPA-registered insect repellent when outdoors during peak hours'
    ],
    treatment: 'Professional mosquito control uses an integrated approach. Larvicide treatments target breeding sites before adults emerge. Barrier spray treatments (applied to vegetation, fences, and shaded areas) create a residual zone that kills adult mosquitoes on contact for up to 3 weeks. Seasonal mosquito programs with regular treatments provide the best ongoing protection throughout warm months.'
  },
  {
    id: 'rodents',
    name: 'Rodents',
    emoji: '🐀',
    image: 'images/pest-rodents.png',
    shortDesc: 'Mice and rats — gnawing through walls, contaminating food, and spreading disease.',
    scientificName: 'Rodentia (Mus musculus, Rattus spp.)',
    overview: 'Rodents are the most common mammalian pests in U.S. homes and businesses. The three primary pest species are the house mouse (Mus musculus), the Norway rat (Rattus norvegicus), and the roof rat (Rattus rattus). Rodents cause billions of dollars in damage annually by gnawing through insulation, wiring (creating fire hazards), and structural materials. They contaminate food with droppings and urine, and can transmit diseases including hantavirus, leptospirosis, and salmonellosis.',
    identification: [
      'House mouse: 3–4 inches body, dusty gray, large ears, pointed snout, thin tail',
      'Norway rat: 7–9 inches body, brown with gray belly, blunt snout, thick tail shorter than body',
      'Roof rat: 6–8 inches body, black to dark brown, pointed snout, thin tail longer than body',
      'Both rats and mice have continuously growing incisors that they must gnaw to wear down',
      'Mice can fit through a hole the size of a dime; rats through a quarter-sized opening'
    ],
    behavior: 'Rodents are mostly nocturnal and have poor eyesight but excellent senses of smell, hearing, and touch. Mice are curious and will investigate new objects, while rats are neophobic (cautious of new things). A single pair of mice can produce 60+ offspring per year. Rodents follow the same paths repeatedly, leaving greasy rub marks along walls and baseboards. They prefer nesting in dark, undisturbed areas close to food and water.',
    signs: [
      'Droppings — rod-shaped, dark; mouse droppings are 3–6 mm, rat droppings 12–18 mm',
      'Gnaw marks on food packages, wood, wires, or plastic',
      'Scratching or scurrying sounds in walls, ceilings, or attic, especially at night',
      'Grease marks (rub marks) along walls and baseboards',
      'Nests made of shredded paper, insulation, or fabric in hidden areas'
    ],
    prevention: [
      'Seal all gaps and openings larger than 1/4 inch with steel wool and caulk',
      'Store food (including pet food) in sealed metal or glass containers',
      'Keep garbage in bins with tight-fitting lids',
      'Remove bird feeders or use squirrel/rodent-proof models',
      'Trim vegetation and remove debris from around the foundation'
    ],
    treatment: 'Professional rodent control starts with a thorough inspection to identify species, entry points, and nesting areas. Exclusion — sealing all entry points with rodent-proof materials — is the most important step. Snap traps placed along travel routes are the most effective removal method. Bait stations may be used outdoors. We never use loose poison indoors due to secondary poisoning risks. Follow-up visits ensure complete elimination.'
  },
  {
    id: 'spiders',
    name: 'Spiders',
    emoji: '🕷️',
    image: 'images/pest-spiders.png',
    shortDesc: 'Brown recluse, black widow, and common house spiders — most are harmless, some are dangerous.',
    scientificName: 'Araneae',
    overview: 'Spiders are arachnids (not insects) with approximately 45,000 known species worldwide. Most spiders are beneficial predators that help control other insect populations. However, a few species found in the United States can be medically significant: the brown recluse (Loxosceles reclusa) and black widow (Latrodectus spp.) can deliver venomous bites that require medical attention. Common house spiders, cellar spiders, and wolf spiders are frequently encountered but harmless.',
    identification: [
      'Eight legs, two body segments (cephalothorax and abdomen), no antennae',
      'Brown recluse: light to dark brown, 6–20 mm, violin-shaped mark on cephalothorax, six eyes',
      'Black widow: shiny black, 8–15 mm body, red hourglass on underside of abdomen',
      'Common house spider: yellowish-brown with dark markings, builds messy cobwebs',
      'Wolf spider: large (up to 35 mm), hairy, brown with stripes, hunts without a web'
    ],
    behavior: 'Spiders are solitary predators. Web-building species construct webs to trap prey, while hunting spiders (wolf spiders, jumping spiders) actively pursue insects. Brown recluses are reclusive and hide in undisturbed areas like closets, attics, and storage boxes. Black widows prefer dark, sheltered spots like garages, sheds, and under decks. Most spider bites occur when the spider is accidentally pressed against skin.',
    signs: [
      'Webs in corners, window frames, basements, garages, and attics',
      'Egg sacs — small, round, silken balls found in webs or hidden areas',
      'Live spiders spotted in bathrooms, basements, or dark storage areas',
      'An increase in other insects (their food source) around the property',
      'Bites that produce red, swollen areas — seek medical attention for suspected recluse or widow bites'
    ],
    prevention: [
      'Reduce clutter in basements, garages, attics, and closets',
      'Shake out shoes, gloves, and clothing stored in dark areas before wearing',
      'Seal cracks around windows, doors, and the foundation',
      'Switch outdoor lights to yellow "bug lights" to reduce insect prey near the home',
      'Remove woodpiles, rock piles, and yard debris from near the house'
    ],
    treatment: 'Spider control focuses on reducing their prey (other insects) and eliminating harborage sites. Perimeter treatments around the foundation and entry points create a barrier. Interior crack-and-crevice treatments target hiding spots. Web removal and de-webbing discourage re-establishment. For brown recluse infestations, sticky traps are used for monitoring and glue-board trapping in combination with residual treatments.'
  },
  {
    id: 'termites',
    name: 'Termites',
    emoji: '🏚️',
    image: 'images/pest-termites.png',
    shortDesc: 'Silent destroyers — subterranean and drywood termites cause billions in damage every year.',
    scientificName: 'Isoptera',
    overview: 'Termites cause an estimated $5 billion in property damage in the United States every year — damage that is typically not covered by homeowners insurance. The most common and destructive species are subterranean termites (Reticulitermes spp. and Coptotermes formosanus — the Formosan termite). Drywood termites (Cryptotermes and Incisitermes spp.) are significant pests in southern coastal states. Unlike carpenter ants, termites actually consume wood, feeding on the cellulose within it.',
    identification: [
      'Workers: creamy white, soft-bodied, 3–5 mm, rarely seen in the open',
      'Soldiers: larger head with mandibles, creamy body, defend the colony',
      'Swarmers (reproductives): dark brown to black, 8–10 mm with two pairs of equal-length wings',
      'Subterranean termites require ground contact or moisture; build mud tubes for travel',
      'Drywood termites live entirely within wood; no ground contact needed'
    ],
    behavior: 'Termites live in large colonies that can number from thousands to millions. Subterranean termites build their main colony underground and construct mud tubes (pencil-width tunnels of soil and saliva) to reach wood above ground while maintaining moisture. They can consume wood 24 hours a day, 7 days a week. Drywood termites infest dry, sound wood and create small kick-out holes to push out frass (wood-colored pellets). Swarming typically occurs in spring or fall.',
    signs: [
      'Mud tubes on foundation walls, piers, or pipes (subterranean termites)',
      'Frass — small, wood-colored hexagonal pellets below infested wood (drywood termites)',
      'Discarded wings near windows or doors after swarming events',
      'Wood that sounds hollow when tapped',
      'Buckling paint, sagging floors, or doors/windows that stick without other cause'
    ],
    prevention: [
      'Eliminate wood-to-ground contact around the home',
      'Maintain at least 6 inches between soil and wood siding or framing',
      'Fix all plumbing and roof leaks promptly — moisture attracts subterranean termites',
      'Ensure proper drainage away from the foundation',
      'Do not stack firewood or lumber against the house'
    ],
    treatment: 'Professional termite control is essential. For subterranean termites, liquid soil treatments (termiticides) create a continuous barrier around the foundation. Bait station systems use slow-acting toxicants that workers carry back to the colony, eventually eliminating the queen. For drywood termites, localized treatments (foam or injectable termiticides) or whole-structure fumigation may be necessary. Annual inspections are strongly recommended.'
  },
  {
    id: 'fleas-ticks',
    name: 'Fleas & Ticks',
    emoji: '🐕',
    image: 'images/pest-fleas-ticks.png',
    shortDesc: 'Blood-feeding parasites targeting pets and people — carriers of Lyme disease and plague.',
    scientificName: 'Siphonaptera / Ixodida',
    overview: 'Fleas and ticks are external parasites that feed on the blood of mammals and birds. The cat flea (Ctenocephalides felis) is the most common flea species affecting both cats and dogs in the U.S. Key tick species include the blacklegged tick (Ixodes scapularis, also known as the deer tick), the American dog tick (Dermacentor variabilis), and the lone star tick (Amblyomma americanum). Ticks are responsible for transmitting Lyme disease, Rocky Mountain spotted fever, ehrlichiosis, and other serious illnesses.',
    identification: [
      'Fleas: tiny (1.5–3 mm), wingless, laterally flattened, dark reddish-brown, powerful jumpers',
      'Blacklegged tick: small (unfed: 3 mm), dark brown/black with orangish legs, eight legs',
      'American dog tick: larger (5 mm unfed), brown with white markings on back',
      'Engorged ticks swell to several times their original size and turn grayish',
      'Flea dirt (feces) looks like fine black pepper; turns reddish when wet'
    ],
    behavior: 'Fleas can jump up to 150 times their own body length. Adult fleas spend most of their life on the host animal, but eggs fall off into carpets, bedding, and furniture. Flea larvae develop in carpet fibers and cracks. A single female flea lays up to 50 eggs per day. Ticks do not jump or fly — they "quest" by climbing grass or low vegetation and waiting with outstretched legs for a host to brush past. After attaching, ticks feed for 3–7 days.',
    signs: [
      'Excessive scratching, licking, or biting by pets',
      'Flea dirt in pet fur — use a flea comb to check',
      'Small, itchy red bites on ankles and lower legs (fleas)',
      'An embedded tick found on skin or pet — check after outdoor activities',
      'Flea larvae or pupae in carpets and pet bedding'
    ],
    prevention: [
      'Use veterinarian-recommended flea and tick preventatives on all pets year-round',
      'Vacuum frequently, especially carpets, rugs, and pet resting areas',
      'Wash pet bedding in hot water weekly',
      'Keep grass mowed short and remove leaf litter from the yard',
      'Create a 3-foot gravel or wood chip barrier between lawn and wooded areas'
    ],
    treatment: 'Flea control requires treating the pet, the home, and the yard simultaneously. Indoor treatments include residual sprays and insect growth regulators (IGRs) that prevent larvae from developing. Carpet treatments, thorough vacuuming, and hot-water washing of all bedding are essential. Yard treatments target shaded areas where fleas and ticks thrive. Multiple treatments may be needed due to the flea pupal stage, which is resistant to insecticides.'
  },
  {
    id: 'stinging-insects',
    name: 'Stinging Insects',
    emoji: '🐝',
    image: 'images/pest-stinging-insects.png',
    shortDesc: 'Yellowjackets, wasps, hornets, and carpenter bees — aggressive defenders of their nests.',
    scientificName: 'Hymenoptera (Vespidae, Xylocopinae)',
    overview: 'Stinging insects in the order Hymenoptera include yellowjackets (Vespula spp.), paper wasps (Polistes spp.), bald-faced hornets (Dolichovespula maculata), European hornets (Vespa crabro), and carpenter bees (Xylocopa spp.). Stings send over 500,000 Americans to the emergency room each year. While honeybees are important pollinators and generally non-aggressive, wasps and yellowjackets can be highly aggressive, especially near their nests or food sources in late summer and fall.',
    identification: [
      'Yellowjackets: 12–16 mm, black and yellow banded, smooth body, nest in ground or wall voids',
      'Paper wasps: 16–20 mm, slender, brown with yellow markings, build open umbrella-shaped nests',
      'Bald-faced hornets: 15–20 mm, black with white face markings, build large enclosed paper nests',
      'Carpenter bees: 20–25 mm, resemble bumblebees but with a shiny, hairless black abdomen',
      'All have two pairs of wings and a stinger (females only)'
    ],
    behavior: 'Social wasps and hornets build nests from chewed wood fibers mixed with saliva. Colonies are annual — founded by a single queen in spring and growing to hundreds or thousands of workers by late summer. Workers become increasingly aggressive in fall as the colony peaks. Yellowjackets are attracted to human food and sweet drinks. Carpenter bees are solitary; females bore perfectly round 1/2-inch holes into unpainted or weathered wood to lay eggs.',
    signs: [
      'Visible nests — paper combs under eaves, enclosed nests in trees, ground holes (yellowjackets)',
      'Increased wasp or bee activity around the home, especially near eaves and soffits',
      'Carpenter bee holes in fascia boards, decks, or wooden trim with sawdust below',
      'Aggressive behavior when approaching certain areas of the yard or home',
      'Finding dead wasps indoors — may indicate a nest in a wall void'
    ],
    prevention: [
      'Seal gaps around soffits, eaves, and roof edges in early spring before nests are built',
      'Keep outdoor garbage cans tightly sealed',
      'Avoid leaving sweet drinks or food uncovered outdoors',
      'Paint or stain all exposed wood surfaces to deter carpenter bees',
      'Hang decoy wasp nests — some species avoid areas where another colony appears established'
    ],
    treatment: 'Professional removal is the safest approach for active nests. Technicians treat nests directly with fast-acting insecticides, typically at dusk when all workers have returned. Ground nests, wall void nests, and aerial nests each require specific techniques. Carpenter bee treatment involves injecting insecticidal dust into galleries, then sealing the holes after activity stops. Early-season treatment (spring) prevents colonies from growing large and aggressive.'
  },
  {
    id: 'silverfish',
    name: 'Silverfish',
    emoji: '🐛',
    image: 'images/pest-silverfish.png',
    shortDesc: 'Teardrop-shaped, nocturnal insects that damage books, wallpaper, and fabric in humid areas.',
    scientificName: 'Lepisma saccharina',
    overview: 'Silverfish (Lepisma saccharina) are small, wingless insects named for their silvery-gray color and fish-like wriggling movement. They are one of the oldest known insect species, with fossil records dating back over 400 million years — predating the dinosaurs. Silverfish thrive in humid environments (75–95% relative humidity) and are commonly found in bathrooms, basements, attics, and kitchens. While they do not bite or transmit diseases, they can cause significant damage to paper goods, wallpaper, books, and certain fabrics.',
    identification: [
      'Teardrop-shaped body, 12–19 mm long, covered in silvery scales',
      'Three long, bristle-like appendages at the rear (cerci)',
      'Two long antennae',
      'Wingless; moves with a rapid, side-to-side "swimming" motion',
      'Nocturnal — rarely seen during the day'
    ],
    behavior: 'Silverfish are nocturnal and very fast, making them difficult to catch or observe. They can live for 2–8 years and survive for months without food. They feed on carbohydrates and starches, including book bindings, wallpaper paste, paper, photos, sugar, coffee, hair, dandruff, and certain fabrics (cotton, linen, silk). They prefer dark, warm, humid environments and are often found in bathrooms, under sinks, in basements, and in stored boxes of books or papers.',
    signs: [
      'Irregular holes or notches chewed in paper, wallpaper, or book pages',
      'Yellow stains on fabric, paper, or wallpaper',
      'Tiny pepper-like feces (black droppings) in infested areas',
      'Cast skins — silvery, translucent molted exoskeletons',
      'Sightings when turning on lights at night in bathrooms or kitchens'
    ],
    prevention: [
      'Reduce humidity with dehumidifiers — aim for below 50% relative humidity',
      'Fix all plumbing leaks and ensure proper bathroom ventilation',
      'Store books, photos, and important papers in sealed plastic containers',
      'Vacuum regularly to remove food particles and eggs',
      'Seal cracks and gaps around baseboards, pipes, and window frames'
    ],
    treatment: 'Silverfish control begins with moisture reduction. Residual insecticides and silica-based dusts (like diatomaceous earth) applied in cracks, crevices, wall voids, and under baseboards are effective. Boric acid in wall voids provides long-term control. Sticky traps help monitor population levels. Because silverfish are long-lived and can survive without food, persistent treatment and ongoing humidity management are key to complete control.'
  }
];

// ==============================================
// BLOG DATA — 4 starter city blog articles
// ==============================================
var BLOG_DATA = [
  {
    id: 'philadelphia',
    city: 'Philadelphia, PA',
    title: 'Philadelphia Pest Control: Expert Urban Solutions for Homes and Businesses',
    date: 'February 2, 2026',
    excerpt: 'Philadelphia County presents unique challenges for pest control due to its dense rowhouse neighborhoods, aging infrastructure, and riverfront properties.',
    content: '<p>Philadelphia County presents unique challenges for pest control due to its dense rowhouse neighborhoods, aging infrastructure, multi-unit housing, commercial kitchens, and riverfront properties along the Delaware and Schuylkill rivers. Infestations can escalate quickly without targeted, professional intervention. Our inspection-first approach ensures that your home or business is protected efficiently and safely.</p>' +

      '<h2>Residential Pest Control in Philadelphia</h2>' +
      '<p>Philadelphia\'s urban layout contributes to a variety of pest pressures. Rowhouses, shared walls, basements, and high rental density create ideal conditions for rodents, cockroaches, and bed bugs.</p>' +

      '<h3>Rodent Control and Structural Exclusion</h3>' +
      '<p>Rodents in Philadelphia exploit foundation gaps, shared party walls, sewer breaks, and alley trash zones. Our urban rodent protocol includes:</p>' +
      '<ul><li>Comprehensive structural inspections</li><li>Activity mapping and trap placement</li><li>Tamper-resistant bait stations</li><li>Sealing entry points with durable materials</li><li>Sanitation recommendations</li><li>Scheduled follow-ups to prevent reinfestation</li></ul>' +

      '<h3>German Cockroach Control</h3>' +
      '<p>High-density apartments and restaurant-adjacent buildings are at increased risk. Treatments involve:</p>' +
      '<ul><li>Accurate species identification</li><li>Precision gel bait placement</li><li>Insect growth regulators for long-term control</li><li>Crack and crevice residual treatments</li><li>Coordinated multi-unit programs to prevent migration</li></ul>' +

      '<h3>Bed Bug Remediation</h3>' +
      '<p>Philadelphia\'s high rental and student housing density increases bed bug risk. Programs include:</p>' +
      '<ul><li>Comprehensive inspection of units and shared spaces</li><li>Heat treatment where feasible</li><li>Targeted chemical application</li><li>Follow-up verification and clearance documentation</li><li>Coordination with landlords, property managers, and tenants</li></ul>' +

      '<h3>Termite Inspection and WDI Reports</h3>' +
      '<p>Historic and renovated properties face a heightened risk of subterranean termites. Our services include:</p>' +
      '<ul><li>Wood Destroying Insect (WDI) inspections and reports</li><li>Liquid barrier treatments</li><li>Baiting systems and annual monitoring</li><li>Recommendations for property buyers and real estate transactions</li></ul>' +

      '<h2>Commercial Pest Control</h2>' +
      '<p>Philadelphia\'s commercial districts require strict compliance, particularly in food service and healthcare. Services include:</p>' +
      '<ul><li>Routine inspections and monitoring</li><li>HACCP-aligned corrective action reporting</li><li>Emergency response and preventative treatments</li><li>Multi-unit property management coordination</li></ul>' +

      '<h2>Seasonal Pest Trends in Philadelphia</h2>' +
      '<ul><li><strong>Spring:</strong> Termite swarms and ant expansion</li><li><strong>Summer:</strong> Increased roach activity and wasps</li><li><strong>Fall:</strong> Rodents begin migrating indoors</li><li><strong>Winter:</strong> Interior infestations intensify</li></ul>' +

      '<h2>FAQs for Philadelphia Residents</h2>' +
      '<p><strong>How fast can I get pest control service?</strong><br>Same-day or next-day service is available for urgent urban infestations.</p>' +
      '<p><strong>Do you treat entire apartment buildings?</strong><br>Yes. Our coordinated multi-unit programs prevent reinfestation between units.</p>' +
      '<p><strong>Are your treatments safe?</strong><br>All applications follow regulatory and label guidelines.</p>' +
      '<p><strong>Do you provide restaurant compliance documentation?</strong><br>Yes, we provide HACCP-aligned reporting for commercial kitchens.</p>' +

      '<h2>Urban Pest Prevention Tips</h2>' +
      '<ul><li>Maintain proper waste management</li><li>Reduce indoor and basement moisture</li><li>Seal structural gaps and cracks</li><li>Educate tenants or staff on preventive measures</li><li>Adjust landscaping to limit pest access</li></ul>' +

      '<h2>Philadelphia Pest Control Experts</h2>' +
      '<p>Our licensed and insured team specializes in residential, commercial, and multi-unit properties. From rodent exclusion to bed bug heat remediation and termite WDI inspections, we provide rapid, precise, and compliant service across all Philadelphia County neighborhoods, including Center City, Fishtown, Kensington, University City, Roxborough, and Old City.</p>' +
      '<p><strong>Call <a href="tel:+18445780573">(844) 578-0573</a> for professional, city-specific pest solutions in Philadelphia County.</strong></p>'
  },
  {
    id: 'new-york',
    city: 'New York, NY',
    title: 'New York City Pest Control: Expert Urban Solutions for Homes and Businesses',
    date: 'February 9, 2026',
    excerpt: 'New York City presents one of the most complex urban pest control environments in the U.S., with dense apartments, historic brownstones, and high-rise complexes.',
    content: '<p>New York City presents one of the most complex urban pest control environments in the U.S. With dense apartment buildings, historic brownstones, high-rise complexes, subway systems, commercial kitchens, and waterfront districts along the East and Hudson Rivers, infestations can escalate rapidly without targeted, professional intervention. An inspection-first approach ensures that homes and businesses receive safe, precise, and effective pest management.</p>' +

      '<h2>Residential Pest Control in New York City</h2>' +
      '<p>New York City\'s densely packed urban layout creates ideal conditions for rodents, cockroaches, bed bugs, and other pests. Shared walls, aging infrastructure, basement-heavy buildings, and high rental density increase infestation risk.</p>' +

      '<h3>Rodent Control and Structural Exclusion</h3>' +
      '<p>Rats and mice exploit foundation gaps, shared walls, sewer lines, and alley trash zones. Urban rodent protocols typically include:</p>' +
      '<ul><li>Comprehensive interior and exterior inspections</li><li>Activity mapping and strategic trap placement</li><li>Tamper-resistant bait stations</li><li>Sealing of entry points with durable materials</li><li>Sanitation recommendations</li><li>Scheduled follow-ups to prevent reinfestation</li></ul>' +

      '<h3>Cockroach Control</h3>' +
      '<p>High-density apartments and buildings near restaurants are especially at risk. Treatment strategies include:</p>' +
      '<ul><li>Accurate species identification</li><li>Precision gel bait application</li><li>Insect growth regulators for lasting control</li><li>Crack and crevice residual treatments</li><li>Coordinated multi-unit programs to prevent migration between units</li></ul>' +

      '<h3>Bed Bug Remediation</h3>' +
      '<p>New York City\'s rental density and transient population increase bed bug exposure. Remediation programs include:</p>' +
      '<ul><li>Comprehensive inspection of units and shared spaces</li><li>Heat treatments where feasible</li><li>Targeted chemical applications</li><li>Follow-up verification and clearance documentation</li><li>Coordination with landlords, property managers, and tenants</li></ul>' +

      '<h3>Termite Inspection and WDI Reports</h3>' +
      '<p>Historic and renovated properties face a higher risk of subterranean termites. Services include:</p>' +
      '<ul><li>Wood Destroying Insect (WDI) inspections and reports</li><li>Liquid barrier treatments</li><li>Baiting systems and annual monitoring</li><li>Recommendations for property buyers and real estate transactions</li></ul>' +

      '<h2>Commercial Pest Control</h2>' +
      '<p>New York City\'s commercial sectors require strict compliance, especially in food service, healthcare, and high-traffic buildings. Services include:</p>' +
      '<ul><li>Routine inspections and monitoring</li><li>HACCP-aligned corrective action reporting</li><li>Emergency response and preventive treatments</li><li>Multi-unit property management coordination</li></ul>' +

      '<h2>Seasonal Pest Trends in New York City</h2>' +
      '<ul><li><strong>Spring:</strong> Termite swarms and ant expansion</li><li><strong>Summer:</strong> Increased cockroach activity and wasps</li><li><strong>Fall:</strong> Rodents migrate indoors</li><li><strong>Winter:</strong> Interior infestations intensify</li></ul>' +

      '<h2>FAQs for New York City Residents</h2>' +
      '<p><strong>How fast can I get pest control service?</strong><br>Same-day or next-day service is available for urgent infestations.</p>' +
      '<p><strong>Do you treat entire apartment buildings?</strong><br>Yes. Coordinated multi-unit programs prevent reinfestation between units.</p>' +
      '<p><strong>Are treatments safe?</strong><br>All applications follow regulatory and label guidelines.</p>' +
      '<p><strong>Do you provide restaurant compliance documentation?</strong><br>Yes. HACCP-aligned reporting is available for commercial kitchens.</p>' +

      '<h2>Urban Pest Prevention Tips</h2>' +
      '<ul><li>Maintain proper waste management</li><li>Reduce indoor and basement moisture</li><li>Seal structural gaps and cracks</li><li>Educate tenants or staff on preventive measures</li><li>Adjust landscaping to limit pest access</li></ul>' +

      '<h2>New York City Pest Control Experts</h2>' +
      '<p>Licensed and insured technicians specialize in residential, commercial, and multi-unit properties. From rodent exclusion to bed bug heat remediation and termite inspections, rapid and compliant service is provided across all NYC boroughs, including Manhattan, Brooklyn, Queens, Bronx, and Staten Island.</p>' +
      '<p><strong>Call <a href="tel:+18445780573">(844) 578-0573</a> for professional, city-specific pest solutions in New York City.</strong></p>'
  },
  {
    id: 'houston',
    city: 'Houston, TX',
    title: 'Houston Pest Control: Urban & Gulf Coast Pest Management for Homes and Businesses',
    date: 'February 16, 2026',
    excerpt: 'Houston\'s climate and infrastructure create one of the most active pest environments in the southern United States.',
    content: '<p>Houston\'s climate and infrastructure create one of the most active pest environments in the southern United States. High humidity, frequent rainfall, warm temperatures, and dense development allow insects and rodents to reproduce year-round. Neighborhoods near the Buffalo Bayou corridor, the Houston Ship Channel, and the Gulf Coast floodplain often experience elevated pest pressure due to moisture and vegetation.</p>' +
      '<p>Older homes in neighborhoods like The Heights, Montrose, and Midtown often contain crawlspaces, pier-and-beam construction, and aging foundations that provide entry points for pests. Newer suburban developments around West Houston, Katy, Sugar Land, and Pearland face different issues such as fire ants, mosquitoes, and subterranean termites migrating through disturbed soil.</p>' +
      '<p>An inspection-first pest management approach is essential for identifying structural entry points, nesting locations, and environmental conditions contributing to infestations.</p>' +

      '<h2>Residential Pest Control in Houston</h2>' +
      '<p>Houston\'s housing mix, ranging from historic bungalows and townhomes to large apartment complexes, creates multiple pest habitats. Shared walls, dense landscaping, and flood-prone foundations increase exposure to rodents, cockroaches, termites, and mosquitoes.</p>' +

      '<h3>Rodent Control and Structural Exclusion</h3>' +
      '<p>Rodents are common in Houston\'s urban districts where alley waste storage, storm drains, and aging sewer systems create ideal nesting conditions.</p>' +
      '<p><strong>Typical rodent entry points include:</strong></p>' +
      '<ul><li>Foundation gaps in pier-and-beam homes</li><li>Utility penetrations and attic vents</li><li>Drain lines and sewer access points</li><li>Garage door gaps and roofline openings</li><li>Backyard storage sheds and landscaping</li></ul>' +
      '<p><strong>Urban rodent control programs include:</strong></p>' +
      '<ul><li>Full interior and exterior structural inspections</li><li>Rodent activity mapping and trap placement</li><li>Tamper-resistant exterior bait stations</li><li>Entry point sealing with steel mesh and sealants</li><li>Sanitation and food storage recommendations</li><li>Follow-up monitoring visits</li></ul>' +
      '<p>In Houston\'s dense neighborhoods, exclusion work is essential. Removing rodents without sealing entry points often leads to rapid reinfestation.</p>' +

      '<h3>Cockroach Control in Houston Apartments</h3>' +
      '<p>Houston\'s warm climate allows cockroaches to remain active year-round. German cockroaches and American cockroaches are the most common species found in apartments, restaurants, and multi-unit housing.</p>' +
      '<p><strong>High-risk areas include:</strong></p>' +
      '<ul><li>Kitchens and pantries</li><li>Bathroom plumbing penetrations</li><li>Utility closets</li><li>Restaurant-adjacent buildings</li><li>Trash storage areas</li></ul>' +
      '<p><strong>Treatment strategies include:</strong></p>' +
      '<ul><li>Accurate species identification</li><li>Precision gel bait placement</li><li>Insect growth regulators</li><li>Crack and crevice treatments</li><li>Coordinated building-wide pest management</li></ul>' +
      '<p>Large apartment complexes often require multi-unit treatment coordination to stop migration between units.</p>' +

      '<h3>Bed Bug Remediation in Houston Housing</h3>' +
      '<p>Houston\'s large population, tourism, and high apartment density contribute to bed bug spread. Areas with frequent turnover such as student housing near the University of Houston and Texas Southern University, short-term rentals, and hotels face higher exposure risk.</p>' +
      '<p><strong>Professional remediation programs include:</strong></p>' +
      '<ul><li>Detailed room and furniture inspections</li><li>Heat treatments when structures allow</li><li>Targeted chemical protocols</li><li>Post-treatment verification inspections</li><li>Documentation for landlords and property managers</li></ul>' +
      '<p>Successful bed bug removal often requires cooperation between tenants, property managers, and technicians.</p>' +

      '<h3>Termite Inspection and WDI Reports</h3>' +
      '<p>Houston\'s soil conditions and humidity create ideal conditions for subterranean termites, particularly around slab foundations and wood-framed homes.</p>' +
      '<p><strong>Risk indicators include:</strong></p>' +
      '<ul><li>Wood-to-soil contact</li><li>Moisture accumulation near foundations</li><li>Landscaping mulch against structures</li><li>Foundation cracks and expansion joints</li></ul>' +
      '<p><strong>Termite services include:</strong></p>' +
      '<ul><li>Wood Destroying Insect inspections</li><li>Liquid barrier trench treatments</li><li>Bait station monitoring systems</li><li>Annual inspections for ongoing protection</li></ul>' +
      '<p>WDI reports are commonly required during real estate transactions throughout Harris County.</p>' +

      '<h2>Commercial Pest Control in Houston</h2>' +
      '<p>Houston\'s commercial districts, especially Downtown, the Energy Corridor, and the Galleria area, require pest control programs that meet health and safety compliance standards.</p>' +
      '<p><strong>Commercial programs include:</strong></p>' +
      '<ul><li>Routine inspections and monitoring stations</li><li>HACCP-aligned reporting for restaurants</li><li>Corrective action documentation</li><li>Preventative treatment programs</li><li>Emergency response scheduling</li></ul>' +
      '<p><strong>Industries frequently requiring pest control services include:</strong></p>' +
      '<ul><li>Restaurants and commercial kitchens</li><li>Food distribution warehouses</li><li>Healthcare facilities</li><li>Office buildings</li><li>Multi-family housing complexes</li></ul>' +

      '<h2>Seasonal Pest Trends in Houston</h2>' +
      '<p>Houston\'s climate allows pests to remain active most of the year.</p>' +
      '<ul><li><strong>Spring:</strong> Termite swarms begin and ant colonies expand</li><li><strong>Summer:</strong> Mosquito populations surge due to humidity and standing water</li><li><strong>Fall:</strong> Rodents begin moving indoors seeking shelter</li><li><strong>Winter:</strong> Cockroaches and rodents concentrate inside heated buildings</li></ul>' +

      '<h2>Frequently Asked Questions for Houston Pest Control</h2>' +
      '<p><strong>How fast can pest control service be scheduled in Houston?</strong><br>Same-day or next-day service is available in most Houston neighborhoods.</p>' +
      '<p><strong>Do you treat entire apartment complexes?</strong><br>Yes. Coordinated multi-unit programs are used to prevent pests from spreading between units.</p>' +
      '<p><strong>Are treatments safe for families and pets?</strong><br>All applications follow regulatory guidelines and product label instructions.</p>' +
      '<p><strong>Do restaurants receive pest control documentation?</strong><br>Yes. HACCP-aligned reports and monitoring records are available for commercial kitchens.</p>' +

      '<h2>Houston Pest Prevention Tips</h2>' +
      '<p>Residents and property managers can reduce infestation risk by:</p>' +
      '<ul><li>Managing trash and recycling storage</li><li>Eliminating standing water in yards</li><li>Sealing exterior foundation gaps</li><li>Maintaining attic and crawlspace ventilation</li><li>Trimming vegetation away from structures</li></ul>' +
      '<p>Preventive measures significantly reduce long-term pest problems.</p>' +

      '<h2>Houston Pest Control Coverage Areas</h2>' +
      '<p>Professional pest control services are available across the greater Houston metropolitan area, including:</p>' +
      '<ul><li>Downtown Houston</li><li>Midtown</li><li>Montrose</li><li>The Heights</li><li>West University</li><li>River Oaks</li><li>Energy Corridor</li><li>Sugar Land</li><li>Katy</li><li>Pearland</li></ul>' +

      '<h2>Houston Pest Control Services</h2>' +
      '<p>Experienced technicians provide residential, commercial, and multi-unit pest management throughout the region. Services include rodent exclusion, bed bug remediation, termite inspections, cockroach control, and seasonal insect management.</p>' +
      '<p><strong>Call <a href="tel:+18445780573">(844) 578-0573</a> to schedule pest control service in Houston or request an inspection.</strong></p>'
  },
  {
    id: 'los-angeles',
    city: 'Los Angeles, CA',
    title: 'Los Angeles Pest Control: Complete Guide for Homes and Businesses',
    date: 'February 24, 2026',
    excerpt: 'Los Angeles faces high pest pressure due to its dense urban neighborhoods, historic homes, sprawling suburbs, and variable climate.',
    content: '<p>Los Angeles faces a high level of pest pressure due to its dense urban neighborhoods, historic homes, sprawling suburbs, and variable climate. Termites, ants, spiders, cockroaches, mosquitoes, ticks, fleas, rodents, and other pests are common challenges for residents and business owners. Effective pest management requires local knowledge, precision treatments, and preventive strategies.</p>' +

      '<h2>Why Choose Local Los Angeles Pest Control Experts</h2>' +

      '<h3>Local Experience and Seasonal Expertise</h3>' +
      '<p>Technicians familiar with Los Angeles understand seasonal pest activity, such as termite swarms in spring and mosquito outbreaks during humid summers. Knowledge of city structures, including apartments, rowhouses, commercial kitchens, urban parks, and yard layouts, ensures targeted and effective pest management solutions.</p>' +

      '<h3>Comprehensive Pest Coverage</h3>' +
      '<p>Services cover the full spectrum of common Los Angeles pests:</p>' +
      '<ul><li><strong>Spiders:</strong> Brown recluse, black widow, and nuisance species</li><li><strong>Termites:</strong> Drywood and subterranean termite inspection, treatment, and prevention</li><li><strong>Rodents:</strong> Mice, rats, and structural exclusion measures</li><li><strong>Mosquitoes, fleas, and ticks:</strong> Yard-focused treatments for families and pets</li><li><strong>Bed bugs:</strong> Inspections, heat treatment, and chemical solutions</li><li><strong>Other pests:</strong> Silverfish, centipedes, stink bugs, scorpions, and pantry pests</li></ul>' +

      '<h3>Eco-Friendly, Family-Safe Solutions</h3>' +
      '<p>Many homeowners and business owners prioritize chemical safety. Services include:</p>' +
      '<ul><li>Pet-safe and child-safe treatments</li><li>Targeted, minimal-chemical approaches using Integrated Pest Management (IPM) strategies</li><li>Environmentally friendly practices that reduce disruption while effectively controlling infestations</li></ul>' +

      '<h3>Preventive Pest Management Programs</h3>' +
      '<p>Long-term protection is critical in Los Angeles. Programs include:</p>' +
      '<ul><li>Quarterly pest control visits to prevent infestations</li><li>Annual service plans for year-round protection</li><li>Termite prevention programs with inspections, bait stations, and liquid treatments</li><li>Early intervention strategies to reduce future costs and property damage</li></ul>' +

      '<h2>Residential Pest Services</h2>' +
      '<ul><li><strong>Ant Control:</strong> General and carpenter ant management</li><li><strong>Termite Services:</strong> Inspections, bait systems, and liquid treatments</li><li><strong>Rodent Control:</strong> Extermination and exclusion to prevent reinfestation</li><li><strong>Mosquito, Flea, and Tick Management:</strong> Yard-focused eco-friendly treatments</li><li><strong>Bed Bug Treatments:</strong> Detection, heat treatment, and chemical solutions with follow-up verification</li><li><strong>Other Household Pests:</strong> Silverfish, centipedes, stink bugs, scorpions, pantry pests</li></ul>' +

      '<h2>Commercial Pest Services</h2>' +
      '<p>Urban businesses require preventive and responsive pest control. Services include:</p>' +
      '<ul><li><strong>Restaurants and food service:</strong> Compliance-focused programs</li><li><strong>Offices, retail, and multi-unit properties:</strong> Minimizing disruption and preventing infestations</li><li><strong>Schools, daycare, and healthcare facilities:</strong> Safe, eco-conscious treatments</li><li>Monitoring systems, preventive contracts, and rapid-response options for urgent situations</li></ul>' +

      '<h2>Geo-Targeted Service Areas</h2>' +
      '<p>Services cover Los Angeles and surrounding areas, including:</p>' +
      '<ul><li>Santa Monica</li><li>Pasadena</li><li>Long Beach</li><li>Beverly Hills</li></ul>' +

      '<h2>FAQs: Los Angeles Pest Control</h2>' +
      '<p><strong>How do I schedule pest control services?</strong><br>Call <a href="tel:+18445780573">(844) 578-0573</a> or book online for inspections and service.</p>' +
      '<p><strong>Is same-day service available?</strong><br>Yes. Urgent pest infestations can receive same-day service across Los Angeles County.</p>' +
      '<p><strong>Are treatments safe for children and pets?</strong><br>All treatments are eco-friendly, child-safe, and pet-safe, using targeted applications to minimize chemical exposure.</p>' +
      '<p><strong>Which pests are treated?</strong><br>Services cover ants, termites, rodents, spiders, bed bugs, mosquitoes, ticks, fleas, silverfish, stink bugs, scorpions, and pantry pests.</p>' +
      '<p><strong>Are preventive pest management programs offered?</strong><br>Yes. Both quarterly and annual programs are available to maintain long-term pest protection.</p>' +
      '<p><strong>What if pests return after treatment?</strong><br>Follow-up treatments and preventive measures are provided to ensure properties remain pest-free.</p>' +

      '<h2>Protect Your Los Angeles Property</h2>' +
      '<p>Effective pest management in Los Angeles requires local knowledge, precise treatment, and preventive planning. For fast, professional, and safe pest control services, call <a href="tel:+18445780573">(844) 578-0573</a> to schedule inspections, treatments, or preventive plans. Protect your home or business year-round from pests with expert urban pest control services.</p>'
  }
];
