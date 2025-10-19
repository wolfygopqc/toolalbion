const WEAPONS = [
    // --- ÉPÉES ---
    { baseId: 'T4_MAIN_SWORD', name: "Épée large", category: "Arme (Épée)" },
    { baseId: 'T4_2H_CLAYMORE', name: "Claymore", category: "Arme (Épée)" },
    { baseId: 'T4_2H_DUALSWORD', name: "Épées doubles", category: "Arme (Épée)" },
    { baseId: 'T4_MAIN_SCIMITAR_MORGANA', name: "Lame Clarent", category: "Arme (Épée)" },
    { baseId: 'T4_2H_CLEAVER_HELL', name: "Épée découpeuse", category: "Arme (Épée)" },
    { baseId: 'T4_2H_DUALSCIMITAR_UNDEAD', name: "Paire de galatines", category: "Arme (Épée)" },
    { baseId: 'T4_2H_CLAYMORE_AVALON', name: "Faiseuse de rois", category: "Arme (Épée)" },

    // --- HACHES ---
    { baseId: 'T4_MAIN_AXE', name: "Hache de guerre", category: "Arme (Hache)" },
    { baseId: 'T4_2H_GREATAXE', name: "Grande hache", category: "Arme (Hache)" },
    { baseId: 'T4_2H_HALBERD', name: "Hallebarde", category: "Arme (Hache)" },
    { baseId: 'T4_2H_HALBERD_MORGANA', name: "Appel charognard", category: "Arme (Hache)" },
    { baseId: 'T4_2H_SCYTHE_HELL', name: "Faux infernale", category: "Arme (Hache)" },
    { baseId: 'T4_2H_DUALAXE_KEEPER', name: "Pattes d'ours", category: "Arme (Hache)" },
    { baseId: 'T4_2H_AXE_AVALON', name: "Brise-royaume", category: "Arme (Hache)" },

    // --- MASSES ---
    { baseId: 'T4_MAIN_MACE', name: "Masse", category: "Arme (Masse)" },
    { baseId: 'T4_2H_MACE', name: "Masse lourde", category: "Arme (Masse)" },
    { baseId: 'T4_2H_FLAIL', name: "Masse d'armes", category: "Arme (Masse)" },
    { baseId: 'T4_MAIN_MACE_MORGANA', name: "Masse de pierre-mère", category: "Arme (Masse)" },
    { baseId: 'T4_2H_MACE_HELL', name: "Masse d'incube", category: "Arme (Masse)" },
    { baseId: 'T4_2H_FLAIL_UNDEAD', name: "Masse de Camlann", category: "Arme (Masse)" },
    { baseId: 'T4_2H_DUALMACE_AVALON', name: "Gardien du serment", category: "Arme (Masse)" },

    // --- MARTEAUX ---
    { baseId: 'T4_MAIN_HAMMER', name: "Marteau", category: "Arme (Marteau)" },
    { baseId: 'T4_2H_POLEHAMMER', name: "Marteau de polisson", category: "Arme (Marteau)" },
    { baseId: 'T4_2H_HAMMER', name: "Grand marteau", category: "Arme (Marteau)" },
    { baseId: 'T4_2H_HAMMER_UNDEAD', name: "Marteau de sépulcre", category: "Arme (Marteau)" },
    { baseId: 'T4_2H_DUALHAMMER_HELL', name: "Marteaux de forge", category: "Arme (Marteau)" },
    { baseId: 'T4_2H_RAM_KEEPER', name: "Gardien du bosquet", category: "Arme (Marteau)" },
    { baseId: 'T4_MAIN_HAMMER_AVALON', name: "Main de la justice", category: "Arme (Marteau)" },

    // --- ARBALÈTES ---
    { baseId: 'T4_MAIN_CROSSBOW', name: "Arbalète", category: "Arme (Arbalète)" },
    { baseId: 'T4_2H_CROSSBOW', name: "Arbalète lourde", category: "Arme (Arbalète)" },
    { baseId: 'T4_2H_CROSSBOWLARGE', name: "Arbalète légère", category: "Arme (Arbalète)" },
    { baseId: 'T4_2H_REPEATINGCROSSBOW_UNDEAD', name: "Arbalète à répétition pleurante", category: "Arme (Arbalète)" },
    { baseId: 'T4_2H_DUALCROSSBOW_HELL', name: "Lance- carreaux", category: "Arme (Arbalète)" },
    { baseId: 'T4_2H_CROSSBOW_CANNON', name: "Arc de siège", category: "Arme (Arbalète)" },
    { baseId: 'T4_MAIN_CROSSBOW_AVALON', name: "Modeleur d'énergie", category: "Arme (Arbalète)" },

    // --- ARCS ---
    { baseId: 'T4_2H_BOW', name: "Arc", category: "Arme (Arc)" },
    { baseId: 'T4_2H_WARBOW', name: "Arc de guerre", category: "Arme (Arc)" },
    { baseId: 'T4_2H_LONGBOW', name: "Arc long", category: "Arme (Arc)" },
    { baseId: 'T4_2H_LONGBOW_UNDEAD', name: "Arc chuchotant", category: "Arme (Arc)" },
    { baseId: 'T4_2H_BOW_HELL', name: "Arc hurleur", category: "Arme (Arc)" },
    { baseId: 'T4_2H_BOW_KEEPER', name: "Arc de Badon", category: "Arme (Arc)" },
    { baseId: 'T4_2H_BOW_AVALON', name: "Perce-brume", category: "Arme (Arc)" },

    // --- LANCES ---
    { baseId: 'T4_MAIN_SPEAR', name: "Lance", category: "Arme (Lance)" },
    { baseId: 'T4_2H_SPEAR', name: "Pique", category: "Arme (Lance)" },
    { baseId: 'T4_2H_GLAIVE', name: "Glaive", category: "Arme (Lance)" },
    { baseId: 'T4_MAIN_SPEAR_KEEPER', name: "Lance de héron", category: "Arme (Lance)" },
    { baseId: 'T4_2H_HARPOON_HELL', name: "Chasseur d'esprit", category: "Arme (Lance)" },
    { baseId: 'T4_2H_TRIDENT_UNDEAD', name: "Lance de la trinité", category: "Arme (Lance)" },
    { baseId: 'T4_MAIN_SPEAR_AVALON', name: "Aube", category: "Arme (Lance)" },

    // --- BÂTONS NATURELS ---
    { baseId: 'T4_MAIN_NATURESTAFF', name: "Bâton naturel", category: "Arme (Nature)" },
    { baseId: 'T4_2H_NATURESTAFF', name: "Grand bâton naturel", category: "Arme (Nature)" },
    { baseId: 'T4_2H_WILDSTAFF', name: "Bâton sauvage", category: "Arme (Nature)" },
    { baseId: 'T4_MAIN_NATURESTAFF_KEEPER', name: "Bâton druidique", category: "Arme (Nature)" },
    { baseId: 'T4_2H_NATURESTAFF_HELL', name: "Bâton de calamité", category: "Arme (Nature)" },
    { baseId: 'T4_2H_NATURESTAFF_KEEPER', name: "Bâton effréné", category: "Arme (Nature)" },
    { baseId: 'T4_MAIN_NATURESTAFF_AVALON', name: "Racine-de-fer", category: "Arme (Nature)" },

    // --- DAGUES ---
    { baseId: 'T4_MAIN_DAGGER', name: "Dague", category: "Arme (Dague)" },
    { baseId: 'T4_2H_DAGGERPAIR', name: "Paire de dagues", category: "Arme (Dague)" },
    { baseId: 'T4_2H_CLAWPAIR', name: "Griffes", category: "Arme (Dague)" },
    { baseId: 'T4_MAIN_RAPIER_MORGANA', name: "Saignoir", category: "Arme (Dague)" },
    { baseId: 'T4_MAIN_DAGGER_HELL', name: "Croc démoniaque", category: "Arme (Dague)" },
    { baseId: 'T4_2H_DUALDAGGER_HELL', name: "Donneur de mort", category: "Arme (Dague)" },
    { baseId: 'T4_2H_CLAWPAIR_AVALON', name: "Fureur embridée", category: "Arme (Dague)" },

    // --- BÂTONS À DEUX MAINS ---
    { baseId: 'T4_2H_QUARTERSTAFF', name: "Bâton à deux mains", category: "Arme (Bâton 2M)" },
    { baseId: 'T4_2H_IRONCLADSTAFF', name: "Bâton ferré", category: "Arme (Bâton 2M)" },
    { baseId: 'T4_2H_DOUBLEBLADEDSTAFF', name: "Bâton à double-lame", category: "Arme (Bâton 2M)" },
    { baseId: 'T4_2H_COMBATSTAFF_MORGANA', name: "Bâton de moine noir", category: "Arme (Bâton 2M)" },
    { baseId: 'T4_2H_SCYTHE', name: "Faux d'âme", category: "Arme (Bâton 2M)" },
    { baseId: 'T4_2H_QUARTERSTAFF_UNDEAD', name: "Bâton d'équilibre", category: "Arme (Bâton 2M)" },
    { baseId: 'T4_2H_DOUBLEBLADEDSTAFF_AVALON', name: "Cherche-graal", category: "Arme (Bâton 2M)" },

    // --- BÂTONS DE FEU ---
    { baseId: 'T4_MAIN_FIRESTAFF', name: "Bâton de feu", category: "Arme (Feu)" },
    { baseId: 'T4_2H_FIRESTAFF', name: "Grand bâton de feu", category: "Arme (Feu)" },
    { baseId: 'T4_2H_INFERNOSTAFF', name: "Bâton infernal", category: "Arme (Feu)" },
    { baseId: 'T4_MAIN_FIRESTAFF_KEEPER', name: "Bâton de feu de brousse", category: "Arme (Feu)" },
    { baseId: 'T4_2H_INFERNOSTAFF_MORGANA', name: "Bâton de soufre", category: "Arme (Feu)" },
    { baseId: 'T4_2H_FIRESTAFF_HELL', name: "Bâton flamboyant", category: "Arme (Feu)" },
    { baseId: 'T4_2H_FIRE_AVALON', name: "Chant de l'aube", category: "Arme (Feu)" },

    // --- BÂTONS SACRÉS ---
    { baseId: 'T4_MAIN_HOLYSTAFF', name: "Bâton sacré", category: "Arme (Sacré)" },
    { baseId: 'T4_2H_HOLYSTAFF', name: "Grand bâton sacré", category: "Arme (Sacré)" },
    { baseId: 'T4_2H_DIVINESTAFF', name: "Bâton divin", category: "Arme (Sacré)" },
    { baseId: 'T4_MAIN_HOLYSTAFF_MORGANA', name: "Bâton de vif-éclat", category: "Arme (Sacré)" },
    { baseId: 'T4_2H_HOLYSTAFF_HELL', name: "Bâton déchu", category: "Arme (Sacré)" },
    { baseId: 'T4_2H_HOLYSTAFF_UNDEAD', name: "Bâton de rédemption", category: "Arme (Sacré)" },
    { baseId: 'T4_MAIN_HOLYSTAFF_AVALON', name: "Chute sanctifiée", category: "Arme (Sacré)" },

    // --- BÂTONS ARCANQUES ---
    { baseId: 'T4_MAIN_ARCANESTAFF', name: "Bâton des arcanes", category: "Arme (Arcane)" },
    { baseId: 'T4_2H_ARCANESTAFF', name: "Grand bâton des arcanes", category: "Arme (Arcane)" },
    { baseId: 'T4_2H_ENIGMATICSTAFF', name: "Bâton énigmatique", category: "Arme (Arcane)" },
    { baseId: 'T4_MAIN_ARCANESTAFF_UNDEAD', name: "Bâton de sorcellerie", category: "Arme (Arcane)" },
    { baseId: 'T4_2H_ARCANESTAFF_HELL', name: "Bâton occulte", category: "Arme (Arcane)" },
    { baseId: 'T4_2H_ENIGMATICSTAFF_MORGANA', name: "Locus malveillant", category: "Arme (Arcane)" },
    { baseId: 'T4_2H_ARCANESTAFF_AVALON', name: "Chant du soir", category: "Arme (Arcane)" },

    // --- BÂTONS DE GIVRE ---
    { baseId: 'T4_MAIN_FROSTSTAFF', name: "Bâton de givre", category: "Arme (Givre)" },
    { baseId: 'T4_2H_FROSTSTAFF', name: "Grand bâton de givre", category: "Arme (Givre)" },
    { baseId: 'T4_2H_GLACIALSTAFF', name: "Bâton glacial", category: "Arme (Givre)" },
    { baseId: 'T4_MAIN_FROSTSTAFF_KEEPER', name: "Bâton de givre blanc", category: "Arme (Givre)" },
    { baseId: 'T4_2H_FROSTSTAFF_HELL', name: "Bâton de stalactite", category: "Arme (Givre)" },
    { baseId: 'T4_2H_GLACIALSTAFF_MORGANA', name: "Prisme de permafrost", category: "Arme (Givre)" },
    { baseId: 'T4_MAIN_FROSTSTAFF_AVALON', name: "Hurlegivre", category: "Arme (Givre)" },

    // --- BÂTONS MAUDITS ---
    { baseId: 'T4_MAIN_CURSEDSTAFF', name: "Bâton maudit", category: "Arme (Maudit)" },
    { baseId: 'T4_2H_CURSEDSTAFF', name: "Grand bâton maudit", category: "Arme (Maudit)" },
    { baseId: 'T4_2H_DEMONICSTAFF', name: "Bâton démoniaque", category: "Arme (Maudit)" },
    { baseId: 'T4_MAIN_CURSEDSTAFF_UNDEAD', name: "Bâton de malemort", category: "Arme (Maudit)" },
    { baseId: 'T4_2H_CURSEDSTAFF_MORGANA', name: "Crâne maudit", category: "Arme (Maudit)" },
    { baseId: 'T4_2H_DEMONICSTAFF_HELL', name: "Bâton de damnation", category: "Arme (Maudit)" },
    { baseId: 'T4_2H_CURSEDSTAFF_AVALON', name: "Porteur d'ombre", category: "Arme (Maudit)" },

    // --- BÂTONS MÉTAMORPHES ---
    { baseId: 'T4_MAIN_SHAPESHIFTER_STAFF', name: "Bâton primal", category: "Arme (Métamorphe)" },
    { baseId: 'T4_2H_SHAPESHIFTER_STAFF_HELL', name: "Bâton infernal", category: "Arme (Métamorphe)" },
    { baseId: 'T4_2H_SHAPESHIFTER_STAFF_KEEPER', name: "Bâton tellurique", category: "Arme (Métamorphe)" },
    { baseId: 'T4_2H_SHAPESHIFTER_STAFF_MORGANA', name: "Bâton de feu de brousse", category: "Arme (Métamorphe)" },
    { baseId: 'T4_2H_SHAPESHIFTER_STAFF_UNDEAD', name: "Bâton de pestilence", category: "Arme (Métamorphe)" },
    { baseId: 'T4_2H_SHAPESHIFTER_STAFF_AVALON', name: "Bâton de l'aube", category: "Arme (Métamorphe)" },

    // --- GRIMOIRES & TORCHES (OFF-HAND) ---
    { baseId: 'T4_OFF_BOOK', name: "Livre de sorts", category: "Main gauche" },
    { baseId: 'T4_OFF_ORB_MORGANA', name: "Œil des secrets", category: "Main gauche" },
    { baseId: 'T4_OFF_DEMONSKULL_HELL', name: "Muse brumeuse", category: "Main gauche" },
    { baseId: 'T4_OFF_TOTEM_KEEPER', name: "Talisman racine", category: "Main gauche" },
    { baseId: 'T4_OFF_CENSER_AVALON', name: "Encensoir céleste", category: "Main gauche" },
    { baseId: 'T4_OFF_TORCH', name: "Torche", category: "Main gauche" },
    { baseId: 'T4_OFF_HORN_KEEPER', name: "Cor de brume", category: "Main gauche" },
    { baseId: 'T4_OFF_TALISMAN_AVALON', name: "Tome des sorts sacré", category: "Main gauche" },

    // --- BOUCLIERS (OFF-HAND) ---
    { baseId: 'T4_OFF_SHIELD', name: "Bouclier", category: "Main gauche" },
    { baseId: 'T4_OFF_SPIKEDSHIELD_MORGANA', name: "Sarcophage", category: "Main gauche" },
    { baseId: 'T4_OFF_SHIELD_HELL', name: "Porteur de face", category: "Main gauche" },
    { baseId: 'T4_OFF_SHIELD_AVALON', name: "Égide astrale", category: "Main gauche" },
];

