export type AnsiSegment = { text: string; color: string };

// The official Fastfetch asset uses SGR truecolor foregrounds and resets.
// Convert those to text + CSS values; never insert the asset as HTML.
export function parseAnsiLogo(source: string): AnsiSegment[] {
  const segments: AnsiSegment[] = [];
  const input = source.replace(/\r\n/g, '\n');
  let color = 'inherit';
  let cursor = 0;

  function append(text: string) {
    const clean = text.replace(/[\u0000-\u0008\u000b-\u001f\u007f]/g, '');
    if (!clean) return;
    const previous = segments.at(-1);
    if (previous?.color === color) previous.text += clean;
    else segments.push({ text: clean, color });
  }

  // Consume all CSI sequences, including unsupported ones, without displaying ESC.
  for (const match of input.matchAll(/\u001b\[[0-?]*[ -/]*[@-~]/g)) {
    append(input.slice(cursor, match.index));
    cursor = match.index + match[0].length;
    if (!match[0].endsWith('m')) continue;

    const codes = match[0].slice(2, -1).split(';').map(Number);
    for (let index = 0; index < codes.length; index++) {
      const code = codes[index];
      if (code === 0 || code === 39) color = 'inherit';
      if (code === 38 && codes[index + 1] === 2) {
        const rgb = codes.slice(index + 2, index + 5);
        if (rgb.length === 3 && rgb.every((channel) => Number.isInteger(channel) && channel >= 0 && channel <= 255)) {
          color = `rgb(${rgb.join(', ')})`;
        }
        index += 4;
      }
    }
  }
  append(input.slice(cursor));
  return segments;
}
