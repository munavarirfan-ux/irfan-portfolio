import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-2xl font-medium mb-2">Page not found</h1>
      <p className="text-white/60 mb-6">The page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="text-white/80 hover:text-white underline transition-colors"
      >
        Go to home
      </Link>
    </div>
  )
}