const itemsData = [
    // Concaténation de toutes les armes générées
    ...WEAPONS.flatMap(item => {
        const baseName = item.name_fr || item.name;
        const baseId = item.id || item.baseId;
        const tier = baseId.match(/T(\d)/)[1];
        const items = [];
        for (let i = parseInt(tier); i <= 8; i++) {
            const currentBaseId = baseId.replace(`T${tier}`, `T${i}`);
            const currentName = baseName.replace(/ T\d(.d)?$/, ""); // Supprime le tier existant du nom
            items.push({ id: currentBaseId, name_fr: `${currentName} T${i}.0`, category: item.category });
            for (let j = 1; j <= 4; j++) {
                items.push({ id: `${currentBaseId}@${j}`, name_fr: `${currentName} T${i}.${j}`, category: item.category });
            }
        }
        return items;
    }),

    // ===================================================================
    // --- ARMURES (T4-T8, .0-.4) ---
    // ===================================================================
    ...[
        { baseId: 'T4_HEAD_CLOTH_SET1', name: "Capuche d'érudit", category: "Armure Tissu" },
        { baseId: 'T4_ARMOR_CLOTH_SET1', name: "Robe d'érudit", category: "Armure Tissu" },
        { baseId: 'T4_SHOES_CLOTH_SET1', name: "Sandales d'érudit", category: "Armure Tissu" },
        { baseId: 'T4_HEAD_LEATHER_SET1', name: "Capuche de mercenaire", category: "Armure Cuir" },
        { baseId: 'T4_ARMOR_LEATHER_SET1', name: "Veste de mercenaire", category: "Armure Cuir" },
        { baseId: 'T4_SHOES_LEATHER_SET1', name: "Chaussures de mercenaire", category: "Armure Cuir" },
        { baseId: 'T4_HEAD_PLATE_SET1', name: "Casque de soldat", category: "Armure Plaque" },
        { baseId: 'T4_ARMOR_PLATE_SET1', name: "Armure de soldat", category: "Armure Plaque" },
        { baseId: "T4_SHOES_PLATE_SET1", name: "Bottes de soldat", category: "Armure Plaque" },
    ].flatMap(item => {
        const baseName = item.name_fr || item.name;
        const baseId = item.id || item.baseId;
        const tier = baseId.match(/T(\d)/)[1];
        const items = [];
        for (let i = parseInt(tier); i <= 8; i++) {
            const currentBaseId = baseId.replace(`T${tier}`, `T${i}`);
            const currentName = baseName.replace(/ T\d(.d)?$/, ""); // Supprime le tier existant du nom
            items.push({ id: currentBaseId, name_fr: `${currentName} T${i}.0`, category: item.category });
            for (let j = 1; j <= 4; j++) {
                items.push({ id: `${currentBaseId}@${j}`, name_fr: `${currentName} T${i}.${j}`, category: item.category });
            }
        }
        return items;
    }),

    // ===================================================================
    // --- ACCESSOIRES (T2-T8, .0-.4) ---
    // ===================================================================
    ...[
        { baseId: 'T2_BAG', name: "Sac", category: "Accessoire" },
        { baseId: 'T2_CAPE', name: "Cape", category: "Accessoire" },
    ].flatMap(item => {
        const baseName = item.name_fr || item.name;
        const baseId = item.id || item.baseId;
        const startTier = parseInt(baseId.match(/T(\d)/)[1]);
        const items = [];
        for (let i = startTier; i <= 8; i++) {
            const currentBaseId = baseId.replace(`T${startTier}`, `T${i}`);
            const currentName = baseName.replace(/ T\d(.d)?$/, ""); // Supprime le tier existant du nom
            items.push({ id: currentBaseId, name_fr: `${currentName} T${i}.0`, category: item.category });
            for (let j = 1; j <= 4; j++) {
                items.push({ id: `${currentBaseId}@${j}`, name_fr: `${currentName} T${i}.${j}`, category: item.category });
            }
        }
        return items;
    }),

    // --- CAPES DE FACTION (T4-T8, .0-.4) ---
    ...[
        { baseId: 'T4_CAPEITEM_FW_BRIDGEWATCH', name: "Cape de Bridgewatch", category: "Cape de Faction" },
        { baseId: 'T4_CAPEITEM_FW_FORTSTERLING', name: "Cape de Fort Sterling", category: "Cape de Faction" },
        { baseId: 'T4_CAPEITEM_FW_LYMHURST', name: "Cape de Lymhurst", category: "Cape de Faction" },
        { baseId: 'T4_CAPEITEM_FW_MARTLOCK', name: "Cape de Martlock", category: "Cape de Faction" },
        { baseId: 'T4_CAPEITEM_FW_THETFORD', name: "Cape de Thetford", category: "Cape de Faction" },
        { baseId: 'T4_CAPEITEM_FW_CAERLEON', name: "Cape de Caerleon", category: "Cape de Faction" },
    ].flatMap(item => {
        const baseName = item.name_fr || item.name;
        const baseId = item.id || item.baseId;
        const items = [];
        for (let i = 4; i <= 8; i++) {
            const currentBaseId = baseId.replace('T4', `T${i}`);
            const currentName = baseName.replace(/ T\d(.d)?$/, ""); // Supprime le tier existant du nom
            items.push({ id: currentBaseId, name_fr: `${currentName} T${i}.0`, category: item.category });
            for (let j = 1; j <= 4; j++) {
                items.push({ id: `${currentBaseId}@${j}`, name_fr: `${currentName} T${i}.${j}`, category: item.category });
            }
        }
        return items;
    }),

    // --- CAPES D'ARTEFACT (T4-T8, .0-.4) ---
    ...[
        { baseId: 'T4_CAPEITEM_HERETIC', name: "Cape d'Hérétique", category: "Cape d'Artefact" },
        { baseId: 'T4_CAPEITEM_UNDEAD', name: "Cape de Mort-vivant", category: "Cape d'Artefact" },
        { baseId: 'T4_CAPEITEM_KEEPER', name: "Cape de Gardien", category: "Cape d'Artefact" },
        { baseId: 'T4_CAPEITEM_MORGANA', name: "Cape de Morgana", category: "Cape d'Artefact" },
        { baseId: 'T4_CAPEITEM_DEMON', name: "Cape de Démon", category: "Cape d'Artefact" },
        { baseId: 'T4_CAPEITEM_AVALON', name: "Cape d'Avalon", category: "Cape d'Artefact" },
    ].flatMap(item => {
        const baseName = item.name_fr || item.name;
        const baseId = item.id || item.baseId;
        const items = [];
        for (let i = 4; i <= 8; i++) {
            const currentBaseId = baseId.replace('T4', `T${i}`);
            const currentName = baseName.replace(/ T\d(.d)?$/, ""); // Supprime le tier existant du nom
            items.push({ id: currentBaseId, name_fr: `${currentName} T${i}.0`, category: item.category });
            for (let j = 1; j <= 4; j++) {
                items.push({ id: `${currentBaseId}@${j}`, name_fr: `${currentName} T${i}.${j}`, category: item.category });
            }
        }
        return items;
    }),

    // ===================================================================
    // --- RESSOURCES (T4-T8, .0-.4) ---
    // ===================================================================
    ...[
        { baseId: 'T4_WOOD', name: "Bois", category: "Ressource Brute" },
        { baseId: 'T4_ORE', name: "Minerai", category: "Ressource Brute" },
        { baseId: 'T4_FIBER', name: "Fibre", category: "Ressource Brute" },
        { baseId: 'T4_HIDE', name: "Peau", category: "Ressource Brute" },
        { baseId: 'T4_ROCK', name: "Pierre", category: "Ressource Brute" },
        { baseId: 'T4_PLANKS', name: "Planches", category: "Ressource Raffinée" },
        { baseId: 'T4_METALBAR', name: "Barre de métal", category: "Ressource Raffinée" },
        { baseId: 'T4_LEATHER', name: "Cuir", category: "Ressource Raffinée" },
        { baseId: 'T4_CLOTH', name: "Tissu", category: "Ressource Raffinée" },
        { baseId: 'T4_STONEBLOCK', name: "Bloc de pierre", category: "Ressource Raffinée" },
    ].flatMap(item => {
        const items = [];
        for (let i = 4; i <= 8; i++) {
            const currentBaseId = item.baseId.replace('T4', `T${i}`);
            const currentName = item.name;
            items.push({ id: currentBaseId, name_fr: `${currentName} T${i}.0`, category: item.category });
            for (let j = 1; j <= 4; j++) {
                items.push({ id: `${currentBaseId}@${j}`, name_fr: `${currentName} T${i}.${j}`, category: item.category });
            }
        }
        return items;
    }),

    // ===================================================================
    // --- OUTILS & ÉQUIPEMENT DE RÉCOLTE (T4-T8, .0-.4) ---
    // ===================================================================
    ...[
        { baseId: 'T4_2H_TOOL_PICK', name: "Pioche", category: "Outil" },
        { baseId: 'T4_2H_TOOL_AXE', name: "Hache", category: "Outil" },
        { baseId: 'T4_2H_TOOL_SICKLE', name: "Faucille", category: "Outil" },
        { baseId: 'T4_2H_TOOL_KNIFE', name: "Couteau de dépeçage", category: "Outil" },
        { baseId: 'T4_2H_TOOL_HAMMER', name: "Marteau de carrier", category: "Outil" },
        { baseId: 'T4_2H_TOOL_FISHINGROD', name: "Canne à pêche", category: "Outil" },
        { baseId: 'T4_HEAD_GATHERER_FIBER', name: "Chapeau de récolteur de fibre", category: "Équipement de récolte" },
        { baseId: 'T4_ARMOR_GATHERER_FIBER', name: "Veste de récolteur de fibre", category: "Équipement de récolte" },
        { baseId: 'T4_SHOES_GATHERER_FIBER', name: "Bottes de récolteur de fibre", category: "Équipement de récolte" },
        { baseId: 'T4_BACKPACK_GATHERER_FIBER', name: "Sac à dos de récolteur de fibre", category: "Équipement de récolte" },
    ].flatMap(item => {
        const items = [];
        for (let i = 4; i <= 8; i++) {
            const currentBaseId = item.baseId.replace('T4', `T${i}`);
            const currentName = item.name;
            items.push({ id: currentBaseId, name_fr: `${currentName} T${i}.0`, category: item.category });
            for (let j = 1; j <= 4; j++) {
                items.push({ id: `${currentBaseId}@${j}`, name_fr: `${currentName} T${i}.${j}`, category: item.category });
            }
        }
        return items;
    }),

    // ===================================================================
    // --- AUTRES ITEMS ---
    // ===================================================================

    // --- MONTURES (non enchantables pour la plupart) ---
    { id: "T3_MOUNT_HORSE", name_fr: "Cheval de monte T3", category: "Monture" },
    { id: "T4_MOUNT_HORSE", name_fr: "Cheval de monte T4", category: "Monture" },
    { id: "T5_MOUNT_HORSE", name_fr: "Cheval de monte T5", category: "Monture" },
    { id: "T6_MOUNT_HORSE", name_fr: "Cheval de monte T6", category: "Monture" },
    { id: "T7_MOUNT_HORSE", name_fr: "Cheval de monte T7", category: "Monture" },
    { id: "T8_MOUNT_HORSE", name_fr: "Cheval de monte T8", category: "Monture" },
    { id: "T5_MOUNT_ARMORED_HORSE", name_fr: "Cheval de guerre T5", category: "Monture" },
    { id: "T6_MOUNT_ARMORED_HORSE", name_fr: "Cheval de guerre T6", category: "Monture" },
    { id: "T7_MOUNT_ARMORED_HORSE", name_fr: "Cheval de guerre T7", category: "Monture" },
    { id: "T8_MOUNT_ARMORED_HORSE", name_fr: "Cheval de guerre T8", category: "Monture" },
    { id: "T3_MOUNT_OX", name_fr: "Bœuf de transport T3", category: "Monture" },
    { id: "T4_MOUNT_OX", name_fr: "Bœuf de transport T4", category: "Monture" },
    { id: "T5_MOUNT_OX", name_fr: "Bœuf de transport T5", category: "Monture" },
    { id: "T6_MOUNT_OX", name_fr: "Bœuf de transport T6", category: "Monture" },
    { id: "T7_MOUNT_OX", name_fr: "Bœuf de transport T7", category: "Monture" },
    { id: "T8_MOUNT_OX", name_fr: "Bœuf de transport T8", category: "Monture" },
    { id: "T5_MOUNT_GIANTSTAG", name_fr: "Cerf géant T5", category: "Monture" },
    { id: "T6_MOUNT_DIREWOLF", name_fr: "Loup-sinistre T6", category: "Monture" },
    { id: "T7_MOUNT_DIREBOAR", name_fr: "Sanglier-sinistre T7", category: "Monture" },
    { id: "T8_MOUNT_MAMMOTH", name_fr: "Mammouth de transport T8", category: "Monture" },

    // --- CONSOMMABLES ---
    { id: "T4_POTION_HEAL", name_fr: "Potion de soin T4", category: "Potion" },
    { id: "T6_POTION_HEAL", name_fr: "Potion de soin T6", category: "Potion" },
    { id: "T8_POTION_HEAL", name_fr: "Potion de soin T8", category: "Potion" },
    { id: "T4_POTION_ENERGY", name_fr: "Potion d'énergie T4", category: "Potion" },
    { id: "T6_POTION_ENERGY", name_fr: "Potion d'énergie T6", category: "Potion" },
    { id: "T8_POTION_ENERGY", name_fr: "Potion d'énergie T8", category: "Potion" },
    { id: "T3_MEAL_STEW", name_fr: "Ragoût de chèvre T3", category: "Nourriture" },
    { id: "T5_MEAL_STEW", name_fr: "Ragoût de mouton T5", category: "Nourriture" },
    { id: "T7_MEAL_STEW", name_fr: "Ragoût de porc T7", category: "Nourriture" },
    { id: "T3_MEAL_SANDWICH", name_fr: "Sandwich au chèvre T3", category: "Nourriture" },
    { id: "T5_MEAL_SANDWICH", name_fr: "Sandwich au mouton T5", category: "Nourriture" },
    { id: "T7_MEAL_SANDWICH", name_fr: "Sandwich au porc T7", category: "Nourriture" },

    // --- LUXE & ARTEFACTS ---
    { id: "T4_LUXURYGOODS_GLASS", name_fr: "Verre d'adepte", category: "Luxe" },
    { id: "T5_LUXURYGOODS_GLASS", name_fr: "Verre d'expert", category: "Luxe" },
    { id: "T6_LUXURYGOODS_GLASS", name_fr: "Verre de maître", category: "Luxe" },
    { id: "T7_LUXURYGOODS_GLASS", name_fr: "Verre de grand maître", category: "Luxe" },
    { id: "T8_LUXURYGOODS_GLASS", name_fr: "Verre de sage", category: "Luxe" },
    { id: "T4_RUNE", name_fr: "Rune d'adepte", category: "Artefact" },
    { id: "T5_RUNE", name_fr: "Rune d'expert", category: "Artefact" },
    { id: "T6_RUNE", name_fr: "Rune de maître", category: "Artefact" },
    { id: "T7_RUNE", name_fr: "Rune de grand maître", category: "Artefact" },
    { id: "T8_RUNE", name_fr: "Rune de sage", category: "Artefact" },
    { id: "T4_SOUL", name_fr: "Âme d'adepte", category: "Artefact" },
    { id: "T5_SOUL", name_fr: "Âme d'expert", category: "Artefact" },
    { id: "T6_SOUL", name_fr: "Âme de maître", category: "Artefact" },
    { id: "T7_SOUL", name_fr: "Âme de grand maître", category: "Artefact" },
    { id: "T8_SOUL", name_fr: "Âme de sage", category: "Artefact" },
    { id: "T4_RELIC", name_fr: "Relique d'adepte", category: "Artefact" },
    { id: "T5_RELIC", name_fr: "Relique d'expert", category: "Artefact" },
    { id: "T6_RELIC", name_fr: "Relique de maître", category: "Artefact" },
    { id: "T7_RELIC", name_fr: "Relique de grand maître", category: "Artefact" },
    { id: "T8_RELIC", name_fr: "Relique de sage", category: "Artefact" },
    { id: "T4_SHARD_AVALONIAN", name_fr: "Éclat avalonien", category: "Artefact" },
    { id: "T5_SHARD_AVALONIAN", name_fr: "Éclat avalonien", category: "Artefact" },
    { id: "T6_SHARD_AVALONIAN", name_fr: "Éclat avalonien", category: "Artefact" },
    { id: "T7_SHARD_AVALONIAN", name_fr: "Éclat avalonien", category: "Artefact" },
    { id: "T8_SHARD_AVALONIAN", name_fr: "Éclat avalonien", category: "Artefact" },

    // --- JOURNAUX ---
    ...[
        { baseId: 'T2_JOURNAL_FIBER', name: "Journal de récolteur de fibre", category: "Journal" },
        { baseId: 'T2_JOURNAL_HIDE', name: "Journal de dépeceur", category: "Journal" }, // Correction: baseId était T2_JOURNAL_FIBER
        { baseId: 'T2_JOURNAL_ORE', name: "Journal de prospecteur", category: "Journal" }, // Correction: baseId était T2_JOURNAL_FIBER
        { baseId: 'T2_JOURNAL_ROCK', name: "Journal de tailleur de pierre", category: "Journal" }, // Correction: baseId était T2_JOURNAL_FIBER
        { baseId: 'T2_JOURNAL_WOOD', name: "Journal de bûcheron", category: "Journal" }, // Correction: baseId était T2_JOURNAL_FIBER
        { baseId: 'T2_JOURNAL_MERCENARY', name: "Journal de mercenaire", category: "Journal" }, // Correction: baseId était T2_JOURNAL_FIBER
        { baseId: 'T2_JOURNAL_BLACKSMITH', name: "Journal de forgeron", category: "Journal" }, // Correction: baseId était T2_JOURNAL_FIBER
        { baseId: 'T2_JOURNAL_FLETCHER', name: "Journal d'artisan archer", category: "Journal" }, // Correction: baseId était T2_JOURNAL_FIBER
        { baseId: 'T2_JOURNAL_IMBUER', name: "Journal d'enchanteur", category: "Journal" }, // Correction: baseId était T2_JOURNAL_FIBER
        { baseId: 'T2_JOURNAL_TINKER', name: "Journal de bricoleur", category: "Journal" }, // Correction: baseId était T2_JOURNAL_FIBER
    ].flatMap(item => {
        const items = [];
        for (let i = 2; i <= 8; i++) {
            const currentBaseId = item.baseId.replace('T2', `T${i}`);
            const currentName = item.name;
            items.push({ id: currentBaseId, name_fr: `${currentName} T${i} (vide)`, category: item.category });
            items.push({ id: `${currentBaseId}_FULL`, name_fr: `${currentName} T${i} (plein)`, category: item.category });
        }
        return items;
    }),
];
