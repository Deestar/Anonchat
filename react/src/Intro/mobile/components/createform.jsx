import Back from "../../../assets/img/back.png";
export const Createform = ({ prev }) => {
  return (
    <form action="">
      <img
        onClick={() => {
          prev("choice");
        }}
        src={Back}
      />
      <h1>Create Your Room</h1>
      <section>
        <label>
          <h3>Room Name</h3>
          <input name="name" type="text" maxLength={25} />
          {/* <h6>An error message for input values</h6> */}
        </label>
        <label>
          <h3> Banned Words</h3>
          <input type="text" name="banned" placeholder="bitch, hoe, racist" />
          {/* <h6>An error message for input values</h6> */}
        </label>
        <label>
          <h3>Room Logo</h3>
          <input type="file" />
          {/* <h6>An error message for input values</h6> */}
        </label>
      </section>
      <button>Create</button>
    </form>
  );
};
