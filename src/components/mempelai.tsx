// src/components/Mempelai.tsx

export default function mempelai() {
  return (
    <section className="py-20 bg-white text-stone-800 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl mb-12 italic">Mempelai</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Mempelai Pria */}
          <div className="flex flex-col items-center" data-aos="fade-right">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-stone-200">
              <img 
                src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1000" 
                alt="Pria" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif mb-2">Faisal</h3>
            <p className="text-sm text-stone-500 italic mb-2">Putra dari Bapak X & Ibu Y</p>
          </div>

          {/* Mempelai Wanita */}
          <div className="flex flex-col items-center" data-aos="fade-left">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-stone-200">
              <img 
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000" 
                alt="Wanita" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif mb-2">Nisa</h3>
            <p className="text-sm text-stone-500 italic mb-2">Putri dari Bapak A & Ibu B</p>
          </div>

        </div>
      </div>
    </section>
  );
}