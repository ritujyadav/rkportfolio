import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");

    try {

      await emailjs.send(
        "service_aloz3na",   // ✅ YOUR SERVICE ID
        "template_zyjzeui",   // 🔥 PUT TEMPLATE ID HERE
        {
          name: formData.name,
          email: formData.email,
          title: formData.title,
          message: formData.message,
        },
        "DwXYx9L-zW50jzFa0"    // 🔥 PUT PUBLIC KEY HERE
      );

      setStatus("✅ Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        title: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14 underline underline-offset-8">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h3 className="text-blue-600 font-semibold tracking-wide text-lg">
              Get In Touch
            </h3>

            <p className="text-gray-600 leading-relaxed">
              I'm passionate about building scalable applications and solving
              real-world problems through code. If you're looking for a dedicated
              developer, collaboration partner, or want to discuss exciting
              opportunities - feel free to reach out anytime.
            </p>

            <div className="space-y-3 text-gray-700">
              <p>Email: hariomyadav777.com@gmail.com</p>
              <p>Phone: +91 9369923637</p>
              <p>Location: Prayagraj, India</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md font-bold text-center">
              <p className="text-gray-600 italic">
                Great things are built through collaboration. Let's create
                something impactful together.
              </p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={sendMessage}
            className="bg-white p-8 rounded-xl shadow-md space-y-5"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <button
              disabled={loading}
              className={`w-full p-3 rounded-lg text-white transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="text-center font-medium">{status}</p>}
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;