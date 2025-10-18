
let currentMolecule = "";
let aktualisNoveny = "";
let currentMikroDrog = "";
	    
const molekulaAdatok = {
    // Illóolajok
    "linalool": { csoport: "Illóolajok", image: "linalool.jpg" },
    "timol": { csoport: "Illóolajok", image: "timol.jpg" },
    "tujon": { csoport: "Illóolajok", image: "tujon.jpg" },
    "eukaliptol": { csoport: "Illóolajok", image: "eukaliptol.jpg" },
    "α-bizabolol": { csoport: "Illóolajok", image: "alfa-bizabolol.jpg" },
    "mentol": { csoport: "Illóolajok", image: "mentol.jpg" },
    "menton": { csoport: "Illóolajok", image: "menton.jpg" },
    "kámfor": { csoport: "Illóolajok", image: "kámfor.jpg" },
    "kamazulén": { csoport: "Illóolajok", image: "kamazulén.jpg" },
    "matricin": { csoport: "Illóolajok", image: "matricin.jpg" },
    "karvon": { csoport: "Illóolajok", image: "karvon.jpg" },
    "fahéjaldehid": { csoport: "Illóolajok", image: "fahéjaldehid.jpg" },

    // Keserűanyagok
    "genciopikrozid": { csoport: "Keserűanyagok", image: "genciopikrozid.jpg" },
    "knicin": { csoport: "Keserűanyagok", image: "knicin.jpg" },
    "marrubiin": { csoport: "Keserűanyagok", image: "marrubiin.jpg" },
    "valtrát": { csoport: "Keserűanyagok", image: "valtrát.jpg" },

    // Triterpének
    "ginzenozid Rg1": { csoport: "Triterpének", image: "ginzenozid-Rg1.jpg" },
    "lanatozid A": { csoport: "Triterpének", image: "lanatozid-A.jpg" },
    "lanatozid B": { csoport: "Triterpének", image: "lanatozid-B.jpg" },
    "lanatozid C": { csoport: "Triterpének", image: "lanatozid-C.jpg" },
    "purpureaglikozid A": { csoport: "Triterpének", image: "purpureaglikozid-A.jpg" },
    "digoxin": { csoport: "Triterpének", image: "digoxin.jpg" },
    "gitoxin": { csoport: "Triterpének", image: "gitoxin.jpg" },
}

const osszesCsoport = [...new Set(Object.values(molekulaAdatok).map(m => m.csoport))];
// Függvények frissítése
	    
