import React from "react";

type Props = { closeModal: () => void };

function ModalCard({ closeModal }: Props) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white">
            <div className="relative p-6 flex-auto text-gray-600 text-lg">
              <span className="block">Ви благодариме што не одбравте нас.</span>
              <span>
                За сите информации ќе ве контактираме во текот на денот.
              </span>
            </div>
            <div className="flex justify-end p-3">
              <button
                className="bg-blue text-white font-semibold px-4 py-2 rounded shadow mr-1 mb-1"
                type="button"
                onClick={closeModal}
              >
                Во ред
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default ModalCard;
