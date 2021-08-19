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
    <form onSubmit={handleSubmit}>
      <small>Title </small>
      <input
        type="text"
        name="name"
        value={formData.title}
        onChange={handleChange}
      />
      <small>Artist </small>
      <input
        type="text"
        name="artist"
        value={formData.artist}
        onChange={handleChange}
      />
      <small>Time </small>
      <input
        type="text"
        name="time"
        value={formData.time}
        onChange={handleChange}
      />
      <input type="submit" value={props.label} />
    </form>
  );
};

export default Form;
