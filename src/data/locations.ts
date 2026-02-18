// ─── Location Data for Programmatic SEO ───────────────────────────
// Indian states, cities, and international countries/cities.
// Each location × dimension generates unique pages.

export interface CityData {
  name: string;
  slug: string;
}

export interface StateData {
  name: string;
  slug: string;
  industrialProfile: string;
  majorIndustries: string[];
  cities: CityData[];
}

export interface CountryData {
  name: string;
  slug: string;
  region: string;
  industrialProfile: string;
  majorIndustries: string[];
  cities: CityData[];
}

export const states: StateData[] = [
  {
    name: "Gujarat",
    slug: "gujarat",
    industrialProfile: "India's largest chemical and textile manufacturing hub with major industrial corridors in Ahmedabad, Surat, Vadodara and Bharuch. Home to GIDC estates, petrochemical complexes and one of the highest concentrations of ETP plants in the country.",
    majorIndustries: ["textile-processing", "wastewater-treatment", "paints-coatings", "pharma-biotech", "oil-gas", "cement-construction"],
    cities: [
      { name: "Ahmedabad", slug: "ahmedabad" },
      { name: "Surat", slug: "surat" },
      { name: "Vadodara", slug: "vadodara" },
      { name: "Rajkot", slug: "rajkot" },
      { name: "Bharuch", slug: "bharuch" },
      { name: "Ankleshwar", slug: "ankleshwar" },
      { name: "Vapi", slug: "vapi" },
      { name: "Morbi", slug: "morbi" },
      { name: "Gandhidham", slug: "gandhidham" },
      { name: "Jamnagar", slug: "jamnagar" },
      { name: "Bhavnagar", slug: "bhavnagar" },
      { name: "Junagadh", slug: "junagadh" },
      { name: "Navsari", slug: "navsari" },
      { name: "Mehsana", slug: "mehsana" },
      { name: "Dahej", slug: "dahej" },
      { name: "Mundra", slug: "mundra" },
      { name: "Hazira", slug: "hazira" },
      { name: "Sanand", slug: "sanand" },
      { name: "Kalol", slug: "kalol" },
      { name: "Porbandar", slug: "porbandar" },
    ],
  },
  {
    name: "Maharashtra",
    slug: "maharashtra",
    industrialProfile: "India's industrial powerhouse with Mumbai-Pune industrial belt, MIDC estates across the state, and major presence in paints, pharma, petrochemicals and food processing.",
    majorIndustries: ["paints-coatings", "pharma-biotech", "textile-processing", "food-beverage", "wastewater-treatment", "sugar-fermentation"],
    cities: [
      { name: "Mumbai", slug: "mumbai" },
      { name: "Pune", slug: "pune" },
      { name: "Nashik", slug: "nashik" },
      { name: "Nagpur", slug: "nagpur" },
      { name: "Aurangabad", slug: "aurangabad" },
      { name: "Thane", slug: "thane" },
      { name: "Navi Mumbai", slug: "navi-mumbai" },
      { name: "Kolhapur", slug: "kolhapur" },
      { name: "Solapur", slug: "solapur" },
      { name: "Ratnagiri", slug: "ratnagiri" },
      { name: "Satara", slug: "satara" },
      { name: "Sangli", slug: "sangli" },
      { name: "Ahmednagar", slug: "ahmednagar" },
      { name: "Latur", slug: "latur" },
      { name: "Jalgaon", slug: "jalgaon" },
      { name: "Amravati", slug: "amravati" },
      { name: "Chandrapur", slug: "chandrapur" },
      { name: "Raigad", slug: "raigad" },
      { name: "Palghar", slug: "palghar" },
      { name: "Tarapur", slug: "tarapur" },
    ],
  },
  {
    name: "Tamil Nadu",
    slug: "tamil-nadu",
    industrialProfile: "Major industrial state with SIPCOT estates, strong textile and leather processing in Tirupur and Erode, automobile manufacturing in Chennai, and growing pharma and food processing sectors.",
    majorIndustries: ["textile-processing", "wastewater-treatment", "paints-coatings", "paper-pulp", "pharma-biotech", "cement-construction"],
    cities: [
      { name: "Chennai", slug: "chennai" },
      { name: "Coimbatore", slug: "coimbatore" },
      { name: "Tirupur", slug: "tirupur" },
      { name: "Madurai", slug: "madurai" },
      { name: "Salem", slug: "salem" },
      { name: "Erode", slug: "erode" },
      { name: "Trichy", slug: "trichy" },
      { name: "Hosur", slug: "hosur" },
      { name: "Vellore", slug: "vellore" },
      { name: "Sivakasi", slug: "sivakasi" },
      { name: "Karur", slug: "karur" },
      { name: "Dindigul", slug: "dindigul" },
      { name: "Thoothukudi", slug: "thoothukudi" },
      { name: "Ranipet", slug: "ranipet" },
      { name: "Ambur", slug: "ambur" },
      { name: "Namakkal", slug: "namakkal" },
      { name: "Cuddalore", slug: "cuddalore" },
      { name: "Sriperumbudur", slug: "sriperumbudur" },
    ],
  },
  {
    name: "Karnataka",
    slug: "karnataka",
    industrialProfile: "Diverse industrial base with Bangalore's tech-driven manufacturing, Mangalore's petrochemical corridor, and strong presence in pharma, paper, and food processing across KIADB estates.",
    majorIndustries: ["pharma-biotech", "paints-coatings", "paper-pulp", "food-beverage", "textile-processing", "wastewater-treatment"],
    cities: [
      { name: "Bangalore", slug: "bangalore" },
      { name: "Mysore", slug: "mysore" },
      { name: "Mangalore", slug: "mangalore" },
      { name: "Hubli-Dharwad", slug: "hubli-dharwad" },
      { name: "Belgaum", slug: "belgaum" },
      { name: "Davangere", slug: "davangere" },
      { name: "Shimoga", slug: "shimoga" },
      { name: "Tumkur", slug: "tumkur" },
      { name: "Raichur", slug: "raichur" },
      { name: "Bellary", slug: "bellary" },
      { name: "Bidar", slug: "bidar" },
      { name: "Hassan", slug: "hassan" },
      { name: "Chitradurga", slug: "chitradurga" },
      { name: "Udupi", slug: "udupi" },
    ],
  },
  {
    name: "Rajasthan",
    slug: "rajasthan",
    industrialProfile: "Growing industrial state with RIICO estates, strong cement and construction chemicals sector, textile processing in Pali and Jodhpur, and expanding chemical manufacturing in Bhiwadi and Neemrana.",
    majorIndustries: ["cement-construction", "textile-processing", "wastewater-treatment", "paints-coatings", "oil-gas"],
    cities: [
      { name: "Jaipur", slug: "jaipur" },
      { name: "Jodhpur", slug: "jodhpur" },
      { name: "Udaipur", slug: "udaipur" },
      { name: "Kota", slug: "kota" },
      { name: "Bhiwadi", slug: "bhiwadi" },
      { name: "Neemrana", slug: "neemrana" },
      { name: "Pali", slug: "pali" },
      { name: "Ajmer", slug: "ajmer" },
      { name: "Bikaner", slug: "bikaner" },
      { name: "Alwar", slug: "alwar" },
      { name: "Sikar", slug: "sikar" },
      { name: "Chittorgarh", slug: "chittorgarh" },
      { name: "Kishangarh", slug: "kishangarh" },
    ],
  },
  {
    name: "Uttar Pradesh",
    slug: "uttar-pradesh",
    industrialProfile: "India's most populous state with major sugar belt, growing pharmaceutical sector in Noida-Greater Noida, leather processing in Kanpur, and expanding industrial estates across UPSIDC zones.",
    majorIndustries: ["sugar-fermentation", "wastewater-treatment", "paper-pulp", "textile-processing", "food-beverage", "cement-construction"],
    cities: [
      { name: "Noida", slug: "noida" },
      { name: "Greater Noida", slug: "greater-noida" },
      { name: "Lucknow", slug: "lucknow" },
      { name: "Kanpur", slug: "kanpur" },
      { name: "Agra", slug: "agra" },
      { name: "Varanasi", slug: "varanasi" },
      { name: "Ghaziabad", slug: "ghaziabad" },
      { name: "Meerut", slug: "meerut" },
      { name: "Moradabad", slug: "moradabad" },
      { name: "Bareilly", slug: "bareilly" },
      { name: "Aligarh", slug: "aligarh" },
      { name: "Saharanpur", slug: "saharanpur" },
      { name: "Gorakhpur", slug: "gorakhpur" },
      { name: "Firozabad", slug: "firozabad" },
      { name: "Mathura", slug: "mathura" },
      { name: "Jhansi", slug: "jhansi" },
      { name: "Allahabad", slug: "allahabad" },
    ],
  },
  {
    name: "Andhra Pradesh",
    slug: "andhra-pradesh",
    industrialProfile: "Rapidly industrializing state with pharma hub in Visakhapatnam, cement manufacturing in Kurnool-Nandyal belt, and growing food processing and aquaculture sectors along the coast.",
    majorIndustries: ["pharma-biotech", "cement-construction", "food-beverage", "wastewater-treatment", "paper-pulp", "sugar-fermentation"],
    cities: [
      { name: "Visakhapatnam", slug: "visakhapatnam" },
      { name: "Vijayawada", slug: "vijayawada" },
      { name: "Guntur", slug: "guntur" },
      { name: "Tirupati", slug: "tirupati" },
      { name: "Kakinada", slug: "kakinada" },
      { name: "Nellore", slug: "nellore" },
      { name: "Kurnool", slug: "kurnool" },
      { name: "Rajahmundry", slug: "rajahmundry" },
      { name: "Anantapur", slug: "anantapur" },
      { name: "Ongole", slug: "ongole" },
      { name: "Eluru", slug: "eluru" },
      { name: "Nandyal", slug: "nandyal" },
      { name: "Kadapa", slug: "kadapa" },
    ],
  },
  {
    name: "Telangana",
    slug: "telangana",
    industrialProfile: "Hyderabad is India's bulk drug capital with the largest pharmaceutical manufacturing cluster. Strong presence in paints, food processing, and growing industrial wastewater treatment sector.",
    majorIndustries: ["pharma-biotech", "paints-coatings", "food-beverage", "wastewater-treatment", "textile-processing"],
    cities: [
      { name: "Hyderabad", slug: "hyderabad" },
      { name: "Warangal", slug: "warangal" },
      { name: "Nizamabad", slug: "nizamabad" },
      { name: "Karimnagar", slug: "karimnagar" },
      { name: "Medak", slug: "medak" },
      { name: "Sangareddy", slug: "sangareddy" },
      { name: "Nalgonda", slug: "nalgonda" },
      { name: "Mahbubnagar", slug: "mahbubnagar" },
      { name: "Adilabad", slug: "adilabad" },
      { name: "Siddipet", slug: "siddipet" },
    ],
  },
  {
    name: "West Bengal",
    slug: "west-bengal",
    industrialProfile: "Historic industrial base with jute and textile processing, paper mills, steel and engineering, and growing food processing sector. Haldia petrochemical complex is a major industrial anchor.",
    majorIndustries: ["textile-processing", "paper-pulp", "food-beverage", "wastewater-treatment", "paints-coatings", "oil-gas"],
    cities: [
      { name: "Kolkata", slug: "kolkata" },
      { name: "Howrah", slug: "howrah" },
      { name: "Durgapur", slug: "durgapur" },
      { name: "Asansol", slug: "asansol" },
      { name: "Siliguri", slug: "siliguri" },
      { name: "Haldia", slug: "haldia" },
      { name: "Kharagpur", slug: "kharagpur" },
      { name: "Bardhaman", slug: "bardhaman" },
      { name: "Kalyani", slug: "kalyani" },
      { name: "Barasat", slug: "barasat" },
      { name: "Krishnanagar", slug: "krishnanagar" },
      { name: "Medinipur", slug: "medinipur" },
    ],
  },
  {
    name: "Madhya Pradesh",
    slug: "madhya-pradesh",
    industrialProfile: "Central India's industrial hub with cement manufacturing, soybean processing, pharmaceutical production in Indore-Pithampur, and growing textile and food processing sectors.",
    majorIndustries: ["cement-construction", "food-beverage", "pharma-biotech", "textile-processing", "wastewater-treatment", "sugar-fermentation"],
    cities: [
      { name: "Indore", slug: "indore" },
      { name: "Bhopal", slug: "bhopal" },
      { name: "Jabalpur", slug: "jabalpur" },
      { name: "Gwalior", slug: "gwalior" },
      { name: "Pithampur", slug: "pithampur" },
      { name: "Dewas", slug: "dewas" },
      { name: "Ujjain", slug: "ujjain" },
      { name: "Ratlam", slug: "ratlam" },
      { name: "Satna", slug: "satna" },
      { name: "Rewa", slug: "rewa" },
      { name: "Sagar", slug: "sagar" },
    ],
  },
  {
    name: "Punjab",
    slug: "punjab",
    industrialProfile: "Strong industrial base in textiles, food processing, paper manufacturing, and pharmaceutical production. Ludhiana is India's largest hosiery and knitwear hub.",
    majorIndustries: ["textile-processing", "paper-pulp", "food-beverage", "pharma-biotech", "wastewater-treatment"],
    cities: [
      { name: "Ludhiana", slug: "ludhiana" },
      { name: "Amritsar", slug: "amritsar" },
      { name: "Jalandhar", slug: "jalandhar" },
      { name: "Patiala", slug: "patiala" },
      { name: "Bathinda", slug: "bathinda" },
      { name: "Mohali", slug: "mohali" },
      { name: "Mandi Gobindgarh", slug: "mandi-gobindgarh" },
      { name: "Rajpura", slug: "rajpura" },
      { name: "Phagwara", slug: "phagwara" },
      { name: "Dera Bassi", slug: "dera-bassi" },
      { name: "Hoshiarpur", slug: "hoshiarpur" },
    ],
  },
  {
    name: "Haryana",
    slug: "haryana",
    industrialProfile: "Major industrial state in NCR region with automobile, textile, and food processing clusters. Panipat is a major textile recycling hub. Faridabad-Gurugram belt has diverse manufacturing.",
    majorIndustries: ["textile-processing", "food-beverage", "paints-coatings", "wastewater-treatment", "pharma-biotech", "cement-construction"],
    cities: [
      { name: "Gurugram", slug: "gurugram" },
      { name: "Faridabad", slug: "faridabad" },
      { name: "Panipat", slug: "panipat" },
      { name: "Sonipat", slug: "sonipat" },
      { name: "Karnal", slug: "karnal" },
      { name: "Hisar", slug: "hisar" },
      { name: "Rohtak", slug: "rohtak" },
      { name: "Manesar", slug: "manesar" },
      { name: "Bahadurgarh", slug: "bahadurgarh" },
      { name: "Ambala", slug: "ambala" },
      { name: "Yamunanagar", slug: "yamunanagar" },
      { name: "Rewari", slug: "rewari" },
    ],
  },
  {
    name: "Kerala",
    slug: "kerala",
    industrialProfile: "Diverse industrial base with rubber processing, food and spice processing, paper manufacturing, and growing pharmaceutical sector. Strong focus on sustainable manufacturing practices.",
    majorIndustries: ["food-beverage", "paper-pulp", "wastewater-treatment", "pharma-biotech", "textile-processing"],
    cities: [
      { name: "Kochi", slug: "kochi" },
      { name: "Thiruvananthapuram", slug: "thiruvananthapuram" },
      { name: "Kozhikode", slug: "kozhikode" },
      { name: "Thrissur", slug: "thrissur" },
      { name: "Kollam", slug: "kollam" },
      { name: "Palakkad", slug: "palakkad" },
      { name: "Kannur", slug: "kannur" },
      { name: "Alappuzha", slug: "alappuzha" },
      { name: "Malappuram", slug: "malappuram" },
    ],
  },
  {
    name: "Odisha",
    slug: "odisha",
    industrialProfile: "Resource-rich state with major steel, aluminium, and cement manufacturing. Growing petrochemical sector in Paradip and expanding food processing and paper industries.",
    majorIndustries: ["cement-construction", "paper-pulp", "wastewater-treatment", "oil-gas", "food-beverage"],
    cities: [
      { name: "Bhubaneswar", slug: "bhubaneswar" },
      { name: "Cuttack", slug: "cuttack" },
      { name: "Rourkela", slug: "rourkela" },
      { name: "Paradip", slug: "paradip" },
      { name: "Sambalpur", slug: "sambalpur" },
      { name: "Jharsuguda", slug: "jharsuguda" },
      { name: "Berhampur", slug: "berhampur" },
      { name: "Angul", slug: "angul" },
      { name: "Balasore", slug: "balasore" },
    ],
  },
  {
    name: "Chhattisgarh",
    slug: "chhattisgarh",
    industrialProfile: "Major cement and steel manufacturing state with growing industrial base. Bhilai steel plant region and Korba industrial area are key manufacturing zones.",
    majorIndustries: ["cement-construction", "wastewater-treatment", "paper-pulp", "food-beverage"],
    cities: [
      { name: "Raipur", slug: "raipur" },
      { name: "Bhilai", slug: "bhilai" },
      { name: "Korba", slug: "korba" },
      { name: "Bilaspur", slug: "bilaspur" },
      { name: "Durg", slug: "durg" },
      { name: "Rajnandgaon", slug: "rajnandgaon" },
      { name: "Raigarh", slug: "raigarh" },
    ],
  },
  {
    name: "Jharkhand",
    slug: "jharkhand",
    industrialProfile: "Heavy industry state with steel, cement, and mining operations. Jamshedpur is a major industrial city. Growing food processing and pharmaceutical sectors.",
    majorIndustries: ["cement-construction", "wastewater-treatment", "paper-pulp", "food-beverage", "oil-gas"],
    cities: [
      { name: "Ranchi", slug: "ranchi" },
      { name: "Jamshedpur", slug: "jamshedpur" },
      { name: "Dhanbad", slug: "dhanbad" },
      { name: "Bokaro", slug: "bokaro" },
      { name: "Hazaribagh", slug: "hazaribagh" },
      { name: "Deoghar", slug: "deoghar" },
      { name: "Giridih", slug: "giridih" },
    ],
  },
  {
    name: "Goa",
    slug: "goa",
    industrialProfile: "Compact industrial state with pharmaceutical manufacturing in Verna and Pilerne industrial estates, mining operations, and food processing.",
    majorIndustries: ["pharma-biotech", "food-beverage", "wastewater-treatment", "paints-coatings"],
    cities: [
      { name: "Panaji", slug: "panaji" },
      { name: "Vasco da Gama", slug: "vasco-da-gama" },
      { name: "Margao", slug: "margao" },
      { name: "Ponda", slug: "ponda" },
      { name: "Mapusa", slug: "mapusa" },
    ],
  },
  {
    name: "Uttarakhand",
    slug: "uttarakhand",
    industrialProfile: "Growing pharmaceutical and FMCG manufacturing hub in Haridwar-Rudrapur-Pantnagar corridor. Tax incentives have attracted major pharma, food, and consumer goods manufacturers.",
    majorIndustries: ["pharma-biotech", "food-beverage", "paper-pulp", "wastewater-treatment"],
    cities: [
      { name: "Dehradun", slug: "dehradun" },
      { name: "Haridwar", slug: "haridwar" },
      { name: "Rudrapur", slug: "rudrapur" },
      { name: "Pantnagar", slug: "pantnagar" },
      { name: "Kashipur", slug: "kashipur" },
      { name: "Roorkee", slug: "roorkee" },
      { name: "Haldwani", slug: "haldwani" },
      { name: "Selaqui", slug: "selaqui" },
    ],
  },
  {
    name: "Himachal Pradesh",
    slug: "himachal-pradesh",
    industrialProfile: "Major pharmaceutical manufacturing hub in Baddi-Barotiwala-Nalagarh belt. Tax incentives have created one of India's largest pharma clusters.",
    majorIndustries: ["pharma-biotech", "food-beverage", "cement-construction", "wastewater-treatment"],
    cities: [
      { name: "Baddi", slug: "baddi" },
      { name: "Solan", slug: "solan" },
      { name: "Shimla", slug: "shimla" },
      { name: "Parwanoo", slug: "parwanoo" },
      { name: "Nalagarh", slug: "nalagarh" },
      { name: "Paonta Sahib", slug: "paonta-sahib" },
      { name: "Kala Amb", slug: "kala-amb" },
    ],
  },
  {
    name: "Assam",
    slug: "assam",
    industrialProfile: "Northeast India's industrial hub with tea processing, oil refining, paper manufacturing, and growing food processing sector.",
    majorIndustries: ["food-beverage", "oil-gas", "paper-pulp", "wastewater-treatment"],
    cities: [
      { name: "Guwahati", slug: "guwahati" },
      { name: "Dibrugarh", slug: "dibrugarh" },
      { name: "Jorhat", slug: "jorhat" },
      { name: "Silchar", slug: "silchar" },
      { name: "Tezpur", slug: "tezpur" },
      { name: "Nagaon", slug: "nagaon" },
      { name: "Tinsukia", slug: "tinsukia" },
      { name: "Bongaigaon", slug: "bongaigaon" },
    ],
  },
  {
    name: "Bihar",
    slug: "bihar",
    industrialProfile: "Emerging industrial state with sugar manufacturing, food processing, and growing pharmaceutical sector. Hajipur and Patna are key industrial zones.",
    majorIndustries: ["sugar-fermentation", "food-beverage", "wastewater-treatment", "cement-construction"],
    cities: [
      { name: "Patna", slug: "patna" },
      { name: "Hajipur", slug: "hajipur" },
      { name: "Muzaffarpur", slug: "muzaffarpur" },
      { name: "Bhagalpur", slug: "bhagalpur" },
      { name: "Gaya", slug: "gaya" },
      { name: "Darbhanga", slug: "darbhanga" },
      { name: "Begusarai", slug: "begusarai" },
      { name: "Purnia", slug: "purnia" },
    ],
  },
  {
    name: "Jammu and Kashmir",
    slug: "jammu-kashmir",
    industrialProfile: "Emerging industrial base with food processing, pharmaceuticals, and handicraft manufacturing. Growing SIDCO industrial estates.",
    majorIndustries: ["food-beverage", "pharma-biotech", "wastewater-treatment"],
    cities: [
      { name: "Jammu", slug: "jammu" },
      { name: "Srinagar", slug: "srinagar" },
      { name: "Kathua", slug: "kathua" },
      { name: "Udhampur", slug: "udhampur" },
    ],
  },
  {
    name: "Tripura",
    slug: "tripura",
    industrialProfile: "Growing industrial state in northeast with food processing, rubber manufacturing, and tea processing sectors.",
    majorIndustries: ["food-beverage", "wastewater-treatment"],
    cities: [
      { name: "Agartala", slug: "agartala" },
      { name: "Udaipur", slug: "udaipur-tripura" },
      { name: "Dharmanagar", slug: "dharmanagar" },
    ],
  },
  {
    name: "Meghalaya",
    slug: "meghalaya",
    industrialProfile: "Mineral-rich state with cement manufacturing, food processing, and growing industrial base in Byrnihat industrial area.",
    majorIndustries: ["cement-construction", "food-beverage", "wastewater-treatment"],
    cities: [
      { name: "Shillong", slug: "shillong" },
      { name: "Byrnihat", slug: "byrnihat" },
      { name: "Tura", slug: "tura" },
    ],
  },
  {
    name: "Manipur",
    slug: "manipur",
    industrialProfile: "Emerging industrial state with food processing and handloom textile manufacturing.",
    majorIndustries: ["food-beverage", "textile-processing", "wastewater-treatment"],
    cities: [
      { name: "Imphal", slug: "imphal" },
    ],
  },
  {
    name: "Nagaland",
    slug: "nagaland",
    industrialProfile: "Developing industrial base with food processing and small-scale manufacturing.",
    majorIndustries: ["food-beverage", "wastewater-treatment"],
    cities: [
      { name: "Dimapur", slug: "dimapur" },
      { name: "Kohima", slug: "kohima" },
    ],
  },
  {
    name: "Sikkim",
    slug: "sikkim",
    industrialProfile: "Pharmaceutical manufacturing hub with tax incentives attracting major pharma companies. Growing food processing sector.",
    majorIndustries: ["pharma-biotech", "food-beverage", "wastewater-treatment"],
    cities: [
      { name: "Gangtok", slug: "gangtok" },
      { name: "Rangpo", slug: "rangpo" },
      { name: "Singtam", slug: "singtam" },
    ],
  },
  {
    name: "Arunachal Pradesh",
    slug: "arunachal-pradesh",
    industrialProfile: "Developing industrial state with food processing and hydropower-related manufacturing.",
    majorIndustries: ["food-beverage", "wastewater-treatment"],
    cities: [
      { name: "Itanagar", slug: "itanagar" },
      { name: "Naharlagun", slug: "naharlagun" },
    ],
  },
  {
    name: "Mizoram",
    slug: "mizoram",
    industrialProfile: "Emerging industrial base with food processing and bamboo-based manufacturing.",
    majorIndustries: ["food-beverage", "wastewater-treatment"],
    cities: [
      { name: "Aizawl", slug: "aizawl" },
    ],
  },
];

