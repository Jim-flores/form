import React, { useState, ChangeEvent, FormEvent } from "react";
import { Users } from "../Types/types";

const initValuesUsers = {
  name: "",
  lastNames: "",
  cell: "",
  gender: "",
  date: "",
  codOrcid: "",
  typeDocument: "",
  NroDocument: "",
  disability: false,
  disabilityCheck: "",
};
interface props {
  className?: string;
}
const FormUser = ({ className }: props) => {
  const [userData, setUserData] = useState<Users>(initValuesUsers);

  const handleUser = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleUserCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setUserData({ ...userData, [name]: checked });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${className}`}
      //   className="flex flex-col border-2 p-6 lg:w-[800px] md:w-[500px] sm:w-[350px] y-[50%]"
    >
      <div className="size-row">
        <div className="size-box">
          <label htmlFor="name">Nombres</label>
          <input
            onChange={handleUser}
            type="text"
            id="name"
            name="name"
            className="border-gray-900/70 border-2 lg:mr-4 md:mr-4 sm:mr-0"
          />
        </div>
        <div className="size-box">
          <label htmlFor="lastNames">Apellidos</label>
          <input
            onChange={handleUser}
            type="text"
            id="lastNames"
            name="lastNames"
            className="border-gray-900/70 border-2"
          />
        </div>
      </div>

      <div className="size-row">
        <div className="size-box">
          <label htmlFor="cell">Celular</label>
          <input
            onChange={handleUser}
            type="text"
            id="cell"
            name="cell"
            className="border-gray-900/70 border-2 lg:mr-4 md:mr-4 sm:mr-0"
          />
        </div>
        <div className="size-box">
          <label htmlFor="gender">Sexo</label>
          <div className=" flex space-x-4">
            <div className=" space-x-2">
              <input
                onChange={handleUser}
                type="radio"
                id="gender"
                name="gender"
                value="male"
                className="border-2"
              />
              <label htmlFor="gender" className="text-sm">
                Masculino
              </label>
            </div>

            <div className=" space-x-2">
              <input
                onChange={handleUser}
                type="radio"
                id="gender"
                name="gender"
                value="famale"
                className="border-2"
              />
              <label htmlFor="disability" className="text-sm">
                Femenino
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="size-row">
        <div className="size-box">
          <label htmlFor="date">Fecha de Nacimiento</label>
          <input
            onChange={handleUser}
            type="date"
            id="date"
            name="date"
            className="border-gray-900/70 border-2 lg:mr-4 md:mr-4 sm:mr-0"
          />
        </div>
        <div className="size-box">
          <label htmlFor="codOrcid">Codigo Orcid</label>
          <input
            onChange={handleUser}
            type="text"
            id="codOrcid"
            name="codOrcid"
            className="border-gray-900/70 border-2"
          />
        </div>
      </div>

      <div className="size-row">
        <div className="size-box">
          <label htmlFor="typeDocument">Tipo de Documento</label>
          <select
            name="carnet"
            id="typeDocument"
            onChange={handleUser}
            className="border-gray-900/70 border-2 lg:mr-4 md:mr-4 sm:mr-0"
          >
            <option value="carnet">Carnet de Pasaporte</option>
            <option value="dni ">DNI</option>
          </select>
        </div>
        <div className="size-box">
          <label htmlFor="NroDocument">Numero de Documento</label>
          <input
            onChange={handleUser}
            type="text"
            id="NroDocument"
            name="NroDocument"
            className="border-gray-900/70 border-2"
          />
        </div>
      </div>

      <div className="size-row">
        <div className="">
          <label htmlFor="disability">Discapacidad</label>
          <div className="space-x-2">
            <input
              onChange={handleUserCheck}
              type="checkbox"
              id="disability"
              name="disability"
              className="border-gray-900/70 border-2"
            />
          </div>
        </div>
        {userData.disability && (
          <div className="flex items-end">
            <input
              onChange={handleUser}
              type="text"
              id="disabilityCheck"
              name="disabilityCheck"
              className="border-gray-900/70 border-2 h-[30px] lg:w-full md:w-full sm:w-full "
            />
          </div>
        )}
      </div>
      <button className="bg-cyan-500 w-[100px] rounded-lg mt-5 border-2">
        enviar
      </button>
    </form>
  );
};

export default FormUser;
