import webPic from "../assets/images/website.png";
import resumePic from "../assets/images/resume.png";
import evPic from "../assets/images/ev.jpeg";
import blogPic from "../assets/images/blog.png";
import profilePic from "../assets/images/profile_pic.png";

const links = [
  {
    title: "Website",
    link: "https://aincatoni.com",
    image: webPic,
  },
  {
    title: "My resume online",
    link: "https://aincatoni.com/acerca-de-mi",
    image: resumePic,
  },
  {
    title: "My band: Espacio Volátil",
    link: "https://espaciovolatil.bandcamp.com/album/cuenta-regresiva",
    image: evPic,
  },
  {
    title: "Blog",
    link: "https://lasestrellasfugaces.aincatoni.com",
    image: blogPic,
  },
  {
    title: "Instagram",
    link: "https://instagram.com/aincatoni",
    image: profilePic,
  },
];

function Links() {
  return (
    <div>
      <div className="my-5 columns-2 rounded-md p-5">
        {links.map((link) => {
          return (
            <div className="bg-zinc-700 m-2">
              <a href={link.link}>
                <h2>{link.title}</h2>
                <img className="fit" src={link.image} alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Links;
