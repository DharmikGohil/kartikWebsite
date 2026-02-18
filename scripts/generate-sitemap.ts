// ─── Build-time Sitemap Generator ─────────────────────────────────
// Generates sitemap.xml from all programmatic route combinations.
// Scales to 100k+ URLs with sitemap index support.

import { writeFileSync } from "fs";
import { join } from "path";

const SITE_URL = "https://chemassureglobal.com";

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// ─── Minimal data mirrors (avoids TS import issues in build script) ──

const industries = [
  { slug: "textile-processing", subProcesses: ["Washing / Scouring / Pretreatment", "High-Temperature Dyeing (Jet / Winch)", "Finishing / Padding / Softening"] },
  { slug: "wastewater-treatment", subProcesses: ["Aeration Tank (ASP / MBBR / SBR)", "Clarifier / Secondary Settling", "Sludge Handling / Thickener"] },
  { slug: "paints-coatings", subProcesses: ["Raw Material Grinding / Dispersion", "Let-Down / Formulation Adjustment", "Filling / Packaging"] },
  { slug: "paper-pulp", subProcesses: ["Pulp Washing / Stock Preparation", "Paper Machine (Forming Section)"] },
  { slug: "cement-construction", subProcesses: ["Dry Mortar / Premix Systems", "Ready-Mix Concrete"] },
  { slug: "sugar-fermentation", subProcesses: ["Fermentation", "Evaporation / Distillation"] },
  { slug: "food-beverage", subProcesses: ["Fermentation (Food-Grade)", "CIP (Clean-in-Place) Systems", "Evaporation & Concentration"] },
  { slug: "pharma-biotech", subProcesses: ["Bioreactor Foam Control", "API Processing & Crystallization"] },
  { slug: "oil-gas", subProcesses: ["Separator Foam Control", "Distillation Unit Foam Control", "Drilling Mud Systems"] },
  { slug: "municipal-water-reuse", subProcesses: ["Aeration Tank (Reuse-Grade STP)", "Clarifier (Reuse Systems)"] },
];

const chemistryPlatforms = [
  { slug: "silicone-defoamer", industries: ["textile-processing", "paper-pulp", "wastewater-treatment", "cement-construction", "oil-gas", "paints-coatings"] },
  { slug: "silicone-free-defoamer", industries: ["paints-coatings", "textile-processing", "food-beverage", "pharma-biotech", "wastewater-treatment", "municipal-water-reuse"] },
  { slug: "polyether-defoamer", industries: ["wastewater-treatment", "sugar-fermentation", "food-beverage", "municipal-water-reuse", "textile-processing", "paints-coatings"] },
  { slug: "fatty-ester-defoamer", industries: ["sugar-fermentation", "wastewater-treatment", "food-beverage", "municipal-water-reuse", "pharma-biotech"] },
  { slug: "hybrid-defoamer", industries: ["textile-processing", "wastewater-treatment", "paints-coatings", "pharma-biotech", "food-beverage", "paper-pulp"] },
];

const foamProblems = [
  "foam-overflow", "surface-defects-from-foam", "biological-foam",
  "foam-in-fermentation", "pump-cavitation-from-foam",
  "foam-reducing-heat-transfer", "foam-in-concrete", "foam-in-oil-gas-separation",
  "foam-in-textile-dyeing", "foam-in-cip-cleaning", "foam-in-paper-machine",
  "foam-in-paint-grinding", "foam-in-sugar-evaporation", "foam-in-adhesive-manufacturing",
  "foam-in-membrane-bioreactor", "foam-in-drilling-fluids", "foam-in-effluent-treatment",
  "foam-in-ink-manufacturing", "foam-in-leather-processing", "foam-in-starch-processing",
  "foam-in-detergent-manufacturing", "foam-in-desalination",
];

