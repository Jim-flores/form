export interface Users {
  name: string;
  lastNames: string;
  cell: string;
  gender: string;
  date: string;
  codOrcid: string;
  typeDocument: string;
  NroDocument: string;
  disability: boolean;
  disabilityCheck: string;
}
export interface Ubigeos {
  id_ubigeo: string;
  nombre_ubigeo: string;
  codigo_ubigeo: string;
  etiqueta_ubigeo: string;
  buscador_ubigeo: string;
  numero_hijos_ubigeo: string;
  nivel_ubigeo: string;
  id_padre_ubigeo: string;
}

export interface Places {
  countryOfBirth: string;
  nacionality: string;
  departamento: string;
  provincia: string;
  distrito: string;
}
export interface Faculty {
  facultad: string;
  escuelas: string;
  modalityStudy: string;
  studyProgram: string;
  admission: string;
  process: string;
}
export interface Carrer {
  id: string;
  name: string;
}
