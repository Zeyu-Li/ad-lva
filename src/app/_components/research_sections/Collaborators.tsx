export default function Collaborators() {
  return (
    <div className="relative">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/water.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10">Collaborators</div>
    </div>
  );
}
