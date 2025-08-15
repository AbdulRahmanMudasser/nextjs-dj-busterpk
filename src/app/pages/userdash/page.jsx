import { useState, useEffect } from 'react';
import {
  User,
  ShoppingCart,
  Package,
  Search,
  Home,
  UserCircle,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Heart,
  Star
} from 'lucide-react';
import HomePage from '@/app/(home)/page';
import ProductsPage from '@/app/(shop)/products/page';
import CartPage from '@/app/(shop)/cart/page';
import ProfilePage from '@/app/account/profile/page';
import OrdersPage from '@/app/account/orders/page';
import LoginPage from '@/app/(auth)/login/page';
import CheckoutPage from '@/app/(shop)/checkout/page';

function UserPage() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [scrolled, setScrolled] = useState(false);

  const categories = [
    'All',
    'Electronics',
    'Fashion',
    'Home & Kitchen',
    'Beauty',
    'Sports',
    'Groceries'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedUser = localStorage.getItem('ecommerce_user');
    const savedCart = localStorage.getItem('ecommerce_cart');
    const savedOrders = localStorage.getItem('ecommerce_orders');

    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ecommerce_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('ecommerce_orders', JSON.stringify(orders));
  }, [orders]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.product.id !== productId));
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('ecommerce_user', JSON.stringify(userData));
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('ecommerce_user');
    setCurrentPage('home');
  };

  const handleCheckout = (orderData) => {
    const newOrder = {
      id: Date.now().toString(),
      items: cartItems,
      total: cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0),
      status: 'confirmed',
      date: new Date().toISOString(),
      shippingAddress: orderData.address,
      paymentMethod: orderData.paymentMethod,
    };

    setOrders(prev => [newOrder, ...prev]);
    setCartItems([]);
    setCurrentPage('orders');
  };

  const updateProfile = (updatedProfile) => {
    setUser(updatedProfile);
    localStorage.setItem('ecommerce_user', JSON.stringify(updatedProfile));
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const renderPage = () => {
    if (!isLoggedIn && currentPage !== 'home' && currentPage !== 'products' && currentPage !== 'login') {
      return <LoginPage onLogin={handleLogin} onNavigate={setCurrentPage} />;
    }

    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} addToCart={addToCart} searchQuery={searchQuery} />;
      case 'products':
        return <ProductsPage addToCart={addToCart} searchQuery={searchQuery} category={activeCategory} />;
      case 'cart':
        return (
          <CartPage
            items={cartItems}
            updateQuantity={updateCartQuantity}
            removeItem={removeFromCart}
            onCheckout={() => setCurrentPage('checkout')}
          />
        );
      case 'checkout':
        return (
          <CheckoutPage
            items={cartItems}
            user={user}
            onCheckout={handleCheckout}
            onBack={() => setCurrentPage('cart')}
          />
        );
      case 'profile':
        return (
          <ProfilePage
            user={user}
            onUpdateProfile={updateProfile}
            onLogout={handleLogout}
          />
        );
      case 'orders':
        return <OrdersPage orders={orders} />;
      case 'login':
        return <LoginPage onLogin={handleLogin} onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} addToCart={addToCart} searchQuery={searchQuery} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => {
                  setCurrentPage('home');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                  PakShop
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <button
                onClick={() => setCurrentPage('home')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === 'home'
                    ? 'bg-green-50 text-green-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                Home
              </button>
              <div className="relative">
                <button
                  onClick={() => setCategoriesOpen(!categoriesOpen)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 transition-all duration-200 ${
                    currentPage === 'products'
                      ? 'bg-green-50 text-green-600'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span>Categories</span>
                  {categoriesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {categoriesOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-50 border border-gray-100 animate-fadeIn">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveCategory(category);
                          setCurrentPage('products');
                          setCategoriesOpen(false);
                        }}
                        className={`flex items-center px-4 py-2.5 w-full text-left transition-all duration-200 ${
                          activeCategory === category
                            ? 'bg-green-50 text-green-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span className="truncate">{category}</span>
                        {activeCategory === category && (
                          <div className="ml-auto w-2 h-2 rounded-full bg-green-500"></div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => setCurrentPage('orders')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === 'orders'
                    ? 'bg-green-50 text-green-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                My Orders
              </button>
              <button
                onClick={() => setCurrentPage('profile')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === 'profile'
                    ? 'bg-green-50 text-green-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                Wishlist
              </button>
            </nav>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-4 hidden lg:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-all duration-200 bg-gray-50 hover:bg-white"
                />
              </div>
            </div>

            {/* User and Cart */}
            <div className="flex items-center space-x-3">
              {isLoggedIn ? (
                <button
                  onClick={() => setCurrentPage('profile')}
                  className="hidden sm:flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white font-medium">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                </button>
              ) : (
                <button
                  onClick={() => setCurrentPage('login')}
                  className="hidden sm:flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
                >
                  <User className="h-5 w-5" />
                  <span>Sign In</span>
                </button>
              )}
              
              <button
                onClick={() => setCurrentPage('cart')}
                className="relative p-2 rounded-full hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                <ShoppingCart className="h-5 w-5 text-gray-700" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm transition-all duration-200 bg-gray-50 hover:bg-white"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-slideDown">
            <div className="px-2 pt-2 pb-4 space-y-1">
              <button
                onClick={() => {
                  setCurrentPage('home');
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  currentPage === 'home' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Home className="h-5 w-5 mr-3" />
                <span className="font-medium">Home</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPage('products');
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  currentPage === 'products' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Package className="h-5 w-5 mr-3" />
                <span className="font-medium">Categories</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPage('orders');
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  currentPage === 'orders' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Package className="h-5 w-5 mr-3" />
                <span className="font-medium">My Orders</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPage('profile');
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  currentPage === 'profile' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Heart className="h-5 w-5 mr-3" />
                <span className="font-medium">Wishlist</span>
              </button>
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    setCurrentPage('profile');
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    currentPage === 'profile' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <UserCircle className="h-5 w-5 mr-3" />
                  <span className="font-medium">My Account</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setCurrentPage('login');
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    currentPage === 'login' ? 'bg-green-50 text-green-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <User className="h-5 w-5 mr-3" />
                  <span className="font-medium">Sign In</span>
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 pb-20 lg:pb-0">
        {renderPage()}
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-40">
        <div className="flex justify-around">
          <button
            onClick={() => setCurrentPage('home')}
            className={`flex flex-col items-center py-3 px-4 transition-all duration-200 ${
              currentPage === 'home' ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            <div className={`p-2 rounded-full ${currentPage === 'home' ? 'bg-green-50' : ''}`}>
              <Home className={`h-5 w-5 ${currentPage === 'home' ? 'text-green-600' : 'text-gray-500'}`} />
            </div>
            <span className="text-xs mt-1">Home</span>
          </button>
          <button
            onClick={() => setCurrentPage('products')}
            className={`flex flex-col items-center py-3 px-4 transition-all duration-200 ${
              currentPage === 'products' ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            <div className={`p-2 rounded-full ${currentPage === 'products' ? 'bg-green-50' : ''}`}>
              <Search className={`h-5 w-5 ${currentPage === 'products' ? 'text-green-600' : 'text-gray-500'}`} />
            </div>
            <span className="text-xs mt-1">Browse</span>
          </button>
          <button
            onClick={() => setCurrentPage('cart')}
            className={`flex flex-col items-center py-3 px-4 relative transition-all duration-200 ${
              currentPage === 'cart' ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            <div className={`p-2 rounded-full ${currentPage === 'cart' ? 'bg-green-50' : ''}`}>
              <ShoppingCart className={`h-5 w-5 ${currentPage === 'cart' ? 'text-green-600' : 'text-gray-500'}`} />
            </div>
            {cartItemCount > 0 && (
              <span className="absolute top-1 right-3 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {cartItemCount}
              </span>
            )}
            <span className="text-xs mt-1">Cart</span>
          </button>
          <button
            onClick={() => setCurrentPage('orders')}
            className={`flex flex-col items-center py-3 px-4 transition-all duration-200 ${
              currentPage === 'orders' ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            <div className={`p-2 rounded-full ${currentPage === 'orders' ? 'bg-green-50' : ''}`}>
              <Package className={`h-5 w-5 ${currentPage === 'orders' ? 'text-green-600' : 'text-gray-500'}`} />
            </div>
            <span className="text-xs mt-1">Orders</span>
          </button>
          <button
            onClick={() => setCurrentPage(isLoggedIn ? 'profile' : 'login')}
            className={`flex flex-col items-center py-3 px-4 transition-all duration-200 ${
              currentPage === 'profile' || currentPage === 'login' ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            <div className={`p-2 rounded-full ${currentPage === 'profile' || currentPage === 'login' ? 'bg-green-50' : ''}`}>
              <UserCircle className={`h-5 w-5 ${currentPage === 'profile' || currentPage === 'login' ? 'text-green-600' : 'text-gray-500'}`} />
            </div>
            <span className="text-xs mt-1">{isLoggedIn ? 'Profile' : 'Login'}</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default UserPage;