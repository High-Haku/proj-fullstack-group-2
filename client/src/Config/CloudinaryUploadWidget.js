import React from "react";
import { WidgetLoader, Widget } from "react-cloudinary-upload-widget";

const successCallBack = () => {};
const failureCallBack = () => {};

export default function CloudinaryUploadWidget() {
  return (
    <div >
      <WidgetLoader />
      <Widget
        sources={["default"]} // set the sources available for uploading -> by default
        resourceType={"image"} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
        cloudName={"jovitoaddo"} // your cloudinary account cloud name.
        uploadPreset={"ml_default"} // check that an upload preset exists and check mode is signed or unisgned
        buttonText={"UPLOAD"} // default 'Upload Files'
        cropping={false} // set ability to crop images -> default = true
        onSuccess={successCallBack} // add success callback -> returns result
        onFailure={failureCallBack} // add failure callback -> returns 'response.error' + 'response.result'
        logging={false} // logs will be provided for success and failure messages,
        apiKey={719972574728976} // cloudinary API key -> number format
        accepts={"application/json"} // for signed uploads only -> default = 'application/json'
        contentType={"application/json"} // for signed uploads only -> default = 'application/json'
        withCredentials={false} // default = true -> check axios documentation for more information
        unique_filename={true} // setting it to false, you can tell Cloudinary not to attempt to make
        style={{
          backgroundColor: "white",
          color: "gray",
          borderColor: "white",
          borderRadius:"500px",
          height:"50px"
        }}
      />
    </div>
  );
}
