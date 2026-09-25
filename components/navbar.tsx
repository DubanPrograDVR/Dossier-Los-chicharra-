"use client"

import { useState } from "react"
import { navLinks } from "@/lib/data"
import { useScrollSpy } from "@/hooks/use-scroll-spy"

const sectionIds = navLinks.map((link) => link.href.replace("#", ""))

export function Navbar() {
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  return (
    <header className="header">
      <nav className={`navbar${open ? " is-open" : ""}`} aria-label="Principal">
        <a href="#inicio" className="logo-link" aria-label="Los Chicharra — inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo.png" alt="Logo de Los Chicharra" className="logo" />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-toggle-line" />
          <span className="menu-toggle-line" />
          <span className="menu-toggle-line" />
        </button>

        <ul className="elementos-navbar" id="menu-principal">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "")
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`elements${activeId === id ? " is-current" : ""}`}
                  aria-current={activeId === id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
