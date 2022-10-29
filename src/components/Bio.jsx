import ProfilePic from "../assets/images/foto_perfil.png";
function Bio() {
  return (
    <div className="columns-2 dark:bg-zinc-700">
      <div>
        <img className="w-50" src={ProfilePic} alt="" />
      </div>
      <div>
        <h2>Ain</h2>
        <h3>
          I'm a front end web developer and <span>I play drums 🥁</span>
        </h3>
      </div>
    </div>
  );
}

export default Bio;
