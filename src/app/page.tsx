export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-white text-white">
      <h1 className="text-5xl font-bold mb-4 bg-gray-800">CONTACTEZ L'AGENCE</h1>
      {/* Formulaire */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 bg-gray-800 rounded-[40px] items-stretch">
      
          {/* Colonne Gauche */}    
          <div className="flex flex-col">
              
              {/* Bloc Coordonnées */}
              <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">VOS COORDONNÉES</h2>
                  {/* Genre */}
                  <div className="flex gap-8 mb-4 mt-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="civilite" value="Mme" className="w-5 h-5 accent-white" />
                          <span>Mme</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="civilite" value="M" className="w-5 h-5 accent-white"/>
                          <span>M</span>
                      </label>
                  </div>
                  
                  {/* Informations Personnelles */}
                  <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Nom" className="p-3 rounded-full text-black bg-white outline-none px-6" />
                      <input type="text" placeholder="Prénom" className="p-3 rounded-full text-black bg-white outline-none px-6"/>
                  </div>
                  <input type="email" placeholder="Adresse mail" className="w-full p-3 rounded-full text-black bg-white mt-4 mb-4 outline-none px-6" />
                  <input type="tel" placeholder="Téléphone" className="w-full p-3 rounded-full text-black bg-white outline-none px-6" />
              </div>
              
              {/* Bloc Disponibilités */}
              <div className="p-6 mt-auto">
                  <h2 className="text-2xl font-bold mb-4">DISPONIBILITÉ POUR UNE VISITE</h2>
                  <div className="flex gap-3 items-center">
                      <select name="visit_day" className="p-5 text-lg text-black bg-white rounded-full outline-none px-4 cursor-pointer flex-1">
                          <option value="">Jour</option>
                          <option value="monday">Lundi</option>
                          <option value="tuesday">Mardi</option>
                          <option value="wednesday">Mercredi</option>
                          <option value="thursday">Jeudi</option>
                          <option value="friday">Vendredi</option>
                          <option value="saturday">Samedi</option>
                          <option value="sunday">Dimanche</option>
                      </select>
                      <select name="visit_hour" className="p-5 text-lg text-black bg-white rounded-full outline-none px-4 cursor-pointer w-24 flex-1">
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
                      <select name="visit_minute" className="p-5 text-lg text-black bg-white rounded-full outline-none px-4 cursor-pointer w-24 flex-1">
                          <option value="">Tranche</option>
                          <option value="0m">0m</option>
                          <option value="15m">15m</option>
                          <option value="30m">30m</option>
                          <option value="45m">45m</option>
                      </select>
                      <button className="bg-[#3F1486] text-white px-4 py-5 text-lg rounded-full hover:bg-opacity-90 transition-all font-bold uppercase leading-tight w-24 h-12 flex items-center justify-center text-center">
                        AJOUTER<br/>DISPO
                      </button>
                  </div>
              </div>
          </div>
              
          {/* Colonne Droite */}
          <div className="flex flex-col">
              
              {/* Bloc Message */}
              <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 uppercase">Votre message</h2>
                  {/* Types de message */}
                  <div className="flex gap-6 mb-6 mt-4 flex-wrap">
                      <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="messageType" value="visit" className="w-5 h-5 accent-white" />
                          <span>Demande de visite</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="messageType" value="call" className="w-5 h-5 accent-white"/>
                          <span>Être rappelé.e</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="messageType" value="photos" className="w-5 h-5 accent-white"/>
                          <span>Plus de photos</span>
                      </label>
                  </div>
                  {/* Entrée de message */}
                  <textarea placeholder="Votre message" className="bg-white w-full h-64 p-6 rounded-[40px] text-black outline-none resize-none"></textarea>
              </div>
                            
              {/* Bloc Envoie - Poussé vers le bas */}
              <div className="mt-auto flex justify-end p-6">
                  <button className="bg-[#FBAD18] text-white w-full md:w-[350px] py-4 text-2xl rounded-full hover:bg-opacity-90 transition-all font-black uppercase tracking-widest shadow-lg">
                    Envoyer
                  </button>
              </div>
          </div>
      </div>
    </main>
  );
}
