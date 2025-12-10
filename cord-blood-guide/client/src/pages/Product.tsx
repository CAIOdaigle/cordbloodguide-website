import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Shield, Star, Download, PlayCircle, FileText, ArrowRight } from "lucide-react";

export default function Product() {
  return (
    <Layout>
      {/* Sales Hero */}
      <section className="bg-secondary/30 pt-16 pb-24">
        <div className="container text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 text-sm font-bold text-accent-foreground mb-4">
            <Star className="w-4 h-4 mr-2 fill-current" />
            The #1 Resource for Expectant Parents
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Finally, a Clear and Unbiased Guide to Making the Best Cord Blood Decision.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stop guessing. Get the research, the comparisons, and the tools you need to choose the right bank for your baby's future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-xl px-12 h-16 rounded-full shadow-xl shadow-accent/20">
              Get Instant Access - $97
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Trusted by over 5,000 parents. 100% Money-back guarantee.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-white">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-100 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-border">
                <h3 className="font-serif text-2xl font-bold mb-6 text-red-600">The "Research Loop"</h3>
                <ul className="space-y-4">
                  {[
                    "Spending hours reading conflicting forum posts",
                    "Getting bombarded by aggressive sales calls",
                    "Confused by hidden storage fees",
                    "Worrying about making the wrong medical choice"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="mt-1 min-w-5 min-h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-bold">✕</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                You want to protect your baby, but the industry makes it hard.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cord blood banking is a significant investment, often costing over $2,000 upfront. Yet, most information online is either marketing fluff from the banks themselves or outdated forum advice.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You need an objective, expert guide to cut through the noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution - What's Inside */}
      <section className="py-24 bg-primary/5">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Introducing: The Ultimate Decision Kit
            </h2>
            <p className="text-lg text-muted-foreground">
              A complete digital toolkit designed to take you from "confused" to "confident" in one afternoon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FileText className="w-8 h-8 text-primary" />,
                title: "The Core Ebook",
                desc: "100+ pages of unbiased research, science explained simply, and deep-dive bank reviews."
              },
              {
                icon: <FileText className="w-8 h-8 text-primary" />,
                title: "Comparison Sheets",
                desc: "Printable worksheets to compare costs, accreditation, and features side-by-side."
              },
              {
                icon: <PlayCircle className="w-8 h-8 text-primary" />,
                title: "Explainer Videos",
                desc: "Short, animated videos that explain the collection process and stem cell science."
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Enrollment Guide",
                desc: "Step-by-step checklist for the big day, including questions to ask your OBGYN."
              }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sneak Peek */}
          <div className="mt-20 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-border/50 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold">Inside the Ebook:</h3>
                <div className="space-y-0">
                  {[
                    "Chapter 1: What is Cord Blood? (The Science)",
                    "Chapter 2: Public vs. Private Banking",
                    "Chapter 4: Is it Worth It? (ROI Analysis)",
                    "Chapter 5: The Hidden Costs Exposed",
                    "Chapter 6: Top 7 Banks Reviewed (2025 Edition)"
                  ].map((chapter, i) => (
                    <div key={i} className="flex items-center gap-4 py-3 border-b border-border/50 last:border-0">
                      <span className="text-primary font-bold text-sm bg-primary/10 px-2 py-1 rounded">CH {i + 1}</span>
                      <span className="font-medium text-foreground">{chapter.split(': ')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                 <img src="/images/ebook-mockup.png" alt="Ebook Preview" className="rounded-xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Guarantee */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl mx-auto">
          <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl rounded-[2.5rem]">
            <div className="bg-primary/5 p-8 text-center border-b border-primary/10">
              <h2 className="font-serif text-3xl font-bold mb-2">Get The Complete Kit</h2>
              <p className="text-muted-foreground">Instant Digital Download</p>
            </div>
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-foreground">$97</span>
                    <span className="text-xl text-muted-foreground line-through">$197</span>
                  </div>
                  <p className="text-green-600 font-bold text-sm bg-green-50 inline-block px-3 py-1 rounded-full">
                    Save $100 today
                  </p>
                  <ul className="space-y-3">
                    {[
                      "The Ultimate Cord Blood Guide (PDF)",
                      "Bank Comparison Worksheets (PDF)",
                      "3 Explainer Videos (MP4)",
                      "Lifetime Updates"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full space-y-4">
                  <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-xl h-16 rounded-xl shadow-lg">
                    Buy Now <ArrowRight className="ml-2" />
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Shield className="w-4 h-4" />
                    Secure Payment via Stripe
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-border/50 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg">30-Day Money-Back Guarantee</h3>
                <p className="text-muted-foreground max-w-md mx-auto text-sm">
                  If you don't feel more confident and informed after reading our guide, simply email us for a full refund. No questions asked.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary/30">
        <div className="container max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "Is this a physical book?",
                a: "No, this is a digital product. You will receive instant access to download the PDF ebook, worksheets, and videos immediately after purchase."
              },
              {
                q: "Are you affiliated with any cord blood bank?",
                a: "Absolutely not. We are an independent educational resource. We do not accept commissions for recommending specific banks in our guide."
              },
              {
                q: "Is the information up to date?",
                a: "Yes, the guide was last updated in December 2025 to reflect current pricing, new medical research, and the latest bank accreditation status."
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-border/50 rounded-xl px-6">
                <AccordionTrigger className="text-lg font-medium hover:no-underline py-6">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
}
