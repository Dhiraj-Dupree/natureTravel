import Waterfall from "../../assets/waterfall.jpg";

const hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Waterfall})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "200px",
      }}
    >
      <div className="heroTextBox">
        <em className="heroText">Explore.</em>
        <div className="heroParagraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum culpa
          amet ducimus et deleniti laudantium expedita in quod odit harum
          commodi, ut ad iure adipisci perferendis nulla deserunt architecto
          quia!
        </div>
      </div>
    </div>
  );
};

export default hero;
