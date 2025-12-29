"use client"

import React, { useState } from "react"

export default function EnrollModal({ onClose, tutorName }: { onClose: () => void; tutorName?: string }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0ASubject: ${subject}%0D%0AMessage: ${message}`
    const mailto = `mailto:biskentutoring@gmail.com?subject=Enrollment%20Request%20${encodeURIComponent(
      tutorName || ""
    )}&body=${body}`
    window.open(mailto)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div className="bg-card rounded-lg p-6 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Enroll{tutorName ? ` — ${tutorName}` : ""}</h3>
          <p className="text-sm text-muted-foreground">Fill in your details and we'll get back to you.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full p-2 border rounded" />
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="w-full p-2 border rounded" />
          <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject / Level" className="w-full p-2 border rounded" />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message (optional)" className="w-full p-2 border rounded" />
          <div className="flex items-center gap-3">
            <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded">Send</button>
            <button type="button" onClick={onClose} className="border px-4 py-2 rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}
