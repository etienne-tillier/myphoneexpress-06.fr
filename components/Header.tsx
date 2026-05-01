"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/guides", label: "Guides" },
    { href: "/comparatifs", label: "Comparatifs" },
    { href: "/blog", label: "Blog" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-heading text-xl font-bold tracking-wider text-accent">
                            MyPhoneExpress
                        </span>
                        <span className="hidden sm:inline text-xs text-secondary font-medium">
                            06.fr
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-white/80 hover:text-accent transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setOpen(!open)}
                        aria-label="Menu"
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile nav */}
            {open && (
                <nav className="md:hidden border-t border-white/10 bg-primary/98 backdrop-blur-sm">
                    <div className="space-y-1 px-4 pb-4 pt-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-accent transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}
