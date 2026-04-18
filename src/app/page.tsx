'use client'

import { submitForm } from './actions';

export default function Home() {
  async function handleSubmit(formData: FormData) {
    const result = await submitForm(formData);
    alert(result.message);
    if (result.success) {
      window.location.reload();
    }
  }

  return (
    <main className="min-h-screen w-full p-4 md:p-10 bg-white flex items-center justify-center">
        
    {/* Page */}
    <div className="relative w-full max-w-[1600px] min-h-[85vh] rounded-[50px] overflow-hidden shadow-2xl flex flex-col">
      
      {/* Bloc Arrière Plan */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/salon.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Le Contenu */}
      <form action={handleSubmit} className="relative z-10 p-8 md:p-16 text-white flex-1 flex flex-col">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-wide uppercase text-left">Contactez l'agence</h1>
        
        {/* Formulaire */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-1 items-stretch">
        
          {/* Colonne Gauche */}    
          <div className="flex flex-col">
              
              {/* Bloc Coordonnées */}
              <div className="p-6">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase text-white/90">Vos coordonnées</h2>
                  {/* Genre */}
                  <div className="flex gap-8 mb-4 mt-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="civilite" value="Mme" required className="w-5 h-5 accent-white" />
                          <span>Mme</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="civilite" value="M" required className="w-5 h-5 accent-white"/>
                          <span>M</span>
                      </label>
                  </div>
                  
                  {/* Informations Personnelles */}
                  <div className="grid grid-cols-2 gap-4">
                      <input type="text" name="nom" required placeholder="Nom" className="p-3 rounded-full text-black bg-white outline-none px-6 w-full" />
                      <input type="text" name="prenom" required placeholder="Prénom" className="p-3 rounded-full text-black bg-white outline-none px-6 w-full"/>
                  </div>
                  <input type="email" name="email" required placeholder="Adresse mail" className="w-full p-3 rounded-full text-black bg-white mt-4 mb-4 outline-none px-6" />
                  <input type="tel" name="telephone" required placeholder="Téléphone" className="w-full p-3 rounded-full text-black bg-white outline-none px-6" />
              </div>
              
              {/* Bloc Disponibilités */}
              <div className="p-6 mt-auto">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase text-white/90">Disponibilité pour une visite</h2>
                  <div className="flex gap-3 items-center flex-wrap">
                      <select name="visit_day" className="p-3 py-5 text-xl text-black bg-white rounded-full outline-none cursor-pointer flex-1">
                          <option value="">Jour</option>
                          <option value="Lundi">Lundi</option>
                          <option value="Mardi">Mardi</option>
                          <option value="Mercredi">Mercredi</option>
                          <option value="Jeudi">Jeudi</option>
                          <option value="Vendredi">Vendredi</option>
                          <option value="Samedi">Samedi</option>
                          <option value="Dimanche">Dimanche</option>
                      </select>
                      <select name="visit_hour" className="p-3 py-5 text-xl text-black bg-white rounded-full outline-none  cursor-pointer w-24 flex-1">
                          <option value="">heure</option>
                          <option value="7h">7h</option>
                          <option value="8h">8h</option>
                          <option value="9h">9h</option>
                          <option value="10h">10h</option>
                          <option value="11h">11h</option>
                          <option value="12h">12h</option>
                          <option value="13h">13h</option>
                          <option value="14h">14h</option>
                          <option value="15h">15h</option>
                          <option value="16h">16h</option>
                          <option value="17h">17h</option>
                          <option value="18h">18h</option>
                      </select>
                      <select name="visit_minute" className="p-3 py-5 text-xl text-black bg-white rounded-full outline-none cursor-pointer w-24 flex-1">
                          <option value="">Tranche</option>
                          <option value="00">0m</option>
                          <option value="15">15m</option>
                          <option value="30">30m</option>
                          <option value="45">45m</option>
                      </select>
                      <button type="button" className="bg-[#3F1486] text-white p-3 py-2 text-lg rounded-full hover:bg-opacity-90 transition-all font-bold uppercase leading-tight flex items-center justify-center text-center">
                        AJOUTER<br/>DISPO
                      </button>
                  </div>
              </div>
          </div>
              
          {/* Colonne Droite */}
          <div className="flex flex-col">
              
              {/* Bloc Message */}
              <div className="p-6">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase text-white/90">Votre message</h2>
                  {/* Types de message */}
                  <div className="flex gap-6 mb-6 mt-4 flex-wrap">
                      <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="messageType" value="Demande de visite" required className="w-5 h-5 accent-white" />
                          <span>Demande de visite</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="messageType" value="Etre rappelé" required className="w-5 h-5 accent-white"/>
                          <span>Être rappelé.e</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="messageType" value="Plus de photos" required className="w-5 h-5 accent-white"/>
                          <span>Plus de photos</span>
                      </label>
                  </div>
                  {/* Entrée de message */}
                  <textarea name="message" required placeholder="Votre message" className="bg-white w-full h-64 p-6 rounded-[40px] text-black outline-none resize-none"></textarea>
              </div>
                            
              {/* Bloc Envoie */}
              <div className="mt-auto flex justify-end p-6">
                  <button type="submit" className="bg-[#FBAD18] text-white w-full md:w-[350px] py-3 text-2xl rounded-full hover:bg-opacity-90 transition-all font-black uppercase tracking-widest shadow-lg">
                    Envoyer
                  </button>
              </div>
          </div>
        </div>
      </form>
    </div>
    </main>
  );
}
