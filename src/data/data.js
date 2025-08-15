// Electronics Categories and Subcategories
export const electronicsCategories = {
  Computers: {
    Laptops: [],
    Desktops: [],
    Tablets: [],
    Components: [],
    Accessories: []
  },
  Gaming: {
    Consoles: [],
    Games: [],
    Accessories: [],
    VR: []
  },
  Mobile: {
    Smartphones: [],
    Tablets: [],
    Accessories: [],
    Smartwatches: []
  },
  Audio: {
    Headphones: [],
    Speakers: [],
    Earbuds: [],
    AudioAccessories: []
  },
  TV: {
    SmartTVs: [],
    OLED: [],
    QLED: [],
    Accessories: []
  },
  Appliances: {
    Kitchen: [],
    Laundry: [],
    Cooling: [],
    Cleaning: []
  },
  Cameras: {
    DSLR: [],
    Mirrorless: [],
    ActionCameras: [],
    Accessories: []
  },
  Peripherals: {
    Keyboards: [],
    Mice: [],
    Monitors: [],
    Printers: []
  }
};

// Countdown timers
export const countdownTimers = ["226 Days", "18 Hr", "45 Min", "57 Sc"];

// Hot categories
export const hotCategories = [
  { name: "Appliances", img: "Fridge.jpg", category: "Appliances", subcategory: "Kitchen" },
  { name: "Consoles", img: "playstation-5.jpg", category: "Gaming", subcategory: "Consoles" },
  { name: "Fridges", img: "Fridge.jpg", category: "Appliances", subcategory: "Kitchen" },
  { name: "Games", img: "GameCd.jpg", category: "Gaming", subcategory: "Games" },
  { name: "Irons", img: "iron.jpg", category: "Appliances", subcategory: "Cleaning" },
  { name: "Laptops", img: "Laptop.jpg", category: "Computers", subcategory: "Laptops" },
  { name: "Phones", img: "phone.jpeg", category: "Mobile", subcategory: "Smartphones" },
  { name: "TVs", img: "tv.jpg", category: "TV", subcategory: "SmartTVs" },
];

// Best picks
export const bestPicks = [
  {
    id: "1",
    name: "Oculus Quest 2",
    price: "$449.00",
    oldPrice: "$499.00",
    img: "oculus.jpg",
    category: "Gaming",
    subcategory: "VR"
  },
  {
    id: "2",
    name: "PlayStation 5",
    price: "$800.00",
    oldPrice: null,
    img: "playstation-5.jpg",
    category: "Gaming",
    subcategory: "Consoles"
  },
  {
    id: "3",
    name: "Fossil Gen 6",
    price: "$440.00",
    oldPrice: null,
    img: "fossil-gen.jpg",
    category: "Mobile",
    subcategory: "Smartwatches"
  },
  {
    id: "4",
    name: "Apple MacBook Air",
    price: "$880.00",
    oldPrice: null,
    img: "macbook.jpg",
    category: "Computers",
    subcategory: "Laptops"
  },
];

// Info bar items
export const infoBarItems = [
  {
    icon: "FaShippingFast",
    title: "Fast, Free Shipping",
    subtitle: "On order over $50"
  },
  {
    icon: "FaBox",
    title: "Next Day Delivery",
    subtitle: "Free – spend over $99"
  },
  {
    icon: "FaThumbsUp",
    title: "60-Day Free Returns",
    subtitle: "All shipping methods"
  },
  {
    icon: "FaPhoneAlt",
    title: "Expert Customer Service",
    subtitle: "Choose chat or call us"
  },
  {
    icon: "FaHeart",
    title: "Exclusive Brands",
    subtitle: "More exclusive products"
  }
];