const novenyAdatok = {
    "Aurantii amari epicarpium et mesocarpium": { magyardrog: "Keserű narancs epikarpium és mezokarpium", latin: "Citrus aurantium", csalad: "Rutaceae", kep: "Aurantii_amari_epicarpium_et_mesocarpium.jpg" },
    "Betulae folium": { magyardrog: "Nyírfa levél", latin: "Betula pendula", csalad: "Betulaceae", kep: "Betulae_folium.jpg" },
    "Crataegi folium cum flore": { magyardrog: "Galagonya virágos hajtásvég", latin: "Crataegus monogyna", csalad: "Rosaceae", kep: "Crataegi_folium_cum_flore.jpg" },
    "Curcumae longae rhizoma": { magyardrog: "Kurkuma gyökértörzs", latin: "Curcuma longa", csalad: "Zingiberaceae", kep: "Curcumae_longae_rhizoma.jpg" },
    "Echinaceae purpurea herba": { magyardrog: "Bíbor kasvirág virágos hajtás", latin: "Echinacea purpurea", csalad: "Asteraceae", kep: "Echinaceae_purpurea_herba.jpg" },
    "Ginkgonis folium": { magyardrog: "Páfrányfenyőlevél", latin: "Ginkgo biloba", csalad: "Ginkgoaceae", kep: "Ginkgonis_folium.jpg" },
    "Hyperici herba": { magyardrog: "Közönséges orbáncfű virágos hajtás", latin: "Hypericum perforatum", csalad: "Hypericaceae", kep: "Hyperici_herba.jpg" },
    "Meliloti herba": { magyardrog: "Orvosi somkóró virágos hajtás", latin: "Melilotus officinalis", csalad: "Fabaceae", kep: "Meliloti_herba.jpg" },
    "Melissae folium": { magyardrog: "Citromfű levél", latin: "Melissa officinalis", csalad: "Lamiaceae", kep: "Melissae_folium.jpg" },
    "Myrtilli fructus siccus": { magyardrog: "Szárított fekete áfonya termés", latin: "Vaccinium myrtillus", csalad: "Ericaceae", kep: "Myrtilli_fructus_siccus.jpg" },
    "Rosmarini folium": { magyardrog: "Rozmaring levél", latin: "Rosmarinus officinalis", csalad: "Lamiaceae", kep: "Rosmarini_folium.jpg" },
    "Sambuci flos": { magyardrog: "Fekete bodza virág", latin: "Sambucus nigra", csalad: "Adoxaceae", kep: "Sambuci_flos.jpg" },
    "Silybi mariani fructus": { magyardrog: "Máriatövis termés", latin: "Silybum marianum", csalad: "Asteraceae", kep: "Silybi_mariani_fructus.jpg" },
    "Solidaginis herba": { magyardrog: "Kanadai és magas aranyvessző virágos hajtás", latin: "Solidago virgaurea", csalad: "Asteraceae", kep: "Solidaginis_herba.jpg" },
    "Tiliae flos": { magyardrog: "Hársfa virág", latin: "Tilia cordata", csalad: "Malvaceae", kep: "Tiliae_flos.jpg" },
    "Uvae ursi folium": { magyardrog: "Orvisi medveszőlő levél", latin: "Arctostaphylos uva-ursi", csalad: "Ericaceae", kep: "Uvae_ursi_folium.jpg" },
    "Ononidis radix": { magyardrog: "Tövises iglice gyökér", latin: "Ononis spinosa", csalad: "Fabaceae", kep: "Ononidis_radix.jpg" },
    "Agrimoniae herba": { magyardrog: "Közönséges párlógű virágos hajtás", latin: "Agrimonia eupatoria", csalad: "Rosaceae", kep: "Agrimoniae_herba.jpg" },
    "Camelliae sinensis folium non fermentatum": { magyardrog: "Kínai teacserje nem fermentált levél", latin: "Camellia sinensis", csalad: "Theaceae", kep: "Camelliae_sinensis_folium_non_fermentatum.jpg" },
    "Cannabis herba": { magyardrog: "Kender levél", latin: "Cannabis sativa", csalad: "Cannabaceae", kep: "Cannabis_herba.jpg" },
    "Galla": { magyardrog: "Gubacs", latin: "Quercus infectoria", csalad: "Fagaceae", kep: "Galla.jpg" },
    "Lupuli flos": { magyardrog: "Komlótoboz", latin: "Humulus lupulus", csalad: "Cannabaceae", kep: "Lupuli_flos.jpg" },
    "Quercus cortex": { magyardrog: "Tölgyfakéreg", latin: "Quercus robur", csalad: "Fagaceae", kep: "Qercus_cortex.jpg" },
    "Rhamni purshianae cortex": { magyardrog: "Kaszkarabokor kéreg", latin: "Rhamnus purshiana", csalad: "Rhamnaceae", kep: "Rhamni_purshianae_cortex.jpg" },
    "Rhei radix": { magyardrog: "Tenyeres és orvosi rebarbara gyökér", latin: "Rheum palmatum", csalad: "Polygonaceae", kep: "Rhei_radix.jpg" },
    "Sennae fructus": { magyardrog: "Szennatermés", latin: "Senna alexandrina", csalad: "Fabaceae", kep: "Sennae_fructus.jpg" },
    "Vaccini macrocarpi fructus": { magyardrog: "Nagy bogyós áfonya termés", latin: "Vaccinium macrocarpon", csalad: "Ericaceae", kep: "Vaccini_macrocarpi_fructus.jpg" },
    "Alchemillae herba": { magyardrog: "Réti palástfű", latin: "Alchemilla vulgaris", csalad: "Rosaceae", kep: "Alchemillae_herba.jpg" },
    "Aloe capensis": { magyardrog: "Tövises aloé", latin: "Aloe ferox", csalad: "Asphodelaceae", kep: "Aloe_capensis.jpg" },
    "Frangulae cortex": { magyardrog: "Kutyabengekéreg", latin: "Rhamnus frangula", csalad: "Rhamnaceae", kep: "Frangulae_cortex.jpg" },
    "Ratanhiae radix": { magyardrog: "Ratanhia gyökér", latin: "Krameria lappacea", csalad: "Krameriaceae", kep: "Ratanhiae_radix.jpg" },
    "Cotini folium": { magyardrog: "Cserszömörce levél", latin: "Cotinus coggygria", csalad: "Anacardiaceae", kep: "Cotini_folium.jpg" },
    "Sennae foliolum": { magyardrog: "Szenna levélke", latin: "Senna alexandrina", csalad: "Fabaceae", kep: "Sennae_foliolum.jpg" }
};

