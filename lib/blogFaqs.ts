// lib/blogFaqs.ts
// FAQ per blog post (slug -> Q&As), rendered by components/PostFaq.tsx as
// visible HTML plus matching FAQPage JSON-LD. Answers only restate what the
// post itself says — no prices (they go stale), no claims beyond the article.

export type Faq = { q: string; a: string };

export const BLOG_FAQS: Record<string, Faq[]> = {
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
