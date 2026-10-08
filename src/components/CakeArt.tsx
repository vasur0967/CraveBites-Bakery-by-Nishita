type CakeArtProps = {
  tone?: 'pink' | 'cream' | 'mint'
  className?: string
}

export function CakeArt({ tone = 'pink', className = '' }: CakeArtProps) {
  const colors = {
    pink: ['#f7a7b8', '#e86d87', '#fff1e9'],
    cream: ['#f3d99d', '#d69a45', '#fff7e7'],
    mint: ['#a9d8c4', '#5b9d83', '#eaf8f1'],
  }[tone]

  return (
    <svg className={className} viewBox="0 0 440 420" role="img" aria-label="A beautifully decorated cake illustration">
      <defs>
        <linearGradient id={`cake-${tone}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor={colors[0]} />
          <stop offset="1" stopColor={colors[1]} />
        </linearGradient>
        <filter id={`shadow-${tone}`} x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="18" stdDeviation="14" floodColor="#7a4b4b" floodOpacity=".18" />
        </filter>
      </defs>
      <ellipse cx="220" cy="379" rx="143" ry="24" fill="#5b3f3b" opacity=".09" />
      <g filter={`url(#shadow-${tone})`}>
        <path d="M85 192h270l-25 113H111L85 192Z" fill={`url(#cake-${tone})`} />
        <path d="M85 192h270v26H85z" fill="#fff8ed" />
        <path d="M111 305h218l-15 20H125l-14-20Z" fill="#d9897f" />
        <path d="M85 192c0-48 43-87 97-87h76c54 0 97 39 97 87H85Z" fill="#fff9f1" />
        <path d="M85 192c0-48 43-87 97-87h76c54 0 97 39 97 87H85Z" fill="none" stroke="#f2d4c7" strokeWidth="3" />
        <path d="M105 185c12-40 48-69 102-69h26c54 0 90 29 102 69" fill="none" stroke="#f3b5b0" strokeWidth="7" strokeLinecap="round" />
        <g fill="#fff" stroke="#e8b8b4" strokeWidth="2">
          <circle cx="150" cy="139" r="10" /><circle cx="190" cy="134" r="9" /><circle cx="223" cy="143" r="11" />
          <circle cx="262" cy="126" r="8" /><circle cx="296" cy="143" r="10" /><circle cx="179" cy="163" r="8" />
          <circle cx="249" cy="165" r="10" />
        </g>
        <path d="M131 160c20-20 52-19 71 4M224 156c20-23 51-22 71 3" fill="none" stroke="#e78986" strokeWidth="5" strokeLinecap="round" />
        <path d="M123 230c32 25 69 32 111 16 28-10 65-8 93 17" fill="none" stroke="#fff" strokeWidth="12" strokeLinecap="round" opacity=".65" />
        <path d="M143 223h18v18h-18zM185 238h17v17h-17zM247 225h18v18h-18zM285 246h17v17h-17z" fill="#fff" opacity=".84" />
        <path d="M162 191c14-20 27-21 41-3M233 191c13-19 27-19 40-2" fill="none" stroke="#ea8d9d" strokeWidth="5" strokeLinecap="round" />
        <path d="M203 113c-16-29-7-49 15-62 9 26 4 45-15 62Z" fill="#6ba98e" />
        <path d="M217 115c15-19 29-27 42-25-3 22-17 37-42 25Z" fill="#8bbca4" />
        <path d="M207 112c-1-24 9-39 24-47" fill="none" stroke="#4c8b70" strokeWidth="4" strokeLinecap="round" />
      </g>
      <g transform="translate(314 22) rotate(10)">
        <path d="M0 0c15 8 24 20 26 36" fill="none" stroke="#d88a80" strokeWidth="4" strokeLinecap="round" />
        <path d="M22 25c17-13 33-12 47 1-13 15-30 18-47-1Z" fill="#f5c3b4" />
      </g>
    </svg>
  )
}
