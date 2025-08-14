const { GoogleGenAI } = require("@google/genai");

async function ganrateCaption(base64ImageData, lang, tone) {
  const ai = new GoogleGenAI({});
  const base64Image = Buffer.from(base64ImageData.buffer).toString("base64");
  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        inlineData: {
          mimeType: "image/png",
          data: base64Image,
        },
      },
      { text: "Caption this image." },
    ],
    config: {
      systemInstruction: `You are an expert creative writer and social media strategist.
             Write a single-sentence caption for the provided image in ${lang} with a ${tone} tone.
             The caption must be engaging, vivid, and emotionally appealing, while accurately reflecting the image content.
             Incorporate relevant emojis naturally and add 2–4 creative, trend-worthy hashtags in that 1-2 ${lang} and max-2 english.
             Avoid generic phrases, clichés, or stating the obvious.
             Output only the caption — no extra text.`,
    },
  });
  return result.text;
}

module.exports = ganrateCaption;
