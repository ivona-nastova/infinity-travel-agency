import React, { useState } from "react";

type Props = {
  openContactForm: boolean;
  setOpenContactForm: (info: boolean) => void;
};

const TicketForm = ({ openContactForm, setOpenContactForm }: Props) => {

  // Form for tickets, reset when all inputs are filled
  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.currentTarget.reset();
    e.preventDefault();
    setOpenContactForm(true);
  }

  return (
    <div
      className={`bg-gray-200 px-5 py-10 container-sm mb-14 ${
        openContactForm ? "hidden" : "block"
      }`}
    >
      <h3 className="text-26">Пребарувај</h3>
      <form onSubmit={submitForm}>
        <div className="flex text-20 items-center text-center">
          <div className="mr-10 my-5">
            <input
              type="radio"
              id="roundTripTicket"
              name="ticket"
              className="mr-3"
              required
            />
            <label htmlFor="roundTripTicket">Повратен билет</label>
          </div>

          <div>
            <input
              type="radio"
              id="oneWayTicket"
              name="ticket"
              className="mr-3"
              required
            />
            <label htmlFor="oneWayTicket">Еден правец</label>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="flex flex-col w-1/2 md:w-1/4 pr-3 mb-5">
            <label htmlFor="from">Од</label>
            <input
              id="from"
              type="text"
              className="py-2 border border-gray-500 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col w-1/2 md:w-1/4 pr-3 mb-5">
            <label htmlFor="to">До</label>
            <input
              id="to"
              type="text"
              className="py-2 border border-gray-500 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col w-1/2 md:w-1/4 pr-3 mb-5">
            <label htmlFor="departureDate">Датум на поаѓање</label>
            <input
              type="date"
              id="departureDate"
              className="py-2 border border-gray-500 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col w-1/2 md:w-1/4 pr-3">
            <label htmlFor="returnDate">Датум на враќање</label>
            <input
              type="date"
              id="returnDate"
              className="py-2 border border-gray-500 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col w-1/2 md:w-1/4 pr-3 mb-5">
            <label htmlFor="adults">Возрасни</label>
            <select
              id="adults"
              className="py-2 border border-gray-500 rounded-md"
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>
          </div>
          <div className="flex flex-col w-1/2 md:w-1/4 pr-3 mb-5">
            <label htmlFor="children">Деца</label>
            <select
              id="children"
              className="py-2 border border-gray-500 rounded-md"
              required
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>
          </div>
          <div className="flex flex-col w-1/2 md:w-1/4 pr-3 mb-5">
            <label htmlFor="babies">Бебиња</label>
            <select
              id="babies"
              className="py-2 border border-gray-500 rounded-md"
              required
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>
          </div>

          <div className="flex flex-col w-1/2 md:w-1/4 pr-3 mb-5">
            <label htmlFor="classType">Класа</label>
            <select
              id="classType"
              className="py-2 border border-gray-500 rounded-md"
              required
            >
              <option value="Економска">Економска</option>
              <option value="Бизнис">Бизнис</option>
            </select>
          </div>

          <div className="pr-3 w-full md:w-1/4">
            <button
              className="w-full font-bold uppercase bg-orange py-2 rounded-md"
              type="submit"
            >
              Побарај понуда
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
