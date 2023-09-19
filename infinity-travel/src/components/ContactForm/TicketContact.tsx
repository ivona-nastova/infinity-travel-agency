import React, { useRef, useState } from "react";
import { postRequest } from "src/helpers/postRequest";
import { FormSearchType } from "src/types";
import Modal from "../Card/ModalCard";
import TicketForm from "./TicketForm";

const TicketContact = () => {
  const [openContactForm, setOpenContactForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  function closeModal() {
    setOpenContactForm(false);
    setOpenModal(false);
  }

  // With different id i use same function for each change in inputs
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    setContactForm((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  // Get data from user and send to BE
  async function submitContactForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { name, lastName, email, phone } = contactForm;
    const newSearch: FormSearchType = {
      name,
      lastName,
      email,
      phone,
    };
    try {
      await postRequest(newSearch);
      setContactForm({
        name: "",
        lastName: "",
        email: "",
        phone: "",
      });
      setOpenModal(true);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <div
        className={`bg-gray-100 px-5 py-10 w-4/5 sm:w-1/2 mx-auto mb-12 ${
          openContactForm ? "block" : "hidden"
        }`}
      >
        <h3 className="text-26 mb-3">Податоци за контакт:</h3>
        <form className="flex flex-wrap" onSubmit={submitContactForm}>
          <div className="flex flex-col w-full md:w-1/2 pr-3 mb-5">
            <label htmlFor="name">Име</label>
            <input
              id="name"
              type="text"
              className="py-2 border border-gray-500 rounded-md"
              value={contactForm.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2 pr-3 mb-5">
            <label htmlFor="lastName">Презиме</label>
            <input
              id="lastName"
              type="text"
              className="py-2 border border-gray-500 rounded-md"
              value={contactForm.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2 pr-3 mb-5">
            <label htmlFor="email">Е-маил</label>
            <input
              id="email"
              type="email"
              className="py-2 border border-gray-500 rounded-md"
              value={contactForm.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2 pr-3 mb-5">
            <label htmlFor="phone">Телефон</label>
            <input
              id="phone"
              type="tel"
              className="py-2 border border-gray-500 rounded-md"
              value={contactForm.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="pr-3 w-full md:w-1/2">
            <button
              className="w-full font-bold uppercase bg-orange py-2 rounded-md"
              type="submit"
            >
              Побарај понуда
            </button>
          </div>
        </form>
      </div>

      <TicketForm
        openContactForm={openContactForm}
        setOpenContactForm={setOpenContactForm}
      />

      {openModal && <Modal closeModal={closeModal} />}
    </>
  );
};

export default TicketContact;
