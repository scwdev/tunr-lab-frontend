import React from "react";

import { toSeconds } from "../functions/song-length";


const Form = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.song);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    const timeAdjust = {...formData, "time": toSeconds(formData.time)}
    props.handleSubmit(timeAdjust); // Submit to Parents desired function
    setFormData(props.song)
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add a new song to your playlist!</h2>
      <label><small>Title </small></label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      /> <br/>
      <label><small>Artist </small></label>
      <input
        type="text"
        name="artist"
        value={formData.artist}
        onChange={handleChange}
      /><br/>
      <label for="time"><small>Time </small></label>
      <input
        type="text"
        placeholder="mm:ss"
        name="time"
        value={formData.time}
        onChange={handleChange}
      /><br/>
      <input className="addSongButton"type="submit" value={props.label} />
    </form>
  );
};

export default Form;
