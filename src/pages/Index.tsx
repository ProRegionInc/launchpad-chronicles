import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import heroBg from "@/assets/hero-aurora.jpg";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--spot-x", `${x}%`);
    el.style.setProperty("--spot-y", `${y}%`);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto flex items-center justify-between py-6">
        <a href="/" className="font-extrabold text-lg tracking-tight">
          <span className="bg-gradient-primary bg-clip-text text-transparent">Aurora</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:underline underline-offset-4">Features</a>
          <a href="#get-started" className="hover:underline underline-offset-4">Get started</a>
        </nav>
        <Button asChild variant="elevated" size="sm">
          <a href="#get-started" aria-label="Get started with Aurora starter">Get started</a>
        </Button>
      </header>

      <main>
        <section
          ref={heroRef}
          onMouseMove={handleMouseMove}
          className="hero-spotlight relative overflow-hidden"
          aria-label="Hero section"
        >
          <div className="container mx-auto grid gap-10 lg:grid-cols-2 items-center py-16">
            <article>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Aurora — Beautiful React Starter
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-prose">
                Kickstart your next project with a polished React + Tailwind foundation, elegant components, and a subtle interactive spotlight.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" asChild>
                  <a href="#get-started">Create your app</a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="#features">Explore features</a>
                </Button>
              </div>
            </article>
            <aside className="relative">
              <div className="glass-panel rounded-xl shadow-elevated overflow-hidden">
                <img
                  src={heroBg}
                  alt="Abstract violet and cyan gradient background for the Aurora React starter"
                  width={1200}
                  height={800}
                  loading="eager"
                  className="w-full h-auto"
                />
              </div>
            </aside>
          </div>
        </section>

        <section id="features" className="container mx-auto py-20">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">What you get</h2>
            <p className="text-muted-foreground">A carefully curated foundation to move fast and look great from day one.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-transform duration-200 hover:-translate-y-0.5">
              <CardHeader>
                <CardTitle>Refined design system</CardTitle>
                <CardDescription>Semantic tokens, gradients, shadows, and motion out of the box.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-transform duration-200 hover:-translate-y-0.5">
              <CardHeader>
                <CardTitle>Shadcn components</CardTitle>
                <CardDescription>Customized variants for beautiful, accessible UI.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="transition-transform duration-200 hover:-translate-y-0.5">
              <CardHeader>
                <CardTitle>SEO-ready</CardTitle>
                <CardDescription>Optimized meta tags, semantic HTML, and fast performance.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section id="get-started" className="container mx-auto pb-24">
          <div className="rounded-xl border p-8 text-center bg-card shadow-sm">
            <h3 className="text-2xl font-semibold mb-3">Ready to build?</h3>
            <p className="text-muted-foreground mb-6">Start customizing this starter and ship something beautiful.</p>
            <Button variant="hero" size="lg">Open the editor</Button>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto py-8 text-sm text-muted-foreground flex items-center justify-between">
          <p>© {new Date().getFullYear()} Aurora Starter</p>
          <a href="#" className="hover:underline underline-offset-4">Privacy</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
