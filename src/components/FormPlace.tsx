import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Ubigeos } from "../Types/types";
import { departamentos } from "../data/departamentos";
import { provincias } from "../data/provincias";
import { distritos } from "../data/distritos";
import SelectList from "./SelectList";
import { Places } from "../Types/types";

const initPlaceValues = {
  countryOfBirth: "",
  nacionality: "",
  departamento: "",
  provincia: "",
  distrito: "",
};
interface props {
  className?: string;
}
const FormPlace = ({ className }: props) => {
  //send data
  const [placeData, setPlaceData] = useState<Places>(initPlaceValues);
  const handlePlace = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPlaceData({ ...placeData, [name]: value });
  };

  const hanldeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(placeData);
  };

  // get Ubigeos
  const [depId, setDepId] = useState<string | null>(null);
  const [provId, setProvId] = useState<string | null>(null);
  const [dataProv, setDataProv] = useState<Ubigeos[] | null>(null);
  const [dataDist, setDataDist] = useState<Ubigeos[] | null>(null);

  useEffect(() => {
    if (depId) {
      const filterProvincias = Object.entries(provincias).filter(
        (prov) => prov[0] === depId
      );

      const result = filterProvincias[0][1];
      setDataProv(result);
      setDataDist(null);
    }
  }, [depId]);
  useEffect(() => {
    if (provId) {
      const filterDistritos = Object.entries(distritos).filter(
        (dist) => dist[0] === provId
      );

      const result = filterDistritos[0][1];
      console.log(result);
      setDataDist(result);
    }
  }, [provId]);

  return (
    <form
      className={`${className}`}
      // className="flex flex-col border-2 p-6 lg:w-[800px] md:w-[500px] sm:w-[350px] y-[50%]"
      onSubmit={hanldeSubmit}
    >
      <div className="size-row">
        <div className="size-box">
          <label htmlFor="countryOfBirth">Pais de Nacimiento</label>
          <input
            onChange={handlePlace}
            type="text"
            id="countryOfBirth"
            name="countryOfBirth"
            className="border-gray-900/70 border-2 lg:mr-4 md:mr-4 sm:mr-0"
          />
        </div>
        <div className="size-box">
          <label htmlFor="nacionality">Nacionalidad</label>
          <input
            onChange={handlePlace}
            type="text"
            id="nacionality"
            name="nacionality"
            className="border-gray-900/70 border-2 "
          />
        </div>
      </div>
      <h2 className=" text-xl">Ubicacion de su residencia actual</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 lg:space-x-4 md:space-x-4 sm:space-x-0">
        <SelectList
          getId={setDepId}
          title={"departamento"}
          data={departamentos}
          setPlaceData={setPlaceData}
          placeData={placeData}
        />
        {dataProv && (
          <SelectList
            getId={setProvId}
            title={"provincia"}
            data={dataProv}
            setPlaceData={setPlaceData}
            placeData={placeData}
          />
        )}
        {dataDist && (
          <SelectList
            title={"distrito"}
            data={dataDist}
            setPlaceData={setPlaceData}
            placeData={placeData}
          />
        )}
      </div>
    </form>
  );
};

export default FormPlace;