export const countries: CountryData[] = [
  {
    name: "United States", slug: "united-states", region: "North America",
    industrialProfile: "World's largest industrial economy with diverse manufacturing across chemicals, pharmaceuticals, food processing, oil & gas, and advanced materials.",
    majorIndustries: ["paints-coatings", "pharma-biotech", "oil-gas", "food-beverage", "wastewater-treatment", "paper-pulp", "cement-construction"],
    cities: [
      { name: "Houston", slug: "houston" }, { name: "Chicago", slug: "chicago" },
      { name: "Los Angeles", slug: "los-angeles" }, { name: "Philadelphia", slug: "philadelphia" },
      { name: "Detroit", slug: "detroit" }, { name: "Atlanta", slug: "atlanta" },
      { name: "Dallas", slug: "dallas" }, { name: "New Jersey", slug: "new-jersey" },
      { name: "Charlotte", slug: "charlotte" }, { name: "Pittsburgh", slug: "pittsburgh" },
      { name: "Cleveland", slug: "cleveland" }, { name: "St. Louis", slug: "st-louis" },
      { name: "Milwaukee", slug: "milwaukee" }, { name: "Cincinnati", slug: "cincinnati" },
      { name: "Memphis", slug: "memphis" }, { name: "Baton Rouge", slug: "baton-rouge" },
    ],
  },
  {
    name: "China", slug: "china", region: "East Asia",
    industrialProfile: "World's largest manufacturing nation with massive textile, chemical, pharmaceutical, and construction industries across major industrial zones.",
    majorIndustries: ["textile-processing", "paints-coatings", "pharma-biotech", "cement-construction", "paper-pulp", "wastewater-treatment", "food-beverage"],
    cities: [
      { name: "Shanghai", slug: "shanghai" }, { name: "Guangzhou", slug: "guangzhou" },
      { name: "Shenzhen", slug: "shenzhen" }, { name: "Beijing", slug: "beijing" },
      { name: "Tianjin", slug: "tianjin" }, { name: "Hangzhou", slug: "hangzhou" },
      { name: "Suzhou", slug: "suzhou" }, { name: "Dongguan", slug: "dongguan" },
      { name: "Foshan", slug: "foshan" }, { name: "Wuhan", slug: "wuhan" },
      { name: "Chengdu", slug: "chengdu" }, { name: "Nanjing", slug: "nanjing" },
      { name: "Qingdao", slug: "qingdao" }, { name: "Dalian", slug: "dalian" },
      { name: "Ningbo", slug: "ningbo" }, { name: "Xiamen", slug: "xiamen" },
    ],
  },
  {
    name: "Germany", slug: "germany", region: "Europe",
    industrialProfile: "Europe's industrial powerhouse with world-class chemical, automotive, pharmaceutical, and engineering sectors. Home to BASF, Bayer, and major chemical parks.",
    majorIndustries: ["paints-coatings", "pharma-biotech", "wastewater-treatment", "paper-pulp", "food-beverage", "cement-construction"],
    cities: [
      { name: "Frankfurt", slug: "frankfurt" }, { name: "Munich", slug: "munich" },
      { name: "Hamburg", slug: "hamburg" }, { name: "Cologne", slug: "cologne" },
      { name: "Stuttgart", slug: "stuttgart" }, { name: "Dusseldorf", slug: "dusseldorf" },
      { name: "Ludwigshafen", slug: "ludwigshafen" }, { name: "Leverkusen", slug: "leverkusen" },
      { name: "Dortmund", slug: "dortmund" }, { name: "Essen", slug: "essen" },
      { name: "Bremen", slug: "bremen" }, { name: "Mannheim", slug: "mannheim" },
    ],
  },
  {
    name: "Japan", slug: "japan", region: "East Asia",
    industrialProfile: "Advanced manufacturing economy with precision chemicals, electronics, automotive, and pharmaceutical industries. Strong focus on quality and environmental compliance.",
    majorIndustries: ["paints-coatings", "pharma-biotech", "paper-pulp", "food-beverage", "wastewater-treatment", "cement-construction"],
    cities: [
      { name: "Tokyo", slug: "tokyo" }, { name: "Osaka", slug: "osaka" },
      { name: "Nagoya", slug: "nagoya" }, { name: "Yokohama", slug: "yokohama" },
      { name: "Kobe", slug: "kobe" }, { name: "Fukuoka", slug: "fukuoka" },
      { name: "Kawasaki", slug: "kawasaki" }, { name: "Chiba", slug: "chiba" },
      { name: "Kitakyushu", slug: "kitakyushu" }, { name: "Hiroshima", slug: "hiroshima" },
    ],
  },
  {
    name: "South Korea", slug: "south-korea", region: "East Asia",
    industrialProfile: "Major industrial economy with petrochemicals, electronics, shipbuilding, and advanced materials manufacturing.",
    majorIndustries: ["paints-coatings", "pharma-biotech", "wastewater-treatment", "oil-gas", "cement-construction", "textile-processing"],
    cities: [
      { name: "Seoul", slug: "seoul" }, { name: "Busan", slug: "busan" },
      { name: "Incheon", slug: "incheon" }, { name: "Ulsan", slug: "ulsan" },
      { name: "Daegu", slug: "daegu" }, { name: "Gwangju", slug: "gwangju" },
      { name: "Daejeon", slug: "daejeon" }, { name: "Yeosu", slug: "yeosu" },
    ],
  },
  {
    name: "Brazil", slug: "brazil", region: "South America",
    industrialProfile: "Latin America's largest industrial economy with major sugar/ethanol, pulp & paper, petrochemical, and food processing sectors.",
    majorIndustries: ["sugar-fermentation", "paper-pulp", "oil-gas", "food-beverage", "wastewater-treatment", "paints-coatings", "cement-construction"],
    cities: [
      { name: "São Paulo", slug: "sao-paulo" }, { name: "Rio de Janeiro", slug: "rio-de-janeiro" },
      { name: "Belo Horizonte", slug: "belo-horizonte" }, { name: "Curitiba", slug: "curitiba" },
      { name: "Porto Alegre", slug: "porto-alegre" }, { name: "Campinas", slug: "campinas" },
      { name: "Salvador", slug: "salvador" }, { name: "Recife", slug: "recife" },
      { name: "Manaus", slug: "manaus" }, { name: "Ribeirão Preto", slug: "ribeirao-preto" },
    ],
  },
  {
    name: "Mexico", slug: "mexico", region: "North America",
    industrialProfile: "Major manufacturing hub with automotive, food processing, petrochemical, and cement industries. Strong maquiladora manufacturing sector.",
    majorIndustries: ["food-beverage", "cement-construction", "oil-gas", "paints-coatings", "wastewater-treatment", "pharma-biotech"],
    cities: [
      { name: "Mexico City", slug: "mexico-city" }, { name: "Monterrey", slug: "monterrey" },
      { name: "Guadalajara", slug: "guadalajara" }, { name: "Puebla", slug: "puebla" },
      { name: "Querétaro", slug: "queretaro" }, { name: "Tijuana", slug: "tijuana" },
      { name: "León", slug: "leon" }, { name: "Saltillo", slug: "saltillo" },
    ],
  },
  {
    name: "United Kingdom", slug: "united-kingdom", region: "Europe",
    industrialProfile: "Advanced industrial economy with strong pharmaceutical, chemical, food processing, and water treatment sectors.",
    majorIndustries: ["pharma-biotech", "paints-coatings", "food-beverage", "wastewater-treatment", "paper-pulp", "oil-gas"],
    cities: [
      { name: "London", slug: "london" }, { name: "Manchester", slug: "manchester" },
      { name: "Birmingham", slug: "birmingham" }, { name: "Leeds", slug: "leeds" },
      { name: "Glasgow", slug: "glasgow" }, { name: "Liverpool", slug: "liverpool" },
      { name: "Sheffield", slug: "sheffield" }, { name: "Bristol", slug: "bristol" },
      { name: "Edinburgh", slug: "edinburgh" }, { name: "Newcastle", slug: "newcastle" },
    ],
  },
  {
    name: "France", slug: "france", region: "Europe",
    industrialProfile: "Major European industrial economy with strong pharmaceutical, food processing, chemical, and cosmetics manufacturing sectors.",
    majorIndustries: ["pharma-biotech", "food-beverage", "paints-coatings", "wastewater-treatment", "cement-construction", "paper-pulp"],
    cities: [
      { name: "Paris", slug: "paris" }, { name: "Lyon", slug: "lyon" },
      { name: "Marseille", slug: "marseille" }, { name: "Toulouse", slug: "toulouse" },
      { name: "Lille", slug: "lille" }, { name: "Strasbourg", slug: "strasbourg" },
      { name: "Bordeaux", slug: "bordeaux" }, { name: "Nantes", slug: "nantes" },
    ],
  },
  {
    name: "Italy", slug: "italy", region: "Europe",
    industrialProfile: "Strong manufacturing economy with textile, ceramic, food processing, pharmaceutical, and chemical industries.",
    majorIndustries: ["textile-processing", "food-beverage", "pharma-biotech", "paints-coatings", "cement-construction", "wastewater-treatment"],
    cities: [
      { name: "Milan", slug: "milan" }, { name: "Turin", slug: "turin" },
      { name: "Rome", slug: "rome" }, { name: "Bologna", slug: "bologna" },
      { name: "Florence", slug: "florence" }, { name: "Naples", slug: "naples" },
      { name: "Genoa", slug: "genoa" }, { name: "Venice", slug: "venice" },
    ],
  },
  {
    name: "Turkey", slug: "turkey", region: "Middle East",
    industrialProfile: "Major manufacturing hub bridging Europe and Asia with strong textile, cement, food processing, and chemical industries.",
    majorIndustries: ["textile-processing", "cement-construction", "food-beverage", "paints-coatings", "wastewater-treatment", "pharma-biotech"],
    cities: [
      { name: "Istanbul", slug: "istanbul" }, { name: "Ankara", slug: "ankara" },
      { name: "Izmir", slug: "izmir" }, { name: "Bursa", slug: "bursa" },
      { name: "Gaziantep", slug: "gaziantep" }, { name: "Kayseri", slug: "kayseri" },
      { name: "Adana", slug: "adana" }, { name: "Konya", slug: "konya" },
      { name: "Denizli", slug: "denizli" }, { name: "Mersin", slug: "mersin" },
    ],
  },
  {
    name: "Saudi Arabia", slug: "saudi-arabia", region: "Middle East",
    industrialProfile: "Major petrochemical and oil & gas economy with growing construction, water treatment, and food processing sectors. Vision 2030 driving industrial diversification.",
    majorIndustries: ["oil-gas", "cement-construction", "wastewater-treatment", "food-beverage", "paints-coatings"],
    cities: [
      { name: "Riyadh", slug: "riyadh" }, { name: "Jeddah", slug: "jeddah" },
      { name: "Dammam", slug: "dammam" }, { name: "Jubail", slug: "jubail" },
      { name: "Yanbu", slug: "yanbu" }, { name: "Mecca", slug: "mecca" },
      { name: "Medina", slug: "medina" }, { name: "Khobar", slug: "khobar" },
    ],
  },
  {
    name: "UAE", slug: "uae", region: "Middle East",
    industrialProfile: "Rapidly diversifying economy with petrochemicals, construction, food processing, and water treatment. Major industrial zones in Abu Dhabi and Dubai.",
    majorIndustries: ["oil-gas", "cement-construction", "wastewater-treatment", "food-beverage", "paints-coatings"],
    cities: [
      { name: "Dubai", slug: "dubai" }, { name: "Abu Dhabi", slug: "abu-dhabi" },
      { name: "Sharjah", slug: "sharjah" }, { name: "Ras Al Khaimah", slug: "ras-al-khaimah" },
      { name: "Fujairah", slug: "fujairah" }, { name: "Ajman", slug: "ajman" },
    ],
  },
  {
    name: "Indonesia", slug: "indonesia", region: "Southeast Asia",
    industrialProfile: "Southeast Asia's largest economy with major palm oil, textile, cement, paper, and food processing industries.",
    majorIndustries: ["textile-processing", "paper-pulp", "cement-construction", "food-beverage", "oil-gas", "wastewater-treatment"],
    cities: [
      { name: "Jakarta", slug: "jakarta" }, { name: "Surabaya", slug: "surabaya" },
      { name: "Bandung", slug: "bandung" }, { name: "Semarang", slug: "semarang" },
      { name: "Medan", slug: "medan" }, { name: "Tangerang", slug: "tangerang" },
      { name: "Bekasi", slug: "bekasi" }, { name: "Cikarang", slug: "cikarang" },
      { name: "Karawang", slug: "karawang" }, { name: "Makassar", slug: "makassar" },
    ],
  },
  {
    name: "Thailand", slug: "thailand", region: "Southeast Asia",
    industrialProfile: "Major manufacturing hub in Southeast Asia with automotive, food processing, textile, and petrochemical industries.",
    majorIndustries: ["food-beverage", "textile-processing", "wastewater-treatment", "paints-coatings", "sugar-fermentation", "cement-construction"],
    cities: [
      { name: "Bangkok", slug: "bangkok" }, { name: "Chonburi", slug: "chonburi" },
      { name: "Rayong", slug: "rayong" }, { name: "Samut Prakan", slug: "samut-prakan" },
      { name: "Chiang Mai", slug: "chiang-mai" }, { name: "Nakhon Ratchasima", slug: "nakhon-ratchasima" },
      { name: "Khon Kaen", slug: "khon-kaen" }, { name: "Hat Yai", slug: "hat-yai" },
    ],
  },
  {
    name: "Vietnam", slug: "vietnam", region: "Southeast Asia",
    industrialProfile: "Fast-growing manufacturing economy with strong textile, food processing, and electronics sectors. Major industrial zones in Ho Chi Minh City and Hanoi regions.",
    majorIndustries: ["textile-processing", "food-beverage", "wastewater-treatment", "paper-pulp", "cement-construction", "pharma-biotech"],
    cities: [
      { name: "Ho Chi Minh City", slug: "ho-chi-minh-city" }, { name: "Hanoi", slug: "hanoi" },
      { name: "Da Nang", slug: "da-nang" }, { name: "Hai Phong", slug: "hai-phong" },
      { name: "Binh Duong", slug: "binh-duong" }, { name: "Dong Nai", slug: "dong-nai" },
      { name: "Can Tho", slug: "can-tho" }, { name: "Bac Ninh", slug: "bac-ninh" },
    ],
  },
  {
    name: "Malaysia", slug: "malaysia", region: "Southeast Asia",
    industrialProfile: "Diversified manufacturing economy with palm oil processing, electronics, petrochemicals, and rubber industries.",
    majorIndustries: ["oil-gas", "food-beverage", "wastewater-treatment", "paints-coatings", "pharma-biotech", "paper-pulp"],
    cities: [
      { name: "Kuala Lumpur", slug: "kuala-lumpur" }, { name: "Penang", slug: "penang" },
      { name: "Johor Bahru", slug: "johor-bahru" }, { name: "Shah Alam", slug: "shah-alam" },
      { name: "Ipoh", slug: "ipoh" }, { name: "Kuantan", slug: "kuantan" },
      { name: "Kota Kinabalu", slug: "kota-kinabalu" }, { name: "Melaka", slug: "melaka" },
    ],
  },
  {
    name: "Philippines", slug: "philippines", region: "Southeast Asia",
    industrialProfile: "Growing manufacturing economy with food processing, cement, pharmaceutical, and electronics industries.",
    majorIndustries: ["food-beverage", "cement-construction", "pharma-biotech", "wastewater-treatment", "textile-processing"],
    cities: [
      { name: "Manila", slug: "manila" }, { name: "Cebu", slug: "cebu" },
      { name: "Davao", slug: "davao" }, { name: "Laguna", slug: "laguna" },
      { name: "Cavite", slug: "cavite" }, { name: "Batangas", slug: "batangas" },
    ],
  },
  {
    name: "Bangladesh", slug: "bangladesh", region: "South Asia",
    industrialProfile: "World's second-largest garment exporter with massive textile processing, growing pharmaceutical, and food processing sectors.",
    majorIndustries: ["textile-processing", "pharma-biotech", "food-beverage", "wastewater-treatment", "cement-construction", "paper-pulp"],
    cities: [
      { name: "Dhaka", slug: "dhaka" }, { name: "Chittagong", slug: "chittagong" },
      { name: "Gazipur", slug: "gazipur" }, { name: "Narayanganj", slug: "narayanganj" },
      { name: "Tongi", slug: "tongi" }, { name: "Comilla", slug: "comilla" },
      { name: "Rajshahi", slug: "rajshahi" }, { name: "Khulna", slug: "khulna" },
    ],
  },
  {
    name: "Pakistan", slug: "pakistan", region: "South Asia",
    industrialProfile: "Major textile manufacturing economy with growing cement, pharmaceutical, and food processing industries.",
    majorIndustries: ["textile-processing", "cement-construction", "pharma-biotech", "food-beverage", "sugar-fermentation", "wastewater-treatment"],
    cities: [
      { name: "Karachi", slug: "karachi" }, { name: "Lahore", slug: "lahore" },
      { name: "Faisalabad", slug: "faisalabad" }, { name: "Islamabad", slug: "islamabad" },
      { name: "Sialkot", slug: "sialkot" }, { name: "Multan", slug: "multan" },
      { name: "Rawalpindi", slug: "rawalpindi" }, { name: "Gujranwala", slug: "gujranwala" },
    ],
  },
  {
    name: "Sri Lanka", slug: "sri-lanka", region: "South Asia",
    industrialProfile: "Growing industrial economy with tea processing, textile manufacturing, rubber, and food processing sectors.",
    majorIndustries: ["textile-processing", "food-beverage", "wastewater-treatment", "pharma-biotech"],
    cities: [
      { name: "Colombo", slug: "colombo" }, { name: "Kandy", slug: "kandy" },
      { name: "Galle", slug: "galle" }, { name: "Negombo", slug: "negombo" },
    ],
  },
  {
    name: "Nepal", slug: "nepal", region: "South Asia",
    industrialProfile: "Developing industrial base with cement, food processing, and textile manufacturing sectors.",
    majorIndustries: ["cement-construction", "food-beverage", "textile-processing", "wastewater-treatment"],
    cities: [
      { name: "Kathmandu", slug: "kathmandu" }, { name: "Biratnagar", slug: "biratnagar" },
      { name: "Birgunj", slug: "birgunj" }, { name: "Pokhara", slug: "pokhara" },
    ],
  },
  {
    name: "Egypt", slug: "egypt", region: "Africa",
    industrialProfile: "North Africa's largest industrial economy with textile, cement, food processing, and petrochemical sectors.",
    majorIndustries: ["textile-processing", "cement-construction", "food-beverage", "oil-gas", "wastewater-treatment", "pharma-biotech"],
    cities: [
      { name: "Cairo", slug: "cairo" }, { name: "Alexandria", slug: "alexandria" },
      { name: "Giza", slug: "giza" }, { name: "Port Said", slug: "port-said" },
      { name: "Suez", slug: "suez" }, { name: "Aswan", slug: "aswan" },
      { name: "Mansoura", slug: "mansoura" }, { name: "Tanta", slug: "tanta" },
    ],
  },
  {
    name: "South Africa", slug: "south-africa", region: "Africa",
    industrialProfile: "Africa's most industrialized economy with mining, petrochemicals, food processing, and manufacturing sectors.",
    majorIndustries: ["oil-gas", "cement-construction", "food-beverage", "wastewater-treatment", "paints-coatings", "paper-pulp"],
    cities: [
      { name: "Johannesburg", slug: "johannesburg" }, { name: "Cape Town", slug: "cape-town" },
      { name: "Durban", slug: "durban" }, { name: "Pretoria", slug: "pretoria" },
      { name: "Port Elizabeth", slug: "port-elizabeth" }, { name: "Richards Bay", slug: "richards-bay" },
    ],
  },
  {
    name: "Nigeria", slug: "nigeria", region: "Africa",
    industrialProfile: "West Africa's largest economy with oil & gas, cement, food processing, and growing manufacturing sectors.",
    majorIndustries: ["oil-gas", "cement-construction", "food-beverage", "wastewater-treatment", "paints-coatings"],
    cities: [
      { name: "Lagos", slug: "lagos" }, { name: "Abuja", slug: "abuja" },
      { name: "Port Harcourt", slug: "port-harcourt" }, { name: "Kano", slug: "kano" },
      { name: "Ibadan", slug: "ibadan" }, { name: "Ogun", slug: "ogun" },
    ],
  },
  {
    name: "Kenya", slug: "kenya", region: "Africa",
    industrialProfile: "East Africa's industrial hub with food processing, cement, textile, and growing pharmaceutical sectors.",
    majorIndustries: ["food-beverage", "cement-construction", "textile-processing", "wastewater-treatment", "pharma-biotech"],
    cities: [
      { name: "Nairobi", slug: "nairobi" }, { name: "Mombasa", slug: "mombasa" },
      { name: "Kisumu", slug: "kisumu" }, { name: "Nakuru", slug: "nakuru" },
      { name: "Thika", slug: "thika" }, { name: "Eldoret", slug: "eldoret" },
    ],
  },
  {
    name: "Australia", slug: "australia", region: "Oceania",
    industrialProfile: "Advanced industrial economy with mining, food processing, pharmaceutical, and water treatment sectors.",
    majorIndustries: ["wastewater-treatment", "food-beverage", "oil-gas", "paints-coatings", "pharma-biotech", "cement-construction"],
    cities: [
      { name: "Sydney", slug: "sydney" }, { name: "Melbourne", slug: "melbourne" },
      { name: "Brisbane", slug: "brisbane" }, { name: "Perth", slug: "perth" },
      { name: "Adelaide", slug: "adelaide" }, { name: "Newcastle", slug: "newcastle-au" },
      { name: "Geelong", slug: "geelong" }, { name: "Gladstone", slug: "gladstone" },
    ],
  },
  {
    name: "Canada", slug: "canada", region: "North America",
    industrialProfile: "Resource-rich industrial economy with oil & gas, pulp & paper, food processing, and mining sectors.",
    majorIndustries: ["oil-gas", "paper-pulp", "food-beverage", "wastewater-treatment", "cement-construction", "pharma-biotech"],
    cities: [
      { name: "Toronto", slug: "toronto" }, { name: "Montreal", slug: "montreal" },
      { name: "Vancouver", slug: "vancouver" }, { name: "Calgary", slug: "calgary" },
      { name: "Edmonton", slug: "edmonton" }, { name: "Ottawa", slug: "ottawa" },
      { name: "Hamilton", slug: "hamilton" }, { name: "Sarnia", slug: "sarnia" },
    ],
  },
  {
    name: "Russia", slug: "russia", region: "Europe",
    industrialProfile: "Major industrial economy with oil & gas, petrochemicals, paper & pulp, and heavy manufacturing sectors.",
    majorIndustries: ["oil-gas", "paper-pulp", "cement-construction", "wastewater-treatment", "food-beverage", "paints-coatings"],
    cities: [
      { name: "Moscow", slug: "moscow" }, { name: "Saint Petersburg", slug: "saint-petersburg" },
      { name: "Novosibirsk", slug: "novosibirsk" }, { name: "Yekaterinburg", slug: "yekaterinburg" },
      { name: "Kazan", slug: "kazan" }, { name: "Nizhny Novgorod", slug: "nizhny-novgorod" },
      { name: "Samara", slug: "samara" }, { name: "Omsk", slug: "omsk" },
    ],
  },
  {
    name: "Poland", slug: "poland", region: "Europe",
    industrialProfile: "Central Europe's growing industrial economy with food processing, chemical, pharmaceutical, and construction sectors.",
    majorIndustries: ["food-beverage", "pharma-biotech", "cement-construction", "paints-coatings", "wastewater-treatment", "paper-pulp"],
    cities: [
      { name: "Warsaw", slug: "warsaw" }, { name: "Krakow", slug: "krakow" },
      { name: "Wroclaw", slug: "wroclaw" }, { name: "Gdansk", slug: "gdansk" },
      { name: "Poznan", slug: "poznan" }, { name: "Lodz", slug: "lodz" },
      { name: "Katowice", slug: "katowice" }, { name: "Szczecin", slug: "szczecin" },
    ],
  },
  {
    name: "Spain", slug: "spain", region: "Europe",
    industrialProfile: "Major European economy with food processing, pharmaceutical, chemical, and construction industries.",
    majorIndustries: ["food-beverage", "pharma-biotech", "cement-construction", "paints-coatings", "wastewater-treatment", "textile-processing"],
    cities: [
      { name: "Barcelona", slug: "barcelona" }, { name: "Madrid", slug: "madrid" },
      { name: "Valencia", slug: "valencia" }, { name: "Bilbao", slug: "bilbao" },
      { name: "Seville", slug: "seville" }, { name: "Zaragoza", slug: "zaragoza" },
    ],
  },
  {
    name: "Netherlands", slug: "netherlands", region: "Europe",
    industrialProfile: "Major European chemical and food processing hub with Rotterdam port driving petrochemical and industrial activity.",
    majorIndustries: ["paints-coatings", "food-beverage", "pharma-biotech", "oil-gas", "wastewater-treatment", "paper-pulp"],
    cities: [
      { name: "Rotterdam", slug: "rotterdam" }, { name: "Amsterdam", slug: "amsterdam" },
      { name: "Eindhoven", slug: "eindhoven" }, { name: "The Hague", slug: "the-hague" },
      { name: "Utrecht", slug: "utrecht" }, { name: "Groningen", slug: "groningen" },
    ],
  },
  {
    name: "Belgium", slug: "belgium", region: "Europe",
    industrialProfile: "Major European chemical hub with Antwerp port, pharmaceutical, and food processing industries.",
    majorIndustries: ["pharma-biotech", "paints-coatings", "food-beverage", "wastewater-treatment", "oil-gas"],
    cities: [
      { name: "Antwerp", slug: "antwerp" }, { name: "Brussels", slug: "brussels" },
      { name: "Ghent", slug: "ghent" }, { name: "Liege", slug: "liege" },
    ],
  },
  {
    name: "Switzerland", slug: "switzerland", region: "Europe",
    industrialProfile: "Precision manufacturing economy with world-leading pharmaceutical, chemical, and food processing sectors.",
    majorIndustries: ["pharma-biotech", "food-beverage", "paints-coatings", "wastewater-treatment"],
    cities: [
      { name: "Basel", slug: "basel" }, { name: "Zurich", slug: "zurich" },
      { name: "Geneva", slug: "geneva" }, { name: "Bern", slug: "bern" },
    ],
  },
  {
    name: "Sweden", slug: "sweden", region: "Europe",
    industrialProfile: "Advanced industrial economy with pulp & paper, pharmaceutical, and sustainable manufacturing sectors.",
    majorIndustries: ["paper-pulp", "pharma-biotech", "wastewater-treatment", "food-beverage", "paints-coatings"],
    cities: [
      { name: "Stockholm", slug: "stockholm" }, { name: "Gothenburg", slug: "gothenburg" },
      { name: "Malmö", slug: "malmo" }, { name: "Uppsala", slug: "uppsala" },
    ],
  },
  {
    name: "Finland", slug: "finland", region: "Europe",
    industrialProfile: "Major pulp & paper economy with growing pharmaceutical and food processing sectors.",
    majorIndustries: ["paper-pulp", "food-beverage", "wastewater-treatment", "pharma-biotech"],
    cities: [
      { name: "Helsinki", slug: "helsinki" }, { name: "Tampere", slug: "tampere" },
      { name: "Oulu", slug: "oulu" }, { name: "Turku", slug: "turku" },
    ],
  },
  {
    name: "Iran", slug: "iran", region: "Middle East",
    industrialProfile: "Major petrochemical and oil & gas economy with growing cement, textile, and food processing sectors.",
    majorIndustries: ["oil-gas", "cement-construction", "textile-processing", "food-beverage", "wastewater-treatment", "pharma-biotech"],
    cities: [
      { name: "Tehran", slug: "tehran" }, { name: "Isfahan", slug: "isfahan" },
      { name: "Tabriz", slug: "tabriz" }, { name: "Shiraz", slug: "shiraz" },
      { name: "Mashhad", slug: "mashhad" }, { name: "Ahvaz", slug: "ahvaz" },
      { name: "Bandar Abbas", slug: "bandar-abbas" }, { name: "Arak", slug: "arak" },
    ],
  },
  {
    name: "Iraq", slug: "iraq", region: "Middle East",
    industrialProfile: "Oil-rich economy with growing construction, cement, and water treatment sectors.",
    majorIndustries: ["oil-gas", "cement-construction", "wastewater-treatment", "food-beverage"],
    cities: [
      { name: "Baghdad", slug: "baghdad" }, { name: "Basra", slug: "basra" },
      { name: "Erbil", slug: "erbil" }, { name: "Sulaymaniyah", slug: "sulaymaniyah" },
    ],
  },
  {
    name: "Qatar", slug: "qatar", region: "Middle East",
    industrialProfile: "Major LNG and petrochemical economy with growing construction and water treatment sectors.",
    majorIndustries: ["oil-gas", "cement-construction", "wastewater-treatment", "food-beverage"],
    cities: [
      { name: "Doha", slug: "doha" }, { name: "Al Wakrah", slug: "al-wakrah" },
      { name: "Mesaieed", slug: "mesaieed" }, { name: "Ras Laffan", slug: "ras-laffan" },
    ],
  },
  {
    name: "Kuwait", slug: "kuwait", region: "Middle East",
    industrialProfile: "Oil-based economy with petrochemical, construction, and water treatment industries.",
    majorIndustries: ["oil-gas", "cement-construction", "wastewater-treatment"],
    cities: [
      { name: "Kuwait City", slug: "kuwait-city" }, { name: "Ahmadi", slug: "ahmadi" },
      { name: "Shuaiba", slug: "shuaiba" },
    ],
  },
  {
    name: "Oman", slug: "oman", region: "Middle East",
    industrialProfile: "Diversifying economy with oil & gas, cement, food processing, and growing industrial sectors.",
    majorIndustries: ["oil-gas", "cement-construction", "wastewater-treatment", "food-beverage"],
    cities: [
      { name: "Muscat", slug: "muscat" }, { name: "Sohar", slug: "sohar" },
      { name: "Salalah", slug: "salalah" }, { name: "Sur", slug: "sur" },
    ],
  },
  {
    name: "Argentina", slug: "argentina", region: "South America",
    industrialProfile: "Major South American economy with food processing, petrochemical, pharmaceutical, and textile industries.",
    majorIndustries: ["food-beverage", "oil-gas", "pharma-biotech", "textile-processing", "wastewater-treatment", "cement-construction"],
    cities: [
      { name: "Buenos Aires", slug: "buenos-aires" }, { name: "Córdoba", slug: "cordoba" },
      { name: "Rosario", slug: "rosario" }, { name: "Mendoza", slug: "mendoza" },
      { name: "Tucumán", slug: "tucuman" }, { name: "La Plata", slug: "la-plata" },
    ],
  },
  {
    name: "Colombia", slug: "colombia", region: "South America",
    industrialProfile: "Growing industrial economy with food processing, cement, textile, and petrochemical sectors.",
    majorIndustries: ["food-beverage", "cement-construction", "textile-processing", "oil-gas", "wastewater-treatment"],
    cities: [
      { name: "Bogotá", slug: "bogota" }, { name: "Medellín", slug: "medellin" },
      { name: "Cali", slug: "cali" }, { name: "Barranquilla", slug: "barranquilla" },
      { name: "Cartagena", slug: "cartagena" }, { name: "Bucaramanga", slug: "bucaramanga" },
    ],
  },
  {
    name: "Chile", slug: "chile", region: "South America",
    industrialProfile: "Mining-driven economy with growing food processing, pulp & paper, and chemical sectors.",
    majorIndustries: ["food-beverage", "paper-pulp", "cement-construction", "wastewater-treatment", "oil-gas"],
    cities: [
      { name: "Santiago", slug: "santiago" }, { name: "Valparaíso", slug: "valparaiso" },
      { name: "Concepción", slug: "concepcion" }, { name: "Antofagasta", slug: "antofagasta" },
    ],
  },
  {
    name: "Peru", slug: "peru", region: "South America",
    industrialProfile: "Resource-rich economy with mining, food processing, textile, and cement industries.",
    majorIndustries: ["food-beverage", "cement-construction", "textile-processing", "wastewater-treatment"],
    cities: [
      { name: "Lima", slug: "lima" }, { name: "Arequipa", slug: "arequipa" },
      { name: "Trujillo", slug: "trujillo" }, { name: "Callao", slug: "callao" },
    ],
  },
  {
    name: "Morocco", slug: "morocco", region: "Africa",
    industrialProfile: "North Africa's growing industrial hub with textile, food processing, pharmaceutical, and chemical sectors.",
    majorIndustries: ["textile-processing", "food-beverage", "pharma-biotech", "cement-construction", "wastewater-treatment"],
    cities: [
      { name: "Casablanca", slug: "casablanca" }, { name: "Tangier", slug: "tangier" },
      { name: "Rabat", slug: "rabat" }, { name: "Marrakech", slug: "marrakech" },
      { name: "Fez", slug: "fez" }, { name: "Kenitra", slug: "kenitra" },
    ],
  },
  {
    name: "Ethiopia", slug: "ethiopia", region: "Africa",
    industrialProfile: "Fast-growing economy with expanding textile, cement, food processing, and pharmaceutical sectors.",
    majorIndustries: ["textile-processing", "cement-construction", "food-beverage", "wastewater-treatment"],
    cities: [
      { name: "Addis Ababa", slug: "addis-ababa" }, { name: "Hawassa", slug: "hawassa" },
      { name: "Dire Dawa", slug: "dire-dawa" }, { name: "Mekelle", slug: "mekelle" },
    ],
  },
  {
    name: "Tanzania", slug: "tanzania", region: "Africa",
    industrialProfile: "Growing East African economy with cement, food processing, and textile manufacturing sectors.",
    majorIndustries: ["cement-construction", "food-beverage", "textile-processing", "wastewater-treatment"],
    cities: [
      { name: "Dar es Salaam", slug: "dar-es-salaam" }, { name: "Dodoma", slug: "dodoma" },
      { name: "Mwanza", slug: "mwanza" }, { name: "Arusha", slug: "arusha" },
    ],
  },
  {
    name: "Ghana", slug: "ghana", region: "Africa",
    industrialProfile: "West African industrial hub with food processing, cement, oil & gas, and growing manufacturing sectors.",
    majorIndustries: ["food-beverage", "cement-construction", "oil-gas", "wastewater-treatment"],
    cities: [
      { name: "Accra", slug: "accra" }, { name: "Kumasi", slug: "kumasi" },
      { name: "Tema", slug: "tema" }, { name: "Takoradi", slug: "takoradi" },
    ],
  },
];