const mikroKepek = [ 
    "Szklereidák__Schisandrae_chinensis_fructus.jpg",
    "Testa__Schisandrae_chinensis_fructus.jpg",
    "Olajtartósejt__Schisandrae_chinensis_fructus.jpg",
    "Derékszögben_elhajló_szemcsés_fedőszőr__Meliloti_herba.jpg",
    "Sárga_váladékot_tartalmazó_parenchimasejtek__Curcumae_longae_rhizoma.jpg",
    "Trachea__Curcumae_longae_rhizoma.jpg",
    "Sárga_olajtömeget_hordozó_kiválasztósejt__Curcumae_longae_rhizoma.jpg",
    "Páfrányfarok_alakú_szőr__Agrimoniae_herba.jpg",
    "Szklereidák__Quercus_cortex_pulvis.jpg",
    "Rekeszes_rost__Quercus_cortex_pulvis.jpg",
    "Rozettákat_olajcseppeket_tartalmazó_parenchima__Silybi_mariani_fructus.jpg",
    "Szklerenchima__Silybi_mariani_fructus.jpg",
    "Maghéj_oszlop_alakú_sejt__Silybi_mariani_fructus.jpg",
    "Pigmentsejtek__Silybi_mariani_fructus.jpg",
    "Parenchima__Silybi_mariani_fructus.jpg",
    "Anomocitikus_sztómaapparátus__Solidaginis_herba.jpg",
    "Egysoros_kúpos_fedőszőr__Solidaginis_herba.jpg",
    "Párosfedőszőr__Solidaginis_herba.jpg",
    "Bóbitaszőrök__Solidaginis_herba.jpg",
    "Pollen__Solidaginis_herba.jpg",
    "Parenchima__Frangulae_cortex_pulvis.jpg",
    "Rekeszes_rost__Frangulae_cortex_pulvis.jpg",
    "Parenchima__Rhei_radix_pulvis.jpg",
    "Trachea__Rhei_radix_pulvis.jpg",
    "Ca-oxalát_rozetta__Rhei_radix_pulvis.jpg",
    "Oszlopos_parenchima__Sennae_folium_pulvis.jpg",
    "Egysejtű_bibircses_kúpalakú_szőr__Sennae_folium_pulvis.jpg",
    "Ca-oxalátkristályos_sejtsorok_rostokon__Sennae_folium_pulvis.jpg",
    "Endocarpium_Ca-oxalát_hasábkristályokkal__Sennae_fructus_pulvis.jpg",
    "Rost__Sennae_fructus_pulvis.jpg"
];

const mikroAdatok = {};
const mikroFeatureList = new Set();
const mikroDrogList = new Set();


mikroKepek.forEach(kep => {
    const [featureRaw, drogFile] = kep.split("__");
    
    // Feature név formázása
    const feature = featureRaw.replace(/_/g, " ");
    
    // Drog név formázása
    const cleanDrog = drogFile
        .replace(/_pulvis/g, "")
        .replace(/.jpg/g, "")    
        .replace(/_/g, " ");    

    if (!mikroAdatok[cleanDrog]) mikroAdatok[cleanDrog] = [];
    mikroAdatok[cleanDrog].push({ feature, kep });
    
    mikroFeatureList.add(feature);
    mikroDrogList.add(cleanDrog);
});
	    
