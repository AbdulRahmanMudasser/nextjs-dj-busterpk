// No TypeScript type imports
// import { Product, Category } from '../types';

export const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    nameUrdu: 'الیکٹرانکس',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 156
  },
  {
    id: 'fashion',
    name: 'Fashion',
    nameUrdu: 'فیشن',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 89
  },
  {
    id: 'home',
    name: 'Home & Garden',
    nameUrdu: 'گھر اور باغ',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 234
  },
  {
    id: 'beauty',
    name: 'Beauty',
    nameUrdu: 'خوبصورتی',
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 67
  },
  {
    id: 'sports',
    name: 'Sports',
    nameUrdu: 'کھیل',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 123
  },
  {
    id: 'books',
    name: 'Books',
    nameUrdu: 'کتابیں',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 45
  }
];

export const featuredProducts = [
  {
    id: '1',
    name: 'Samsung Galaxy A54 5G',
    nameUrdu: 'سامسنگ گلیکسی A54',
    price: 89999,
    originalPrice: 99999,
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'electronics',
    rating: 4.5,
    reviews: 234,
    description: 'Latest Samsung smartphone with 5G connectivity and excellent camera quality',
    inStock: true
  },
  {
    id: '2',
    name: 'Nike Air Max 270',
    nameUrdu: 'نائیک ایئر میکس',
    price: 24999,
    originalPrice: 29999,
    image: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'fashion',
    rating: 4.8,
    reviews: 567,
    description: 'Comfortable running shoes with premium cushioning technology',
    inStock: true
  },
  {
    id: '3',
    name: 'HP Pavilion Gaming Laptop',
    nameUrdu: 'HP پولیئن گیمنگ لیپ ٹاپ',
    price: 159999,
    originalPrice: 179999,
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'electronics',
    rating: 4.3,
    reviews: 123,
    description: 'High-performance gaming laptop with dedicated graphics card',
    inStock: true
  },
  {
    id: '4',
    name: 'Wireless Bluetooth Headphones',
    nameUrdu: 'وائرلیس بلوٹوتھ ہیڈفونز',
    price: 8999,
    originalPrice: 12999,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'electronics',
    rating: 4.2,
    reviews: 89,
    description: 'Premium wireless headphones with noise cancellation',
    inStock: true
  },
  {
    id: '5',
    name: 'Cotton Kurta Set for Men',
    nameUrdu: 'مردوں کے لیے کاٹن کرتا سیٹ',
    price: 4999,
    originalPrice: 6999,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'fashion',
    rating: 4.6,
    reviews: 345,
    description: 'Traditional Pakistani kurta made from premium cotton fabric',
    inStock: true
  },
  {
    id: '6',
    name: 'Electric Rice Cooker 1.8L',
    nameUrdu: 'الیکٹرک چاول پکانے والا',
    price: 7999,
    originalPrice: 9999,
    image: 'https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'home',
    rating: 4.4,
    reviews: 156,
    description: 'Automatic rice cooker with keep-warm function',
    inStock: true
  },
  {
    id: '7',
    name: 'Lawn 3-Piece Suit',
    nameUrdu: 'لان تھری پیس سوٹ',
    price: 3999,
    originalPrice: 5999,
    image: 'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'fashion',
    rating: 4.7,
    reviews: 278,
    description: 'Beautiful Pakistani lawn suit perfect for summer',
    inStock: true
  },
  {
    id: '8',
    name: 'Smart LED TV 43 Inch',
    nameUrdu: 'سمارٹ LED ٹی وی',
    price: 74999,
    originalPrice: 84999,
    image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'electronics',
    rating: 4.5,
    reviews: 198,
    description: 'Full HD Smart TV with built-in WiFi and streaming apps',
    inStock: true
  }
];

export const trendingProducts = [
  {
    id: '9',
    name: 'Instant Coffee Pack (12 sachets)',
    nameUrdu: 'انسٹنٹ کافی پیک',
    price: 899,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'food',
    rating: 4.1,
    reviews: 567,
    description: 'Premium instant coffee blend perfect for daily use',
    inStock: true
  },
  {
    id: '10',
    name: 'Stainless Steel Water Bottle',
    nameUrdu: 'سٹینلیس سٹیل پانی کی بوتل',
    price: 1499,
    originalPrice: 1999,
    image: 'https://images.pexels.com/photos/1335115/pexels-photo-1335115.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'home',
    rating: 4.3,
    reviews: 234,
    description: 'Insulated water bottle keeps drinks hot/cold for hours',
    inStock: true
  },
  {
    id: '11',
    name: 'Face Moisturizer with SPF',
    nameUrdu: 'چہرے کا موئسچرائزر',
    price: 2499,
    originalPrice: 2999,
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'beauty',
    rating: 4.6,
    reviews: 445,
    description: 'Daily face moisturizer with SPF 30 protection',
    inStock: true
  },
  {
    id: '12',
    name: 'Wireless Phone Charger',
    nameUrdu: 'وائرلیس فون چارجر',
    price: 3499,
    originalPrice: 4499,
    image: 'https://images.pexels.com/photos/4159613/pexels-photo-4159613.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'electronics',
    rating: 4.4,
    reviews: 189,
    description: 'Fast wireless charging pad compatible with all Qi devices',
    inStock: true
  }
];

export const allProducts = [
  ...featuredProducts,
  ...trendingProducts,
  {
    id: '13',
    name: 'Basmati Rice 5KG',
    nameUrdu: 'باسمتی چاول 5 کلو',
    price: 2199,
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'food',
    rating: 4.5,
    reviews: 789,
    description: 'Premium quality basmati rice, perfect for biryani and pulao',
    inStock: true
  },
  {
    id: '14',
    name: 'Prayer Mat with Compass',
    nameUrdu: 'نماز کی چٹائی قبلہ نما کے ساتھ',
    price: 1799,
    image: 'https://images.pexels.com/photos/8134830/pexels-photo-8134830.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'religious',
    rating: 4.8,
    reviews: 345,
    description: 'Beautiful prayer mat with built-in compass for Qibla direction',
    inStock: true
  },
  {
    id: '15',
    name: 'Pakistani Cricket Jersey',
    nameUrdu: 'پاکستانی کرکٹ جرسی',
    price: 3999,
    originalPrice: 4999,
    image: 'https://images.pexels.com/photos/1374719/pexels-photo-1374719.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'sports',
    rating: 4.7,
    reviews: 567,
    description: 'Official Pakistan cricket team jersey for fans',
    inStock: true
  }
];
