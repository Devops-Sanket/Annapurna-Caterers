// Annapurna Caterers Nashik data definitions

import thaliImg from './assets/images/mah_thali_royal_1779530547658.png';
import weddingImg from './assets/images/wedding_stage_decor_1779530564668.png';
import buffetImg from './assets/images/buffet_serving_setup_1779530582583.png';
import sweetImg from './assets/images/traditional_delicates_sweets_1779530601150.png';

export interface SpecialtyItem {
  id: string;
  name: string;
  cuisine: string;
  description: string;
  highlightItems: string[];
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
  image: string;
}

export interface EventShowcaseItem {
  id: string;
  title: string;
  description: string;
  backdropAccent: string;
  features: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  tags: string[];
  date: string;
}

export interface FoodPriceConfig {
  guestCount: number;
  cuisineType: string;
  servicesSelected: string[];
}

export const BUSINESS_INFO = {
  name: "Annapurna Caterers Nashik",
  marathiName: "अन्नपूर्णा केटरर्स नाशिक",
  shortName: "Annapurna Caterers",
  tagline: "Authentic Taste, Elegant Buffet Setups & Exceptional Hospitality",
  established: "2019",
  founder: "Annapurna Caterers Team",
  rating: 5.0,
  ratingCount: 42,
  capacity: "50 to 1000+ Guests",
  phone: "070409 63972",
  phoneIntl: "+91 70409 63972",
  whatsapp_business_phone: "+91 87668 60207",
  whatsapp_business_number: "918766860207",
  whatsapp_link: "https://wa.me/918766860207?text=Hi%20Annapurna%20Caterers,%20I'm%20interested%20in%20your%20catering%20services%20for%20an%20upcoming%20event%20in%20Nashik.",
  email: "annapurnacaterersnashik@gmail.com",
  address: "F. No 14, Tamboli Nagar, divyasai nagar, Hirawadi, Nashik, Maharashtra 422003",
  plusCode: "2R95+94 Nashik, Maharashtra",
  google_maps_url: "https://maps.google.com/maps?q=Tamboli+Nagar,+divyasai+nagar,+Hirawadi,+Nashik,+Maharashtra+422003&t=&z=15&ie=UTF8&iwloc=&output=embed",
  instagram_username: "annapurna_caterers_mh15",
  instagram_url: "https://www.instagram.com/annapurna_caterers_mh15/",
  whatsapp_business_url: "https://wa.me/918766860207?text=Hello%20Annapurna%20Caterers,%20I%20would%20like%20to%20inquire%20about%20catering%20services%20in%20Nashik",
  hours: "Open 24 hours",
  aboutText: "Planning a wedding, corporate event, or housewarming ceremony in Nashik? Make your celebration unforgettable with delicious, high-quality catering from Annapurna Caterers! We offer authentic taste, elegant buffet setups, and exceptional hospitality tailored to your special event. Get in touch with us today to discuss your customized menu and request a quote!"
};

