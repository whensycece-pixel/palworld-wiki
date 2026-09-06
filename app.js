const IMAGE_ROOT = 'https://www.palworld-db.com/pals/';

const featuredPals = [
  { name: 'Lamball', no: '001', element: 'neutral', elementLabel: 'Neutral', color: '#d9d5c9', glow: 'rgba(239,233,204,.16)', image: `${IMAGE_ROOT}SheepBall.png`, role: 'Çiftlik / yün', level: 1, partner: 'Fluffy Shield', habitat: 'Çayırlar · G1 yuvası', hp: 70, atk: 70, def: 70, capture: 1.5, work: ['El İşi Lv1', 'Taşıma Lv1', 'Çiftçilik Lv1'], note: 'Erken oyunun en güvenilir yün kaynağı. Çiftliğe atandığında Wool üretir.' },
  { name: 'Cattiva', no: '002', element: 'neutral', elementLabel: 'Neutral', color: '#d9d5c9', glow: 'rgba(239,233,204,.16)', image: `${IMAGE_ROOT}PinkCat.png`, role: 'El işi / taşıma', level: 1, partner: 'Cat Helper', habitat: 'Çayırlar · gündüz', hp: 70, atk: 70, def: 70, capture: 1.5, work: ['El İşi Lv1', 'Toplama Lv1', 'Taşıma Lv1'], note: 'İlk üssünde el işçiliği ve taşıma için iyi bir başlangıç Pal’ı.' },
  { name: 'Chikipi', no: '003', element: 'neutral', elementLabel: 'Neutral', color: '#d9d5c9', glow: 'rgba(239,233,204,.16)', image: `${IMAGE_ROOT}ChickenPal.png`, role: 'Çiftlik / yumurta', level: 1, partner: 'Egg Layer', habitat: 'Çayırlar · gündüz', hp: 60, atk: 70, def: 60, capture: 1.5, work: ['Çiftçilik Lv1'], note: 'Çiftlikte Egg üretir. Erken breeding zincirlerinin en kolay ebeveynlerinden biri.' },
  { name: 'Lifmunk', no: '004', element: 'grass', elementLabel: 'Çim', color: '#8dd576', glow: 'rgba(141,213,118,.18)', image: `${IMAGE_ROOT}Carbunclo.png`, role: 'Ekim / toplama', level: 4, partner: 'Lifmunk Recoil', habitat: 'Sea Breeze Coast · gündüz', hp: 75, atk: 70, def: 70, capture: .9, work: ['Ekim Lv1', 'El İşi Lv1', 'Toplama Lv1', 'Kerestecilik Lv1'], note: 'Lifmunk’s Submachine Gun gear’i açıldığında partner skill’i devreye girer.' },
  { name: 'Foxparks', no: '029', element: 'fire', elementLabel: 'Ateş', color: '#fd9250', glow: 'rgba(253,146,80,.2)', image: `${IMAGE_ROOT}Kitsunebi.png`, role: 'Yakma / alev silahı', level: 5, partner: 'Huggy Fire', habitat: 'Kurak ada · gece', hp: 65, atk: 75, def: 70, capture: 1.2, work: ['Yakma Lv1'], note: 'Erken oyunda hem ateş yakar hem de Huggy Fire ile elde alev silahı olur.' },
  { name: 'Pengullet', no: '017', element: 'water', elementLabel: 'Su / Buz', color: '#5ccaf3', glow: 'rgba(92,202,243,.18)', image: `${IMAGE_ROOT}Penguin.png`, role: 'Sulama / fırlatıcı', level: 8, partner: 'Pengullet Cannon', habitat: 'Sea Breeze Coast · gündüz', hp: 70, atk: 75, def: 70, capture: 1.2, work: ['Sulama Lv1', 'Soğutma Lv1', 'El İşi Lv1'], note: 'Pengullet Launcher ile fırlatılabilir; çift elementli erken oyun desteği.' },
  { name: 'Anubis', no: '139', element: 'ground', elementLabel: 'Toprak', color: '#d1a46d', glow: 'rgba(209,164,109,.2)', image: `${IMAGE_ROOT}Anubis.png`, role: 'El işi / madencilik', level: 55, partner: 'Guardian of the Desert', habitat: 'Sandstone Gate Islet · Alpha', hp: 120, atk: 130, def: 100, capture: 1, work: ['El İşi Lv6', 'Madencilik Lv6', 'Taşıma Lv4'], note: 'Handiwork Lv6 ile güçlü bir base Pal’ı. Alpha Anubis sabit konumda Lv55 çıkar.' },
  { name: 'Lyleen', no: '186', element: 'grass', elementLabel: 'Çim', color: '#8dd576', glow: 'rgba(141,213,118,.18)', image: `${IMAGE_ROOT}LilyQueen.png`, role: 'Ekim / ilaç üretimi', level: 40, partner: 'Goddess of Harvest', habitat: 'Free Pal Alliance Kulesi', hp: 120, atk: 120, def: 110, capture: .9, work: ['Ekim Lv4', 'El İşi Lv3', 'İlaç Üretimi Lv3'], note: 'Goddess of Harvest oyuncuyu iyileştirir; kule boss versiyonu Çim elementindedir.' },
  { name: 'Jetragon', no: '202', element: 'dragon', elementLabel: 'Ejderha', color: '#6aa6ed', glow: 'rgba(106,166,237,.2)', image: `${IMAGE_ROOT}JetDragon.png`, role: 'Efsanevi hava bineği', level: 60, partner: 'Aerial Missile', habitat: 'Mount Obsidian · Efsanevi', hp: 115, atk: 140, def: 120, capture: 1, work: ['Toplama Lv3'], note: 'Aerial Missile partner skill’i sayesinde oyundaki en hızlı hava bineklerinden biri.' },
];

// Palpedia’nın tam katalog başlıkları: 299 kayıt (Paldeck türleri + varyantlar + katalog yaratıkları).
const palIndex = `
Lamball|001|Neutral
Cattiva|002|Neutral
Chikipi|003|Neutral
Lifmunk|004|Grass
Fuack|005|Water
Fuack Ignis|005B|Water
Vixy|006|Neutral
Celaray|007|Water
Celaray Lux|007B|Water
Cremis|008|Neutral
Croajiro|009|Water
Croajiro Noct|009B|Water
Herbil|010|Grass
Teafant|011|Water
Gumoss|012|Grass
Pupperai|013|Ground
Clovee|014|Grass
Jolthog|015|Electric
Jolthog Cryst|015B|Ice
Depresso|016|Dark
Pengullet|017|Water
Pengullet Lux|017B|Water
Penking|018|Water
Penking Lux|018B|Water
Hoocrates|019|Dark
Melpaca|020|Neutral
Kingpaca|021|Neutral
Kingpaca Cryst|021B|Ice
Daedream|022|Dark
Tanzee|023|Grass
Tanzee Ignis|023B|Fire
Nox|024|Dark
Flambelle|025|Fire
Rooby|026|Fire
Mau|027|Dark
Mau Cryst|027B|Ice
Rushoar|028|Ground
Foxparks|029|Fire
Foxparks Cryst|029B|Ice
Killamari|030|Dark
Killamari Primo|030B|Neutral
Fuddler|031|Ground
Eikthyrdeer|032|Neutral
Eikthyrdeer Terra|032B|Ground
Direhowl|033|Neutral
Caprity|034|Grass
Caprity Noct|034B|Dark
Swee|035|Ice
Sweepa|036|Ice
Turtacle|037|Water
Turtacle Terra|037B|Water
Hangyu|038|Ground
Hangyu Cryst|038B|Ice
Woolipop|039|Neutral
Woolipop Terra|039B|Ground
Mozzarina|040|Neutral
Azurobe|041|Water
Azurobe Cryst|041B|Ice
Sparkit|042|Electric
Kelpsea|043|Water
Kelpsea Ignis|043B|Fire
Ribbuny|044|Neutral
Ribbuny Botan|044B|Grass
Jelliette|045|Water
Jellroy|046|Water
Amione|047|Water
Gloopie|048|Water
Gloopie Primo|048B|Water
Galeclaw|049|Neutral
Wispaw|050|Dark
Nitewing|051|Neutral
Tombat|052|Dark
Tocotoco|053|Neutral
Univolt|054|Electric
Univolt Cryst|054B|Ice
Gobfin|055|Water
Gobfin Ignis|055B|Fire
Loupmoon|056|Dark
Loupmoon Cryst|056B|Ice
Cawgnito|057|Neutral
Arsox|058|Fire
Muffly|059|Ice
Bristla|060|Grass
Cinnamoth|061|Grass
Puffolt|062|Electric
Elphidran|063|Dragon
Elphidran Aqua|063B|Dragon
Vanwyrm|064|Fire
Vanwyrm Cryst|064B|Ice
Felbat|065|Dark
Vaelet|066|Grass
Beegarde|067|Grass
Elizabee|068|Grass
Lovander|069|Dark
Grintale|070|Grass
Tarantriss|071|Dark
Polapup|072|Ice
Polapup Terra|072B|Ice
Leezpunk|073|Dark
Leezpunk Ignis|073B|Fire
Gorirat|074|Neutral
Gorirat Terra|074B|Ground
Surfent|075|Water
Surfent Terra|075B|Ground
Robinquill|076|Grass
Robinquill Terra|076B|Grass
Flopie|077|Grass
Wixen|078|Fire
Wixen Noct|078B|Fire
Katress|079|Dark
Katress Ignis|079B|Dark
Helzephyr|080|Dark
Helzephyr Lux|080B|Dark
Elgrove|081|Grass
Elgrove Cryst|081B|Ice
Lunaris|082|Neutral
Fenglope|083|Neutral
Fenglope Lux|083B|Electric
Dinossom|084|Grass
Dinossom Lux|084B|Electric
Bushi|085|Fire
Bushi Noct|085B|Fire
Munchill|086|Ice
Mammorest|087|Grass
Mammorest Cryst|087B|Ice
Finsider|088|Water
Finsider Ignis|088B|Water
Petallia|089|Grass
Petallia Ignis|089B|Grass
Leafan|090|Grass
Incineram|091|Neutral
Incineram Noct|091B|Dark
Dazzi|092|Electric
Dazzi Noct|092B|Dark
Pyrin|093|Dark
Pyrin Noct|093B|Fire
Relaxaurus|094|Dragon
Relaxaurus Lux|094B|Dragon
Foxcicle|095|Ice
Beakon|096|Electric
Beakon Cryst|096B|Ice
Ghangler|097|Dark
Ghangler Ignis|097B|Fire
Rayhound|098|Neutral
Rayhound Cryst|098B|Ice
Menasting|099|Dark
Menasting Terra|099B|Ground
Needoll|100|Grass
Needoll Noct|100B|Dark
Reindrix|101|Fire
Mossanda|102|Grass
Mossanda Lux|102B|Electric
Chillet|103|Ice
Chillet Ignis|103B|Fire
Ragnahawk|104|Fire
Moldron|105|Fire
Moldron Cryst|105B|Ice
Palumba|106|Grass
Digtoise|107|Ground
Broncherry|108|Grass
Broncherry Aqua|108B|Grass
Dumud|109|Ground
Dumud Gild|109B|Ground
Braloha|110|Water
Kitsun|111|Fire
Kitsun Noct|111B|Dark
Blazehowl|112|Fire
Blazehowl Noct|112B|Fire
Warsect|113|Ground
Warsect Terra|113B|Ground
Frostplume|114|Ice
Majex|115|Dark
Sibelyx|116|Ice
Sibelyx Primo|116B|Neutral
Maraith|117|Dark
Shroomer|118|Grass
Shroomer Noct|118B|Grass
Icelyn|119|Ice
Gildra|120|Dark
Jormuntide|121|Dragon
Jormuntide Ignis|121B|Dragon
Suzaku|122|Fire
Suzaku Aqua|122B|Water
Dazemu|123|Ground
Quivern|124|Dragon
Quivern Botan|124B|Dragon
Lullu|125|Grass
Kikit|126|Ground
Yakumo|127|Neutral
Skutlass|128|Water
Skutlass Ignis|128B|Water
Reptyro|129|Fire
Reptyro Cryst|129B|Ice
Starryon|130|Dark
Starryon Primo|130B|Neutral
Pierdon|131|Ground
Pierdon Cryst|131B|Ice
Cryolinx|132|Ice
Cryolinx Terra|132B|Ground
Snugloo|133|Ice
Wumpo|134|Ice
Wumpo Botan|134B|Grass
Sootseer|135|Dark
Carnibora|136|Grass
Blazamut|137|Fire
Blazamut Ryu|137B|Dragon
Dualith|138|Ground
Dualith Noct|138B|Ground
Anubis|139|Ground
Sekhmet|140|Ground
Prixter|141|Dark
Prixter Lux|141B|Electric
Tetroise|142|Ground
Tetroise Primo|142B|Neutral
Nyafia|143|Dark
Mimog|144|Neutral
Xenovader|145|Dark
Xenogard|146|Dragon
Prunelia|147|Grass
Nitemary|148|Dark
Nitemary Botan|148B|Grass
Smokie|149|Dark
Smokie Cryst|149B|Dark
Omascul|150|Dark
Whalaska|151|Ice
Whalaska Ignis|151B|Ice
Verdash|152|Grass
Splatterina|153|Dark
Gildane|154|Ground
Dogen|155|Neutral
Bulldosu|156|Ground
Celesdir|157|Neutral
Celesdir Noct|157B|Dark
Astegon|158|Dragon
Knocklem|159|Ground
Knocklem Ignis|159B|Fire
Silvegis|160|Dragon
Azurmane|161|Electric
Valentail|162|Neutral
Snock|163|Electric
Snock Lux|163B|Electric
Souffline|164|Grass
Lapiron|165|Ground
Hoodle|166|Dark
Slowatt|167|Electric
Bakemi|168|Dark
Solmora|169|Water
Solmora Lux|169B|Water
Lapure|170|Neutral
Eidrolon|171|Dragon
Eidrolon Ignis|171B|Dragon
Dynamoff|172|Electric
Tropicaw|173|Grass
Flaracle|174|Fire
Ophydia|175|Grass
Dupin|176|Fire
Roujay|177|Dark
Venusa|178|Dark
Mycora|179|Grass
Loomen|180|Dark
Wistella|181|Dark
Solenne|182|Dark
Renjishi|183|Fire
Aegidron|184|Dragon
Grizzbolt|185|Electric
Lyleen|186|Grass
Lyleen Noct|186B|Dark
Orserk|187|Dragon
Faleris|188|Neutral
Faleris Aqua|188B|Water
Shadowbeak|189|Dark
Selyne|190|Dark
Bastigor|191|Ice
Shaolong|192|Dragon
Silvance|193|Grass
Dandilord|194|Grass
Bellanoir|195|Dark
Bellanoir Libero|195B|Dark
Xenolord|196|Dark
Hartalis|197|Neutral
Paladius|198|Neutral
Necromus|199|Dark
Frostallion|200|Ice
Frostallion Noct|200B|Dark
Neptilius|201|Water
Jetragon|202|Dragon
Panthalus|203|Water
Astralym|204|Neutral
Green Slime|T01|Grass
Blue Slime|T02|Water
Red Slime|T03|Fire
Purple Slime|T04|Dark
Illuminant Slime|T05|Neutral
Rainbow Slime|T06|Neutral
Enchanted Sword|T07|Neutral
Cave Bat|T08|Neutral
Illuminant Bat|T09|Neutral
Eye of Cthulhu|T10|Dark
Demon Eye|T11|Dark
`.trim().split('\n').map(row => { const [name, no, elementLabel] = row.split('|'); return { name, no, elementLabel, element: normalizeElement(elementLabel) }; });

