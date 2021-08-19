import React from "react";


const Form = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.song);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); //Push back to display page
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add a new song to your playlist!</h2>
      <small>Title: </small>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <small>Artist: </small>
      <input
        type="text"
        name="artist"
        value={formData.artist}
        onChange={handleChange}
      />
      <small>Song Length: </small>
      <input
        type="text"
        name="time"
        value={formData.time}
        onChange={handleChange}
      />
      <input className="addSongButton"type="submit" value={props.label} />
    </form>
  );
};

export default Form;
