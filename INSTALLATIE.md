# 🚀 FlowTab Installatie Gids

## Snelle Installatie (5 minuten)

### Stap 1: Bestanden Klaarzetten ✅
Je hebt al alle benodigde bestanden:
- ✅ `manifest.json` - Extensie configuratie
- ✅ `newtab.html` - Hoofdpagina  
- ✅ `popup.html` - Instellingen popup
- ✅ `README.md` - Documentatie
- ⚠️ `icons/` - Iconen (optioneel, werkt ook zonder)

### Stap 2: Chrome Extensie Installeren 🔧

1. **Open Chrome Extensies**
   - Ga naar `chrome://extensions/` in je adresbalk
   - Of: Menu (⋮) → Meer tools → Extensies

2. **Developer Mode Aanzetten**
   - Zet de "Developer mode" toggle aan (rechtsboven)
   - Je ziet nu extra knoppen verschijnen

3. **Extensie Laden**
   - Klik op **"Load unpacked"** (of "Uitgepakte extensie laden")
   - Navigeer naar je FlowTab project map
   - Selecteer de hele map (niet een individueel bestand!)
   - Klik "Selecteer map" of "Open"

4. **Verificatie**
   - FlowTab verschijnt nu in je extensie lijst
   - Je ziet een nieuwe extensie met de naam "FlowTab - Focus New Tab"
   - **Automatisch**: Een welkomstpagina wordt automatisch geopend met instructies! 🎉

### Stap 3: Testen 🎯

1. **Nieuwe Tab Openen**
   - Druk `Ctrl+T` (Windows) of `Cmd+T` (Mac)
   - Je ziet nu FlowTab in plaats van de standaard nieuwe tab!

2. **Features Testen**
   - ⏰ Klok en datum worden getoond
   - 💭 Een motiverende quote verschijnt
   - ✅ Voeg een taak toe in het invoerveld
   - ⏱️ Test de Focus Timer knop
   - 🧘 Probeer de Mini-Break functie
   - 🌅 Wissel van achtergrond

## Troubleshooting 🔧

### Probleem: "Manifest file is missing or unreadable"
**Oplossing**: Zorg dat `manifest.json` in de hoofdmap staat en geldig JSON bevat.

### Probleem: Extensie laadt niet
**Oplossing**: 
1. Controleer of alle bestanden aanwezig zijn
2. Herlaad de extensie: klik op het refresh icoon bij FlowTab
3. Check de Console voor errors (F12 → Console tab)

### Probleem: Nieuwe tab toont nog steeds standaard pagina
**Oplossing**:
1. Sluit alle tabs en open een nieuwe
2. Herstart Chrome volledig
3. Controleer of de extensie enabled is in `chrome://extensions/`

### Probleem: Taken worden niet opgeslagen
**Oplossing**: 
1. Controleer of de extensie storage permissions heeft
2. Test in een incognito venster
3. Clear browser cache en probeer opnieuw

## Extra Opties 🎨

### Iconen Toevoegen
1. Maak PNG bestanden: 16x16, 32x32, 48x48, 128x128 pixels
2. Plaats ze in de `icons/` map met namen: `icon16.png`, `icon32.png`, etc.
3. Herlaad de extensie

### Aanpassingen Maken
1. Edit `newtab.html` voor layout/styling wijzigingen
2. Pas JavaScript aan voor nieuwe functionaliteit  
3. Update `manifest.json` voor nieuwe permissions
4. Klik "Reload" bij de extensie na elke wijziging

## Klaar! 🎉

Je FlowTab extensie is nu geïnstalleerd en klaar voor gebruik. Elke nieuwe tab brengt je nu in een productieve, mindful mindset.

**Tip**: Bookmark deze installatie gids voor als je de extensie op andere computers wilt installeren!
