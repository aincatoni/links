import "./App.css";
import Bio from "./components/Bio";
import Links from "./components/Links";

function App() {
  return (
    <div className="App container mx-auto mt-5">
      <div>
        <h1 className="my-5 font-sans text-purple-100 font-bold text-4xl bg-purple-500 inline-block px-5 py-2 rounded-tr-md hover:shadow-md transition-transform">
          Ain's Links
        </h1>
      </div>
      <Bio />
      <Links />
    </div>
  );
}

export default App;
