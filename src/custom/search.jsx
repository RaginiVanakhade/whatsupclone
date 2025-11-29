// import React from "react";
import { IoMdSearch } from "react-icons/io";
import PropTypes from "prop-types";

const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="relative w-full mt-4">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <IoMdSearch size={28} color="grey" />
      </div>

      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-[96%] ml-2 mr-2 pl-12 pr-4 py-2 border rounded-3xl outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

// ✅ Add PropTypes validation here
SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchBar;
