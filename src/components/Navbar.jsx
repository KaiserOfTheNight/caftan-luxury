import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10 shadow-sm flex items-center px-6 md:px-10 py-3">

        {/* LEFT: Logo */}
        <div className="flex-1">
          <img src="/images/logo.png" alt="logo" className="h-10" />
        </div>

        {/* CENTER: Links (DESKTOP) */}
        <ul className="hidden md:flex flex-1 justify-center gap-8 text-white">
          <li className="cursor-pointer hover:text-yellow-400">Home</li>
          <li className="cursor-pointer hover:text-yellow-400">Services</li>
          <li className="cursor-pointer hover:text-yellow-400">About</li>
          <li className="cursor-pointer hover:text-yellow-400">Contact</li>
        </ul>

        {/* RIGHT: BUTTON + HAMBURGER */}
        <div className="flex-1 flex justify-end items-center gap-4">

          {/* Desktop button */}
          <button className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full font-semibold">
            Book Now
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* SIDE MENU */}
      <div
        className={`
          fixed top-0 left-0 h-full w-72 bg-black text-white z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-6 px-6 mt-10 text-lg">
          <li onClick={() => setOpen(false)} className="hover:text-yellow-400 cursor-pointer">
            Home
          </li>
          <li onClick={() => setOpen(false)} className="hover:text-yellow-400 cursor-pointer">
            Services
          </li>
          <li onClick={() => setOpen(false)} className="hover:text-yellow-400 cursor-pointer">
            About
          </li>
          <li onClick={() => setOpen(false)} className="hover:text-yellow-400 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </>
  );
}