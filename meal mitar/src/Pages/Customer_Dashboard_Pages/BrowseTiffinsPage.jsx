import React from 'react';
import { 
  Search, MapPin, ChevronDown, Filter, Star, Package, Utensils 
} from 'lucide-react';

const BrowseTiffinsPage = () => {
  return (
    <>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Browse Tiffin Services</h1>
        <p className="text-gray-500 mt-1">Discover delicious homemade meals near you</p>
      </div>

      {/* Search Bar Row */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Main Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search by name, cuisine, or location..." 
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 transition-all"
          />
        </div>

        {/* Location Input */}
        <div className="w-full md:w-64 relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            defaultValue="Mumbai"
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 transition-all"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="w-full md:w-48 relative">
          <select className="w-full pl-4 pr-10 py-3 bg-white border border-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-100">
            <option>Relevance</option>
            <option>Price: Low to High</option>
            <option>Rating: High to Low</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
        </div>
      </div>

      {/* Content Layout: Filters + Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* --- Left Column: Filters --- */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-6">
            <div className="flex items-center gap-2 mb-6 text-gray-900">
              <Filter size={20} />
              <h3 className="font-bold text-lg">Filters</h3>
            </div>

            {/* Food Type */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Food Type</h4>
              <label className="flex items-center gap-3 text-gray-600 cursor-pointer hover:text-orange-600">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                <span className="text-sm">Vegetarian Only</span>
              </label>
            </div>

            {/* Service Type */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Service Type</h4>
              <div className="space-y-2">
                {['Delivery', 'Pickup', 'Dine In'].map((type) => (
                  <label key={type} className="flex items-center gap-3 text-gray-600 cursor-pointer hover:text-orange-600">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                    <span className="text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Price Range</h4>
              <div className="relative">
                <select className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm appearance-none cursor-pointer">
                  <option>All Prices</option>
                  <option>Under ₹100</option>
                  <option>₹100 - ₹200</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
              </div>
            </div>

            {/* Reset Button */}
            <button className="w-full py-2.5 border border-gray-200 text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-50 hover:text-black transition-colors">
              Reset Filters
            </button>
          </div>
        </div>

        {/* --- Right Column: Service Cards --- */}
        <div className="lg:col-span-3">
          <p className="text-gray-500 text-sm mb-4">3 services found</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Maharaja */}
            <ServiceCard 
              image="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              title="Maharaja Tiffin Service"
              rating="4.5"
              subtitle="North Indian"
              description="Authentic North Indian home-style meals prepared fresh daily"
              price="₹120"
              distance="1.2 km"
              tags={['Veg', 'Delivery', 'Pickup']}
            />

            {/* Card 2: South Indian */}
            <ServiceCard 
              image="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              title="South Indian Express"
              rating="4.7"
              subtitle="South Indian"
              description="Traditional South Indian meals with authentic flavors"
              price="₹100"
              distance="2.5 km"
              tags={['Veg', 'Delivery']}
            />

            {/* Example Card 3 */}
            <ServiceCard 
              image="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              title="Healthy Bites"
              rating="4.2"
              subtitle="Continental & Keto"
              description="Healthy, balanced meals for fitness enthusiasts."
              price="₹150"
              distance="3.0 km"
              tags={['Delivery', 'Pickup']}
            />

          </div>
        </div>

      </div>
    </>
  );
};

// --- Helper Component ---

const ServiceCard = ({ image, title, rating, subtitle, description, price, distance, tags }) => (
  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
    {/* Image */}
    <div className="h-48 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>

    {/* Content */}
    <div className="p-5">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-bold text-lg text-gray-900">{title}</h3>
        <div className="flex items-center gap-1 bg-green-50 text-green-700 px-1.5 py-0.5 rounded text-xs font-bold">
          <Star size={12} className="fill-green-700" />
          {rating}
        </div>
      </div>
      
      <p className="text-gray-500 text-sm mb-2">{subtitle}</p>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => {
          if (tag === 'Veg') {
            return (
              <span key={index} className="px-2 py-1 rounded border border-green-500 text-green-600 text-xs font-semibold">
                Veg
              </span>
            );
          }
          return (
            <span key={index} className="flex items-center gap-1 px-2 py-1 rounded bg-gray-100 text-gray-600 text-xs font-medium">
              {tag === 'Delivery' && <Package size={12} />}
              {tag === 'Pickup' && <Utensils size={12} />}
              {tag}
            </span>
          );
        })}
      </div>

      {/* Price & Action */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-orange-600">{price}</span>
            <span className="text-gray-400 text-xs">/meal</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400 text-xs mt-0.5">
            <MapPin size={12} />
            {distance}
          </div>
        </div>
        <button className="bg-[#EA580C] hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
          View Details
        </button>
      </div>
    </div>
  </div>
);

export default BrowseTiffinsPage;