// Indian states with cities and major industries
const states: { slug: string; cities: string[]; majorIndustries: string[] }[] = [
  { slug: "gujarat", cities: ["ahmedabad","surat","vadodara","rajkot","bharuch","ankleshwar","vapi","morbi","gandhidham","jamnagar","bhavnagar","junagadh","navsari","mehsana","dahej","mundra","hazira","sanand","kalol","porbandar","surendranagar","palanpur","gondal","jetpur","veraval","amreli","botad","nadiad","godhra","patan","deesa","modasa","dholka","viramgam","wankaner","halvad","dhoraji","upleta","mahuva","sidhpur","bharuch-gidc","vatva","naroda","odhav","sachin","pandesara","kim","kosamba","sarigam","umbergaon","silvassa","daman","nandesari","makarpura","savli","halol","unjha","kadi","visnagar","idar","himmatnagar","lunawada","dahod","chhota-udaipur","bardoli","vyara","songadh","mandvi","bhuj","anjar","adipur","kandla","rajpipla","narmada","tapi","devgadh-baria","dhandhuka","limbdi","wadhwan","dhrangadhra","thangadh","jasdan","upleta-gj","keshod","mangrol-gj","kodinar","una-gj","talaja","palitana","sihor","botad-gj","gadhada","dhari","amreli-gj","savarkundla","lathi","khambhat","petlad","borsad","anand","umreth","kapadvanj"], majorIndustries: ["textile-processing","wastewater-treatment","paints-coatings","pharma-biotech","oil-gas","cement-construction"] },
  { slug: "maharashtra", cities: ["mumbai","pune","nashik","nagpur","aurangabad","thane","navi-mumbai","kolhapur","solapur","ratnagiri","satara","sangli","ahmednagar","latur","jalgaon","amravati","chandrapur","raigad","palghar","tarapur","ichalkaranji","malegaon","dhule","nanded","parbhani","osmanabad","beed","wardha","yavatmal","akola","buldhana","washim","hingoli","gondia","bhandara","sindhudurg","baramati","shirdi","ambernath","bhiwandi","chakan","ranjangaon","hinjewadi","taloja","dombivli","kalyan","badlapur","panvel","mahad","roha","patalganga","kurkumbh","butibori","hingna","waluj","shendra","vita","karad","wai","phaltan","pandharpur","barshi","akluj","miraj","jaysingpur","kagal","gadhinglaj","sawantwadi","rajapur","chiplun","dapoli","pen","bhusawal","chopda","pachora","amalner","shirpur","shahada","nandurbar","sakri","manmad","yeola","niphad","sinnar","igatpuri","trimbakeshwar","dindori-mh","kalwan","surgana","peint","kopargaon","shrirampur","rahuri","parner","shrigonda","karjat-mh","jamkhed","pathardi","gevrai","majalgaon","kaij","parli"], majorIndustries: ["paints-coatings","pharma-biotech","textile-processing","food-beverage","wastewater-treatment","sugar-fermentation"] },
  { slug: "tamil-nadu", cities: ["chennai","coimbatore","tirupur","madurai","salem","erode","trichy","hosur","vellore","sivakasi","karur","dindigul","thoothukudi","ranipet","ambur","namakkal","cuddalore","sriperumbudur","thanjavur","nagercoil","kanchipuram","kumbakonam","rajapalayam","pudukkottai","vaniyambadi","pollachi","arakkonam","virudhunagar","tiruvallur","tiruvannamalai","ariyalur","perambalur","nagapattinam","mayiladuthurai","villupuram","dharmapuri","krishnagiri","theni","oragadam","maraimalai-nagar","gummidipoondi","ennore","manali-tn","ambattur","perungudi","tiruvottiyur","pallavaram","avadi","perundurai","palladam","avinashi","mettupalayam","chettinad","sivaganga","paramakudi","rameswaram","tuticorin","kovilpatti","sankarankovil","tenkasi","tirunelveli","palani","oddanchatram","attur","mettur","gobichettipalayam","bhavani","kangeyam","nagercoil-tn","marthandam","colachel","padmanabhapuram","vilavancode","radhapuram","srivaikuntam","tiruchendur","kayalpattinam","arumuganeri","ettayapuram","sattur","aruppukkottai","manamadurai","thirumangalam","usilampatti","periyakulam","cumbum","uthamapalayam","bodinayakanur","theni-tn","andipatti","kodaikanal","natham","nilakottai","vedasandur","pallapatti","kulithalai","manapparai","musiri"], majorIndustries: ["textile-processing","wastewater-treatment","paints-coatings","paper-pulp","pharma-biotech","cement-construction"] },
  { slug: "karnataka", cities: ["bangalore","mysore","mangalore","hubli-dharwad","belgaum","davangere","shimoga","tumkur","raichur","bellary","bidar","hassan","chitradurga","udupi","gulbarga","mandya","gadag","haveri","koppal","bagalkot","chikmagalur","kolar","chamarajanagar","kodagu","yadgir","dharwad","ranebennur","bhadravati","harihar","nanjangud","hospet","gangavathi","sindhanur","manvi","lingsugur","muddebihal","jamkhandi","mudhol","athani","gokak","saundatti","bailhongal","sirsi-ka","kumta","bhatkal","karwar","anekal","devanahalli","doddaballapur","hoskote","nelamangala","ramanagara","channapatna","maddur","malavalli","pandavapura","srirangapatna","kr-nagar","hunsur","periyapatna","sakleshpur","belur","arsikere","tiptur","kunigal","gubbi","sira","madhugiri","pavagada","challakere","holalkere","hosadurga","molakalmuru","harpanahalli","hagaribommanahalli","kudligi"], majorIndustries: ["pharma-biotech","paints-coatings","paper-pulp","food-beverage","textile-processing","wastewater-treatment"] },
  { slug: "rajasthan", cities: ["jaipur","jodhpur","udaipur","kota","bhiwadi","neemrana","pali","ajmer","bikaner","alwar","sikar","chittorgarh","kishangarh","bhilwara","tonk","bundi","sawai-madhopur","jhunjhunu","nagaur","barmer","jaisalmer","hanumangarh","sri-ganganagar","dungarpur","banswara","pratapgarh","rajsamand","dausa","karauli","dholpur","baran","jhalawar","sirohi","abu-road","beawar","makrana","didwana","ladnun","sujangarh","sardarshahar","churu","ratangarh","nokha","balotra","sojat","gangapur-city","hindaun","karauli-rj","bundi-rj","indergarh","lakheri","nimbahera","mandalgarh","shahpura-rj","gulabpura","mandal-rj","asind","banera","gangapur-rj","bassi","chaksu","phulera","sambhar","neem-ka-thana","khandela","danta-ramgarh","fatehpur-rj","lachhmangarh","nawalgarh","mandawa","pilani","chirawa","surajgarh","jhunjhunu-rj","udaipurwati"], majorIndustries: ["cement-construction","textile-processing","wastewater-treatment","paints-coatings","oil-gas"] },
  { slug: "uttar-pradesh", cities: ["noida","greater-noida","lucknow","kanpur","agra","varanasi","ghaziabad","meerut","moradabad","bareilly","aligarh","saharanpur","gorakhpur","firozabad","mathura","jhansi","allahabad","sultanpur","faizabad","rae-bareli","unnao","hardoi","sitapur","lakhimpur-kheri","shahjahanpur","pilibhit","rampur","bijnor","muzaffarnagar","bulandshahr","etawah","mainpuri","banda","hamirpur-up","mirzapur","sonbhadra","deoria","azamgarh","ballia","ghazipur","jaunpur","pratapgarh-up","fatehpur","kannauj","farrukhabad","etah","kasganj","hathras","sambhal","amroha","hapur","baghpat","shamli","orai","lalitpur-up","mahoba","chitrakoot","fatehpur-sikri","tundla","shikohabad","kasganj-up","atrauli","khurja","sikandrabad","dadri","jewar","pilkhuwa","muradnagar","loni","gajraula","hastinapur","deoband","nakur","gangoh","behat","roorkee-up","najibabad","nagina","dhampur","chandausi","bilari","sambhal-up","gunnaur"], majorIndustries: ["sugar-fermentation","wastewater-treatment","paper-pulp","textile-processing","food-beverage","cement-construction"] },
  { slug: "andhra-pradesh", cities: ["visakhapatnam","vijayawada","guntur","tirupati","kakinada","nellore","kurnool","rajahmundry","anantapur","ongole","eluru","nandyal","kadapa","srikakulam","vizianagaram","machilipatnam","tenali","proddatur","adoni","tadepalligudem","hindupur","chilakaluripet","kavali","narasaraopet","tadipatri","bhimavaram","amalapuram","palakollu","narasapuram","markapur","chirala","bapatla","mangalagiri","tadepalli","amaravati","dharmavaram","guntakal","madanapalle","chittoor","srikalahasti","gudur","parvathipuram","bobbili","rajam","palasa","tekkali","narasannapeta","amadalavalasa","ichchapuram","anakapalle","narsipatnam","yelamanchili","chodavaram","tuni","pithapuram","samalkot","mandapeta","ramachandrapuram","kovvur","nidadavole","tanuku","tadepalligudem-ap","jangareddygudem","nuzvid","machilipatnam-ap","gudivada","vuyyuru","repalle","tenali-ap","sattenapalle","vinukonda"], majorIndustries: ["pharma-biotech","cement-construction","food-beverage","wastewater-treatment","paper-pulp","sugar-fermentation"] },
  { slug: "telangana", cities: ["hyderabad","warangal","nizamabad","karimnagar","medak","sangareddy","nalgonda","mahbubnagar","adilabad","siddipet","khammam","ramagundam","mancherial","suryapet","miryalaguda","jagtial","bodhan","kamareddy","zaheerabad","vikarabad","wanaparthy","gadwal","jangaon","bhongir","narsampet","mahabubabad","kothagudem","bhadrachalam","sircilla","metpally","nirmal","bhainsa","tandur","shadnagar","kodad","huzurnagar","nakrekal","devarakonda","mancherial-tg","bellampalli","luxettipet","chennur","asifabad","utnoor","khanapur-tg","mudhole","bodhan-tg","armoor","banswada","yellareddy","kamareddy-tg","zaheerabad-tg","narayankhed","andole","medchal","shamirpet","ghatkesar","uppal","lb-nagar","hayathnagar","ibrahimpatnam-tg","maheshwaram","farooqnagar","jadcherla","kalwakurthy","achampet","nagarkurnool","kollapur"], majorIndustries: ["pharma-biotech","paints-coatings","food-beverage","wastewater-treatment","textile-processing"] },
  { slug: "west-bengal", cities: ["kolkata","howrah","durgapur","asansol","siliguri","haldia","kharagpur","bardhaman","kalyani","barasat","krishnanagar","medinipur","berhampore","raiganj","balurghat","bankura","purulia","jalpaiguri","cooch-behar","alipurduar","malda","tamluk","contai","diamond-harbour","nabadwip","shantipur","ranaghat","chakdaha","habra","basirhat","bongaon","barrackpore","titagarh","naihati","rishra","serampore","chandannagar","uttarpara","hooghly","chinsurah","bolpur","suri","rampurhat","sainthia","nalhati","dubrajpur","katwa","kalna","memari","dainhat","tarakeswar","arambagh","pursurah","khanakul","goghat","bishnupur-wb","sonamukhi","onda","khatra","raghunathpur","jhalda","manbazar","barabazar","para","jhargram","garbeta","ghatal","daspur","panskura","egra"], majorIndustries: ["textile-processing","paper-pulp","food-beverage","wastewater-treatment","paints-coatings","oil-gas"] },
  { slug: "madhya-pradesh", cities: ["indore","bhopal","jabalpur","gwalior","pithampur","dewas","ujjain","ratlam","satna","rewa","sagar","katni","chhindwara","khandwa","burhanpur","morena","bhind","shivpuri","vidisha","damoh","mandsaur","neemuch","shajapur","hoshangabad","betul","seoni","mandla","itarsi","pipariya","gadarwara","narsinghpur","tendukheda","damoh-mp","panna","chhatarpur","tikamgarh","datia","shivpuri-mp","guna","ashok-nagar","vidisha-mp","raisen","sehore","harda","khandwa-mp","khargone","barwani","dhar","jhabua","alirajpur","mhow","mandsaur-mp","neemuch-mp","shajapur-mp","rajgarh-mp","agar-malwa","susner"], majorIndustries: ["cement-construction","food-beverage","pharma-biotech","textile-processing","wastewater-treatment","sugar-fermentation"] },
  { slug: "punjab", cities: ["ludhiana","amritsar","jalandhar","patiala","bathinda","mohali","mandi-gobindgarh","rajpura","phagwara","dera-bassi","hoshiarpur","pathankot","moga","abohar","malerkotla","khanna","barnala","sangrur","kapurthala","faridkot","muktsar","nawanshahr","rupnagar","gurdaspur","batala","tarn-taran","beas","nakodar","phillaur","nawanshahr-pb","banga","garhshankar","dasuya","mukerian","anandpur-sahib","nangal","morinda","kharar","zirakpur","samana","nabha","sunam","dhuri","lehragaga","moonak","rampura-phul","talwandi-sabo","goniana","jaitu","kotkapura","zira","fazilka","jalalabad-pb"], majorIndustries: ["textile-processing","paper-pulp","food-beverage","pharma-biotech","wastewater-treatment"] },
  { slug: "haryana", cities: ["gurugram","faridabad","panipat","sonipat","karnal","hisar","rohtak","manesar","bahadurgarh","ambala","yamunanagar","rewari","bhiwani","jind","kaithal","kurukshetra","sirsa","fatehabad","palwal","narnaul","panchkula","charkhi-dadri","hansi","tohana","pehowa","shahabad-hr","ladwa","nilokheri","assandh","safidon","julana","narwana","uchana","barwala-hr","hansi-hr","adampur","uklana","ratia","ellenabad","dabwali","kalanwali","tohana-hr","jakhal","naraingarh","sadhaura","bilaspur-hr","kalka","pinjore","barara","radaur","chhachhrauli","jagadhri","mustafabad","hodal"], majorIndustries: ["textile-processing","food-beverage","paints-coatings","wastewater-treatment","pharma-biotech","cement-construction"] },
  { slug: "kerala", cities: ["kochi","thiruvananthapuram","kozhikode","thrissur","kollam","palakkad","kannur","alappuzha","malappuram","kottayam","ernakulam","pathanamthitta","idukki","wayanad","kasaragod","perinthalmanna","thodupuzha","changanassery","kayamkulam","attingal","neyyattinkara","nedumangad","varkala","karunagappally","punalur","kottarakkara","adoor","thiruvalla","chengannur","mavelikara","haripad","cherthala","north-paravur","aluva","angamaly","perumbavoor","muvattupuzha","kothamangalam","thodupuzha-kl","pala-kl","ettumanoor","vaikom","changanassery-kl","kanjirappally","mundakayam","irinjalakuda","chalakudy","kodungallur","guruvayur"], majorIndustries: ["food-beverage","paper-pulp","wastewater-treatment","pharma-biotech","textile-processing"] },
  { slug: "odisha", cities: ["bhubaneswar","cuttack","rourkela","paradip","sambalpur","jharsuguda","berhampur","angul","balasore","puri","koraput","jeypore","rayagada","kendrapara","jajpur","dhenkanal","bargarh","sundargarh","kalahandi","puri-od","konark","pipili","nayagarh","phulbani","baliguda","boudh","sonepur-od","bargarh-od","padampur","bolangir","titilagarh","bhawanipatna","junagarh-od","rayagada-od","koraput-od","jeypore-od","malkangiri","nabarangpur","nuapada","sundargarh-od","rajgangpur","birmitrapur","barbil","keonjhar","anandapur","dhenkanal-od","kamakhyanagar","talcher","athagarh"], majorIndustries: ["cement-construction","paper-pulp","wastewater-treatment","oil-gas","food-beverage"] },
  { slug: "chhattisgarh", cities: ["raipur","bhilai","korba","bilaspur","durg","rajnandgaon","raigarh","jagdalpur","kondagaon","kanker","dhamtari","gariaband","mahasamund","sarangarh","janjgir","champa","sakti","katghora","pendra","ambikapur","surajpur-cg","manendragarh","baikunthpur","mungeli","lormi","takhatpur","kawardha","dongargarh","khairagarh","bemetara","balod","dalli-rajhara","naila-janjgir","akaltara","ratanpur-cg","kota-cg","dharamjaigarh"], majorIndustries: ["cement-construction","wastewater-treatment","paper-pulp","food-beverage"] },
  { slug: "jharkhand", cities: ["ranchi","jamshedpur","dhanbad","bokaro","hazaribagh","deoghar","giridih","dumka","godda","sahebganj","pakur","rajmahal","jamtara","madhupur","giridih-jh","koderma","chatra","latehar","daltonganj","garhwa","lohardaga","gumla","simdega","khunti","chaibasa","chakradharpur","seraikela","adityapur","gamharia","chandil","saraikela-jh","ramgarh-jh","patratu","barkakana","phusro","tenu-dam","gomoh"], majorIndustries: ["cement-construction","wastewater-treatment","paper-pulp","food-beverage","oil-gas"] },
  { slug: "goa", cities: ["panaji","vasco-da-gama","margao","ponda","mapusa","verna","pilerne","cuncolim","curchorem","sanquelim","bicholim","pernem","canacona","quepem","sanguem"], majorIndustries: ["pharma-biotech","food-beverage","wastewater-treatment","paints-coatings"] },
  { slug: "uttarakhand", cities: ["dehradun","haridwar","rudrapur","pantnagar","kashipur","roorkee","haldwani","selaqui","rishikesh","kotdwar","lansdowne","pauri","srinagar-uk","chamoli","joshimath","gopeshwar","almora","ranikhet","nainital","bhimtal","ramnagar-uk","bazpur","jaspur","kichha","sitarganj","khatima","tanakpur","champawat","pithoragarh","bageshwar","vikasnagar","doiwala","herbertpur","clement-town","laksar","manglaur","jwalapur","bhagwanpur-uk"], majorIndustries: ["pharma-biotech","food-beverage","paper-pulp","wastewater-treatment"] },
  { slug: "himachal-pradesh", cities: ["baddi","solan","shimla","parwanoo","nalagarh","paonta-sahib","kala-amb","mandi-hp","sundernagar","bilaspur-hp","hamirpur-hp","una-hp","kangra","dharamshala","palampur","kullu","manali","rampur-hp","nahan","chamba","dalhousie","nurpur","jawali","dehra-hp","amb","gagret","mehatpur","tahliwal","haroli","daulatpur-hp","nadaun","sujanpur","barsar","ghumarwin","arki","kasauli","kandaghat"], majorIndustries: ["pharma-biotech","food-beverage","cement-construction","wastewater-treatment"] },
  { slug: "assam", cities: ["guwahati","dibrugarh","jorhat","silchar","tezpur","nagaon","tinsukia","bongaigaon","nalbari","barpeta","barpeta-road","pathsala","mangaldoi","udalguri","kokrajhar","dhubri","goalpara","north-lakhimpur","dhemaji","sivasagar","golaghat","bokakhat","morigaon","hojai","lanka","lumding","diphu","haflong","karimganj","hailakandi","rangia","mirza","chaygaon","palasbari","sualkuchi","sarthebari","tamulpur","mushalpur"], majorIndustries: ["food-beverage","oil-gas","paper-pulp","wastewater-treatment"] },
  { slug: "bihar", cities: ["patna","hajipur","muzaffarpur","bhagalpur","gaya","darbhanga","begusarai","purnia","samastipur","chhapra","sasaram","arrah","buxar","katihar","siwan","motihari","bettiah","madhubani","sitamarhi","nawada","arrah-br","buxar-br","chapra-br","siwan-br","gopalganj","motihari-br","bettiah-br","raxaul","sitamarhi-br","madhubani-br","jhanjharpur","benipatti","samastipur-br","dalsinghsarai","rosera","barauni","mokama","barh","bakhtiarpur","fatuha","danapur","biharsharif","rajgir","nawada-br","warisaliganj","sheikhpura","lakhisarai","munger","jamui","banka"], majorIndustries: ["sugar-fermentation","food-beverage","wastewater-treatment","cement-construction"] },
  { slug: "jammu-kashmir", cities: ["jammu","srinagar","kathua","udhampur"], majorIndustries: ["food-beverage","pharma-biotech","wastewater-treatment"] },
  { slug: "tripura", cities: ["agartala","udaipur-tripura","dharmanagar"], majorIndustries: ["food-beverage","wastewater-treatment"] },
  { slug: "meghalaya", cities: ["shillong","byrnihat","tura"], majorIndustries: ["cement-construction","food-beverage","wastewater-treatment"] },
  { slug: "manipur", cities: ["imphal"], majorIndustries: ["food-beverage","textile-processing","wastewater-treatment"] },
  { slug: "nagaland", cities: ["dimapur","kohima"], majorIndustries: ["food-beverage","wastewater-treatment"] },
  { slug: "sikkim", cities: ["gangtok","rangpo","singtam"], majorIndustries: ["pharma-biotech","food-beverage","wastewater-treatment"] },
  { slug: "arunachal-pradesh", cities: ["itanagar","naharlagun"], majorIndustries: ["food-beverage","wastewater-treatment"] },
  { slug: "mizoram", cities: ["aizawl"], majorIndustries: ["food-beverage","wastewater-treatment"] },
];

