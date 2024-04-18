import still from "../../assets/still.webp";
const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${still})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "200px",
      }}
    >
      <div className="AboutText">
        <em>About</em>

        <div className="InfoContainer">
          <div className="whyUs">
            <p>Why Us</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              fugit at vero. Obcaecati laborum maxime iste asperiores alias nisi
              suscipit quos laudantium. Beatae aperiam natus similique
              consequatur accusamus. Vel, provident.
            </p>
          </div>
          <div className="Locations">
            <p>Our Locations</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              molestias illum obcaecati dolor itaque temporibus possimus
              blanditiis ab, ducimus hic, officia facere voluptate beatae quos
              sit consequuntur aliquam laboriosam. Modi.
            </p>
          </div>
          <div className="chose">
            <p>Experience</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus consequuntur adipisci magnam veritatis nostrum corrupti,
              voluptatum cupiditate explicabo doloremque totam? Cum repudiandae
              iusto officiis! Eveniet at quibusdam dicta qui amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
