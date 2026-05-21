"use client";

import { useState } from "react";

const email = "naiyana.nk14" + "@" + "gmail.com";

const contactLinks = [
  {
    label: "Email",
    value: email,
    href: "mailto:" + email,
    onClick: undefined,
  },
  {
    label: "GitHub",
    value: "github.com/naiyana-nk",
    href: "https://github.com/naiyana-nk",
    onClick: undefined,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/naiyana-nk",
    href: "https://linkedin.com/in/naiyana-nk",
    onClick: undefined,
  },
  {
    label: "Tel.",
    value: "(+66) 092-727-7885",
    href: "#",
    onClick: () => {
      window.location.href = "tel:+66927277885";
    },
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formsubmit.co/ajax/" + email, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: "Message From Portfolio Website Contact Form",
          _captcha: "true",
          _honey: "",
        }),
      });

      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 lg:px-8 bg-gray-50 border-t border-gray-100 scroll-mt-10"
    >
      <style>{`
        .contact-input {
          width: 100%;
          background: #fff;
          border: 0.5px solid #e5e7eb;
          border-radius: 12px;
          padding: 14px 18px;
          font-size: 14px;
          font-weight: 300;
          color: #111;
          outline: none;
          transition: border-color 0.2s;
          resize: none;
        }
        .contact-input::placeholder { color: #bbb; }
        .contact-input:focus { border-color: #9ca3af; }
        .contact-submit {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          border: 1px solid #d1d5db;
          border-radius: 100px;
          padding: 12px 32px;
          background: transparent;
          color: #6366f1;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .contact-submit:hover:not(:disabled) {
          background: #6366f1;
          color: #fff;
          border-color: #6366f1;
        }
        .contact-submit:disabled { opacity: 0.4; cursor: not-allowed; }
      `}</style>

      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-lg tracking-[0.18em] uppercase text-black font-bold">
            Contact
          </span>
          <span className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — CTA copy */}
          <div>
            <h2 className="text-5xl sm:text-6xl leading-[1.1] text-gray-900 mb-6">
              Let&apos;s work
              <br />
              <em className="text-indigo-400">together.</em>
            </h2>
            <p className="text-base font-light leading-[1.9] text-gray-600 mb-10">
              Want to say hi? My inbox is always open — <br />
              I&apos;ll get back to you as soon as I can.
            </p>

            {/* Direct links */}
            <div className="flex flex-col gap-4">
              {contactLinks.map(({ label, value, href, onClick }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="text-[10px] tracking-[0.16em] uppercase text-indigo-500 font-bold w-16 shrink-0">
                    {label}
                  </span>
                  <a
                    href={href}
                    onClick={onClick}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-light"
                    target={onClick ? undefined : "_blank"}
                    rel="noopener noreferrer"
                  >
                    {value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {status === "sent" ? (
              <div className="flex flex-col items-start gap-3 py-12">
                <span className="text-2xl font-bold">
                  Message sent <span className="text-indigo-500">✦</span>
                </span>
                <p className="text-sm text-indigo-500 font-light">
                  Thanks for reaching out — I&apos;ll be in touch soon.
                </p>
                <button
                  onClick={() => {
                    setForm({ name: "", email: "", message: "" });
                    setStatus("idle");
                  }}
                  className="contact-submit mt-4"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="_honey"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                <input
                  className="contact-input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="contact-input"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  className="contact-input"
                  name="message"
                  placeholder="What's on your mind?"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                <div className="flex items-center gap-6 mt-2">
                  <button
                    type="submit"
                    className="contact-submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                  </button>
                  {status === "error" && (
                    <span className="text-xs text-red-400">
                      Something went wrong. Try again.
                    </span>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
