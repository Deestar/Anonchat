import Back from "../../../assets/img/back.png";
export const Createform = ({ prev }) => {
  //change height to absolute value on focus of input
  const blurout = () => {
    let h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    let r = document.querySelector(":root");
    r.style.setProperty("--height", h + "px");
  };
  //change height to responsive value on blur of input
  const stoptouch = () => {
    let r = document.querySelector(":root");
    r.style.setProperty("--height", "-webkit-fill-available");
  };
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
          <input
            onFocus={blurout}
            onBlur={stoptouch}
            name="name"
            type="text"
            maxLength={25}
          />
          {/* <h6>An error message for input values</h6> */}
        </label>
        <label>
          <h3> Banned Words</h3>
          <input
            onFocus={blurout}
            onBlur={stoptouch}
            type="text"
            name="banned"
            placeholder="bitch, hoe, racist"
          />
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
