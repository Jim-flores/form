import React, { ChangeEvent } from "react";
import { Ubigeos } from "../Types/types";

import { Places } from "../Types/types";

interface SelectListProps {
  data: Ubigeos[];
  title: string;
  getId?: (value: string | null) => void;
  setPlaceData: (value: Places) => void;
  placeData: Places;
}
const SelectList = ({
  data,
  title,
  getId,
  placeData,
  setPlaceData,
}: SelectListProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value, selectedIndex } = e.target;
    const titleName = e.target.options[selectedIndex].text;
    if (getId) {
      getId(value);
    }
    setPlaceData({ ...placeData, [name]: titleName });
    console.log(name, titleName);
  };

  return (
    <div className="size-box">
      <label htmlFor={title} className="capitalize">
        {title}
      </label>
      <select
        name={title}
        id={title}
        onChange={handleChange}
        className="border-gray-900/70 border-2"
      >
        <option value="">Seleccione un {title}</option>
        {data.map((el) => (
          <option key={el.id_ubigeo} value={el.id_ubigeo}>
            {el.nombre_ubigeo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectList;
