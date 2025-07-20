import Link from "next/link";
import { Button } from "~/components/ui/button";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                404 - Page Not Found
              </h1>
              <p className="text-lg text-gray-600">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
              </p>
            </div>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button size="lg">
                <Link href="/" title="Back to Home">
                  Back to Home
                </Link>
              </Button>

              <Button size="lg" variant="outline">
                <Link href="/contact" title="Contact Us">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side - Placeholder image */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="flex h-96 w-96 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 shadow-lg">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-blue-200">
                    <svg
                      className="h-12 w-12 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.464-.881-6.08-2.33m0 0l-.294-.293a1 1 0 011.414-1.414l.294.293zm11.44-.293a1 1 0 011.414 1.414l-.294.293A7.962 7.962 0 0118 13.291z"
                      />
                    </svg>
                  </div>
                  <div className="rounded-lg">
                    <Image
                      src="/person3.png"
                      alt="AD AVL Logo"
                      width={1440}
                      height={1080}
                    />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-yellow-300 opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 h-6 w-6 rounded-full bg-pink-300 opacity-80"></div>
              <div className="absolute top-8 -left-8 h-4 w-4 rounded-full bg-green-300 opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
