import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="font-sans bg-[#f9f7f3] text-[#2d2d2d]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center p-10 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Joseph UGC
        </motion.h1>
        <p className="max-w-2xl text-lg mb-6">
          Fashion, Beauty & Lifestyle Influencer with a global audience of 18–34 year olds.
        </p>
        <button className="rounded-2xl px-6 py-3 bg-black text-white">View My Work</button>
      </section>

      {/* Audience Section */}
      <section className="p-16 bg-[#e7e4de]">
        <h2 className="text-4xl font-bold mb-8">Audience</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 text-center bg-white rounded-2xl shadow">
            <h3 className="text-2xl font-semibold">Instagram</h3>
            <p className="text-xl">100k followers</p>
          </div>
          <div className="p-6 text-center bg-white rounded-2xl shadow">
            <h3 className="text-2xl font-semibold">TikTok</h3>
            <p className="text-xl">50k followers</p>
          </div>
          <div className="p-6 text-center bg-white rounded-2xl shadow">
            <h3 className="text-2xl font-semibold">YouTube</h3>
            <p className="text-xl">72k subscribers</p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="p-16">
        <h2 className="text-4xl font-bold mb-12">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <img src="/portfolio1.jpg" alt="Campaign 1" className="rounded-2xl shadow" />
          <img src="/portfolio2.jpg" alt="Campaign 2" className="rounded-2xl shadow" />
          <img src="/portfolio3.jpg" alt="Campaign 3" className="rounded-2xl shadow" />
        </div>
      </section>

      {/* Services & Packages */}
      <section className="p-16 bg-[#e7e4de]">
        <h2 className="text-4xl font-bold mb-12">Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Package I</h3>
            <p>Instagram Post + Short Form</p>
            <p className="font-bold mt-2">$1,700</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Package II</h3>
            <p>YouTube Post + Short Form</p>
            <p className="font-bold mt-2">$2,400</p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="p-16">
        <h2 className="text-4xl font-bold mb-12">Process</h2>
        <ol className="space-y-6">
          <li className="flex items-center"><span className="w-6 h-6 bg-black rounded-full mr-4"></span> Contact</li>
          <li className="flex items-center"><span className="w-6 h-6 bg-black rounded-full mr-4"></span> Discussion</li>
          <li className="flex items-center"><span className="w-6 h-6 bg-black rounded-full mr-4"></span> Planning & Editing</li>
          <li className="flex items-center"><span className="w-6 h-6 bg-black rounded-full mr-4"></span> Delivery</li>
        </ol>
      </section>

      {/* Contact */}
      <section className="p-16 bg-[#2d2d2d] text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded-xl text-black" />
          <input type="email" placeholder="Your Email" className="p-3 rounded-xl text-black" />
          <textarea placeholder="Your Message" rows="4" className="p-3 rounded-xl text-black" />
          <button className="px-6 py-3 rounded-2xl bg-white text-black">Send Message</button>
        </form>
      </section>
    </div>
  );
}