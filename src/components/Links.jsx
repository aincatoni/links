import LinksProps from "../assets/links.json";

function Links() {
  return (
    <div>
      <div className="my-5 grid-cols-1 rounded-md p-5 grid md:grid-cols-3  md:p-10">
        {LinksProps.map((link, i) => {
          return (
            <div
              key={i}
              className="bg-zinc-700 m-2 rounded-md md:w-34 md:min-h-[200px] hover:shadow-zinc-900 hover:shadow-md transition-shadow"
            >
              <a href={link.link} className="flex flex-col">
                <div className="h-32">
                  <img
                    className="object-cover h-full w-full"
                    src={link.image}
                    alt=""
                  />
                </div>
                <div className="pl-5 pt-5">
                  <h2>{link.title}</h2>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Links;
