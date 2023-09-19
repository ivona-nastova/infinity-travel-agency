import { useRouter } from "next/router";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerFilter() {

  const router = useRouter();
  const currentDate = new Date();

  // State for Dates
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [activeFilter, setActiveFilter] = useState("Од");

  function filterByDate(date:Date){

    const formattedDate = date.getFullYear() + "-" + (+date.getMonth() + 1) + "-" + date.getDate();
    
    // Check which filter is active
    activeFilter === "Од" ? setStartDate(date) : setEndDate(date)
    const queryDate = activeFilter === "Од" ? "departure":"return"

    // Push selected date
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, [queryDate]: formattedDate},
      },
      undefined,
      {
        scroll: false,
        shallow: true,
      }
    );

  }

  return (
    <>
      <div className="pt-6 flex justify-center flex-col">
        <div className="flex w-full justify-between">
          <span
            className={`${activeFilter === "Од" ? "bg-blue" : "bg-white"} 
                    cursor-pointer rounded-tl-lg w-1/2 py-1 px-2 `}
            onClick={() => setActiveFilter("Од")}
          >
            Од
          </span>
          <span
            className={`${activeFilter === "До" ? "bg-blue" : "bg-white"}
                     cursor-pointer rounded-tr-lg w-1/2 py-1 px-2 text-right`}
            onClick={() => setActiveFilter("До")}
          >
            До
          </span>
        </div>
        <div className="w-full">
          {activeFilter === "Од" && (
            <DatePicker
              minDate={currentDate}
              selected={startDate}
              onChange={filterByDate}
              inline
            />
          )}

          {activeFilter === "До" && (
            <DatePicker
              minDate={currentDate}
              selected={endDate}
              onChange={filterByDate}
              inline
            />
          )}
        </div>
      </div>
    </>
  );
}

export default DatePickerFilter;
