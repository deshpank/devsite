export default function PhotoRing() {
  return (
    <div className="photo-ring-wrap" aria-hidden="true">
      <svg className="photo-ring photo-ring-outer" viewBox="0 0 320 320">
        <circle cx="160" cy="160" r="150" />
        <circle cx="160" cy="160" r="150" className="photo-ring-tick" pathLength="100" />
      </svg>
      <svg className="photo-ring photo-ring-inner" viewBox="0 0 320 320">
        <circle cx="160" cy="160" r="122" strokeDasharray="4 10" />
      </svg>
      <div className="photo-frame">
        {/* Drop your photo in here — swap this block for <img src="/your-photo.jpg" alt="Kimaya Deshpande" /> */}
        <span className="photo-frame-icon">◎</span>
        <span className="photo-frame-placeholder">Your photo goes here</span>
      </div>
    </div>
  );
}