// ─── Merge Expanded Cities ────────────────────────────────────────
import { additionalIndianCities, additionalInternationalCities } from "./locationsExpanded";
import { moreInternationalCities } from "./locationsExpanded2";
import { expansion3Indian } from "./locationsExpanded3";
import { expansion4Indian, expansion4International } from "./locationsExpanded4";

// Merge additional Indian cities into states
for (const state of states) {
  const extra = additionalIndianCities[state.slug];
  if (extra) {
    const existingSlugs = new Set(state.cities.map((c) => c.slug));
    for (const city of extra) {
      if (!existingSlugs.has(city.slug)) {
        state.cities.push(city);
      }
    }
  }
}

// Merge additional international cities into countries
for (const country of countries) {
  const extra = additionalInternationalCities[country.slug];
  if (extra) {
    const existingSlugs = new Set(country.cities.map((c) => c.slug));
    for (const city of extra) {
      if (!existingSlugs.has(city.slug)) {
        country.cities.push(city);
      }
    }
  }
  // Second expansion
  const extra2 = moreInternationalCities[country.slug];
  if (extra2) {
    const existingSlugs = new Set(country.cities.map((c) => c.slug));
    for (const city of extra2) {
      if (!existingSlugs.has(city.slug)) {
        country.cities.push(city);
      }
    }
  }
}

