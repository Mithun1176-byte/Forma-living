export function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-md border-t border-forma-text/10 pt-24 pb-12 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-4xl mb-6 text-forma-text">Forma Living</h2>
            <p className="text-white/60 max-w-sm mb-8">
              Handcrafted furniture blending Scandinavian minimalism with warm, tactile luxury. Designed to outlive trends.
            </p>
            <div className="flex gap-4">
              {/* Simple SVGs for Socials */}
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#collection" className="text-white/80 hover:text-white transition-colors">Collection</a></li>
              <li><a href="#craft" className="text-white/80 hover:text-white transition-colors">Craftsmanship</a></li>
              <li><a href="#materials" className="text-white/80 hover:text-white transition-colors">Materials</a></li>
              <li><a href="#showrooms" className="text-white/80 hover:text-white transition-colors">Showrooms</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Assistance</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Trade Program</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Forma Living. All rights reserved.</p>
          <p>Images sourced from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Unsplash</a> for demonstration purposes.</p>
        </div>
      </div>
    </footer>
  );
}
