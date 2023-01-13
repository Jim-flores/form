import "./App.css";
import FormUser from "./components/FormUser";
import FormPlace from "./components/FormPlace";
import FormFaculty from "./components/FormFaculty";
function App() {
  return (
    <div className="flex justify-center flex-col items-center h-full lg:mt-0 md:mt-0 sm:mt-5 w-screen overflow-y-auto gap-4">
      <iframe
        width="100%"
        height="500px"
        src="https://www.juegos.net/game.php?id_juego=20206&code=26b9v4v8bd7d41v46b948c8ccv447vvd"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
      <FormUser className="container mx-auto w-5/6 md:w-3/5 border-2 p-6" />
      {/* <FormPlace className="flex flex-col border-2 p-6 lg:w-[800px] md:w-[500px] sm:w-[350px]" /> */}
      <FormPlace className="container mx-auto w-5/6 md:w-3/5 border-2 p-6" />
      <FormFaculty className="container mx-auto w-5/6 md:w-3/5 border-2 p-6" />
    </div>
    // <div>
    //   <div className="container bg-amber-800">asdasd</div>
    //   <div className="w-full bg-red-800  ">asdasd</div>
    // </div>
  );
}

export default App;