// Merge extra Indian industrial area cities
const indiaExtraMap: Record<string, string> = {
  "india-extra-gujarat": "gujarat",
  "india-extra-maharashtra": "maharashtra",
  "india-extra-tamil-nadu": "tamil-nadu",
};
for (const [key, stateSlug] of Object.entries(indiaExtraMap)) {
  const extra = moreInternationalCities[key];
  const state = states.find((s) => s.slug === stateSlug);
  if (extra && state) {
    const existingSlugs = new Set(state.cities.map((c) => c.slug));
    for (const city of extra) {
      if (!existingSlugs.has(city.slug)) {
        state.cities.push(city);
      }
    }
  }
}

// Merge expansion3 Indian cities
for (const state of states) {
  const extra = expansion3Indian[state.slug];
  if (extra) {
    const existingSlugs = new Set(state.cities.map((c) => c.slug));
    for (const city of extra) {
      if (!existingSlugs.has(city.slug)) {
        state.cities.push(city);
      }
    }
  }
}

// Merge expansion4 Indian cities
for (const state of states) {
  const extra = expansion4Indian[state.slug];
  if (extra) {
    const existingSlugs = new Set(state.cities.map((c) => c.slug));
    for (const city of extra) {
      if (!existingSlugs.has(city.slug)) {
        state.cities.push(city);
      }
    }
  }
}

