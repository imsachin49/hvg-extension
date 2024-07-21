/* eslint-disable react/prop-types */
export default function GoogleSlides({ iframelink }) {
  return (
    <div className="my-5 rounded-md w-fit">
      <iframe
        src={iframelink}
        frameBorder="0"
        width="570"
        height="350"
        allowfullscreen="true"
      />
    </div>
  );
}