
import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ChatWidget from './ChatWidget';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
        {/* Header */}
        <header className="p-6 flex justify-between items-center shadow-md">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="SoftSell Logo" className="h-8 w-auto" />
            <h1 className="text-2xl font-bold hidden sm:inline">SoftSell</h1>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>

        </header>

        {/* Hero Section */}
        <section className="text-center py-20 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <h2 className="text-4xl font-bold mb-4">Turn Your Unused Software Licenses into Cash</h2>
          <p className="mb-6">We help you sell your extra licenses safely and quickly.</p>
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded shadow">Sell My Licenses</button>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 text-center">
          <h3 className="text-3xl font-bold mb-10">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 border rounded shadow">
              <img src="https://img.icons8.com/ios/100/upload.png" className="mx-auto mb-4" alt="Upload" />
              <h4 className="text-xl font-semibold mb-2">Upload License</h4>
              <p>Submit your software license details securely.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 border rounded shadow">
              <img src="https://img.icons8.com/ios/100/money.png" className="mx-auto mb-4" alt="Valuation" />
              <h4 className="text-xl font-semibold mb-2">Get Valuation</h4>
              <p>We provide a fair market price instantly.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 border rounded shadow">
              <img src="https://img.icons8.com/ios/100/cash-in-hand.png" className="mx-auto mb-4" alt="Get Paid" />
              <h4 className="text-xl font-semibold mb-2">Get Paid</h4>
              <p>Receive your money via your preferred payment method.</p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800 text-center">
          <h3 className="text-3xl font-bold mb-10">Why Choose Us</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {['Fast Payouts', 'Secure Transactions', 'Top Market Rates', 'Trusted by Users'].map((item, i) => (
              <div key={i} className="p-4 border rounded shadow">
                <h4 className="text-xl font-semibold mb-2">{item}</h4>
                <p>We ensure a safe and reliable experience for every seller.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 text-center">
          <h3 className="text-3xl font-bold mb-10">What Our Clients Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="p-6 border rounded shadow">
              <p className="mb-4">"Selling my unused licenses was a breeze with SoftSell. Highly recommend!"</p>
              <footer>- Jane Doe, CTO, TechCorp</footer>
            </blockquote>
            <blockquote className="p-6 border rounded shadow">
              <p className="mb-4">"Quick, easy, and transparent process. Got paid the same day!"</p>
              <footer>- John Smith, IT Manager, DevSolutions</footer>
            </blockquote>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 px-4 bg-blue-50 dark:bg-gray-700">
          <h3 className="text-3xl font-bold text-center mb-10">Get in Touch</h3>
          <form className="max-w-xl mx-auto space-y-4">
            <input type="text" placeholder="Name" required className="w-full px-4 py-2 rounded border" />
            <input type="email" placeholder="Email" required className="w-full px-4 py-2 rounded border" />
            <input type="text" placeholder="Company" required className="w-full px-4 py-2 rounded border" />
            <select required className="w-full px-4 py-2 rounded border">
              <option value="">Select License Type</option>
              <option>Windows</option>
              <option>Office 365</option>
              <option>Adobe</option>
              <option>Other</option>
            </select>
            <textarea placeholder="Message" required className="w-full px-4 py-2 rounded border"></textarea>
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded shadow">Submit</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
          © 2025 SoftSell. All rights reserved.
        </footer>
      </div>
      <ChatWidget />
    </div>
  );
}
