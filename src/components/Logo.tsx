interface LogoProps {
  className?: string
}

export default function Logo({ className = 'h-12 w-12' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066a8" />
          <stop offset="100%" stopColor="#33b5f5" />
        </linearGradient>
      </defs>

      {/* Clean circle background */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="url(#logoGradient)"
      />

      {/* AI text - clean and bold */}
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fill="white"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="38"
      >
        AI
      </text>
    </svg>
  )
}
