import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Events App</h1>
      <nav className="space-x-4">
        <Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
        <Link href="/events" className="text-blue-500 hover:text-blue-700">Events</Link>
        <Link href="/contact" className="text-blue-500 hover:text-blue-700">Contact</Link>
      </nav>
    </main>
  )
}
