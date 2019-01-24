SWD18 Semster1 WebTechnik Gruppenarbeit

Daniel Giczi 
Dong Xiaodi 

Arbeitaufteilung:

Daniel Giczi:
- Header
- Footer
- Startseite

Dong Xiaodi:
- Blog Übersicht
- Blog Detail

Setup Schritten:
- Voraussetzung ist aktuelle npm Version (5.6.0 / 6.6.0)
- Im Commandline den Ordner mit der package.json öffnen und Befehl 'npm i' ausführen
- Server lässt sich mit 'npm start' starten (eventuell 1x CTRL+C auf Windows wenn nicht Text 'Listening on port 3000' angezeigt wird)
- Webseite ist unter http://localhost:3000 erreichbar


Technisches Readme:
- Beim Commit wird die eingerichtete Heroku-App automatisch aktualisiert: https://swd18projekt.herokuapp.com/
- zum Starten des Servers ist im Terminal 'npm start' einzugeben. Seite startet unter localhost:3000
- Weitere CSS Dateien können frei im Ordner /public/css erstellt werden. Es ist empfehlenswert jede 
designteschnise Gruppierung in eigenen CSS-Datei umzusetzen: (ZB.blog-overview.css, blog-detail.css, 
slider.css, hero.css,...)  Diese werden automatisch bei jedem Request am <header> angefügt.
- Weitere Pages können in /pages/ anegelegt werden. Auch diese werden automatisc ermittelt. 
(zB bei Aufruf von '/' wird der Inhalt von home.html eingeblendet, bei /blog-detail die blog-detail.html)

Externe Resourcen
- Reset.css http://meyerweb.com/eric/tools/css/reset/ (Public domain)

Pexels.com - lizenzfreie Bilder
- https://www.pexels.com/photo/beef-bowl-cooking-cuisine-262897/
- https://www.pexels.com/photo/bowl-of-dimsum-688803/
- https://www.pexels.com/photo/woman-wearing-coat-762020/
- https://www.pexels.com/photo/face-facial-hair-fine-looking-guy-614810/
- https://www.pexels.com/photo/photo-of-woman-wearing-yellow-floral-top-871495/
- https://www.pexels.com/photo/man-portrait-old-artist-25758/
- https://www.pexels.com/photo/appetizer-bowl-chili-close-up-286283/
- https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
- https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
- https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260

- Icons in verwendung (Lizenzfrei)
    • https://www.iconfinder.com/icons/808990/chief_cook_food_kitchen_icon (Startseite)
    • https://www.iconfinder.com/icons/1471108/crest_crown_general_item_jwellery_kings_crown_office_icon (Startseite)
    • https://simpleicons.org facebook (Footer)
    • https://simpleicons.org twitter (Footer)

Datenschutz Muster
    https://www.wko.at/service/wirtschaftsrecht-gewerberecht/muster-informationspflichten-website-datenschutzerklaerung.html

Bewertungen:
    Die Community-Kommentare wurde aus dem Kommentarbereich dieses Amazon Artikels entnommen: https://www.amazon.de/Ich-bin-dann-mal-schlank/dp/3932908635