function normalizeElement(element) { return ({ Neutral: 'neutral', Fire: 'fire', Water: 'water', Grass: 'grass', Electric: 'electric', Ice: 'ice', Ground: 'ground', Dark: 'dark', Dragon: 'dragon' }[element] || 'neutral'); }
function slug(name) { return name.replace(/[^a-zA-Z0-9]/g, ''); }
const palImageManifest = {
  "Amione": "https://paldb.gg/pal/ClioneTwins.webp",
  "Arsox": "https://paldb.gg/pal/FlameBuffalo.webp",
  "Azurobe": "https://paldb.gg/pal/BlueDragon.webp",
  "Azurobe Cryst": "https://paldb.gg/pal/BlueDragon_Ice.webp",
  "Beakon": "https://paldb.gg/pal/ThunderBird.webp",
  "Beakon Cryst": "https://paldb.gg/pal/ThunderBird_Ice.webp",
  "Beegarde": "https://paldb.gg/pal/SoldierBee.webp",
  "Blazehowl": "https://paldb.gg/pal/Manticore.webp",
  "Blazehowl Noct": "https://paldb.gg/pal/Manticore_Dark.webp",
  "Braloha": "https://paldb.gg/pal/Plesiosaur.webp",
  "Bristla": "https://paldb.gg/pal/LittleBriarRose.webp",
  "Broncherry": "https://paldb.gg/pal/SakuraSaurus.webp",
  "Broncherry Aqua": "https://paldb.gg/pal/SakuraSaurus_Water.webp",
  "Bushi": "https://paldb.gg/pal/Ronin.webp",
  "Bushi Noct": "https://paldb.gg/pal/Ronin_Dark.webp",
  "Caprity": "https://paldb.gg/pal/BerryGoat.webp",
  "Caprity Noct": "https://paldb.gg/pal/BerryGoat_Dark.webp",
  "Cattiva": "https://paldb.gg/pal/PinkCat.webp",
  "Cawgnito": "https://paldb.gg/pal/DarkCrow.webp",
  "Celaray": "https://paldb.gg/pal/FlyingManta.webp",
  "Celaray Lux": "https://paldb.gg/pal/FlyingManta_Thunder.webp",
  "Chikipi": "https://paldb.gg/pal/ChickenPal.webp",
  "Chillet": "https://paldb.gg/pal/WeaselDragon.webp",
  "Chillet Ignis": "https://paldb.gg/pal/WeaselDragon_Fire.webp",
  "Cinnamoth": "https://paldb.gg/pal/CuteButterfly.webp",
  "Clovee": "https://paldb.gg/pal/CloverFairy.webp",
  "Cremis": "https://paldb.gg/pal/WoolFox.webp",
  "Croajiro": "https://paldb.gg/pal/KendoFrog.webp",
  "Croajiro Noct": "https://paldb.gg/pal/KendoFrog_Dark.webp",
  "Cryolinx": "https://paldb.gg/pal/WhiteTiger.webp",
  "Cryolinx Terra": "https://paldb.gg/pal/WhiteTiger_Ground.webp",
  "Daedream": "https://paldb.gg/pal/DreamDemon.webp",
  "Dazemu": "https://paldb.gg/pal/FeatherOstrich.webp",
  "Dazzi": "https://paldb.gg/pal/RaijinDaughter.webp",
  "Dazzi Noct": "https://paldb.gg/pal/RaijinDaughter_Water.webp",
  "Depresso": "https://paldb.gg/pal/NegativeKoala.webp",
  "Digtoise": "https://paldb.gg/pal/DrillGame.webp",
  "Dinossom": "https://paldb.gg/pal/FlowerDinosaur.webp",
  "Dinossom Lux": "https://paldb.gg/pal/FlowerDinosaur_Electric.webp",
  "Direhowl": "https://paldb.gg/pal/Garm.webp",
  "Dumud": "https://paldb.gg/pal/LazyCatfish.webp",
  "Dumud Gild": "https://paldb.gg/pal/LazyCatfish_Gold.webp",
  "Eikthyrdeer": "https://paldb.gg/pal/Deer.webp",
  "Eikthyrdeer Terra": "https://paldb.gg/pal/Deer_Ground.webp",
  "Elgrove": "https://paldb.gg/pal/GrassMinotaur.webp",
  "Elgrove Cryst": "https://paldb.gg/pal/GrassMinotaur_Ice.webp",
  "Elizabee": "https://paldb.gg/pal/QueenBee.webp",
  "Elphidran": "https://paldb.gg/pal/FairyDragon.webp",
  "Elphidran Aqua": "https://paldb.gg/pal/FairyDragon_Water.webp",
  "Felbat": "https://paldb.gg/pal/CatVampire.webp",
  "Fenglope": "https://paldb.gg/pal/FengyunDeeper.webp",
  "Fenglope Lux": "https://paldb.gg/pal/FengyunDeeper_Electric.webp",
  "Finsider": "https://paldb.gg/pal/StuffedShark.webp",
  "Finsider Ignis": "https://paldb.gg/pal/StuffedShark_Fire.webp",
  "Flambelle": "https://paldb.gg/pal/LavaGirl.webp",
  "Flopie": "https://paldb.gg/pal/FlowerRabbit.webp",
  "Foxcicle": "https://paldb.gg/pal/IceFox.webp",
  "Foxparks": "https://paldb.gg/pal/Kitsunebi.webp",
  "Foxparks Cryst": "https://paldb.gg/pal/Kitsunebi_Ice.webp",
  "Frostplume": "https://paldb.gg/pal/SnowPeafowl.webp",
  "Fuack": "https://paldb.gg/pal/BluePlatypus.webp",
  "Fuack Ignis": "https://paldb.gg/pal/BluePlatypus_Fire.webp",
  "Fuddler": "https://paldb.gg/pal/CuteMole.webp",
  "Galeclaw": "https://paldb.gg/pal/Eagle.webp",
  "Ghangler": "https://paldb.gg/pal/GhostAnglerfish.webp",
  "Ghangler Ignis": "https://paldb.gg/pal/GhostAnglerfish_Fire.webp",
  "Gildra": "https://paldb.gg/pal/MummyPal.webp",
  "Gloopie": "https://paldb.gg/pal/OctopusGirl.webp",
  "Gloopie Primo": "https://paldb.gg/pal/OctopusGirl_Neutral.webp",
  "Gobfin": "https://paldb.gg/pal/SharkKid.webp",
  "Gobfin Ignis": "https://paldb.gg/pal/SharkKid_Fire.webp",
  "Gorirat": "https://paldb.gg/pal/Gorilla.webp",
  "Gorirat Terra": "https://paldb.gg/pal/Gorilla_Ground.webp",
  "Grintale": "https://paldb.gg/pal/NaughtyCat.webp",
  "Gumoss": "https://paldb.gg/pal/PlantSlime.webp",
  "Hangyu": "https://paldb.gg/pal/WindChimes.webp",
  "Hangyu Cryst": "https://paldb.gg/pal/WindChimes_Ice.webp",
  "Helzephyr": "https://paldb.gg/pal/HadesBird.webp",
  "Helzephyr Lux": "https://paldb.gg/pal/HadesBird_Electric.webp",
  "Herbil": "https://paldb.gg/pal/LeafMomonga.webp",
  "Hoocrates": "https://paldb.gg/pal/WizardOwl.webp",
  "Icelyn": "https://paldb.gg/pal/IceWitch.webp",
  "Incineram": "https://paldb.gg/pal/Baphomet.webp",
  "Incineram Noct": "https://paldb.gg/pal/Baphomet_Dark.webp",
  "Jelliette": "https://paldb.gg/pal/JellyfishFairy.webp",
  "Jellroy": "https://paldb.gg/pal/JellyfishGhost.webp",
  "Jolthog": "https://paldb.gg/pal/Hedgehog.webp",
  "Jolthog Cryst": "https://paldb.gg/pal/Hedgehog_Ice.webp",
  "Jormuntide": "https://paldb.gg/pal/Umihebi.webp",
  "Jormuntide Ignis": "https://paldb.gg/pal/Umihebi_Fire.webp",
  "Katress": "https://paldb.gg/pal/CatMage.webp",
  "Katress Ignis": "https://paldb.gg/pal/CatMage_Fire.webp",
  "Kelpsea": "https://paldb.gg/pal/Kelpie.webp",
  "Kelpsea Ignis": "https://paldb.gg/pal/Kelpie_Fire.webp",
  "Kikit": "https://paldb.gg/pal/SmallArmadillo.webp",
  "Killamari": "https://paldb.gg/pal/NegativeOctopus.webp",
  "Killamari Primo": "https://paldb.gg/pal/NegativeOctopus_Neutral.webp",
  "Kingpaca": "https://paldb.gg/pal/KingAlpaca.webp",
  "Kingpaca Cryst": "https://paldb.gg/pal/KingAlpaca_Ice.webp",
  "Kitsun": "https://paldb.gg/pal/AmaterasuWolf.webp",
  "Kitsun Noct": "https://paldb.gg/pal/AmaterasuWolf_Dark.webp",
  "Lamball": "https://paldb.gg/pal/SheepBall.webp",
  "Leafan": "https://paldb.gg/pal/PandaGirl.webp",
  "Leezpunk": "https://paldb.gg/pal/LizardMan.webp",
  "Leezpunk Ignis": "https://paldb.gg/pal/LizardMan_Fire.webp",
  "Lifmunk": "https://paldb.gg/pal/Carbunclo.webp",
  "Loupmoon": "https://paldb.gg/pal/Werewolf.webp",
  "Loupmoon Cryst": "https://paldb.gg/pal/Werewolf_Ice.webp",
  "Lovander": "https://paldb.gg/pal/PinkLizard.webp",
  "Lullu": "https://paldb.gg/pal/LeafPrincess.webp",
  "Lunaris": "https://paldb.gg/pal/Mutant.webp",
  "Majex": "https://paldb.gg/pal/DarkFlameFox.webp",
  "Mammorest": "https://paldb.gg/pal/GrassMammoth.webp",
  "Mammorest Cryst": "https://paldb.gg/pal/GrassMammoth_Ice.webp",
  "Maraith": "https://paldb.gg/pal/GhostBeast.webp",
  "Mau": "https://paldb.gg/pal/Bastet.webp",
  "Mau Cryst": "https://paldb.gg/pal/Bastet_Ice.webp",
  "Melpaca": "https://paldb.gg/pal/Alpaca.webp",
  "Menasting": "https://paldb.gg/pal/DarkScorpion.webp",
  "Menasting Terra": "https://paldb.gg/pal/DarkScorpion_Ground.webp",
  "Moldron": "https://paldb.gg/pal/VolcanoDragon.webp",
  "Moldron Cryst": "https://paldb.gg/pal/VolcanoDragon_Ice.webp",
  "Mossanda": "https://paldb.gg/pal/GrassPanda.webp",
  "Mossanda Lux": "https://paldb.gg/pal/GrassPanda_Electric.webp",
  "Mozzarina": "https://paldb.gg/pal/CowPal.webp",
  "Muffly": "https://paldb.gg/pal/FluffyBird.webp",
  "Munchill": "https://paldb.gg/pal/IceCrocodile.webp",
  "Needoll": "https://paldb.gg/pal/CactusDoll.webp",
  "Needoll Noct": "https://paldb.gg/pal/CactusDoll_Dark.webp",
  "Nitewing": "https://paldb.gg/pal/HawkBird.webp",
  "Nox": "https://paldb.gg/pal/NightFox.webp",
  "Palumba": "https://paldb.gg/pal/TropicalOstrich.webp",
  "Pengullet": "https://paldb.gg/pal/Penguin.webp",
  "Pengullet Lux": "https://paldb.gg/pal/Penguin_Electric.webp",
  "Penking": "https://paldb.gg/pal/CaptainPenguin.webp",
  "Penking Lux": "https://paldb.gg/pal/CaptainPenguin_Black.webp",
  "Petallia": "https://paldb.gg/pal/FlowerDoll.webp",
  "Petallia Ignis": "https://paldb.gg/pal/FlowerDoll_Fire.webp",
  "Pierdon": "https://paldb.gg/pal/RockBeast.webp",
  "Pierdon Cryst": "https://paldb.gg/pal/RockBeast_Ice.webp",
  "Polapup": "https://paldb.gg/pal/IceSeal.webp",
  "Polapup Terra": "https://paldb.gg/pal/IceSeal_Ground.webp",
  "Puffolt": "https://paldb.gg/pal/ElecPomeranian.webp",
  "Pupperai": "https://paldb.gg/pal/SamuraiDog.webp",
  "Pyrin": "https://paldb.gg/pal/FireKirin.webp",
  "Pyrin Noct": "https://paldb.gg/pal/FireKirin_Dark.webp",
  "Quivern": "https://paldb.gg/pal/SkyDragon.webp",
  "Quivern Botan": "https://paldb.gg/pal/SkyDragon_Grass.webp",
  "Ragnahawk": "https://paldb.gg/pal/RedArmorBird.webp",
  "Rayhound": "https://paldb.gg/pal/ThunderDog.webp",
  "Reindrix": "https://paldb.gg/pal/IceDeer.webp",
  "Relaxaurus": "https://paldb.gg/pal/LazyDragon.webp",
  "Relaxaurus Lux": "https://paldb.gg/pal/LazyDragon_Electric.webp",
  "Reptyro": "https://paldb.gg/pal/VolcanicMonster.webp",
  "Reptyro Cryst": "https://paldb.gg/pal/VolcanicMonster_Ice.webp",
  "Ribbuny": "https://paldb.gg/pal/PinkRabbit.webp",
  "Ribbuny Botan": "https://paldb.gg/pal/PinkRabbit_Grass.webp",
  "Robinquill": "https://paldb.gg/pal/RobinHood.webp",
  "Robinquill Terra": "https://paldb.gg/pal/RobinHood_Ground.webp",
  "Rooby": "https://paldb.gg/pal/FlameBambi.webp",
  "Rushoar": "https://paldb.gg/pal/Boar.webp",
  "Shroomer": "https://paldb.gg/pal/MushroomDragon.webp",
  "Shroomer Noct": "https://paldb.gg/pal/MushroomDragon_Dark.webp",
  "Sibelyx": "https://paldb.gg/pal/WhiteMoth.webp",
  "Sibelyx Primo": "https://paldb.gg/pal/WhiteMoth_Neutral.webp",
  "Skutlass": "https://paldb.gg/pal/SwordCutlassfish.webp",
  "Skutlass Ignis": "https://paldb.gg/pal/SwordCutlassfish_Fire.webp",
  "Snugloo": "https://paldb.gg/pal/SmallYeti.webp",
  "Sparkit": "https://paldb.gg/pal/ElecCat.webp",
  "Starryon": "https://paldb.gg/pal/NightBlueHorse.webp",
  "Starryon Primo": "https://paldb.gg/pal/NightBlueHorse_Neutral.webp",
  "Surfent": "https://paldb.gg/pal/Serpent.webp",
  "Surfent Terra": "https://paldb.gg/pal/Serpent_Ground.webp",
  "Suzaku": "https://paldb.gg/pal/Suzaku.webp",
  "Suzaku Aqua": "https://paldb.gg/pal/Suzaku_Water.webp",
  "Swee": "https://paldb.gg/pal/MopBaby.webp",
  "Sweepa": "https://paldb.gg/pal/MopKing.webp",
  "Tanzee": "https://paldb.gg/pal/Monkey.webp",
  "Tanzee Ignis": "https://paldb.gg/pal/Monkey_Fire.webp",
  "Tarantriss": "https://paldb.gg/pal/PurpleSpider.webp",
  "Teafant": "https://paldb.gg/pal/Ganesha.webp",
  "Tocotoco": "https://paldb.gg/pal/ColorfulBird.webp",
  "Tombat": "https://paldb.gg/pal/CatBat.webp",
  "Turtacle": "https://paldb.gg/pal/TentacleTurtle.webp",
  "Turtacle Terra": "https://paldb.gg/pal/TentacleTurtle_Ground.webp",
  "Univolt": "https://paldb.gg/pal/Kirin.webp",
  "Univolt Cryst": "https://paldb.gg/pal/Kirin_Ice.webp",
  "Vaelet": "https://paldb.gg/pal/VioletFairy.webp",
  "Vanwyrm": "https://paldb.gg/pal/BirdDragon.webp",
  "Vanwyrm Cryst": "https://paldb.gg/pal/BirdDragon_Ice.webp",
  "Vixy": "https://paldb.gg/pal/CuteFox.webp",
  "Warsect": "https://paldb.gg/pal/HerculesBeetle.webp",
  "Warsect Terra": "https://paldb.gg/pal/HerculesBeetle_Ground.webp",
  "Wispaw": "https://paldb.gg/pal/GhostBlackCat.webp",
  "Wixen": "https://paldb.gg/pal/FoxMage.webp",
  "Wixen Noct": "https://paldb.gg/pal/FoxMage_Dark.webp",
  "Woolipop": "https://paldb.gg/pal/SweetsSheep.webp",
  "Woolipop Terra": "https://paldb.gg/pal/SweetsSheep_Ground.webp",
  "Wumpo": "https://paldb.gg/pal/Yeti.webp",
  "Yakumo": "https://paldb.gg/pal/GuardianDog.webp"
};
Object.assign(palImageManifest, {
  "Lamball": "https://paldb.gg/pal/SheepBall.webp",
  "Cattiva": "https://paldb.gg/pal/PinkCat.webp",
  "Chikipi": "https://paldb.gg/pal/ChickenPal.webp",
  "Lifmunk": "https://paldb.gg/pal/Carbunclo.webp",
  "Fuack": "https://paldb.gg/pal/BluePlatypus.webp",
  "Fuack Ignis": "https://paldb.gg/pal/BluePlatypus_Fire.webp",
  "Vixy": "https://paldb.gg/pal/CuteFox.webp",
  "Celaray": "https://paldb.gg/pal/FlyingManta.webp",
  "Celaray Lux": "https://paldb.gg/pal/FlyingManta_Thunder.webp",
  "Cremis": "https://paldb.gg/pal/WoolFox.webp",
  "Croajiro": "https://paldb.gg/pal/KendoFrog.webp",
  "Croajiro Noct": "https://paldb.gg/pal/KendoFrog_Dark.webp",
  "Herbil": "https://paldb.gg/pal/LeafMomonga.webp",
  "Teafant": "https://paldb.gg/pal/Ganesha.webp",
  "Gumoss": "https://paldb.gg/pal/PlantSlime.webp",
  "Pupperai": "https://paldb.gg/pal/SamuraiDog.webp",
  "Clovee": "https://paldb.gg/pal/CloverFairy.webp",
  "Jolthog": "https://paldb.gg/pal/Hedgehog.webp",
  "Jolthog Cryst": "https://paldb.gg/pal/Hedgehog_Ice.webp",
  "Depresso": "https://paldb.gg/pal/NegativeKoala.webp",
  "Pengullet": "https://paldb.gg/pal/Penguin.webp",
  "Pengullet Lux": "https://paldb.gg/pal/Penguin_Electric.webp",
  "Penking": "https://paldb.gg/pal/CaptainPenguin.webp",
  "Penking Lux": "https://paldb.gg/pal/CaptainPenguin_Black.webp",
  "Hoocrates": "https://paldb.gg/pal/WizardOwl.webp",
  "Melpaca": "https://paldb.gg/pal/Alpaca.webp",
  "Kingpaca": "https://paldb.gg/pal/KingAlpaca.webp",
  "Kingpaca Cryst": "https://paldb.gg/pal/KingAlpaca_Ice.webp",
  "Daedream": "https://paldb.gg/pal/DreamDemon.webp",
  "Tanzee": "https://paldb.gg/pal/Monkey.webp",
  "Tanzee Ignis": "https://paldb.gg/pal/Monkey_Fire.webp",
  "Nox": "https://paldb.gg/pal/NightFox.webp",
  "Flambelle": "https://paldb.gg/pal/LavaGirl.webp",
  "Rooby": "https://paldb.gg/pal/FlameBambi.webp",
  "Mau": "https://paldb.gg/pal/Bastet.webp",
  "Mau Cryst": "https://paldb.gg/pal/Bastet_Ice.webp",
  "Rushoar": "https://paldb.gg/pal/Boar.webp",
  "Foxparks": "https://paldb.gg/pal/Kitsunebi.webp",
  "Foxparks Cryst": "https://paldb.gg/pal/Kitsunebi_Ice.webp",
  "Killamari": "https://paldb.gg/pal/NegativeOctopus.webp",
  "Killamari Primo": "https://paldb.gg/pal/NegativeOctopus_Neutral.webp",
  "Fuddler": "https://paldb.gg/pal/CuteMole.webp",
  "Eikthyrdeer": "https://paldb.gg/pal/Deer.webp",
  "Eikthyrdeer Terra": "https://paldb.gg/pal/Deer_Ground.webp",
  "Direhowl": "https://paldb.gg/pal/Garm.webp",
  "Caprity": "https://paldb.gg/pal/BerryGoat.webp",
  "Caprity Noct": "https://paldb.gg/pal/BerryGoat_Dark.webp",
  "Swee": "https://paldb.gg/pal/MopBaby.webp",
  "Sweepa": "https://paldb.gg/pal/MopKing.webp",
  "Turtacle": "https://paldb.gg/pal/TentacleTurtle.webp",
  "Turtacle Terra": "https://paldb.gg/pal/TentacleTurtle_Ground.webp",
  "Hangyu": "https://paldb.gg/pal/WindChimes.webp",
  "Hangyu Cryst": "https://paldb.gg/pal/WindChimes_Ice.webp",
  "Woolipop": "https://paldb.gg/pal/SweetsSheep.webp",
  "Woolipop Terra": "https://paldb.gg/pal/SweetsSheep_Ground.webp",
  "Mozzarina": "https://paldb.gg/pal/CowPal.webp",
  "Azurobe": "https://paldb.gg/pal/BlueDragon.webp",
  "Azurobe Cryst": "https://paldb.gg/pal/BlueDragon_Ice.webp",
  "Sparkit": "https://paldb.gg/pal/ElecCat.webp",
  "Kelpsea": "https://paldb.gg/pal/Kelpie.webp",
  "Kelpsea Ignis": "https://paldb.gg/pal/Kelpie_Fire.webp",
  "Ribbuny": "https://paldb.gg/pal/PinkRabbit.webp",
  "Ribbuny Botan": "https://paldb.gg/pal/PinkRabbit_Grass.webp",
  "Jelliette": "https://paldb.gg/pal/JellyfishFairy.webp",
  "Jellroy": "https://paldb.gg/pal/JellyfishGhost.webp",
  "Amione": "https://paldb.gg/pal/ClioneTwins.webp",
  "Gloopie": "https://paldb.gg/pal/OctopusGirl.webp",
  "Gloopie Primo": "https://paldb.gg/pal/OctopusGirl_Neutral.webp",
  "Galeclaw": "https://paldb.gg/pal/Eagle.webp",
  "Wispaw": "https://paldb.gg/pal/GhostBlackCat.webp",
  "Nitewing": "https://paldb.gg/pal/HawkBird.webp",
  "Tombat": "https://paldb.gg/pal/CatBat.webp",
  "Tocotoco": "https://paldb.gg/pal/ColorfulBird.webp",
  "Univolt": "https://paldb.gg/pal/Kirin.webp",
  "Univolt Cryst": "https://paldb.gg/pal/Kirin_Ice.webp",
  "Gobfin": "https://paldb.gg/pal/SharkKid.webp",
  "Gobfin Ignis": "https://paldb.gg/pal/SharkKid_Fire.webp",
  "Loupmoon": "https://paldb.gg/pal/Werewolf.webp",
  "Loupmoon Cryst": "https://paldb.gg/pal/Werewolf_Ice.webp",
  "Cawgnito": "https://paldb.gg/pal/DarkCrow.webp",
  "Arsox": "https://paldb.gg/pal/FlameBuffalo.webp",
  "Muffly": "https://paldb.gg/pal/FluffyBird.webp",
  "Bristla": "https://paldb.gg/pal/LittleBriarRose.webp",
  "Cinnamoth": "https://paldb.gg/pal/CuteButterfly.webp",
  "Puffolt": "https://paldb.gg/pal/ElecPomeranian.webp",
  "Elphidran": "https://paldb.gg/pal/FairyDragon.webp",
  "Elphidran Aqua": "https://paldb.gg/pal/FairyDragon_Water.webp",
  "Vanwyrm": "https://paldb.gg/pal/BirdDragon.webp",
  "Vanwyrm Cryst": "https://paldb.gg/pal/BirdDragon_Ice.webp",
  "Felbat": "https://paldb.gg/pal/CatVampire.webp",
  "Vaelet": "https://paldb.gg/pal/VioletFairy.webp",
  "Beegarde": "https://paldb.gg/pal/SoldierBee.webp",
  "Elizabee": "https://paldb.gg/pal/QueenBee.webp",
  "Lovander": "https://paldb.gg/pal/PinkLizard.webp",
  "Grintale": "https://paldb.gg/pal/NaughtyCat.webp",
  "Tarantriss": "https://paldb.gg/pal/PurpleSpider.webp",
  "Polapup": "https://paldb.gg/pal/IceSeal.webp",
  "Polapup Terra": "https://paldb.gg/pal/IceSeal_Ground.webp",
  "Leezpunk": "https://paldb.gg/pal/LizardMan.webp",
  "Leezpunk Ignis": "https://paldb.gg/pal/LizardMan_Fire.webp",
  "Gorirat": "https://paldb.gg/pal/Gorilla.webp",
  "Gorirat Terra": "https://paldb.gg/pal/Gorilla_Ground.webp",
  "Surfent": "https://paldb.gg/pal/Serpent.webp",
  "Surfent Terra": "https://paldb.gg/pal/Serpent_Ground.webp",
  "Robinquill": "https://paldb.gg/pal/RobinHood.webp",
  "Robinquill Terra": "https://paldb.gg/pal/RobinHood_Ground.webp",
  "Flopie": "https://paldb.gg/pal/FlowerRabbit.webp",
  "Wixen": "https://paldb.gg/pal/FoxMage.webp",
  "Wixen Noct": "https://paldb.gg/pal/FoxMage_Dark.webp",
  "Katress": "https://paldb.gg/pal/CatMage.webp",
  "Katress Ignis": "https://paldb.gg/pal/CatMage_Fire.webp",
  "Helzephyr": "https://paldb.gg/pal/HadesBird.webp",
  "Helzephyr Lux": "https://paldb.gg/pal/HadesBird_Electric.webp",
  "Elgrove": "https://paldb.gg/pal/GrassMinotaur.webp",
  "Elgrove Cryst": "https://paldb.gg/pal/GrassMinotaur_Ice.webp",
  "Lunaris": "https://paldb.gg/pal/Mutant.webp",
  "Fenglope": "https://paldb.gg/pal/FengyunDeeper.webp",
  "Fenglope Lux": "https://paldb.gg/pal/FengyunDeeper_Electric.webp",
  "Dinossom": "https://paldb.gg/pal/FlowerDinosaur.webp",
  "Dinossom Lux": "https://paldb.gg/pal/FlowerDinosaur_Electric.webp",
  "Bushi": "https://paldb.gg/pal/Ronin.webp",
  "Bushi Noct": "https://paldb.gg/pal/Ronin_Dark.webp",
  "Munchill": "https://paldb.gg/pal/IceCrocodile.webp",
  "Mammorest": "https://paldb.gg/pal/GrassMammoth.webp",
  "Mammorest Cryst": "https://paldb.gg/pal/GrassMammoth_Ice.webp",
  "Finsider": "https://paldb.gg/pal/StuffedShark.webp",
  "Finsider Ignis": "https://paldb.gg/pal/StuffedShark_Fire.webp",
  "Petallia": "https://paldb.gg/pal/FlowerDoll.webp",
  "Petallia Ignis": "https://paldb.gg/pal/FlowerDoll_Fire.webp",
  "Leafan": "https://paldb.gg/pal/PandaGirl.webp",
  "Incineram": "https://paldb.gg/pal/Baphomet.webp",
  "Incineram Noct": "https://paldb.gg/pal/Baphomet_Dark.webp",
  "Dazzi": "https://paldb.gg/pal/RaijinDaughter.webp",
  "Dazzi Noct": "https://paldb.gg/pal/RaijinDaughter_Water.webp",
  "Pyrin": "https://paldb.gg/pal/FireKirin.webp",
  "Pyrin Noct": "https://paldb.gg/pal/FireKirin_Dark.webp",
  "Relaxaurus": "https://paldb.gg/pal/LazyDragon.webp",
  "Relaxaurus Lux": "https://paldb.gg/pal/LazyDragon_Electric.webp",
  "Foxcicle": "https://paldb.gg/pal/IceFox.webp",
  "Beakon": "https://paldb.gg/pal/ThunderBird.webp",
  "Beakon Cryst": "https://paldb.gg/pal/ThunderBird_Ice.webp",
  "Ghangler": "https://paldb.gg/pal/GhostAnglerfish.webp",
  "Ghangler Ignis": "https://paldb.gg/pal/GhostAnglerfish_Fire.webp",
  "Rayhound": "https://paldb.gg/pal/ThunderDog.webp",
  "Menasting": "https://paldb.gg/pal/DarkScorpion.webp",
  "Menasting Terra": "https://paldb.gg/pal/DarkScorpion_Ground.webp",
  "Needoll": "https://paldb.gg/pal/CactusDoll.webp",
  "Needoll Noct": "https://paldb.gg/pal/CactusDoll_Dark.webp",
  "Reindrix": "https://paldb.gg/pal/IceDeer.webp",
  "Mossanda": "https://paldb.gg/pal/GrassPanda.webp",
  "Mossanda Lux": "https://paldb.gg/pal/GrassPanda_Electric.webp",
  "Chillet": "https://paldb.gg/pal/WeaselDragon.webp",
  "Chillet Ignis": "https://paldb.gg/pal/WeaselDragon_Fire.webp",
  "Ragnahawk": "https://paldb.gg/pal/RedArmorBird.webp",
  "Moldron": "https://paldb.gg/pal/VolcanoDragon.webp",
  "Moldron Cryst": "https://paldb.gg/pal/VolcanoDragon_Ice.webp",
  "Palumba": "https://paldb.gg/pal/TropicalOstrich.webp",
  "Digtoise": "https://paldb.gg/pal/DrillGame.webp",
  "Broncherry": "https://paldb.gg/pal/SakuraSaurus.webp",
  "Broncherry Aqua": "https://paldb.gg/pal/SakuraSaurus_Water.webp",
  "Dumud": "https://paldb.gg/pal/LazyCatfish.webp",
  "Dumud Gild": "https://paldb.gg/pal/LazyCatfish_Gold.webp",
  "Braloha": "https://paldb.gg/pal/Plesiosaur.webp",
  "Kitsun": "https://paldb.gg/pal/AmaterasuWolf.webp",
  "Kitsun Noct": "https://paldb.gg/pal/AmaterasuWolf_Dark.webp",
  "Blazehowl": "https://paldb.gg/pal/Manticore.webp",
  "Blazehowl Noct": "https://paldb.gg/pal/Manticore_Dark.webp",
  "Warsect": "https://paldb.gg/pal/HerculesBeetle.webp",
  "Warsect Terra": "https://paldb.gg/pal/HerculesBeetle_Ground.webp",
  "Frostplume": "https://paldb.gg/pal/SnowPeafowl.webp",
  "Majex": "https://paldb.gg/pal/DarkFlameFox.webp",
  "Sibelyx": "https://paldb.gg/pal/WhiteMoth.webp",
  "Sibelyx Primo": "https://paldb.gg/pal/WhiteMoth_Neutral.webp",
  "Maraith": "https://paldb.gg/pal/GhostBeast.webp",
  "Shroomer": "https://paldb.gg/pal/MushroomDragon.webp",
  "Shroomer Noct": "https://paldb.gg/pal/MushroomDragon_Dark.webp",
  "Icelyn": "https://paldb.gg/pal/IceWitch.webp",
  "Gildra": "https://paldb.gg/pal/MummyPal.webp",
  "Jormuntide": "https://paldb.gg/pal/Umihebi.webp",
  "Jormuntide Ignis": "https://paldb.gg/pal/Umihebi_Fire.webp",
  "Suzaku": "https://paldb.gg/pal/Suzaku.webp",
  "Suzaku Aqua": "https://paldb.gg/pal/Suzaku_Water.webp",
  "Dazemu": "https://paldb.gg/pal/FeatherOstrich.webp",
  "Quivern": "https://paldb.gg/pal/SkyDragon.webp",
  "Quivern Botan": "https://paldb.gg/pal/SkyDragon_Grass.webp",
  "Lullu": "https://paldb.gg/pal/LeafPrincess.webp",
  "Kikit": "https://paldb.gg/pal/SmallArmadillo.webp",
  "Yakumo": "https://paldb.gg/pal/GuardianDog.webp",
  "Skutlass": "https://paldb.gg/pal/SwordCutlassfish.webp",
  "Skutlass Ignis": "https://paldb.gg/pal/SwordCutlassfish_Fire.webp",
  "Reptyro": "https://paldb.gg/pal/VolcanicMonster.webp",
  "Reptyro Cryst": "https://paldb.gg/pal/VolcanicMonster_Ice.webp",
  "Starryon": "https://paldb.gg/pal/NightBlueHorse.webp",
  "Starryon Primo": "https://paldb.gg/pal/NightBlueHorse_Neutral.webp",
  "Pierdon": "https://paldb.gg/pal/RockBeast.webp",
  "Pierdon Cryst": "https://paldb.gg/pal/RockBeast_Ice.webp",
  "Cryolinx": "https://paldb.gg/pal/WhiteTiger.webp",
  "Cryolinx Terra": "https://paldb.gg/pal/WhiteTiger_Ground.webp",
  "Snugloo": "https://paldb.gg/pal/SmallYeti.webp",
  "Wumpo": "https://paldb.gg/pal/Yeti.webp",
  "Wumpo Botan": "https://paldb.gg/pal/Yeti_Grass.webp",
  "Sootseer": "https://paldb.gg/pal/CandleGhost.webp",
  "Carnibora": "https://paldb.gg/pal/VenusFlytrap.webp",
  "Blazamut": "https://paldb.gg/pal/KingBahamut.webp",
  "Blazamut Ryu": "https://paldb.gg/pal/KingBahamut_Dragon.webp",
  "Dualith": "https://paldb.gg/pal/GrassGolem.webp",
  "Dualith Noct": "https://paldb.gg/pal/GrassGolem_Dark.webp",
  "Anubis": "https://paldb.gg/pal/Anubis.webp",
  "Sekhmet": "https://paldb.gg/pal/Sekhmet.webp",
  "Prixter": "https://paldb.gg/pal/ScorpionMan.webp",
  "Prixter Lux": "https://paldb.gg/pal/ScorpionMan_Electric.webp",
  "Tetroise": "https://paldb.gg/pal/CubeTurtle.webp",
  "Tetroise Primo": "https://paldb.gg/pal/CubeTurtle_Neutral.webp",
  "Nyafia": "https://paldb.gg/pal/BadCatgirl.webp",
  "Mimog": "https://paldb.gg/pal/MimicDog.webp",
  "Xenovader": "https://paldb.gg/pal/DarkAlien.webp",
  "Xenogard": "https://paldb.gg/pal/WhiteAlienDragon.webp",
  "Prunelia": "https://paldb.gg/pal/BlueberryFairy.webp",
  "Nitemary": "https://paldb.gg/pal/GhostRabbit.webp",
  "Nitemary Botan": "https://paldb.gg/pal/GhostRabbit_Grass.webp",
  "Smokie": "https://paldb.gg/pal/BlackPuppy.webp",
  "Smokie Cryst": "https://paldb.gg/pal/BlackPuppy_Ice.webp",
  "Omascul": "https://paldb.gg/pal/MysteryMask.webp",
  "Whalaska": "https://paldb.gg/pal/IceNarwhal.webp",
  "Whalaska Ignis": "https://paldb.gg/pal/IceNarwhal_Fire.webp",
  "Verdash": "https://paldb.gg/pal/GrassRabbitMan.webp",
  "Splatterina": "https://paldb.gg/pal/GrimGirl.webp",
  "Gildane": "https://paldb.gg/pal/GoldenHorse.webp",
  "Dogen": "https://paldb.gg/pal/SifuDog.webp",
  "Bulldosu": "https://paldb.gg/pal/SumoDog.webp",
  "Celesdir": "https://paldb.gg/pal/WhiteDeer.webp",
  "Celesdir Noct": "https://paldb.gg/pal/WhiteDeer_Dark.webp",
  "Astegon": "https://paldb.gg/pal/BlackMetalDragon.webp",
  "Knocklem": "https://paldb.gg/pal/WingGolem.webp",
  "Knocklem Ignis": "https://paldb.gg/pal/WingGolem_Fire.webp",
  "Silvegis": "https://paldb.gg/pal/WhiteShieldDragon.webp",
  "Azurmane": "https://paldb.gg/pal/BlueThunderHorse.webp",
  "Valentail": "https://paldb.gg/pal/LongCat.webp",
  "Snock": "https://paldb.gg/pal/ElecSnail.webp",
  "Snock Lux": "https://paldb.gg/pal/ElecSnail.webp",
  "Snock Terra": "https://paldb.gg/pal/ElecSnail_Ground.webp",
  "Souffline": "https://paldb.gg/pal/DandelionGirl.webp",
  "Lapiron": "https://paldb.gg/pal/BrownRabbit.webp",
  "Hoodle": "https://paldb.gg/pal/HoodGhost.webp",
  "Slowatt": "https://paldb.gg/pal/ElecLizard.webp",
  "Bakemi": "https://paldb.gg/pal/OniGhostGirl.webp",
  "Solmora": "https://paldb.gg/pal/KingSunfish.webp",
  "Solmora Lux": "https://paldb.gg/pal/KingSunfish_Thunder.webp",
  "Lapure": "https://paldb.gg/pal/SleeveRabbit.webp",
  "Eidrolon": "https://paldb.gg/pal/GhostDragon.webp",
  "Eidrolon Ignis": "https://paldb.gg/pal/GhostDragon_Fire.webp",
  "Dynamoff": "https://paldb.gg/pal/ThunderFluffyBird.webp",
  "Tropicaw": "https://paldb.gg/pal/RedFlowerBird.webp",
  "Flaracle": "https://paldb.gg/pal/FoxExorcist.webp",
  "Ophydia": "https://paldb.gg/pal/LotusDragon.webp",
  "Dupin": "https://paldb.gg/pal/ClownRabbit.webp",
  "Roujay": "https://paldb.gg/pal/ThiefBird.webp",
  "Venusa": "https://paldb.gg/pal/SnakeGirl.webp",
  "Mycora": "https://paldb.gg/pal/MushroomLady.webp",
  "Loomen": "https://paldb.gg/pal/LanternButler.webp",
  "Wistella": "https://paldb.gg/pal/MoonChild.webp",
  "Solenne": "https://paldb.gg/pal/MonochromeQueen.webp",
  "Renjishi": "https://paldb.gg/pal/KabukiMan.webp",
  "Aegidron": "https://paldb.gg/pal/DomeArmorDragon.webp",
  "Grizzbolt": "https://paldb.gg/pal/ElecPanda.webp",
  "Lyleen": "https://paldb.gg/pal/LilyQueen.webp",
  "Lyleen Noct": "https://paldb.gg/pal/LilyQueen_Dark.webp",
  "Orserk": "https://paldb.gg/pal/ThunderDragonMan.webp",
  "Faleris": "https://paldb.gg/pal/Horus.webp",
  "Faleris Aqua": "https://paldb.gg/pal/Horus_Water.webp",
  "Shadowbeak": "https://paldb.gg/pal/BlackGriffon.webp",
  "Selyne": "https://paldb.gg/pal/MoonQueen.webp",
  "Bastigor": "https://paldb.gg/pal/SnowTigerBeastman.webp",
  "Shaolong": "https://paldb.gg/pal/BlueSkyDragon.webp",
  "Silvance": "https://paldb.gg/pal/Mothman.webp",
  "Dandilord": "https://paldb.gg/pal/FlowerPrince.webp",
  "Bellanoir": "https://paldb.gg/pal/NightLady.webp",
  "Bellanoir Libero": "https://paldb.gg/pal/NightLady_Dark.webp",
  "Xenolord": "https://paldb.gg/pal/DarkMechaDragon.webp",
  "Hartalis": "https://paldb.gg/pal/LegendDeer.webp",
  "Paladius": "https://paldb.gg/pal/SaintCentaur.webp",
  "Necromus": "https://paldb.gg/pal/BlackCentaur.webp",
  "Frostallion": "https://paldb.gg/pal/IceHorse.webp",
  "Frostallion Noct": "https://paldb.gg/pal/IceHorse_Dark.webp",
  "Neptilius": "https://paldb.gg/pal/PoseidonOrca.webp",
  "Jetragon": "https://paldb.gg/pal/JetDragon.webp",
  "Panthalus": "https://paldb.gg/pal/KingWhale.webp",
  "Astralym": "https://paldb.gg/pal/WorldTreeDragon.webp"
});
// PalDB’de varyant görseli olmayan tek Pal için ana tür görseli kullanılır.
palImageManifest['Rayhound Cryst'] = palImageManifest.Rayhound;
function imageFor(name) { return palImageManifest[name] || IMAGE_ROOT + slug(name) + '.png'; }
const palStatOverrides = {"Gumoss":{"hp":70,"atk":100,"def":70},"Penking":{"hp":95,"atk":95,"def":95},"Kingpaca":{"hp":120,"atk":100,"def":90},"Kingpaca Cryst":{"hp":120,"atk":100,"def":90},"Foxparks Cryst":{"hp":65,"atk":80,"def":70},"Caprity Noct":{"hp":100,"atk":75,"def":90},"Sweepa":{"hp":100,"atk":100,"def":90},"Azurobe":{"hp":110,"atk":100,"def":100},"Ribbuny Botan":{"hp":80,"atk":100,"def":70},"Nitewing":{"hp":100,"atk":100,"def":80},"Univolt":{"hp":80,"atk":110,"def":105},"Loupmoon Cryst":{"hp":80,"atk":130,"def":80},"Arsox":{"hp":85,"atk":100,"def":95},"Elphidran":{"hp":110,"atk":80,"def":90},"Felbat":{"hp":100,"atk":105,"def":110},"Vaelet":{"hp":100,"atk":100,"def":120},"Elizabee":{"hp":90,"atk":105,"def":100},"Grintale":{"hp":110,"atk":100,"def":80},"Tarantriss":{"hp":110,"atk":100,"def":100},"Wixen":{"hp":90,"atk":110,"def":80},"Katress":{"hp":90,"atk":105,"def":90},"Lunaris":{"hp":90,"atk":100,"def":90},"Fenglope":{"hp":110,"atk":110,"def":90},"Fenglope Lux":{"hp":110,"atk":115,"def":90},"Dinossom Lux":{"hp":110,"atk":90,"def":90},"Bushi":{"hp":80,"atk":125,"def":80},"Mammorest":{"hp":150,"atk":100,"def":90},"Petallia":{"hp":100,"atk":100,"def":100},"Dazzi Noct":{"hp":70,"atk":110,"def":75},"Relaxaurus Lux":{"hp":120,"atk":120,"def":110},"Foxcicle":{"hp":90,"atk":100,"def":105},"Beakon":{"hp":105,"atk":115,"def":80},"Menasting":{"hp":100,"atk":100,"def":130},"Menasting Terra":{"hp":100,"atk":105,"def":130},"Needoll":{"hp":75,"atk":100,"def":70},"Mossanda Lux":{"hp":100,"atk":100,"def":100},"Chillet":{"hp":90,"atk":100,"def":80},"Broncherry":{"hp":120,"atk":90,"def":100},"Broncherry Aqua":{"hp":120,"atk":95,"def":100},"Dumud":{"hp":100,"atk":100,"def":95},"Kitsun Noct":{"hp":100,"atk":115,"def":105},"Blazehowl":{"hp":105,"atk":110,"def":80},"Warsect":{"hp":120,"atk":100,"def":120},"Sibelyx":{"hp":110,"atk":90,"def":100},"Jormuntide":{"hp":130,"atk":150,"def":100},"Suzaku":{"hp":120,"atk":105,"def":105},"Quivern":{"hp":105,"atk":100,"def":100},"Reptyro":{"hp":110,"atk":105,"def":120},"Starryon":{"hp":110,"atk":100,"def":100},"Wumpo Botan":{"hp":140,"atk":100,"def":110},"Blazamut":{"hp":100,"atk":150,"def":120},"Dualith Noct":{"hp":110,"atk":110,"def":125},"Anubis":{"hp":120,"atk":130,"def":100},"Prixter Lux":{"hp":90,"atk":115,"def":90},"Tetroise Primo":{"hp":95,"atk":100,"def":140},"Prunelia":{"hp":105,"atk":100,"def":100},"Nitemary":{"hp":105,"atk":100,"def":105},"Smokie":{"hp":85,"atk":100,"def":85},"Omascul":{"hp":95,"atk":105,"def":100},"Verdash":{"hp":90,"atk":115,"def":90},"Gildane":{"hp":120,"atk":110,"def":110},"Celesdir":{"hp":120,"atk":110,"def":100},"Astegon":{"hp":100,"atk":125,"def":125},"Knocklem":{"hp":105,"atk":110,"def":135},"Azurmane":{"hp":130,"atk":120,"def":110},"Lyleen Noct":{"hp":115,"atk":120,"def":115},"Faleris Aqua":{"hp":110,"atk":110,"def":115},"Paladius":{"hp":130,"atk":120,"def":145},"Necromus":{"hp":130,"atk":145,"def":120},"Frostallion":{"hp":140,"atk":140,"def":120},"Frostallion Noct":{"hp":140,"atk":140,"def":135},"Neptilius":{"hp":105,"atk":145,"def":125},"Jetragon":{"hp":115,"atk":140,"def":120},"Eye of Cthulhu":{"hp":125,"atk":115,"def":100},"Grizzbolt":{"hp":120,"atk":105,"def":105},"Lyleen":{"hp":120,"atk":120,"def":110},"Orserk":{"hp":120,"atk":130,"def":115},"Faleris":{"hp":105,"atk":110,"def":115},"Shadowbeak":{"hp":120,"atk":120,"def":140},"Selyne":{"hp":130,"atk":115,"def":110},"Bastigor":{"hp":140,"atk":130,"def":120},"Shaolong":{"hp":140,"atk":135,"def":120},"Astralym":{"hp":200,"atk":200,"def":200}};
const palCaptureOverrides = { 'Eye of Cthulhu': .7 };
const allPals = palIndex.map((entry) => { const detailed = featuredPals.find(p => p.name === entry.name); const stats = palStatOverrides[entry.name] || {}; return detailed ? { ...entry, ...detailed, ...stats, image: imageFor(entry.name) } : { ...entry, ...stats, color: elementColor(entry.element), glow: elementGlow(entry.element), image: imageFor(entry.name), role: 'Paldeck kaydı', level: '—', partner: 'Palworld partner skilli', habitat: 'Palpagos / World Tree', hp: stats.hp ?? '—', atk: stats.atk ?? '—', def: stats.def ?? '—', capture: palCaptureOverrides[entry.name] ?? 1, work: ['Veri kaydı mevcut'], note: `${entry.name}, Paldeck’te ${entry.elementLabel} elementli ${entry.no} numaralı kayıttır.` }; });
function elementColor(element) { return ({ neutral:'#d9d5c9', fire:'#fd9250', water:'#5ccaf3', grass:'#8dd576', electric:'#f4d752', ice:'#aed8f3', ground:'#b48665', dark:'#9479c8', dragon:'#6aa6ed' }[element] || '#c7f46b'); }
function elementGlow(element) { return `color-mix(in srgb, ${elementColor(element)} 20%, transparent)`; }
function key(a, b) { return [a, b].sort().join('|'); }
function findPal(name) { return allPals.find(p => p.name === name) || allPals[0]; }
  function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[char])); }

const WORK_TYPE_CODES = { k: 'Kindling', w: 'Watering', p: 'Planting', e: 'Generating Electricity', h: 'Handiwork', g: 'Gathering', l: 'Lumbering', m: 'Mining', d: 'Medicine Production', c: 'Cooling', t: 'Transporting', f: 'Farming' };
const WORK_TYPE_ORDER = Object.values(WORK_TYPE_CODES);
const WORK_TYPE_INFO = {
  Kindling: { icon: '🔥', color: '#ff8a50', tr: 'Yakma', en: 'Kindling', es: 'Ignición', pt: 'Acender', de: 'Anzünden', fr: 'Allumage', ja: '火起こし', ko: '불 피우기', zh: '生火', ru: 'Розжиг' },
  Watering: { icon: '💧', color: '#57c9f5', tr: 'Sulama', en: 'Watering', es: 'Riego', pt: 'Irrigação', de: 'Bewässerung', fr: 'Arrosage', ja: '水やり', ko: '물주기', zh: '浇水', ru: 'Полив' },
  Planting: { icon: '🌱', color: '#8bd66d', tr: 'Ekim', en: 'Planting', es: 'Plantación', pt: 'Plantio', de: 'Pflanzen', fr: 'Plantation', ja: '栽培', ko: '심기', zh: '种植', ru: 'Посадка' },
  'Generating Electricity': { icon: '⚡', color: '#f5d75c', tr: 'Elektrik Üretimi', en: 'Generating Electricity', es: 'Generación eléctrica', pt: 'Geração de eletricidade', de: 'Stromerzeugung', fr: 'Production d’électricité', ja: '発電', ko: '발전', zh: '发电', ru: 'Выработка электричества' },
  Handiwork: { icon: '🛠️', color: '#d7a66d', tr: 'El İşi', en: 'Handiwork', es: 'Artesanía', pt: 'Artesanato', de: 'Handwerk', fr: 'Artisanat', ja: '手作業', ko: '제작', zh: '手工', ru: 'Ручная работа' },
  Gathering: { icon: '🌿', color: '#79d697', tr: 'Toplama', en: 'Gathering', es: 'Recolección', pt: 'Coleta', de: 'Sammeln', fr: 'Collecte', ja: '採集', ko: '채집', zh: '采集', ru: 'Сбор' },
  Lumbering: { icon: '🪵', color: '#c69a68', tr: 'Kerestecilik', en: 'Lumbering', es: 'Tala', pt: 'Corte de madeira', de: 'Holzfällen', fr: 'Bûcheronnage', ja: '伐採', ko: '벌목', zh: '伐木', ru: 'Лесозаготовка' },
  Mining: { icon: '⛏️', color: '#c58e78', tr: 'Madencilik', en: 'Mining', es: 'Minería', pt: 'Mineração', de: 'Bergbau', fr: 'Minage', ja: '採掘', ko: '채굴', zh: '采矿', ru: 'Добыча' },
  'Medicine Production': { icon: '🧪', color: '#ec8fc2', tr: 'İlaç Üretimi', en: 'Medicine Production', es: 'Producción de medicinas', pt: 'Produção de remédios', de: 'Medizinherstellung', fr: 'Production de médicaments', ja: '薬', ko: '의약품 생산', zh: '制药', ru: 'Производство лекарств' },
  Cooling: { icon: '❄️', color: '#9edcf3', tr: 'Soğutma', en: 'Cooling', es: 'Enfriamiento', pt: 'Resfriamento', de: 'Kühlung', fr: 'Refroidissement', ja: '冷却', ko: '냉각', zh: '冷却', ru: 'Охлаждение' },
  Transporting: { icon: '📦', color: '#ae9af0', tr: 'Taşıma', en: 'Transporting', es: 'Transporte', pt: 'Transporte', de: 'Transport', fr: 'Transport', ja: '運搬', ko: '운반', zh: '搬运', ru: 'Транспортировка' },
  Farming: { icon: '🐑', color: '#e8b86e', tr: 'Çiftçilik', en: 'Farming', es: 'Agricultura', pt: 'Agricultura', de: 'Farmarbeit', fr: 'Élevage', ja: '牧場', ko: '농장', zh: '牧场', ru: 'Ферма' },
};
const WORK_UI = {
  tr: { title: 'ÇALIŞMA UYGUNLUĞU', count: 'iş yeteneği', none: 'Üs iş yeteneği yok', base: 'taban seviye' },
  en: { title: 'WORK SUITABILITY', count: 'work skills', none: 'No base work suitability', base: 'base level' },
  es: { title: 'APTITUDES DE TRABAJO', count: 'aptitudes', none: 'Sin aptitud de trabajo', base: 'nivel base' },
  pt: { title: 'APTIDÕES DE TRABALHO', count: 'aptidões', none: 'Sem aptidão de trabalho', base: 'nível base' },
  de: { title: 'ARBEITSEIGNUNG', count: 'Arbeitsfähigkeiten', none: 'Keine Arbeitsfähigkeit', base: 'Basisstufe' },
  fr: { title: 'APTITUDES DE TRAVAIL', count: 'aptitudes', none: 'Aucune aptitude de travail', base: 'niveau de base' },
  ja: { title: '作業適性', count: '作業適性', none: '拠点作業適性なし', base: '基礎レベル' },
  ko: { title: '작업 적성', count: '작업 적성', none: '기지 작업 적성 없음', base: '기본 레벨' },
  zh: { title: '工作适应性', count: '项工作适性', none: '没有基地工作适性', base: '基础等级' },
  ru: { title: 'РАБОЧИЕ СПОСОБНОСТИ', count: 'способности', none: 'Нет рабочей способности', base: 'базовый уровень' },
};
function workTypeLabel(type) { return WORK_TYPE_INFO[type]?.[currentLanguage] || WORK_TYPE_INFO[type]?.en || type; }
function workUiText(key) { return WORK_UI[currentLanguage]?.[key] || WORK_UI.en[key]; }
function workEntriesForPal(pal) { const encoded = PAL_WORK_DATA[pal.name]; if (encoded === undefined || encoded === '') return []; return encoded.split(',').map(token => ({ type: WORK_TYPE_CODES[token[0]], level: Number(token.slice(1)) })).filter(entry => entry.type && Number.isFinite(entry.level)); }
function workBadgesMarkup(pal) { const entries = workEntriesForPal(pal); if (!entries.length) return `<span class="work-empty">${escapeHtml(workUiText('none'))}</span>`; return entries.map(({ type, level }) => { const info = WORK_TYPE_INFO[type]; return `<span class="work-chip" style="--work-color:${info.color}" title="${escapeHtml(workTypeLabel(type))} · Lv ${level}"><i>${info.icon}</i><span>${escapeHtml(workTypeLabel(type))}</span><b>Lv${level}</b></span>`; }).join(''); }
function workDetailsMarkup(pal) { const entries = new Map(workEntriesForPal(pal).map(entry => [entry.type, entry.level])); const activeCount = entries.size; return `<div class="work-suitability-panel"><div class="work-suitability-head"><strong>${escapeHtml(workUiText('title'))}</strong><span>${activeCount}/12 · ${escapeHtml(workUiText('count'))}</span></div><div class="work-suitability-grid">${WORK_TYPE_ORDER.map(type => { const info = WORK_TYPE_INFO[type]; const level = entries.get(type); return `<div class="work-detail ${level ? 'is-active' : 'is-off'}" style="--work-color:${info.color}" title="${escapeHtml(workTypeLabel(type))} · ${level ? `Lv ${level}` : workUiText('none')}"><i>${info.icon}</i><span>${escapeHtml(workTypeLabel(type))}</span><strong>${level ? `Lv ${level}` : '—'}</strong></div>`; }).join('')}</div></div>`; }
allPals.forEach(pal => { pal.workSkills = workEntriesForPal(pal); pal.work = pal.workSkills.map(({ type, level }) => `${type} Lv${level}`); });

