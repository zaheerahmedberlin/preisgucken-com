// lib/blogFaqs.ts
// FAQ per blog post (slug -> Q&As), rendered by components/PostFaq.tsx as
// visible HTML plus matching FAQPage JSON-LD. Answers only restate what the
// post itself says — no prices (they go stale), no claims beyond the article.

export type Faq = { q: string; a: string };

export const BLOG_FAQS: Record<string, Faq[]> = {
  "sterlingsilber-vs-edelstahl-schmuck": [
    { q: "Was ist besser: Sterlingsilber oder Edelstahl?", a: "Edelstahl ist robust, läuft nicht an und verträgt Wasser, ist also ideal für den Alltag. Sterlingsilber hat einen warmen, klassischen Glanz, braucht aber mehr Pflege." },
    { q: "Ist Edelstahl nickelfrei?", a: "Nein, Edelstahl wie 316L enthält Nickel, gibt aber nur sehr wenig davon ab und ist deshalb für viele gut verträglich. Bei ausgeprägter Nickelallergie ist Titan eine Alternative." },
    { q: "Warum läuft Silber an?", a: "Silber reagiert mit Spuren von Schwefelverbindungen in der Luft zu dunklem Silbersulfid. Mit einem Silberputztuch lässt sich die Schicht leicht entfernen." },
    { q: "Kann ich Silberschmuck im Meer tragen?", a: "Besser nicht dauerhaft. Salzwasser greift Silber und Vergoldung an. Spüle den Schmuck danach mit klarem Wasser ab und trockne ihn." },
  ],
  "schmuck-kaufen-ratgeber": [
    { q: "Was bedeutet der Feingehalt 585 bei Gold?", a: "585 bedeutet 58,5 Prozent Goldanteil, das entspricht 14 Karat. 333 sind 8 Karat, 750 sind 18 Karat." },
    { q: "Wie lange hält vergoldeter Schmuck?", a: "Bei häufigem Tragen nutzt sich die dünne Goldschicht oft nach ein bis zwei Jahren ab. Vermeil hat eine dickere Schicht und hält meist länger. Sanfte Pflege verlängert die Haltbarkeit." },
    { q: "Woran erkenne ich echtes Silber?", a: "Echtes Sterlingsilber trägt meist einen „925“-Stempel. Seriöse Händler nennen außerdem Material und Gewicht in der Produktbeschreibung." },
    { q: "Wie pflege ich Schmuck richtig?", a: "Reinige Silber mit einem weichen Tuch, vergoldeten Schmuck sanft mit lauwarmer Seifenlauge und lagere alles trocken und getrennt. Nimm Schmuck zum Duschen, Schwimmen und Sport ab." },
  ],
  "schmucksets-kaufen-ratgeber": [
    { q: "Lohnt sich ein Schmuckset?", a: "Meist ist das Set günstiger als die Einzelstücke und stilistisch abgestimmt. Vergleiche trotzdem den Setpreis mit den Einzelpreisen, denn nicht immer ist das Set günstiger." },
    { q: "Welche Teile gehören typischerweise in ein Schmuckset?", a: "Meist Kette und Ohrringe, oft auch ein Armband oder ein Ring. Sets mit Ring brauchen eine passende Größe oder ein verstellbares Modell." },
    { q: "Ist ein Schmuckset ein gutes Geschenk?", a: "Ja, weil es sofort vollständig wirkt und außer bei Ringen keine Größenangaben braucht. Frage nach Geschenkbox und Rückgabebedingungen." },
    { q: "Worauf achte ich bei Material im Set?", a: "Alle Teile sollten möglichst aus demselben Material bestehen. Bei empfindlicher Haut sind verträgliche Ohrringe aus Titan oder gutem Edelstahl wichtig." },
  ],
  "fusskettchen-kaufen-ratgeber": [
    { q: "Welche Länge hat ein Fußkettchen?", a: "Üblich sind 20 bis 28 cm. Miss den Knöchelumfang und rechne 1 bis 2 cm für einen bequemen Sitz dazu." },
    { q: "Kann ich ein Fußkettchen im Meer tragen?", a: "Beschichteter Edelstahl verträgt Wasser am besten. Silber und Vergoldung greift Salzwasser an, spüle sie nach dem Baden ab und trockne sie." },
    { q: "Wie verhindere ich, dass ich mein Fußkettchen verliere?", a: "Wähle einen sicheren Verschluss wie einen Karabiner, prüfe ihn regelmäßig und nimm bei viel Bewegung eine etwas kräftigere Kette." },
    { q: "Welches Material ist für Fußkettchen am besten?", a: "Für Dauertragen im Alltag und am Strand eignet sich beschichteter Edelstahl, der nicht schnell anläuft. Silber und Vergoldung brauchen mehr Pflege." },
  ],
  "armbaender-kaufen-ratgeber": [
    { q: "Wie messe ich mein Handgelenk für ein Armband?", a: "Lege ein weiches Maßband oder einen Papierstreifen locker um das Handgelenk, dort wo das Armband sitzen soll, und miss den Umfang in Zentimetern. Für Kettenarmbänder rechnest du 1 bis 2 cm für einen lockeren Sitz dazu." },
    { q: "Welche Armbandgröße habe ich bei einem Handgelenk zwischen zwei Größen?", a: "Wähle die größere Größe. Ein Armband mit etwas Spielraum sitzt bequemer als eines, das zu eng ist." },
    { q: "Karabiner- oder Magnetverschluss – was ist besser?", a: "Der Karabiner sitzt sicherer, besonders bei schweren Armbändern. Der Magnetverschluss lässt sich leichter und einhändig schließen." },
    { q: "Darf ich ein Armband beim Duschen tragen?", a: "Nur wenn es ausdrücklich wasserfest ist, zum Beispiel aus beschichtetem Edelstahl. Silber und Vermeil laufen bei Wasser, Schweiß und Kosmetik schneller an." },
  ],
  "ringe-kaufen-ratgeber": [
    { q: "Wie bestimme ich meine Ringgröße zuhause?", a: "Wickle einen schmalen Papierstreifen um die Basis des Fingers, markiere die Überlappung und miss die Länge in Millimetern. Das ist der Innenumfang, der der deutschen Ringgröße entspricht." },
    { q: "Was ist der Unterschied zwischen Umfang und Durchmesser bei Ringen?", a: "Der Umfang ist die Länge um den Finger, der Durchmesser die Weite des Rings. Es gilt Umfang ÷ 3,14 = Durchmesser. Ein Umfang von 54 mm entspricht etwa 17,2 mm Durchmesser." },
    { q: "Wann sollte ich einen Ring eine Größe größer kaufen?", a: "Bei breiten Ringen oder wenn du zwischen zwei Größen liegst, denn ein breiter Ring fühlt sich enger an als ein schmaler." },
    { q: "Kann ich einen Ring aus Edelstahl oder Titan ändern lassen?", a: "Meist nicht oder nur eingeschränkt. Gold- und Silberringe kann ein Goldschmied in der Regel weiten oder verengen." },
  ],
  "halsketten-kaufen-ratgeber": [
    { q: "Welche Kettenlänge ist die richtige?", a: "Für jeden Tag passt etwa 45 cm (Princess) zu den meisten Ausschnitten. Ein Choker misst 35 bis 40 cm, eine Matinee-Kette 50 bis 60 cm und eine Opera-Kette 60 bis 90 cm." },
    { q: "Wie messe ich die Länge einer Halskette?", a: "Miss die Kette von Ende zu Ende inklusive Verschluss. Für die passende Länge am Hals legst du eine Schnur um den Hals und misst sie nach." },
    { q: "Was ist der Unterschied zwischen Anker- und Panzerkette?", a: "Eine Ankerkette hat ovale, ineinander greifende Glieder, eine Panzerkette flache, eng anliegende Glieder und wirkt kräftiger." },
    { q: "Wie verhindere ich, dass sich Ketten verknoten?", a: "Lege oder hänge jede Kette einzeln ab, zum Beispiel in einer Schmuckbox mit Fächern oder an einem Schmuckständer." },
  ],
  "ohrringe-kaufen-ratgeber": [
    { q: "Welches Material ist für empfindliche Ohren am besten?", a: "Titan gilt als besonders gut verträglich, auch bei einer Ohrringallergie. Chirurgischer Edelstahl, Echtgold und Sterlingsilber sind weitere hautfreundliche Optionen." },
    { q: "Was sind Ohrclips?", a: "Ohrclips werden ohne Ohrloch getragen und mit leichtem Druck am Ohrläppchen gehalten. Sie eignen sich für alle, die keine Ohrlöcher haben." },
    { q: "Welche Ohrringe trage ich bei frisch gestochenen Ohrlöchern?", a: "Medizinische Erststecker aus Titan oder Chirurgenstahl mit stiftförmigem Innenteil. Wechsle erst nach der Heilung, die mehrere Monate dauern kann." },
    { q: "Stecker oder Creolen für den Alltag?", a: "Stecker sind dezent und praktisch für Büro und Alltag. Kleine Creolen sind eine auffälligere, aber ebenso alltagstaugliche Alternative." },
  ],
  "gartengeraete-kaufen-ratgeber": [
    { q: "Akku, Kabel oder Benzin – was ist für den Garten am besten?", a: "Akku-Geräte sind kabellos und leise und passen für kleine bis mittlere Gärten. Kabelgeräte liefern konstante Leistung nahe der Steckdose, Benzin-Geräte sind unabhängig vom Stromnetz und eignen sich für große Flächen, sind aber lauter." },
    { q: "Worauf kommt es bei einer Heckenschere an?", a: "Wichtig sind der Antrieb, die Messerlänge und der Zahnabstand, der bestimmt, wie dicke Zweige die Schere schneidet. Akku-Modelle sind praktisch für Randbereiche, Kabelmodelle liefern dauerhaft Leistung." },
    { q: "Welcher Schlauchdurchmesser ist für den Garten üblich?", a: "Üblich sind ½ Zoll, ⅝ Zoll und ¾ Zoll. Je dicker der Schlauch und je kürzer die Strecke, desto mehr Wasser kommt am Ende an." },
    { q: "Wie lagere ich Garten-Akkus im Winter?", a: "Kühl und trocken, am besten nicht komplett leer. Das schont die Zellen. Details stehen in der Anleitung des Herstellers." },
    { q: "Kann ich Akkus verschiedener Marken mischen?", a: "In der Regel nicht. Jeder Hersteller baut eine eigene Akku-Plattform, ein Akku passt nur in Geräte desselben Systems." },
  ],
  "messwerkzeuge-kaufen-ratgeber": [
    { q: "Welches Messwerkzeug brauche ich für den Haushalt?", a: "Für die meisten Aufgaben reichen ein Bandmaß, eine Wasserwaage und bei größeren Räumen ein Laser-Entfernungsmesser. Ein Messschieber lohnt sich, wenn du kleine Teile genau messen möchtest." },
    { q: "Wie genau ist ein Laser-Entfernungsmesser?", a: "Übliche Geräte messen bis zu etwa 50 Metern mit einer Genauigkeit von wenigen Millimetern. Die genauen Werte stehen im Datenblatt, und sehr günstige Geräte können ungenauer sein." },
    { q: "Wofür steht die Genauigkeitsklasse beim Maßband?", a: "Maßbänder werden in die Genauigkeitsklassen I bis III eingeteilt. Die Klasse steht am Anfang der Skala, Klasse I ist die genaueste." },
    { q: "Was ist der Unterschied zwischen einpoligem und zweipoligem Spannungsprüfer?", a: "Ein zweipoliger Spannungsprüfer gilt als Standard, um Spannungsfreiheit festzustellen. Ein einpoliger Phasenprüfer ist nur ein Hinweisgeber. Arbeiten an der Elektroinstallation gehören in die Hände einer Elektrofachkraft." },
  ],
  "kabel-und-adapter-kaufen-ratgeber": [
    { q: "Warum lädt mein USB-C-Kabel, überträgt aber keine Daten?", a: "Viele USB-C-Kabel sind reine Ladekabel und haben nicht die Leitungen für schnelle Datenübertragung. Achte beim Kauf auf die Angabe der Datenrate, zum Beispiel USB 3.2 oder USB4." },
    { q: "Welches HDMI-Kabel brauche ich für 4K mit 120 Hz?", a: "Dafür brauchst du ein als Ultra High Speed zertifiziertes HDMI-Kabel und einen Anschluss mit HDMI 2.1 am Gerät. Für 4K mit 60 Hz reicht in der Regel ein High-Speed-Kabel." },
    { q: "Wofür brauche ich ein USB-C-Kabel mit E-Marker?", a: "Für hohe Ladeleistungen über 60 Watt muss das Kabel einen E-Marker-Chip haben, der die zulässige Leistung meldet. Ohne ihn lädt das Gerät langsamer oder gar nicht." },
    { q: "Reicht Cat5e für mein Heimnetz?", a: "Für Gigabit-Netzwerke reicht Cat5e in der Regel. Cat6 und Cat6a bieten Reserve für schnellere Netze mit bis zu 10 Gbit/s." },
    { q: "Kann ich HDMI mit einem Adapter auf VGA umstellen?", a: "Ein bloßer Steckeradapter reicht nicht, weil das digitale Signal in ein analoges umgewandelt werden muss. Dafür brauchst du einen aktiven HDMI-VGA-Konverter." },
  ],
  "staubsauger-kaufen-ratgeber": [
    { q: "Beutel oder beutellos – was ist besser?", a: "Beutel sind hygienischer beim Entleeren, verursachen aber laufende Kosten. Beutellose Geräte sparen die Beutel, brauchen aber regelmäßige Filterreinigung. Allergiker fahren mit Beutel und gutem Filter oft besser." },
    { q: "Sagt die Wattzahl etwas über die Saugkraft aus?", a: "Nein, die Wattzahl zeigt vor allem die Stromaufnahme. Bodendüse, Bürste und Abdichtung beeinflussen die Reinigung ebenso stark." },
    { q: "Welcher Staubsauger ist für Allergiker geeignet?", a: "Ein Gerät mit HEPA-Filter und dichtem Gehäuse, das Staub und Pollen zurückhält. Beutelsauger sind beim Entleeren hygienischer." },
    { q: "Welcher Staubsauger ist für Tierhaare am besten?", a: "Geräte mit rotierender Bürste oder Turbodüse lösen Tierhaare besonders gut. Akku-Sauger mit Bürstenwalze sind bei Haustierbesitzern beliebt." },
  ],
  "monitor-oder-beamer-kaufratgeber": [
    { q: "Ist ein Beamer als Monitor fürs Homeoffice geeignet?", a: "Meist nicht für die tägliche Arbeit: Die Textschärfe ist geringer als bei einem Monitor, und das Bild braucht einen abgedunkelten Raum. Für Präsentationen und Meetings mit mehreren Personen ist ein Beamer dagegen gut geeignet." },
    { q: "Was ist besser zum Gaming: Monitor oder Beamer?", a: "Für schnelle Spiele ist ein Monitor besser, weil er kurze Reaktionszeiten und hohe Bildwiederholraten bietet. Ein Beamer punktet bei der Bildgröße, hat aber meist mehr Verzögerung." },
    { q: "Welche Monitorgröße passt zum Schreibtisch?", a: "Für den Schreibtisch sind 24 bis 27 Zoll üblich, für Gaming auch 27 bis 32 Zoll. Größere Monitore lohnen sich nur bei ausreichendem Sitzabstand." },
    { q: "Lohnt sich ein Beamer anstelle eines Fernsehers?", a: "Das hängt vom Raum ab: Ein Beamer liefert ein sehr großes Bild, braucht aber einen abgedunkelten Raum und Platz. Ein Fernseher ist auch bei Tageslicht hell und schneller eingerichtet." },
  ],
  "sofa-kaufen-ratgeber": [
    { q: "Wie viel Platz brauche ich vor und neben dem Sofa?", a: "Plane vor dem Sofa mindestens 90 bis 120 cm bis zum Couchtisch oder Fernseher ein und lasse für Durchgänge mindestens 60 cm frei. Das Sofa sollte maximal zwei Drittel der Wandbreite einnehmen." },
    { q: "Welche Sitzhöhe ist bei einem Sofa üblich?", a: "Bei den meisten Modellen liegt die Sitzhöhe zwischen 42 und 45 cm. Wer Knieprobleme hat oder leichter aufstehen möchte, wählt oft 46 bis 48 cm." },
    { q: "Was bedeutet das Raumgewicht bei der Sofa-Polsterung?", a: "Das Raumgewicht gibt an, wie dicht der Schaumstoff ist. Als grober Richtwert halten Polster unter 25 weniger lange formstabil, 30 bis 35 gelten als solide Alltagsqualität und ab 40 als hochwertig." },
    { q: "Stoff oder Leder – was ist besser für Familien mit Haustieren?", a: "Leder ist robust und leicht abwischbar, zeigt aber Kratzer. Stoffe sind günstiger und weicher, aber schwerer zu reinigen. Abnehmbare und waschbare Bezüge sind eine praktische Lösung." },
  ],
  "mesh-wlan-router-repeater-guide": [
    { q: "Mesh-WLAN oder Repeater – was ist besser?", a: "Ein Repeater ist die günstige Lösung für ein einzelnes Problemzimmer. Ein Mesh-System bildet ein gemeinsames Netz mit einem WLAN-Namen und eignet sich besser für größere Wohnungen oder mehrere Etagen mit vielen Geräten." },
    { q: "Was ist der Unterschied zwischen Repeater und Mesh-Repeater?", a: "Ein einfacher Repeater sendet ein eigenes Netz unter anderem Namen. Ein Mesh-Repeater bildet mit dem Router ein gemeinsames Netz, übernimmt dessen Einstellungen und verbindet Geräte automatisch mit dem besten Zugangspunkt." },
    { q: "Wo platziere ich einen WLAN-Repeater?", a: "Auf halber Strecke zwischen Router und Funkloch, an einer Stelle mit noch gutem Empfang, erhöht und frei, mit Abstand zu Heizkörpern, Metallflächen und Mikrowellen." },
    { q: "Brauche ich für Mesh-WLAN die gleiche Marke wie beim Router?", a: "Am zuverlässigsten funktionieren Mesh-Systeme, wenn sie vom selben Hersteller stammen oder ausdrücklich zum Router kompatibel sind." },
    { q: "Was ist Backhaul beim Mesh-WLAN?", a: "Backhaul ist die Verbindung zwischen den Mesh-Knoten und dem Router. Ein LAN-Kabel oder ein eigenes Funkband für diese Verbindung macht das Netz meist schneller und stabiler." },
  ],
  "schuhe-online-kaufen-groessentabelle": [
    { q: "Wie messe ich meine Fußlänge richtig?", a: "Stelle den Fuß auf ein Blatt Papier, die Ferse an die Wand, markiere die längste Stelle und miss den Abstand in Zentimetern. Miss am besten abends und beide Füße einzeln, der größere Wert zählt." },
    { q: "Wie berechne ich meine Schuhgröße aus der Fußlänge?", a: "Rechne (Fußlänge in cm + 1 bis 1,5 cm Zugabe) × 1,5. Bei 25 cm Fußlänge ergibt das etwa Größe 40. Prüfe zusätzlich immer die Größentabelle des Herstellers." },
    { q: "Sollte ich Sportschuhe eine Nummer größer kaufen?", a: "Viele Läufer wählen eine halbe bis eine Nummer größer, weil der Fuß beim Laufen anschwillt und die Zehen Spielraum brauchen. Probiere im Zweifel zwei Größen." },
    { q: "Wie lange kann ich Schuhe online zurückgeben?", a: "Bei Online-Käufen gilt in Deutschland in der Regel ein 14-tägiges Widerrufsrecht. Viele Händler gewähren mehr Zeit. Prüfe vor dem Kauf auch, wer die Rücksendekosten trägt." },
  ],
  "parfuem-kaufen-edt-edp-guide": [
    { q: "Was ist der Unterschied zwischen Eau de Toilette und Eau de Parfum?", a: "Der Unterschied liegt in der Konzentration des Parfümöls: Eau de Toilette enthält etwa 5 bis 15 Prozent, Eau de Parfum etwa 15 bis 20 Prozent. Ein Eau de Parfum duftet intensiver, hält länger und kostet meist mehr." },
    { q: "Wie lange hält ein Parfüm auf der Haut?", a: "Das hängt von der Konzentration ab: Eau de Cologne hält etwa 1 bis 2 Stunden, Eau de Toilette 3 bis 5 Stunden, Eau de Parfum 5 bis 8 Stunden und Parfum Extrait 8 Stunden oder länger. Haut, Duft und Anwendung beeinflussen das Ergebnis." },
    { q: "Wie bewahre ich Parfüm richtig auf?", a: "Kühl, dunkel und trocken, am besten nicht im Badezimmer. Wärme, Licht und Feuchtigkeit lassen den Duft schneller altern." },
    { q: "Kann ich Parfüm online kaufen, ohne es vorher zu riechen?", a: "Das ist möglich, aber riskant, weil ein Duft auf jeder Haut anders wirkt. Probiergrößen oder Miniaturen sind eine günstige Möglichkeit, einen Duft vor dem Kauf eines großen Flakons zu testen." },
  ],
  "bestes-preis-leistungs-verhaeltnis-finden": [
    { q: "Was bedeutet Preis-Leistungs-Verhältnis?", a: "Das Preis-Leistungs-Verhältnis beschreibt, wie viel Nutzen du für dein Geld bekommst. Es entsteht erst, wenn du Preis, Qualität, Lebensdauer, Folgekosten und Garantie gemeinsam bewertest." },
    { q: "Wie berechne ich den Preis pro Nutzungsjahr?", a: "Teile den Kaufpreis durch die erwartete Lebensdauer in Jahren. Ein Gerät für 100 €, das 5 Jahre hält, kostet 20 € pro Jahr, ein Gerät für 60 € mit 1,5 Jahren Lebensdauer dagegen 40 € pro Jahr." },
    { q: "Woran erkenne ich, ob ein Rabatt echt ist?", a: "Vergleiche den Preis mit dem Marktpreis mehrerer Händler und dem Preisverlauf, nicht mit der UVP. Händler müssen bei einer Preisermäßigung in der Regel den niedrigsten Preis der letzten 30 Tage angeben." },
    { q: "Sollte ich immer das günstigste Produkt kaufen?", a: "Nicht unbedingt. Ein niedriger Preis kann auf kurze Lebensdauer, hohe Folgekosten oder fehlende Garantie hinweisen. Rechne die Gesamtkosten über die Nutzungsdauer." },
  ],
  "fernseher-kaufen-ratgeber": [
    { q: "Welche Fernseher-Größe passt zu meinem Sitzabstand?", a: "Teile den Sitzabstand in Zentimetern durch 4: Das Ergebnis ist die ungefähre Größe in Zoll. Bei 2,2 Metern sind das etwa 55 Zoll, bei 3 Metern etwa 75 Zoll." },
    { q: "OLED, QLED oder Mini-LED – was ist besser?", a: "OLED bietet die besten Schwarzwerte und den höchsten Kontrast, ideal für abgedunkelte Räume. QLED und Mini-LED sind heller und eignen sich besser für Tageslicht, Mini-LED mit besserem Kontrast als einfache LED-Modelle." },
    { q: "Brauche ich 120 Hz und HDMI 2.1?", a: "Wer mit der Konsole spielt oder viel Sport schaut, profitiert von 120 Hz. Für 4K bei 120 Bildern pro Sekunde ist HDMI 2.1 nötig – prüfe, wie viele Anschlüsse den vollen Standard unterstützen." },
    { q: "Lohnt sich ein 8K-Fernseher?", a: "Für die meisten nicht: Es gibt bisher kaum natives 8K-Material, 4K reicht in fast allen Wohnzimmern aus." },
    { q: "Was sagt das Energielabel beim Fernseher aus?", a: "Es zeigt die Effizienzklasse von A bis G und oft zwei Verbrauchswerte, einen für normales Bild und einen für HDR. Im HDR-Betrieb verbraucht ein Fernseher meist mehr Strom." },
  ],
  "werkstatt-ausstattung-was-du-wirklich-brauchst": [
    { q: "Was gehört zum Werkstattbedarf?", a: "Zum Werkstattbedarf zählen Werkzeug und Maschinen, Verbrauchsmaterial wie Schrauben, Dübel, Schleifpapier und Kleber, die Ausstattung mit Werkbank und Aufbewahrung sowie Arbeitsschutz wie Schutzbrille, Handschuhe, Gehörschutz und Staubmaske." },
    { q: "Was braucht man für eine Werkstatt zu Hause mindestens?", a: "Eine stabile Werkbank, ein Grundsortiment aus Handwerkzeug, ein Akku-Bohrschrauber, Messwerkzeuge, Verbrauchsmaterial wie Schrauben und Kleber, Arbeitsschutz und eine Aufbewahrung für Werkzeug und Kleinteile." },
    { q: "Welche Schleifpapier-Körnung brauche ich wofür?", a: "Grobe Körnungen von etwa 40 bis 80 tragen Material ab, mittlere von etwa 100 bis 150 schleifen vor und feine von etwa 180 bis 240 sind für den Feinschliff gedacht." },
    { q: "Welcher Raum eignet sich für eine Werkstatt?", a: "Garage, Keller oder Gartenhaus eignen sich gut, wenn der Raum trocken ist, genug Platz zum Arbeiten bietet und ausreichend hell und belüftet ist." },
  ],
  "schmuck-als-geschenk-ratgeber": [
    { q: "Welchen Schmuck kann ich verschenken, ohne die Größe zu kennen?", a: "Ohrringe und Halsketten sind am risikoärmsten, weil sie kaum größenabhängig sind. Bei Ketten ist eine mittlere Länge von 40 bis 45 cm für die meisten passend, bei Armbändern helfen verstellbare Modelle." },
    { q: "Was ist ein gutes Schmuckgeschenk für die Freundin oder Partnerin?", a: "Beliebt sind eine Kette mit Herz- oder Initial-Anhänger, Gravur-Schmuck zum Jahrestag oder ein Set aus Kette und Ohrringen. Wichtig ist, dass das Stück zu ihrem Alltagsstil passt." },
    { q: "Kann ich personalisierten Schmuck zurückgeben?", a: "Für Schmuck, der nach deinen Angaben angefertigt wird, etwa mit Gravur, gilt das 14-tägige Widerrufsrecht bei Online-Käufen meist nicht. Prüfe deshalb Schreibweise und Details genau und lies die Bedingungen des Händlers." },
    { q: "Welcher Schmuck ist bei Nickelallergie geeignet?", a: "Achte auf die Kennzeichnung „nickelfrei“ oder „nickelarm“ und frage im Zweifel nach, welche Metalle die Person verträgt." },
    { q: "Wie bestimme ich die Ringgröße heimlich?", a: "Leihe dir einen Ring der Person aus, miss den Innendurchmesser in Millimetern und multipliziere ihn mit 3,14. Das Ergebnis ist der Umfang, der der Ringgröße entspricht, zum Beispiel 17,2 mm × 3,14 ≈ 54 mm, also Größe 54." },
  ],
  "heimkino-einrichten-guide": [
    { q: "Was brauche ich, um ein Heimkino einzurichten?", a: "Du brauchst einen Beamer, eine Projektionsfläche (Leinwand oder Wand), ein Tonsystem wie eine Soundbar oder Lautsprecher, einen Zuspieler wie Streaming-Stick oder Konsole sowie einen abdunkelbaren Raum und passende Kabel." },
    { q: "Wie weit muss der Beamer von der Leinwand entfernt stehen?", a: "Das hängt vom Wurfverhältnis im Datenblatt ab: Projektionsabstand = Wurfverhältnis × Bildbreite. Bei einem Wurfverhältnis von 1,2 und 2 Metern Bildbreite sind es etwa 2,4 Meter. Kurzdistanz-Beamer brauchen deutlich weniger Platz." },
    { q: "Wie viele Lumen braucht ein Beamer fürs Wohnzimmer?", a: "Für ein abgedunkeltes Wohnzimmer reichen meist 2.000 bis 3.000 ANSI-Lumen. Bei Tageslicht oder Dämmerlicht brauchst du mehr, mehr Helligkeit bedeutet aber vor allem einen höheren Preis." },
    { q: "Leinwand oder weiße Wand – was ist besser?", a: "Eine echte Leinwand reflektiert das Licht besser und liefert mehr Kontrast. Eine glatte weiße Wand ist kostenlos, erreicht diese Bildqualität aber nicht. Bei nicht ganz abdunkelbaren Räumen kann eine graue Leinwand den Kontrast erhöhen." },
    { q: "Soundbar oder Surround-System fürs Heimkino?", a: "Eine Soundbar ist platzsparend und schnell aufgebaut, lässt sich aber kaum aufrüsten. Ein modulares Lautsprecher-Set oder 5.1-System wächst mit, braucht aber mehr Platz und Verkabelung." },
  ],
  "smart-home-nachruesten-guide": [
    { q: "Was brauche ich, um mein Zuhause smart nachzurüsten?", a: "Für den Einstieg reichen meist ein Starter-Set mit Hub (bei Zigbee) oder nur WLAN-Geräte, eine Steuerungs-App wie Apple Home, Google Home oder Alexa und ein bis zwei Geräte für einen Bereich, zum Beispiel smarte Steckdosen oder Heizkörperthermostate." },
    { q: "Kann ich Smart Home in einer Mietwohnung nachrüsten?", a: "Ja, mit Lösungen ohne Eingriff in die Installation: Zwischenstecker, smarte Leuchtmittel, batteriebetriebene Heizkörperthermostate und Klebe-Sensoren. Für Wandschalter oder Aktoren in der Elektroinstallation brauchst du in der Regel die Zustimmung des Vermieters." },
    { q: "Zigbee, WLAN oder Matter – was ist für Einsteiger am besten?", a: "Wer nur wenige Geräte smart machen will, kommt mit WLAN am schnellsten ans Ziel. Wer langfristig plant, sollte auf Zigbee oder Matter setzen, weil sie das Heimnetz weniger belasten beziehungsweise herstellerübergreifend funktionieren." },
    { q: "Brauche ich für smarte Wandschalter einen Elektriker?", a: "Smarte Wandschalter greifen in die feste 230-Volt-Installation ein und brauchen oft einen Nulleiter in der Dose. Arbeiten daran gehören in die Hände einer Elektrofachkraft; die einfachste Nachrüstung ohne Elektriker sind smarte Steckdosen-Adapter." },
  ],
  "buero-grundausstattung-was-du-wirklich-brauchst": [
    { q: "Wie viele Aktenordner brauche ich für ein Homeoffice?", a: "Rechne grob mit einem Ordner pro laufendem Projekt oder Jahr, nicht pro Aktenberg. Zu wenige Ordner lassen alles lose herumliegen, ein ganzer Karton endet oft halb leer im Regal." },
    { q: "Lohnt sich ein Marken-Kugelschreiber im Büro?", a: "Bei einem Stift, den du täglich mehrere Stunden benutzt, ja: Griffzone, Tintenfluss und Minenverbrauch unterscheiden sich spürbar. Für Ersatzstifte, die ohnehin nur im Becher liegen, lohnt sich der Aufpreis kaum." },
    { q: "Wo kann ich bei Büromaterial sparen?", a: "Bei Klebeband, Kleber und Kleinkram lohnt keine Markenfixierung. Verbrauchsmaterial, das du regelmäßig brauchst, kaufst du am günstigsten in größeren Gebinden; Dinge für ein einmaliges Projekt besser in der kleinen Packung." },
  ],
  "elektroheizung-kaufen-heizluefter-konvektor-oelradiator": [
    { q: "Was ist der Unterschied zwischen Heizlüfter, Konvektor und Ölradiator?", a: "Der Heizlüfter wärmt sofort, aber ungleichmäßig und hörbar. Der Konvektor ist leiser und gleichmäßiger, der Ölradiator startet langsam, gibt aber lange und leise Wärme ab – auch nach dem Abschalten." },
    { q: "Was kostet der Betrieb einer Elektroheizung?", a: "Ein 2.000-Watt-Gerät verbraucht bei voller Leistung 2 kWh pro Stunde. Bei rund 30 Cent pro kWh sind das etwa 60 Cent pro Stunde Dauerbetrieb – deutlich mehr als dieselbe Wärme über Gasheizung oder Wärmepumpe." },
    { q: "Wie viel Leistung braucht mein Raum?", a: "Als grobe Faustregel gelten etwa 60–100 Watt pro Quadratmeter bei normaler Deckenhöhe. Ein zu schwaches Gerät läuft dauerhaft auf voller Stufe, ohne den Raum richtig warm zu bekommen." },
    { q: "Welche Sicherheitsfunktionen sollte eine Elektroheizung haben?", a: "Kippschutz und Überhitzungsschutz sollten Standard sein, besonders bei Geräten, die unbeaufsichtigt laufen. Ein Thermostat schaltet das Gerät zudem ab, sobald die Zieltemperatur erreicht ist." },
  ],
  "maehroboter-kaufen-ohne-begrenzungskabel": [
    { q: "Wie funktioniert ein Mähroboter ohne Begrenzungskabel?", a: "Eine RTK-Referenzstation im Garten sendet Korrektursignale an den Roboter, der sich damit auf wenige Zentimeter genau positioniert. Die Grenzen zeichnest du per App ein – Anpassungen sind in Minuten statt Stunden erledigt." },
    { q: "Worauf muss ich beim Kauf eines RTK-Mähroboters achten?", a: "Wichtig sind eine realistische Einschätzung der Gartengröße (maximale Mähfläche), die maximale Steigung laut Datenblatt, eine 4G-/App-Anbindung und das Zubehör wie Ladestation, Garage und Ersatzklingen." },
    { q: "Wann ist der beste Zeitpunkt für den Kauf?", a: "Zum Ende der Hauptmähsaison, etwa Ende September, senken viele Händler die Preise. Ein Kauf auf Vorrat fürs nächste Frühjahr ändert nichts an Technik oder Garantie." },
  ],
  "gaming-stuhl-kaufen-ratgeber": [
    { q: "Welches Bezugsmaterial ist für einen Gaming-Stuhl am besten?", a: "Stoff ist atmungsaktiv und meist am günstigsten, aber fleckenanfälliger. PU-Leder ist pflegeleicht, staut aber mehr Wärme. Wildleder-Optik liegt als weicher Mittelweg im Luxus-Segment." },
    { q: "Worauf kommt es bei der Ergonomie an?", a: "Wichtig sind mehrfach verstellbare Armlehnen, ein Neigungswinkel bis über 150 Grad und eine Lordosenstütze. Dazu müssen Sitztiefe, Rückenlehnenhöhe und Belastbarkeit zu Körpergröße und Gewicht passen." },
    { q: "Brauche ich Heiz- und Massagefunktion?", a: "Nein, sie sind kein Muss. Wer sie nicht nutzen wird, spart mit einem Basismodell – ein direkter Preisvergleich zeigt, ob sich der Aufpreis überhaupt lohnt." },
  ],
  "hoverboard-kaufen-ratgeber": [
    { q: "6,5 oder 8,5 Zoll – welche Radgröße brauche ich?", a: "6,5 Zoll ist leicht und wendig und passt für Innenräume, glatte Gehwege und Einsteiger. 8,5 Zoll mit größeren, oft profilierten Reifen verkraftet Unebenheiten und leichtes Gelände deutlich besser." },
    { q: "Worauf sollte ich bei der Sicherheit achten?", a: "Ein GS-Zeichen oder vergleichbares Prüfsiegel sollte vorhanden sein, besonders bei sehr günstigen Modellen ohne Markennamen. Prüfe außerdem maximale Zuladung und empfohlenes Mindestalter." },
    { q: "Lohnt sich ein Set mit Sitzaufsatz für den Kart-Umbau?", a: "Wer auch im Kart-Modus fahren will, greift am besten gleich zum Set: Der Sitzaufsatz kostet einzeln meist mehr als der Aufpreis im Komplettpaket." },
  ],
  "tragbare-espressomaschine-kaufen": [
    { q: "Wie viel Druck braucht eine tragbare Espressomaschine?", a: "Für echte Crema sollten es mindestens 15 Bar sein. Darunter wird der Espresso eher wässrig statt cremig." },
    { q: "Wie viele Tassen schafft eine Akkuladung?", a: "Kompakte Modelle schaffen oft nur 1–2 Tassen pro Ladung, größere Maschinen deutlich mehr. Bei mehrtägigen Trips ohne Lademöglichkeit ist das ein wichtiges Kaufkriterium." },
    { q: "Kann ich gemahlenen Kaffee und Kapseln verwenden?", a: "Viele Modelle nehmen beides. Wer flexibel bleiben will, achtet auf einen Doppelfilter, statt sich früh auf eine Variante festzulegen." },
  ],
  "walking-pad-kaufen-under-desk-treadmill": [
    { q: "Was ist der Unterschied zwischen Walking Pad und Laufband?", a: "Ein Walking Pad ist flach, faltbar und meist ohne Haltegriffe – gemacht fürs Gehen bei niedriger Geschwindigkeit. Ein klassisches Laufband bietet Haltegriffe, höhere Geschwindigkeit und oft Steigung, braucht aber deutlich mehr Platz." },
    { q: "Wie laut darf ein Walking Pad im Homeoffice sein?", a: "Für Videocalls zählt der Dezibel-Wert mehr als die Motorleistung. Ein leiser Motor, meist unter 50 dB angegeben, ist im Homeoffice Pflicht." },
    { q: "Welche Geschwindigkeit brauche ich zum Arbeiten?", a: "Fürs Arbeiten reichen meist 1–6 km/h. Höhere Maximalgeschwindigkeiten sind nur relevant, wenn das Pad auch außerhalb der Arbeitszeit fürs Training genutzt wird." },
  ],
  "grill-kaufen-gas-kohle-elektro-guide": [
    { q: "Gas-, Kohle- oder Elektrogrill – welcher passt zu mir?", a: "Der Holzkohlegrill bietet das beste Raucharoma zum günstigsten Einstieg, braucht aber 20–30 Minuten Anzündzeit. Der Gasgrill ist in 5–10 Minuten startklar und präzise regelbar. Der Elektrogrill ist rauch- und geruchsarm und für viele Balkone die einzige Option." },
    { q: "Darf ich auf dem Balkon grillen?", a: "Viele Hausordnungen erlauben nur Elektrogrills; Holzkohle- und Gasgrills sind auf Balkonen oft explizit verboten. Schau vorher in Mietvertrag oder Hausordnung." },
    { q: "Welche Grillfläche brauche ich?", a: "Für 4–6 Personen reichen meist 47–57 cm Durchmesser. Größere Modelle lohnen sich erst bei regelmäßigen größeren Runden." },
    { q: "Wann ist der beste Zeitpunkt, einen Grill zu kaufen?", a: "Anfang Oktober endet für viele Händler die Grillsaison. Dann lohnt die Suche nach Restposten und Vorjahresmodellen, die ohne Leistungsunterschied oft deutlich günstiger sind." },
  ],
};
