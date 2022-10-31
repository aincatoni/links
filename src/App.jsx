import "./App.css";
import Bio from "./components/Bio";
import Links from "./components/Links";

function App() {
  return (
    <div className="App container mx-auto mt-5">
      <div>
        <h1 className="mx-auto w-100 my-5 font-sans text-zinc-100 font-bold text-4xl bg-zinc-700 inline-block px-5 py-2 rounded-tr-md hover:shadow-md transition-transform">
          Ain's Links
        </h1>
      </div>
      <Bio />
      <Links />
    </div>
  );
}

export default App;
