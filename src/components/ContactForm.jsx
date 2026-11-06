import { useState } from 'react'
import profile from '../content/profile'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    // No endpoint set: open the visitor's email app with the message filled in
    if (!profile.formEndpoint) {
      const subject = encodeURIComponent(`Message from ${data.get('name')}`)
      const body = encodeURIComponent(`${data.get('message')}\n\n${data.get('name')} (${data.get('email')})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(profile.formEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      if (!res.ok) throw new Error('failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
      <label>Email<input name="email" type="email" placeholder="Your email" required /></label>
      <label>Message<textarea name="message" rows="4" placeholder="Your message" required /></label>
      <button className="btn btn--solid" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message sent' : 'Send message'}
      </button>
      {status === 'error' && <p className="form__error" role="alert">Couldn’t send. Try again or email me directly.</p>}
    </form>
  )
}
