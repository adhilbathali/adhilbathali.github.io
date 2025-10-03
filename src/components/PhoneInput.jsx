import React, { useState, useEffect } from "react";
import Select from "react-select";

const options = [
  { value: "+1", label: "🇺🇸 +1", search: "United States", fullLabel: "🇺🇸 +1 (United States)" },
  { value: "+86", label: "🇨🇳 +86", search: "China", fullLabel: "🇨🇳 +86 (China)" },
  { value: "+49", label: "🇩🇪 +49", search: "Germany", fullLabel: "🇩🇪 +49 (Germany)" },
  { value: "+81", label: "🇯🇵 +81", search: "Japan", fullLabel: "🇯🇵 +81 (Japan)" },
  { value: "+82", label: "🇰🇷 +82", search: "South Korea", fullLabel: "🇰🇷 +82 (South Korea)" },
  { value: "+44", label: "🇬🇧 +44", search: "United Kingdom", fullLabel: "🇬🇧 +44 (United Kingdom)" },
  { value: "+91", label: "🇮🇳 +91", search: "India", fullLabel: "🇮🇳 +91 (India)" }, // Default selection
  { value: "+33", label: "🇫🇷 +33", search: "France", fullLabel: "🇫🇷 +33 (France)" },
  { value: "+1", label: "🇨🇦 +1", search: "Canada", fullLabel: "🇨🇦 +1 (Canada)" },
  { value: "+972", label: "🇮🇱 +972", search: "Israel", fullLabel: "🇮🇱 +972 (Israel)" },
  { value: "+65", label: "🇸🇬 +65", search: "Singapore", fullLabel: "🇸🇬 +65 (Singapore)" },
  { value: "+31", label: "🇳🇱 +31", search: "Netherlands", fullLabel: "🇳🇱 +31 (Netherlands)" },
  { value: "+46", label: "🇸🇪 +46", search: "Sweden", fullLabel: "🇸🇪 +46 (Sweden)" },
  { value: "+41", label: "🇨🇭 +41", search: "Switzerland", fullLabel: "🇨🇭 +41 (Switzerland)" },
  { value: "+61", label: "🇦🇺 +61", search: "Australia", fullLabel: "🇦🇺 +61 (Australia)" },
  { value: "+886", label: "🇹🇼 +886", search: "Taiwan", fullLabel: "🇹🇼 +886 (Taiwan)" },
  { value: "+358", label: "🇫🇮 +358", search: "Finland", fullLabel: "🇫🇮 +358 (Finland)" },
  { value: "+971", label: "🇦🇪 +971", search: "UAE", fullLabel: "🇦🇪 +971 (UAE)" },
  { value: "+55", label: "🇧🇷 +55", search: "Brazil", fullLabel: "🇧🇷 +55 (Brazil)" },
  { value: "+7", label: "🇷🇺 +7", search: "Russia", fullLabel: "🇷🇺 +7 (Russia)" }
];

const sortedOptions = options.sort((a, b) => a.search.localeCompare(b.search));

export default function PhoneInput({ value, onChange }) {
  const [selectedOption, setSelectedOption] = useState(
    sortedOptions.find((option) => option.value === "+91")
  );
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (!value.number) {
      setSelectedOption(sortedOptions.find((option) => option.value === "+91"));
      setPhoneNumber("");
    }
  }, [value.number]);

  const handleCountryChange = (selected) => {
    setSelectedOption(selected);
    onChange({ country: selected.value, number: phoneNumber });
  };

  const handlePhoneChange = (e) => {
    const number = e.target.value;
    setPhoneNumber(number);
    onChange({ country: selectedOption.value, number });
  };

  return (
    <div className="form-attribute">
      <label htmlFor="phone">Phone</label>
      <div className="phone-input-container" style={{ display: "flex", gap: "8px" }}>
        <Select
          options={sortedOptions}
          getOptionLabel={(e) => e.fullLabel} // Show country name when searching
          value={selectedOption}
          onChange={handleCountryChange}
          styles={{
            control: (provided, state) => ({
              ...provided,
              width: "150px",
              borderColor: state.isFocused ? "royalblue" : "#ccc",
              boxShadow: state.isFocused ? "none" : "none",
            })
          }}
        />
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={handlePhoneChange}
        />
      </div>
    </div>
  );
}
