export default function LandingVideo() {
  return (
    <div className="m-auto max-w-6xl rounded-lg">
      {/* For YouTube: https://www.youtube.com/watch?v=u--Ee-KM20Q */}
      <iframe
        src="https://www.youtube.com/embed/u--Ee-KM20Q"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="aspect-video w-full rounded-lg"
      />
    </div>
  );
}