const eggs = [
  { name: 'Normal Yumurta', original: 'Common Egg', element: 'Neutral', code: 'COMMON', color: '#d9d5c9', gradient: 'linear-gradient(145deg,#f0eddd,#aaa99e)', hint: 'Nötr Pallar', image: 'https://assets.palmods.gg/v1.0.3/items/icons/PalEgg_Normal_01.webp?iv=2' },
  { name: 'Kavurucu Yumurta', original: 'Scorching Egg', element: 'Ateş', code: 'FIRE', color: '#fd9250', gradient: 'linear-gradient(145deg,#ffb25e,#c84d34)', hint: 'Ateş Pallar', image: 'https://assets.palmods.gg/v1.0.3/items/icons/PalEgg_Fire_01.webp?iv=2' },
  { name: 'Nemli Yumurta', original: 'Damp Egg', element: 'Su', code: 'WATER', color: '#5ccaf3', gradient: 'linear-gradient(145deg,#8ce5ff,#3a78c0)', hint: 'Su Pallar', image: 'https://assets.palmods.gg/v1.0.3/items/icons/PalEgg_Water_01.webp?iv=2' },
  { name: 'Yeşil Yumurta', original: 'Verdant Egg', element: 'Çim', code: 'GRASS', color: '#8dd576', gradient: 'linear-gradient(145deg,#b6e48a,#5a9c5a)', hint: 'Çim Pallar', image: 'https://assets.palmods.gg/v1.0.3/items/icons/PalEgg_Leaf_01.webp?iv=2' },
  { name: 'Elektrik Yumurtası', original: 'Electric Egg', element: 'Elektrik', code: 'ELECTRIC', color: '#f4d752', gradient: 'linear-gradient(145deg,#fff391,#c89326)', hint: 'Elektrik Pallar', image: 'https://assets.palmods.gg/v1.0.3/items/icons/PalEgg_Electricity_01.webp?iv=2' },
  { name: 'Donmuş Yumurta', original: 'Frozen Egg', element: 'Buz', code: 'ICE', color: '#aed8f3', gradient: 'linear-gradient(145deg,#e5f9ff,#79aada)', hint: 'Buz Pallar', image: 'https://assets.palmods.gg/v1.0.3/items/icons/PalEgg_Ice_01.webp?iv=2' },
  { name: 'Kayalık Yumurta', original: 'Rocky Egg', element: 'Toprak', code: 'GROUND', color: '#b48665', gradient: 'linear-gradient(145deg,#d2a47c,#745044)', hint: 'Toprak Pallar', image: 'https://assets.palmods.gg/v1.0.3/items/icons/PalEgg_Earth_01.webp?iv=2' },
  { name: 'Karanlık Yumurta', original: 'Dark Egg', element: 'Karanlık', code: 'DARK', color: '#9479c8', gradient: 'linear-gradient(145deg,#c8a0e9,#513379)', hint: 'Karanlık Pallar', image: 'https://assets.palmods.gg/v1.0.3/items/icons/PalEgg_Dark_01.webp?iv=2' },
  { name: 'Ejderha Yumurtası', original: 'Dragon Egg', element: 'Ejderha', code: 'DRAGON', color: '#6aa6ed', gradient: 'linear-gradient(145deg,#b5d9ff,#4f70bc)', hint: 'Ejderha Pallar', image: 'https://assets.palmods.gg/v1.0.3/items/icons/PalEgg_Dragon_01.webp?iv=2' },
  { name: 'Değişmiş Yumurta', original: 'Mutated Egg', element: 'Mutasyon', code: 'MUTATED', color: '#e891b9', gradient: 'linear-gradient(145deg,#ffd0e8,#9b4e88)', hint: 'Mutasyonlu pasifler', image: 'https://cdn.paldb.cc/image/Others/InventoryItemIcon/Texture/T_itemicon_Material_PalEgg_MutationPal.webp' },
  { name: 'Uğursuz Yumurta', original: 'Ominous Egg', element: 'Uğursuz', code: 'OMINOUS', color: '#a68be5', gradient: 'linear-gradient(145deg,#dbc9ff,#3b275e)', hint: 'World Tree yumurtaları', image: 'https://www.palmods.gg/images/items/ominous-egg-palegg-worldtree-01.webp' },
];

// PalMods'in Palworld 1.0 map frame'i: pinler görsel tahminle değil,
// oyundaki X/Y koordinatlarının 2048 px ana harita izdüşümüyle yerleşir.
function coordToMapPosition(coord) {
  if (coord === 'World Tree') return { x: 48, y: 50 };
  const [x, y] = String(coord).split(',').map(Number);
  const mapX = ((459 * x + 882400) / 1448800) * 100;
  const mapY = (1 - ((459 * y + 975512) / 1448800)) * 100;
  return { x: Math.max(1.5, Math.min(98.5, mapX)), y: Math.max(1.5, Math.min(98.5, mapY)) };
}
const towers = [
  { order: '01', name: 'Rayne Syndicate Kulesi', boss: 'Zoe & Grizzbolt', level: 10, element: 'Elektrik', weak: 'Toprak', coord: '111, -431', region: 'Windswept Hills' },
  { order: '02', name: 'Free Pal Alliance Kulesi', boss: 'Lily & Lyleen', level: 20, element: 'Çim', weak: 'Ateş', coord: '36, -311', region: 'Crescent Moon Shore' },
  { order: '03', name: 'Eternal Pyre Kulesi', boss: 'Axel & Orserk', level: 30, element: 'Ejderha / Elektrik', weak: 'Toprak / Buz', coord: '-588, -518', region: 'Mount Obsidian' },
  { order: '04', name: 'PIDF Kulesi', boss: 'Marcus & Faleris', level: 40, element: 'Ateş', weak: 'Su', coord: '556, 336', region: 'Desiccated Desert' },
  { order: '05', name: 'PAL Genetic Research Unit', boss: 'Victor & Shadowbeak', level: 50, element: 'Karanlık', weak: 'Ejderha', coord: '-149, 447', region: 'Astral Mountains' },
  { order: '06', name: 'Moonflower Kulesi', boss: 'Saya & Selyne', level: 55, element: 'Karanlık / Nötr', weak: 'Ejderha / Karanlık', coord: '-597, 206', region: 'Sakurajima' },
  { order: '07', name: 'Feybreak Kulesi', boss: 'Bjorn & Bastigor', level: 60, element: 'Buz', weak: 'Ateş', coord: '-1294, -1669', region: 'Feybreak' },
  { order: '08', name: 'Azure Covenant Kulesi', boss: 'Auri & Shaolong', level: 68, element: 'Ejderha / Su', weak: 'Buz / Elektrik', coord: '-423, -1425', region: 'Sunreach' },
  { order: '09', name: 'World Tree Sealed Sanctum', boss: 'Zenara & Astralym', level: 80, element: '—', weak: '—', coord: 'World Tree', region: 'World Tree' },
].map(tower => ({ ...tower, ...coordToMapPosition(tower.coord) }));

// Kule patronlarından ayrı, haritada sabit çıkan normal Alpha/field boss kayıtları.
// 1.0 ana harita boss katmanındaki 83 kayıt ve oyun koordinatları.
const alphaBosses = [
  ['Chillet',11,'Buz / Ejderha','Ateş / Buz','172, -418','Windswept Hills'], ['Gumoss',11,'Çim / Toprak','Ateş / Çim','-113, -628','Hillside Islands'], ['Sweepa',11,'Buz','Ateş','-228, -592','Hillside Islands'], ['Dumud',14,'Su / Toprak','Çim','-309, 6','Isolated Islands'], ['Arsox',15,'Ateş','Su','-116, -491','Ravine Grotto'], ['Foxcicle',15,'Buz','Ateş','243, -332','Bounty Dungeon'], ['Foxparks Cryst',15,'Buz','Ateş','-411, -55','Frost Flower Realm'], ['Penking',15,'Su / Buz','Elektrik / Ateş','113, -353','Frozen Wings Realm'], ['Grintale',17,'Nötr','Karanlık','355, -245','Bamboo Groves'], ['Nitewing',18,'Nötr','Karanlık','-275, -70','Sea Breeze Archipelago'], ['Broncherry',23,'Çim','Ateş','-222, -669','Verdant Brook'], ['Caprity Noct',23,'Karanlık','Ejderha','-145, -660','Hillside Islands'], ['Kingpaca',23,'Nötr','Karanlık','49, -460','Windswept Hills'], ['Fenglope',25,'Nötr','Karanlık','-258, -457','Hidden Falls Mineshaft'], ['Bushi',25,'Ateş','Su','-203, -347','Swordmaster Realm'], ['Vaelet',27,'Çim','Ateş','-19, -265','Guardian Realm'], ['Wixen',28,'Ateş','Su','162, -224','Sorcerer Realm'], ['Beakon',37,'Elektrik','Toprak','95, 25','Investigator’s Fork'], ['Blazehowl',30,'Ateş','Su','-256, -131','Myriad Flames Realm'], ['Elphidran',30,'Ejderha','Buz','44, -283','Isolated Islands Center'], ['Elizabee',39,'Çim','Ateş','162, -84','Devout Mineshaft'], ['Mossanda Lux',31,'Elektrik','Toprak','448, -182','Electric Realm'], ['Univolt',31,'Elektrik','Toprak','-116, -543','Verdant Brook'], ['Lunaris',35,'Nötr','Karanlık','131, -53','Sea Breeze Archipelago'], ['Tarantriss',35,'Karanlık','Ejderha','-343, -252','Hillside Islands'], ['Azurobe',40,'Su / Ejderha','Elektrik / Buz','-176, -266','Scars of War'], ['Verdash',35,'Çim','Ateş','287, 10','Swift Realm'], ['Mammorest',38,'Çim','Ateş','189, -477','Grassy Behemoth Hills'], ['Wumpo Botan',38,'Çim','Ateş','449, -51','Main Island'], ['Needoll',40,'Çim','Ateş','433, -712','Desert Coast'], ['Sibelyx',40,'Buz','Ateş','251, 67','Investigator’s Fork'], ['Menasting',44,'Toprak / Karanlık','Çim / Ejderha','349, 539','Deep Sand Dunes'], ['Suzaku',45,'Ateş','Su','329, 482','Twilight Dunes'], ['Kingpaca Cryst',46,'Buz','Ateş','-385, 355','Forgotten Mineshaft'], ['Dinossom Lux',47,'Elektrik / Ejderha','Toprak / Buz','318, 171','Deep Sand Dunes'], ['Astegon',55,'Ejderha / Karanlık','Buz / Ejderha','-689, -110','Volcano Wildlife Sanctuary'], ['Reptyro',50,'Ateş / Toprak','Su / Çim','-548, -433','Mount Obsidian'], ['Blazamut',52,'Ateş','Su','-737, -332','Scorching Mineshaft'], ['Menasting Terra',55,'Toprak','Çim','-581, 316','Sakurajima'], ['Anubis',55,'Toprak','Çim','-134, -94','Twilight Dunes'], ['Jormuntide',55,'Ejderha / Su','Buz / Elektrik','350, -85','Scars of War'], ['Knocklem',55,'Toprak','Çim','-584, -251','Fortress Ruin Island'], ['Tetroise',55,'Toprak','Çim','438, 378','Deep Sand Dunes'], ['Faleris Aqua',66,'Su','Elektrik','-1309, -1620','Feybreak'], ['Nitemary',60,'Karanlık','Ejderha','-924, -1013','Feybreak'], ['Azurmane',66,'Elektrik','Toprak','-1132, -1672','Feybreak'], ['Frostallion',60,'Buz','Ateş','-358, 508','Land of Absolute Zero'], ['Paladius',60,'Nötr','Karanlık','443, 679','Deep Sand Dunes'], ['Omascul',60,'Karanlık','Ejderha','-711, -930','Feybreak'], ['Neptilius',60,'Su','Elektrik','139, 651','Isle of the Glacial Core'], ['Dazzi Noct',60,'Elektrik / Karanlık','Toprak / Ejderha','-1205, -857','Feybreak'], ['Fenglope Lux',60,'Elektrik','Toprak','-862, -1148','Feybreak'], ['Tetroise Primo',60,'Nötr','Karanlık','-1085, -1324','Feybreak'], ['Gildane',63,'Toprak','Çim','-945, -1413','Feybreak'], ['Prunelia',63,'Çim / Karanlık','Ateş / Ejderha','-1361, -971','Feybreak'], ['Starryon',63,'Karanlık','Ejderha','-893, -1293','Feybreak'], ['Warsect Terra',64,'Toprak','Çim','-1023, -1236','Feybreak'], ['Kitsun Noct',65,'Karanlık','Ejderha','-852, -1309','Feybreak'], ['Frostallion Noct',65,'Karanlık','Ejderha','689, 648','Desert Wildlife Sanctuary'], ['Splatterina',65,'Karanlık','Ejderha','-1080, -1459','Feybreak'], ['Loupmoon Cryst',66,'Buz','Ateş','-1148, -1418','Feybreak'], ['Flaracle',68,'Ateş','Su','-243, -1522','Sunreach'], ['Dynamoff',67,'Elektrik','Toprak','-311, -1527','Sunreach'], ['Eidrolon',69,'Ejderha','Buz','-488, -1522','Sunreach'], ['Ophydia',69,'Çim / Su','Ateş / Elektrik','-592, -1480','Sunreach'], ['Dualith Noct',70,'Toprak / Karanlık','Ejderha','-1699, -951','Feybreak'], ['Prixter Lux',70,'Elektrik / Toprak','Toprak','-1319, -613','Outlying Desert Island'], ['Moldron',70,'Ateş','Su','-1127, -1984','Sunreach'], ['Whalaska',55,'Su','Elektrik','-181, 845','Glacial Core'], ['Dualith',55,'Toprak / Çim','Çim / Ateş','911, -99','Sunreach'], ['Lyleen',58,'Çim','Ateş','-633, 300','Sakurajima'], ['Lyleen Noct',58,'Karanlık','Ejderha','-628, 306','Sakurajima'], ['Grizzbolt',30,'Elektrik','Toprak','56, -697','Forest Wildlife Sanctuary'], ['Jetragon',70,'Ejderha','Buz','-553, -1332','Sunreach'], ['Slowatt',66,'Elektrik','Toprak','-368, -1361','Sunreach'], ['Snock',65,'Elektrik','Toprak','-368, -1418','Sunreach'], ['Wistella',66,'Karanlık','Ejderha','-233, -1418','Sunreach'], ['Pierdon',50,'Toprak','Çim','822, 466','Sunreach'], ['Celesdir',65,'Nötr','Karanlık','-966, -1174','Feybreak'], ['Nyafia',60,'Karanlık','Ejderha','-924, -920','Feybreak'], ['Silvegis',62,'Ejderha','Buz','-987, -1023','Feybreak'], ['Cryolinx Terra',62,'Toprak','Çim','-1288, -1304','Feybreak'], ['Smokie',60,'Karanlık','Ejderha','-883, -1470','Feybreak'],
].map((row, index) => { const point = coordToMapPosition(row[4]); return { name: row[0], level: row[1], element: row[2], weak: row[3], coord: row[4], region: row[5], mapX: point.x, mapY: point.y, index }; });

const fastTravel = [
  ['Başlangıç Platosu', '1, -544'], ['Küçük Yerleşim', '74, -486'], ['Rayne Syndicate Girişi', '118, -425'], ['Sea Breeze Archipelago', '-52, -386'], ['Free Pal Alliance Girişi', '36, -311'], ['Desolate Church', '64, -414'], ['Mount Obsidian Girişi', '-570, -650'], ['PIDF Kulesi Girişi', '558, 335'], ['Astral Mountains Girişi', '-255, 478'], ['Moonflower Kulesi Girişi', '-597, 206'], ['Feybreak Kulesi Girişi', '-1287, -1667'], ['The Oculus Gate', '-1117, -1389'], ['Azure Covenant Kulesi', '-423, -1425'], ['World Tree Girişi', '-300, -600'], ['Sunreach Sky Islands', '-419, -1431'],
].map(([name, coord]) => { const point = coordToMapPosition(coord); return [name, coord, point.x, point.y]; });

// World Tree, ana Palpagos haritasından ayrı ve kendi koordinat sistemine sahip.
// İşaretçiler Pal Atlas'ın World Tree veri dosyalarındaki harita koordinatlarına göre yerleştirilir.
const WORLD_TREE_MAP_IMAGE = 'https://raw.githubusercontent.com/Nifrendil/pal-atlas/main/public/maps/worldtree.webp';
function worldTreeCoordToMapPosition(coord) {
  const [x, y] = String(coord).split(',').map(Number);
  return { x: Math.max(1.5, Math.min(98.5, ((x + 1000) / 2000) * 100)), y: Math.max(1.5, Math.min(98.5, (1 - ((y + 1000) / 2000)) * 100)) };
}
const worldTreeTowers = [
  { order: 'T01', name: 'Shinespore Root', boss: 'Silvance', palName: 'Silvance', level: 78, element: 'Çim', weak: 'Ateş', coord: '-486, -662', region: 'World Tree' },
  { order: 'T02', name: 'Rotmist Root', boss: 'Dandilord', palName: 'Dandilord', level: 78, element: 'Çim', weak: 'Ateş', coord: '202, 658', region: 'World Tree' },
  { order: 'T03', name: 'Forbidden Laboratory', boss: 'Modified Tower Boss Gauntlet', palName: null, level: 78, element: '—', weak: '—', coord: '-655, 610', region: 'World Tree', generic: true },
  { order: 'T04', name: '???', boss: 'Zenara & Astralym', palName: 'Astralym', level: 80, element: 'Nötr', weak: 'Karanlık', coord: '-641, -132', region: 'World Tree', final: true },
].map(tower => ({ ...tower, ...worldTreeCoordToMapPosition(tower.coord) }));
const worldTreeAlphaBosses = [
  ['Dualith', 75, 'Toprak', 'Çim', '119, -5'],
  ['Celesdir Noct', 79, 'Karanlık', 'Ejderha', '-467, 13'],
  ['Whalaska Ignis', 74, 'Buz', 'Ateş', '384, 51'],
  ['Mycora', 78, 'Çim', 'Ateş', '-277, -352'],
  ['Moldron Cryst', 78, 'Buz', 'Ateş', '-504, 314'],
  ['Renjishi', 78, 'Ateş', 'Su', '440, 485'],
  ['Aegidron', 79, 'Ejderha', 'Buz', '-459, -156'],
].map((row, index) => { const point = worldTreeCoordToMapPosition(row[4]); return { name: row[0], level: row[1], element: row[2], weak: row[3], coord: row[4], region: 'World Tree', mapX: point.x, mapY: point.y, index }; });
const worldTreeFastTravel = [
  ['Rotmist Root', '214, 647'], ['Forbidden Laboratory', '-647, 606'], ['Shinespore Root', '-479, -657'], ['The Verdant Rootpath', '800, -36'], ['Alluvion Lakefront', '314, -156'], ['Corroded Hollow', '282, 482'], ['Remnant Riverside', '126, 437'], ['Boreal Summit', '-195, 495'], ['Abandoned Laboratory', '-558, 606'], ['Gilded City Ruins', '-144, 4'], ['Within the Seal', '-592, -101'], ['Spore Cloister', '-149, -205'], ['Lacrymal Shoal', '-453, -239'], ['Dusty Ravine', '520, 307'], ['Whimsical Wisteria Grove', '468, 35'],
].map(([name, coord]) => { const point = worldTreeCoordToMapPosition(coord); return { name, coord, mapX: point.x, mapY: point.y }; });
let mapRegion = 'palpagos';
function activeMapData() { return mapRegion === 'worldtree' ? { towers: worldTreeTowers, alpha: worldTreeAlphaBosses, travel: worldTreeFastTravel } : { towers, alpha: alphaBosses, travel: fastTravel.filter(([name]) => name !== 'World Tree Girişi').map(([name, coord, mapX, mapY]) => ({ name, coord, mapX, mapY })) }; }
const worldTreeUi = {
  tr: { towers: 'World Tree · Kuleler', alpha: 'World Tree · Normal Alpha', towerSub: 'World Tree kuleleri', alphaSub: 'doğrulanmış sabit spawn noktaları' },
  en: { towers: 'World Tree · Towers', alpha: 'World Tree · Normal Alpha', towerSub: 'World Tree towers', alphaSub: 'verified fixed spawn points' },
  es: { towers: 'World Tree · Torres', alpha: 'World Tree · Alpha normal', towerSub: 'torres de World Tree', alphaSub: 'puntos de aparición fijos verificados' },
  pt: { towers: 'World Tree · Torres', alpha: 'World Tree · Alpha normal', towerSub: 'torres da World Tree', alphaSub: 'pontos de surgimento fixos verificados' },
  de: { towers: 'World Tree · Türme', alpha: 'World Tree · Normale Alpha', towerSub: 'World-Tree-Türme', alphaSub: 'verifizierte feste Spawnpunkte' },
  fr: { towers: 'World Tree · Tours', alpha: 'World Tree · Alpha normal', towerSub: 'tours de World Tree', alphaSub: 'points d’apparition fixes vérifiés' },
  ja: { towers: 'World Tree · 塔', alpha: 'World Tree · 通常アルファ', towerSub: 'World Treeの塔', alphaSub: '確認済み固定スポーン地点' },
  ko: { towers: 'World Tree · 타워', alpha: 'World Tree · 일반 알파', towerSub: 'World Tree 타워', alphaSub: '확인된 고정 스폰 지점' },
  zh: { towers: 'World Tree · 高塔', alpha: 'World Tree · 普通 Alpha', towerSub: 'World Tree 高塔', alphaSub: '已核验的固定刷新点' },
  ru: { towers: 'World Tree · Башни', alpha: 'World Tree · Обычные Alpha', towerSub: 'Башни World Tree', alphaSub: 'проверенные фиксированные точки появления' },
};
function worldTreeText(key) { return worldTreeUi[currentLanguage]?.[key] || worldTreeUi.en[key]; }

const database = {
  items: [
    ['Pal Sphere', 'Yakalama eşyası', 'Yaygın', 'Paldium ×1 · Odun ×3 · Taş ×3'], ['Cake', 'Üretim malzemesi', 'Nadir', 'Un ×5 · Kırmızı Meyve ×8 · Süt ×7'], ['Ancient Civilization Parts', 'Malzeme', 'Nadir', 'Alpha / kule bossu düşürür'], ['Lifmunk Effigy', 'Anahtar eşya', 'Nadir', 'Power Statue yükseltmesi'], ['Pal Essence Condenser', 'Anahtar eşya', 'Epik', 'Aynı Pal’ları birleştirir'],
  ],
  weapons: [
    ['Old Bow', 'Yay', 'Yaygın', 'Odun ×30 · Taş ×5 · Fiber ×15'], ['Handgun', 'Ateşli silah', 'Sıradışı', 'Ingot ×25 · High Quality Pal Oil ×5'], ['Pump-Action Shotgun', 'Ateşli silah', 'Nadir', 'Refined Ingot ×40 · Polymer ×20'], ['Rocket Launcher', 'Ateşli silah', 'Epik', 'Pal Metal Ingot ×75 · Carbon Fiber ×30'], ['Lifmunk’s Submachine Gun', 'Pal Gear', 'Nadir', 'Technology Lv 11 · Lifmunk'],
  ],
  armor: [
    ['Cloth Outfit', 'Zırh', 'Yaygın', 'Cloth ×2'], ['Tundra Outfit', 'Soğuk dirençli', 'Yaygın', 'Cloth ×3 · Ice Organ ×2'], ['Heat Resistant Pelt Armor', 'Sıcak dirençli', 'Sıradışı', 'Leather ×15 · Flame Organ ×4'], ['Pal Metal Armor', 'Zırh', 'Epik', 'Pal Metal Ingot ×30 · Leather ×30'], ['Shield', 'Kalkan', 'Nadir', 'Paldium Fragment ×20 · Fiber ×20'],
  ],
  technology: [
    ['Egg Incubator', 'Teknoloji Lv 10', 'Ancient', 'Paldium ×10 · Cloth ×5 · Stone ×30'], ['Breeding Farm', 'Teknoloji Lv 19', 'Nadir', 'Wooden Board ×10 · Stone ×20 · Fiber ×50'], ['Pal Essence Condenser', 'Teknoloji Lv 14', 'Ancient', 'Pal Essence Condenser'], ['Weapon Assembly Line II', 'Teknoloji Lv 32', 'Epik', 'Refined Ingot ×100 · Circuit Board ×30'], ['Legendary Sphere', 'Teknoloji Lv 44', 'Efsanevi', 'Pal Metal Ingot ×10 · Paldium ×50'],
  ],
};

// PalDB'nin güncel oyun verisinden alınan gizli breed rank değerleri.
const breedRankByName = {"Lamball":3050,"Celaray Lux":2380,"Clovee":2970,"Hoocrates":2940,"Flambelle":2700,"Killamari Primo":2540,"Sweepa":2150,"Azurobe":1830,"Jellroy":2590,"Tocotoco":2730,"Arsox":2320,"Vanwyrm Cryst":1430,"Polapup":1660,"Robinquill":2260,"Helzephyr Lux":960,"Bushi":1560,"Petallia Ignis":820,"Relaxaurus":1090,"Ra":1600,"Chillet":2330,"Broncherry Aqua":1080,"Warsect":1280,"Shroomer Noct":1450,"Quivern":1210,"Reptyro Cryst":600,"Wumpo":830,"Anubis":480,"Xenovader":1820,"Whalaska":710,"Celesdir Noct":270,"Snock Terra":1500,"Lapure":810,"Roujay":530,"Grizzbolt":1020,"Bastigor":50,"Paladius":180,"Cattiva":2760,"Cremis":2890,"Jolthog":3030,"Melpaca":2720,"Rooby":2870,"Fuddler":2790,"Turtacle":2410,"Azurobe Cryst":1220,"Amione":2520,"Univolt":2270,"Muffly":2480,"Felbat":1570,"Polapup Terra":1100,"Robinquill Terra":2050,"Elgrove":2020,"Bushi Noct":840,"Leafan":1410,"Relaxaurus Lux":770,"Menasting":1120,"Chillet Ignis":1950,"Dumud":2290,"Warsect Terra":630,"Icelyn":1260,"Quivern Botan":1300,"Starryon":1150,"Wumpo Botan":610,"Sekhmet":870,"Xenogard":990,"Whalaska Ignis":370,"Astegon":490,"Souffline":2000,"Eidrolon":300,"Venusa":970,"Lyleen":240,"Shaolong":40,"Necromus":190,"Chikipi":3080,"Croajiro":2600,"Jolthog Cryst":2850,"Kingpaca":2220,"Mau":3040,"Eikthyrdeer":2710,"Turtacle Terra":1330,"Sparkit":3010,"Gloopie":2530,"Univolt Cryst":540,"Bristla":2690,"Vaelet":1480,"Leezpunk":2670,"Flopie":2660,"Elgrove Cryst":440,"Munchill":2130,"Incineram":1470,"Foxcicle":1970,"Menasting Terra":640,"Ragnahawk":1050,"Dumud Gild":1620,"Frostplume":860,"Gildra":1170,"Lullu":1990,"Starryon Primo":430,"Sootseer":980,"Prixter":1510,"Prunelia":1390,"Verdash":1160,"Knocklem":260,"Lapiron":1680,"Eidrolon Ignis":140,"Mycora":760,"Lyleen Noct":220,"Silvance":80,"Frostallion":150,"Lifmunk":3020,"Croajiro Noct":1860,"Depresso":3000,"Kingpaca Cryst":1530,"Mau Cryst":2750,"Eikthyrdeer Terra":2580,"Hangyu":2780,"Kelpsea":2810,"Gloopie Primo":1630,"Gobfin":2550,"Cinnamoth":2620,"Beegarde":2350,"Leezpunk Ignis":2640,"Wixen":2080,"Lunaris":2010,"Mammorest":1340,"Incineram Noct":1310,"Beakon":1690,"Needoll":2420,"Moldron":750,"Braloha":1030,"Jormuntide":590,"Kikit":2310,"Pierdon":1110,"Carnibora":1700,"Prixter Lux":850,"Nitemary":1230,"Splatterina":780,"Knocklem Ignis":210,"Hoodle":1770,"Dynamoff":1400,"Loomen":890,"Orserk":120,"Dandilord":60,"Frostallion Noct":110,"Fuack":2980,"Herbil":2630,"Pengullet":2960,"Daedream":2910,"Rushoar":2880,"Direhowl":2680,"Hangyu Cryst":2510,"Kelpsea Ignis":2470,"Galeclaw":2570,"Gobfin Ignis":2430,"Puffolt":2360,"Elizabee":1790,"Gorirat":2140,"Wixen Noct":1490,"Fenglope":1960,"Mammorest Cryst":1070,"Dazzi":2400,"Beakon Cryst":580,"Needoll Noct":1580,"Moldron Cryst":380,"Kitsun":1670,"Sibelyx":1810,"Jormuntide Ignis":170,"Yakumo":2230,"Pierdon Cryst":460,"Blazamut":410,"Tetroise":790,"Nitemary Botan":1320,"Gildane":730,"Silvegis":560,"Slowatt":1750,"Tropicaw":1350,"Wistella":1180,"Faleris":500,"Bellanoir":620,"Neptilius":160,"Fuack Ignis":2300,"Teafant":3070,"Pengullet Lux":2490,"Tanzee":2900,"Foxparks":2990,"Caprity":2610,"Woolipop":2820,"Ribbuny":2860,"Wispaw":2250,"Loupmoon":2110,"Elphidran":2280,"Lovander":2090,"Gorirat Terra":1880,"Katress":2040,"Fenglope Lux":900,"Finsider":2450,"Dazzi Noct":1910,"Ghangler":880,"Reindrix":1930,"Palumba":1240,"Kitsun Noct":800,"Sibelyx Primo":650,"Suzaku":1200,"Skutlass":1420,"Cryolinx":1040,"Blazamut Ryu":100,"Tetroise Primo":200,"Smokie":1760,"Dogen":1460,"Azurmane":420,"Bakemi":1540,"Flaracle":390,"Solenne":280,"Faleris Aqua":450,"Bellanoir Libero":130,"Jetragon":70,"Vixy":3060,"Gumoss":2950,"Penking":2070,"Tanzee Ignis":2830,"Foxparks Cryst":2500,"Caprity Noct":1940,"Woolipop Terra":2030,"Ribbuny Botan":2460,"Nitewing":2560,"Loupmoon Cryst":1290,"Elphidran Aqua":1640,"Grintale":2120,"Surfent":2440,"Katress Ignis":1800,"Dinossom":2100,"Finsider Ignis":2240,"Pyrin":1980,"Ghangler Ignis":720,"Mossanda":2060,"Digtoise":1550,"Blazehowl":1360,"Maraith":1710,"Suzaku Aqua":740,"Skutlass Ignis":1590,"Cryolinx Terra":470,"Dualith":510,"Nyafia":1250,"Smokie Cryst":1610,"Bulldosu":1190,"Valentail":1900,"Solmora":1370,"Ophydia":230,"Renjishi":290,"Shadowbeak":550,"Xenolord":400,"Panthalus":20,"Celaray":2740,"Pupperai":2930,"Penking Lux":1850,"Nox":2920,"Killamari":2770,"Swee":2840,"Mozzarina":2800,"Jelliette":2650,"Tombat":2340,"Cawgnito":2370,"Vanwyrm":1650,"Tarantriss":1730,"Surfent Terra":1840,"Helzephyr":1130,"Dinossom Lux":1890,"Petallia":1720,"Pyrin Noct":1870,"Rayhound":1920,"Mossanda Lux":1440,"Broncherry":1380,"Blazehowl Noct":1270,"Shroomer":1520,"Dazemu":2210,"Reptyro":1060,"Snugloo":2390,"Dualith Noct":250,"Mimog":1740,"Omascul":1140,"Celesdir":570,"Snock":1780,"Solmora Lux":1000,"Dupin":520,"Aegidron":30,"Selyne":360,"Hartalis":90,"Astralym":10,"Rayhound Cryst":1600};
const palCatalog = allPals.filter(p => !p.no.startsWith('T'));
const breedablePals = palCatalog;
const breedSpecialRows = [
  ['Relaxaurus','Sparkit','Relaxaurus Lux'],['Incineram','Maraith','Incineram Noct'],['Mau','Pengullet','Mau Cryst'],['Vanwyrm','Foxcicle','Vanwyrm Cryst'],['Eikthyrdeer','Hangyu','Eikthyrdeer Terra'],['Elphidran','Surfent','Elphidran Aqua'],['Pyrin','Katress','Pyrin Noct'],['Mammorest','Wumpo','Mammorest Cryst'],['Mossanda','Grizzbolt','Mossanda Lux'],['Dinossom','Rayhound','Dinossom Lux'],['Jolthog','Pengullet','Jolthog Cryst'],['Frostallion','Helzephyr','Frostallion Noct'],['Kingpaca','Reindrix','Kingpaca Cryst'],['Lyleen','Menasting','Lyleen Noct'],['Leezpunk','Flambelle','Leezpunk Ignis'],['Blazehowl','Felbat','Blazehowl Noct'],['Robinquill','Fuddler','Robinquill Terra'],['Broncherry','Fuack','Broncherry Aqua'],['Surfent','Dumud','Surfent Terra'],['Gobfin','Rooby','Gobfin Ignis'],['Suzaku','Jormuntide','Suzaku Aqua'],['Reptyro','Foxcicle','Reptyro Cryst'],['Hangyu','Swee','Hangyu Cryst'],['Jormuntide','Blazehowl','Jormuntide Ignis'],['Bellanoir','Bellanoir Libero','Bellanoir'],['Katress','Wixen','Wixen Noct'],['Katress','Wixen','Katress Ignis'],['Gorirat','Kikit','Gorirat Terra'],['Chillet','Arsox','Chillet Ignis'],['Quivern','Lullu','Quivern Botan'],['Helzephyr','Beakon','Helzephyr Lux'],['Bushi','Sootseer','Bushi Noct'],['Menasting','Knocklem','Menasting Terra'],['Foxparks','Foxcicle','Foxparks Cryst'],['Dazzi','Omascul','Dazzi Noct'],['Cryolinx','Dazemu','Cryolinx Terra'],['Fenglope','Azurmane','Fenglope Lux'],['Caprity','Tarantriss','Caprity Noct'],['Loupmoon','Sweepa','Loupmoon Cryst'],['Faleris','Jormuntide','Faleris Aqua'],['Ribbuny','Bristla','Ribbuny Botan'],['Warsect','Digtoise','Warsect Terra'],['Kitsun','Nyafia','Kitsun Noct'],['Gildane','Eikthyrdeer Terra','Celesdir'],['Killamari','Ribbuny','Killamari Primo'],['Pengullet','Sparkit','Pengullet Lux'],['Penking','Rayhound','Penking Lux'],['Celaray','Univolt','Celaray Lux'],['Fuack','Flambelle','Fuack Ignis'],['Dumud','Eikthyrdeer Terra','Dumud Gild'],['Turtacle','Digtoise','Turtacle Terra'],['Croajiro','Bushi Noct','Croajiro Noct'],['Azurobe','Frostplume','Azurobe Cryst'],['Whalaska','Chillet Ignis','Whalaska Ignis'],['Ghangler','Sootseer','Ghangler Ignis'],['Finsider','Gobfin Ignis','Finsider Ignis'],['Tanzee','Flambelle','Tanzee Ignis'],['Univolt','Frostplume','Univolt Cryst'],['Rayhound','Foxcicle','Rayhound Cryst'],['Beakon','Frostplume','Beakon Cryst'],['Woolipop','Kikit','Woolipop Terra'],['Prixter','Helzephyr Lux','Prixter Lux'],['Smokie','Munchill','Smokie Cryst'],['Nitemary','Petallia','Nitemary Botan'],['Starryon','Celesdir','Starryon Primo'],['Gloopie','Valentail','Gloopie Primo'],['Sibelyx','Lapure','Sibelyx Primo'],['Knocklem','Ragnahawk','Knocklem Ignis'],['Petallia','Bushi','Petallia Ignis'],['Celesdir','Kitsun Noct','Celesdir Noct'],['Polapup','Surfent Terra','Polapup Terra'],['Solmora','Slowatt','Solmora Lux'],['Dualith','Sootseer','Dualith Noct'],['Tetroise','Celesdir','Tetroise Primo'],['Eidrolon','Suzaku','Eidrolon Ignis'],['Moldron','Reptyro Cryst','Moldron Cryst'],['Pierdon','Wumpo','Pierdon Cryst'],['Skutlass','Gobfin Ignis','Skutlass Ignis'],['Snock','Turtacle Terra','Snock Terra'],['Needoll','Prunelia','Needoll Noct'],['Elgrove','Pierdon Cryst','Elgrove Cryst']
];
const breedingPairs = new Map(breedSpecialRows.map(row => [key(row[0], row[1]), row[2]]));
function breedResultFor(a, b) {
  const special = breedingPairs.get(key(a, b));
  if (special) return { name: special, special: true, average: null };
  const aRank = breedRankByName[a]; const bRank = breedRankByName[b];
  if (!Number.isFinite(aRank) || !Number.isFinite(bRank)) return null;
  const average = (aRank + bRank) / 2;
  const result = breedablePals.reduce((best, pal) => { const rank = breedRankByName[pal.name]; if (!Number.isFinite(rank)) return best; const distance = Math.abs(rank - average); return !best || distance < best.distance || (distance === best.distance && rank < best.rank) ? { pal, distance, rank } : best; }, null);
  return result ? { name: result.pal.name, special: false, average } : null;
}

