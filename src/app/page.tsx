export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        CONTACTEZ L'AGENCE
      </h1>
      <p className="text-lg text-gray-700">
        Formulaire
      </p>
      
      <div className="mt-10 p-10 bg-white rounded-3xl shadow-2xl border border-gray-200 w-full max-w-md">
        <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
          Aperçu du formulaire
        </h2>
        <div className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Nom" 
              className="w-full border-2 border-gray-100 text-gray-600 p-3 rounded-lg outline-none focus:border-blue-500 transition-all"
            />
          </div>
          <button className="w-full bg-[#FBAD18] text-white text-2xl font-bold py-4 rounded-lg shadow-lg hover:bg-neutral-950 hover:-translate-y-1 transition-all active:scale-95">
            Envoyer
          </button>
        </div>
      </div>
    </main>
  );
}
