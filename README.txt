SWD18 Semster1 WebTechnik Gruppenarbeit

Daniel Giczi 
Dong Xiaodi 

Arbeitaufteilung:

Daniel Giczi:
- Header
- Startseite: (Hero/Slider, 2-3 Reihe Blöcke)

Dong Xiaodi:
- Footer
- Blog Detail/Übersicht
- Eventuell Startseite unten weitere Text/Bild Inhalte

Style Vorgaben:
-Mobile First (Breakpoints: Smartphone-Ansicht bis 640, Tablet-Ansicht bis 1000, weitere zB bei 1200/1400.
Dazu Beispiel in /moile-first-bsp.css)
-englische Klassennamen; eventuell durch Bindestrich getrennt (zb: .container,.container-item,
.blog-overview,.blog-item)
-generell keine IDs

Technisches Readme:
- zum Starten des Servers ist im Terminal 'npm start' einzugeben. Seite startet unter localhost:3000
- Weitere CSS Dateien können frei im Ordner /public/css erstellt werden. Es ist empfehlenswert jede 
designteschnise Gruppierung in eigenen CSS-Datei umzusetzen: (ZB.blog-overview.css, blog-detail.css, 
slider.css, hero.css,...)  Diese werden automatisch bei jedem Request am <header> angefügt.
- Weitere Pages können in /pages/ anegelegt werden. Auch diese werden automatisc ermittelt. 
(zB bei Aufruf von '/' wird der Inhalt von home.html eingeblendet, bei /blog-detail die blog-detail.html

Externe Resourcen, Lizenzen:
- Reset.css http://meyerweb.com/eric/tools/css/reset/
- www.pexels.com Lizenzfreie Bilder

- Icons:
    • https://www.iconfinder.com/icons/1816095/chinese_dance_dragon_face_head_new_year_icon
    • https://www.iconfinder.com/icons/1816096/chinese_fan_new_year_icon
    • https://www.iconfinder.com/icons/808990/chief_cook_food_kitchen_icon (Startseite)