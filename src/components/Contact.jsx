function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        {/* Form */}
        <div className="bg-[#F7F3EE] rounded-2xl p-6 shadow-sm ring-1 ring-black/5">
          <h3 className="text-2xl font-semibold text-[#2B2B2B]">Contact Us</h3>
          <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="col-span-1 rounded-xl border border-[#2B2B2B]/10 p-3" placeholder="Name" />
            <input className="col-span-1 rounded-xl border border-[#2B2B2B]/10 p-3" placeholder="Email" type="email" />
            <input className="col-span-1 rounded-xl border border-[#2B2B2B]/10 p-3" placeholder="Phone" />
            <div className="sm:col-span-2">
              <textarea className="w-full rounded-xl border border-[#2B2B2B]/10 p-3 h-32" placeholder="Message" />
            </div>
            <button type="submit" className="sm:col-span-2 px-5 py-3 rounded-full bg-[#A8C3A0] text-white hover:opacity-90">Submit</button>
          </form>
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-6">
            <h4 className="font-semibold text-[#2B2B2B]">Contact Details</h4>
            <p className="mt-2 text-[#2B2B2B]/80">Phone: (555) 123-4567</p>
            <p className="text-[#2B2B2B]/80">Email: hello@serenitycentre.com</p>
            <p className="text-[#2B2B2B]/80">Address: 123 Calm Avenue, Suite 200</p>
            <p className="text-[#2B2B2B]/80">Hours: Mon–Fri, 9am–6pm</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509495!2d144.9537353153183!3d-37.81627974200938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjYiUyAxNDTCsDU3JzI1LjQiRQ!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
