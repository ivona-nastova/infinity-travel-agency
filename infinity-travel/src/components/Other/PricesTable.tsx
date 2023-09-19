import React from "react";
import { ArrangementType } from "src/types";

type Props = {
  arrangment: ArrangementType;
};

const PricesTable = ({ arrangment }: Props) => {

  const { priceForNights, transportDescription, 
    availabilityDates, prices } = arrangment;

  const newDates = availabilityDates.map((date) => new Date(date));
  const dates = newDates.map(
    (date) =>
      date.getDate() + "." + (+date.getMonth() + 1) + "." + date.getFullYear()
  );

  return (
    <div className="container-fluid">
      <table
        className="border-collapse border border-slate-400 w-full my-6"
        id="ceni"
      >
        <thead className="bg-blue text-white ">
          <tr>
            <th className="p-2">Датум</th>
            <th>Ноќевања</th>
            <th>Цена по ноќевање</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-center">
          {dates.map((date, index) => (
            <tr className="border-b border-slate-400" key={index}>
              <td className="p-2">{date}</td>
              <td>{priceForNights}</td>
              <td>&euro;{prices.prices[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {transportDescription && (
        <div id="prevoz">
          <h3 className="text-26">Превоз</h3>
          <p>{transportDescription}</p>
        </div>
      )}
    </div>
  );
};

export default PricesTable;
