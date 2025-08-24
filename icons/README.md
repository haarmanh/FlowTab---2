# 🎨 FlowTab Icons

## ✅ Beschikbare Bestanden

- `icon.svg` - Originele SVG met animatie (voor ontwikkeling)
- `icon-static.svg` - Statische versie (voor PNG conversie)

## 🎯 Benodigde PNG Bestanden

Voor een complete extensie heb je deze PNG bestanden nodig:
- `icon16.png` - 16x16 pixels (extensie lijst)
- `icon32.png` - 32x32 pixels (Windows)
- `icon48.png` - 48x48 pixels (extensie management)
- `icon128.png` - 128x128 pixels (Chrome Web Store)

## 🔄 SVG naar PNG Converteren

### Optie 1: Online Converter (Makkelijkst)
1. Ga naar [SVG to PNG Converter](https://convertio.co/svg-png/)
2. Upload `icon-static.svg`
3. Stel de gewenste afmetingen in (16x16, 32x32, 48x48, 128x128)
4. Download de PNG bestanden
5. Hernoem ze naar `icon16.png`, `icon32.png`, etc.

### Optie 2: Inkscape (Gratis Software)
1. Download [Inkscape](https://inkscape.org/)
2. Open `icon-static.svg`
3. Ga naar File → Export PNG Image
4. Stel width/height in (16, 32, 48, 128)
5. Export voor elke gewenste grootte

### Optie 3: Browser Method
1. Open `icon-static.svg` in Chrome
2. Right-click → Inspect Element
3. In Console: Maak een canvas element en converteer SVG
4. Download als PNG

## 🎨 Icon Design Details

Het FlowTab icon bevat:
- **Gradient achtergrond** - FlowTab kleuren (#667eea → #764ba2)
- **Breathing cirkel** - Symboliseert mindfulness
- **Klok wijzers** - Focus op tijd management
- **Focus punten** - Minimale dots voor taken
- **Glasmorphism** - Moderne, premium uitstraling

## ⚡ Snelle Installatie

**Zonder PNG bestanden**: De extensie werkt ook zonder iconen (Chrome gebruikt standaard iconen)

**Met PNG bestanden**:
1. Converteer SVG naar PNG (zie boven)
2. Plaats PNG bestanden in deze directory
3. Herlaad extensie in `chrome://extensions/`

## 🔧 Troubleshooting

**Probleem**: Icons worden niet getoond
- Controleer bestandsnamen (exact: `icon16.png`, etc.)
- Controleer bestandsformaat (PNG, niet JPG/GIF)
- Herlaad de extensie

**Probleem**: Icons zien er wazig uit
- Gebruik de juiste pixel afmetingen
- Zorg voor scherpe SVG → PNG conversie
- Test verschillende converters
