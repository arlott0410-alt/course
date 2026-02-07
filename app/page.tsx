export default function Page() {
  const company = "ArmSungMa";
  const courseName = "สร้างเว็บ";
  const primaryCTA = "Enroll Now";

  const learnItems = [
    { title: "เลือกแนวเว็บที่ขายได้", desc: "วางเป้าหมายเว็บ + กลุ่มลูกค้า + สิ่งที่เว็บต้องทำให้สำเร็จ" },
    { title: "วางโครงสร้างหน้าเว็บ", desc: "Site map, Sections, CTA และ UX ที่ทำให้คนตัดสินใจง่าย" },
    { title: "ทำเว็บให้โหลดไว + มือถือสวย", desc: "Mobile-first, Core Web Vitals, SEO พื้นฐาน" },
    { title: "ต่อระบบเก็บลีด/แชท", desc: "ฟอร์มเก็บข้อมูล + ปุ่ม LINE/WhatsApp + tracking เบื้องต้น" },
    { title: "ปล่อยเว็บขึ้นใช้งานจริง", desc: "Deploy + โดเมน + checklist ก่อนยิงแอด" },
    { title: "ปรับปรุงให้ขายดีขึ้น", desc: "A/B test, ปรับ copy, ปรับ CTA และวัดผล" },
  ];

  const modules = [
    { title: "Module 1 — เป้าหมาย & แผนเว็บ", bullets: ["กำหนดเป้าหมายเว็บ", "ลูกค้าเป้าหมาย", "โครงสร้าง CTA"] },
    { title: "Module 2 — โครงสร้างหน้า & Copy", bullets: ["Hero/Benefits", "Proof/FAQ", "Pricing & Offer"] },
    { title: "Module 3 — Design ที่ดูแพง", bullets: ["Layout + spacing", "สี/ฟอนต์", "Components ที่ใช้บ่อย"] },
    { title: "Module 4 — SEO & Performance", bullets: ["Title/Meta", "On-page SEO", "ความเร็วเว็บ"] },
    { title: "Module 5 — Lead & Chat System", bullets: ["ฟอร์มเก็บ lead", "LINE/WhatsApp", "Tracking พื้นฐาน"] },
    { title: "Module 6 — Deploy & Scale", bullets: ["Deploy", "โดเมน", "เช็คลิสต์ก่อนยิงแอด"] },
  ];

  const pricing = [
    { name: "Starter", price: "฿___", note: "ครั้งเดียว", features: ["เข้าเรียนทั้งหมด", "Template + Checklist", "อัปเดต __ เดือน"], cta: "Enroll" },
    { name: "Pro", price: "฿___", note: "ครั้งเดียว", popular: true, features: ["ทุกอย่างใน Starter", "Q&A กลุ่ม รายสัปดาห์", "ตรวจหน้าเว็บ 1 ครั้ง"], cta: primaryCTA },
    { name: "VIP", price: "฿___", note: "ครั้งเดียว", features: ["ทุกอย่างใน Pro", "ซัพพอร์ตใกล้ชิด", "โค้ช 1:1 จำนวน __ ครั้ง"], cta: "Apply for VIP" },
  ];

  const faqs = [
    { q: "เหมาะกับมือใหม่ไหม?", a: "เหมาะครับ เน้นทำจริงทีละขั้น ตั้งแต่โครงหน้า จนถึงปล่อยเว็บขึ้นใช้งาน" },
    { q: "ต้องมีพื้นฐานโค้ดไหม?", a: "ไม่จำเป็น เริ่มจากศูนย์ได้ (ถ้ามีพื้นฐานจะไปไวขึ้น)" },
    { q: "เข้าถึงคอร์สได้นานแค่ไหน?", a: "เข้าถึงได้ __ เดือน (ใส่ข้อมูลทีหลังได้)" },
    { q: "มีซัพพอร์ตไหม?", a: "มีตามแพ็กเกจ Starter/Pro/VIP" },
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
              <p className="text-xs text-slate-500">คอร์ส: {courseName}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#learn" className="hover:text-slate-900">สิ่งที่จะได้เรียน</a>
            <a href="#instructor" className="hover:text-slate-900">ผู้สอน</a>
            <a href="#modules" className="hover:text-slate-900">โมดูล</a>
            <a href="#pricing" className="hover:text-slate-900">ราคา</a>
            <a href="#faq" className="hover:text-slate-900">คำถาม</a>
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
              {company} • เปิดรับสมัครรอบใหม่
            </div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              สร้างเว็บให้ขายได้{" "}
              <span className="bg-gradient-to-r from-fuchsia-600 via-sky-600 to-lime-600 bg-clip-text text-transparent">
                เริ่มวันนี้
              </span>
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              คอร์ส “{courseName}” จาก {company} — สอนทำ Landing Page แบบขายได้จริง
              พร้อมฟอร์มเก็บลีด + ปุ่ม LINE/WhatsApp + เช็คลิสต์ Deploy (ใส่รายละเอียดเพิ่มทีหลังได้)
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
                รับบทเรียนฟรี + checklist
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
                <p className="text-xs text-slate-600">พร้อมใช้</p>
              </div>
            </div>
          </div>

          {/* Lead capture */}
          <div id="lead" className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-slate-900/5">
              <h2 className="text-xl font-extrabold">Free starter pack</h2>
              <p className="mt-2 text-sm text-slate-600">
                กรอกข้อมูลเพื่อรับบทเรียนฟรี + checklist จาก {company} (placeholder)
              </p>

              <form className="mt-5 space-y-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700">ชื่อ</label>
                  <input
                    className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-sky-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">อีเมล</label>
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
                  ส่งให้ฉันเลย
                </button>
                <p className="text-xs text-slate-500">
                  *ตอนนี้เป็นฟอร์มตัวอย่าง (ยังไม่ต่อระบบส่งอีเมล) — เติมทีหลังได้
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Learn */}
      <section id="learn" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold">สิ่งที่คุณจะได้เรียน</h2>
        <p className="mt-2 text-slate-600">หัวข้อหลักแบบลงมือทำ (แก้รายละเอียดทีหลังได้)</p>

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
                <p className="text-lg font-extrabold">ผู้สอน (ใส่ชื่อทีหลัง)</p>
                <p className="text-sm text-slate-600">{company}</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-700">
              ใส่โปรไฟล์ผู้สอน, ผลงาน, ประสบการณ์, จุดเด่น 3 ข้อ (placeholder)
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
            <h2 className="text-3xl font-extrabold">เน้นทำจริง ไม่เน้นทฤษฎี</h2>
            <p className="mt-3 text-slate-600">
              ได้ template + checklist + ตัวอย่างครบ เพื่อทำเว็บของคุณให้เสร็จและปล่อยขึ้นใช้งานได้จริง
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              {[
                "Roadmap ชัดเจน",
                "ไฟล์ตัวอย่างพร้อมแก้",
                "โครงหน้า + copy พร้อมใช้",
                "เช็คลิสต์ Deploy/SEO",
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
        <h2 className="text-3xl font-extrabold">โมดูลคอร์ส</h2>
        <p className="mt-2 text-slate-600">โครงสร้างคอร์ส (placeholder)</p>

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
          <h2 className="text-3xl font-extrabold">ผลลัพธ์ผู้เรียน</h2>
          <p className="mt-2 text-slate-600">ใส่รีวิวจริงทีหลังได้</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["รีวิว A", "รีวิว B", "รีวิว C"].map((t) => (
              <div key={t} className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-700">“{t} — ใส่คำรีวิวจริงทีหลัง”</p>
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
            ผลลัพธ์แตกต่างกันตามความพยายามและบริบทของผู้เรียน
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-extrabold">ราคาแพ็กเกจ</h2>
        <p className="mt-2 text-slate-600">ตอนนี้ยังไม่ใส่ราคา ก็ใช้ placeholder ไปก่อน</p>

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
                  แนะนำ
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
          <h2 className="text-3xl font-extrabold">คำถามที่พบบ่อย</h2>
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
                  <h2 className="text-3xl font-extrabold">พร้อมเริ่มแล้วใช่ไหม?</h2>
                  <p className="mt-2 text-slate-600">
                    สมัครเรียน หรือทักมาถามรายละเอียดผ่าน LINE/WhatsApp (ใส่ลิงก์จริงทีหลัง)
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
                      รับบทเรียนฟรี
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-extrabold">แชทสอบถาม</p>
                  <p className="mt-2 text-sm text-slate-600">
                    แก้ลิงก์ด้านล่างเป็นของจริงได้ทันที
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
            หมายเหตุ: หน้านี้เป็นไฟล์พร้อมรัน (Next.js + Tailwind) — เติมข้อมูลจริงทีหลังได้
          </footer>
        </div>
      </section>
    </div>
  );
}