// International countries with cities and major industries
const countries: { slug: string; cities: string[]; majorIndustries: string[] }[] = [
  { slug: "united-states", cities: ["houston","chicago","los-angeles","philadelphia","detroit","atlanta","dallas","new-jersey","charlotte","pittsburgh","cleveland","st-louis","milwaukee","cincinnati","memphis","baton-rouge","san-francisco","seattle","denver","phoenix","san-antonio","indianapolis","columbus","jacksonville","nashville","oklahoma-city","portland","las-vegas","louisville","baltimore","salt-lake-city","kansas-city","tampa","tulsa","raleigh","omaha","corpus-christi","beaumont","lake-charles","midland","minneapolis","new-orleans","wichita","bakersfield","aurora","anaheim","honolulu","santa-ana","riverside","stockton","lexington","anchorage","fresno","tucson","mesa","sacramento","long-beach","virginia-beach","colorado-springs","el-paso","albuquerque","boise","richmond","des-moines","spokane","freeport","baytown","texas-city","port-arthur","pasadena-tx","san-jose","austin","fort-worth","san-diego","reno","savannah","charleston","chattanooga","knoxville","mobile","huntsville","little-rock","shreveport","lubbock","amarillo","laredo","mcallen","brownsville","odessa-tx","abilene","tyler","longview-tx","beaumont-tx","galveston","bryan","waco","temple-tx","killeen","round-rock","georgetown-tx"], majorIndustries: ["paints-coatings","pharma-biotech","oil-gas","food-beverage","wastewater-treatment","paper-pulp","cement-construction"] },
  { slug: "china", cities: ["shanghai","guangzhou","shenzhen","beijing","tianjin","hangzhou","suzhou","dongguan","foshan","wuhan","chengdu","nanjing","qingdao","dalian","ningbo","xiamen","zhengzhou","changsha","jinan","shenyang","harbin","changchun","kunming","nanning","fuzhou","shijiazhuang","taiyuan","hefei","nanchang","guiyang","lanzhou","urumqi","wenzhou","zhuhai","yantai","weifang","zibo","xuzhou","wuxi","changzhou","tangshan","baoding","handan","linyi","jining","luoyang","nantong","yancheng","huizhou","zhongshan","jiangmen","shaoxing","jinhua","taizhou-zj","quanzhou","putian","zhangzhou","liuzhou","guilin","zhanjiang","maoming","yichang","xiangyang","zhuzhou","yueyang","hengyang","ganzhou","jiujiang","zunyi","mianyang","yueyang-cn","deyang","leshan","neijiang","zigong","yibin","luzhou","panzhihua","lijiang","dali","qujing","yuxi","baoshan-cn","lincang","puer","xishuangbanna","liuzhou-cn","guilin-cn","beihai","yulin-cn","wuzhou","hezhou","guigang","laibin"], majorIndustries: ["textile-processing","paints-coatings","pharma-biotech","cement-construction","paper-pulp","wastewater-treatment","food-beverage"] },
  { slug: "germany", cities: ["frankfurt","munich","hamburg","cologne","stuttgart","dusseldorf","ludwigshafen","leverkusen","dortmund","essen","bremen","mannheim","hanover","nuremberg","dresden","leipzig","duisburg","bochum","wuppertal","bielefeld","bonn","karlsruhe","augsburg","aachen","freiburg","halle","magdeburg","mainz","rostock","kassel","oberhausen","lubeck","erfurt","hagen","saarbrucken","wolfsburg","gelsenkirchen","monchengladbach","braunschweig","chemnitz","kiel","krefeld","heidelberg","ulm","pforzheim","reutlingen","heilbronn","ingolstadt","regensburg","wurzburg","furth","erlangen","bamberg","bayreuth","schweinfurt","passau","landshut","rosenheim","kempten","memmingen"], majorIndustries: ["paints-coatings","pharma-biotech","wastewater-treatment","paper-pulp","food-beverage","cement-construction"] },
  { slug: "japan", cities: ["tokyo","osaka","nagoya","yokohama","kobe","fukuoka","kawasaki","chiba","kitakyushu","hiroshima","sapporo","sendai","niigata","hamamatsu","sakai","shizuoka","okayama","kumamoto","kagoshima","oita","kanazawa","toyama","nagano","matsumoto","utsunomiya","mito","maebashi","takasaki","kofu","gifu","tsu","otsu","nara","wakayama","tokushima","takamatsu","matsuyama","kochi-jp","saga","nagasaki","miyazaki","akita","yamagata","morioka","aomori","hakodate","asahikawa","obihiro","kushiro","tomakomai"], majorIndustries: ["paints-coatings","pharma-biotech","paper-pulp","food-beverage","wastewater-treatment","cement-construction"] },
  { slug: "south-korea", cities: ["seoul","busan","incheon","ulsan","daegu","gwangju","daejeon","yeosu","changwon","suwon","goyang","seongnam","cheongju","jeonju","cheonan","gimhae","pohang","gimhae-sk","jinju","yangsan","geoje","tongyeong","sacheon","miryang","gumi","gyeongsan","yeongcheon","andong","gimcheon","sangju","mungyeong","yeongju","chungju","jecheon","asan","seosan","dangjin","nonsan","gunsan","iksan","namwon","gimje","jeongeup","mokpo","suncheon","naju"], majorIndustries: ["paints-coatings","pharma-biotech","wastewater-treatment","oil-gas","cement-construction","textile-processing"] },
  { slug: "brazil", cities: ["sao-paulo","rio-de-janeiro","belo-horizonte","curitiba","porto-alegre","campinas","salvador","recife","manaus","ribeirao-preto","fortaleza","brasilia","goiania","belem","guarulhos","sao-bernardo","santo-andre","osasco","sorocaba","joinville","uberlandia","piracicaba","vitoria","londrina","maringa","blumenau","caxias-do-sul","pelotas","juiz-de-fora","contagem","betim","sao-jose-dos-campos","santos","jundiai","bauru","franca","limeira","americana","paulinia","maua","goiania-br","anapolis","aparecida-de-goiania","rio-verde","itumbiara","catalao","uberaba","patos-de-minas","divinopolis","sete-lagoas","montes-claros","governador-valadares","ipatinga","coronel-fabriciano","pocos-de-caldas","varginha","lavras","barbacena","muriae","cataguases","volta-redonda","barra-mansa","resende","petropolis","nova-friburgo","macae","campos-dos-goytacazes","cabo-frio","niteroi","duque-de-caxias"], majorIndustries: ["sugar-fermentation","paper-pulp","oil-gas","food-beverage","wastewater-treatment","paints-coatings","cement-construction"] },
  { slug: "mexico", cities: ["mexico-city","monterrey","guadalajara","puebla","queretaro","tijuana","leon","saltillo","san-luis-potosi","aguascalientes","merida","chihuahua","toluca","hermosillo","celaya","irapuato","tampico","veracruz","villahermosa","coatzacoalcos","durango","morelia","tuxtla-gutierrez","oaxaca","reynosa","matamoros","nuevo-laredo","ciudad-juarez","mazatlan","culiacan","torreon","monclova","cancun","playa-del-carmen","campeche","chetumal","tuxtepec","salina-cruz","tehuacan","tlaxcala","pachuca","tula-mx","cuernavaca","cuautla","uruapan","lazaro-cardenas","zamora","la-piedad","salamanca-mx","guanajuato","san-miguel-de-allende","dolores-hidalgo","san-juan-del-rio","tequisquiapan","fresnillo","zacatecas","san-luis-potosi-mx","matehuala","rioverde","ciudad-valles","tampico-mx","ciudad-victoria"], majorIndustries: ["food-beverage","cement-construction","oil-gas","paints-coatings","wastewater-treatment","pharma-biotech"] },
  { slug: "united-kingdom", cities: ["london","manchester","birmingham","leeds","glasgow","liverpool","sheffield","bristol","edinburgh","newcastle","nottingham","leicester","coventry","bradford","belfast","cardiff","stoke-on-trent","wolverhampton","plymouth","southampton","sunderland","middlesbrough","stockton-on-tees","darlington","hartlepool","york","hull","grimsby","scunthorpe","doncaster","rotherham","barnsley","wakefield","huddersfield","halifax-uk","dewsbury","oldham","bolton","wigan","warrington","chester","crewe","stafford","burton-upon-trent","derby","mansfield","chesterfield","lincoln","peterborough","cambridge"], majorIndustries: ["pharma-biotech","paints-coatings","food-beverage","wastewater-treatment","paper-pulp","oil-gas"] },
  { slug: "france", cities: ["paris","lyon","marseille","toulouse","lille","strasbourg","bordeaux","nantes","nice","montpellier","rennes","reims","le-havre","saint-etienne","toulon","grenoble","dijon","angers","rouen","clermont-ferrand","tours","orleans","limoges","amiens","metz","nancy","mulhouse","besancon","caen","brest","perpignan","nimes","avignon","aix-en-provence","pau","bayonne","la-rochelle","poitiers","dunkirk","calais","valenciennes","douai","lens","bethune","arras","saint-quentin","compiegne","beauvais"], majorIndustries: ["pharma-biotech","food-beverage","paints-coatings","wastewater-treatment","cement-construction","paper-pulp"] },
  { slug: "italy", cities: ["milan","turin","rome","bologna","florence","naples","genoa","venice","verona","padua","trieste","brescia","parma","modena","reggio-emilia","perugia","livorno","cagliari","bari","catania","bergamo","monza","como","varese","lecco","cremona","mantua","piacenza","ravenna","rimini","ferrara","cesena","forli","ancona","pesaro","terni","pescara","laquila","salerno","caserta","foggia","lecce","taranto","brindisi","cosenza","reggio-calabria","messina","palermo","siracusa","sassari"], majorIndustries: ["textile-processing","food-beverage","pharma-biotech","paints-coatings","cement-construction","wastewater-treatment"] },
  { slug: "turkey", cities: ["istanbul","ankara","izmir","bursa","gaziantep","kayseri","adana","konya","denizli","mersin","antalya","eskisehir","trabzon","samsun","malatya","diyarbakir","manisa","balikesir","sakarya","kahramanmaras","hatay","sanliurfa","tekirdag","ordu","afyon","usak","aksaray","karaman","bolu","duzce","kirikkale","corum","trabzon-tr","samsun-tr","ordu-tr","giresun","rize","artvin","erzurum","erzincan","sivas","tokat","amasya","corum-tr","kastamonu","sinop","zonguldak","karabuk","bartin","bolu-tr","duzce-tr","sakarya-tr","kocaeli","yalova","bilecik","kutahya","afyon-tr","isparta","burdur","mugla","aydin","manisa-tr"], majorIndustries: ["textile-processing","cement-construction","food-beverage","paints-coatings","wastewater-treatment","pharma-biotech"] },
  { slug: "saudi-arabia", cities: ["riyadh","jeddah","dammam","jubail","yanbu","mecca","medina","khobar","tabuk","hail","najran","jazan","al-kharj","qatif","ras-tanura","rabigh"], majorIndustries: ["oil-gas","cement-construction","wastewater-treatment","food-beverage","paints-coatings"] },
  { slug: "uae", cities: ["dubai","abu-dhabi","sharjah","ras-al-khaimah","fujairah","ajman"], majorIndustries: ["oil-gas","cement-construction","wastewater-treatment","food-beverage","paints-coatings"] },
  { slug: "indonesia", cities: ["jakarta","surabaya","bandung","semarang","medan","tangerang","bekasi","cikarang","karawang","makassar","palembang","balikpapan","batam","pekanbaru","denpasar","manado","padang","banjarmasin","pontianak","samarinda","cirebon","purwakarta","yogyakarta","solo","malang","sidoarjo","gresik","pasuruan","mojokerto","kediri","madiun","jember","tegal","pekalongan","sukabumi","tasikmalaya","garut","serang","cilegon","bogor","depok","bogor-id","sukabumi-id","tasikmalaya-id","garut-id","cirebon-id","tegal-id","pekalongan-id","purwokerto","cilacap","kebumen","purworejo","magelang","salatiga","kudus","jepara","demak","kendal","pati","rembang","tuban","lamongan","bojonegoro","ngawi","ponorogo","tulungagung","blitar","probolinggo","situbondo","banyuwangi"], majorIndustries: ["textile-processing","paper-pulp","cement-construction","food-beverage","oil-gas","wastewater-treatment"] },
  { slug: "thailand", cities: ["bangkok","chonburi","rayong","samut-prakan","chiang-mai","nakhon-ratchasima","khon-kaen","hat-yai","phuket","udon-thani","nonthaburi","pathum-thani","surat-thani","chiang-rai","lampang","songkhla","pattaya","ayutthaya","nakhon-pathom","kanchanaburi","ratchaburi","samut-sakhon","nakhon-sawan","phitsanulok","sukhothai","tak","chiang-rai-th","lampang-th","lamphun","nan","phrae","uttaradit","nong-khai","loei","sakon-nakhon","nakhon-phanom","mukdahan","ubon-ratchathani","sisaket","surin","buriram","chaiyaphum","roi-et","maha-sarakham","kalasin","yasothon"], majorIndustries: ["food-beverage","textile-processing","wastewater-treatment","paints-coatings","sugar-fermentation","cement-construction"] },
  { slug: "vietnam", cities: ["ho-chi-minh-city","hanoi","da-nang","hai-phong","binh-duong","dong-nai","can-tho","bac-ninh","nha-trang","hue","vinh","thai-nguyen","nam-dinh","quy-nhon","long-an","tay-ninh","thai-nguyen-vn","vinh-vn","thanh-hoa","nam-dinh-vn","ninh-binh","ha-long","viet-tri","lao-cai","yen-bai","son-la","hoa-binh","ha-tinh","dong-hoi","dong-ha","tam-ky","quang-ngai","quy-nhon-vn","tuy-hoa","nha-trang-vn","phan-rang","phan-thiet","vung-tau","bien-hoa","thu-dau-mot","tan-an","my-tho","ben-tre","vinh-long","tra-vinh","soc-trang"], majorIndustries: ["textile-processing","food-beverage","wastewater-treatment","paper-pulp","cement-construction","pharma-biotech"] },
  { slug: "malaysia", cities: ["kuala-lumpur","penang","johor-bahru","shah-alam","ipoh","kuantan","kota-kinabalu","melaka","seremban","kuching","alor-setar","miri","sandakan","bintulu","sibu","tawau","seremban-my","kuching-my","miri-my","sibu-my","sandakan-my","tawau-my","bintulu-my","alor-setar-my","sungai-petani","kulim","butterworth","bukit-mertajam","taiping","teluk-intan","sitiawan","lumut","slim-river","rawang","klang","petaling-jaya","subang-jaya","kajang","selayang","ampang","cheras","batu-caves","nilai","port-dickson","segamat","kluang"], majorIndustries: ["oil-gas","food-beverage","wastewater-treatment","paints-coatings","pharma-biotech","paper-pulp"] },
  { slug: "philippines", cities: ["manila","cebu","davao","laguna","cavite","batangas"], majorIndustries: ["food-beverage","cement-construction","pharma-biotech","wastewater-treatment","textile-processing"] },
  { slug: "bangladesh", cities: ["dhaka","chittagong","gazipur","narayanganj","tongi","comilla","rajshahi","khulna","sylhet","rangpur","bogra","mymensingh","jessore","dinajpur","barisal","tangail","sylhet-bd","rangpur-bd","bogra-bd","mymensingh-bd","jessore-bd","dinajpur-bd","barisal-bd","tangail-bd","savar","narsingdi","manikganj","munshiganj","faridpur","madaripur","gopalganj-bd","shariatpur","chandpur","lakshmipur","noakhali","feni","coxs-bazar","bandarban","rangamati","khagrachhari","brahmanbaria","habiganj","moulvibazar","sunamganj","netrokona","kishoreganj"], majorIndustries: ["textile-processing","pharma-biotech","food-beverage","wastewater-treatment","cement-construction","paper-pulp"] },
  { slug: "pakistan", cities: ["karachi","lahore","faisalabad","islamabad","sialkot","multan","rawalpindi","gujranwala","peshawar","hyderabad-pk","quetta","bahawalpur","sargodha","sukkur","larkana","sheikhupura","peshawar-pk","hyderabad-pk-2","quetta-pk","bahawalpur-pk","sargodha-pk","sukkur-pk","larkana-pk","sheikhupura-pk","rahim-yar-khan","jhang","dera-ghazi-khan","gujrat-pk","sahiwal","wah-cantt","mardan","kasur","okara","mingora","chiniot","kamoke","hafizabad","mandi-bahauddin","jhelum","chakwal","attock","taxila","abbottabad","mansehra","haripur-pk","nowshera"], majorIndustries: ["textile-processing","cement-construction","pharma-biotech","food-beverage","sugar-fermentation","wastewater-treatment"] },
  { slug: "sri-lanka", cities: ["colombo","kandy","galle","negombo"], majorIndustries: ["textile-processing","food-beverage","wastewater-treatment","pharma-biotech"] },
  { slug: "nepal", cities: ["kathmandu","biratnagar","birgunj","pokhara"], majorIndustries: ["cement-construction","food-beverage","textile-processing","wastewater-treatment"] },
  { slug: "egypt", cities: ["cairo","alexandria","giza","port-said","suez","aswan","mansoura","tanta","luxor","ismailia","faiyum","zagazig","damietta","minya","beni-suef","sohag","luxor-eg","ismailia-eg","faiyum-eg","zagazig-eg","damietta-eg","minya-eg","beni-suef-eg","sohag-eg","asyut","qena","hurghada","sharm-el-sheikh","6th-october-city","10th-of-ramadan","sadat-city","obour-city","badr-city","new-cairo","helwan","shoubra-el-kheima","kafr-el-sheikh","mahalla-el-kubra","shibin-el-kom","benha","qalyub","banha","damanhur","kafr-el-dawwar","rosetta","marsa-matruh"], majorIndustries: ["textile-processing","cement-construction","food-beverage","oil-gas","wastewater-treatment","pharma-biotech"] },
  { slug: "south-africa", cities: ["johannesburg","cape-town","durban","pretoria","port-elizabeth","richards-bay","bloemfontein","east-london","pietermaritzburg","nelspruit","polokwane","rustenburg","witbank","vereeniging","bloemfontein-sa","east-london-sa","pietermaritzburg-sa","nelspruit-sa","polokwane-sa","rustenburg-sa","witbank-sa","vereeniging-sa","middelburg-sa","secunda","sasolburg","vanderbijlpark","potchefstroom","klerksdorp","mahikeng","kimberley","upington","george","mossel-bay","knysna","oudtshoorn","worcester-sa","paarl","stellenbosch","somerset-west","bellville","pinetown","umhlanga","ballito","empangeni"], majorIndustries: ["oil-gas","cement-construction","food-beverage","wastewater-treatment","paints-coatings","paper-pulp"] },
  { slug: "nigeria", cities: ["lagos","abuja","port-harcourt","kano","ibadan","ogun","kaduna","benin-city","warri","aba","nnewi","enugu","jos","ilorin","kaduna-ng","benin-city-ng","warri-ng","aba-ng","nnewi-ng","enugu-ng","jos-ng","ilorin-ng","abeokuta","oshogbo","akure","ado-ekiti","lokoja","minna","lafia","makurdi","calabar","uyo","owerri","umuahia","asaba","awka","onitsha","zaria","sokoto","katsina","bauchi","gombe","maiduguri","yola"], majorIndustries: ["oil-gas","cement-construction","food-beverage","wastewater-treatment","paints-coatings"] },
  { slug: "kenya", cities: ["nairobi","mombasa","kisumu","nakuru","thika","eldoret"], majorIndustries: ["food-beverage","cement-construction","textile-processing","wastewater-treatment","pharma-biotech"] },
  { slug: "australia", cities: ["sydney","melbourne","brisbane","perth","adelaide","newcastle-au","geelong","gladstone","gold-coast","canberra","hobart","darwin","townsville","cairns","wollongong","launceston","gold-coast-au","canberra-au","hobart-au","darwin-au","townsville-au","cairns-au","wollongong-au","launceston-au","toowoomba","ballarat","bendigo","mackay","rockhampton","bundaberg","hervey-bay","sunshine-coast","ipswich-au","logan","redland","caboolture","caloundra","noosa","maryborough-au","gympie","warwick-au","dalby","emerald-au","mount-isa","kalgoorlie","bunbury"], majorIndustries: ["wastewater-treatment","food-beverage","oil-gas","paints-coatings","pharma-biotech","cement-construction"] },
  { slug: "canada", cities: ["toronto","montreal","vancouver","calgary","edmonton","ottawa","hamilton","sarnia","winnipeg","quebec-city","saskatoon","regina","st-johns","halifax","sudbury","thunder-bay","winnipeg-ca","quebec-city-ca","saskatoon-ca","regina-ca","st-johns-ca","halifax-ca","sudbury-ca","thunder-bay-ca","kitchener","london-ca","windsor-ca","barrie","oshawa","st-catharines","kingston-ca","peterborough-ca","guelph","cambridge-ca","brantford","chatham-kent","sault-ste-marie","north-bay","timmins","sherbrooke","trois-rivieres","chicoutimi","rimouski","drummondville","granby","saint-hyacinthe"], majorIndustries: ["oil-gas","paper-pulp","food-beverage","wastewater-treatment","cement-construction","pharma-biotech"] },
  { slug: "russia", cities: ["moscow","saint-petersburg","novosibirsk","yekaterinburg","kazan","nizhny-novgorod","samara","omsk","chelyabinsk","rostov-on-don","ufa","volgograd","perm","krasnoyarsk","voronezh","saratov"], majorIndustries: ["oil-gas","paper-pulp","cement-construction","wastewater-treatment","food-beverage","paints-coatings"] },
  { slug: "poland", cities: ["warsaw","krakow","wroclaw","gdansk","poznan","lodz","katowice","szczecin"], majorIndustries: ["food-beverage","pharma-biotech","cement-construction","paints-coatings","wastewater-treatment","paper-pulp"] },
  { slug: "spain", cities: ["barcelona","madrid","valencia","bilbao","seville","zaragoza"], majorIndustries: ["food-beverage","pharma-biotech","cement-construction","paints-coatings","wastewater-treatment","textile-processing"] },
  { slug: "netherlands", cities: ["rotterdam","amsterdam","eindhoven","the-hague","utrecht","groningen"], majorIndustries: ["paints-coatings","food-beverage","pharma-biotech","oil-gas","wastewater-treatment","paper-pulp"] },
  { slug: "belgium", cities: ["antwerp","brussels","ghent","liege"], majorIndustries: ["pharma-biotech","paints-coatings","food-beverage","wastewater-treatment","oil-gas"] },
  { slug: "switzerland", cities: ["basel","zurich","geneva","bern"], majorIndustries: ["pharma-biotech","food-beverage","paints-coatings","wastewater-treatment"] },
  { slug: "sweden", cities: ["stockholm","gothenburg","malmo","uppsala"], majorIndustries: ["paper-pulp","pharma-biotech","wastewater-treatment","food-beverage","paints-coatings"] },
  { slug: "finland", cities: ["helsinki","tampere","oulu","turku"], majorIndustries: ["paper-pulp","food-beverage","wastewater-treatment","pharma-biotech"] },
  { slug: "iran", cities: ["tehran","isfahan","tabriz","shiraz","mashhad","ahvaz","bandar-abbas","arak","kerman","qom","rasht","zahedan","hamadan","yazd","ardabil","sanandaj"], majorIndustries: ["oil-gas","cement-construction","textile-processing","food-beverage","wastewater-treatment","pharma-biotech"] },
  { slug: "iraq", cities: ["baghdad","basra","erbil","sulaymaniyah"], majorIndustries: ["oil-gas","cement-construction","wastewater-treatment","food-beverage"] },
  { slug: "qatar", cities: ["doha","al-wakrah","mesaieed","ras-laffan"], majorIndustries: ["oil-gas","cement-construction","wastewater-treatment","food-beverage"] },
  { slug: "kuwait", cities: ["kuwait-city","ahmadi","shuaiba"], majorIndustries: ["oil-gas","cement-construction","wastewater-treatment"] },
  { slug: "oman", cities: ["muscat","sohar","salalah","sur"], majorIndustries: ["oil-gas","cement-construction","wastewater-treatment","food-beverage"] },
  { slug: "argentina", cities: ["buenos-aires","cordoba","rosario","mendoza","tucuman","la-plata"], majorIndustries: ["food-beverage","oil-gas","pharma-biotech","textile-processing","wastewater-treatment","cement-construction"] },
  { slug: "colombia", cities: ["bogota","medellin","cali","barranquilla","cartagena","bucaramanga"], majorIndustries: ["food-beverage","cement-construction","textile-processing","oil-gas","wastewater-treatment"] },
  { slug: "chile", cities: ["santiago","valparaiso","concepcion","antofagasta"], majorIndustries: ["food-beverage","paper-pulp","cement-construction","wastewater-treatment","oil-gas"] },
  { slug: "peru", cities: ["lima","arequipa","trujillo","callao"], majorIndustries: ["food-beverage","cement-construction","textile-processing","wastewater-treatment"] },
  { slug: "morocco", cities: ["casablanca","tangier","rabat","marrakech","fez","kenitra"], majorIndustries: ["textile-processing","food-beverage","pharma-biotech","cement-construction","wastewater-treatment"] },
  { slug: "ethiopia", cities: ["addis-ababa","hawassa","dire-dawa","mekelle"], majorIndustries: ["textile-processing","cement-construction","food-beverage","wastewater-treatment"] },
  { slug: "tanzania", cities: ["dar-es-salaam","dodoma","mwanza","arusha"], majorIndustries: ["cement-construction","food-beverage","textile-processing","wastewater-treatment"] },
  { slug: "ghana", cities: ["accra","kumasi","tema","takoradi"], majorIndustries: ["food-beverage","cement-construction","oil-gas","wastewater-treatment"] },
];

