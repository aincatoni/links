import ProfilePic from "../assets/images/profile_pic.png";
function Bio() {
  return (
    <div className="dark:bg-zinc-700 flex items-center rounded-r-md hover:shadow-md transition">
      <div className="h-[150px] w-[225px]">
        <img className="h-full object-cover" src={ProfilePic} alt="" />
      </div>
      <div className="">
        <h2>Hi I'm Ain 👨🏻‍💻</h2>
        <h3>
          I'm a Front-end web developer and <span>I love to play drums 🥁</span>
        </h3>
      </div>
    </div>
  );
}

export default Bio;