export const CULINARY_SPECIALTIES: SpecialtyItem[] = [
  {
    id: "mah-cuisine",
    name: "Classic Maharashtrian Thali",
    cuisine: "Maharashtrian",
    description: "Authentic spicy, tangy and sweet Maharashtrian delights made with home-ground masalas.",
    highlightItems: ["Puran Poli with Sajuk Tup", "Katachi Amti", "Masale Bhaat", "Kothimbir Vadi", "Mattha"],
    image: thaliImg
  },
  {
    id: "mah-brahmin",
    name: "Maharashtrian Brahmin Satvik",
    cuisine: "Maharashtrian Brahmin",
    description: "Prepared traditional Brahmin-style without onion and garlic, maintaining highly auspicious Vedic purity.",
    highlightItems: ["Varana-Bhaat", "Aloo Paneer Curry", "Moong Dal Khichdi", "Shrikhand", "Khamang Kakdi"],
    image: thaliImg
  },
  {
    id: "guj-cuisine",
    name: "Royal Gujarati Thali",
    cuisine: "Gujarati",
    description: "A harmonious balance of sweet, sour, and savory flavors presented in traditional style.",
    highlightItems: ["Dhokla & Khandvi", "Gujarati Kadhi", "Ringan Nu Shak", "Phulka Rotli", "Basundi / Aamras"],
    image: sweetImg
  },
  {
    id: "punj-cuisine",
    name: "Spiced North Indian Feast",
    cuisine: "Punjabi",
    description: "Rich, aromatic and buttery dishes cooked with premium cashew pastes and fresh cottage cheese.",
    highlightItems: ["Paneer Butter Masala", "Dal Makhani", "Amritsari Kulcha", "Jeera Rice", "Pindi Chole"],
    image: buffetImg
  },
  {
    id: "raj-cuisine",
    name: "Traditional Mewari Cuisine",
    cuisine: "Rajasthani",
    description: "Rich desert delicacies cooked in pure desi ghee, keeping ancient culinary legacies alive.",
    highlightItems: ["Dal Baati Churma", "Gatte Ki Sabzi", "Ker Sangri", "Mirchi Vada", "Mawa Kachori"],
    image: sweetImg
  },
  {
    id: "marwari-cuisine",
    name: "Marwari Festive Buffet",
    cuisine: "Marwari",
    description: "A luxurious array of pure vegetarian royal treats carefully crafted for celebratory weddings.",
    highlightItems: ["Shahi Paneer", "Panchmel Dal", "Churma Ladoo", "Kadhi Pakoda", "Badam Halwa"],
    image: buffetImg
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "wedding",
    title: "Grand Wedding Catering",
    description: "Our hallmark service catering up to 1000+ guests. Featuring multi-cuisine live food stalls, elegant silver thali services, welcome drink mocktail bars, and premium dessert stations.",
    features: ["Customized Menu Designing", "Live Counter Interactive Exhibits", "VIP Buffet Services", "Elegant Uniformed Wait Staff", "Hygienic Traditional Preparation"],
    iconName: "Gift",
    image: weddingImg
  },
  {
    id: "birthday",
    title: "Birthday Party Special",
    description: "Delightful food menus focusing on young guests and adults alike. Quick-bites, cotton candy stalls, live pasta counters, and hygienic mini high-teas.",
    features: ["Kid-Friendly Non-Spicy Menus", "Popcorn & Ice-Cream Stalls", "Interactive Mocktail Bars", "Quick Buffet Logistics", "Clean Disposal Systems"],
    iconName: "PartyPopper",
    image: sweetImg
  },
  {
    id: "house-party",
    title: "Cozy House Parties",
    description: "Intimate catering designed for gatherings of 25 to 100 guests, bringing high-end hospitality directly to your dining table.",
    features: ["Compact Tabletop Buffets", "Multi-course Tasting Cards", "Post-Event Quick Cleanup", "Personal Chef Deployments", "Custom Starters & Platters"],
    iconName: "Home",
    image: thaliImg
  },
  {
    id: "house-warming",
    title: "House Warming (Vastu Pooja)",
    description: "Pure vegetarian traditional Satvik food prepared with strict adherence to purity, ideal after home-blessing poojas.",
    features: ["No Onion No Garlic Options", "Served in Traditional Bio-Plates", "Warm Festive Prasad Thalis", "Sajuk Tup Shira & Ladoos", "Polite Traditional Hospitalities"],
    iconName: "Sparkles",
    image: thaliImg
  },
  {
    id: "event-mgmt",
    title: "Complete Event Management",
    description: "End-to-end wedding, ritual, and banquet execution in Nashik. We look after stage setups, marigold mandap decors, sound systems, and flower paths.",
    features: ["Floral Entry Way Portals", "LED Ambient Mood Lighting", "Traditional Shenai & Music Setup", "Photographer Co-ordinations", "VIP Guest Welcomes"],
    iconName: "CalendarDays",
    image: weddingImg
  },
  {
    id: "home-delivery",
    title: "Hygienic Home Delivery",
    description: "Bulk packed warm meals or mini-buffet kits safely delivered in micro-leakproof premium containers directly to your doorstep for family celebrations.",
    features: ["Strict Thermal Insulation Pots", "Tamper-Evident Security Seals", "Pre-portioned Serving Utensils", "On-Time Navigational Execution", "Super Hygienic ISO Standards"],
    iconName: "Truck",
    image: buffetImg
  }
];

export const EVENT_SHOWCASE: EventShowcaseItem[] = [
  {
    id: "showcase-wedding-stage",
    title: "Imperial Floral Stage Decoration",
    description: "A beautiful fusion of fresh white jasmine strings and golden marigold arches, highlighted by soft amber LED projections, customized for elite Nashik weddings.",
    backdropAccent: "bg-amber-100/60",
    features: ["Handcrafted Floral Chandelier", "Royal Maharaja Seating Chairs", "Velvet Accent Drops", "Dynamic Backdrop Sizing"],
    image: weddingImg
  },
  {
    id: "showcase-mandap",
    title: "Traditional Maharashtrian Mandap Setup",
    description: "Authentic canopy layout using bamboo, organic banana leaf portals, warm clay diyas, and premium fabric drapings for sacred wedding pheras.",
    backdropAccent: "bg-saffron-50",
    features: ["Sacred Fire Kund Protection", "Authentic Rangoli Accent Path", "Traditional Shehnai Surround Sound", "Ghee-lit Brass Hanging Diya Pillars"],
    image: weddingImg
  },
  {
    id: "showcase-buffet-counter",
    title: "Golden Canopy Buffet Presentation",
    description: "Beautifully lit linear food islands framed by copper chaffing dishes, luxury linen runners, and elegant flower centerpieces keeping food highly appealing.",
    backdropAccent: "bg-amber-50",
    features: ["Copper-Heated Serving Platters", "Digital Item Name Placards", "Spotless Hygiene Glass Guards", "Custom Spice Aromatherapy Pillars"],
    image: buffetImg
  }
];