// Featured products
export const featuredProducts = [
  {
    id: "1",
    name: "Oculus Quest 2",
    img: "oculus.jpg",
    price: "$449.00",
    oldPrice: "$499.00",
    description: "Experience immersive VR gaming with the Oculus Quest 2...",
    category: "Gaming",
    subcategory: "VR"
  },
  {
    id: "2",
    name: "PlayStation 5",
    img: "playstation-5.jpg",
    price: "$800.00",
    oldPrice: null,
    description: "Next-gen gaming starts with PlayStation 5...",
    category: "Computers",
    subcategory: "Consoles"
  },
  {
    id: "3",
    name: "Nintendo Switch",
    img: "switch.jpeg",
    price: "$299.00",
    oldPrice: "$349.00",
    description: "The Nintendo Switch transforms from home console to portable system...",
    category: "Gaming",
    subcategory: "Consoles"
  },
  {
    id: "4",
    name: "Logitech G Pro X",
    img: "logitechheadphones.jpg",
    price: "$119.00",
    oldPrice: "$149.00",
    description: "Professional-grade gaming headset...",
    category: "Computers",
    subcategory: "Peripherals"
  },
  {
    id: "5",
    name: "Xbox Series X",
    img: "xbox.jfif",
    price: "$499.00",
    oldPrice: "$599.00",
    description: "The fastest, most powerful Xbox ever...",
    category: "Computers",
    subcategory: "Consoles"
  },
  {
    id: "6",
    name: "Alienware Monitor",
    img: "monitor.jpg",
    price: "$329.00",
    oldPrice: "$399.00",
    description: "27-inch gaming monitor with 240Hz refresh rate...",
    category: "Computers",
    subcategory: "Computer components"
  },
  {
    id: "7",
    name: "Razer Keyboard",
    img: "keyboard2.jfif",
    price: "$99.00",
    oldPrice: "$129.00",
    description: "Mechanical gaming keyboard...",
    category: "Peripherals",
    subcategory: "Keyboards"
  },
  {
    id: "8",
    name: "Sony WH-1000XM5",
    img: "Camera.jpeg",
    price: "$379.00",
    oldPrice: "$399.00",
    description: "Industry-leading noise canceling headphones...",
    category: "Computers",
    subcategory: "Computer Components"
  },
  {
    id: "9",
    name: "Apple AirPods Pro",
    img: "airpodspro.jpg",
    price: "$249.00",
    oldPrice: "$279.00",
    description: "Active Noise Cancellation for immersive sound...",
    category: "Computers",
    subcategory: "Peripherals"
  },
  {
    id: "10",
    name: "SteelSeries Keyboard",
    img: "keyboard.jfif",
    price: "$59.00",
    oldPrice: "$79.00",
    description: "Affordable mechanical keyboard...",
    category: "Computers",
    subcategory: "Peripherals"
  }
  // ,
  // {
  //   id:"11",
  //   img:"rec-1.png",
  //   name: "Xxonor All Redundback IS Business Laptop", 
  //   price: "£400.00 ",
  //   oldPrice:"589.00",
  //   description:"Buissness Laptop",
  //   category: "Computers",
  //   subcategory: "Laptops"
  // },  
  // { 
  //   id:"12",
  //   img:"rec-2.jfif",
  //   name: "ASUS ROG Sims G7T Gaming Laptop", 
  //   price: "£1,000.00" ,
  //   oldPrice: "$1,949.00",
  //   description:"Gaming Laptop",
  //   category: "Computers",
  //   subcategory: "Laptops"
  // },
  //   { 
  //      id:"13",
  //   img:"rec-4.jfif",
  //   name: "HP Vutus 3+-cOTView Gaming Laptop", 
  //   price: "£1,000.00",
  //   oldPrice: "$918.00",
  //    description:"Gaming Laptop",
  //   category: "Computers",
  //   subcategory: "Laptops"
  // },
  //  { 
  //   id:"14",
  //   img:"rec-12.jfif",
  //   name: "LogInsin ESICO K800 Keyboards", 
  //   price: "£350.00",
  //   oldPrice:" $328.00",
  //    description:"Keyboards",
  //   category: "Computers",
  //   subcategory: "Peripherals"
  // },
  // { 
  //   id:"15",
  //   img:"graphics-cards.jpg",
  //   name: "NVIDEA GTX 910", 
  //   price: "£250.00 ",
  //   oldPrice:"$328.00",
  //    description:"Graphics Card",
  //   category: "Computers",
  //   subcategory: "Computer components"
  // },{ 
  //   id:"16",
  //   img:"hdd-drive.jpg",
  //   name: "SONY 128 GB HDD", 
  //   price: "£50.00 ",
  //   oldPrice:"$68.00",
  //    description:"Sony Hard Disk Drive",
  //   category: "Computers",
  //   subcategory: "Computer components"
  // },{ 
  //   id:"17",
  //   img:"PC.jpg",
  //   name: "Gaming PC", 
  //   price: "£250.00 ",
  //   oldPrice:"$368.00",
  //    description:"New Gaming PC",
  //   category: "Computers",
  //   subcategory: "PCs"
  // }
];

// PS5 Games
export const ps5Games = [
  { 
    img: "ps5mainimg.jpg", 
    title: "DemonSouls",
    category: "Gaming",
    subcategory: "Games"
  },
  { 
    img: "GTA5.jpg", 
    title: "GTA V",
    category: "Computers",
    subcategory: "Consoles"
  },
  { 
    img: "RedDead.jpg", 
    title: "Red Dead 2",
    category: "Computers",
    subcategory: "Consoles"
  }
];

// Top Appliances
export const topAppliances = [
  { 
    img: "appliance1.png", 
    name: "LG Artcool AC12BQ", 
    price: "$299.99",
    category: "Appliances",
    subcategory: "Cooling"
  },
  { 
    img: "Appliance2.png", 
    name: "Fridge", 
    price: "$399.99",
    category: "Appliances",
    subcategory: "Kitchen"
  },
  { 
    img: "Camera.jpeg",
    name: "Camera", 
    price: "$249.99",
    category: "Cameras",
    subcategory: "DSLR"
  },
  { 
    img: "Laundry.jpg",
    name: "Washing Machine", 
    price: "$199.99",
    category: "Appliances",
    subcategory: "Laundry"
  }
];

