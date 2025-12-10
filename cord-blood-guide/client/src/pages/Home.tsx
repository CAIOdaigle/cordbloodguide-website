import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Heart, ShieldCheck, HelpCircle } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary/30 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="container relative z-10 grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-8 animate-in slide-in-from-left-5 duration-700 fade-in">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Updated for 2025
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground tracking-tight">
              Making the Right <span className="text-primary">Cord Blood</span>{" "}
              Decision for Your Family.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Unbiased, research-backed guidance to help you navigate your cord
              blood banking options with confidence and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/guide">
                <Button size="lg" className="rounded-full text-lg px-8 h-14 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/product">
                <Button variant="outline" size="lg" className="rounded-full text-lg px-8 h-14 border-2 hover:bg-secondary/50">
                  Get the Decision Kit
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-[10px] font-bold overflow-hidden">
                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" />
                  </div>
                ))}
              </div>
              <p>Trusted by 2,000+ parents this month</p>
            </div>
          </div>
          <div className="relative animate-in slide-in-from-right-5 duration-1000 fade-in delay-200">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2rem] blur-3xl opacity-50"></div>
            <img
              src="/images/hero-family.png"
              alt="Happy family with newborn"
              className="relative rounded-[2rem] shadow-2xl border-4 border-white/50 object-cover w-full aspect-[4/3] hover:scale-[1.02] transition-transform duration-700"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-border/50 flex items-center gap-3 animate-bounce-slow">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Verified</p>
                <p className="font-bold text-foreground">Unbiased Info</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-border/40 bg-white py-8">
        <div className="container flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-muted-foreground opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="font-serif italic text-lg">Featured in:</span>
          {/* Placeholders for logos */}
          <span className="font-bold text-xl">Parents</span>
          <span className="font-bold text-xl">The Bump</span>
          <span className="font-bold text-xl">Healthline</span>
          <span className="font-bold text-xl">What to Expect</span>
        </div>
      </section>

      {/* The Core Problem */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Feeling Overwhelmed by Choices?
            </h2>
            <p className="text-lg text-muted-foreground">
              You're not alone. Most parents find cord blood banking confusing. 
              We break it down into simple, actionable steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <HelpCircle className="h-10 w-10 text-primary" />,
                title: "Complex Science",
                desc: "Stem cells, HLA matching, engraftment... we translate the medical jargon into plain English.",
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-primary" />,
                title: "Confusing Costs",
                desc: "Hidden fees and annual storage costs can add up. We expose the true price of banking.",
              },
              {
                icon: <Heart className="h-10 w-10 text-primary" />,
                title: "Which Bank to Trust?",
                desc: "With dozens of private banks, how do you choose? We provide unbiased, data-driven comparisons.",
              },
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-lg shadow-primary/5 hover:shadow-primary/10 transition-all duration-300 bg-secondary/20">
                <CardContent className="pt-8 pb-8 px-6 text-center space-y-4">
                  <div className="mx-auto bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-sm mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Pillars */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="space-y-4 max-w-2xl">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Your Clear Path to a Confident Decision
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our core resources designed to answer your biggest questions.
              </p>
            </div>
            <Link href="/blog">
              <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5">
                View all articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/guide">
              <div className="group cursor-pointer relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src="/images/stem-cell-art.png" alt="Stem Cells" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">The Basics</div>
                  <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-primary transition-colors">The Ultimate Guide</h3>
                  <p className="text-muted-foreground mb-6 flex-1">Everything you need to know about cord blood banking in one comprehensive read.</p>
                  <span className="text-sm font-bold text-primary flex items-center">Read Guide <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                </div>
              </div>
            </Link>

            <Link href="/blog/cost">
              <div className="group cursor-pointer relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="h-48 bg-blue-50 flex items-center justify-center">
                   <span className="text-6xl">💰</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Financials</div>
                  <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Cost Breakdown</h3>
                  <p className="text-muted-foreground mb-6 flex-1">Transparent analysis of initial fees, annual storage, and hidden costs.</p>
                  <span className="text-sm font-bold text-primary flex items-center">See Costs <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                </div>
              </div>
            </Link>

            <Link href="/blog/comparison">
              <div className="group cursor-pointer relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="h-48 bg-orange-50 flex items-center justify-center">
                   <span className="text-6xl">⚖️</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Reviews</div>
                  <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Bank Comparisons</h3>
                  <p className="text-muted-foreground mb-6 flex-1">Head-to-head reviews of the top private banks: CBR, Cryo-Cell, and more.</p>
                  <span className="text-sm font-bold text-primary flex items-center">Compare Banks <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Product CTA */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="bg-primary/5 rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative border border-primary/10">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="/images/ebook-mockup.png" 
                  alt="Decision Kit Mockup" 
                  className="w-full max-w-md mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-8 order-1 md:order-2">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">
                  Ready for the Complete Toolkit?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Skip the endless Googling. Get our comprehensive "Decision Kit" including the 
                  detailed ebook, comparison worksheets, and explainer videos.
                </p>
                <ul className="space-y-4">
                  {[
                    "In-depth reviews of top 7 banks",
                    "Printable comparison checklists",
                    "Hidden fee calculator",
                    "Step-by-step enrollment guide"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link href="/product">
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 h-16 rounded-full shadow-xl shadow-accent/20 w-full md:w-auto">
                      Get the Decision Kit - Only $97
                    </Button>
                  </Link>
                  <p className="text-xs text-muted-foreground mt-4 text-center md:text-left">
                    30-day money-back guarantee. Instant digital download.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
