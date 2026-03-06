import { useState, useCallback } from 'react';

/**
 * Hook for AI-powered photo analysis and enhancement suggestions
 * using the Anthropic Claude API.
 */
export function useAIEnhance() {
  const [loading,  setLoading]  = useState(false);
  const [result,   setResult]   = useState(null);
  const [error,    setError]    = useState(null);
  const [applied,  setApplied]  = useState(false);

  const analyze = useCallback(async (imageDataUrl) => {
    if (!imageDataUrl) return;

    setLoading(true);
    setResult(null);
    setError(null);
    setApplied(false);

    // Convert data URL to base64 — strip the prefix
    const base64 = imageDataUrl.split(',')[1];
    if (!base64) {
      setError('Could not read image data.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'image',
                  source: {
                    type: 'base64',
                    media_type: 'image/jpeg',
                    data: base64,
                  },
                },
                {
                  type: 'text',
                  text: `You are a professional photo editor and colorist. Analyze this photo carefully and return ONLY a valid JSON object — no markdown fences, no explanation, no preamble.

Return this exact structure:
{
  "description": "2-sentence scene description focusing on lighting, mood, and composition",
  "issues": ["specific issue 1", "specific issue 2"],
  "enhancements": {
    "brightness": <integer 80-130, 100=no change>,
    "contrast":   <integer 80-140, 100=no change>,
    "saturation": <integer 60-150, 100=no change>,
    "hue":        <integer -30 to 30, 0=no change>,
    "blur":       <integer 0-3>,
    "sepia":      <integer 0-30>,
    "grayscale":  <integer 0-15>
  },
  "tips": ["actionable tip 1", "actionable tip 2", "actionable tip 3"],
  "mood": "one word mood label (e.g. Dramatic, Serene, Vibrant, Intimate)"
}`,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData?.error?.message || `API error ${response.status}`);
      }

      const data = await response.json();
      const text = data.content
        .map((block) => (block.type === 'text' ? block.text : ''))
        .join('');

      // Strip any accidental markdown fences
      const cleaned = text.replace(/```json|```/gi, '').trim();
      const parsed  = JSON.parse(cleaned);
      setResult(parsed);
    } catch (err) {
      console.error('[AI Enhance]', err);
      setError(err.message || 'AI analysis failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  const markApplied = useCallback(() => setApplied(true), []);
  const clear       = useCallback(() => {
    setResult(null);
    setError(null);
    setApplied(false);
  }, []);

  return { analyze, loading, result, error, applied, markApplied, clear };
}
