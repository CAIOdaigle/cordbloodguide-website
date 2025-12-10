import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, User, Share2, Bookmark } from "lucide-react";
import { Link } from "wouter";

export default function BlogPost() {
  return (
    <Layout>
      <article className="pb-24">
        {/* Article Header */}
        <header className="bg-secondary/30 pt-24 pb-16">
          <div className="container max-w-4xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-2 text-sm font-bold text-primary uppercase tracking-wider">
              <span className="bg-primary/10 px-3 py-1 rounded-full">Financial Guide</span>
              <span className="text-muted-foreground">•</span>
              <span>8 min read</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              How Much Does Cord Blood Banking <span className="italic text-primary">Really</span> Cost in 2025?
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We break down the initial fees, annual storage costs, and hidden charges of the top banks so you can budget with confidence.
            </p>
            <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By Dr. Sarah Jenkins (PhD)</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Updated Dec 10, 2025</span>
              </div>
            </div>
          </div>
        </header>

        <div className="container max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar (Table of Contents) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 space-y-8">
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Table of Contents</h4>
                <nav className="space-y-2 border-l-2 border-border pl-4">
                  {[
                    "The Three Cost Components",
                    "Average Market Prices",
                    "Public Banking Costs",
                    "Hidden Fees to Watch For",
                    "Is it Tax Deductible?",
                    "Conclusion"
                  ].map((item, i) => (
                    <a key={i} href="#" className="block text-sm text-muted-foreground hover:text-primary hover:font-medium transition-colors py-1">
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
              
              {/* Mini CTA */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-serif font-bold text-lg">Need a cheat sheet?</h4>
                  <p className="text-sm text-muted-foreground">Get our printable Cost Comparison Worksheet in the Decision Kit.</p>
                  <Link href="/product">
                    <Button size="sm" className="w-full bg-primary text-primary-foreground">Get the Kit</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-7 prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              One of the biggest hurdles for parents considering cord blood banking is the price tag. It’s not just a one-time purchase; it’s a long-term commitment. But finding transparent pricing online can feel like pulling teeth.
            </p>
            
            <p>
              In this guide, we’ve analyzed the pricing structures of the top 10 private cord blood banks in the US to give you a realistic picture of what you’ll pay.
            </p>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-6 text-foreground">The Three Main Cost Components</h2>
            <p>
              When budgeting for private banking, you need to account for three distinct types of fees:
            </p>
            <ul className="space-y-2 my-6">
              <li className="flex items-start gap-3">
                <span className="bg-primary/10 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1">1</span>
                <span><strong>Enrollment & Processing Fee:</strong> This is the upfront cost you pay before or right after the baby is born. It covers the collection kit, shipping, and the lab processing.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary/10 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1">2</span>
                <span><strong>Annual Storage Fee:</strong> The "rent" you pay to keep the stem cells frozen in liquid nitrogen. This starts in year 2.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary/10 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm mt-1">3</span>
                <span><strong>Release/Retrieval Fee:</strong> A fee some banks charge if you ever need to use the blood for a transplant.</span>
              </li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-6 text-foreground">Average Market Prices (2025)</h2>
            <p>
              Based on our research, here is the average range you can expect to pay for <strong>Cord Blood Only</strong> banking:
            </p>

            <div className="my-8 not-prose">
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-white border-border shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-sm text-muted-foreground uppercase font-bold mb-2">First Year</div>
                    <div className="text-3xl font-bold text-primary">$1,400 - $2,300</div>
                    <div className="text-xs text-muted-foreground mt-2">Includes processing</div>
                  </CardContent>
                </Card>
                <Card className="bg-white border-border shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-sm text-muted-foreground uppercase font-bold mb-2">Annual Storage</div>
                    <div className="text-3xl font-bold text-primary">$175 - $300</div>
                    <div className="text-xs text-muted-foreground mt-2">Billed yearly</div>
                  </CardContent>
                </Card>
                <Card className="bg-white border-border shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-sm text-muted-foreground uppercase font-bold mb-2">20-Year Total</div>
                    <div className="text-3xl font-bold text-primary">$4,900 - $8,300</div>
                    <div className="text-xs text-muted-foreground mt-2">Estimated lifetime cost</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <h3 className="font-serif text-2xl font-bold mt-8 mb-4 text-foreground">What about Cord Tissue?</h3>
            <p>
              Adding cord tissue (which contains a different type of stem cell) typically increases the first-year cost by <strong>$800 - $1,200</strong> and the annual storage fee by <strong>$100 - $150</strong>.
            </p>

            {/* Content Upgrade Block */}
            <div className="my-12 not-prose bg-accent/10 border border-accent/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <h4 className="font-serif text-2xl font-bold text-foreground">Don't Overpay. Compare 7 Banks Instantly.</h4>
                <p className="text-muted-foreground">
                  Our "Decision Kit" includes a detailed spreadsheet comparing the exact pricing of CBR, Cryo-Cell, ViaCord, and more—including hidden fees they don't advertise.
                </p>
                <Link href="/product">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                    Get the Comparison Sheet
                  </Button>
                </Link>
              </div>
              <div className="w-full md:w-1/3">
                 <div className="bg-white p-4 rounded-xl shadow-md transform rotate-3 border border-border/50">
                    <div className="space-y-2">
                       <div className="h-2 bg-slate-100 rounded w-3/4"></div>
                       <div className="h-2 bg-slate-100 rounded w-full"></div>
                       <div className="h-2 bg-slate-100 rounded w-5/6"></div>
                       <div className="h-2 bg-slate-100 rounded w-full"></div>
                    </div>
                 </div>
              </div>
            </div>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-6 text-foreground">Hidden Fees to Watch For</h2>
            <p>
              Not all banks are transparent. When reading the fine print, look for these potential extra charges:
            </p>
            <ul>
              <li><strong>Shipping Surcharges:</strong> Some banks charge extra for the medical courier, especially on weekends or holidays ($150+).</li>
              <li><strong>Payment Plan Fees:</strong> If you choose a monthly payment plan, you might pay 10-20% more in total than paying upfront.</li>
              <li><strong>Cancellation Fees:</strong> If you change your mind before the birth, is the deposit refundable? Often, it's not.</li>
            </ul>

            <h2 className="font-serif text-3xl font-bold mt-12 mb-6 text-foreground">Conclusion</h2>
            <p>
              Cord blood banking is an investment in your family's biological insurance. While the costs are significant, knowing the full picture allows you to budget effectively and avoid surprises.
            </p>
            <p>
              Remember, the most expensive bank isn't always the best, and the cheapest isn't always the worst. It's about finding the right balance of quality, financial stability, and price for your family.
            </p>
          </div>
        </div>
      </article>
    </Layout>
  );
}