// Merge expansion4 international cities
for (const country of countries) {
  const extra = expansion4International[country.slug];
  if (extra) {
    const existingSlugs = new Set(country.cities.map((c) => c.slug));
    for (const city of extra) {
      if (!existingSlugs.has(city.slug)) {
        country.cities.push(city);
      }
    }
  }
}

// ─── Derived Helpers ──────────────────────────────────────────────

export function getAllCities(): { state: StateData; city: CityData }[] {
  return states.flatMap((s) => s.cities.map((c) => ({ state: s, city: c })));
}

export function getStateBySlug(slug: string): StateData | undefined {
  return states.find((s) => s.slug === slug);
}

export function getCityInState(
  stateSlug: string,
  citySlug: string
): { state: StateData; city: CityData } | undefined {
  const state = getStateBySlug(stateSlug);
  if (!state) return undefined;
  const city = state.cities.find((c) => c.slug === citySlug);
  if (!city) return undefined;
  return { state, city };
}

export function getCountryBySlug(slug: string): CountryData | undefined {
  return countries.find((c) => c.slug === slug);
}

export function getCityInCountry(
  countrySlug: string,
  citySlug: string
): { country: CountryData; city: CityData } | undefined {
  const country = getCountryBySlug(countrySlug);
  if (!country) return undefined;
  const city = country.cities.find((c) => c.slug === citySlug);
  if (!city) return undefined;
  return { country, city };
}

export function getAllInternationalCities(): { country: CountryData; city: CityData }[] {
  return countries.flatMap((c) => c.cities.map((ci) => ({ country: c, city: ci })));
}
