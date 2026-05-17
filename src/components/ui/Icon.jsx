export function Icon({ html, size = 20, color = "currentColor" }) {
  if (!html) return null;
  return (
    <span
      style={{ display: "inline-flex", color, width: size, height: size }}
      dangerouslySetInnerHTML={{
        __html: html.replace(/width="24" height="24"/, `width="${size}" height="${size}"`),
      }}
    />
  );
}
