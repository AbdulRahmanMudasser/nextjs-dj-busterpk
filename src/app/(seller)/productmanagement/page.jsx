'use client';
import { useState } from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  Upload, 
  Edit3, 
  Trash2, 
  Eye,
  Package,
  ImageIcon,
  DollarSign,
  Tag
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// ----- Inline UI Components -----
const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg border bg-white text-black ${className}`}>{children}</div>
);
const CardContent = ({ children, className = "" }) => (
  <div className={className}>{children}</div>
);
const CardHeader = ({ children, className = "" }) => (
  <div className={`p-4 border-b ${className}`}>{children}</div>
);
const CardTitle = ({ children }) => (
  <h3 className="text-lg font-semibold">{children}</h3>
);
const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-500">{children}</p>
);
const Button = ({ children, className = "", variant = "default", size = "md", ...props }) => {
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };
  const sizes = {
    md: "px-4 py-2 text-sm",
    sm: "px-3 py-1 text-xs",
  };
  return (
    <button
      className={`rounded-md font-medium transition ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-500 ${className}`}
    {...props}
  />
);
const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
    {children}
  </label>
);
const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-500 ${className}`}
    {...props}
  />
);
const Badge = ({ children, variant = "default" }) => {
  const colors = {
    default: "bg-green-100 text-green-800",
    secondary: "bg-yellow-100 text-yellow-800",
    destructive: "bg-red-100 text-red-800",
  };
  return (
    <span className={`px-2 py-0.5 text-xs font-medium rounded ${colors[variant]}`}>
      {children}
    </span>
  );
};
const Select = ({ value, onChange, children }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-500"
  >
    {children}
  </select>
);
const Dialog = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

// ----- Data -----
const sampleProducts = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: 299.99,
    stock: 45,
    status: "active",
    image: "/placeholder.svg",
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: "2",
    name: "Organic Cotton T-Shirt",
    category: "Clothing",
    price: 29.99,
    stock: 120,
    status: "active",
    image: "/placeholder.svg",
    description: "Comfortable organic cotton t-shirt in various colors"
  },
  {
    id: "3",
    name: "Smart Home Security Camera",
    category: "Electronics",
    price: 159.99,
    stock: 8,
    status: "draft",
    image: "/placeholder.svg",
    description: "1080p HD security camera with mobile app integration"
  }
];

export default function ProductsPage() {
  const { toast } = useToast();
  const [products, setProducts] = useState(sampleProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
    toast({
      title: "Product deleted",
      description: "Product has been removed from your inventory.",
    });
  };

  const getStatusBadge = (status) => {
    const variants = {
      active: "default",
      draft: "secondary",
      inactive: "destructive"
    };
    return <Badge variant={variants[status]}>{status}</Badge>;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Product Management</h1>
          <p className="text-gray-500 mt-2">Manage your product catalog and inventory</p>
        </div>
        <Button onClick={() => setIsAddProductOpen(true)} className="bg-gradient-to-r from-blue-500 to-indigo-500">
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card><CardContent className="p-6"><div className="flex items-center"><Package className="h-8 w-8 text-blue-500" /><div className="ml-4"><p className="text-sm text-gray-500">Total Products</p><p className="text-2xl font-bold">{products.length}</p></div></div></CardContent></Card>
        <Card><CardContent className="p-6"><div className="flex items-center"><Tag className="h-8 w-8 text-green-500" /><div className="ml-4"><p className="text-sm text-gray-500">Active</p><p className="text-2xl font-bold">{products.filter(p => p.status === "active").length}</p></div></div></CardContent></Card>
        <Card><CardContent className="p-6"><div className="flex items-center"><Edit3 className="h-8 w-8 text-yellow-500" /><div className="ml-4"><p className="text-sm text-gray-500">Drafts</p><p className="text-2xl font-bold">{products.filter(p => p.status === "draft").length}</p></div></div></CardContent></Card>
        <Card><CardContent className="p-6"><div className="flex items-center"><DollarSign className="h-8 w-8 text-indigo-500" /><div className="ml-4"><p className="text-sm text-gray-500">Total Value</p><p className="text-2xl font-bold">${products.reduce((sum, p) => sum + (p.price * p.stock), 0).toLocaleString()}</p></div></div></CardContent></Card>
      </div>

      {/* Filters */}
      <Card><CardContent className="p-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10" />
        </div>
        <Select value={selectedCategory} onChange={setSelectedCategory}>
          <option value="all">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home">Home & Garden</option>
          <option value="Books">Books</option>
        </Select>
        <Button variant="outline"><Upload className="mr-2 h-4 w-4" /> Bulk Import</Button>
      </CardContent></Card>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center">
                <ImageIcon className="h-12 w-12 text-gray-400" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold truncate">{product.name}</h3>
                  {getStatusBadge(product.status)}
                </div>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-blue-600">${product.price}</span>
                  <span className="text-sm text-gray-500">Stock: {product.stock}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1"><Eye className="mr-1 h-3 w-3" /> View</Button>
                  <Button variant="outline" size="sm" className="flex-1"><Edit3 className="mr-1 h-3 w-3" /> Edit</Button>
                  <Button variant="outline" size="sm" onClick={() => handleDeleteProduct(product.id)} className="text-red-500 hover:bg-red-50"><Trash2 className="h-3 w-3" /></Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No products found</h3>
            <p className="text-gray-500 mb-4">{searchQuery || selectedCategory !== "all" ? "Try adjusting your search or filter criteria" : "Get started by adding your first product"}</p>
            <Button onClick={() => setIsAddProductOpen(true)}><Plus className="mr-2 h-4 w-4" /> Add Product</Button>
          </CardContent>
        </Card>
      )}

      <Dialog open={isAddProductOpen} onClose={() => setIsAddProductOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
        <AddProductForm onClose={() => setIsAddProductOpen(false)} />
      </Dialog>
    </div>
  );
}

function AddProductForm({ onClose }) {
  const { toast } = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({ title: "Product added", description: "Your new product has been added to the catalog." });
    onClose();
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2"><Label htmlFor="productName">Product Name</Label><Input id="productName" required /></div>
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select required><option value="">Select category</option><option value="electronics">Electronics</option><option value="clothing">Clothing</option><option value="home">Home & Garden</option><option value="books">Books</option></Select>
        </div>
      </div>
      <div className="space-y-2"><Label htmlFor="description">Description</Label><Textarea id="description" rows={3} /></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2"><Label htmlFor="price">Price ($)</Label><Input id="price" type="number" step="0.01" min="0" required /></div>
        <div className="space-y-2"><Label htmlFor="stock">Stock Quantity</Label><Input id="stock" type="number" min="0" required /></div>
        <div className="space-y-2"><Label htmlFor="sku">SKU</Label><Input id="sku" placeholder="Product SKU" /></div>
      </div>
      <div className="space-y-2">
        <Label>Product Images</Label>
        <div className="border-2 border-dashed rounded-lg p-6 text-center">
          <ImageIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-500 mb-2">Drag and drop images here, or click to browse</p>
          <Button variant="outline" type="button"><Upload className="mr-2 h-4 w-4" /> Upload Images</Button>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
        <Button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-500">Add Product</Button>
      </div>
    </form>
  );
}