// ─── Route Generation ─────────────────────────────────────────────

function getAllRoutes(): string[] {
  const routes: string[] = [];

  // Static pages
  routes.push("/", "/foam-control-engineering", "/solutions", "/technologies",
    "/sustainability", "/about", "/contact", "/locations", "/chemistry",
    "/foam-problems", "/global");

  // Industry pages
  for (const ind of industries) {
    routes.push(`/solutions/${ind.slug}`);
    for (const sp of ind.subProcesses) {
      routes.push(`/solutions/${ind.slug}/${slugify(sp)}`);
    }
  }

  // Indian location pages (state + city)
  for (const state of states) {
    routes.push(`/locations/${state.slug}`);

    // State × industry cross-product
    for (const indSlug of state.majorIndustries) {
      routes.push(`/locations/${state.slug}/${indSlug}`);
    }

    // State × chemistry cross-product
    for (const chem of chemistryPlatforms) {
      routes.push(`/locations/${state.slug}/chemistry/${chem.slug}`);
    }

    // State × problem cross-product
    for (const problem of foamProblems) {
      routes.push(`/locations/${state.slug}/foam-problems/${problem}`);
    }

    for (const city of state.cities) {
      routes.push(`/locations/${state.slug}/${city}`);

      // Cross-product: city × industry (only relevant industries)
      for (const indSlug of state.majorIndustries) {
        routes.push(`/locations/${state.slug}/${city}/${indSlug}`);
        // Deep cross: city × industry × sub-process
        const ind = industries.find((i) => i.slug === indSlug);
        if (ind) {
          for (const sp of ind.subProcesses) {
            routes.push(`/locations/${state.slug}/${city}/${indSlug}/${slugify(sp)}`);
          }
        }
      }

      // Cross-product: city × chemistry
      for (const chem of chemistryPlatforms) {
        routes.push(`/locations/${state.slug}/${city}/chemistry/${chem.slug}`);
      }

      // Cross-product: city × problem
      for (const problem of foamProblems) {
        routes.push(`/locations/${state.slug}/${city}/foam-problems/${problem}`);
      }
    }
  }

  // International location pages (country + city)
  for (const country of countries) {
    routes.push(`/global/${country.slug}`);

    // Country × industry cross-product
    for (const indSlug of country.majorIndustries) {
      routes.push(`/global/${country.slug}/${indSlug}`);
    }

    // Country × chemistry cross-product
    for (const chem of chemistryPlatforms) {
      routes.push(`/global/${country.slug}/chemistry/${chem.slug}`);
    }

    // Country × problem cross-product
    for (const problem of foamProblems) {
      routes.push(`/global/${country.slug}/foam-problems/${problem}`);
    }

    for (const city of country.cities) {
      routes.push(`/global/${country.slug}/${city}`);

      // Cross-product: city × industry (only relevant industries)
      for (const indSlug of country.majorIndustries) {
        routes.push(`/global/${country.slug}/${city}/${indSlug}`);
        // Deep cross: city × industry × sub-process
        const ind = industries.find((i) => i.slug === indSlug);
        if (ind) {
          for (const sp of ind.subProcesses) {
            routes.push(`/global/${country.slug}/${city}/${indSlug}/${slugify(sp)}`);
          }
        }
      }

      // Cross-product: city × chemistry
      for (const chem of chemistryPlatforms) {
        routes.push(`/global/${country.slug}/${city}/chemistry/${chem.slug}`);
      }

      // Cross-product: city × problem
      for (const problem of foamProblems) {
        routes.push(`/global/${country.slug}/${city}/foam-problems/${problem}`);
      }
    }
  }

  // Chemistry pages (platform + platform×industry)
  for (const chem of chemistryPlatforms) {
    routes.push(`/chemistry/${chem.slug}`);
    for (const indSlug of chem.industries) {
      routes.push(`/chemistry/${chem.slug}/${indSlug}`);
    }
  }

  // Foam problem pages
  for (const problem of foamProblems) {
    routes.push(`/foam-problems/${problem}`);
  }

  // Problem × Industry cross-product pages
  const problemIndustryMap: Record<string, string[]> = {
    "foam-overflow": ["wastewater-treatment","sugar-fermentation","food-beverage","textile-processing","paper-pulp","pharma-biotech"],
    "surface-defects-from-foam": ["paints-coatings","textile-processing","paper-pulp"],
    "biological-foam": ["wastewater-treatment","municipal-water-reuse","food-beverage","pharma-biotech"],
    "foam-in-fermentation": ["sugar-fermentation","food-beverage","pharma-biotech"],
    "pump-cavitation-from-foam": ["wastewater-treatment","paper-pulp","textile-processing","oil-gas","sugar-fermentation"],
    "foam-reducing-heat-transfer": ["sugar-fermentation","food-beverage","oil-gas","paper-pulp","pharma-biotech"],
    "foam-in-concrete": ["cement-construction"],
    "foam-in-oil-gas-separation": ["oil-gas"],
    "foam-in-textile-dyeing": ["textile-processing"],
    "foam-in-cip-cleaning": ["food-beverage","pharma-biotech","sugar-fermentation"],
    "foam-in-paper-machine": ["paper-pulp"],
    "foam-in-paint-grinding": ["paints-coatings"],
    "foam-in-sugar-evaporation": ["sugar-fermentation","food-beverage"],
    "foam-in-adhesive-manufacturing": ["paints-coatings","cement-construction"],
    "foam-in-membrane-bioreactor": ["wastewater-treatment","municipal-water-reuse"],
    "foam-in-drilling-fluids": ["oil-gas"],
    "foam-in-effluent-treatment": ["wastewater-treatment","textile-processing","pharma-biotech","food-beverage","paper-pulp"],
    "foam-in-ink-manufacturing": ["paints-coatings","paper-pulp"],
    "foam-in-leather-processing": ["textile-processing","wastewater-treatment"],
    "foam-in-starch-processing": ["food-beverage","sugar-fermentation"],
    "foam-in-detergent-manufacturing": ["paints-coatings","textile-processing","food-beverage"],
    "foam-in-desalination": ["municipal-water-reuse","wastewater-treatment"],
  };
  for (const problem of foamProblems) {
    const applicableInds = problemIndustryMap[problem] || [];
    for (const indSlug of applicableInds) {
      routes.push(`/foam-problems/${problem}/${indSlug}`);
    }
  }

  return routes;
}

