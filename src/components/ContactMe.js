import React from "react";
import { toast } from "react-toastify";

const ContactMe = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        fetch("https://formspree.io/f/mrbqlodw", {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    toast.success("Message sent successfully!");
                    form.reset();
                } else {
                    toast.error("Failed to send message.");
                }
            })
            .catch(() => {
                toast.error("Something went wrong. Please try again later.");
            });
    };

    return (
        <div className="mx-auto bg-black max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                Get in Touch
            </h1>
            <p className="text-zinc-400 mb-12">
                Whether you have a question, a project idea, or just want to say hi — my inbox is always open.
            </p>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                {/* Contact Info */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-lg font-medium text-white">Email</h2>
                        <p className="text-zinc-400">sohambkhade@gmail.com</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium text-white">Location</h2>
                        <p className="text-zinc-400">California, USA</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium text-white">LinkedIn</h2>
                        <a
                            href="https://www.linkedin.com/in/soham-khade-230855193/"
                            className="text-teal-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full rounded-md border border-zinc-700 px-3 py-2 bg-zinc-800 text-white focus:border-teal-500 focus:ring focus:ring-teal-200"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full rounded-md border border-zinc-700 px-3 py-2 bg-zinc-800 text-white focus:border-teal-500 focus:ring focus:ring-teal-200"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="mt-1 block w-full rounded-md border border-zinc-700 px-3 py-2 bg-zinc-800 text-white focus:border-teal-500 focus:ring focus:ring-teal-200"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="rounded-md bg-teal-600 px-4 py-2 text-white shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;