// Recommended Products
export const recommendedProducts = [
  { 
    img:"rec-1.png",
    name: "Xxonor All Redundback IS Business Laptop", 
    price: "£400.00 $540.00",
   category: "Computers",
    subcategory: "Laptops"
  },
  { 
    img:"rec-2.jfif",
    name: "ASUS ROG Sims G7T Gaming Laptop", 
    price: "£1,000.00 $1,949.00",
    category: "Computers",
    subcategory: "Laptops"
  },
  { 
    img:"rec-3.jfif",
    name: "HP EMTY 24 All in one", 
    price: "£200.00 $1,899.00",
    category: "Computers",
    subcategory: "Desktops"
  },
  { 
    img:"rec-4.jfif",
    name: "HP Vutus 3+-cOTView Gaming Laptop", 
    price: "£1,000.00 $918.00",
    category: "Computers",
    subcategory: "Laptops"
  },
  { 
    img:"rec-5.jfif",
    name: "HP Ziback Firefly 14 GB Ultrabook", 
    price: "£1,000.00 $1,619.00",
    category: "Computers",
    subcategory: "Laptops"
  },
  { 
    img:"rec-6.jfif",
    name: "Apple Pool Mini & Wi-Fi Apple iPad", 
    price: "$500.00 – $850.00",
    category: "Computers",
    subcategory: "Tablets"
  },
  { 
    img:"rec-7.jfif",
    name: "Lenovo Tab P21 Pro Android Tablets", 
    price: "£1,000.00 $899.00",
    category: "Computers",
    subcategory: "Tablets"
  },
  { 
    img:"rec-8.jfif",
    name: "Dell Latitude 7200 Windows Tablets", 
    price: "£1,400.00 $1,439.00",
    category: "Computers",
    subcategory: "Tablets"
  },
  { 
    img:"rec-9.jfif",
    name: "Kysicon Escape MAX40flex Printers & All-in One", 
    price: "£400.00 $588.00",
    category: "Computers",
    subcategory: "Peripherals"
  },
  { 
    img:"rec-10.jfif",
    name: "Canon Pinero AS 126640 Inkjet Printers", 
    price: "£200.00 $995.00",
    category: "Computers",
    subcategory: "Peripherals"
  },
  { 
    img:"rec-11.jfif",
    name: "HP LaserJet Pro MAX36h Laser Printers", 
    price: "£340.00 $289.00",
    category: "Computers",
    subcategory: "Peripherals"
  },
  { 
    img:"rec-12.jfif",
    name: "LogInsin ESICO K800 Keyboards", 
    price: "£350.00 $328.00",
    category: "Computers",
    subcategory: "Peripherals"
  }
];

// Shop by Categories
export const shopByCategories = [
  { 
    name: "Appliances", 
    img: "Appliance2.png",
    category: "Appliances",
    subcategory: "Kitchen"
  },
  { 
    name: "Chairs", 
    img: "Chair.webp",
    category: "Furniture",
    subcategory: "Office"
  },
  { 
    name: "Face", 
    img: "face.webp",
    category: "Beauty",
    subcategory: "Skincare"
  },
  { 
    name: "Gaming", 
    img: "Gaming.jpg",
    category: "Gaming",
    subcategory: "Consoles"
  },
  { 
    name: "Jumpers", 
    img: "jumpers.webp",
    category: "Clothing",
    subcategory: "Sweaters"
  },
  { 
    name: "Laptops", 
    img: "Laptop.jpg",
    category: "Computers",
    subcategory: "Laptops"
  },
  { 
    name: "Laundry", 
    img: "Laundry.jpg",
    category: "Appliances",
    subcategory: "Laundry"
  },
  { 
    name: "PCs", 
    img: "PC.jpg",
    category: "Computers",
    subcategory: "Desktops"
  },
  { 
    name: "Phones", 
    img: "phone.jpeg",
    category: "Mobile",
    subcategory: "Smartphones"
  },
  { 
    name: "Styling", 
    img: "styling.webp",
    category: "Beauty",
    subcategory: "Hair"
  },
  { 
    name: "Table", 
    img: "Tables.webp",
    category: "Furniture",
    subcategory: "Tables"
  },
  { 
    name: "Toys", 
    img: "toys.webp",
    category: "Toys",
    subcategory: "Games"
  }
];

export const catProducts = [
  {
    id: 1,
    name: "Cat Teetee Tent",
    category: "Pets",
    subcategory: "Cat Furniture",
    originalPrice: "$92.00",
    price: "$69.00",
    discount: "25%",
    image: "/images/cat-tent.jpg"
  },
  {
    id: 2,
    name: "Cat Scratching Post",
    category: "Pets",
    subcategory: "Cat Furniture",
    originalPrice: "$120.00",
    price: "$89.00",
    discount: "30%",
    image: "/images/cat-post.jpg"
  }
];
export const allproductsData=[
  ...featuredProducts,
...ps5Games,
...recommendedProducts,
];







