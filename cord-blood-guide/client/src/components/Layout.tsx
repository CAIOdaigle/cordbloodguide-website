import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "The Guide", path: "/guide" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-primary font-serif tracking-tight hover:opacity-90 transition-opacity">
            <span className="bg-primary/10 p-2 rounded-full">🧬</span>
            CordBloodGuide
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === item.path
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/product">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold rounded-full px-6 shadow-sm hover:shadow-md transition-all">
                Get the Kit
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background p-4 animate-in slide-in-from-top-5">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  href={item.path}
                  className={cn(
                    "text-lg font-medium py-2 px-4 rounded-lg hover:bg-secondary transition-colors",
                    location === item.path
                      ? "bg-secondary text-primary"
                      : "text-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/product">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold rounded-full mt-2">
                  Get the Kit
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-secondary/30 py-12 mt-20">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-primary">
              CordBloodGuide
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering parents with unbiased, research-backed information to
              make the best decisions for their family's future health.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/guide">The Ultimate Guide</Link>
              </li>
              <li>
                <Link href="/blog">Latest Articles</Link>
              </li>
              <li>
                <Link href="/product">Decision Kit</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Disclaimer</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The information on this website is for educational purposes only
              and is not intended as medical advice. Always consult with your
              healthcare provider regarding medical decisions.
            </p>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-border/20 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} CordBloodGuide. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