const tierRows = [
  { rank: 'S', name: 'Jetragon', role: 'Savaş / hava bineği', tag: 'En hızlı uçan binek', color: '#c7f46b' },
  { rank: 'S', name: 'Orserk', role: 'Savaş / elektrik üretimi', tag: 'Elektrik + Ejderha baskısı', color: '#c7f46b' },
  { rank: 'S', name: 'Frostallion', role: 'Savaş / buz bineği', tag: 'Efsanevi buz hasarı', color: '#c7f46b' },
  { rank: 'S', name: 'Shadowbeak', role: 'Savaş / karanlık', tag: 'Yüksek Dark burst', color: '#c7f46b' },
  { rank: 'A', name: 'Anubis', role: 'Base / el işi', tag: 'Handiwork Lv6 · Mining Lv6', color: '#76ead5' },
  { rank: 'A', name: 'Lyleen', role: 'Base / iyileştirme', tag: 'Goddess of Harvest', color: '#76ead5' },
  { rank: 'A', name: 'Bastigor', role: 'Base / soğutma', tag: 'Cooling Lv8', color: '#76ead5' },
  { rank: 'B', name: 'Lifmunk', role: 'Erken oyun / üs', tag: 'Ekim + toplama', color: '#ffab58' },
];
const tierRankOverrides = {
  S: new Set(['Jetragon','Orserk','Frostallion','Frostallion Noct','Shadowbeak','Paladius','Necromus','Astegon','Blazamut']),
  A: new Set(['Anubis','Lyleen','Lyleen Noct','Jormuntide','Suzaku','Beakon','Bastigor','Quivern','Verdash','Ragnahawk','Faleris','Reptyro','Knocklem','Grizzbolt','Warsect','Mossanda','Mossanda Lux','Wumpo','Wumpo Botan','Azurobe','Fenglope','Fenglope Lux']),
  B: new Set(['Lifmunk','Foxparks','Pengullet','Penking','Chillet','Chillet Ignis','Elizabee','Univolt','Galeclaw','Vaelet','Petallia','Broncherry','Broncherry Aqua','Nitewing','Katress','Bushi','Kitsun','Dogen','Yakumo','Gorirat','Digtoise','Blazehowl','Helzephyr','Jetragon']),
};
let selectedTier = 'all';
function tierForPal(p) { if (p.no.startsWith('T')) return 'D'; for (const rank of ['S','A','B']) if (tierRankOverrides[rank].has(p.name)) return rank; return Number.parseInt(p.no, 10) <= 50 ? 'C' : 'B'; }
function tierTagForPal(p, rank) { const curated = tierRows.find(row => row.name === p.name); return curated ? curated.tag : ({ S:'Endgame savaş / binek', A:'Güçlü savaş / üs', B:'Güvenilir genel kullanım', C:'Duruma bağlı / niş rol', D:'Palworld katalog girdisi' }[rank]); }

/* Habitat browser: day/night spawn data is read from PalKit's Palworld 1.0.1
   game-data mirror. The local region file remains a safe fallback when the
   optional map script is blocked or still loading. */
