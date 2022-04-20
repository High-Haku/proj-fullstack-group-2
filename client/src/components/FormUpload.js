import React from 'react'
import './FormUpload.css'

function FormUpload() {
  return (

   <div><form action="action_page.php"/>
    <div className="container">
      <h1>Upload your video here!</h1>
      <p>Please fill in your details</p>
      <hr className="line"/>
  
      <label for="title"><b>Title</b></label>
      <input type="text" placeholder="Enter title" name="title" id="title" className="input" required/>
  
      <label for="desc"><b>Description</b></label>
      <input type="text" placeholder="Enter description" name="desc" id="desc" className="input" required/>
  
      <label for="input-type"><b>Type</b></label>
      <input type="file" placeholder="file" name="file" id="file" required/>

      
      <p></p>

<div action="/action_page.php">
  <label for="Category">Choose a category:</label>
  <select name="category" id="category">
    <optgroup label="Projects">
      <option value="Creativity">Creativity</option>
      <option value="Everyday Items">Everyday Items</option>
      <option value="Other">Other</option>
    </optgroup>
  </select>
  <br/><br/>
  <input type="submit" value="Submit" className="submitBtn"/>
</div></div></div>
  )
}

export default FormUpload

