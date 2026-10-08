type GalleryArtProps = {
  variant: 'rose' | 'gold' | 'mint' | 'berry'
}

export function GalleryArt({ variant }: GalleryArtProps) {
  const palettes = {
    rose: ['#f6b9bd', '#e47d83', '#fff1eb'],
    gold: ['#f2c982', '#c98b3b', '#fff9e6'],
    mint: ['#a6d2bd', '#5b9c81', '#eaf8f1'],
    berry: ['#c29bc3', '#7d5687', '#f7edf8'],
  }[variant]

  return (
    <svg viewBox="0 0 520 620" role="img" aria-label="Decorated cake illustration">
      <defs>
        <linearGradient id={variant} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={palettes[0]} /><stop offset="1" stopColor={palettes[1]} />
        </linearGradient>
      </defs>
      <rect width="520" height="620" fill={palettes[2]} />
      <circle cx="420" cy="92" r="84" fill="#fff" opacity=".45" />
      <ellipse cx="260" cy="538" rx="150" ry="26" fill="#6c4847" opacity=".1" />
      <path d="M106 250h308l-34 184H141l-35-184Z" fill={`url(#${variant})`} />
      <path d="M106 250c0-79 72-143 162-143s162 64 162 143H106Z" fill="#fff9f2" />
      <path d="M106 250c0-79 72-143 162-143s162 64 162 143" fill="none" stroke="#f0c9bd" strokeWidth="5" />
      <path d="M133 247c12-63 65-106 127-106 63 0 115 43 128 106" fill="none" stroke={palettes[0]} strokeWidth="16" strokeLinecap="round" />
      <g fill="#fff" stroke="#e8bdb3" strokeWidth="3">
        <circle cx="176" cy="182" r="13" /><circle cx="214" cy="164" r="10" /><circle cx="255" cy="184" r="14" />
        <circle cx="299" cy="153" r="11" /><circle cx="341" cy="181" r="13" />
      </g>
      <path d="M163 215c28-27 61-28 91-4M271 217c26-29 61-29 87 0" fill="none" stroke="#fff" strokeWidth="13" strokeLinecap="round" />
      <path d="M146 321c46 28 84 29 116 6 33-24 71-23 110 3" fill="none" stroke="#fff" strokeWidth="17" strokeLinecap="round" opacity=".72" />
      <g fill="#fff">
        <circle cx="180" cy="371" r="11" /><circle cx="238" cy="394" r="9" /><circle cx="293" cy="365" r="12" /><circle cx="347" cy="402" r="10" />
      </g>
      <path d="M211 151c-8-24-2-43 17-58 13 22 11 41-17 58Z" fill="#5c9a79" />
      <path d="M225 154c17-19 31-24 45-18-7 21-23 31-45 18Z" fill="#88b899" />
    </svg>
  )
}
