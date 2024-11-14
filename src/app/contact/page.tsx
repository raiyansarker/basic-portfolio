export default function Contact() {
  return (
    <div className="px-6 pt-16 pb-3 content-start h-full lg:w-[clamp(31rem,70%,100%)] lg:mx-auto">
      <h1 className="text-2xl md:text-4xl text-balance py-8 leading-relaxed">
        Have a Project in Mind? Let&apos;s Make It{" "}
        <span className="font-semibold">Happen! 🚀</span>
      </h1>
      <div className="grid grid-cols-2 gap-3">
        <input
          name="lastName"
          type="text"
          placeholder="First Name"
          className="w-full px-3 py-2 bg-gray-50 dark:bg-white/10 border border-gray-950/10 dark:border-white/10 rounded-lg text-foreground text-sm hover:border-gray-300 dark:hover:border-white/20 focus-visible:outline-none focus-visible:border-gray-950/30 dark:focus-visible:border-white/30 focus-visible:ring-2 focus-visible:ring-gray-950/5 dark:focus-visible:ring-white/10"
        />
        <input
          name="firstName"
          type="text"
          placeholder="Last Name"
          className="w-full px-3 py-2 bg-gray-50 dark:bg-white/10 border border-gray-950/10 dark:border-white/10 rounded-lg text-foreground text-sm hover:border-gray-300 dark:hover:border-white/20 focus-visible:outline-none focus-visible:border-gray-950/30 dark:focus-visible:border-white/30 focus-visible:ring-2 focus-visible:ring-gray-950/5 dark:focus-visible:ring-white/10"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="col-span-2 w-full px-3 py-2 bg-gray-50 dark:bg-white/10 border border-gray-950/10 dark:border-white/10 rounded-lg text-foreground text-sm hover:border-gray-300 dark:hover:border-white/20 focus-visible:outline-none focus-visible:border-gray-950/30 dark:focus-visible:border-white/30 focus-visible:ring-2 focus-visible:ring-gray-950/5 dark:focus-visible:ring-white/10"
        />
        <select
          name="cars"
          id="cars"
          className="col-span-2 w-full px-3 py-2 bg-gray-50 dark:bg-white/10 border border-gray-950/10 dark:border-white/10 rounded-lg text-foreground text-sm hover:border-gray-300 dark:hover:border-white/20 focus-visible:outline-none focus-visible:border-gray-950/30 dark:focus-visible:border-white/30 focus-visible:ring-2 focus-visible:ring-gray-950/5 dark:focus-visible:ring-white/10"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <textarea
          name="message"
          placeholder="Ask me anything 😏"
          className="min-h-24 [field-sizing:content] col-span-2 w-full px-3 py-2 bg-gray-50 dark:bg-white/10 border border-gray-950/10 dark:border-white/10 rounded-lg text-foreground text-sm hover:border-gray-300 dark:hover:border-white/20 focus-visible:outline-none focus-visible:border-gray-950/30 dark:focus-visible:border-white/30 focus-visible:ring-2 focus-visible:ring-gray-950/5 dark:focus-visible:ring-white/10"
        />
        <div className="col-start-2 place-self-end">
          <button className="bg-amber-500 dark:bg-[#f4f4f41a] text-lg px-4 font-semibold text-white dark:text-foreground rounded-lg py-1.5 md:px-3 md:py-1 md:text-base">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