// Játék indítása
function startMikroszkopikusJatek() {
    document.getElementById("novenyfelismeresSubMenu").style.display = "none";
    document.getElementById("mikroszkopikus-container").style.display = "block";
    
    // Véletlenszerű drog kiválasztása
    const drogok = Object.keys(mikroAdatok);
    currentMikroDrog = drogok[Math.floor(Math.random() * drogok.length)];
    
    // Képek megjelenítése
    const kepekDiv = document.getElementById("mikro-kepek");
    kepekDiv.innerHTML = mikroAdatok[currentMikroDrog]
        .map(kep => `
            <div class="kep-es-legordulo">
                <img src="MIKRO/${kep.kep}" style="max-width: 200px; margin: 10px;">
                <select class="mikro-feature-select">
                    <option value="">Válassz képletet...</option>
                    ${Array.from(mikroFeatureList).map(f => `<option>${f}</option>`).join("")}
                </select>
            </div>
        `).join("");

    // Drog dropdown feltöltése
    const drogSelect = document.getElementById("mikro-drog-select");
    drogSelect.innerHTML = `
        <option value="">Válassz drogot...</option>
        ${Array.from(mikroDrogList).map(d => `<option>${d}</option>`).join("")}
    `;
}

// Ellenőrzés logika javítva
function checkMikro() {
    const valaszSelects = document.querySelectorAll(".mikro-feature-select");
    const drogValasz = document.getElementById("mikro-drog-select").value;
    const helyesValaszok = mikroAdatok[currentMikroDrog].map(k => k.feature);

    let eredmeny = "<strong>Eredmények:</strong><br>";
    
    // Képek ellenőrzése
    valaszSelects.forEach((select, index) => {
        const valasz = select.value;
        const helyes = helyesValaszok[index];
        const isCorrect = valasz === helyes;
        
        eredmeny += `Kép ${index+1}: ${isCorrect ? "✔️" : `❌ (helyes: ${helyes})`}<br>`;
    });

    // Drog név ellenőrzése
    eredmeny += `<br>Drog válasz: ${drogValasz === currentMikroDrog ? "✔️" : `❌ (helyes: ${currentMikroDrog})`}`;

    document.getElementById("mikro-eredmeny").innerHTML = eredmeny;
}

	

function showSubMenu(type) {
    // Minden elem elrejtése
    const availableMenus = ['novenyfelismeres', 'kepletek', 'tabla'];
    
    if (!availableMenus.includes(type)) {
        console.log("Ez a menüpont ideiglenesen nem elérhető");
        return;
    }
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("kepletekSubMenu").style.display = "none";
    document.getElementById("novenyfelismeresSubMenu").style.display = "none";
    document.getElementById("kepfelismeres-container").style.display = "none";
    document.getElementById("makroszkopikus-container").style.display = "none"
	
    document.getElementById(type + "SubMenu").style.display = "block";
}


function startFormulaRecognition() {
    document.getElementById("kepletekSubMenu").style.display = "none";
    document.getElementById("kepfelismeres-container").style.display = "block";
    newMoleculeRecognition();
}

// Új függvények a képfelismeréshez

function newMoleculeRecognition() {
    const moleculeNames = Object.keys(molekulaAdatok);
    currentMolecule = moleculeNames[Math.floor(Math.random() * moleculeNames.length)];
    document.getElementById("molekula-kep").src = "KÉPLETEK/" + molekulaAdatok[currentMolecule].image;
    
    // Csoport legördülő feltöltése
    const groupSelect = document.getElementById("group-select");
    groupSelect.innerHTML = '<option value="">Válassz csoportot...</option>' + 
        osszesCsoport.map(csoport => `<option value="${csoport}">${csoport}</option>`).join('');
}

