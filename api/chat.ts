import { GoogleGenAI } from '@google/genai';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { messages, userMessage } = req.body || {};
    const prompt = userMessage || (messages && messages[messages.length - 1]?.content);

    if (!prompt) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

    if (!ai) {
      return res.status(200).json({
        reply: `Welcome to A1 Elite Service & Properties Limited! I am your Royal Garden Estate Assistant. For direct inquiries, bungalow allocations (2-Bed on 250 SQM or 4-Bed on 450 SQM), or executive business proposals, please call our direct developer lines: +234 803 000 1234 or +234 812 345 6789. You can also book a site inspection with CEO Onyema Chukwuma's team right on this portal.`
      });
    }

    const systemInstruction = `You are the official AI Estate Consultant & Business Representative for A1 Elite Service & Properties Limited, the master developer of Royal Garden Estate Okpanam in Delta State, Nigeria.

Key Company & Project Details:
- Company: A1 Elite Service & Properties Limited
- Motto / Slogan: "...Your Property, Our Priority"
- CEO & Managing Director: Onyema Chukwuma (prominently leads civil engineering on-site).
- Flagship Development: Royal Garden Estate Okpanam
- Location: Along the Okpanam Expressway corridor, Asaba Capital Territory, Delta State, Nigeria. 100% dry table-land with instant physical allocation.
- Direct Contact Numbers: +234 803 000 1234 and +234 812 345 6789.
- Email: info@a1eliteservices.com | sales@royalgardenestate.com
- Available Bungalow Prototypes:
  1. 2 Bedroom Luxury Bungalow (250 SQM land plot): 2 en-suite bedrooms, open living room & dining salon, modern kitchen with store, visitor bath, parking for 3 cars, interlocked compound. Perfect for young families, civil executives, and buy-to-let investors targeting 14%-16% rental yield.
  2. 4 Bedroom Executive Bungalow (450 SQM land plot): 4 en-suite bedrooms, grand columnar entrance porch, expansive living room, formal dining room, chef-grade kitchen & pantry, luxurious master suite with freestanding soaking tub & glass shower, parking for 4-5 cars, landscaped side garden.
- Estate Infrastructure & 6 Key Features:
  1. 24/7 Security: Gated perimeter, biometric access gatehouse, armed patrol, CCTV.
  2. Good Road Network: Wide interlocked stone paving with covered concrete drainage.
  3. Stable Power Supply: Dedicated high-capacity commercial step-down transformer and underground cabling.
  4. Clean Water Supply: Industrial borehole water treatment plant with pressurized reticulation.
  5. Beautiful Landscape: Lush greenery, manicured lawns, royal palm trees.
  6. Serene Environment: Peaceful sanctuary minutes from Asaba International Airport and city center.
- Title & Documentation: Registered Survey Plan, C of O in progress, Deed of Assignment, 100% dispute-free title guarantee.
- Business Deals & Partnerships:
  You actively welcome and facilitate business deals, including:
  * Joint Venture (JV) land development proposals
  * Bulk property acquisitions for corporate cooperatives or diaspora investment clubs
  * Contractor and construction material partnerships
  * Institutional investor syndicates
  * Real estate marketer / brokerage partnerships
  When a user expresses interest in a business deal or partnership, warmly invite their proposal, ask for their full name, company name, phone/WhatsApp number, and key proposal highlights so the executive office of CEO Onyema Chukwuma can reach back out immediately.

Guidelines:
- Be cordial, highly knowledgeable, professional, and articulate.
- Always be proud of our quality civil infrastructure and transparent delivery.
- Format responses cleanly using bullet points where helpful.
- Remind users they can book site inspections directly or call +234 803 000 1234 / +234 812 345 6789.`;

    const conversationHistory = (messages || []).map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    if (!conversationHistory.length || conversationHistory[conversationHistory.length - 1].parts[0].text !== prompt) {
      conversationHistory.push({
        role: 'user',
        parts: [{ text: prompt }]
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: conversationHistory,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    const replyText = response.text || 'Thank you for reaching out to A1 Elite Service & Properties Limited. Please call us directly at +234 803 000 1234 or +234 812 345 6789.';
    return res.status(200).json({ reply: replyText });
  } catch (error: any) {
    console.error('Gemini Chat API Error:', error);
    return res.status(500).json({
      reply: 'Our AI consultant is temporarily experiencing high traffic. For instant assistance or to discuss a business deal, please call our executive desk directly at +234 803 000 1234 or +234 812 345 6789, or WhatsApp us directly.'
    });
  }
}
