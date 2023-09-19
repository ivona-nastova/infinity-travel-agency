import React from "react";
import { VscChromeClose } from "react-icons/vsc";

type Props = {
  closeLiveChat: () => void;
};

const LiveChatCard = ({ closeLiveChat }: Props) => {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        <div className="relative w-auto my-6 mx-auto max-w-lg border-2 border-orange">
          <div className="relative flex flex-col p-4 w-full h-96 bg-white max-[374px]:text-11">
            <button
              className="self-end bg-purple font-bold text-white rounded-full p-2"
              onClick={closeLiveChat}
            >
              <VscChromeClose />
            </button>
            <div className="relative pb-6 flex-auto mt-4">
              <span className="border border-orange rounded-md p-4">
                Ви благодариме што не исконтактиравте.
              </span>
            </div>
            <div className="flex">
              <div className="w-2/3 mr-4">
                <input
                  type="text"
                  className="border p-4 border-orange rounded-md w-full"
                />
              </div>
              <div className="w-1/4">
                <button className="bg-orange p-4 rounded-md w-full uppercase font-semibold">
                  Испрати
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default LiveChatCard;
