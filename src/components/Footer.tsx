export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center">
          <p className="text-white font-medium mb-2">
            Auburn Artificial Intelligence Initiative
          </p>
          <p className="text-white/40 text-sm">
            Preparing Auburn students for an AI-driven future.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-sm">
            {new Date().getFullYear()} AAII. Auburn University.
          </p>
        </div>
      </div>
    </footer>
  )
}
