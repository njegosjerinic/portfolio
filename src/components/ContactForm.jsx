import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnjezqbk");

  if (state.succeeded) {
    return (
      <div className="mt-6 rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-5">
        <p className="font-medium text-cyan-300">Message sent successfully</p>
        <p className="mt-1 text-sm text-zinc-400">
          I will get back to you as soon as possible
        </p>
      </div>
    );
  }

  const inputStyles =
    "mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 hover:border-zinc-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10";

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-zinc-200">
          Name
        </label>

        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          required
          autoComplete="name"
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-zinc-200">
          Email
        </label>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@email.com"
          required
          autoComplete="email"
          className={inputStyles}
        />

        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-2 text-sm text-red-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-zinc-200">
          Message
        </label>

        <textarea
          name="message"
          id="message"
          rows={5}
          placeholder="Tell me about your project..."
          required
          className={`${inputStyles} resize-none`}
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-2 text-sm text-red-400"
        />
      </div>

      <ValidationError errors={state.errors} className="text-sm text-red-400" />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full rounded-full bg-cyan-400 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
