import Create from "../../../assets/img/create.png";
import Next from "../../../assets/img/next.png";
import Join from "../../../assets/img/join.png";
export const Choicecard = ({ next }) => {
  return (
    <section className="choice">
      <div className="cards">
        <div className="info">
          <img src={Create} />
          <h3>Create Room</h3>
          <h5>Create room and share room id to your group members</h5>
        </div>
        <img
          src={Next}
          onClick={() => {
            next("create");
          }}
        />
      </div>
      <div className="cards">
        <div className="info">
          <img src={Join} />
          <h3>Join a Room</h3>
          <h5>Click here to join a room with your room id</h5>
        </div>
        <img src={Next} />
      </div>
    </section>
  );
};
