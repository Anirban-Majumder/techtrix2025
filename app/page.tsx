"use client"

import { useEffect, useState } from "react"
import Image from "next/image"


export default function AnimatedEvent() {
  const [screen, setScreen] = useState(1)
  const date = " 5th to 8th March 2025"
  const siteUrl = "https://techtrix.rcciit.org.in"

  useEffect(() => {
    // Screen 1: Initial loading (0-2s)
    const timer1 = setTimeout(() => setScreen(2), 2000)

    // Screen 2: Main text (2-5s)
    const timer2 = setTimeout(() => setScreen(3), 9000)

    // Screen 3: Date text (5-7s)
    const timer3 = setTimeout(() => setScreen(4), 25000)

    const timer4 = setTimeout(() => setScreen(5), 35000);

    const timer5 = setTimeout(() => setScreen(6), 40000);

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full px-4 overflow-hidden bg-black">
      {/* Animated background glow */}
      <div className="absolute inset-0 animate-glow-slide bg-gradient-to-b from-transparent via-purple-500/20 to-purple-600/30" />

      {/* Content container */}
      <div className="relative flex min-h-screen items-center justify-center text-center">
        <div
          style={{
            fontFamily: "var(--font-kagitingan)",
            fontWeight: 700,
            fontSize: "48px",
            lineHeight: "57px",
            letterSpacing: "0px",
          }}
        >
          {/* Screen 1: Loading */}
          {screen === 1 && (
            <Image
              src="/load.gif"
              alt="Loading animation"
              width={640}
              height={640}
              className="mx-auto"
            />
          )}

          {/* Screen 2: Main Text */}
          {screen === 2 && (
            <h1 className="animate-fade-in text-2xl font-bold text-white">
              <div>Smart Attendance System is activating …</div>
            </h1>
          )}

          {/* Screen 3: Date */}
          {screen === 3 && (
            <div className="animate-fade-in space-y-4 text-white">
              <div className="text-2xl">Attendance to bas bahana tha…</div>
              <p className="text-xl font-bold tracking-wider sm:text-4xl">
                …Asal mein humein bas yeh dekhna tha ki tum kitni jaldi QR scan
                kar sakte ho! Aur maan na padega… tum to bohot tez nikle!👏
                <br />
                {/* {date} */}
              </p>
            </div>
          )}

          {/* Screen 4: Final Screen */}
          {screen === 4 && (
            <div className="animate-fade-in space-y-6 text-white">
              <div className="text-2xl">Abh jab aa hi gaye ho…</div>
              <p className="text-xl font-bold tracking-wider sm:text-4xl">
                …To chalo Techtrix ke bareme thori baatchit kar lete hay!
                <br />
                {/* {date} */}
              </p>
              {/* <div className="pt-4">
                <a
                  href={siteUrl}
                  className="inline-block rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
                >
                  Click Here
                </a>
              </div> */}
            </div>
          )}

          {screen === 5 && (
            <div className="animate-fade-in space-y-6 text-white">
              <div className="text-2xl">So, the waiting is over...</div>
            </div>
          )}

          {screen === 6 && (
            <div className="animate-fade-in space-y-6 text-white">
              <div className="text-2xl">
                Let's deep dive into the Techtrix-2025 Events
              </div>
              <div className="">
                <a
                  href={siteUrl}
                  className="inline-block rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
                >
                  Click Here to explore
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

