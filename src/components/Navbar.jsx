import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10 shadow-sm flex items-center px-6 md:px-10 py-3">

        {/* LEFT: Logo */}
        <div className="flex-1">
          <img src="/images/logo.png" alt="logo" className="h-10" />
        </div>

        {/* CENTER: LINKS (DESKTOP) */}
        <ul className="hidden md:flex flex-1 justify-center gap-8 text-white">
          <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>

        {/* RIGHT */}
        <div className="flex-1 flex justify-end items-center gap-4">

          <button className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full font-semibold">
            Book Now
          </button>

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
          onClick={handleClose}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* SIDE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={handleClose} className="text-2xl">✕</button>
        </div>

        <ul className="flex flex-col gap-6 px-6 mt-10 text-lg">
          <li onClick={handleClose}><a href="#home">Home</a></li>
          <li onClick={handleClose}><a href="#services">Services</a></li>
          <li onClick={handleClose}><a href="#about">About</a></li>
          <li onClick={handleClose}><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </>
  );
}