function getPriority(route: string): string {
  if (route === "/") return "1.0";
  if (["/solutions", "/foam-control-engineering"].includes(route)) return "0.9";
  if (route.match(/^\/solutions\/[^/]+$/)) return "0.8";
  if (route.match(/^\/solutions\/[^/]+\/[^/]+$/)) return "0.7";
  if (["/technologies", "/contact", "/chemistry", "/foam-problems", "/locations", "/global"].includes(route)) return "0.8";
  if (route.match(/^\/chemistry\/[^/]+$/)) return "0.7";
  if (route.match(/^\/chemistry\/[^/]+\/[^/]+$/)) return "0.6";
  if (route.match(/^\/foam-problems\/[^/]+$/)) return "0.7";
  if (route.match(/^\/locations\/[^/]+$/) || route.match(/^\/global\/[^/]+$/)) return "0.7";
  if (route.match(/^\/locations\/[^/]+\/[^/]+$/) || route.match(/^\/global\/[^/]+\/[^/]+$/)) return "0.6";
  // Cross-product pages
  if (route.includes("/chemistry/") || route.includes("/foam-problems/")) return "0.4";
  return "0.5";
}

function getChangefreq(route: string): string {
  if (route === "/" || route === "/solutions") return "weekly";
  return "monthly";
}

