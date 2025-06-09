import Link from "next/link"
import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
      <Shield className="h-16 w-16 text-purple-600 mb-6" />
      <h1 className="text-4xl md:text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="bg-purple-600 hover:bg-purple-700">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}
