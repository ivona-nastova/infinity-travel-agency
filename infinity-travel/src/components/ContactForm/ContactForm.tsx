import React from "react";
import Contact from "./Contact";

const ContactForm = () => {
  return (
    <div className="container-fluid flex flex-wrap items-center justify-between py-8">
      <form className="flex justify-between flex-wrap w-full md:w-1/2">
        <div className="flex flex-col w-1/2 pr-3 mb-3">
          <label htmlFor="name" className="text-gray-600">
            Име
          </label>
          <input
            type="text"
            id="name"
            name="name"
            aria-describedby="yourName"
            className="border-2 border-gray-400 rounded-md p-2"
          />
        </div>

        <div className="flex flex-col w-1/2 mb-3">
          <label htmlFor="email" className="text-gray-600">
            E-маил
          </label>
          <input
            type="text"
            id="email"
            name="email"
            aria-describedby="yourEmail"
            className="border-2 border-gray-400 rounded-md p-2"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="message" className="text-gray-600">
            Порака
          </label>
          <textarea
            name="message"
            id="message"
            aria-describedby="yourMessage"
            className="border-2 border-gray-400 rounded-md resize-none h-52"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-orange rounded-md uppercase font-semibold px-2 w-full md:w-1/2 py-2 mt-5"
        >
          Прати
        </button>
      </form>
      <Contact />
    </div>
  );
};

export default ContactForm;
