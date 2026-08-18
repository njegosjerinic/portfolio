import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnjezqbk");
  if (state.succeeded) return <div className="border-2 border-black bg-[#d9dfcf] p-6"><p className="font-serif text-2xl">Message sent.</p><p className="mt-2 text-black/60">I’ll get back to you as soon as possible.</p></div>;
  const fieldStyles = "mt-2 w-full border-0 border-b-2 border-black/30 bg-transparent px-0 py-3 outline-none transition placeholder:text-black/35 hover:border-black focus:border-[#ed5b3a]";
  return <form onSubmit={handleSubmit} className="border-2 border-black bg-[#f7f3e9] p-6 shadow-[8px_8px_0_#ed5b3a] sm:p-8">
    <div className="grid gap-6 sm:grid-cols-2"><label className="font-mono text-xs font-bold uppercase tracking-wider">Name<input type="text" name="name" required autoComplete="name" placeholder="Your name" className={fieldStyles} /></label><label className="font-mono text-xs font-bold uppercase tracking-wider">Email<input type="email" name="email" required autoComplete="email" placeholder="you@email.com" className={fieldStyles} /><ValidationError prefix="Email" field="email" errors={state.errors} className="mt-2 block text-xs text-[#c63f25]" /></label></div>
    <label className="mt-7 block font-mono text-xs font-bold uppercase tracking-wider">Message<textarea name="message" rows={5} required placeholder="Tell me about the opportunity..." className={`${fieldStyles} resize-none`} /><ValidationError prefix="Message" field="message" errors={state.errors} className="mt-2 block text-xs text-[#c63f25]" /></label>
    <ValidationError errors={state.errors} className="mt-3 text-xs text-[#c63f25]" /><button type="submit" disabled={state.submitting} className="mt-8 w-full bg-[#171717] px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#ed5b3a] disabled:cursor-not-allowed disabled:opacity-50">{state.submitting ? "Sending…" : "Send message →"}</button>
  </form>;
}