// ─── Generate ─────────────────────────────────────────────────────

const routes = getAllRoutes();
const today = new Date().toISOString().split("T")[0];

const URLS_PER_SITEMAP = 50000;
const chunks: string[][] = [];
for (let i = 0; i < routes.length; i += URLS_PER_SITEMAP) {
  chunks.push(routes.slice(i, i + URLS_PER_SITEMAP));
}

if (chunks.length === 1) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunks[0].map((route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangefreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>
  </url>`).join("\n")}
</urlset>
`;
  writeFileSync(join(process.cwd(), "dist", "sitemap.xml"), xml, "utf-8");
  writeFileSync(join(process.cwd(), "public", "sitemap.xml"), xml, "utf-8");
} else {
  for (let i = 0; i < chunks.length; i++) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunks[i].map((route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${getChangefreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>
  </url>`).join("\n")}
</urlset>
`;
    writeFileSync(join(process.cwd(), "dist", `sitemap-${i + 1}.xml`), xml, "utf-8");
    writeFileSync(join(process.cwd(), "public", `sitemap-${i + 1}.xml`), xml, "utf-8");
  }

  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunks.map((_, i) => `  <sitemap>
    <loc>${SITE_URL}/sitemap-${i + 1}.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`).join("\n")}
</sitemapindex>
`;
  writeFileSync(join(process.cwd(), "dist", "sitemap.xml"), indexXml, "utf-8");
  writeFileSync(join(process.cwd(), "public", "sitemap.xml"), indexXml, "utf-8");
}

console.log(`✅ Sitemap generated with ${routes.length} URLs across ${chunks.length} file(s)`);
