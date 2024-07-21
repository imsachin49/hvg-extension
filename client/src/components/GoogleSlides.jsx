/* eslint-disable react/prop-types */
export default function GoogleSlides({ iframelink }) {
  return (
    <div className="my-5 rounded-md w-fit">
      <iframe
        src={iframelink}
        className="rounded-md p-0"
        width="700"
        height="404"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      />
    </div>
  );
}