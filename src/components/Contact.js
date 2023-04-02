import "./Contact.css";
const Contact = () => {
  return (
    <div className="container">
      <form
        action="mailto:saxenaakshay1773@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <label>Enter your name:</label>
        <input type="text" name="Name" placeholder=""  style={{background:'#393E46'}}/>
        <label>Enter your email:</label>
        <input type="text" name="Name" placeholder=""  style={{background:'#393E46'}}/>
        <label>Type your Message:</label>
        <textarea name="Message" rows="8" cols="80" placeholder="" style={{background:'#393E46'}}></textarea>
        <button
          style={{ fontSize: 30}}
          className="button-30"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
