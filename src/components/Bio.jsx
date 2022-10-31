import ProfilePic from "../assets/images/profile_pic_drums.jpeg";
function Bio() {
  return (
    <div className="w-5/6 mx-auto dark:bg-zinc-700 flex items-center gap-10 rounded-r-md hover:shadow-md transition">
      <div className="h-[175px]">
        <img className="h-full w-full object-cover" src={ProfilePic} alt="" />
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