export const REVIEWS: TestimonialItem[] = [
  {
    id: "rev-1",
    name: "Rahul Jadhav",
    location: "Hirawadi, Nashik",
    text: "We booked Annapurna Caterers for our wedding celebration in Nashik and they exceeded every expectation! The authentic Maharashtrian dishes, puran poli, and live counters were delicious. All 400+ guests praised the hospitality and taste. Outstanding 5.0 service!",
    rating: 5,
    tags: ["Wedding", "Authentic Maharashtrian"],
    date: "5 days ago"
  },
  {
    id: "rev-2",
    name: "Snehal Tamboli",
    location: "Divyasai Nagar, Hirawadi, Nashik",
    text: "Annapurna Caterers managed our Housewarming (Vastu Shanti) ceremony. The satvik food without onion/garlic was divine, freshly prepared, and served with great respect. Cleanliness and presentation were top tier. Truly Nashik's best caterer!",
    rating: 5,
    tags: ["Housewarming", "Satvik Feast"],
    date: "2 weeks ago"
  },
  {
    id: "rev-3",
    name: "Nilesh Gaikwad",
    location: "Panchavati, Nashik",
    text: "We hired Annapurna Caterers for our annual corporate banquet (250 delegates). Punctual setup, elegant buffet counters, and delicious North Indian & Gujarati menu. The team is polite and very well-coordinated. Highly recommended!",
    rating: 5,
    tags: ["Corporate Event", "Buffet Setup"],
    date: "1 month ago"
  },
  {
    id: "rev-4",
    name: "Pooja Kulkarni",
    location: "Nashik Road, Nashik",
    text: "Remarkable catering experience! Their 24-hour phone support made planning our family anniversary dinner effortless. The gulab jamun, paneer gravy, and jeera rice were lip-smacking. Proud to have such a reliable caterer in Nashik!",
    rating: 5,
    tags: ["Family Celebration", "Gourmet Catering"],
    date: "1 month ago"
  }
];

export const GALLERY_PHOTOS = [
  {
    id: "g1",
    title: "Royal Maharashtrian Thali Banquet",
    category: "Cuisines",
    img: thaliImg
  },
  {
    id: "g2",
    title: "Elegant Mandap Entrance Setup",
    category: "Decoration",
    img: weddingImg
  },
  {
    id: "g3",
    title: "Premium Stainless Steel Chafing Buffet",
    category: "Catering",
    img: buffetImg
  },
  {
    id: "g4",
    title: "Desi Ghee Indian Sweets Table",
    category: "Cuisines",
    img: sweetImg
  },
  {
    id: "g5",
    title: "Sacred Traditional Phera Mandap",
    category: "Decoration",
    img: weddingImg
  },
  {
    id: "g6",
    title: "Assorted Gujarati Farsan Live Counter",
    category: "Catering",
    img: sweetImg
  }
];

export const FAQS = [
  {
    q: "Where is Annapurna Caterers located in Nashik and what are your operating hours?",
    a: "Annapurna Caterers is conveniently located at F. No 14, Tamboli Nagar, Divyasai Nagar, Hirawadi, Nashik, Maharashtra 422003 (Plus Code: 2R95+94). We are open 24 hours daily to take bookings, plan custom menus, and assist event hosts."
  },
  {
    q: "What types of events does Annapurna Caterers cater for?",
    a: "We cater all celebratory and formal gatherings across Nashik, including grand weddings, corporate conferences, housewarming (Vastu Pooja) ceremonies, birthday parties, and festive family dinners."
  },
  {
    q: "Do you specialize exclusively in pure vegetarian and satvik catering?",
    a: "Yes! Annapurna Caterers is committed to 100% pure vegetarian culinary excellence. We also offer dedicated Jain and Maharashtrian Brahmin Satvik menus prepared strictly without onion and garlic in sacred hygiene."
  },
  {
    q: "How can I request a customized menu and quotation?",
    a: "You can use our interactive Menu Estimator on this website, call us directly 24/7 at 070409 63972, or send a quick WhatsApp message to get a customized proposal within minutes!"
  }
];

export const LOCAL_SEO_KEYWORDS = [
  "Annapurna Caterers Nashik",
  "अन्नपूर्णा केटरर्स नाशिक",
  "Caterers in Hirawadi Nashik",
  "Wedding Caterers in Nashik",
  "Corporate Event Catering Nashik",
  "Housewarming Catering Nashik",
  "Pure Veg Caterers Nashik",
  "Best Caterers Near Me Nashik 422003",
  "Tamboli Nagar Divyasai Nagar Caterers"
];