const habitatLabels = {
  tr: { habitatFinder:'HABİTAT BULUCU', habitatTitle:'Pallar nerede yaşar?', habitatDataNote:'Palworld 1.0.1 dağılım verisi', habitatPicker:'Pal habitat seçici', daytime:'Gündüz', nighttime:'Gece', habitatSearch:'Pal ara veya numara yaz...', habitatRegionFilter:'Harita bölgesi', allHabitats:'Tüm haritalar', mainMap:'Ana harita', worldTreeMap:'World Tree', worldTreeOnly:'Sadece World Tree', allPals:'Tüm Pallar', openPalRecord:'Pal kaydını aç', habitats:'Habitatlar', points:'nokta', noWild:'Açık dünya habitatı yok', switchMap:'Bu Pal diğer haritada görünüyor', loading:'Habitat verisi yükleniyor…', mapHint:'Parlak bölgeler bu Palın seçili zamandaki karşılaşma noktalarıdır.', habitatFootnote:'Parlak bölgeler oyundaki Paldeck dağılım noktalarını gösterir. Bazı raid, boss ve breeding-only Palların vahşi habitatı yoktur.', noMapData:'Bu harita için konum verisi yok.' },
  en: { habitatFinder:'HABITAT FINDER', habitatTitle:'Where do Pals live?', habitatDataNote:'Palworld 1.0.1 distribution data', habitatPicker:'Pal habitat picker', daytime:'Day', nighttime:'Night', habitatSearch:'Search a Pal or number...', habitatRegionFilter:'Map region', allHabitats:'All maps', mainMap:'Main map', worldTreeMap:'World Tree', worldTreeOnly:'World Tree only', allPals:'All Pals', openPalRecord:'Open Pal record', habitats:'Habitats', points:'points', noWild:'No open-world habitat', switchMap:'This Pal appears on the other map', loading:'Loading habitat data…', mapHint:'Bright areas show this Pal’s encounter points for the selected time.', habitatFootnote:'Bright areas show Paldeck distribution points from the game. Some raid, boss and breeding-only Pals have no wild habitat.', noMapData:'No location data for this map.' },
  es: { habitatFinder:'BUSCADOR DE HÁBITAT', habitatTitle:'¿Dónde viven los Pals?', habitatDataNote:'Datos de distribución de Palworld 1.0.1', habitatPicker:'Selector de hábitat', daytime:'Día', nighttime:'Noche', habitatSearch:'Busca un Pal o número...', habitatRegionFilter:'Región del mapa', allHabitats:'Todos los mapas', mainMap:'Mapa principal', worldTreeMap:'World Tree', worldTreeOnly:'Solo World Tree', allPals:'Todos los Pals', openPalRecord:'Abrir registro del Pal', habitats:'Hábitats', points:'puntos', noWild:'Sin hábitat de mundo abierto', switchMap:'Este Pal aparece en el otro mapa', loading:'Cargando datos…', mapHint:'Las zonas brillantes muestran los encuentros de este Pal.', habitatFootnote:'Las zonas brillantes muestran puntos de distribución de Paldeck. Algunos Pals de incursión, jefe o crianza no tienen hábitat salvaje.', noMapData:'No hay datos para este mapa.' },
  pt: { habitatFinder:'BUSCADOR DE HABITAT', habitatTitle:'Onde vivem os Pals?', habitatDataNote:'Dados de distribuição do Palworld 1.0.1', habitatPicker:'Seletor de habitat', daytime:'Dia', nighttime:'Noite', habitatSearch:'Pesquise um Pal ou número...', habitatRegionFilter:'Região do mapa', allHabitats:'Todos os mapas', mainMap:'Mapa principal', worldTreeMap:'World Tree', worldTreeOnly:'Somente World Tree', allPals:'Todos os Pals', openPalRecord:'Abrir registro do Pal', habitats:'Habitats', points:'pontos', noWild:'Sem habitat no mundo aberto', switchMap:'Este Pal aparece no outro mapa', loading:'Carregando dados…', mapHint:'As áreas brilhantes mostram os encontros deste Pal.', habitatFootnote:'As áreas brilhantes mostram pontos de distribuição do Paldeck. Alguns Pals de raid, chefe ou reprodução não têm habitat selvagem.', noMapData:'Sem dados para este mapa.' },
  de: { habitatFinder:'HABITAT-FINDER', habitatTitle:'Wo leben Pals?', habitatDataNote:'Palworld-1.0.1-Verbreitungsdaten', habitatPicker:'Pal-Habitat-Auswahl', daytime:'Tag', nighttime:'Nacht', habitatSearch:'Pal oder Nummer suchen...', habitatRegionFilter:'Kartenregion', allHabitats:'Alle Karten', mainMap:'Hauptkarte', worldTreeMap:'World Tree', worldTreeOnly:'Nur World Tree', allPals:'Alle Pals', openPalRecord:'Pal-Eintrag öffnen', habitats:'Habitate', points:'Punkte', noWild:'Kein Habitat in der offenen Welt', switchMap:'Dieser Pal erscheint auf der anderen Karte', loading:'Habitatdaten werden geladen…', mapHint:'Helle Bereiche zeigen Begegnungspunkte dieses Pals.', habitatFootnote:'Helle Bereiche zeigen Paldeck-Verteilungspunkte. Einige Raid-, Boss- und Zucht-Pals haben kein wildes Habitat.', noMapData:'Keine Daten für diese Karte.' },
  fr: { habitatFinder:'CHERCHEUR D’HABITAT', habitatTitle:'Où vivent les Pals ?', habitatDataNote:'Données de distribution Palworld 1.0.1', habitatPicker:'Sélecteur d’habitat', daytime:'Jour', nighttime:'Nuit', habitatSearch:'Rechercher un Pal ou un numéro...', habitatRegionFilter:'Région de carte', allHabitats:'Toutes les cartes', mainMap:'Carte principale', worldTreeMap:'World Tree', worldTreeOnly:'World Tree uniquement', allPals:'Tous les Pals', openPalRecord:'Ouvrir la fiche du Pal', habitats:'Habitats', points:'points', noWild:'Aucun habitat en monde ouvert', switchMap:'Ce Pal apparaît sur l’autre carte', loading:'Chargement des données…', mapHint:'Les zones lumineuses indiquent les rencontres de ce Pal.', habitatFootnote:'Les zones lumineuses indiquent les points de distribution du Paldeck. Certains Pals de raid, boss ou élevage n’ont pas d’habitat sauvage.', noMapData:'Aucune donnée pour cette carte.' },
  ja: { habitatFinder:'生息地ファインダー', habitatTitle:'パルはどこにいる？', habitatDataNote:'Palworld 1.0.1 分布データ', habitatPicker:'パル生息地セレクター', daytime:'昼', nighttime:'夜', habitatSearch:'パル名・番号で検索...', habitatRegionFilter:'マップ地域', allHabitats:'すべてのマップ', mainMap:'メインマップ', worldTreeMap:'ワールドツリー', worldTreeOnly:'ワールドツリーのみ', allPals:'すべてのパル', openPalRecord:'パル記録を開く', habitats:'生息地', points:'地点', noWild:'野生の生息地なし', switchMap:'もう一方のマップに出現します', loading:'生息地データを読み込み中…', mapHint:'明るい範囲は選択した時間帯の遭遇地点です。', habitatFootnote:'明るい範囲はゲーム内のPaldeck分布地点です。レイド・ボス・配合限定のパルには野生の生息地がありません。', noMapData:'このマップの位置データはありません。' },
  ko: { habitatFinder:'서식지 찾기', habitatTitle:'팔은 어디에 사나요?', habitatDataNote:'Palworld 1.0.1 분포 데이터', habitatPicker:'팔 서식지 선택기', daytime:'낮', nighttime:'밤', habitatSearch:'팔 이름 또는 번호 검색...', habitatRegionFilter:'지도 지역', allHabitats:'모든 지도', mainMap:'메인 지도', worldTreeMap:'월드 트리', worldTreeOnly:'월드 트리만', allPals:'모든 팔', openPalRecord:'팔 기록 열기', habitats:'서식지', points:'지점', noWild:'야생 서식지 없음', switchMap:'다른 지도에 나타납니다', loading:'서식지 데이터 로딩 중…', mapHint:'밝은 영역은 선택한 시간대의 조우 지점입니다.', habitatFootnote:'밝은 영역은 게임 내 Paldeck 분포 지점입니다. 레이드, 보스, 교배 전용 팔은 야생 서식지가 없습니다.', noMapData:'이 지도에는 위치 데이터가 없습니다.' },
  zh: { habitatFinder:'栖息地查找器', habitatTitle:'帕鲁在哪里生活？', habitatDataNote:'Palworld 1.0.1 分布数据', habitatPicker:'帕鲁栖息地选择器', daytime:'白天', nighttime:'夜晚', habitatSearch:'搜索帕鲁或编号...', habitatRegionFilter:'地图区域', allHabitats:'全部地图', mainMap:'主地图', worldTreeMap:'世界树', worldTreeOnly:'仅世界树', allPals:'全部帕鲁', openPalRecord:'打开帕鲁记录', habitats:'栖息地', points:'个点', noWild:'没有开放世界栖息地', switchMap:'该帕鲁出现在另一张地图', loading:'正在加载栖息地数据…', mapHint:'亮色区域显示所选时间段的遭遇点。', habitatFootnote:'亮色区域显示游戏内 Paldeck 分布点。部分突袭、首领和配种限定帕鲁没有野外栖息地。', noMapData:'此地图没有位置数据。' },
  ru: { habitatFinder:'ПОИСК МЕСТ ОБИТАНИЯ', habitatTitle:'Где живут палы?', habitatDataNote:'Данные распределения Palworld 1.0.1', habitatPicker:'Выбор места обитания', daytime:'День', nighttime:'Ночь', habitatSearch:'Поиск пала или номера...', habitatRegionFilter:'Регион карты', allHabitats:'Все карты', mainMap:'Основная карта', worldTreeMap:'World Tree', worldTreeOnly:'Только World Tree', allPals:'Все палы', openPalRecord:'Открыть запись пала', habitats:'Места обитания', points:'точек', noWild:'Нет места обитания в открытом мире', switchMap:'Этот пал встречается на другой карте', loading:'Загрузка данных…', mapHint:'Светлые зоны показывают точки встреч для выбранного времени.', habitatFootnote:'Светлые зоны показывают точки распределения Paldeck из игры. У некоторых рейдовых, боссовых и племенных палов нет дикого места обитания.', noMapData:'Для этой карты нет данных.' },
};
function habitatText(key) { return habitatLabels[currentLanguage]?.[key] || habitatLabels.en[key] || key; }
const habitatData = window.PERFPROBE_HABITATS || null;
const habitatLibrary = window.PERFPROBE_PAL_LIBRARY || null;
const habitatLibraryEntries = Array.isArray(habitatLibrary?.pals) ? habitatLibrary.pals : Object.values(habitatLibrary?.pals || {});
const habitatLibraryByName = new Map(habitatLibraryEntries.map(entry => [String(entry.display_name || entry.name || '').trim(), entry]));
const habitatState = { selectedName: 'Lamball', time: 'd', map: 'm', zoom: 1, panX: 0, panY: 0, dragId: null, dragX: 0, dragY: 0, lastX: 0, lastY: 0, ready: false };
function habitatRegionForPal(pal) { const localRegions = typeof PAL_HABITAT_REGIONS !== 'undefined' ? PAL_HABITAT_REGIONS : {}; return localRegions?.[pal.name] || { dayNight: 'none', regions: [] }; }
function habitatRecordForPal(pal) { const libraryPal = habitatLibraryByName.get(pal.name); const id = libraryPal?.character_id || libraryPal?.characterId; const profile = id ? habitatData?.pals?.[id] : null; return { libraryPal, id, profile, region: habitatRegionForPal(pal) }; }
function habitatPhaseForPal(pal, time = habitatState.time) { return habitatRecordForPal(pal).profile?.[time] || null; }
function habitatCountForPal(pal, time, map = habitatState.map) { const phase = habitatPhaseForPal(pal, time); return Number(phase?.[`${map}c`]) || 0; }
function habitatTotalCountForPal(pal, time) { return habitatCountForPal(pal, time, 'm') + habitatCountForPal(pal, time, 't'); }
function habitatRegionHasWorldTree(pal) { return habitatRegionForPal(pal).regions?.some(region => /world tree/i.test(String(region))) || false; }
function habitatHasMap(pal, map) { const count = habitatCountForPal(pal, 'd', map) + habitatCountForPal(pal, 'n', map); if (count > 0) return true; const regionNames = habitatRegionForPal(pal).regions || []; return map === 't' ? habitatRegionHasWorldTree(pal) : regionNames.some(region => !/world tree/i.test(String(region))); }
function habitatHasAny(pal) { return habitatHasMap(pal, 'm') || habitatHasMap(pal, 't') || habitatRegionForPal(pal).regions?.length > 0; }
function habitatAvailabilityText(pal) { const region = habitatRegionForPal(pal); const day = habitatTotalCountForPal(pal, 'd'); const night = habitatTotalCountForPal(pal, 'n'); if (day || night) return `☀ ${day || '—'} · ☾ ${night || '—'}`; if (region.regions?.length && region.dayNight === 'night') return `☀ — · ☾ ${habitatText('nighttime')}`; if (region.regions?.length && region.dayNight === 'both') return `☀ ${habitatText('daytime')} · ☾ ${habitatText('nighttime')}`; return habitatText('noWild'); }
function habitatRegionSummary(pal) { const region = habitatRegionForPal(pal); return region.regions?.length ? region.regions.join(' · ') : habitatText('noWild'); }
function habitatCardMarkup(pal) { const region = habitatRegionForPal(pal); const has = habitatHasAny(pal); return `<div class="pal-card-habitat ${has ? '' : 'is-empty'}"><span>◌</span><strong>${escapeHtml(habitatAvailabilityText(pal))}</strong><small>${escapeHtml(region.regions?.length ? (habitatRegionHasWorldTree(pal) ? habitatText('worldTreeMap') : region.regions[0]) : habitatText('noWild'))}</small></div>`; }
function habitatModalMarkup(pal) { const regionText = habitatRegionSummary(pal); const main = habitatHasMap(pal, 'm'); const tree = habitatHasMap(pal, 't'); return `<div class="habitat-modal-block"><div class="habitat-modal-head"><strong>${escapeHtml(habitatText('habitats'))}</strong><span>${escapeHtml(habitatAvailabilityText(pal))}</span></div><div class="habitat-modal-times"><span class="day"><i>☀</i>${escapeHtml(habitatText('daytime'))}<b>${habitatTotalCountForPal(pal, 'd') || '—'}</b></span><span class="night"><i>☾</i>${escapeHtml(habitatText('nighttime'))}<b>${habitatTotalCountForPal(pal, 'n') || '—'}</b></span><span><i>⌖</i>${main ? escapeHtml(habitatText('mainMap')) : ''}${main && tree ? ' + ' : ''}${tree ? escapeHtml(habitatText('worldTreeMap')) : (!main ? escapeHtml(habitatText('noWild')) : '')}</span></div><div class="habitat-modal-regions"><b>${escapeHtml(habitatText('habitats'))}</b><span>${escapeHtml(regionText)}</span></div><button type="button" class="habitat-modal-open" id="openHabitatFromModal" data-pal="${escapeHtml(pal.name)}">${escapeHtml(habitatText('habitatFinder'))} ↗</button></div>`; }
function habitatMapInfo(mapKey) { const fallbackBounds = mapKey === 't' ? { min_x: 347351.5, max_x: 689148.5, min_y: -818197, max_y: -476400, size: 512 } : { min_x: -1099400, max_x: 349400, min_y: -724400, max_y: 724400, size: 1024 }; const fallbackImage = mapKey === 't' ? (typeof WORLD_TREE_MAP_IMAGE !== 'undefined' ? WORLD_TREE_MAP_IMAGE : 'https://raw.githubusercontent.com/Nifrendil/pal-atlas/main/public/maps/worldtree.webp') : 'https://palworld-db.com/worldmap.webp'; const map = habitatData?.maps?.[mapKey] || {}; const rawImage = String(map.image || ''); const image = rawImage.startsWith('http') ? rawImage : (rawImage ? `https://pal-kit.com/${rawImage.replace(/^\/+/, '')}` : fallbackImage); const bounds = { ...fallbackBounds, ...(map.bounds || {}) }; const rawSize = bounds.size || map.size || fallbackBounds.size; const width = Number(typeof rawSize === 'object' ? (rawSize.width || rawSize.x || fallbackBounds.size) : rawSize) || fallbackBounds.size; const height = Number(typeof rawSize === 'object' ? (rawSize.height || rawSize.y || width) : rawSize) || width; return { ...map, image, width, height, bounds }; }
// PalKit's v1.0.1 habitat strings already contain canvas-pixel coordinates;
// they are not normalized 16-bit values and must not be divided by 65535.
function decodeHabitatPoints(encoded, mapInfo) { if (!encoded) return []; if (Array.isArray(encoded)) return encoded.map(point => { const x = Number(point.x ?? point[0]) || 0; const y = Number(point.y ?? point[1]) || 0; return { x: x >= 0 && x <= 1 ? x * mapInfo.width : x, y: y >= 0 && y <= 1 ? y * mapInfo.height : y }; }).filter(point => point.x >= 0 && point.y >= 0 && point.x <= mapInfo.width && point.y <= mapInfo.height); try { const encodedText = String(encoded); const normalized = encodedText.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(encodedText.length / 4) * 4, '='); const binary = atob(normalized); const bytes = new Uint8Array(binary.length); for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index); const points = []; for (let index = 0; index + 3 < bytes.length; index += 4) { const x = bytes[index] | (bytes[index + 1] << 8); const y = bytes[index + 2] | (bytes[index + 3] << 8); if (x <= mapInfo.width && y <= mapInfo.height) points.push({ x, y }); } return points; } catch (error) { return []; } }
function habitatMapTransform() { const viewport = document.querySelector('#habitatMapViewport'); const frame = document.querySelector('#habitatMapFrame'); if (!viewport || !frame) return; const maxX = Math.max(0, frame.clientWidth * (habitatState.zoom - 1)); const maxY = Math.max(0, frame.clientHeight * (habitatState.zoom - 1)); habitatState.panX = Math.max(-maxX, Math.min(maxX, habitatState.panX)); habitatState.panY = Math.max(-maxY, Math.min(maxY, habitatState.panY)); viewport.style.transform = `translate3d(${habitatState.panX}px, ${habitatState.panY}px, 0) scale(${habitatState.zoom})`; const output = document.querySelector('#habitatZoomLevel'); if (output) output.textContent = `${Math.round(habitatState.zoom * 100)}%`; }
function habitatSetZoom(nextZoom, focusX, focusY) { const frame = document.querySelector('#habitatMapFrame'); const oldZoom = habitatState.zoom; const zoom = Math.max(1, Math.min(3, Number(nextZoom) || 1)); if (frame && focusX !== undefined && focusY !== undefined && zoom !== oldZoom) { const ratio = zoom / oldZoom - 1; habitatState.panX -= (focusX - frame.clientWidth / 2) * ratio; habitatState.panY -= (focusY - frame.clientHeight / 2) * ratio; } habitatState.zoom = zoom; if (zoom === 1) { habitatState.panX = 0; habitatState.panY = 0; } habitatMapTransform(); }
function drawHabitatMap() { const image = document.querySelector('#habitatMapImage'); const canvas = document.querySelector('#habitatCanvas'); const message = document.querySelector('#habitatMapMessage'); const pal = findPal(habitatState.selectedName); if (!image || !canvas || !message || !pal) return; const info = habitatMapInfo(habitatState.map); image.src = info.image; image.alt = `${pal.name} · ${habitatState.map === 't' ? habitatText('worldTreeMap') : habitatText('mainMap')}`; canvas.width = info.width; canvas.height = info.height; const context = canvas.getContext('2d'); context.clearRect(0, 0, info.width, info.height); const phase = habitatPhaseForPal(pal); const encoded = phase?.[habitatState.map]; const count = habitatCountForPal(pal, habitatState.time, habitatState.map); const points = decodeHabitatPoints(encoded, info); const otherMap = habitatState.map === 'm' ? 't' : 'm'; const otherCount = habitatCountForPal(pal, habitatState.time, otherMap); if (!points.length || !count) { message.textContent = otherCount ? `${habitatText('switchMap')} · ${habitatState.map === 'm' ? habitatText('worldTreeMap') : habitatText('mainMap')}` : (habitatData ? habitatText('noMapData') : habitatText('loading')); message.classList.add('show'); return; } message.textContent = habitatText('mapHint'); message.classList.remove('show'); const color = habitatState.time === 'd' ? '#4cffc4' : '#bda8ff'; const worldSpan = Number(info.bounds?.max_x) - Number(info.bounds?.min_x); const radius = Math.max(2.5, Math.min(info.width * .12, (Number(phase?.r) || 15000) / (worldSpan > 0 ? worldSpan : 1450000) * info.width)); const visiblePoints = points.slice(0, count || points.length); context.save(); context.globalCompositeOperation = 'lighter'; context.shadowColor = color; context.shadowBlur = Math.max(4, radius * .42); context.fillStyle = `${color}94`; context.beginPath(); visiblePoints.forEach(point => { context.moveTo(point.x + radius, point.y); context.arc(point.x, point.y, radius, 0, Math.PI * 2); }); context.fill(); context.shadowBlur = 0; context.fillStyle = color; context.beginPath(); visiblePoints.forEach(point => { context.moveTo(point.x + Math.max(1.5, radius * .2), point.y); context.arc(point.x, point.y, Math.max(1.5, radius * .2), 0, Math.PI * 2); }); context.fill(); context.restore(); }
function renderHabitatFinder() { const list = document.querySelector('#habitatPalList'); if (!list) return; document.querySelectorAll('[data-habitat-i18n]').forEach(node => { node.textContent = habitatText(node.dataset.habitatI18n); }); document.querySelectorAll('[data-habitat-placeholder]').forEach(node => { node.placeholder = habitatText(node.dataset.habitatPlaceholder); }); document.querySelectorAll('[data-habitat-aria]').forEach(node => { node.setAttribute('aria-label', habitatText(node.dataset.habitatAria)); }); const query = (document.querySelector('#habitatSearch')?.value || '').trim().toLocaleLowerCase(); const regionFilter = document.querySelector('#habitatRegionFilter')?.value || 'all'; const filtered = palCatalog.filter(pal => { const searchable = `${pal.name} ${pal.no} ${pal.elementLabel}`.toLocaleLowerCase(); const matchesQuery = !query || searchable.includes(query); const matchesRegion = regionFilter === 'all' || (regionFilter === 'tonly' ? habitatHasMap(pal, 't') && !habitatHasMap(pal, 'm') : habitatHasMap(pal, regionFilter)); return matchesQuery && matchesRegion; }); const count = document.querySelector('#habitatListCount'); if (count) count.textContent = `${filtered.length} / ${palCatalog.length}`; if (!filtered.some(pal => pal.name === habitatState.selectedName)) habitatState.selectedName = filtered[0]?.name || 'Lamball'; list.innerHTML = filtered.length ? filtered.map(pal => `<button type="button" class="habitat-pal-item ${pal.name === habitatState.selectedName ? 'active' : ''}" data-habitat-pal="${escapeHtml(pal.name)}"><img src="${pal.image}" alt="" loading="lazy" onerror="this.style.opacity='.25'"><span class="habitat-pal-copy"><strong>${escapeHtml(pal.name)}</strong><small>#${escapeHtml(pal.no)} · ${escapeHtml(localizedElement(pal.element))}</small></span><span class="habitat-pal-phases">${escapeHtml(habitatAvailabilityText(pal))}</span></button>`).join('') : `<div class="empty-state">${escapeHtml(getTranslation('noRecords') || 'Kayıt yok')}</div>`; const selected = findPal(habitatState.selectedName); const icon = document.querySelector('#habitatSelectedIcon'); const name = document.querySelector('#habitatSelectedName'); const meta = document.querySelector('#habitatSelectedMeta'); const summary = document.querySelector('#habitatMapSummary'); const day = document.querySelector('#habitatDayCount'); const night = document.querySelector('#habitatNightCount'); const regions = document.querySelector('#habitatRegions'); const selectedRegion = habitatRegionForPal(selected); const hasRegions = selectedRegion.regions?.length > 0; if (icon) { icon.src = selected.image; icon.alt = selected.name; } if (name) name.textContent = selected.name; if (meta) meta.textContent = `#${selected.no} · ${habitatAvailabilityText(selected)}`; if (summary) { const selectedCount = habitatCountForPal(selected, habitatState.time); summary.textContent = selectedCount ? `${selectedCount} ${habitatText('points')} · ${habitatState.map === 't' ? habitatText('worldTreeMap') : habitatText('mainMap')}` : habitatText('noMapData'); } if (day) day.textContent = habitatTotalCountForPal(selected, 'd') || (hasRegions && selectedRegion.dayNight === 'both' ? '✓' : '—'); if (night) night.textContent = habitatTotalCountForPal(selected, 'n') || (hasRegions && selectedRegion.dayNight === 'night' ? '✓' : hasRegions && selectedRegion.dayNight === 'both' ? '✓' : '—'); if (regions) regions.textContent = habitatRegionSummary(selected); regions?.setAttribute('title', habitatRegionSummary(selected)); document.querySelectorAll('.habitat-mode-btn').forEach(button => button.classList.toggle('active', button.dataset.habitatTime === habitatState.time)); document.querySelectorAll('.habitat-map-btn').forEach(button => button.classList.toggle('active', button.dataset.habitatMap === habitatState.map)); drawHabitatMap(); habitatMapTransform(); }
function focusHabitatPal(name) { habitatState.selectedName = name; renderHabitatFinder(); document.querySelector('#habitatFinder')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
function initHabitatFinder() { const list = document.querySelector('#habitatPalList'); const search = document.querySelector('#habitatSearch'); const filter = document.querySelector('#habitatRegionFilter'); const frame = document.querySelector('#habitatMapFrame'); if (!list || habitatState.ready) return; habitatState.ready = true; search?.addEventListener('input', renderHabitatFinder); filter?.addEventListener('change', renderHabitatFinder); list.addEventListener('click', event => { const item = event.target.closest('[data-habitat-pal]'); if (!item) return; habitatState.selectedName = item.dataset.habitatPal; renderHabitatFinder(); }); document.querySelectorAll('.habitat-mode-btn').forEach(button => button.addEventListener('click', () => { habitatState.time = button.dataset.habitatTime; renderHabitatFinder(); })); document.querySelectorAll('.habitat-map-btn').forEach(button => button.addEventListener('click', () => { habitatState.map = button.dataset.habitatMap; habitatSetZoom(1); renderHabitatFinder(); })); document.querySelector('#habitatZoomIn')?.addEventListener('click', () => habitatSetZoom(habitatState.zoom + .25)); document.querySelector('#habitatZoomOut')?.addEventListener('click', () => habitatSetZoom(habitatState.zoom - .25)); document.querySelector('#habitatZoomReset')?.addEventListener('click', () => habitatSetZoom(1)); document.querySelector('#habitatOpenPal')?.addEventListener('click', () => openPalModal(habitatState.selectedName)); document.addEventListener('click', event => { const button = event.target.closest('#openHabitatFromModal'); if (!button) return; closeModal(); focusHabitatPal(button.dataset.pal); }); frame?.addEventListener('pointerdown', event => { if (event.target.closest('button') || habitatState.zoom <= 1) return; habitatState.dragId = event.pointerId; habitatState.lastX = event.clientX; habitatState.lastY = event.clientY; frame.setPointerCapture(event.pointerId); event.preventDefault(); }); frame?.addEventListener('pointermove', event => { if (habitatState.dragId !== event.pointerId) return; habitatState.panX += event.clientX - habitatState.lastX; habitatState.panY += event.clientY - habitatState.lastY; habitatState.lastX = event.clientX; habitatState.lastY = event.clientY; habitatMapTransform(); event.preventDefault(); }); frame?.addEventListener('pointerup', event => { if (habitatState.dragId === event.pointerId) habitatState.dragId = null; }); frame?.addEventListener('pointercancel', () => { habitatState.dragId = null; }); frame?.addEventListener('wheel', event => { event.preventDefault(); const bounds = frame.getBoundingClientRect(); habitatSetZoom(habitatState.zoom + (event.deltaY < 0 ? .2 : -.2), event.clientX - bounds.left, event.clientY - bounds.top); }, { passive: false }); window.addEventListener('resize', habitatMapTransform); renderHabitatFinder(); }

const palGrid = document.querySelector('#palGrid'); const palResultCount = document.querySelector('#palResultCount'); let selectedElement = 'all'; let globalQuery = '';
function renderPals() {
  const query = globalQuery.trim().toLowerCase();
  const filtered = palCatalog.filter(p => (selectedElement === 'all' || p.element === selectedElement) && (!query || `${p.name} ${p.elementLabel} ${p.role} ${p.partner} ${workEntriesForPal(p).map(entry => workTypeLabel(entry.type)).join(' ')}`.toLowerCase().includes(query)));
  palResultCount.textContent = `${filtered.length} ${getTranslation('records')}`;
  palGrid.innerHTML = filtered.length ? filtered.map(p => `<article class="pal-card" data-pal="${escapeHtml(p.name)}" style="--card-color:${p.color};--card-glow:${p.glow}"><div class="pal-card-top"><span class="pal-card-no">#${p.no}</span><span class="pal-card-type">${escapeHtml(localizedElement(p.element).toUpperCase())}</span></div><div class="pal-card-image-wrap"><img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.style.display='none';this.parentElement.classList.add('image-missing')" /><span class="pal-initial">${escapeHtml(p.name.slice(0,1))}</span></div><div class="pal-card-bottom"><div class="pal-card-copy"><div class="pal-card-name">${escapeHtml(p.name)}</div><div class="pal-card-work">${workBadgesMarkup(p)}</div>${habitatCardMarkup(p)}</div><div class="pal-card-level">${p.level === '—' ? (currentLanguage === 'tr' ? 'KAYIT' : 'RECORD') : `LV ${p.level}`}</div></div></article>`).join('') : `<div class="empty-state">${currentLanguage === 'tr' ? 'Bu filtreyle eşleşen kayıt yok. Başka bir element veya arama terimi dene.' : 'No records match this filter. Try another element or search term.'}</div>`;
  palGrid.querySelectorAll('.pal-card').forEach(card => card.addEventListener('click', () => openPalModal(card.dataset.pal)));
}
function renderEggs() { document.querySelector('#eggGrid').innerHTML = eggs.map((egg, index) => { const label = localizedEgg(egg); return `<article class="egg-card" style="--egg-color:${egg.color};--egg-gradient:${egg.gradient}"><div class="egg-card-top"><span>${String(index + 1).padStart(2,'0')}</span><span>${egg.code}</span></div><div class="egg-visual large"><img src="${egg.image}" alt="${escapeHtml(egg.original)} image" loading="lazy" onerror="this.parentElement.classList.add('egg-image-missing');this.remove()"></div><h3>${escapeHtml(label.name)}</h3><p>${escapeHtml(egg.original)}</p><p>${escapeHtml(label.hint)}</p><div class="size-chips" aria-label="${getTranslation('eggSizes') || 'Egg sizes'}"><i title="${getTranslation('normal')}"></i><i title="${getTranslation('large') || 'Large'}"></i><i title="${getTranslation('giant') || 'Giant'}"></i></div></article>`; }).join(''); }
function renderTowers() { const rows = activeMapData().towers; document.querySelector('#towerList').innerHTML = rows.map(t => `<button class="tower-item ${t.level === 30 || t.final ? 'current' : ''}" data-tower="${escapeHtml(t.order)}"><span class="tower-order">${escapeHtml(t.order)}</span><span class="tower-name">${escapeHtml(localizedLocation(t.name))}<small>${escapeHtml(t.boss)} · ${escapeHtml(localizedElement(t.element))} · ${getTranslation('weakLabel') || (currentLanguage === 'tr' ? 'zayıf' : 'weak')}: ${escapeHtml(localizedElement(t.weak))}</small></span><span class="tower-level">Lv ${t.level}</span></button>`).join(''); document.querySelectorAll('.tower-item[data-tower]').forEach(item => item.addEventListener('click', () => openTowerModal(item.dataset.tower))); }
function renderAlphaList() { const list = document.querySelector('#alphaList'); const rows = activeMapData().alpha; list.innerHTML = rows.map((a, index) => `<button class="tower-item alpha-list-item" data-alpha="${index}"><span class="tower-order">${String(index + 1).padStart(2,'0')}</span><span class="tower-name">${escapeHtml(a.name)}<small>Lv ${a.level} · ${escapeHtml(localizedElement(a.element))} · ${getTranslation('weakLabel') || (currentLanguage === 'tr' ? 'zayıf' : 'weak')}: ${escapeHtml(localizedElement(a.weak))}</small></span><span class="tower-level">${escapeHtml(a.coord)}</span></button>`).join(''); list.querySelectorAll('[data-alpha]').forEach(item => item.addEventListener('click', () => openAlphaModal(item.dataset.alpha))); }
function updateWorldListSummary() { const alphaMode = document.querySelector('.world-list-tab.active')?.dataset.list === 'alpha'; const rows = activeMapData(); const worldTreeMode = mapRegion === 'worldtree'; const title = worldTreeMode ? worldTreeText(alphaMode ? 'alpha' : 'towers') : (alphaMode ? getTranslation('normalAlpha') : getTranslation('towerProgress')); const subtitle = worldTreeMode ? worldTreeText(alphaMode ? 'alphaSub' : 'towerSub') : (alphaMode ? getTranslation('fixedSpawn') : getTranslation('weakToStrong')); if (document.querySelector('#worldListTitle')) document.querySelector('#worldListTitle').textContent = title; if (document.querySelector('#worldListSubtitle')) document.querySelector('#worldListSubtitle').textContent = subtitle; if (document.querySelector('#worldListStatus')) document.querySelector('#worldListStatus').textContent = alphaMode ? `${rows.alpha.length} ${getTranslation('records')}` : `${rows.towers.length} / ${rows.towers.length}`; }
function applyMapLayerVisibility() { document.querySelectorAll('.map-toggle').forEach(toggle => document.querySelectorAll(`[data-kind="${toggle.dataset.layer}"]`).forEach(pin => { pin.style.display = toggle.classList.contains('active') ? '' : 'none'; })); }
function preloadMapPalImages(rows) { rows.forEach(a => { const p = findPal(a.name); if (!p?.image) return; const image = new Image(); image.decoding = 'async'; image.fetchPriority = 'high'; image.src = p.image; }); }
function renderMapPins() {
  const layer = document.querySelector('#mapPinLayer');
  if (!layer) return;
  const rows = activeMapData();
  const towerPins = rows.towers.map(t => `<button class="map-pin tower-pin" data-kind="towers" data-tower="${escapeHtml(t.order)}" style="left:${t.x}%;top:${t.y}%" title="${escapeHtml(t.boss)} · Lv ${t.level}"><span>♜</span><b>${escapeHtml(t.boss.split(' & ')[0].toUpperCase())}</b><em>LV ${t.level}</em></button>`).join('');
  const alphaPins = rows.alpha.map(a => { const p = findPal(a.name); return `<button class="map-pin alpha-pin" data-kind="alpha" data-alpha="${a.index}" style="left:${a.mapX}%;top:${a.mapY}%" title="${escapeHtml(a.name)} · Lv ${a.level} · ${escapeHtml(a.coord)}"><span><img src="${p.image}" alt="${escapeHtml(a.name)}" loading="eager" decoding="sync" fetchpriority="high" onerror="this.closest('.alpha-pin').classList.add('alpha-image-missing');this.remove()"></span><b>${escapeHtml(a.name)}</b><em>LV ${a.level}</em></button>`; }).join('');
  const travelPins = rows.travel.map((point, index) => `<button class="travel-pin" data-kind="travel" data-travel="${index}" style="left:${point.mapX}%;top:${point.mapY}%" title="${escapeHtml(localizedLocation(point.name))} · ${escapeHtml(point.coord)}">⌖</button>`).join('');
  layer.innerHTML = towerPins + alphaPins + travelPins;
  preloadMapPalImages(rows.alpha);
  layer.querySelectorAll('.tower-pin').forEach(pin => { pin.addEventListener('click', () => openTowerModal(pin.dataset.tower)); pin.addEventListener('mouseenter', () => showBossHover('tower', pin.dataset.tower)); pin.addEventListener('mouseleave', hideBossHover); pin.addEventListener('focus', () => showBossHover('tower', pin.dataset.tower)); pin.addEventListener('blur', hideBossHover); });
  layer.querySelectorAll('.alpha-pin').forEach(pin => { pin.addEventListener('click', () => openAlphaModal(pin.dataset.alpha)); pin.addEventListener('mouseenter', () => showBossHover('alpha', pin.dataset.alpha)); pin.addEventListener('mouseleave', hideBossHover); pin.addEventListener('focus', () => showBossHover('alpha', pin.dataset.alpha)); pin.addEventListener('blur', hideBossHover); });
  layer.querySelectorAll('.travel-pin').forEach(pin => pin.addEventListener('click', () => { const point = rows.travel[Number(pin.dataset.travel)]; showToast(`${localizedLocation(point.name)} · koordinat ${point.coord}`); }));
  applyMapLayerVisibility();
}
function showBossHover(kind, value) { const card = document.querySelector('#bossHoverCard'); if (!card) return; const rows = activeMapData(); const boss = kind === 'alpha' ? rows.alpha[Number(value)] : rows.towers.find(t => t.order === value); if (!boss) return; const palName = kind === 'alpha' ? boss.name : boss.palName || null; const p = palName ? findPal(palName) : null; const stats = p ? [['HP', p.hp], ['ATK', p.atk], ['DEF', p.def]] : []; const image = p ? `<div class="boss-hover-image"><img src="${p.image}" alt="${escapeHtml(p.name)}" loading="eager" decoding="sync" onerror="this.style.opacity='.2'"></div>` : '<div class="boss-hover-image boss-hover-placeholder">✦</div>'; const displayName = p?.name || boss.boss; const palMeta = p ? `Pal #${escapeHtml(p.no)} · Lv ${boss.level}` : `World Tree · Lv ${boss.level}`; card.innerHTML = `<div class="boss-hover-head">${image}<div><span>${kind === 'alpha' ? getTranslation('normalAlpha') : getTranslation('towerBoss')}</span><strong>${escapeHtml(displayName)}</strong><small>${palMeta}</small></div></div><div class="boss-hover-grid"><div><small>${getTranslation('elementLabel')}</small><b>${escapeHtml(localizedElement(boss.element))}</b></div><div><small>${getTranslation('weakness')}</small><b>${escapeHtml(localizedElement(boss.weak))}</b></div>${stats.map(([label,value]) => `<div><small>${label}</small><b>${escapeHtml(value)}</b></div>`).join('')}</div><div class="boss-hover-foot"><span>${escapeHtml(localizedLocation(boss.region))}</span><span>${escapeHtml(boss.coord)}</span></div>`; card.classList.add('show'); card.setAttribute('aria-hidden','false'); }
function hideBossHover() { const card = document.querySelector('#bossHoverCard'); if (!card) return; card.classList.remove('show'); card.setAttribute('aria-hidden','true'); }
const MAP_TILE_ROOTS = { 3: 'https://assets.palmods.gg/v1.0.3/map/tiles/3', 4: 'https://assets.palmods.gg/v1.0.3/map/tiles/4' };
let mapTileLevel = 3;
function renderMapTiles(level = mapTileLevel) {
  const layer = document.querySelector('#mapTileLayer');
  if (!layer) return;
  const grid = level >= 4 ? 16 : 8;
  const root = MAP_TILE_ROOTS[level] || MAP_TILE_ROOTS[3];
  layer.style.gridTemplateColumns = `repeat(${grid}, minmax(0, 1fr))`;
  layer.style.gridTemplateRows = `repeat(${grid}, minmax(0, 1fr))`;
  const tiles = [];
  for (let y = 0; y < grid; y++) for (let x = 0; x < grid; x++) tiles.push(`<img class="map-tile" src="${root}/${x}_${y}.webp" alt="" draggable="false" loading="eager" fetchpriority="high" decoding="async">`);
  layer.innerHTML = tiles.join('');
  layer.querySelectorAll('.map-tile').forEach(tile => tile.addEventListener('error', () => tile.classList.add('map-tile-missing'), { once: true }));
}
function initMapTiles() { renderMapTiles(3); }
function syncMapTileResolution() { const desiredLevel = mapRegion === 'palpagos' && mapZoom >= 1.15 ? 4 : 3; if (desiredLevel !== mapTileLevel) { mapTileLevel = desiredLevel; renderMapTiles(mapTileLevel); } }
let mapZoom = 1; let mapPanX = 0; let mapPanY = 0; let mapDrag = null;
function updateMapTransform() { const viewport = document.querySelector('#mapViewport'); const canvas = document.querySelector('#mapCanvas'); if (!viewport || !canvas) return; syncMapTileResolution(); const maxPan = Math.max(0, (mapZoom - 1) * Math.max(viewport.clientWidth, viewport.clientHeight) * .72); mapPanX = Math.max(-maxPan, Math.min(maxPan, mapPanX)); mapPanY = Math.max(-maxPan, Math.min(maxPan, mapPanY)); canvas.style.setProperty('--pin-scale', (1 / mapZoom).toFixed(3)); canvas.style.transform = `translate3d(${mapPanX}px, ${mapPanY}px, 0) scale(${mapZoom})`; viewport.classList.toggle('map-zoomed', mapZoom >= 1.5); document.querySelector('#mapZoomValue').textContent = `${Math.round(mapZoom * 100)}%`; const quality = document.querySelector('#mapQualityBadge'); if (quality && mapRegion === 'palpagos') quality.textContent = mapTileLevel >= 4 ? '4K HD TILE · 2.5×' : '2K HD TILE · 2.5×'; }
function updateMapRegionUi() { const tree = mapRegion === 'worldtree'; const image = document.querySelector('#worldMapImage'); const tileLayer = document.querySelector('#mapTileLayer'); const canvas = document.querySelector('#mapCanvas'); const coords = document.querySelector('#mapCoordsLabel'); const quality = document.querySelector('#mapQualityBadge'); if (image) { image.src = tree ? WORLD_TREE_MAP_IMAGE : 'https://palworld-db.com/worldmap.webp'; image.alt = tree ? 'World Tree map' : 'Palpagos Islands map'; } if (canvas) canvas.classList.toggle('tree-map', tree); if (tileLayer) tileLayer.hidden = tree; if (coords) coords.textContent = tree ? (currentLanguage === 'tr' ? 'WORLD TREE · AYRI HARİTA' : 'WORLD TREE · SEPARATE MAP') : getTranslation('gridPalpagos'); if (quality) quality.textContent = tree ? 'WORLD TREE HD · 2.5×' : (mapTileLevel >= 4 ? '4K HD TILE · 2.5×' : '2K HD TILE · 2.5×'); document.querySelectorAll('.map-region-tab').forEach(button => { const active = button.dataset.mapRegion === mapRegion; button.classList.toggle('active', active); button.setAttribute('aria-selected', active ? 'true' : 'false'); }); }
function setMapRegion(region) { mapRegion = region === 'worldtree' ? 'worldtree' : 'palpagos'; mapZoom = 1; mapPanX = 0; mapPanY = 0; hideBossHover(); updateMapRegionUi(); renderTowers(); renderAlphaList(); renderMapPins(); updateWorldListSummary(); updateMapTransform(); }
function setMapZoom(value) { mapZoom = Math.max(.75, Math.min(2.5, value)); if (mapZoom === 1) { mapPanX = 0; mapPanY = 0; } updateMapTransform(); }
function initMapControls() {
  const viewport = document.querySelector('#mapViewport');
  if (!viewport) return;
  document.querySelector('#mapZoomIn').addEventListener('click', () => setMapZoom(mapZoom + .25));
  document.querySelector('#mapZoomOut').addEventListener('click', () => setMapZoom(mapZoom - .25));
  document.querySelector('#mapReset').addEventListener('click', () => { mapZoom = 1; mapPanX = 0; mapPanY = 0; updateMapTransform(); });
  viewport.addEventListener('wheel', event => { event.preventDefault(); setMapZoom(mapZoom + (event.deltaY < 0 ? .15 : -.15)); }, { passive: false });
  viewport.addEventListener('dragstart', event => event.preventDefault());
  viewport.addEventListener('pointerdown', event => {
    if (event.target.closest('button')) return;
    event.preventDefault();
    mapDrag = { x: event.clientX - mapPanX, y: event.clientY - mapPanY, startX: event.clientX, startY: event.clientY, moved: false };
    viewport.classList.add('dragging');
    viewport.setPointerCapture(event.pointerId);
  });
  viewport.addEventListener('pointermove', event => {
    if (!mapDrag) return;
    if (Math.abs(event.clientX - mapDrag.startX) > 4 || Math.abs(event.clientY - mapDrag.startY) > 4) mapDrag.moved = true;
    mapPanX = event.clientX - mapDrag.x; mapPanY = event.clientY - mapDrag.y;
    updateMapTransform();
  });
  const stopDrag = event => {
    if (!mapDrag) return;
    const dragged = mapDrag.moved;
    mapDrag = null;
    viewport.classList.remove('dragging');
    if (dragged) { viewport.dataset.dragged = 'true'; setTimeout(() => delete viewport.dataset.dragged, 0); }
    if (event.pointerId !== undefined && viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
  };
  viewport.addEventListener('pointerup', stopDrag);
  viewport.addEventListener('pointercancel', stopDrag);
  updateMapTransform();
}
const equipmentSource = window.palworldEquipment || {};
function normalizeEquipmentRows(type, rows) { const labels = { items: 'Eşya', weapons: 'Silah', armor: 'Zırh', technology: 'Teknoloji' }; return rows.map((row, index) => { const [id, name, image, detail] = row; return { id: id || `${type}-${index + 1}`, name: name || 'İsimsiz kayıt', image: image || '', category: labels[type], rarity: type === 'technology' ? 'Açılım' : (detail || 'Kayıt'), detail: type === 'technology' ? (detail && detail !== '—' ? `Teknoloji Lv ${detail}` : 'Teknoloji ağacı kaydı') : 'Palworld veri kaydı' }; }); }
const databaseCatalog = { items: normalizeEquipmentRows('items', equipmentSource.items?.length ? equipmentSource.items : database.items.map((row, i) => [`legacy-item-${i}`, row[0], '', row[2]])), weapons: normalizeEquipmentRows('weapons', equipmentSource.weapons?.length ? equipmentSource.weapons : database.weapons.map((row, i) => [`legacy-weapon-${i}`, row[0], '', row[2]])), armor: normalizeEquipmentRows('armor', equipmentSource.armor?.length ? equipmentSource.armor : database.armor.map((row, i) => [`legacy-armor-${i}`, row[0], '', row[2]])), technology: normalizeEquipmentRows('technology', equipmentSource.technology?.length ? equipmentSource.technology : database.technology.map((row, i) => [`legacy-tech-${i}`, row[0], '', row[1].replace(/\D/g, '') || '—'])) };
let activeDatabase = 'items'; let databasePage = 1; let databaseQuery = ''; const databasePageSize = 48;
const databaseImageOverrides = { Bat2: 'https://assets.palmods.gg/v1.0.3/items/icons/Bat.webp?iv=2', DecalGun_1: 'https://assets.palmods.gg/v1.0.3/items/icons/InkBullet.webp?iv=2', DecalGun_2: 'https://assets.palmods.gg/v1.0.3/items/icons/InkBullet.webp?iv=2', DecalGun_3: 'https://assets.palmods.gg/v1.0.3/items/icons/InkBullet.webp?iv=2', DecalGun_4: 'https://assets.palmods.gg/v1.0.3/items/icons/InkBullet.webp?iv=2', DecalGun_5: 'https://assets.palmods.gg/v1.0.3/items/icons/InkBullet.webp?iv=2', MindControlDrug: 'https://assets.palmods.gg/v1.0.3/items/icons/Medicines.webp?iv=2' };
const databaseFallbackImages = { Eşya: 'https://assets.palmods.gg/v1.0.3/items/icons/Coal.webp?iv=2', Silah: 'https://assets.palmods.gg/v1.0.3/items/icons/BowGun.webp?iv=2', Zırh: 'https://assets.palmods.gg/v1.0.3/items/icons/ClothArmor.webp?iv=2', Teknoloji: 'https://assets.palmods.gg/v1.0.3/items/icons/PalSphere.webp?iv=2' };
function equipmentImageUrl(image) { if (!image || !image.includes('T_itemicon_')) return image; const filename = image.split('/').pop().split('?')[0].replace(/^T_itemicon_/i, '').replace(/^(Ammo|Armor|Weapon|Accessory|Essential|Material|Consume|Food|PalSphere|SphereModule)_/i, ''); return `https://assets.palmods.gg/v1.0.3/items/icons/${filename}?iv=2`; }
function databaseIcon(row) { const generic = databaseFallbackImages[row.category] || databaseFallbackImages.Eşya; const primary = databaseImageOverrides[row.id] || equipmentImageUrl(row.image) || generic; const fallback = row.image || generic; return `<span class="db-icon"><img src="${escapeHtml(primary)}" alt="${escapeHtml(row.name)}" loading="eager" decoding="async" data-fallback="0" onerror="if(this.dataset.fallback==='0'){this.dataset.fallback='1';this.src='${escapeHtml(fallback)}';}else if(this.dataset.fallback==='1'){this.dataset.fallback='2';this.src='${escapeHtml(generic)}';}else{this.style.display='none';this.nextElementSibling.style.display='grid'}"><b>${escapeHtml(row.name.slice(0, 1))}</b></span>`; }
function localizedCategory(value) { return ({ Eşya: getTranslation('allItems'), Silah: getTranslation('weapons'), Zırh: getTranslation('armorShield'), Teknoloji: getTranslation('technology') }[value] || localizedData(value, getTranslation('equipment'))); }
function localizedRarity(value) { return ({ Yaygın: currentLanguage === 'tr' ? 'Yaygın' : 'Common', Sıradışı: currentLanguage === 'tr' ? 'Sıradışı' : 'Uncommon', Nadir: currentLanguage === 'tr' ? 'Nadir' : 'Rare', Epik: currentLanguage === 'tr' ? 'Epik' : 'Epic', Efsanevi: currentLanguage === 'tr' ? 'Efsanevi' : 'Legendary', Ancient: currentLanguage === 'tr' ? 'Ancient' : 'Ancient', Açılım: currentLanguage === 'tr' ? 'Açılım' : 'Unlock' }[value] || localizedData(value, getTranslation('rarityLabel'))); }
function renderDatabase(type = activeDatabase) { activeDatabase = type; const sourceRows = databaseCatalog[type] || []; const query = databaseQuery.trim().toLowerCase(); const rows = sourceRows.filter(row => !query || `${row.name} ${row.id} ${row.category}`.toLowerCase().includes(query)); const pageTotal = Math.max(1, Math.ceil(rows.length / databasePageSize)); databasePage = Math.max(1, Math.min(databasePage, pageTotal)); const start = (databasePage - 1) * databasePageSize; const pageRows = rows.slice(start, start + databasePageSize); const labels = type === 'technology' ? [getTranslation('technology'), getTranslation('category'), 'Tier', getTranslation('recordCode')] : [getTranslation('equipment'), getTranslation('category'), getTranslation('rarityLabel'), getTranslation('description')]; const rowHtml = pageRows.map(row => `<tr><td><div class="db-item-cell">${databaseIcon(row)}<div>${escapeHtml(row.name)}<small>${escapeHtml(row.id)}</small></div></div></td><td><span class="db-type">${escapeHtml(localizedCategory(row.category))}</span></td><td><span class="rarity">${escapeHtml(localizedRarity(row.rarity))}</span></td><td><span class="recipe">${escapeHtml(localizedData(row.detail, getTranslation('description')))}</span></td></tr>`).join(''); const mobileHtml = pageRows.map(row => `<article class="db-mobile-card"><div class="db-mobile-row"><div class="db-item-cell">${databaseIcon(row)}<div>${escapeHtml(row.name)}<small>${escapeHtml(row.id)}</small></div></div><span class="rarity">${escapeHtml(localizedRarity(row.rarity))}</span></div><div class="db-mobile-row"><span class="db-mobile-label">${escapeHtml(localizedCategory(row.category))}</span><span class="recipe">${escapeHtml(localizedData(row.detail, getTranslation('description')))}</span></div></article>`).join(''); document.querySelector('#databaseContent').innerHTML = pageRows.length ? `<table class="db-table"><thead><tr>${labels.map(label => `<th>${label}</th>`).join('')}</tr></thead><tbody>${rowHtml}</tbody></table><div class="db-mobile-list">${mobileHtml}</div>` : `<div class="empty-state">${getTranslation('noEquipment')}</div>`; document.querySelector('#dbPageCount').textContent = rows.length ? `${rows.length.toLocaleString('tr-TR')} ${getTranslation('records')} · ${start + 1}–${Math.min(start + databasePageSize, rows.length)}` : `0 ${getTranslation('records')}`; document.querySelector('#dbPageInfo').textContent = `${getTranslation('page')} ${databasePage} / ${pageTotal}`; document.querySelector('#dbPrev').disabled = databasePage <= 1; document.querySelector('#dbNext').disabled = databasePage >= pageTotal; }
function updateDatabaseCounts() { const total = Object.values(databaseCatalog).reduce((sum, rows) => sum + rows.length, 0); document.querySelector('#dbStatusText').textContent = `${total.toLocaleString('tr-TR')} Palworld ${getTranslation('equipment').toLowerCase()} ${getTranslation('records')}`; for (const type of Object.keys(databaseCatalog)) { const node = document.querySelector(`#dbCount${type[0].toUpperCase()}${type.slice(1)}`); if (node) node.textContent = databaseCatalog[type].length.toLocaleString('tr-TR'); } }
function populateSelect(id, options) { document.querySelector(`#${id}`).innerHTML = options.map(p => `<option value="${escapeHtml(p.name)}">${escapeHtml(p.name)} · #${p.no}</option>`).join(''); }
function updateBreedOutput() { const a = document.querySelector('#parentA').value; const b = document.querySelector('#parentB').value; const calc = breedResultFor(a, b); const output = document.querySelector('#breedOutput'); if (!calc) { output.innerHTML = `<div class="breed-empty">${getTranslation('noBreedPair')}</div>`; return; } const result = findPal(calc.name); const average = calc.average === null ? getTranslation('specialTable') : `${getTranslation('averageRank')} ${Math.round(calc.average)}`; output.innerHTML = `<div class="breed-result"><img src="${result.image}" alt="${escapeHtml(result.name)}" onerror="this.style.opacity='.2'"><div><small>${calc.special ? getTranslation('specialCombo') : getTranslation('breedRank')} // ${escapeHtml(localizedElement(result.element).toUpperCase())}</small><h3>${escapeHtml(result.name)}</h3><p>${escapeHtml(a)} + ${escapeHtml(b)} · ${escapeHtml(average)}</p></div><span class="breed-badge">${getTranslation('result')}</span></div>`; }
function updateReverseBreedOutput() { const target = document.querySelector('#breedResultPal').value; const output = document.querySelector('#reverseBreedOutput'); const matches = []; for (let i = 0; i < breedablePals.length; i++) for (let j = i; j < breedablePals.length; j++) { const calc = breedResultFor(breedablePals[i].name, breedablePals[j].name); if (calc?.name === target) matches.push([breedablePals[i], breedablePals[j], calc.special]); } const targetPal = findPal(target); if (!matches.length) { output.innerHTML = `<div class="breed-empty">${escapeHtml(target)} ${getTranslation('noParents')}</div>`; return; } output.innerHTML = `<div class="reverse-summary"><strong>${matches.length}</strong><span>${getTranslation('pairs')} · ${escapeHtml(target)} ${getTranslation('resultFor')}</span><small>${getTranslation('specialCombos')}</small></div><div class="breed-reverse-list">${matches.map(([a,b,special]) => `<button class="reverse-breed-row" data-a="${escapeHtml(a.name)}" data-b="${escapeHtml(b.name)}"><span class="reverse-parent"><img src="${a.image}" alt="" onerror="this.style.opacity='.2'"><b>${escapeHtml(a.name)}</b></span><i>+</i><span class="reverse-parent"><img src="${b.image}" alt="" onerror="this.style.opacity='.2'"><b>${escapeHtml(b.name)}</b></span><em>${special ? '★' : `rank ${breedRankByName[a.name] + '+' + breedRankByName[b.name]}`}</em></button>`).join('')}</div><div class="reverse-target"><img src="${targetPal.image}" alt="${escapeHtml(targetPal.name)}"><span>${escapeHtml(targetPal.name)} ${getTranslation('egg')}</span></div>`; output.querySelectorAll('.reverse-breed-row').forEach(row => row.addEventListener('click', () => { document.querySelector('#parentA').value = row.dataset.a; document.querySelector('#parentB').value = row.dataset.b; document.querySelector('[data-breed-mode="pair"]').click(); updateBreedOutput(); })); }
let activeDirectorySlot = 'a';
let directoryElement = 'all';
let directoryQuery = '';
function renderVisualBreedParents() { [['a', 'parentA'], ['b', 'parentB']].forEach(([slot, id]) => { const p = findPal(document.querySelector(`#${id}`)?.value); const avatar = document.querySelector(`#breedVisualAvatar${slot.toUpperCase()}`); const copy = document.querySelector(`#breedVisualCopy${slot.toUpperCase()}`); if (!avatar || !copy) return; if (!p) { avatar.innerHTML = '<span>＋</span>'; copy.innerHTML = `<strong>${getTranslation('pickPal')}</strong><small>${getTranslation('pickPalHint')}</small>`; return; } avatar.innerHTML = `<img src="${p.image}" alt="${escapeHtml(p.name)}" onerror="this.style.opacity='.22'">`; copy.innerHTML = `<strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(localizedElement(p.element))} · #${escapeHtml(p.no)} · ${escapeHtml(localizedRole(p.role))}</small>`; }); document.querySelectorAll('.breed-visual-select').forEach(button => button.classList.toggle('active', button.dataset.visualSlot === activeDirectorySlot)); }
function updateBreedDirectorySlots() { const a = document.querySelector('#parentA')?.value; const b = document.querySelector('#parentB')?.value; const nameA = document.querySelector('#breedDirectoryNameA'); const nameB = document.querySelector('#breedDirectoryNameB'); if (nameA) nameA.textContent = a || 'Pal seç'; if (nameB) nameB.textContent = b || 'Pal seç'; renderVisualBreedParents(); document.querySelectorAll('.breed-directory-slot').forEach(slot => slot.classList.toggle('active', slot.dataset.directorySlot === activeDirectorySlot)); }
function chooseBreedDirectoryPal(name) { const select = document.querySelector(activeDirectorySlot === 'a' ? '#parentA' : '#parentB'); const p = findPal(name); if (!select || !p) return; select.value = p.name; updateBreedOutput(); updateBreedDirectorySlots(); renderBreedDirectory(); showToast(`${p.name}, Ebeveyn ${activeDirectorySlot === 'a' ? '01' : '02'} kutusuna yerleştirildi`); }
function renderBreedDirectory() { const grid = document.querySelector('#breedDirectoryGrid'); if (!grid) return; const needle = directoryQuery.trim().toLowerCase(); const rows = breedablePals.filter(p => (directoryElement === 'all' || p.element === directoryElement) && (!needle || `${p.name} ${p.no} ${p.elementLabel} ${p.role}`.toLowerCase().includes(needle))); const count = document.querySelector('#breedDirectoryCount'); if (count) count.textContent = `${rows.length} PAL`; grid.innerHTML = rows.length ? rows.map(p => `<button class="breed-directory-card ${p.name === document.querySelector('#parentA')?.value || p.name === document.querySelector('#parentB')?.value ? 'chosen' : ''}" type="button" data-directory-pal="${escapeHtml(p.name)}" style="--directory-color:${p.color};--directory-glow:${p.glow}"><div class="breed-directory-card-top"><span>#${escapeHtml(p.no)}</span><small>${escapeHtml(localizedElement(p.element))}</small></div><div class="breed-directory-image"><img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><b>${escapeHtml(p.name.slice(0, 1))}</b></div><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(localizedRole(p.role))}</small></button>`).join('') : `<div class="breed-directory-empty">${getTranslation('noPalMatches')}</div>`; grid.querySelectorAll('.breed-directory-card').forEach(card => card.addEventListener('click', () => chooseBreedDirectoryPal(card.dataset.directoryPal))); }
function initBreedDirectory() { renderBreedDirectory(); updateBreedDirectorySlots(); document.querySelectorAll('.breed-directory-slot').forEach(slot => slot.addEventListener('click', () => { activeDirectorySlot = slot.dataset.directorySlot; updateBreedDirectorySlots(); })); document.querySelectorAll('.breed-visual-select').forEach(button => button.addEventListener('click', () => { activeDirectorySlot = button.dataset.visualSlot; updateBreedDirectorySlots(); document.querySelector('#breedDirectory')?.scrollIntoView({ behavior: 'smooth', block: 'center' }); document.querySelector('#breedDirectorySearch')?.focus(); })); document.querySelector('#breedDirectorySearch').addEventListener('input', event => { directoryQuery = event.target.value; renderBreedDirectory(); }); document.querySelectorAll('[data-directory-element]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-directory-element]').forEach(item => item.classList.remove('active')); button.classList.add('active'); directoryElement = button.dataset.directoryElement; renderBreedDirectory(); })); }
let breedPickSlot = 'a';
let activeBreedTool = 'combinations';
let pathPickerMode = 'target';
const breedOwnedNames = new Set(['Lamball', 'Cattiva', 'Chikipi', 'Vixy']);
let breedOwnedPals = new Set(breedOwnedNames);
function breedMatchesForTarget(target, limit = Number.POSITIVE_INFINITY) { const matches = []; for (let i = 0; i < breedablePals.length; i++) for (let j = i; j < breedablePals.length; j++) { const a = breedablePals[i]; const b = breedablePals[j]; const calc = breedResultFor(a.name, b.name); if (calc?.name === target) { matches.push({ a, b, special: calc.special }); if (matches.length >= limit) return matches; } } return matches; }
function setBreedParent(slot, name) { const select = document.querySelector(slot === 'a' ? '#parentA' : '#parentB'); if (!select || !findPal(name)) return; select.value = name; breedPickSlot = slot; updateBreedOutput(); updateBreedingComposer(); }
function breedSlotMarkup(p, slot) { return `<span class="breed-slot-mark"><img src="${p.image}" alt="${escapeHtml(p.name)}" onerror="this.style.opacity='.22'"></span><span class="breed-slot-copy"><small>EBEVEYN ${slot === 'a' ? '01' : '02'}</small><strong>${escapeHtml(p.name)}</strong><em>#${escapeHtml(p.no)} · değiştirmek için karta tıkla</em></span><b class="breed-slot-check">${slot === 'a' ? '♂' : '♀'}</b>`; }
function updateBreedingComposer() { const aName = document.querySelector('#parentA')?.value; const bName = document.querySelector('#parentB')?.value; const a = findPal(aName); const b = findPal(bName); const slotA = document.querySelector('#breedSlotA'); const slotB = document.querySelector('#breedSlotB'); const child = document.querySelector('#breedChildSlot'); if (slotA && a) { slotA.innerHTML = breedSlotMarkup(a, 'a'); slotA.classList.add('selected'); } if (slotB && b) { slotB.innerHTML = breedSlotMarkup(b, 'b'); slotB.classList.add('selected'); } const result = a && b ? breedResultFor(a.name, b.name) : null; const childPal = result ? findPal(result.name) : null; if (child && childPal) { child.innerHTML = `<span class="breed-child-mark"><img src="${childPal.image}" alt="${escapeHtml(childPal.name)}" onerror="this.style.opacity='.22'"></span><span class="breed-slot-copy"><small>${result.special ? 'ÖZEL KOMBİNASYON' : 'ÇOCUK PAL'}</small><strong>${escapeHtml(childPal.name)}</strong><em>${result.special ? 'Varyant sonucu' : `Ortalama rank ${Math.round(result.average)}`}</em></span><b class="breed-slot-check">✦</b>`; child.classList.add('has-result'); } else if (child) { child.innerHTML = '<span class="breed-child-mark">✦</span><span class="breed-slot-copy"><small>ÇOCUK PAL</small><strong>Sonuç burada</strong><em>İki ebeveyn seç</em></span>'; child.classList.remove('has-result'); } const pickerActive = document.querySelector('#breedPickerActive'); if (pickerActive) pickerActive.textContent = activeBreedTool === 'path' ? (pathPickerMode === 'target' ? 'HEDEF PAL' : 'SAHİP PALLAR') : `EBEVEYN ${breedPickSlot === 'a' ? '01' : '02'}`; document.querySelectorAll('.breed-slot[data-slot]').forEach(slot => slot.classList.toggle('active', slot.dataset.slot === breedPickSlot)); }
function renderPathTargetPreview() { const target = document.querySelector('#pathTargetPick'); const p = findPal(document.querySelector('#breedPathTarget')?.value); if (!target || !p) return; target.innerHTML = `<span class="breed-path-pick-mark"><img src="${p.image}" alt="${escapeHtml(p.name)}" onerror="this.style.opacity='.2'"></span><span><strong>${escapeHtml(p.name)}</strong><small>#${escapeHtml(p.no)} · değiştirmek için listeyi kullan</small></span>`; target.classList.add('has-pal'); }
function setPathPickerMode(mode) { pathPickerMode = mode; document.querySelector('#pathTargetPick')?.classList.toggle('active', mode === 'target'); document.querySelector('#pathOwnedPick')?.classList.toggle('active', mode === 'owned'); updateBreedingComposer(); renderBreedPicker(document.querySelector('#breedPalSearch')?.value || ''); }
function setPathTarget(name) { const select = document.querySelector('#breedPathTarget'); if (!select || !findPal(name)) return; select.value = name; setPathPickerMode('target'); renderPathTargetPreview(); renderPathTool(); showToast(`${name} hedef Pal olarak seçildi`); }
function toggleBreedOwnedPal(name) { if (breedOwnedPals.has(name)) { if (breedOwnedPals.size > 1) breedOwnedPals.delete(name); } else breedOwnedPals.add(name); renderBreedOwnedPals(); renderPathTool(); renderBreedPicker(document.querySelector('#breedPalSearch')?.value || ''); }
function handleBreedPalPick(name) { if (activeBreedTool === 'combinations') { document.querySelector('#breedComboTarget').value = name; renderComboTool(); renderBreedPicker(document.querySelector('#breedPalSearch')?.value || ''); showToast(`${name} için tüm kombinasyonlar gösterildi`); return; } if (activeBreedTool === 'path') { if (pathPickerMode === 'target') setPathTarget(name); else toggleBreedOwnedPal(name); return; } if (activeBreedTool === 'tree') { document.querySelector('#breedTreeTarget').value = name; renderTreeTool(); renderBreedPicker(document.querySelector('#breedPalSearch')?.value || ''); showToast(`${name} breeding ağacı açıldı`); return; } setBreedParent(breedPickSlot, name); }
function renderBreedPicker(query = '') { const picker = document.querySelector('#breedPalPicker'); if (!picker) return; const needle = query.trim().toLowerCase(); const comboTarget = document.querySelector('#breedComboTarget')?.value; const pathTarget = document.querySelector('#breedPathTarget')?.value; const treeTarget = document.querySelector('#breedTreeTarget')?.value; const parentA = document.querySelector('#parentA')?.value; const parentB = document.querySelector('#parentB')?.value; const rows = breedablePals.filter(p => !needle || `${p.name} ${p.elementLabel} ${p.role}`.toLowerCase().includes(needle)); document.querySelector('#breedPickerCount').textContent = `${rows.length} PAL GÖSTERİLİYOR`; picker.innerHTML = rows.length ? rows.map(p => { const chosen = activeBreedTool === 'combinations' ? p.name === comboTarget : activeBreedTool === 'path' ? (pathPickerMode === 'target' ? p.name === pathTarget : breedOwnedPals.has(p.name)) : activeBreedTool === 'tree' ? p.name === treeTarget : p.name === parentA || p.name === parentB; return `<button class="breed-pal-tile ${chosen ? 'chosen' : ''}" type="button" data-pal="${escapeHtml(p.name)}" title="${escapeHtml(p.name)} · ${escapeHtml(p.elementLabel)}"><span><img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><b>${escapeHtml(p.name.slice(0, 1))}</b></span><strong>${escapeHtml(p.name)}</strong><small>#${escapeHtml(p.no)}</small></button>`; }).join('') : '<div class="breed-picker-empty">Bu aramayla eşleşen Pal yok.</div>'; picker.querySelectorAll('.breed-pal-tile').forEach(card => card.addEventListener('click', () => handleBreedPalPick(card.dataset.pal))); }
function renderBreedOwnedPals() { const holder = document.querySelector('#breedOwnedPals'); if (!holder) return; const rows = breedablePals.filter(p => breedOwnedPals.has(p.name)); holder.innerHTML = rows.length ? rows.map(p => `<button class="breed-owned-chip active" type="button" data-owned-pal="${escapeHtml(p.name)}"><img src="${p.image}" alt="${escapeHtml(p.name)}" onerror="this.style.opacity='.2'"><span>${escapeHtml(p.name)}</span><b>✓</b></button>`).join('') : '<small class="breed-owned-empty">Aşağıdaki listeden sahip olduğun Pallar’ı seç.</small>'; holder.querySelectorAll('.breed-owned-chip').forEach(chip => chip.addEventListener('click', () => toggleBreedOwnedPal(chip.dataset.ownedPal))); }
function renderBreedMiniRows(matches, target, className = 'breed-mini-list') { return matches.length ? `<div class="${className}">${matches.map(match => `<button class="breed-mini-row" type="button" data-a="${escapeHtml(match.a.name)}" data-b="${escapeHtml(match.b.name)}"><span><img src="${match.a.image}" alt="${escapeHtml(match.a.name)}" onerror="this.style.opacity='.2'"><b>${escapeHtml(match.a.name)}</b></span><i>+</i><span><img src="${match.b.image}" alt="${escapeHtml(match.b.name)}" onerror="this.style.opacity='.2'"><b>${escapeHtml(match.b.name)}</b></span><em>${match.special ? '★ özel' : 'üret'}</em></button>`).join('')}</div>` : `<div class="breed-empty">${escapeHtml(target)} için kayıtlı eşleşme bulunamadı.</div>`; }
function bindBreedMiniRows(root) { root?.querySelectorAll('.breed-mini-row').forEach(row => row.addEventListener('click', () => { setBreedParent('a', row.dataset.a); setBreedParent('b', row.dataset.b); showToast(`${row.dataset.a} + ${row.dataset.b} seçildi`); })); }
function renderComboTool() { const target = document.querySelector('#breedComboTarget')?.value; const output = document.querySelector('#breedComboOutput'); if (!output || !target) return; const matches = breedMatchesForTarget(target); output.innerHTML = `<div class="breed-mini-summary"><strong>${matches.length}</strong><span>${escapeHtml(target)} sonucu veren çift${matches.length === 1 ? '' : 'ler'}</span><small>Tüm kayıtlar listelendi · bir çifte tıklayınca ebeveyn kutularına yerleşir.</small></div>${renderBreedMiniRows(matches, target)}`; bindBreedMiniRows(output); }
function findBreedPathPair(target) { const targetRank = breedRankByName[target] ?? 0; let best = null; for (const ownedName of breedOwnedPals) { const owned = findPal(ownedName); if (!owned) continue; for (const candidate of breedablePals) { if (candidate.name === ownedName) continue; const calc = breedResultFor(ownedName, candidate.name); if (calc?.name !== target) continue; const score = Math.abs((breedRankByName[candidate.name] ?? 0) - targetRank) + Math.abs((breedRankByName[ownedName] ?? 0) - targetRank) * .08; if (!best || score < best.score) best = { owned, candidate, special: calc.special, score }; } } return best; }
function updatePathPlanHeader(target) { const p = findPal(target); const title = document.querySelector('#pathPlanTitle'); const hint = document.querySelector('#pathPlanHint'); if (title) title.textContent = p ? `${p.name} için rota` : 'Hedef Pal\'ı seç'; if (hint) hint.textContent = p ? 'Sahip olduğun Pallar’dan hedefe ulaşan en kısa breeding yolunu gösterir.' : 'En kısa breeding yolunu görmek için listeden bir hedef seç.'; }
function renderPathTool() { const target = document.querySelector('#breedPathTarget')?.value; const output = document.querySelector('#breedPathOutput'); if (!output || !target) return; renderPathTargetPreview(); updatePathPlanHeader(target); if (breedOwnedPals.has(target)) { const p = findPal(target); output.innerHTML = `<div class="path-complete"><img src="${p.image}" alt="${escapeHtml(p.name)}"><div><strong>${escapeHtml(p.name)} zaten takımında.</strong><span>Bu hedef için breeding adımı gerekmiyor.</span></div><b>HAZIR</b></div>`; return; } const pair = findBreedPathPair(target); if (!pair) { const fallback = breedMatchesForTarget(target, 1)[0]; output.innerHTML = fallback ? `<div class="path-route"><span class="path-route-label">EN YAKIN BAŞLANGIÇ</span><div class="path-route-nodes"><strong>${escapeHtml(fallback.a.name)}</strong><i>+</i><strong>${escapeHtml(fallback.b.name)}</strong><i>→</i><strong>${escapeHtml(target)}</strong></div><small>Önce ${escapeHtml(fallback.a.name)} + ${escapeHtml(fallback.b.name)} çiftiyle hedefe ilerleyebilirsin.</small><button class="path-use-button" type="button" data-a="${escapeHtml(fallback.a.name)}" data-b="${escapeHtml(fallback.b.name)}">Bu çifti kullan ↗</button></div>` : '<div class="breed-empty">Bu hedef için yol bulunamadı.</div>'; const use = output.querySelector('.path-use-button'); use?.addEventListener('click', () => { setBreedParent('a', use.dataset.a); setBreedParent('b', use.dataset.b); showToast('Yol bulucunun çifti kutulara yerleştirildi'); }); return; } output.innerHTML = `<div class="path-route"><span class="path-route-label">1 BREEDING ADIMI · SAHİP OLDUĞUN PALLARDAN</span><div class="path-route-nodes"><strong><img src="${pair.owned.image}" alt="${escapeHtml(pair.owned.name)}">${escapeHtml(pair.owned.name)}</strong><i>+</i><strong><img src="${pair.candidate.image}" alt="${escapeHtml(pair.candidate.name)}">${escapeHtml(pair.candidate.name)}</strong><i>→</i><strong class="path-target"><img src="${findPal(target).image}" alt="${escapeHtml(target)}">${escapeHtml(target)}</strong></div><small>${pair.special ? 'Özel varyant kombinasyonu bulundu.' : 'Breeding power ortalamasına göre en kısa uygun rota.'} · Çifte tıklayarak kutulara yerleştir.</small><button class="path-use-button" type="button" data-a="${escapeHtml(pair.owned.name)}" data-b="${escapeHtml(pair.candidate.name)}">Bu rotayı kullan ↗</button></div>`; const use = output.querySelector('.path-use-button'); use?.addEventListener('click', () => { setBreedParent('a', use.dataset.a); setBreedParent('b', use.dataset.b); showToast('Yol bulucunun çifti kutulara yerleştirildi'); }); }
function renderTreeTool() { const target = document.querySelector('#breedTreeTarget')?.value; const output = document.querySelector('#breedTreeOutput'); if (!output || !target) return; const p = findPal(target); const matches = breedMatchesForTarget(target, 6); output.innerHTML = `<div class="breed-tree-head"><img src="${p.image}" alt="${escapeHtml(p.name)}"><div><span>HEDEF PAL</span><strong>${escapeHtml(p.name)}</strong><small>${matches.length ? `${matches.length}${matches.length === 6 ? '+' : ''} uygun dal bulundu` : 'kayıtlı dal yok'}</small></div></div>${renderBreedMiniRows(matches, target, 'breed-tree-branches')}`; bindBreedMiniRows(output); }
function activateBreedTool(tool) { activeBreedTool = tool; if (tool === 'path') pathPickerMode = 'target'; document.querySelectorAll('.breed-tool-card').forEach(button => button.classList.toggle('active', button.dataset.breedTool === tool)); document.querySelectorAll('[data-breed-panel]').forEach(panel => { panel.hidden = panel.dataset.breedPanel !== tool; panel.classList.toggle('active', panel.dataset.breedPanel === tool); }); if (tool === 'combinations') renderComboTool(); if (tool === 'path') renderPathTool(); if (tool === 'tree') renderTreeTool(); updateBreedingComposer(); renderBreedPicker(document.querySelector('#breedPalSearch')?.value || ''); }
function initBreedTools() { populateSelect('breedComboTarget', breedablePals); populateSelect('breedPathTarget', breedablePals); populateSelect('breedTreeTarget', breedablePals); document.querySelector('#breedComboTarget').value = document.querySelector('#breedResultPal').value; document.querySelector('#breedPathTarget').value = 'Jetragon'; document.querySelector('#breedTreeTarget').value = 'Anubis'; updateBreedingComposer(); renderBreedPicker(); renderBreedOwnedPals(); renderComboTool(); renderTreeTool(); document.querySelectorAll('.breed-tool-card').forEach(button => button.addEventListener('click', () => { if (button.target === '_blank') return; activateBreedTool(button.dataset.breedTool); showToast(`${button.querySelector('strong').textContent} aracı açıldı`); })); document.querySelectorAll('.breed-slot[data-slot]').forEach(slot => slot.addEventListener('click', () => { breedPickSlot = slot.dataset.slot; updateBreedingComposer(); document.querySelector('#breedPalSearch')?.focus(); })); document.querySelector('#breedPalSearch').addEventListener('input', event => renderBreedPicker(event.target.value)); document.querySelector('#breedComboTarget').addEventListener('change', renderComboTool); document.querySelector('#breedComboButton').addEventListener('click', () => { renderComboTool(); showToast('Hedef Pal için tüm kombinasyonlar listelendi'); }); document.querySelector('#breedPathTarget').addEventListener('change', renderPathTool); document.querySelector('#breedPathButton').addEventListener('click', () => { renderPathTool(); showToast('En kısa breeding rotası hesaplandı'); }); document.querySelector('#breedTreeTarget').addEventListener('change', renderTreeTool); document.querySelector('#breedTreeButton').addEventListener('click', () => { renderTreeTool(); showToast('Breeding ağacı güncellendi'); }); }
function syncCaptureLevel() { const p = findPal(document.querySelector('#capturePal').value); const levelInput = document.querySelector('#captureLevel'); if (Number.isFinite(Number(p.level))) levelInput.value = p.level; document.querySelector('#captureLevelValue').textContent = `Lv ${levelInput.value}`; updateCapture(); }
function updateCapture() { const p = findPal(document.querySelector('#capturePal').value); const sphere = Number(document.querySelector('#captureSphere').value); const level = Math.max(1, Math.min(100, Number(document.querySelector('#captureLevel').value) || 30)); const hp = Number(document.querySelector('#hpRange').value); const effigy = Number(document.querySelector('#effigyRange').value); const status = document.querySelector('#captureStatus').value; const alpha = document.querySelector('#captureAlpha').checked; const back = document.querySelector('#captureBack').checked; const capturePower = sphere + (effigy * .5); const levelGap = capturePower - level; const advantage = Math.max(0, Math.min(1, (levelGap + 50) / 99)); const hpFactor = Math.pow(1.3, -(hp / 100)); const a = hpFactor * advantage; let base = a < .5 ? 256 * Math.pow(a, 9) : 1 - (Math.pow(2 - (2 * a), 9) / 2); const statusFactor = status === 'sleep' ? 1.35 : status === 'ailment' ? 1.3 : 1; const speciesFactor = (p.capture || 1) * (alpha ? .7 : 1); base = Math.max(0, Math.min(1, base * statusFactor * speciesFactor)); const actual = Math.pow(base, 1 / 3); const reticle = Math.pow(base, 5 / 12); const tenThrows = 1 - Math.pow(1 - actual, 10); const result = document.querySelector('#captureResult'); const sphereLabel = document.querySelector('#captureSphere').selectedOptions[0].text; const grade = actual >= .75 ? getTranslation('veryHigh') : actual >= .45 ? getTranslation('high') : actual >= .2 ? getTranslation('medium') : getTranslation('low'); result.innerHTML = `<div class="capture-score"><strong>${(reticle * 100).toFixed(1)}%</strong><span>${getTranslation('shownInGame')}</span></div><div class="capture-real-score"><strong>${(actual * 100).toFixed(1)}%</strong><span>${getTranslation('realSingleThrow')}</span></div><div class="capture-copy"><small>${escapeHtml(p.name)} · ${escapeHtml(localizedElement(p.element))}</small><p>Lv ${level} · ${sphereLabel} · Capture Power ${capturePower.toFixed(1)} · ${getTranslation('palHp').toLowerCase()} ${hp}%</p><p>${getTranslation('tenThrows')}: <b>${(tenThrows * 100).toFixed(1)}%</b> · ${getTranslation('averageThrows')} ${actual ? (1 / actual).toFixed(1) : '∞'}</p>${back ? `<p class="capture-back-note">${getTranslation('backShotNote')}</p>` : ''}</div><div class="capture-grade">${grade}</div>`; }
function renderCaptureOptions() { populateSelect('capturePal', breedablePals); }
function renderTiers() { const filtered = palCatalog.filter(p => selectedTier === 'all' || tierForPal(p) === selectedTier); document.querySelector('#tierResultCount').textContent = `${filtered.length} ${getTranslation('pal')}`; document.querySelector('#tierList').innerHTML = ['S','A','B','C','D'].map(rank => { const rows = filtered.filter(p => tierForPal(p) === rank); if (!rows.length) return ''; return `<div class="tier-row-group"><div class="tier-rank tier-${rank.toLowerCase()}">${rank}</div><div class="tier-row-items">${rows.map(p => `<button class="tier-row" data-pal="${escapeHtml(p.name)}"><span class="tier-pal-image"><img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.style.display='none'"><b>${escapeHtml(p.name.slice(0,1))}</b></span><span class="tier-pal-copy"><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(localizedElement(p.element))} · ${escapeHtml(localizedRole(p.role))}</small></span><span class="tier-tag">${escapeHtml(currentLanguage === 'tr' ? tierTagForPal(p, rank) : getTranslation('tierRecord'))}</span><span class="tier-arrow">↗</span></button>`).join('')}</div></div>`; }).join(''); document.querySelectorAll('.tier-row').forEach(row => row.addEventListener('click', () => openPalModal(row.dataset.pal))); }
function openPalModal(name) { const p = findPal(name); const modal = document.querySelector('#modalBackdrop'); const baseStats = currentLanguage === 'tr' ? 'TEMEL İSTATİSTİKLER' : 'BASE STATS'; const fieldInfo = currentLanguage === 'tr' ? 'SAHA BİLGİSİ' : 'FIELD INFO'; document.querySelector('#modalContent').innerHTML = `<div class="modal-hero" style="--modal-glow:${p.glow}"><div class="modal-hero-copy"><div class="pal-number">${currentLanguage === 'tr' ? 'PALDECK KAYDI' : 'PALDECK RECORD'} #${p.no}</div><h2 id="modalTitle">${p.name}</h2><div class="type-chip" style="color:${p.color};border-color:${p.color}66"><span class="type-icon">✧</span> ${escapeHtml(localizedElement(p.element).toUpperCase())}</div><p>${escapeHtml(localizedData(p.note, currentLanguage === 'tr' ? 'Palworld kaydı' : 'Palworld record'))}</p></div><div class="modal-hero-visual"><img src="${p.image}" alt="${p.name}" onerror="this.style.opacity='.2'"></div></div><div class="modal-body"><h3 class="modal-section-title">${baseStats}</h3><div class="modal-stat-grid"><div class="modal-stat"><small>HP</small><strong>${p.hp}</strong></div><div class="modal-stat"><small>ATK</small><strong>${p.atk}</strong></div><div class="modal-stat"><small>DEF</small><strong>${p.def}</strong></div></div><h3 class="modal-section-title">${fieldInfo}</h3><div class="modal-pills"><span class="modal-pill">${currentLanguage === 'tr' ? 'Partner' : 'Partner'} · ${escapeHtml(localizedData(p.partner, 'Partner skill'))}</span><span class="modal-pill">${currentLanguage === 'tr' ? 'Habitat' : 'Habitat'} · ${escapeHtml(localizedData(p.habitat, 'Palworld habitat'))}</span></div>${workDetailsMarkup(p)}<a class="modal-link" href="https://palworld-db.com/pal/${p.name.toLowerCase().replaceAll(' ','-')}" target="_blank" rel="noreferrer">${currentLanguage === 'tr' ? 'Dış kaynak kaydını aç' : 'Open external record'} ↗</a></div>`; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); }
function openAlphaModal(index) { const alpha = activeMapData().alpha[Number(index)]; if (!alpha) return; const p = findPal(alpha.name); const modal = document.querySelector('#modalBackdrop'); document.querySelector('#modalContent').innerHTML = `<div class="alpha-modal-hero"><div class="alpha-modal-image"><img src="${p.image}" alt="${escapeHtml(p.name)}" loading="eager" decoding="sync" onerror="this.style.opacity='.2'"></div><div><div class="pal-number">${currentLanguage === 'tr' ? 'NORMAL ALPHA // SABİT SPAWN' : 'NORMAL ALPHA // FIXED SPAWN'}</div><h2 id="modalTitle">${escapeHtml(alpha.name)}</h2><p>${escapeHtml(localizedLocation(alpha.region))}</p></div><div class="boss-level">LV <strong>${alpha.level}</strong></div></div><div class="modal-body"><h3 class="modal-section-title">${currentLanguage === 'tr' ? 'ALPHA BOSS BİLGİSİ' : 'ALPHA BOSS INFO'}</h3><div class="modal-stat-grid"><div class="modal-stat"><small>${getTranslation('elementLabel')}</small><strong>${escapeHtml(localizedElement(alpha.element))}</strong></div><div class="modal-stat"><small>${getTranslation('weakness')}</small><strong>${escapeHtml(localizedElement(alpha.weak))}</strong></div><div class="modal-stat"><small>HP / ATK / DEF</small><strong>${p.hp} / ${p.atk} / ${p.def}</strong></div><div class="modal-stat"><small>${currentLanguage === 'tr' ? 'KOORDİNAT' : 'COORDINATES'}</small><strong>${escapeHtml(alpha.coord)}</strong></div></div><div class="modal-pills"><span class="modal-pill">${currentLanguage === 'tr' ? 'Yakalanabilir Pal' : 'Capturable Pal'} · #${escapeHtml(p.no)}</span><span class="modal-pill">${currentLanguage === 'tr' ? 'Bölge' : 'Region'} · ${escapeHtml(localizedLocation(alpha.region))}</span><span class="modal-pill">${currentLanguage === 'tr' ? 'Sabit doğma noktası' : 'Fixed spawn point'}</span></div></div>`; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); }
function openTowerModal(order) { const tower = activeMapData().towers.find(t => t.order === order); if (!tower) return; const modal = document.querySelector('#modalBackdrop'); document.querySelector('#modalContent').innerHTML = `<div class="tower-modal-hero"><div><div class="pal-number">${currentLanguage === 'tr' ? 'KULE BOSSU' : 'TOWER BOSS'} // ${tower.order}</div><h2 id="modalTitle">${escapeHtml(tower.boss)}</h2><p>${escapeHtml(localizedLocation(tower.name))} · ${escapeHtml(localizedLocation(tower.region))}</p></div><div class="boss-level">LV <strong>${tower.level}</strong></div></div><div class="modal-body"><h3 class="modal-section-title">${currentLanguage === 'tr' ? 'BOSS BİLGİSİ' : 'BOSS INFO'}</h3><div class="modal-stat-grid"><div class="modal-stat"><small>${getTranslation('elementLabel')}</small><strong>${escapeHtml(localizedElement(tower.element))}</strong></div><div class="modal-stat"><small>${getTranslation('weakness')}</small><strong>${escapeHtml(localizedElement(tower.weak))}</strong></div><div class="modal-stat"><small>${currentLanguage === 'tr' ? 'KOORDİNAT' : 'COORDINATES'}</small><strong>${escapeHtml(tower.coord)}</strong></div></div><div class="modal-pills"><span class="modal-pill">${currentLanguage === 'tr' ? 'Önerilen seviye' : 'Recommended level'} · ${tower.level}</span><span class="modal-pill">${currentLanguage === 'tr' ? 'Normal süre' : 'Standard time'} · 5 min</span><span class="modal-pill">${currentLanguage === 'tr' ? 'Harita konumu' : 'Map location'} · ${escapeHtml(localizedLocation(tower.region))}</span></div></div>`; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); }
function closeModal() { const modal = document.querySelector('#modalBackdrop'); modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }
function showToast(message) { const toast = document.querySelector('#toast'); toast.innerHTML = `<span class="toast-icon" aria-hidden="true">✦</span><span class="toast-copy"><strong>${escapeHtml(getToastTranslation('toastTitle'))}</strong><span>${escapeHtml(message)}</span></span>`; toast.classList.remove('show'); void toast.offsetWidth; toast.classList.add('show'); clearTimeout(window.toastTimer); window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2600); }
function scrollToSection(id) { const target = document.getElementById(id); if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

document.querySelectorAll('[data-scroll]').forEach(button => button.addEventListener('click', () => { scrollToSection(button.dataset.scroll === 'paldeck' ? 'paldeck-explorer' : button.dataset.scroll); if (button.dataset.focusLayer) { const toggle = document.querySelector(`.map-toggle[data-layer="${button.dataset.focusLayer}"]`); if (toggle && !toggle.classList.contains('active')) toggle.click(); } }));
document.querySelectorAll('.nav-item').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active')); button.classList.add('active'); document.querySelector('#breadcrumbLabel').textContent = button.textContent.replace(/\d+/g,'').trim().toUpperCase(); document.querySelector('#sidebar').classList.remove('open'); scrollToSection(button.dataset.scroll); }));
document.querySelectorAll('.filter-pill').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.filter-pill').forEach(item => item.classList.remove('active')); button.classList.add('active'); selectedElement = button.dataset.element; renderPals(); }));
document.querySelectorAll('.tier-filter').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.tier-filter').forEach(item => item.classList.remove('active')); button.classList.add('active'); selectedTier = button.dataset.tier; renderTiers(); }));
document.querySelector('#globalSearch').addEventListener('input', event => { globalQuery = event.target.value; renderPals(); });
document.querySelector('#parentA').addEventListener('change', updateBreedOutput); document.querySelector('#parentB').addEventListener('change', updateBreedOutput);
document.querySelectorAll('.breeding-mode-tab').forEach(button => button.addEventListener('click', () => { const reverse = button.dataset.breedMode === 'result'; document.querySelectorAll('.breeding-mode-tab').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-selected', item === button ? 'true' : 'false'); }); document.querySelector('#breedPairPanel').hidden = reverse; document.querySelector('#breedResultPanel').hidden = !reverse; if (reverse) updateReverseBreedOutput(); })); document.querySelector('#breedResultPal').addEventListener('change', updateReverseBreedOutput);
document.querySelectorAll('.db-tab').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.db-tab').forEach(item => item.classList.remove('active')); button.classList.add('active'); databasePage = 1; renderDatabase(button.dataset.db); })); document.querySelector('#dbSearch').addEventListener('input', event => { databaseQuery = event.target.value; databasePage = 1; renderDatabase(); }); document.querySelector('#dbPrev').addEventListener('click', () => { databasePage -= 1; renderDatabase(); }); document.querySelector('#dbNext').addEventListener('click', () => { databasePage += 1; renderDatabase(); });
document.querySelectorAll('.world-list-tab').forEach(button => button.addEventListener('click', () => { const alphaMode = button.dataset.list === 'alpha'; document.querySelectorAll('.world-list-tab').forEach(item => item.classList.remove('active')); button.classList.add('active'); document.querySelector('#towerList').hidden = alphaMode; document.querySelector('#alphaList').hidden = !alphaMode; updateWorldListSummary(); }));
document.querySelectorAll('.map-region-tab').forEach(button => button.addEventListener('click', () => setMapRegion(button.dataset.mapRegion)));
document.querySelectorAll('.map-toggle').forEach(button => button.addEventListener('click', () => { button.classList.toggle('active'); applyMapLayerVisibility(); }));
document.querySelectorAll('[data-toast-key]').forEach(button => button.addEventListener('click', () => showToast(getToastTranslation(button.dataset.toastKey))));
document.querySelector('#modalClose').addEventListener('click', closeModal); document.querySelector('#modalBackdrop').addEventListener('click', event => { if (event.target.id === 'modalBackdrop') closeModal(); }); document.querySelector('#mobileMenu').addEventListener('click', () => document.querySelector('#sidebar').classList.toggle('open'));
document.querySelector('#hpRange').addEventListener('input', event => { document.querySelector('#hpValue').textContent = `%${event.target.value}`; updateCapture(); }); document.querySelector('#effigyRange').addEventListener('input', event => { document.querySelector('#effigyValue').textContent = `Lv ${event.target.value}`; updateCapture(); }); document.querySelector('#captureLevel').addEventListener('input', event => { document.querySelector('#captureLevelValue').textContent = `Lv ${event.target.value}`; updateCapture(); }); document.querySelector('#captureButton').addEventListener('click', updateCapture); document.querySelector('#capturePal').addEventListener('change', syncCaptureLevel); document.querySelector('#captureSphere').addEventListener('change', updateCapture); document.querySelector('#captureStatus').addEventListener('change', updateCapture); document.querySelector('#captureBack').addEventListener('change', updateCapture); document.querySelector('#captureAlpha').addEventListener('change', updateCapture);
const languageNames = { tr: 'Türkçe', en: 'English', es: 'Español', pt: 'Português', de: 'Deutsch', fr: 'Français', ja: '日本語', ko: '한국어', zh: '中文', ru: 'Русский' };
const languageFlags = { tr: '🇹🇷', en: '🇺🇸', es: '🇪🇸', pt: '🇧🇷', de: '🇩🇪', fr: '🇫🇷', ja: '🇯🇵', ko: '🇰🇷', zh: '🇨🇳', ru: '🇷🇺' };
const languageFlagImages = { tr: 'https://flagcdn.com/w40/tr.png', en: 'https://flagcdn.com/w40/us.png', es: 'https://flagcdn.com/w40/es.png', pt: 'https://flagcdn.com/w40/br.png', de: 'https://flagcdn.com/w40/de.png', fr: 'https://flagcdn.com/w40/fr.png', ja: 'https://flagcdn.com/w40/jp.png', ko: 'https://flagcdn.com/w40/kr.png', zh: 'https://flagcdn.com/w40/cn.png', ru: 'https://flagcdn.com/w40/ru.png' };
const translations = {
  tr: { commandCenter: 'KOMUTA MERKEZİ', overview: 'Genel Bakış', paldeck: 'Paldeck', breedingLab: 'Üretim Lab.', eggAtlas: 'Yumurta Atlası', worldMap: 'Dünya Haritası', captureRate: 'Yakalama Oranı', powerList: 'Güç Listesi', database: 'Veritabanı', quickAccess: 'HIZLI ERİŞİM', fastTravelMap: 'Hızlı Seyahat Haritası', normalAlphaBosses: 'Normal Alpha Bossları', technologyTree: 'Teknoloji Ağacı', dataUpdated: 'VERİLER GÜNCEL', globalSearch: 'Veritabanında ara...', languageSelect: 'Dil seç', fieldGuide: 'PALPAGOS ADALARI // SAHA REHBERİ', heroText: 'Palları yakala. Yumurtaları çöz. Dünyayı oku.<br>Palworld için hızlı, görsel ve gerçek bir rehber.', explorePaldeck: 'Paldeck’i keşfet', breedingLabFull: 'Üretim laboratuvarı', verifiedData: 'Palworld 1.0 verileriyle çapraz kontrol edildi', paldeckSection: 'PALDECK', paldeckExplorer: 'Paldeck Gezgini', allPals: 'Tüm Pallar', breedingSection: 'ÜRETİM LABI', breedingTitle: 'Hangi çift, hangi Pal?', breedingIntro: 'Ebeveynleri seç, sonucu gör ve üretim zincirini kur.', palArchive: 'PAL ARŞİVİ // 288 KAYIT', visualPalPicker: 'Görselli Pal seçici', visualPalPickerHint: 'Bir ebeveyn kutusunu seç, sonra aşağıdaki Pal kartına tıkla.', palSearch: 'Tüm Pallar içinde ara...', eggSection: 'YUMURTA ATLASI', eggFamilies: 'Palworld yumurta aileleri', eggColorHint: 'renkler elementleri gösterir', worldSection: 'DÜNYA BİLGİSİ', worldBoard: 'Palpagos rota panosu', databaseSection: 'VERİTABANI', equipmentArchive: 'Ekipman arşivi', captureSection: 'CAPTURE RATE', captureTitle: 'Yakalama oranı', captureIntro: 'Oyundaki küre gücü + can + Capture Power hesabını gör.', tierSection: 'TIER LIST', strongestPals: 'En güçlü Pallar' },
  en: { commandCenter: 'COMMAND CENTER', overview: 'Overview', paldeck: 'Paldeck', breedingLab: 'Breeding Lab', eggAtlas: 'Egg Atlas', worldMap: 'World Map', captureRate: 'Capture Rate', powerList: 'Power List', database: 'Database', quickAccess: 'QUICK ACCESS', fastTravelMap: 'Fast Travel Map', normalAlphaBosses: 'Normal Alpha Bosses', technologyTree: 'Technology Tree', dataUpdated: 'DATA UPDATED', globalSearch: 'Search the database...', languageSelect: 'Choose language', fieldGuide: 'PALPAGOS ISLANDS // FIELD GUIDE', heroText: 'Catch Pals. Decode eggs. Read the world.<br>A fast, visual and accurate Palworld guide.', explorePaldeck: 'Explore Paldeck', breedingLabFull: 'Breeding laboratory', verifiedData: 'Cross-checked with Palworld 1.0 data', paldeckSection: 'PALDECK', paldeckExplorer: 'Paldeck Explorer', allPals: 'All Pals', breedingSection: 'BREEDING LAB', breedingTitle: 'Which pair makes which Pal?', breedingIntro: 'Choose parents, see the result and build a breeding chain.', palArchive: 'PAL ARCHIVE // 288 RECORDS', visualPalPicker: 'Visual Pal picker', visualPalPickerHint: 'Choose a parent slot, then click a Pal card below.', palSearch: 'Search all Pals...', eggSection: 'EGG ATLAS', eggFamilies: 'Palworld egg families', eggColorHint: 'colors show elements', worldSection: 'WORLD INTEL', worldBoard: 'Palpagos route board', databaseSection: 'DATABASE', equipmentArchive: 'Equipment archive', captureSection: 'CAPTURE RATE', captureTitle: 'Capture rate', captureIntro: 'See the in-game sphere power + HP + Capture Power calculation.', tierSection: 'TIER LIST', strongestPals: 'Strongest Pals' },
  es: { commandCenter: 'CENTRO DE MANDO', overview: 'Vista general', breedingLab: 'Laboratorio de cría', eggAtlas: 'Atlas de huevos', worldMap: 'Mapa del mundo', captureRate: 'Tasa de captura', powerList: 'Lista de poder', database: 'Base de datos', quickAccess: 'ACCESO RÁPIDO', fastTravelMap: 'Mapa de viaje rápido', normalAlphaBosses: 'Jefes Alpha normales', technologyTree: 'Árbol tecnológico', explorePaldeck: 'Explorar Paldeck', allPals: 'Todos los Pals', breedingTitle: '¿Qué pareja produce cada Pal?', captureTitle: 'Tasa de captura', strongestPals: 'Pals más fuertes' },
  pt: { commandCenter: 'CENTRAL DE COMANDO', overview: 'Visão geral', breedingLab: 'Laboratório de criação', eggAtlas: 'Atlas de ovos', worldMap: 'Mapa do mundo', captureRate: 'Taxa de captura', powerList: 'Lista de poder', database: 'Banco de dados', quickAccess: 'ACESSO RÁPIDO', fastTravelMap: 'Mapa de viagem rápida', normalAlphaBosses: 'Chefes Alpha normais', technologyTree: 'Árvore tecnológica', explorePaldeck: 'Explorar Paldeck', allPals: 'Todos os Pals', breedingTitle: 'Qual dupla gera cada Pal?', captureTitle: 'Taxa de captura', strongestPals: 'Pals mais fortes' },
  de: { commandCenter: 'KOMMANDOZENTRALE', overview: 'Übersicht', breedingLab: 'Zuchtlabor', eggAtlas: 'Eieratlas', worldMap: 'Weltkarte', captureRate: 'Fangrate', powerList: 'Stärkeliste', database: 'Datenbank', quickAccess: 'SCHNELLZUGRIFF', fastTravelMap: 'Schnellreisekarte', normalAlphaBosses: 'Normale Alpha-Bosse', technologyTree: 'Technologiebaum', explorePaldeck: 'Paldeck erkunden', allPals: 'Alle Pals', breedingTitle: 'Welches Paar erzeugt welchen Pal?', captureTitle: 'Fangrate', strongestPals: 'Stärkste Pals' },
  fr: { commandCenter: 'CENTRE DE COMMANDE', overview: 'Vue d’ensemble', breedingLab: 'Laboratoire d’élevage', eggAtlas: 'Atlas des œufs', worldMap: 'Carte du monde', captureRate: 'Taux de capture', powerList: 'Liste de puissance', database: 'Base de données', quickAccess: 'ACCÈS RAPIDE', fastTravelMap: 'Carte de voyage rapide', normalAlphaBosses: 'Boss Alpha normaux', technologyTree: 'Arbre technologique', explorePaldeck: 'Explorer le Paldeck', allPals: 'Tous les Pals', breedingTitle: 'Quel couple produit quel Pal ?', captureTitle: 'Taux de capture', strongestPals: 'Pals les plus puissants' },
  ja: { commandCenter: 'コマンドセンター', overview: '概要', breedingLab: '配合ラボ', eggAtlas: 'タマゴ図鑑', worldMap: 'ワールドマップ', captureRate: '捕獲率', powerList: 'パワーリスト', database: 'データベース', quickAccess: 'クイックアクセス', fastTravelMap: 'ファストトラベルマップ', normalAlphaBosses: '通常アルファボス', technologyTree: 'テクノロジーツリー', explorePaldeck: 'Paldeckを見る', allPals: 'すべてのパル', breedingTitle: 'どの組み合わせでどのパルが生まれる？', captureTitle: '捕獲率', strongestPals: '最強のパル' },
  ko: { commandCenter: '지휘 센터', overview: '개요', breedingLab: '교배 연구소', eggAtlas: '알 도감', worldMap: '월드 맵', captureRate: '포획 확률', powerList: '강함 목록', database: '데이터베이스', quickAccess: '빠른 이용', fastTravelMap: '빠른 이동 지도', normalAlphaBosses: '일반 알파 보스', technologyTree: '기술 트리', explorePaldeck: 'Paldeck 탐색', allPals: '모든 팰', breedingTitle: '어떤 조합으로 어떤 팰이 나올까?', captureTitle: '포획 확률', strongestPals: '가장 강한 팰' },
  zh: { commandCenter: '指挥中心', overview: '总览', breedingLab: '繁育实验室', eggAtlas: '帕鲁蛋图鉴', worldMap: '世界地图', captureRate: '捕获率', powerList: '强度列表', database: '数据库', quickAccess: '快速访问', fastTravelMap: '快速旅行地图', normalAlphaBosses: '普通阿尔法Boss', technologyTree: '科技树', explorePaldeck: '探索Paldeck', allPals: '全部帕鲁', breedingTitle: '哪一对帕鲁会繁育出什么？', captureTitle: '捕获率', strongestPals: '最强帕鲁' },
  ru: { commandCenter: 'КОМАНДНЫЙ ЦЕНТР', overview: 'Обзор', breedingLab: 'Лаборатория разведения', eggAtlas: 'Атлас яиц', worldMap: 'Карта мира', captureRate: 'Шанс поимки', powerList: 'Список силы', database: 'База данных', quickAccess: 'БЫСТРЫЙ ДОСТУП', fastTravelMap: 'Карта быстрого перемещения', normalAlphaBosses: 'Обычные альфа-боссы', technologyTree: 'Дерево технологий', explorePaldeck: 'Открыть Paldeck', allPals: 'Все палы', breedingTitle: 'Какая пара создаёт какого пала?', captureTitle: 'Шанс поимки', strongestPals: 'Самые сильные палы' },
};
const additionalTranslations = {
  tr: { dragonElement: 'EJDERHA ELEMENTİ', sector: 'SEKTÖR 08', scanReady: 'TARAMA HAZIR', paldeckIndex: 'PALDECK İNDEKSİ', registeredPals: 'kayıtlı Pal', itemArchive: 'EŞYA ARŞİVİ', active: 'AKTİF', itemsAndStructures: 'eşya ve yapı', worldIntel: 'DÜNYA BİLGİSİ', layers: '64 KATMAN', towerBossesTracked: 'kule bossu takipte', families: '11 AİLE', eggFamiliesCount: 'yumurta ailesi', featuredPal: 'ÖNE ÇIKAN PAL', fieldRecord: 'SAHA KAYDI 202', dragon: 'EJDERHA', jetragonDescription: 'Palpagos’un en hızlı uçan mount’larından biri. Rocket Launcher partner skill’i ile yüksek hızda havadan saldırı.', rarity: 'Nadirlik', partner: 'Partner', fullFieldRecord: 'Tam saha kaydı', airUnit: 'HAVA BİRLİĞİ', scanned: 'TARANDI // 99.8%', dragonDamage: 'EJDERHA HASARI', elementTable: 'ELEMENT TABLOSU', combatLogic: 'SAVAŞ MANTIĞI', elementMatchups: 'Element eşleşmeleri', strong: 'güçlü', weak: 'zayıf', damageBonus: 'Hasar bonusu Palworld element avantajı mantığını izler.', viewAllRecords: 'Tüm 288 kaydı gör', all: 'HEPSİ', neutral: 'NÖTR', fire: 'ATEŞ', water: 'SU', grass: 'ÇİM', electric: 'ELEKTRİK', ice: 'BUZ', ground: 'TOPRAK', dark: 'KARANLIK', labActive: 'LAB AKTİF', palPool: '288 PAL HAVUZU', specialVariants: 'ÖZEL VARYANTLAR', breedingMode: 'Breeding modu', pairToResult: 'Çift → sonuç', resultToParents: 'Pal → ebeveyn çiftleri', parent01: 'PARENT 01', parent02: 'PARENT 02', activeParent: 'AKTİF EBEVEYN', secondParent: 'İKİNCİ EBEVEYN', breedingFlow: 'Palworld üretim akışı', farm: 'ÇİFTLİK', chooseMaleFemale: '♂ + ♀ seç', cake: 'PASTA', prepareRecipe: 'tarifi hazırla', egg: 'YUMURTA', incubate: 'kuluçkaya al', resultPal: 'Sonuç Pal', oppositeSex: 'zıt cinsiyet', breedingFarm: 'üretim çiftliği', incubator: 'kuluçka makinesi', breedingLogic: 'PALWORLD ÜRETİM MANTIĞI', breedingPowerHint: 'Sonuçlar ebeveynlerin breeding power ortalamasına göre hesaplanır.', fieldNote: 'SAHA NOTU', eggColorSize: 'Yumurtanın rengi elementi, boyutu ise nadirlik/grade’i gösterir.', breedingTip: 'Çiftin sonucu Palworld’ün breeding power formülüyle belirlenir; aynı türü eşleştirmek sonucu garanti eder.', goToEggAtlas: 'Yumurta atlasına git', towerBosses: 'Kule bossları', normalAlpha: 'Normal Alpha', fastTravel: 'Hızlı seyahat', gridPalpagos: 'IZGARA 04 · PALPAGOS', coordinatesActive: 'KOORDİNATLAR AKTİF', towerBoss: 'KULE BOSSU', towerProgress: 'Kule ilerleyişi', weakToStrong: 'zayıftan → güçlüye', towers: 'Kuleler', openMapLayers: 'Tam harita katmanını aç', recordsPreparing: 'Palworld kayıtları hazırlanıyor', allItems: 'Tüm eşyalar', weapons: 'Silahlar', armorShield: 'Zırh ve kalkan', technology: 'Teknoloji', equipmentSearch: 'Ekipman adı veya kayıt kodu ara...', previous: '← Önceki', next: 'Sonraki →', pal: 'Pal', spherePower: 'Küre gücü', palLevel: 'Pal seviyesi', palHp: 'Pal canı', effigy: 'Effigy', status: 'Durum', normal: 'Normal', statusEffect: 'Durum etkisi · ×1.30', sleep: 'Uyku · ×1.35', backShot: 'Arkadan atış · geri kaçış avantajı', alphaBossPenalty: 'Alpha / boss · ×0.70', calculateRate: 'Oranı hesapla', captureDisclaimer: 'v1.0 tersine mühendislik formülü: Capture Power = küre gücü + Effigy × 0,5. Reticle değeri oyun ekranındaki yüzdedir; gerçek atış olasılığı farklıdır. Pocketpair tam formülü yayımlamadı.', capture: 'YAKALAMA', captureTipTitle: 'Canı azalt, arkadan at, doğru küreyi seç.', captureTip: 'Türün capture modifier’ı her Pal için farklıdır. Legendary Sphere her zaman otomatik başarı anlamına gelmez.', whyApproximate: 'Neden yaklaşık?', tierNote: 'tüm Paldeck · rol bazlı değerlendirme', howToRead: 'NASIL OKUNUR?', sRank: 'S = oyun sonu gücü', tierAside: 'Savaş, binek ve üs işlerinde farklı Pal’lar öne çıkar. Liste rol bazlı okunur.', footerDisclaimer: 'Resmî olmayan hayran referansı. Palworld ve tüm ilişkili isimler Pocketpair Inc. ticari markalarıdır.', dataSources: 'VERİ KAYNAKLARI' },
  en: { dragonElement: 'DRAGON ELEMENT', sector: 'SECTOR 08', scanReady: 'SCAN READY', paldeckIndex: 'PALDECK INDEX', registeredPals: 'registered Pals', itemArchive: 'ITEM ARCHIVE', active: 'ACTIVE', itemsAndStructures: 'items and structures', worldIntel: 'WORLD INTEL', layers: '64 LAYERS', towerBossesTracked: 'tower bosses tracked', families: '11 FAMILIES', eggFamiliesCount: 'egg families', featuredPal: 'FEATURED PAL', fieldRecord: 'FIELD RECORD 202', dragon: 'DRAGON', jetragonDescription: 'One of the fastest flying mounts in Palpagos. Use the Rocket Launcher partner skill for high-speed aerial attacks.', rarity: 'Rarity', partner: 'Partner', fullFieldRecord: 'Full field record', airUnit: 'AIR UNIT', scanned: 'SCANNED // 99.8%', dragonDamage: 'DRAGON DAMAGE', elementTable: 'ELEMENT TABLE', combatLogic: 'COMBAT LOGIC', elementMatchups: 'Element matchups', strong: 'strong', weak: 'weak', damageBonus: 'Damage bonuses follow Palworld elemental advantage rules.', viewAllRecords: 'View all 288 records', all: 'ALL', neutral: 'NEUTRAL', fire: 'FIRE', water: 'WATER', grass: 'GRASS', electric: 'ELECTRIC', ice: 'ICE', ground: 'GROUND', dark: 'DARK', labActive: 'LAB ACTIVE', palPool: '288 PAL POOL', specialVariants: 'SPECIAL VARIANTS', breedingMode: 'Breeding mode', pairToResult: 'Pair → result', resultToParents: 'Pal → parent pairs', parent01: 'PARENT 01', parent02: 'PARENT 02', activeParent: 'ACTIVE PARENT', secondParent: 'SECOND PARENT', breedingFlow: 'Palworld breeding flow', farm: 'FARM', chooseMaleFemale: 'choose ♂ + ♀', cake: 'CAKE', prepareRecipe: 'prepare recipe', egg: 'EGG', incubate: 'incubate', resultPal: 'Result Pal', oppositeSex: 'opposite sex', breedingFarm: 'breeding farm', incubator: 'incubator', breedingLogic: 'PALWORLD BREEDING LOGIC', breedingPowerHint: 'Results are calculated from the parents’ average breeding power.', fieldNote: 'FIELD NOTE', eggColorSize: 'The egg color shows its element; size shows rarity/grade.', breedingTip: 'The result follows Palworld’s breeding power formula; pairing the same species guarantees the result.', goToEggAtlas: 'Go to egg atlas', towerBosses: 'Tower bosses', normalAlpha: 'Normal Alpha', fastTravel: 'Fast travel', gridPalpagos: 'GRID 04 · PALPAGOS', coordinatesActive: 'COORDINATES ACTIVE', towerBoss: 'TOWER BOSS', towerProgress: 'Tower progress', weakToStrong: 'weak → strong', towers: 'Towers', openMapLayers: 'Open full map layers', recordsPreparing: 'Preparing Palworld records', allItems: 'All items', weapons: 'Weapons', armorShield: 'Armor & shield', technology: 'Technology', equipmentSearch: 'Search equipment name or record code...', previous: '← Previous', next: 'Next →', pal: 'Pal', spherePower: 'Sphere power', palLevel: 'Pal level', palHp: 'Pal HP', effigy: 'Effigy', status: 'Status', normal: 'Normal', statusEffect: 'Status effect · ×1.30', sleep: 'Sleep · ×1.35', backShot: 'Back shot · escape advantage', alphaBossPenalty: 'Alpha / boss · ×0.70', calculateRate: 'Calculate rate', captureDisclaimer: 'v1.0 reverse-engineered formula: Capture Power = sphere power + Effigy × 0.5. Reticle is the percentage shown in-game; real throw probability differs. Pocketpair has not published the full formula.', capture: 'CAPTURE', captureTipTitle: 'Lower HP, attack from behind, choose the right sphere.', captureTip: 'Each species has a different capture modifier. Legendary Sphere does not guarantee success.', whyApproximate: 'Why approximate?', tierNote: 'full Paldeck · role-based evaluation', howToRead: 'HOW TO READ', sRank: 'S = endgame power', tierAside: 'Different Pals excel in combat, mounts and base work. Read this list by role.', footerDisclaimer: 'Unofficial fan reference. Palworld and related names are trademarks of Pocketpair Inc.', dataSources: 'DATA SOURCES' },
};
const runtimeTranslations = {
  tr: { pickPal: 'Pal seç', pickPalHint: 'Aşağıdaki kartlardan seç', noPalMatches: 'Bu filtreyle eşleşen Pal bulunamadı.', eggSizes: 'Yumurta boyutları', large: 'Büyük', giant: 'Dev', weakLabel: 'zayıf', elementLabel: 'ELEMENT', weakness: 'ZAYIFLIK', paldeckRecord: 'Paldeck kaydı', noBreedPair: 'Bu çift için breed-rank verisi bulunamadı.', specialCombo: 'ÖZEL COMBO', breedRank: 'BREED RANK', result: 'SONUÇ', specialTable: 'özel kombinasyon tablosu', averageRank: 'ortalama rank', noParents: 'için kayıtlı ebeveyn çifti bulunamadı.', pairs: 'çift', resultFor: 'sonucu', specialCombos: 'Özel kombinasyonlar ★ ile işaretlendi.', shownInGame: 'oyunda görünen', realSingleThrow: 'gerçek tek atış', tenThrows: '10 kürede en az bir başarı', averageThrows: 'ortalama', backShotNote: 'Arka atış işaretli: geri kaçış kontrolü avantajı; temel yüzdeye ayrıca çarpan eklenmedi.', veryHigh: 'ÇOK YÜKSEK', high: 'YÜKSEK', medium: 'ORTA', low: 'DÜŞÜK', records: 'kayıt', page: 'Sayfa', noEquipment: 'Bu aramayla eşleşen ekipman bulunamadı.', category: 'Kategori', rarityLabel: 'Nadirlik', recordCode: 'Kayıt kodu', equipment: 'Ekipman', description: 'Kayıt / açıklama', tierRecord: 'Palworld katalog girdisi' },
  en: { pickPal: 'Pick a Pal', pickPalHint: 'Choose from the cards below', noPalMatches: 'No Pals match this filter.', eggSizes: 'Egg sizes', large: 'Large', giant: 'Giant', weakLabel: 'weak', elementLabel: 'ELEMENT', weakness: 'WEAKNESS', paldeckRecord: 'Paldeck record', noBreedPair: 'No breed-rank data was found for this pair.', specialCombo: 'SPECIAL COMBO', breedRank: 'BREED RANK', result: 'RESULT', specialTable: 'special combination table', averageRank: 'average rank', noParents: 'has no registered parent pair.', pairs: 'pairs', resultFor: 'result', specialCombos: 'Special combinations are marked with ★.', shownInGame: 'shown in-game', realSingleThrow: 'real single throw', tenThrows: 'At least one success in 10 throws', averageThrows: 'average', backShotNote: 'Back shot selected: escape-control advantage; no extra multiplier was added to the base percentage.', veryHigh: 'VERY HIGH', high: 'HIGH', medium: 'MEDIUM', low: 'LOW', records: 'records', page: 'Page', noEquipment: 'No equipment matches this search.', category: 'Category', rarityLabel: 'Rarity', recordCode: 'Record code', equipment: 'Equipment', description: 'Record / description', tierRecord: 'Palworld catalog entry' },
};
const interfaceTranslations = {
  tr: { brandSub: 'SAHA REHBERİ', versionData: 'PALWORLD // 1.0 VERİ SETİ', checkedDate: 'İNCELENDİ 03 AĞU 2026', heroTitle: 'Palpagos’un<br><span>yaşayan</span> veritabanı.', artCaption: 'J E T R A G O N <span>•</span> AERIAL MISSILE', can: 'CAN', effigyShort: 'EFFIGY', backAttack: 'ARKADAN AT', reset: 'Sıfırla', heroMap: 'Yakınlaştırılabilir ve kaydırılabilir Palpagos haritası', mapControls: 'Harita kontrolleri', zoomOut: 'Haritayı uzaklaştır', zoomIn: 'Haritayı yakınlaştır', resetMap: 'Haritayı sıfırla', statsSummary: 'Veritabanı özeti', close: 'Kapat', openMenu: 'Menüyü aç', mainNav: 'Ana navigasyon', themeToggle: 'Tema değiştir', heroArt: 'Palworld temalı keşif illüstrasyonu', palElementFilters: 'Pal elementi filtreleri', allPalCards: 'Tüm Pal kartları', pageOne: 'Sayfa 1', footerGuide: 'PALWORLD SAHA REHBERİ', fixedSpawn: 'sabit spawn · level sıralı' },
  en: { brandSub: 'FIELD GUIDE', versionData: 'PALWORLD // 1.0 DATA SET', checkedDate: 'REVIEWED 03 AUG 2026', heroTitle: 'Palpagos’<br><span>living</span> database.', artCaption: 'J E T R A G O N <span>•</span> AERIAL MISSILE', can: 'HP', effigyShort: 'EFFIGY', backAttack: 'BACK SHOT', reset: 'Reset', heroMap: 'Zoomable and draggable Palpagos map', mapControls: 'Map controls', zoomOut: 'Zoom out map', zoomIn: 'Zoom in map', resetMap: 'Reset map', statsSummary: 'Database summary', close: 'Close', openMenu: 'Open menu', mainNav: 'Main navigation', themeToggle: 'Change theme', heroArt: 'Palworld exploration illustration', palElementFilters: 'Pal element filters', allPalCards: 'All Pal cards', pageOne: 'Page 1', footerGuide: 'PALWORLD FIELD GUIDE', fixedSpawn: 'fixed spawn · sorted by level' },
};
const localeUi = {
  es: { brandSub: 'GUÍA DE CAMPO', versionData: 'PALWORLD // DATOS 1.0', checkedDate: 'REVISADO 03 AGO 2026', heroTitle: 'Base de datos<br><span>viva</span> de Palpagos.', artCaption: 'J E T R A G O N <span>•</span> MISIL AÉREO', can: 'PS', effigyShort: 'EFFIGY', backAttack: 'ATAQUE POR LA ESPALDA', reset: 'Restablecer', heroMap: 'Mapa de Palpagos con zoom y desplazamiento', mapControls: 'Controles del mapa', zoomOut: 'Alejar mapa', zoomIn: 'Acercar mapa', resetMap: 'Restablecer mapa', statsSummary: 'Resumen de la base de datos', close: 'Cerrar', openMenu: 'Abrir menú', mainNav: 'Navegación principal', themeToggle: 'Cambiar tema', heroArt: 'Ilustración de exploración de Palworld', palElementFilters: 'Filtros de elementos de Pals', allPalCards: 'Todas las tarjetas de Pals', pageOne: 'Página 1', footerGuide: 'GUÍA DE CAMPO DE PALWORLD', dataUpdated: 'DATOS ACTUALIZADOS', recordsPreparing: 'Preparando registros de Palworld', towerProgress: 'Progreso de torres', weakToStrong: 'débil → fuerte', openMapLayers: 'Abrir todas las capas del mapa', noPalMatches: 'No hay Pals para este filtro.', noEquipment: 'Ningún equipo coincide con la búsqueda.', category: 'Categoría', rarityLabel: 'Rareza', recordCode: 'Código de registro', equipment: 'Equipo', description: 'Registro / descripción', records: 'registros', page: 'Página', result: 'RESULTADO', specialCombo: 'COMBINACIÓN ESPECIAL', breedRank: 'RANGO DE CRÍA', averageRank: 'rango medio', noParents: 'no tiene parejas de padres registradas.', pairs: 'parejas', resultFor: 'resultado', shownInGame: 'visible en el juego', realSingleThrow: 'lanzamiento real', tenThrows: 'al menos un éxito en 10 lanzamientos', averageThrows: 'promedio', veryHigh: 'MUY ALTA', high: 'ALTA', medium: 'MEDIA', low: 'BAJA' },
  pt: { brandSub: 'GUIA DE CAMPO', versionData: 'PALWORLD // DADOS 1.0', checkedDate: 'REVISADO 03 AGO 2026', heroTitle: 'Banco de dados<br><span>vivo</span> de Palpagos.', artCaption: 'J E T R A G O N <span>•</span> MÍSSIL AÉREO', can: 'HP', effigyShort: 'EFFIGY', backAttack: 'ATAQUE PELAS COSTAS', reset: 'Redefinir', heroMap: 'Mapa de Palpagos com zoom e deslocamento', mapControls: 'Controles do mapa', zoomOut: 'Afastar mapa', zoomIn: 'Aproximar mapa', resetMap: 'Redefinir mapa', statsSummary: 'Resumo do banco de dados', close: 'Fechar', openMenu: 'Abrir menu', mainNav: 'Navegação principal', themeToggle: 'Mudar tema', heroArt: 'Ilustração de exploração do Palworld', palElementFilters: 'Filtros de elementos dos Pals', allPalCards: 'Todos os cards de Pals', pageOne: 'Página 1', footerGuide: 'GUIA DE CAMPO PALWORLD', dataUpdated: 'DADOS ATUALIZADOS', recordsPreparing: 'Preparando registros do Palworld', towerProgress: 'Progresso das torres', weakToStrong: 'fraco → forte', openMapLayers: 'Abrir todas as camadas do mapa', noPalMatches: 'Nenhum Pal corresponde a este filtro.', noEquipment: 'Nenhum equipamento corresponde à busca.', category: 'Categoria', rarityLabel: 'Raridade', recordCode: 'Código do registro', equipment: 'Equipamento', description: 'Registro / descrição', records: 'registros', page: 'Página', result: 'RESULTADO', specialCombo: 'COMBINAÇÃO ESPECIAL', breedRank: 'RANK DE CRIAÇÃO', averageRank: 'rank médio', noParents: 'não possui dupla de pais registrada.', pairs: 'duplas', resultFor: 'resultado', shownInGame: 'mostrado no jogo', realSingleThrow: 'arremesso real', tenThrows: 'pelo menos um sucesso em 10 arremessos', averageThrows: 'média', veryHigh: 'MUITO ALTA', high: 'ALTA', medium: 'MÉDIA', low: 'BAIXA' },
  de: { brandSub: 'FELDHANDBUCH', versionData: 'PALWORLD // DATENSATZ 1.0', checkedDate: 'GEPRÜFT 03. AUG. 2026', heroTitle: 'Palpagos’<br><span>lebende</span> Datenbank.', artCaption: 'J E T R A G O N <span>•</span> LUFTRAKETE', can: 'KP', effigyShort: 'EFFIGY', backAttack: 'RÜCKENTREFFER', reset: 'Zurücksetzen', heroMap: 'Zoombare und verschiebbare Palpagos-Karte', mapControls: 'Kartensteuerung', zoomOut: 'Karte verkleinern', zoomIn: 'Karte vergrößern', resetMap: 'Karte zurücksetzen', statsSummary: 'Datenbankübersicht', close: 'Schließen', openMenu: 'Menü öffnen', mainNav: 'Hauptnavigation', themeToggle: 'Theme wechseln', heroArt: 'Palworld-Erkundungsillustration', palElementFilters: 'Pal-Elementfilter', allPalCards: 'Alle Pal-Karten', pageOne: 'Seite 1', footerGuide: 'PALWORLD-FELDHANDBUCH', dataUpdated: 'DATEN AKTUALISIERT', recordsPreparing: 'Palworld-Einträge werden geladen', towerProgress: 'Turmfortschritt', weakToStrong: 'schwach → stark', openMapLayers: 'Alle Kartenebenen öffnen', noPalMatches: 'Keine Pals für diesen Filter.', noEquipment: 'Keine passende Ausrüstung gefunden.', category: 'Kategorie', rarityLabel: 'Seltenheit', recordCode: 'Eintragscode', equipment: 'Ausrüstung', description: 'Eintrag / Beschreibung', records: 'Einträge', page: 'Seite', result: 'ERGEBNIS', specialCombo: 'BESONDERE KOMBINATION', breedRank: 'ZUCHT-RANG', averageRank: 'Durchschnittsrang', noParents: 'hat kein registriertes Elternpaar.', pairs: 'Paare', resultFor: 'Ergebnis', shownInGame: 'im Spiel angezeigt', realSingleThrow: 'echter Einzelwurf', tenThrows: 'mindestens ein Erfolg in 10 Würfen', averageThrows: 'Durchschnitt', veryHigh: 'SEHR HOCH', high: 'HOCH', medium: 'MITTEL', low: 'NIEDRIG' },
  fr: { brandSub: 'GUIDE DE TERRAIN', versionData: 'PALWORLD // DONNÉES 1.0', checkedDate: 'VÉRIFIÉ LE 03 AOÛT 2026', heroTitle: 'Base de données<br><span>vivante</span> de Palpagos.', artCaption: 'J E T R A G O N <span>•</span> MISSILE AÉRIEN', can: 'PV', effigyShort: 'EFFIGY', backAttack: 'ATTAQUE DANS LE DOS', reset: 'Réinitialiser', heroMap: 'Carte de Palpagos zoomable et déplaçable', mapControls: 'Commandes de la carte', zoomOut: 'Dézoomer la carte', zoomIn: 'Zoomer la carte', resetMap: 'Réinitialiser la carte', statsSummary: 'Résumé de la base de données', close: 'Fermer', openMenu: 'Ouvrir le menu', mainNav: 'Navigation principale', themeToggle: 'Changer de thème', heroArt: 'Illustration d’exploration de Palworld', palElementFilters: 'Filtres d’éléments des Pals', allPalCards: 'Toutes les cartes de Pals', pageOne: 'Page 1', footerGuide: 'GUIDE DE TERRAIN PALWORLD', dataUpdated: 'DONNÉES À JOUR', recordsPreparing: 'Préparation des données Palworld', towerProgress: 'Progression des tours', weakToStrong: 'faible → fort', openMapLayers: 'Ouvrir toutes les couches de la carte', noPalMatches: 'Aucun Pal ne correspond à ce filtre.', noEquipment: 'Aucun équipement ne correspond à la recherche.', category: 'Catégorie', rarityLabel: 'Rareté', recordCode: 'Code du registre', equipment: 'Équipement', description: 'Registre / description', records: 'registres', page: 'Page', result: 'RÉSULTAT', specialCombo: 'COMBINAISON SPÉCIALE', breedRank: 'RANG D’ÉLEVAGE', averageRank: 'rang moyen', noParents: 'n’a aucun couple de parents enregistré.', pairs: 'couples', resultFor: 'résultat', shownInGame: 'affiché en jeu', realSingleThrow: 'lancer réel', tenThrows: 'au moins une réussite en 10 lancers', averageThrows: 'moyenne', veryHigh: 'TRÈS ÉLEVÉE', high: 'ÉLEVÉE', medium: 'MOYENNE', low: 'FAIBLE' },
  ja: { brandSub: 'フィールドガイド', versionData: 'PALWORLD // 1.0 データセット', checkedDate: '2026年8月3日確認', heroTitle: 'パルパゴスの<br><span>生きた</span>データベース。', artCaption: 'J E T R A G O N <span>•</span> エアリアルミサイル', can: 'HP', effigyShort: 'EFFIGY', backAttack: '背面攻撃', reset: 'リセット', heroMap: 'ズームとドラッグに対応したパルパゴス地図', mapControls: 'マップ操作', zoomOut: 'マップを縮小', zoomIn: 'マップを拡大', resetMap: 'マップをリセット', statsSummary: 'データベース概要', close: '閉じる', openMenu: 'メニューを開く', mainNav: 'メインナビゲーション', themeToggle: 'テーマを変更', heroArt: 'Palworld探索イラスト', palElementFilters: 'パル属性フィルター', allPalCards: 'すべてのパルカード', pageOne: '1ページ', footerGuide: 'PALWORLD フィールドガイド', dataUpdated: 'データ更新済み', recordsPreparing: 'Palworldデータを準備中', towerProgress: '塔の進行状況', weakToStrong: '弱い → 強い', openMapLayers: 'マップの全レイヤーを開く', noPalMatches: 'このフィルターに一致するパルはありません。', noEquipment: '一致する装備はありません。', category: 'カテゴリ', rarityLabel: 'レア度', recordCode: '記録コード', equipment: '装備', description: '記録 / 説明', records: '件', page: 'ページ', result: '結果', specialCombo: '特殊コンボ', breedRank: '配合ランク', averageRank: '平均ランク', noParents: '登録された親の組み合わせはありません。', pairs: '組み合わせ', resultFor: '結果', shownInGame: 'ゲーム内表示', realSingleThrow: '実際の1投', tenThrows: '10回中1回以上成功', averageThrows: '平均', veryHigh: '非常に高い', high: '高い', medium: '中', low: '低い' },
  ko: { brandSub: '필드 가이드', versionData: 'PALWORLD // 1.0 데이터 세트', checkedDate: '2026년 8월 3일 확인', heroTitle: '팔파고스의<br><span>살아 있는</span> 데이터베이스.', artCaption: 'J E T R A G O N <span>•</span> 공중 미사일', can: 'HP', effigyShort: 'EFFIGY', backAttack: '후방 공격', reset: '초기화', heroMap: '확대 및 드래그가 가능한 팔파고스 지도', mapControls: '지도 조작', zoomOut: '지도 축소', zoomIn: '지도 확대', resetMap: '지도 초기화', statsSummary: '데이터베이스 요약', close: '닫기', openMenu: '메뉴 열기', mainNav: '주요 탐색', themeToggle: '테마 변경', heroArt: 'Palworld 탐험 일러스트', palElementFilters: '팰 속성 필터', allPalCards: '모든 팰 카드', pageOne: '1페이지', footerGuide: 'PALWORLD 필드 가이드', dataUpdated: '데이터 업데이트됨', recordsPreparing: 'Palworld 기록 준비 중', towerProgress: '타워 진행도', weakToStrong: '약함 → 강함', openMapLayers: '지도 전체 레이어 열기', noPalMatches: '이 필터와 일치하는 팰이 없습니다.', noEquipment: '검색과 일치하는 장비가 없습니다.', category: '분류', rarityLabel: '희귀도', recordCode: '기록 코드', equipment: '장비', description: '기록 / 설명', records: '기록', page: '페이지', result: '결과', specialCombo: '특수 조합', breedRank: '교배 등급', averageRank: '평균 등급', noParents: '등록된 부모 조합이 없습니다.', pairs: '조합', resultFor: '결과', shownInGame: '게임 내 표시', realSingleThrow: '실제 1회 투척', tenThrows: '10회 중 1회 이상 성공', averageThrows: '평균', veryHigh: '매우 높음', high: '높음', medium: '중간', low: '낮음' },
  zh: { brandSub: '实地指南', versionData: 'PALWORLD // 1.0 数据集', checkedDate: '2026年8月3日核验', heroTitle: '帕尔帕戈斯的<br><span>鲜活</span>数据库。', artCaption: 'J E T R A G O N <span>•</span> 空袭导弹', can: '生命值', effigyShort: 'EFFIGY', backAttack: '背后攻击', reset: '重置', heroMap: '可缩放和拖动的帕尔帕戈斯地图', mapControls: '地图控制', zoomOut: '缩小地图', zoomIn: '放大地图', resetMap: '重置地图', statsSummary: '数据库摘要', close: '关闭', openMenu: '打开菜单', mainNav: '主导航', themeToggle: '切换主题', heroArt: 'Palworld探索插画', palElementFilters: '帕鲁属性筛选', allPalCards: '全部帕鲁卡片', pageOne: '第1页', footerGuide: 'PALWORLD 实地指南', dataUpdated: '数据已更新', recordsPreparing: '正在准备Palworld记录', towerProgress: '高塔进度', weakToStrong: '弱 → 强', openMapLayers: '打开地图全部图层', noPalMatches: '没有符合此筛选的帕鲁。', noEquipment: '没有符合搜索条件的装备。', category: '类别', rarityLabel: '稀有度', recordCode: '记录代码', equipment: '装备', description: '记录 / 描述', records: '条记录', page: '页', result: '结果', specialCombo: '特殊组合', breedRank: '繁育等级', averageRank: '平均等级', noParents: '没有登记的父母组合。', pairs: '组合', resultFor: '结果', shownInGame: '游戏内显示', realSingleThrow: '单次实际投掷', tenThrows: '10次中至少成功一次', averageThrows: '平均', veryHigh: '非常高', high: '高', medium: '中', low: '低' },
  ru: { brandSub: 'ПОЛЕВОЙ СПРАВОЧНИК', versionData: 'PALWORLD // НАБОР ДАННЫХ 1.0', checkedDate: 'ПРОВЕРЕНО 03 АВГ. 2026', heroTitle: 'Живая<br><span>база данных</span> Палпагоса.', artCaption: 'J E T R A G O N <span>•</span> ВОЗДУШНАЯ РАКЕТА', can: 'ОЗ', effigyShort: 'EFFIGY', backAttack: 'АТАКА СО СПИНЫ', reset: 'Сбросить', heroMap: 'Карта Палпагоса с масштабированием и перетаскиванием', mapControls: 'Управление картой', zoomOut: 'Уменьшить карту', zoomIn: 'Увеличить карту', resetMap: 'Сбросить карту', statsSummary: 'Сводка базы данных', close: 'Закрыть', openMenu: 'Открыть меню', mainNav: 'Основная навигация', themeToggle: 'Сменить тему', heroArt: 'Иллюстрация исследования Palworld', palElementFilters: 'Фильтры элементов палов', allPalCards: 'Все карточки палов', pageOne: 'Страница 1', footerGuide: 'ПОЛЕВОЙ СПРАВОЧНИК PALWORLD', dataUpdated: 'ДАННЫЕ ОБНОВЛЕНЫ', recordsPreparing: 'Подготовка записей Palworld', towerProgress: 'Прогресс башен', weakToStrong: 'слабый → сильный', openMapLayers: 'Открыть все слои карты', noPalMatches: 'Палы по этому фильтру не найдены.', noEquipment: 'Подходящее снаряжение не найдено.', category: 'Категория', rarityLabel: 'Редкость', recordCode: 'Код записи', equipment: 'Снаряжение', description: 'Запись / описание', records: 'записей', page: 'Страница', result: 'РЕЗУЛЬТАТ', specialCombo: 'ОСОБАЯ КОМБИНАЦИЯ', breedRank: 'РАНГ РАЗВЕДЕНИЯ', averageRank: 'средний ранг', noParents: 'нет зарегистрированной пары родителей.', pairs: 'пары', resultFor: 'результат', shownInGame: 'отображается в игре', realSingleThrow: 'реальный одиночный бросок', tenThrows: 'хотя бы один успех за 10 бросков', averageThrows: 'среднее', veryHigh: 'ОЧЕНЬ ВЫСОКИЙ', high: 'ВЫСОКИЙ', medium: 'СРЕДНИЙ', low: 'НИЗКИЙ' },
};
Object.assign(localeUi.fr, { globalSearch: 'Rechercher dans la base de données...', fieldGuide: 'ÎLES DE PALPAGOS // GUIDE DE TERRAIN', heroText: 'Capturez les Pals. Décodez les œufs. Lisez le monde.<br>Un guide Palworld rapide, visuel et précis.', explorePaldeck: 'Explorer le Paldeck', breedingLabFull: 'Laboratoire d’élevage', verifiedData: 'Vérifié avec les données Palworld 1.0', paldeckExplorer: 'Explorateur du Paldeck', breedingIntro: 'Choisissez les parents, voyez le résultat et créez une chaîne d’élevage.', visualPalPickerHint: 'Choisissez un emplacement de parent puis cliquez sur une carte de Pal.', eggFamilies: 'Familles d’œufs de Palworld', eggColorHint: 'les couleurs indiquent les éléments', worldBoard: 'Tableau des routes de Palpagos', equipmentArchive: 'Archives de l’équipement', captureIntro: 'Consultez la puissance de la sphère + PV + Capture Power du jeu.', strongestPals: 'Pals les plus puissants' });
Object.assign(localeUi.ja, { globalSearch: 'データベースを検索...', fieldGuide: 'パルパゴス諸島 // フィールドガイド', heroText: 'パルを捕まえ、タマゴを読み解き、世界を知ろう。<br>Palworldのための速くて見やすい正確なガイド。', explorePaldeck: 'Paldeckを探索', breedingLabFull: '配合ラボ', verifiedData: 'Palworld 1.0のデータと照合済み', paldeckExplorer: 'Paldeckエクスプローラー', breedingIntro: '親を選び、結果を確認して配合ルートを作成します。', visualPalPickerHint: '親スロットを選び、下のパルカードをクリックしてください。', eggFamilies: 'Palworldのタマゴ系統', eggColorHint: '色は属性を示します', worldBoard: 'パルパゴスのルートボード', equipmentArchive: '装備アーカイブ', captureIntro: 'ゲーム内のボール威力 + HP + Capture Powerを確認します。', strongestPals: '最強のパル' });
Object.assign(localeUi.ko, { globalSearch: '데이터베이스 검색...', fieldGuide: '팔파고스 제도 // 필드 가이드', heroText: '팰을 포획하고, 알을 해독하고, 세계를 읽어 보세요.<br>빠르고 보기 좋은 정확한 Palworld 가이드입니다.', explorePaldeck: '팰덱 탐색', breedingLabFull: '교배 연구소', verifiedData: 'Palworld 1.0 데이터와 대조 완료', paldeckExplorer: '팰덱 탐색기', breedingIntro: '부모를 선택하고 결과를 확인해 교배 경로를 만드세요.', visualPalPickerHint: '부모 슬롯을 선택한 뒤 아래의 팰 카드를 클릭하세요.', eggFamilies: 'Palworld 알 계열', eggColorHint: '색상은 속성을 나타냅니다', worldBoard: '팔파고스 경로 보드', equipmentArchive: '장비 보관함', captureIntro: '게임 내 구체 위력 + HP + Capture Power를 확인하세요.', strongestPals: '가장 강한 팰' });
Object.assign(localeUi.zh, { globalSearch: '搜索数据库...', fieldGuide: '帕尔帕戈斯群岛 // 实地指南', heroText: '捕捉帕鲁，解析帕鲁蛋，探索这个世界。<br>一份快速、直观且准确的Palworld指南。', explorePaldeck: '探索帕鲁图鉴', breedingLabFull: '繁育实验室', verifiedData: '已与Palworld 1.0数据交叉核验', paldeckExplorer: '帕鲁图鉴浏览器', breedingIntro: '选择亲代，查看结果并规划繁育路线。', visualPalPickerHint: '选择亲代栏位，然后点击下方的帕鲁卡片。', eggFamilies: 'Palworld帕鲁蛋类别', eggColorHint: '颜色代表属性', worldBoard: '帕尔帕戈斯路线面板', equipmentArchive: '装备档案', captureIntro: '查看游戏内的球体威力 + 生命值 + Capture Power。', strongestPals: '最强帕鲁' });
Object.assign(localeUi.ru, { globalSearch: 'Поиск в базе данных...', fieldGuide: 'ОСТРОВА ПАЛПАГОСА // ПОЛЕВОЙ СПРАВОЧНИК', heroText: 'Лови палов. Разгадывай яйца. Исследуй мир.<br>Быстрый, наглядный и точный справочник Palworld.', explorePaldeck: 'Открыть Paldeck', breedingLabFull: 'Лаборатория разведения', verifiedData: 'Сверено с данными Palworld 1.0', paldeckExplorer: 'Исследователь Paldeck', breedingIntro: 'Выберите родителей, посмотрите результат и постройте цепочку разведения.', visualPalPickerHint: 'Выберите слот родителя и нажмите карточку пала ниже.', eggFamilies: 'Семейства яиц Palworld', eggColorHint: 'цвета показывают элементы', worldBoard: 'Панель маршрутов Палпагоса', equipmentArchive: 'Архив снаряжения', captureIntro: 'Смотрите силу сферы + ОЗ + Capture Power из игры.', strongestPals: 'Самые сильные палы' });
Object.assign(localeUi.fr, { all: 'TOUS', towerBosses: 'Boss de tour', normalAlpha: 'Alpha normal', fastTravel: 'Voyage rapide', towerBoss: 'BOSS DE TOUR', allItems: 'Tous les objets' });
Object.assign(localeUi.ja, { all: 'すべて', towerBosses: 'タワーボス', normalAlpha: '通常アルファ', fastTravel: 'ファストトラベル', towerBoss: 'タワーボス', allItems: 'すべてのアイテム' });
Object.assign(localeUi.ko, { all: '전체', towerBosses: '타워 보스', normalAlpha: '일반 알파', fastTravel: '빠른 이동', towerBoss: '타워 보스', allItems: '모든 아이템' });
Object.assign(localeUi.zh, { all: '全部', towerBosses: '高塔Boss', normalAlpha: '普通阿尔法', fastTravel: '快速旅行', towerBoss: '高塔Boss', allItems: '全部物品' });
Object.assign(localeUi.ru, { all: 'ВСЕ', towerBosses: 'БОССЫ БАШЕН', normalAlpha: 'ОБЫЧНЫЙ АЛЬФА', fastTravel: 'БЫСТРОЕ ПЕРЕМЕЩЕНИЕ', towerBoss: 'БОСС БАШНИ', allItems: 'Все предметы' });
Object.assign(localeUi.fr, { neutral: 'NEUTRE', fire: 'FEU', water: 'EAU', grass: 'PLANTE', electric: 'ÉLECTRIQUE', ice: 'GLACE', ground: 'SOL', dark: 'TÉNÈBRES', dragon: 'DRAGON', elementLabel: 'ÉLÉMENT', weakness: 'FAIBLESSE', weakLabel: 'faible' });
Object.assign(localeUi.ja, { neutral: '無属性', fire: '炎', water: '水', grass: '草', electric: '雷', ice: '氷', ground: '地面', dark: '闇', dragon: 'ドラゴン', elementLabel: '属性', weakness: '弱点', weakLabel: '弱点' });
Object.assign(localeUi.ko, { neutral: '무속성', fire: '불', water: '물', grass: '풀', electric: '번개', ice: '얼음', ground: '땅', dark: '어둠', dragon: '드래곤', elementLabel: '속성', weakness: '약점', weakLabel: '약함' });
Object.assign(localeUi.zh, { neutral: '无属性', fire: '火', water: '水', grass: '草', electric: '雷', ice: '冰', ground: '地面', dark: '暗', dragon: '龙', elementLabel: '属性', weakness: '弱点', weakLabel: '弱' });
Object.assign(localeUi.ru, { neutral: 'НЕЙТРАЛЬНЫЙ', fire: 'ОГОНЬ', water: 'ВОДА', grass: 'ТРАВА', electric: 'ЭЛЕКТРИЧЕСТВО', ice: 'ЛЁД', ground: 'ЗЕМЛЯ', dark: 'ТЬМА', dragon: 'ДРАКОН', elementLabel: 'ЭЛЕМЕНТ', weakness: 'СЛАБОСТЬ', weakLabel: 'слабость' });
localeUi.es.fixedSpawn = 'aparición fija · ordenado por nivel'; localeUi.pt.fixedSpawn = 'spawn fixo · ordenado por nível'; localeUi.de.fixedSpawn = 'fester Spawn · nach Level sortiert'; localeUi.fr.fixedSpawn = 'apparition fixe · triée par niveau'; localeUi.ja.fixedSpawn = '固定スポーン · レベル順'; localeUi.ko.fixedSpawn = '고정 스폰 · 레벨순'; localeUi.zh.fixedSpawn = '固定刷新 · 按等级排序'; localeUi.ru.fixedSpawn = 'фиксированный спавн · по уровню';
const toastTranslations = {
  tr: { toastTitle: 'PAL BİLDİRİMİ', recordsIndexed: '288 Palworld Pal kaydı indekslendi', farmToast: "Üretim Çiftliği'nde bir erkek ve bir dişi Pal kullanılır.", cakeToast: 'Pasta olmadan Üretim Çiftliği yumurta üretmez.', mapLayersToast: 'Boss ve seyahat katmanları aktif; tam interaktif harita modu yakında.', approxToast: 'Yaklaşık oran; oyun içindeki sonuç birkaç puan oynayabilir.' },
  en: { toastTitle: 'PAL NOTIFICATION', recordsIndexed: '288 Palworld Pal records indexed', farmToast: 'The Breeding Farm uses one male and one female Pal.', cakeToast: 'The Breeding Farm does not produce eggs without Cake.', mapLayersToast: 'Boss and travel layers are active; full interactive map mode is coming soon.', approxToast: 'Approximate rate; the in-game result may vary by a few points.' },
  es: { toastTitle: 'NOTIFICACIÓN PAL', recordsIndexed: '288 registros de Pals de Palworld indexados', farmToast: 'La granja de cría usa un Pal macho y uno hembra.', cakeToast: 'La granja de cría no produce huevos sin pastel.', mapLayersToast: 'Las capas de jefes y viajes están activas; el mapa interactivo completo llegará pronto.', approxToast: 'Tasa aproximada; el resultado del juego puede variar algunos puntos.' },
  pt: { toastTitle: 'NOTIFICAÇÃO PAL', recordsIndexed: '288 registros de Pals do Palworld indexados', farmToast: 'A fazenda de criação usa um Pal macho e uma fêmea.', cakeToast: 'A fazenda de criação não produz ovos sem bolo.', mapLayersToast: 'As camadas de chefes e viagens estão ativas; o mapa interativo completo chegará em breve.', approxToast: 'Taxa aproximada; o resultado no jogo pode variar alguns pontos.' },
  de: { toastTitle: 'PAL-BENACHRICHTIGUNG', recordsIndexed: '288 Palworld-Pal-Einträge indexiert', farmToast: 'Die Zuchtfarm verwendet ein männliches und ein weibliches Pal.', cakeToast: 'Ohne Kuchen produziert die Zuchtfarm keine Eier.', mapLayersToast: 'Boss- und Reiseebenen sind aktiv; der vollständige interaktive Modus folgt bald.', approxToast: 'Ungefährer Wert; das Ergebnis im Spiel kann um einige Punkte abweichen.' },
  fr: { toastTitle: 'NOTIFICATION PAL', recordsIndexed: '288 entrées de Pals Palworld indexées', farmToast: 'La ferme d’élevage utilise un Pal mâle et un Pal femelle.', cakeToast: 'La ferme d’élevage ne produit pas d’œuf sans gâteau.', mapLayersToast: 'Les couches des boss et des voyages sont actives ; la carte interactive complète arrive bientôt.', approxToast: 'Taux approximatif ; le résultat en jeu peut varier de quelques points.' },
  ja: { toastTitle: 'パル通知', recordsIndexed: 'Palworldのパル記録288件を索引化しました', farmToast: '配合牧場ではオスとメスのパルを1体ずつ使います。', cakeToast: 'ケーキがないと配合牧場はタマゴを作りません。', mapLayersToast: 'ボスとファストトラベルのレイヤーは有効です。完全な地図モードは近日対応します。', approxToast: '概算値です。ゲーム内の結果は数ポイント変動する場合があります。' },
  ko: { toastTitle: '팰 알림', recordsIndexed: 'Palworld 팰 기록 288개를 색인했습니다', farmToast: '교배 목장에서는 수컷 팰과 암컷 팰을 하나씩 사용합니다.', cakeToast: '케이크가 없으면 교배 목장에서 알이 나오지 않습니다.', mapLayersToast: '보스와 빠른 이동 레이어가 활성화되었습니다. 전체 인터랙티브 지도는 곧 제공됩니다.', approxToast: '근사값입니다. 게임 내 결과는 몇 퍼센트 정도 달라질 수 있습니다.' },
  zh: { toastTitle: '帕鲁通知', recordsIndexed: '已索引288条Palworld帕鲁记录', farmToast: '繁育牧场需要一只雄性帕鲁和一只雌性帕鲁。', cakeToast: '没有蛋糕时，繁育牧场不会产蛋。', mapLayersToast: 'Boss和快速旅行图层已启用，完整互动地图即将推出。', approxToast: '这是近似概率，游戏内结果可能有几个百分点的差异。' },
  ru: { toastTitle: 'УВЕДОМЛЕНИЕ О ПАЛЕ', recordsIndexed: 'Проиндексировано 288 записей Palworld', farmToast: 'На ферме разведения нужны один самец и одна самка пала.', cakeToast: 'Без торта ферма разведения не производит яйца.', mapLayersToast: 'Слои боссов и быстрого перемещения активны; полный интерактивный режим скоро появится.', approxToast: 'Примерный шанс; результат в игре может отличаться на несколько пунктов.' },
};
function getToastTranslation(key) { return toastTranslations[currentLanguage]?.[key] || toastTranslations.en[key] || key; }
let currentLanguage = 'tr';
function getTranslation(key) { return translations[currentLanguage]?.[key] || additionalTranslations[currentLanguage]?.[key] || runtimeTranslations[currentLanguage]?.[key] || interfaceTranslations[currentLanguage]?.[key] || localeUi[currentLanguage]?.[key] || translations.en[key] || additionalTranslations.en[key] || runtimeTranslations.en[key] || interfaceTranslations.en[key] || localeUi.en?.[key] || additionalTranslations.tr[key] || runtimeTranslations.tr[key] || interfaceTranslations.tr[key] || translations.tr[key] || key; }
function applyLanguage(language, announce = false) {
  currentLanguage = translations[language] ? language : 'tr';
  document.documentElement.lang = currentLanguage;
  localStorage.setItem('palarch-language', currentLanguage);
  document.title = `ENSAR VE YOLDAŞLARI // ${getTranslation('footerGuide')}`;
  const select = document.querySelector('#languageSelect'); const flag = document.querySelector('#languageFlag'); const flagFallback = document.querySelector('#languageFlagFallback'); const currentLabel = document.querySelector('#languageCurrent'); const trigger = document.querySelector('#languageTrigger');
  if (select) { select.value = currentLanguage; select.setAttribute('aria-label', getTranslation('languageSelect')); }
  if (flag) { flag.onerror = () => { flag.hidden = true; if (flagFallback) flagFallback.style.display = 'inline-grid'; }; flag.src = languageFlagImages[currentLanguage]; flag.alt = `${languageNames[currentLanguage]} flag`; flag.hidden = false; }
  if (flagFallback) { flagFallback.textContent = languageFlags[currentLanguage]; flagFallback.style.display = 'none'; }
  if (currentLabel) currentLabel.textContent = languageNames[currentLanguage];
  if (trigger) { trigger.setAttribute('aria-label', getTranslation('languageSelect')); trigger.setAttribute('aria-expanded', 'false'); }
  document.querySelectorAll('.language-option').forEach(option => { const active = option.dataset.language === currentLanguage; option.classList.toggle('active', active); option.setAttribute('aria-selected', active ? 'true' : 'false'); });
  document.querySelectorAll('[data-i18n]').forEach(node => { node.innerHTML = getTranslation(node.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(node => { node.placeholder = getTranslation(node.dataset.i18nPlaceholder); });
  document.querySelectorAll('[data-i18n-aria]').forEach(node => { node.setAttribute('aria-label', getTranslation(node.dataset.i18nAria)); });
  document.querySelectorAll('[data-i18n-title]').forEach(node => { node.title = getTranslation(node.dataset.i18nTitle); });
  if (window.palworldAppReady) { renderPals(); renderHabitatFinder(); renderEggs(); renderTowers(); renderAlphaList(); renderMapPins(); updateWorldListSummary(); updateMapRegionUi(); updateDatabaseCounts(); renderDatabase(); renderBreedDirectory(); updateBreedDirectorySlots(); updateCapture(); renderTiers(); updateBreedOutput(); if (!document.querySelector('#breedResultPanel')?.hidden) updateReverseBreedOutput(); }
  if (announce) showToast(`${languageFlags[currentLanguage]} ${languageNames[currentLanguage]}`);
}
const languageSelect = document.querySelector('#languageSelect');
const savedLanguage = localStorage.getItem('palarch-language');
const languagePicker = document.querySelector('#languagePicker'); const languageTrigger = document.querySelector('#languageTrigger'); const languageMenu = document.querySelector('#languageMenu');
function closeLanguageMenu() { if (!languageMenu || !languageTrigger) return; languageMenu.hidden = true; languageTrigger.setAttribute('aria-expanded', 'false'); }
if (languageSelect) languageSelect.addEventListener('change', event => applyLanguage(event.target.value, true));
if (languageTrigger && languageMenu) languageTrigger.addEventListener('click', event => { event.stopPropagation(); languageMenu.hidden = !languageMenu.hidden; languageTrigger.setAttribute('aria-expanded', languageMenu.hidden ? 'false' : 'true'); });
document.querySelectorAll('.language-option').forEach(option => option.addEventListener('click', event => { event.stopPropagation(); applyLanguage(option.dataset.language, true); closeLanguageMenu(); }));
document.addEventListener('click', event => { if (languagePicker && !languagePicker.contains(event.target)) closeLanguageMenu(); });
if (languageSelect) applyLanguage(savedLanguage || 'tr');

const eggLanguageLabels = {
  COMMON: { tr: ['Normal Yumurta', 'Nötr Pallar'], en: ['Common Egg', 'Neutral Pals'] }, FIRE: { tr: ['Kavurucu Yumurta', 'Ateş Pallar'], en: ['Scorching Egg', 'Fire Pals'] }, WATER: { tr: ['Nemli Yumurta', 'Su Pallar'], en: ['Damp Egg', 'Water Pals'] }, GRASS: { tr: ['Yeşil Yumurta', 'Çim Pallar'], en: ['Verdant Egg', 'Grass Pals'] }, ELECTRIC: { tr: ['Elektrik Yumurtası', 'Elektrik Pallar'], en: ['Electric Egg', 'Electric Pals'] }, ICE: { tr: ['Donmuş Yumurta', 'Buz Pallar'], en: ['Frozen Egg', 'Ice Pals'] }, GROUND: { tr: ['Kayalık Yumurta', 'Toprak Pallar'], en: ['Rocky Egg', 'Ground Pals'] }, DARK: { tr: ['Karanlık Yumurta', 'Karanlık Pallar'], en: ['Dark Egg', 'Dark Pals'] }, DRAGON: { tr: ['Ejderha Yumurtası', 'Ejderha Pallar'], en: ['Dragon Egg', 'Dragon Pals'] }, MUTATED: { tr: ['Değişmiş Yumurta', 'Mutasyonlu pasifler'], en: ['Mutated Egg', 'Mutated passives'] }, OMINOUS: { tr: ['Uğursuz Yumurta', 'World Tree yumurtaları'], en: ['Ominous Egg', 'World Tree eggs'] },
};
const dynamicTextEnglish = { 'Paldeck kaydı': 'Paldeck record', 'Palworld partner skilli': 'Palworld partner skill', 'Veri kaydı mevcut': 'Data record available', 'Çiftlik / yün': 'Farm / wool', 'El işi / taşıma': 'Handiwork / transport', 'Çiftlik / yumurta': 'Farm / eggs', 'Ekim / toplama': 'Planting / gathering', 'Yakma / alev silahı': 'Kindling / flamethrower', 'Sulama / fırlatıcı': 'Watering / launcher', 'El işi / madencilik': 'Handiwork / mining', 'Ekim / ilaç üretimi': 'Planting / medicine', 'Efsanevi hava bineği': 'Legendary flying mount', 'Palpagos / World Tree': 'Palpagos / World Tree' };
const dynamicRoleLocales = {
  es: { 'Farm / wool': 'Granja / lana', 'Handiwork / transport': 'Artesanía / transporte', 'Farm / eggs': 'Granja / huevos', 'Planting / gathering': 'Plantación / recolección', 'Kindling / flamethrower': 'Encendido / lanzallamas', 'Watering / launcher': 'Riego / lanzador', 'Handiwork / mining': 'Artesanía / minería', 'Planting / medicine': 'Plantación / medicina', 'Legendary flying mount': 'Montura voladora legendaria' },
  pt: { 'Farm / wool': 'Fazenda / lã', 'Handiwork / transport': 'Artesanato / transporte', 'Farm / eggs': 'Fazenda / ovos', 'Planting / gathering': 'Plantio / coleta', 'Kindling / flamethrower': 'Acender / lança-chamas', 'Watering / launcher': 'Irrigação / lançador', 'Handiwork / mining': 'Artesanato / mineração', 'Planting / medicine': 'Plantio / medicina', 'Legendary flying mount': 'Montaria voadora lendária' },
  de: { 'Farm / wool': 'Farm / Wolle', 'Handiwork / transport': 'Handwerk / Transport', 'Farm / eggs': 'Farm / Eier', 'Planting / gathering': 'Pflanzen / Sammeln', 'Kindling / flamethrower': 'Anzünden / Flammenwerfer', 'Watering / launcher': 'Bewässern / Werfer', 'Handiwork / mining': 'Handwerk / Bergbau', 'Planting / medicine': 'Pflanzen / Medizin', 'Legendary flying mount': 'Legendäres Flug-Reittier' },
  fr: { 'Farm / wool': 'Ferme / laine', 'Handiwork / transport': 'Artisanat / transport', 'Farm / eggs': 'Ferme / œufs', 'Planting / gathering': 'Plantation / récolte', 'Kindling / flamethrower': 'Allumage / lance-flammes', 'Watering / launcher': 'Arrosage / lanceur', 'Handiwork / mining': 'Artisanat / minage', 'Planting / medicine': 'Plantation / médecine', 'Legendary flying mount': 'Monture volante légendaire' },
  ja: { 'Farm / wool': '牧場 / 羊毛', 'Handiwork / transport': '手作業 / 運搬', 'Farm / eggs': '牧場 / タマゴ', 'Planting / gathering': '栽培 / 採集', 'Kindling / flamethrower': '火起こし / 火炎放射器', 'Watering / launcher': '水やり / ランチャー', 'Handiwork / mining': '手作業 / 採掘', 'Planting / medicine': '栽培 / 薬', 'Legendary flying mount': '伝説の飛行ライド' },
  ko: { 'Farm / wool': '목장 / 양털', 'Handiwork / transport': '수작업 / 운반', 'Farm / eggs': '목장 / 알', 'Planting / gathering': '씨뿌리기 / 채집', 'Kindling / flamethrower': '불 피우기 / 화염방사기', 'Watering / launcher': '관개 / 발사기', 'Handiwork / mining': '수작업 / 채굴', 'Planting / medicine': '재배 / 의약품', 'Legendary flying mount': '전설의 비행 탈것' },
  zh: { 'Farm / wool': '牧场 / 羊毛', 'Handiwork / transport': '手工 / 搬运', 'Farm / eggs': '牧场 / 帕鲁蛋', 'Planting / gathering': '播种 / 采集', 'Kindling / flamethrower': '生火 / 火焰喷射器', 'Watering / launcher': '浇水 / 发射器', 'Handiwork / mining': '手工 / 采矿', 'Planting / medicine': '播种 / 制药', 'Legendary flying mount': '传说飞行坐骑' },
  ru: { 'Farm / wool': 'Ферма / шерсть', 'Handiwork / transport': 'Ручная работа / транспорт', 'Farm / eggs': 'Ферма / яйца', 'Planting / gathering': 'Посадка / сбор', 'Kindling / flamethrower': 'Розжиг / огнемёт', 'Watering / launcher': 'Полив / пусковая установка', 'Handiwork / mining': 'Ручная работа / добыча', 'Planting / medicine': 'Посадка / медицина', 'Legendary flying mount': 'Легендарный воздушный маунт' },
};
function localizedData(value, fallback = 'Palworld data record') { if (currentLanguage === 'tr') return value; const english = dynamicTextEnglish[value]; if (english) return dynamicRoleLocales[currentLanguage]?.[english] || english; return /[ğüşöçıİı]/i.test(String(value)) ? fallback : (value || fallback); }
function localizedRole(role) { return localizedData(role, 'Paldeck record'); }
const elementKeyMap = { neutral: 'neutral', nötr: 'neutral', fire: 'fire', ateş: 'fire', water: 'water', su: 'water', grass: 'grass', çim: 'grass', electric: 'electric', elektrik: 'electric', ice: 'ice', buz: 'ice', ground: 'ground', toprak: 'ground', dark: 'dark', karanlık: 'dark', dragon: 'dragon', ejderha: 'dragon' };
function localizedElement(element) { return String(element || '—').split(' / ').map(part => getTranslation(elementKeyMap[part.toLowerCase()] || part.toLowerCase()) || part).join(' / '); }
function localizedLocation(value) { if (currentLanguage === 'tr') return value; return String(value).replaceAll('Kulesi', 'Tower').replaceAll('Girişi', 'Entrance').replace('Başlangıç Platosu', 'Starting Plateau').replace('Küçük Yerleşim', 'Small Settlement'); }
function localizedEgg(egg) { const labels = eggLanguageLabels[egg.code]; const chosen = labels?.[currentLanguage] || labels?.en; return { name: chosen?.[0] || egg.original, hint: chosen?.[1] || localizedData(egg.hint, 'Pal eggs') }; }

const openPalModalBase = openPalModal;
openPalModal = function(name) { openPalModalBase(name); const pal = findPal(name); const body = document.querySelector('#modalContent .modal-body'); if (!body) return; const pills = body.querySelector('.modal-pills'); if (pills?.children[1]) pills.children[1].remove(); pills?.insertAdjacentHTML('afterend', habitatModalMarkup(pal)); };

const themeButton = document.querySelector('#themeButton'); const savedTheme = localStorage.getItem('palarch-theme'); if (savedTheme === 'light') document.body.classList.add('light-mode'); function syncThemeButton() { themeButton.textContent = document.body.classList.contains('light-mode') ? '☀' : '☾'; themeButton.setAttribute('aria-label', getTranslation('themeToggle')); themeButton.title = getTranslation('themeToggle'); } syncThemeButton(); themeButton.addEventListener('click', () => { document.body.classList.toggle('light-mode'); localStorage.setItem('palarch-theme', document.body.classList.contains('light-mode') ? 'light' : 'dark'); syncThemeButton(); showToast(getTranslation('themeToggle')); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); document.querySelector('#globalSearch').focus(); } });

renderPals(); renderEggs(); initMapTiles(); setMapRegion('palpagos'); updateDatabaseCounts(); renderDatabase(); initMapControls(); populateSelect('parentA', breedablePals); populateSelect('parentB', breedablePals); populateSelect('breedResultPal', breedablePals); document.querySelector('#parentB').value = 'Vixy'; document.querySelector('#breedResultPal').value = 'Anubis'; updateBreedOutput(); initBreedDirectory(); renderCaptureOptions(); updateCapture(); renderTiers(); initHabitatFinder(); window.palworldAppReady = true;
