import { useRouter } from "next/router";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchFilter = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  // Search by name of arrangment
  function searchByName() {
    if (searchValue !== "") {
      router.push(
        {
          pathname: router.pathname,
          query: { ...router.query, name: searchValue },
        },
        undefined,
        { scroll: false }
      );
      setSearchValue("");
    }
  }

  {
    return (
      <div className="flex flex-col w-full">
        <label htmlFor="searchFilter" className="text-gray-600">
          Search
        </label>
        <div className="flex w-full">
          <input
            type="search"
            id="searchFilter"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="p-2 rounded-l-lg border border-gray-400 w-full"
          />
          <span
            className="bg-darkPurple text-white p-2 text-24 rounded-r-lg"
            onClick={searchByName}
          >
            <FiSearch />
          </span>
        </div>
      </div>
    );
  }
};

export default SearchFilter;
