import { useEffect, useState } from 'react'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#121212] text-[#F2F2F2] wing-accent">
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-xl/90' : ''
        }`}
        aria-label="Locally Universal main navigation"
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4 glass-surface rounded-b-2xl border-t-0 ${
            scrolled ? 'scale-95 shadow-lg shadow-black/60' : 'mt-3'
          }`}
        >
          <a href="#top" className="flex items-center gap-3 focus:outline-none">
            <div
              className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black/70 transition-all duration-300 ${
                scrolled ? 'scale-90' : 'scale-100'
              }`}
            >
              <img
                src="/lu-logo.png"
                alt="Locally Universal crest logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs tracking-[0.28em] text-[#B6FF1A] uppercase">
                Locally Universal
              </p>
              <p className="text-sm text-white/80">Local Roots. Global Stage.</p>
            </div>
          </a>

          <div className="flex items-center gap-6 text-xs sm:text-sm">
            <a
              href="#ecosystem"
              className="hidden sm:inline text-white/70 hover:text-[#B6FF1A] transition-colors"
            >
              Ecosystem
            </a>
            <a
              href="#ambassadors"
              className="hidden sm:inline text-white/70 hover:text-[#B6FF1A] transition-colors"
            >
              Ambassadors
            </a>
            <a
              href="#infrastructure"
              className="hidden sm:inline text-white/70 hover:text-[#B6FF1A] transition-colors"
            >
              Infrastructure
            </a>
            <button
              type="button"
              className="rounded-full border border-[#B6FF1A]/60 bg-[#B6FF1A]/10 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#B6FF1A] shadow-[0_0_24px_rgba(182,255,26,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-[#B6FF1A]"
            >
              Join the Glocal Movement
            </button>
          </div>
        </nav>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mt-1 rounded-b-2xl border border-t-0 border-white/10 bg-black/75 px-4 py-2 text-[11px] sm:text-xs text-white/70 shadow-[0_18px_40px_rgba(0,0,0,0.75)] backdrop-blur">
            <span className="font-semibold uppercase tracking-[0.26em] text-[#B6FF1A]">
              Coming Soon
            </span>
            <span className="ml-2">
              The Locally Universal ecosystem is in active development. Join now to be part of the
              first glocal wave.
            </span>
          </div>
        </div>
      </header>

      <main id="top" className="pt-[88px] sm:pt-[96px]">
        <section
          aria-labelledby="hero-title"
          className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-black/40 via-[#121212] to-[#121212] pb-24 pt-16 sm:pt-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-70"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(182,255,26,0.12),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(212,106,58,0.18),_transparent_65%)] mix-blend-screen" />

            <div className="absolute right-[-12%] top-[-16%] h-[420px] w-[420px] sm:h-[520px] sm:w-[520px] opacity-[0.09]">
              <div className="relative h-full w-full">
                <img
                  src="/lu-logo.png"
                  alt=""
                  className="absolute inset-0 h-full w-full scale-125 object-contain"
                />
                <div className="absolute inset-0 animate-[pulse_4s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,_rgba(182,255,26,0.9),_transparent_65%)] blur-3xl mix-blend-screen" />
                <div className="absolute inset-[18%] animate-[ping_6s_ease-out_infinite] rounded-full border border-[#B6FF1A]/40" />
                <div className="absolute inset-[8%] animate-[pulse_7s_ease-in-out_infinite] rounded-full border border-[#D46A3A]/40" />
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8">
            <div className="max-w-xl space-y-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/70 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B6FF1A] shadow-[0_0_0_4px_rgba(182,255,26,0.35)]" />
                From Accra to Berlin
              </p>

              <div>
                <h1
                  id="hero-title"
                  className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
                >
                  Local Roots.
                  <span className="block text-transparent bg-gradient-to-r from-[#B6FF1A] via-[#F2F2F2] to-[#D46A3A] bg-clip-text">
                    Global Stage.
                  </span>
                </h1>
                <p className="mt-5 max-w-xl text-sm sm:text-base text-white/70">
                  Empowering artists from Accra to Berlin to showcase their unique sound
                  while providing digital tools to scale internationally.
                </p>
              </div>

              <div className="grid gap-4 text-xs sm:text-sm sm:grid-cols-3">
                <div className="glass-surface rounded-xl px-4 py-3">
                  <p className="text-[10px] font-semibold tracking-[0.24em] text-[#B6FF1A] uppercase">
                    Public Discovery
                  </p>
                  <p className="mt-1 text-white/80">Interactive glocal map, 30s previews.</p>
                </div>
                <div className="glass-surface rounded-xl px-4 py-3">
                  <p className="text-[10px] font-semibold tracking-[0.24em] text-[#B6FF1A] uppercase">
                    Fan Experience
                  </p>
                  <p className="mt-1 text-white/80">Glocal feeds & live jam rooms.</p>
                </div>
                <div className="glass-surface rounded-xl px-4 py-3">
                  <p className="text-[10px] font-semibold tracking-[0.24em] text-[#B6FF1A] uppercase">
                    Creator Studio
                  </p>
                  <p className="mt-1 text-white/80">Monetization, analytics, collabs.</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-[#B6FF1A] bg-[#B6FF1A] px-6 py-2 text-xs sm:text-sm font-semibold tracking-[0.22em] text-black uppercase shadow-[0_0_32px_rgba(182,255,26,0.9)] hover:bg-[#c2ff46] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-[#B6FF1A]"
                >
                  Preview the Ecosystem
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs sm:text-sm font-medium text-white/80 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-white/50"
                >
                  Become an LU Ambassador
                </button>
              </div>
            </div>

            <div className="relative flex-1">
              <div className="glass-surface relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
                <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(182,255,26,0.55)_0,_transparent_65%)] blur-3xl opacity-90" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/15 bg-black/70">
                        <img
                          src="/lu-logo.png"
                          alt="Locally Universal"
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-[0.26em] text-[#B6FF1A] uppercase">
                          Glocal Session
                        </p>
                        <p className="text-sm text-white/80">
                          Accra ↔ Berlin live jam room
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/70">
                      Live · 312 listeners
                    </span>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="space-y-3">
                      <h2 className="text-xs font-semibold tracking-[0.26em] text-[#B6FF1A] uppercase">
                        Glocal Map Discovery
                      </h2>
                      <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black via-[#1c1c1c] to-black p-3">
                        <div className="relative h-full w-full rounded-xl bg-[radial-gradient(circle_at_20%_20%,rgba(182,255,26,0.4),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(212,106,58,0.55),transparent_55%)]">
                          <div className="absolute inset-6 rounded-xl border border-white/10" />
                          <div className="absolute inset-[18%] rounded-full border border-white/10" />
                          <div className="absolute inset-[30%] rounded-full border border-white/5" />
                          <div className="absolute left-1/3 top-1/3 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B6FF1A] shadow-[0_0_18px_rgba(182,255,26,0.9)]" />
                          <div className="absolute right-1/4 bottom-1/3 h-2 w-2 translate-x-1/2 translate-y-1/2 rounded-full bg-[#D46A3A] shadow-[0_0_18px_rgba(212,106,58,0.9)]" />
                        </div>
                      </div>
                      <p className="text-[11px] text-white/70">
                        Fans drop into an interactive map to explore 30-second previews from
                        hyperlocal scenes around the world.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h2 className="text-xs font-semibold tracking-[0.26em] text-[#B6FF1A] uppercase">
                        Glocal Fan Clubs
                      </h2>
                      <div className="space-y-2 rounded-2xl border border-white/10 bg-black/50 p-3">
                        <TierPill label="Bronze" accent="border-white/20 bg-white/5" />
                        <TierPill label="Silver" accent="border-slate-200/60 bg-slate-200/10" />
                        <TierPill
                          label="Gold"
                          accent="border-amber-300/80 bg-amber-300/10 shadow-[0_0_16px_rgba(245,197,95,0.7)]"
                        />
                      </div>
                      <p className="text-[11px] text-white/70">
                        Unlock backstage feeds, early drops, and city-specific meetups by
                        backing your favorite artists.
                      </p>

                      <div className="mt-4 grid grid-cols-2 gap-3 text-[10px]">
                        <StatPill label="Cities connected" value="48+" />
                        <StatPill label="Average session time" value="27 min" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="ecosystem"
          aria-labelledby="ecosystem-title"
          className="relative border-b border-white/5 bg-[#121212] py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B6FF1A]">
                  The LU Ecosystem
                </p>
                <h2
                  id="ecosystem-title"
                  className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight"
                >
                  Four lanes. One glocal movement.
                </h2>
                <p className="mt-2 max-w-xl text-sm text-white/70">
                  From first listen to sold-out tour, Locally Universal weaves discovery, fandom,
                  and infrastructure into a single experience.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <EcosystemCard
                title="Public Discovery"
                badge="Map · Spotlight · Previews"
                description="An always-on discovery layer that surfaces local scenes to global ears."
                points={[
                  'Interactive map discovery across neighborhoods and cities.',
                  'International spotlight rail curating weekly glocal stories.',
                  '30-second audio previews that invite deeper listening—not doom-scrolling.',
                ]}
              />
              <EcosystemCard
                title="Fan Experience"
                badge="Feeds · Fan Clubs · Jam Rooms"
                description="Turn casual listeners into superfans anchored in real communities."
                points={[
                  'Glocal feeds blending hyperlocal stories with international context.',
                  'Tiered fan clubs (Bronze, Silver, Gold) with unlockable perks.',
                  'Live Jam Rooms where fans tune into cross-city sessions in real time.',
                ]}
              />
              <EcosystemCard
                title="Creator Studio"
                badge="Monetization · Analytics · Collabs"
                description="A studio-grade control room that respects both artistry and data."
                points={[
                  'Direct payouts powered by Stripe and Flutterwave integrations.',
                  'Audience analytics by city, session, and engagement depth.',
                  'Collab Hub to find co-producers, writers, and visual artists across borders.',
                ]}
              />
              <EcosystemCard
                id="infrastructure"
                title="Secure Infrastructure"
                badge="OAuth 2.0 · Governance"
                description="Trustworthy rails for artists, fans, and administrators."
                points={[
                  'OAuth 2.0-based authentication across web and mobile touchpoints.',
                  'Granular administrative oversight for festivals, collectives, and labels.',
                  'Audit-friendly logs that keep the ecosystem safe without killing the vibe.',
                ]}
              />
            </div>
          </div>
        </section>

        <section
          id="ambassadors"
          aria-labelledby="ambassador-title"
          className="relative overflow-hidden border-b border-white/5 bg-[#121212] py-16 sm:py-20"
        >
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#B6FF1A]/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(circle_at_bottom,_rgba(212,106,58,0.6),_transparent_70%)] blur-3xl" />
          </div>

          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
            <div className="flex-1 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B6FF1A]">
                Ambassador Opportunity
              </p>
              <h2
                id="ambassador-title"
                className="text-2xl sm:text-3xl font-semibold tracking-tight"
              >
                Be the voice of the glocal movement.
              </h2>
              <p className="max-w-xl text-sm text-white/70">
                LU Ambassadors sit at the intersection of culture, tech, and community. You don&apos;t
                just promote artists—you architect bridges between local stories and global ears.
              </p>

              <dl className="grid gap-4 text-sm sm:grid-cols-2">
                <AmbassadorPoint
                  title="Curate your city"
                  body="Lead a local feed that reflects your scene's real energy—not algorithmic guesswork."
                />
                <AmbassadorPoint
                  title="Host glocal rooms"
                  body="Program live jam rooms and listening sessions that pair your city with others worldwide."
                />
                <AmbassadorPoint
                  title="Grow with artists"
                  body="Earn recognition and incentives as artists in your orbit scale internationally."
                />
                <AmbassadorPoint
                  title="Shape the roadmap"
                  body="Join closed feedback circles with LU’s product and infrastructure teams."
                />
              </dl>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-[#D46A3A] bg-[#D46A3A] px-5 py-2 text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-black shadow-[0_0_28px_rgba(212,106,58,0.9)] hover:bg-[#df7c4d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-[#D46A3A]"
                >
                  Apply as an LU Ambassador
                </button>
                <p className="text-[11px] text-white/60">
                  Early cohorts: Accra, Berlin, Lagos, London, São Paulo.
                </p>
              </div>
            </div>

            <div className="flex-1">
              <div className="glass-surface relative overflow-hidden rounded-3xl border border-white/10 p-5 sm:p-6">
                <div className="absolute -right-6 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(182,255,26,0.65),_transparent_65%)] blur-3xl opacity-70" />
                <div className="relative space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                    Ambassador Console
                  </p>

                  <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[11px] text-white/60">Live Glocal Rooms</p>
                        <p className="text-sm font-medium text-white">
                          6 active · 3 cities pairing
                        </p>
                      </div>
                      <span className="rounded-full bg-[#B6FF1A]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B6FF1A]">
                        On Air
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3 text-[11px] text-white/70">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="text-xs font-semibold text-white">Accra ↔ Berlin</p>
                        <p className="mt-1 text-[10px] text-white/60">Neo-soul & alt-hip hop.</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="text-xs font-semibold text-white">Lagos ↔ London</p>
                        <p className="mt-1 text-[10px] text-white/60">Afro-fusion showcase.</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="text-xs font-semibold text-white">São Paulo ↔ Paris</p>
                        <p className="mt-1 text-[10px] text-white/60">Hybrid electronic sets.</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 text-[11px] sm:grid-cols-2">
                    <div className="rounded-2xl border border-[#B6FF1A]/40 bg-[#B6FF1A]/5 p-3">
                      <p className="font-semibold text-[#B6FF1A]">Glocal Pulse Score</p>
                      <p className="mt-1 text-white/70">
                        Track how your city&apos;s artists are resonating across borders in real time.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/60 p-3">
                      <p className="font-semibold text-white/90">Ambassador Circle</p>
                      <p className="mt-1 text-white/70">
                        Monthly huddle with LU HQ, product demos, and roadmap previews.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 bg-black/60 py-6 text-[11px] text-white/60">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
            <p>© {new Date().getFullYear()} Locally Universal. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <p>
                Built on{' '}
                <span className="text-[#B6FF1A]">
                  secure OAuth 2.0 rails &amp; administrative oversight
                </span>
                .
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

type TierPillProps = {
  label: string
  accent: string
}

function TierPill({ label, accent }: TierPillProps) {
  return (
    <div
      className={`flex items-center justify-between rounded-full border px-3 py-1.5 text-[11px] text-white/80 ${accent}`}
    >
      <span>{label} Fan Club</span>
      <span className="text-[10px] uppercase tracking-[0.22em] text-white/60">
        Unlocks
      </span>
    </div>
  )
}

type StatPillProps = {
  label: string
  value: string
}

function StatPill({ label, value }: StatPillProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/60 px-3 py-2">
      <p className="text-[10px] text-white/60">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  )
}

type EcosystemCardProps = {
  title: string
  description: string
  badge: string
  points: string[]
  id?: string
}

function EcosystemCard({ title, description, badge, points, id }: EcosystemCardProps) {
  return (
    <article
      id={id}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-black/80 p-5 sm:p-6 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="pointer-events-none absolute inset-px rounded-[1.4rem] border border-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(182,255,26,0.32),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(212,106,58,0.32),_transparent_60%)] blur-xl" />
      </div>

      <header className="relative flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.26em] text-[#B6FF1A]">
            {badge}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-white/70">{description}</p>
        </div>
        <div className="mt-1 h-9 w-9 rounded-full border border-[#B6FF1A]/40 bg-[#B6FF1A]/10 shadow-[0_0_18px_rgba(182,255,26,0.7)] group-hover:neon-border" />
      </header>

      <ul className="relative mt-4 space-y-2 text-sm text-white/75">
        {points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#B6FF1A]" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

type AmbassadorPointProps = {
  title: string
  body: string
}

function AmbassadorPoint({ title, body }: AmbassadorPointProps) {
  return (
    <div className="glass-surface rounded-2xl border border-white/10 p-4">
      <dt className="text-xs font-semibold tracking-[0.22em] uppercase text-white/80">
        {title}
      </dt>
      <dd className="mt-1 text-xs text-white/70">{body}</dd>
    </div>
  )
}

export default App
