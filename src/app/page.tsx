import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      {/* Header */}
      <header className="bg-[#005eb8] text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Simple Logo Icon */}
            <div className="w-8 h-8 bg-[#c8102e] rounded-full flex items-center justify-center font-bold text-lg">
              P
            </div>
            <span className="text-xl font-bold tracking-tight">DogSmart</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link href="#" className="hover:text-gray-200 transition-colors">Shop</Link>
            <Link href="#" className="hover:text-gray-200 transition-colors">Services</Link>
            <Link href="#" className="hover:text-gray-200 transition-colors">Deals</Link>
            <Link href="#" className="hover:text-gray-200 transition-colors">Brands</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block hover:text-gray-200 font-medium">Sign In</button>
            <button className="bg-[#c8102e] hover:bg-[#a00d25] text-white px-4 py-2 rounded-full font-bold transition-colors text-sm">
              Cart (0)
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-blue-50 py-12 sm:py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#005eb8] leading-tight">
                Everything for <br/> your best friend.
              </h1>
              <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                From premium food to fun toys and professional services, we have everything you need to keep your pet happy and healthy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-[#c8102e] hover:bg-[#a00d25] text-white px-8 py-3 rounded-full font-bold text-lg transition-transform hover:scale-105">
                  Shop Now
                </button>
                <button className="bg-white border-2 border-[#005eb8] text-[#005eb8] hover:bg-blue-50 px-8 py-3 rounded-full font-bold text-lg transition-colors">
                  Book Service
                </button>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md md:max-w-full">
              {/* Placeholder Hero Image */}
              <div className="aspect-square md:aspect-video bg-gradient-to-br from-blue-200 to-blue-400 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden relative">
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                 <span className="text-blue-800 font-bold text-2xl opacity-50">Happy Pet Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Dog Food", color: "bg-orange-100" },
                { name: "Cat Food", color: "bg-green-100" },
                { name: "Toys", color: "bg-yellow-100" },
                { name: "Treats", color: "bg-pink-100" },
                { name: "Beds", color: "bg-purple-100" },
                { name: "Grooming", color: "bg-teal-100" },
                { name: "Fish", color: "bg-blue-100" },
                { name: "Reptile", color: "bg-emerald-100" },
              ].map((cat) => (
                <div key={cat.name} className={`${cat.color} rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-shadow cursor-pointer h-40`}>
                  <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center text-2xl">
                    🐾
                  </div>
                  <span className="font-bold text-gray-800">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Banner */}
        <section className="bg-[#005eb8] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Pet Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                <h3 className="text-2xl font-bold mb-4">Grooming</h3>
                <p className="mb-6 text-blue-100">Professional grooming to keep your pet looking and feeling their best.</p>
                <button className="text-white font-bold underline underline-offset-4 hover:text-blue-200">Book Appointment</button>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                <h3 className="text-2xl font-bold mb-4">Training</h3>
                <p className="mb-6 text-blue-100">Expert training classes for puppies and adult dogs of all levels.</p>
                <button className="text-white font-bold underline underline-offset-4 hover:text-blue-200">Find a Class</button>
              </div>
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                <h3 className="text-2xl font-bold mb-4">Veterinary</h3>
                <p className="mb-6 text-blue-100">Quality veterinary care to ensure your pet's long-term health.</p>
                <button className="text-white font-bold underline underline-offset-4 hover:text-blue-200">Find a Vet</button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Deals</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
                  <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                    Product Image
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-bold text-[#c8102e] mb-1">SALE</div>
                    <h3 className="font-bold text-gray-800 mb-2">Premium Dog Food - Chicken & Rice</h3>
                    <div className="flex items-end gap-2">
                      <span className="text-xl font-bold text-gray-900">$45.99</span>
                      <span className="text-sm text-gray-500 line-through mb-1">$59.99</span>
                    </div>
                    <button className="w-full mt-4 border border-[#005eb8] text-[#005eb8] font-bold py-2 rounded-lg hover:bg-blue-50 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold text-lg mb-4">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Corporate Responsibility</a></li>
              <li><a href="#" className="hover:text-white">Investor Relations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Track Order</a></li>
              <li><a href="#" className="hover:text-white">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Grooming</a></li>
              <li><a href="#" className="hover:text-white">Training</a></li>
              <li><a href="#" className="hover:text-white">Veterinary</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Stay Connected</h4>
            <p className="text-sm mb-4">Sign up for emails to get the latest news and deals.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-gray-800 border-none rounded px-3 py-2 text-sm w-full focus:ring-1 focus:ring-blue-500" />
              <button className="bg-[#c8102e] text-white px-4 py-2 rounded font-bold text-sm hover:bg-[#a00d25]">Sign Up</button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          &copy; 2025 DogSmart LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}