export default function Page() {
  const company = "ArmSungMa";
  const courseName = "Build Websites";
  const primaryCTA = "Enroll Now";

  const learnItems = [
    { title: "Choose a website that sells", desc: "Set website goals + target audience + what your site must achieve" },
    { title: "Plan your page structure", desc: "Site map, Sections, CTA and UX that make decisions easy" },
    { title: "Fast loading + mobile-friendly", desc: "Mobile-first, Core Web Vitals, basic SEO" },
    { title: "Lead capture & chat integration", desc: "Data forms + LINE/WhatsApp buttons + basic tracking" },
    { title: "Launch your site live", desc: "Deploy + domain + pre-launch checklist" },
    { title: "Optimize for better sales", desc: "A/B test, refine copy, improve CTA and measure results" },
  ];

  const modules = [
    { title: "Module 1 — Goals & Website Plan", bullets: ["Define website goals", "Target audience", "CTA structure"] },
    { title: "Module 2 — Page Structure & Copy", bullets: ["Hero/Benefits", "Proof/FAQ", "Pricing & Offer"] },
    { title: "Module 3 — Premium-looking Design", bullets: ["Layout + spacing", "Colors/fonts", "Common components"] },
    { title: "Module 4 — SEO & Performance", bullets: ["Title/Meta", "On-page SEO", "Site speed"] },
    { title: "Module 5 — Lead & Chat System", bullets: ["Lead capture forms", "LINE/WhatsApp", "Basic tracking"] },
    { title: "Module 6 — Deploy & Scale", bullets: ["Deploy", "Domain", "Pre-launch checklist"] },
  ];

  const pricing = [
    { name: "Starter", price: "$___", note: "one-time", features: ["Full course access", "Template + Checklist", "__ months updates"], cta: "Enroll" },
    { name: "Pro", price: "$___", note: "one-time", popular: true, features: ["Everything in Starter", "Weekly group Q&A", "1 website review"], cta: primaryCTA },
    { name: "VIP", price: "$___", note: "one-time", features: ["Everything in Pro", "Priority support", "__ sessions of 1:1 coaching"], cta: "Apply for VIP" },
  ];

  const faqs = [
    { q: "Is this suitable for beginners?", a: "Yes! We focus on hands-on, step-by-step from planning to launching your site." },
    { q: "Do I need coding experience?", a: "No. You can start from scratch (prior experience will help you move faster)." },
    { q: "How long do I have access?", a: "You get __ months of access (fill in details later)." },
    { q: "Is there support?", a: "Yes, according to your Starter/Pro/VIP package." },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-sky-500 to-lime-400" />
            <div className="leading-tight">
              <p className="text-sm font-extrabold">{company}</p>
              <p className="text-xs text-slate-500">Course: {courseName}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#learn" className="hover:text-slate-900">What you&apos;ll learn</a>
            <a href="#instructor" className="hover:text-slate-900">Instructor</a>
            <a href="#modules" className="hover:text-slate-900">Modules</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>

          <a
            href="#pricing"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90"
          >
            {primaryCTA}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-fuchsia-400/40 blur-3xl" />
          <div className="absolute left-1/2 top-16 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-400/40 blur-3xl" />
          <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-lime-300/40 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,63,94,0.10),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.12),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(132,204,22,0.12),transparent_45%)]" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              {company} • Now accepting enrollments
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Build websites that sell{" "}
              <span className="bg-gradient-to-r from-fuchsia-600 via-sky-600 to-lime-600 bg-clip-text text-transparent">
                Start today
              </span>
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              The “{courseName}” course from {company} — Learn to build landing pages that actually sell,
              with lead forms + LINE/WhatsApp buttons + Deploy checklist (add details later)
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-600 via-sky-600 to-lime-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/20 hover:opacity-95"
              >
                {primaryCTA}
              </a>
              <a
                href="#lead"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white"
              >
                Get free lessons + checklist
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-3">
                <p className="text-lg font-extrabold">6</p>
                <p className="text-xs text-slate-600">Modules</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-3">
                <p className="text-lg font-extrabold">__</p>
                <p className="text-xs text-slate-600">Weeks</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-3">
                <p className="text-lg font-extrabold">Templates</p>
                <p className="text-xs text-slate-600">Ready to use</p>
              </div>
            </div>
          </div>

          {/* Lead capture */}
          <div id="lead" className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-slate-900/5">
              <h2 className="text-xl font-extrabold">Free starter pack</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill in your details to get free lessons + checklist from {company} (placeholder)
              </p>

              <form className="mt-5 space-y-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700">Name</label>
                  <input
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-fuchsia-300"
                    placeholder="you@email.com"
                  />
                </div>
                <button
                  type="button"
                  className="w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:opacity-90"
                >
                  Send it to me
                </button>
                <p className="text-xs text-slate-500">
                  *This is a sample form (email system not connected yet) — add later
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Learn */}
      <section id="learn" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold">What you&apos;ll learn</h2>
        <p className="mt-2 text-slate-600">Hands-on topics (edit details later)</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {learnItems.map((x) => (
            <div key={x.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-fuchsia-600 via-sky-500 to-lime-400" />
              <h3 className="mt-4 text-lg font-extrabold">{x.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{x.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instructor */}
      <section id="instructor" className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-fuchsia-600 via-sky-500 to-lime-400" />
              <div>
                <p className="text-lg font-extrabold">Instructor (add name later)</p>
                <p className="text-sm text-slate-600">{company}</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-700">
              Add instructor profile, portfolio, experience, 3 key strengths (placeholder)
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-lg font-extrabold">__</p>
                <p className="text-xs text-slate-600">Students</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-lg font-extrabold">__</p>
                <p className="text-xs text-slate-600">Years</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-lg font-extrabold">__</p>
                <p className="text-xs text-slate-600">Projects</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold">Hands-on, not theory</h2>
            <p className="mt-3 text-slate-600">
              Get templates + checklists + full examples to finish and launch your website
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              {[
                "Clear roadmap",
                "Editable sample files",
                "Ready-to-use layouts + copy",
                "Deploy/SEO checklist",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1 h-5 w-5 rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30" />
                  <span className="font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold">Course modules</h2>
        <p className="mt-2 text-slate-600">Course structure (placeholder)</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {modules.map((m) => (
            <div key={m.title} className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-extrabold">{m.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {m.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-extrabold">Student results</h2>
          <p className="mt-2 text-slate-600">Add real reviews later</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Review A", "Review B", "Review C"].map((t) => (
              <div key={t} className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-700">“{t} — Add real review text later”</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-extrabold">Student Name</p>
                    <p className="text-xs text-slate-500">Role / Result</p>
                  </div>
                  <span className="rounded-full bg-gradient-to-r from-fuchsia-100 via-sky-100 to-lime-100 px-3 py-1 text-xs font-bold text-slate-800">
                    Result
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Results vary based on effort and student context
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold">Pricing</h2>
        <p className="mt-2 text-slate-600">Prices not set yet — placeholder for now</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={
                p.popular
                  ? "relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-sky-500/10"
                  : "rounded-3xl border border-slate-200 bg-white p-6"
              }
            >
              {p.popular && (
                <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-fuchsia-600 via-sky-600 to-lime-500 px-3 py-1 text-xs font-extrabold text-white">
                  Recommended
                </div>
              )}

              <p className="text-sm font-bold text-slate-700">{p.name}</p>
              <p className="mt-2 text-4xl font-extrabold">
                {p.price} <span className="text-sm font-semibold text-slate-500">/ {p.note}</span>
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {p.features.map((f) => (
                  <li key={f}>✔ {f}</li>
                ))}
              </ul>

              <a
                href="#cta"
                className={
                  p.popular
                    ? "mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white hover:opacity-90"
                    : "mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold hover:bg-slate-50"
                }
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-extrabold">Frequently asked questions</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-3xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer text-sm font-extrabold text-slate-900">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl bg-gradient-to-r from-fuchsia-600 via-sky-600 to-lime-500 p-[1px]">
            <div className="rounded-3xl bg-white p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <h2 className="text-3xl font-extrabold">Ready to get started?</h2>
                  <p className="mt-2 text-slate-600">
                    Enroll now or reach out via LINE/WhatsApp for questions (add real links later)
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="#pricing"
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-extrabold text-white hover:opacity-90"
                    >
                      {primaryCTA}
                    </a>
                    <a
                      href="#lead"
                      className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold hover:bg-slate-50"
                    >
                      Get free lessons
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-extrabold">Chat for inquiries</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Update the links below when ready
                  </p>

                  <div className="mt-5 grid gap-3">
                    <a
                      href="https://line.me/R/ti/p/@yourline"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-extrabold text-white hover:opacity-90"
                    >
                      Message on LINE
                    </a>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white hover:opacity-90"
                    >
                      Message on WhatsApp
                    </a>
                  </div>

                  <p className="mt-4 text-xs text-slate-500">
                    © {new Date().getFullYear()} {company}. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <footer className="mx-auto mt-10 max-w-6xl px-1 pb-8 text-xs text-slate-500">
            Note: This is a ready-to-run page (Next.js + Tailwind) — add real content later
          </footer>
        </div>
      </section>
    </div>
  );
}
