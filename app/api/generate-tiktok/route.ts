import { NextRequest, NextResponse } from "next/server";

const GROQ_API = "https://api.groq.com/openai/v1/chat/completions";

const STYLE_PROMPTS: Record<string, string> = {
  energetisch:  "energetisch, aufgeregt, viele Ausrufezeichen, schneller Rhythmus",
  informativ:   "ruhig, informativ, faktenbasiert, seriös aber sympathisch",
  schockierend: "schockierend, ungläubig ('Das gibt es doch nicht!'), Clickbait-Style",
};

export async function POST(req: NextRequest) {
  const { productName, price, oldPrice, vendor, category, style = "energetisch" } = await req.json();

  if (!productName) return NextResponse.json({ error: "Produktname fehlt" }, { status: 400 });

  const discount = oldPrice && price
    ? Math.round((1 - parseFloat(price) / parseFloat(oldPrice)) * 100)
    : null;

  const prompt = `Du bist TikTok-Creator für preisgucken.de (deutsche Preisvergleich-Website).
Erstelle 3 verschiedene TikTok-Scripts auf Deutsch für:

Produkt: ${productName}
${price ? `Preis: €${parseFloat(price).toFixed(2)}` : ""}
${oldPrice ? `Originalpreis: €${parseFloat(oldPrice).toFixed(2)}` : ""}
${discount ? `Ersparnis: ${discount}%` : ""}
${vendor ? `Händler: ${vendor}` : ""}
${category ? `Kategorie: ${category}` : ""}

Stil: ${STYLE_PROMPTS[style] || STYLE_PROMPTS.energetisch}

WICHTIG:
- capcut_lines: Den Text aufteilen in kurze Zeilen für CapCut (max 6 Wörter pro Zeile, 4-6 Zeilen gesamt)
- Jede capcut_line ist ein separater Text-Block der nacheinander erscheint
- Schreibe "preisgucken punkt de" (nicht "preisgucken.de") wenn die Domain vorgesprochen wird

Antworte NUR mit diesem JSON (kein Text davor/danach):
{
  "variations": [
    {
      "label": "Variante 1",
      "hook": "Hook-Text (max 10 Wörter, erster Satz des Videos)",
      "main": "Hauptteil (2-3 Sätze, Produkt + Preis erklären)",
      "cta": "Call to Action (1 Satz, preisgucken.de erwähnen)",
      "overlay": "Kurzer Text für Text-Overlay auf dem Video (max 5 Wörter)",
      "capcut_lines": ["Zeile 1", "Zeile 2", "Zeile 3", "Zeile 4"],
      "hashtags": ["hashtag1", "hashtag2", "hashtag3", "hashtag4", "hashtag5"],
      "sound": "Empfohlener Sound-Typ"
    },
    { "label": "Variante 2", "hook": "...", "main": "...", "cta": "...", "overlay": "...", "capcut_lines": [], "hashtags": [], "sound": "..." },
    { "label": "Variante 3", "hook": "...", "main": "...", "cta": "...", "overlay": "...", "capcut_lines": [], "hashtags": [], "sound": "..." }
  ]
}`;

  try {
    const res = await fetch(GROQ_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1200,
        temperature: 0.8,
      }),
    });

    const data = await res.json();
    const raw = data.choices?.[0]?.message?.content || "{}";
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    const parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : { variations: [] };
    return NextResponse.json(parsed);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Generierung fehlgeschlagen" }, { status: 500 });
  }
}
