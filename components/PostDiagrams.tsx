// Original, license-free explanatory diagrams for blog posts (inline SVG, so no
// extra requests and no layout shift: every <svg> has width/height + viewBox).
// Brand colours: navy #1A3A6B, orange #F5A623.

const NAVY = "#1A3A6B";
const ORANGE = "#F5A623";
const INK = "#334155";
const SOFT = "#E8EEF8";

function Figure({ children, caption }: { children: React.ReactNode; caption: string }) {
  return (
    <figure className="my-4 text-center">
      {children}
      <figcaption className="small text-muted mt-2">{caption}</figcaption>
    </figure>
  );
}

const svgStyle = { maxWidth: "100%", height: "auto" } as const;
const font = { fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" } as const;

/** Heimkino: Projektionsabstand = Wurfverhältnis x Bildbreite (Draufsicht, schematisch). */
export function ProjectionDiagram() {
  return (
    <Figure caption="Schematische Draufsicht: Der Projektionsabstand ergibt sich aus Wurfverhältnis und Bildbreite. Nicht maßstabsgetreu.">
      <svg width="700" height="280" viewBox="0 0 700 280" role="img" aria-labelledby="pd-title pd-desc" style={svgStyle}>
        <title id="pd-title">Projektionsabstand zwischen Beamer und Leinwand</title>
        <desc id="pd-desc">Der Beamer links projiziert ein Bild auf die Leinwand rechts. Projektionsabstand gleich Wurfverhältnis mal Bildbreite, zum Beispiel 1,2 mal 2 Meter gleich 2,4 Meter.</desc>
        <polygon points="120,125 520,45 520,225 120,155" fill={ORANGE} opacity="0.18" />
        <rect x="50" y="115" width="80" height="50" rx="6" fill={NAVY} />
        <circle cx="130" cy="140" r="9" fill="#fff" stroke={ORANGE} strokeWidth="3" />
        <text x="90" y="187" textAnchor="middle" fontSize="14" fill={INK} style={font}>Beamer</text>
        <line x1="520" y1="45" x2="520" y2="225" stroke={ORANGE} strokeWidth="8" strokeLinecap="round" />
        <text x="520" y="250" textAnchor="middle" fontSize="14" fill={INK} style={font}>Leinwand</text>
        <line x1="565" y1="45" x2="565" y2="225" stroke={NAVY} strokeWidth="2" />
        <line x1="558" y1="45" x2="572" y2="45" stroke={NAVY} strokeWidth="2" />
        <line x1="558" y1="225" x2="572" y2="225" stroke={NAVY} strokeWidth="2" />
        <text x="575" y="140" fontSize="14" fill={NAVY} style={font}>
          <tspan x="575" dy="-8">Bildbreite</tspan>
          <tspan x="575" dy="18">z. B. 2,0 m</tspan>
        </text>
        <line x1="130" y1="268" x2="520" y2="268" stroke={NAVY} strokeWidth="2" markerStart="url(#pd-arrow-l)" markerEnd="url(#pd-arrow-r)" />
        <defs>
          <marker id="pd-arrow-r" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill={NAVY} /></marker>
          <marker id="pd-arrow-l" markerWidth="10" markerHeight="10" refX="1" refY="5" orient="auto"><path d="M10,0 L0,5 L10,10 z" fill={NAVY} /></marker>
        </defs>
        <text x="325" y="22" textAnchor="middle" fontSize="15" fontWeight="600" fill={NAVY} style={font}>Abstand = Wurfverhältnis × Bildbreite</text>
        <text x="325" y="258" textAnchor="middle" fontSize="14" fill={NAVY} style={font}>1,2 × 2,0 m = 2,4 m</text>
      </svg>
    </Figure>
  );
}

/** Schuhe: Fußlänge messen (Draufsicht). */
export function ShoeMeasureDiagram() {
  return (
    <Figure caption="So misst du die Fußlänge: Ferse an die Wand, längste Stelle markieren, Abstand in Zentimetern messen. Schematisch.">
      <svg width="360" height="380" viewBox="0 0 360 380" role="img" aria-labelledby="sm-title sm-desc" style={svgStyle}>
        <title id="sm-title">Fußlänge auf einem Blatt Papier messen</title>
        <desc id="sm-desc">Ein Fuß steht mit der Ferse an einer Wand auf einem Blatt Papier. Die längste Stelle wird markiert und der Abstand zur Wand gemessen.</desc>
        <rect x="70" y="30" width="170" height="300" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
        <rect x="40" y="330" width="230" height="26" fill="#cbd5e1" />
        <text x="155" y="348" textAnchor="middle" fontSize="13" fill={INK} style={font}>Wand</text>
        <path d="M155,322 C110,322 100,270 104,215 C108,150 118,100 140,78 C156,66 176,70 188,92 C204,128 212,190 208,250 C206,298 198,322 155,322 Z" fill={SOFT} stroke={NAVY} strokeWidth="3" />
        <line x1="60" y1="80" x2="250" y2="80" stroke={ORANGE} strokeWidth="3" strokeDasharray="6 5" />
        <text x="6" y="72" textAnchor="start" fontSize="12" fill={INK} style={font}>längste Stelle markieren</text>
        <line x1="300" y1="86" x2="300" y2="324" stroke={NAVY} strokeWidth="2" markerStart="url(#sm-arrow)" markerEnd="url(#sm-arrow)" />
        <defs>
          <marker id="sm-arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill={NAVY} /></marker>
        </defs>
        <text x="312" y="205" fontSize="14" fill={NAVY} style={font}>
          <tspan x="312" dy="-8">Fuß-</tspan>
          <tspan x="312" dy="18">länge</tspan>
        </text>
        <text x="155" y="372" textAnchor="middle" fontSize="12" fill={INK} style={font}>Ferse an die Wand</text>
      </svg>
    </Figure>
  );
}

/** WLAN: Repeater (zwei Netze) gegenüber Mesh (ein Netz). */
export function MeshDiagram() {
  const node = (cx: number, cy: number, label: string, fill: string, textFill = "#fff") => (
    <g>
      <circle cx={cx} cy={cy} r="27" fill={fill} />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="10" fontWeight="600" fill={textFill} style={font}>{label}</text>
    </g>
  );
  return (
    <Figure caption="Links: Ein einfacher Repeater bildet ein eigenes Netz mit eigenem Namen. Rechts: Ein Mesh-System bildet mit dem Router ein gemeinsames Netz. Schematisch.">
      <svg width="680" height="256" viewBox="0 0 680 256" role="img" aria-labelledby="mesh-title mesh-desc" style={svgStyle}>
        <title id="mesh-title">Repeater und Mesh-System im Vergleich</title>
        <desc id="mesh-desc">Links verbindet ein Repeater Router und Gerät über ein zweites WLAN mit eigenem Namen. Rechts bilden Router und zwei Mesh-Knoten ein gemeinsames WLAN mit einem Namen.</desc>
        <rect x="8" y="8" width="320" height="240" rx="12" fill="#fff" stroke="#cbd5e1" />
        <rect x="352" y="8" width="320" height="240" rx="12" fill="#fff" stroke="#cbd5e1" />
        <text x="168" y="36" textAnchor="middle" fontSize="15" fontWeight="600" fill={NAVY} style={font}>Repeater: zwei Netze</text>
        <text x="512" y="36" textAnchor="middle" fontSize="15" fontWeight="600" fill={NAVY} style={font}>Mesh: ein gemeinsames Netz</text>

        <line x1="70" y1="130" x2="168" y2="130" stroke={NAVY} strokeWidth="3" />
        <line x1="168" y1="130" x2="266" y2="130" stroke={ORANGE} strokeWidth="3" strokeDasharray="7 5" />
        {node(60, 130, "Router", NAVY)}
        {node(168, 130, "Repeater", ORANGE, "#1f2937")}
        {node(276, 130, "Gerät", "#64748b")}
        <text x="114" y="112" textAnchor="middle" fontSize="12" fill={INK} style={font}>Netz „A“</text>
        <text x="222" y="112" textAnchor="middle" fontSize="12" fill={INK} style={font}>Netz „B“</text>
        <text x="168" y="200" textAnchor="middle" fontSize="12" fill={INK} style={font}>Zwei Namen, manuell wechseln</text>

        <line x1="404" y1="130" x2="512" y2="70" stroke={NAVY} strokeWidth="3" />
        <line x1="404" y1="130" x2="512" y2="190" stroke={NAVY} strokeWidth="3" />
        <line x1="512" y1="70" x2="620" y2="130" stroke={NAVY} strokeWidth="3" />
        <line x1="512" y1="190" x2="620" y2="130" stroke={NAVY} strokeWidth="3" />
        {node(392, 130, "Router", NAVY)}
        {node(512, 70, "Knoten", ORANGE, "#1f2937")}
        {node(512, 190, "Knoten", ORANGE, "#1f2937")}
        {node(632, 130, "Gerät", "#64748b")}
        <text x="512" y="132" textAnchor="middle" fontSize="12" fill={INK} style={font}>Ein Name</text>
        <text x="512" y="240" textAnchor="middle" fontSize="12" fill={INK} style={font}>Automatisch zum besten Knoten</text>
      </svg>
    </Figure>
  );
}

/** Fernseher: Sitzabstand ÷ 4 = Bilddiagonale in Zoll (Balkendiagramm). */
export function SeatingDistanceDiagram() {
  const rows = [
    { d: "2,0 m", z: 50 },
    { d: "2,2 m", z: 55 },
    { d: "2,6 m", z: 65 },
    { d: "3,0 m", z: 75 },
  ];
  const scale = 4.2; // px per inch
  return (
    <Figure caption="Faustregel: Sitzabstand in Zentimetern geteilt durch 4 ergibt die ungefähre Bildschirmgröße in Zoll.">
      <svg width="560" height="262" viewBox="0 0 560 262" role="img" aria-labelledby="sd-title sd-desc" style={svgStyle}>
        <title id="sd-title">Passende Fernseher-Größe nach Sitzabstand</title>
        <desc id="sd-desc">Bei 2,0 Metern Sitzabstand passen etwa 50 Zoll, bei 2,2 Metern 55 Zoll, bei 2,6 Metern 65 Zoll und bei 3,0 Metern 75 Zoll.</desc>
        <text x="280" y="24" textAnchor="middle" fontSize="15" fontWeight="600" fill={NAVY} style={font}>Sitzabstand ÷ 4 = Zoll</text>
        {rows.map((r, i) => (
          <g key={r.d}>
            <text x="70" y={72 + i * 48} textAnchor="end" fontSize="14" fill={INK} style={font}>{r.d}</text>
            <rect x="80" y={52 + i * 48} width={r.z * scale} height="30" rx="5" fill={i % 2 === 0 ? NAVY : "#2f5aa8"} />
            <text x={80 + r.z * scale + 10} y={72 + i * 48} fontSize="14" fontWeight="600" fill={NAVY} style={font}>ca. {r.z} Zoll</text>
          </g>
        ))}
        <text x="80" y="254" fontSize="12" fill={INK} style={font}>Sitzabstand von der Couch zum Fernseher</text>
      </svg>
    </Figure>
  );
}