function checkName() {
    const answer = document.getElementById("name-input").value.trim();
    const selectedGroup = document.getElementById("group-select").value;
    const correctGroup = molekulaAdatok[currentMolecule].csoport;
    
    let result = "";
    const nameCorrect = answer.toLowerCase() === currentMolecule.toLowerCase();
    const groupCorrect = selectedGroup === correctGroup;
    
    result += `Név: ${nameCorrect ? "✔️ Helyes" : `❌ Helytelen (helyes: ${currentMolecule})`}<br>`;
    result += `Csoport: ${groupCorrect ? "✔️ Helyes" : `❌ Helytelen (helyes: ${correctGroup})`}`;
    
    document.getElementById("name-output").innerHTML = result;
}
function retryRecognition() {
    document.getElementById("name-input").value = "";
    document.getElementById("group-select").value = "";
    document.getElementById("name-output").innerHTML = "";
}





function ujMikroJatek() {
    startMikroszkopikusJatek();
    document.getElementById("mikro-eredmeny").innerHTML = "";
}
// Makroszkópikus játék indítása
function startMakroszkopikusJatek() {
    document.getElementById("novenyfelismeresSubMenu").style.display = "none";
    document.getElementById("makroszkopikus-container").style.display = "block";
    ujNoveny();
}

// Új növény betöltése
function ujNoveny() {
    const novenyNevek = Object.keys(novenyAdatok);
    aktualisNoveny = novenyNevek[Math.floor(Math.random() * novenyNevek.length)];
    document.getElementById("noveny-kep").src = "MAKRO/" + novenyAdatok[aktualisNoveny].kep;
    document.getElementById("magyar-drog").value = "";
    document.getElementById("latin-drog").value = "";
    document.getElementById("latin-noveny").value = "";
    document.getElementById("csalad-noveny").value = "";
    document.getElementById("noveny-eredmeny").innerHTML = "";
}

// Ellenőrzés
function checkNoveny() {
    const elvart = novenyAdatok[aktualisNoveny];
    const valaszok = {
        magyar: document.getElementById("magyar-drog").value.trim(),
        latinDrog: document.getElementById("latin-drog").value.trim(),
        latin: document.getElementById("latin-noveny").value.trim(),
        csalad: document.getElementById("csalad-noveny").value.trim()
    };

    let eredmeny = "<strong>Eredmények:</strong><br>";
    
    function checkField(userAnswer, correctAnswer, fieldName) {
        const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
        return `${fieldName}: ${isCorrect ? "✔️" : `❌ (helyes: ${correctAnswer})`}<br>`;
    }

    eredmeny += checkField(valaszok.magyar, elvart.magyardrog, "Magyar név");
    eredmeny += checkField(valaszok.latinDrog, aktualisNoveny, "Drog latin neve");
    eredmeny += checkField(valaszok.latin, elvart.latin, "Latin név");
    eredmeny += checkField(valaszok.csalad, elvart.csalad, "Család");

    document.getElementById("noveny-eredmeny").innerHTML = eredmeny;
}
       
        

     
    	function goBack() {
    // Főmenü megjelenítése
    const mainMenu = document.getElementById("mainMenu");
    if (mainMenu) mainMenu.style.display = "block";
    
    // Almenük és játékok elrejtése
    const containersToHide = [
        "kepfelismeres-container",
        "makroszkopikus-container",
        "mikroszkopikus-container",
        "kepletekSubMenu",
        "novenyfelismeresSubMenu"
    ];
    
    containersToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.style.display = "none";
    });
    
    // Input mezők ürítése
    const inputsToClear = [
        "name-input",
        "name-output",
        "magyar-drog",
        "latin-drog",
        "latin-noveny",
        "csalad-noveny",
        "noveny-eredmeny",
        "mikro-eredmeny"
    ];
    
    inputsToClear.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.value = "";
        if (element && element.innerHTML) element.innerHTML = "";
    });
}
        
        

        function newMolecule() {
            const moleculeNames = Object.keys(molekulaAdatok);
            currentMolecule = moleculeNames[Math.floor(Math.random() * moleculeNames.length)];
            document.getElementById("molekula-name").innerText = currentMolecule;
        }

        function retry() {
            document.getElementById("smiles-input").value = "";
            document.getElementById("smiles-output").innerHTML = "";
        }
	
	    
