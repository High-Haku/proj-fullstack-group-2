import React from "react";

function VideoPlayerCloudHosted(props) {
  const url = `https://player.cloudinary.com/embed/?public_id=${props.options.publicId}&cloud_name=${props.options.cloudName}&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&source%5Bsource_types%5D%5B0%5D=mp4`;

  return (
    <>
      <div className="iframe-container">
        <iframe
          className="responsive-video"
          src={url}
          width="465"
          height="825"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture; muted; loop"
          allowFullScreen
          frameBorder="0"
        ></iframe>
        <video></video>
      </div>
    </>
  );
}

export default VideoPlayerCloudHosted;
