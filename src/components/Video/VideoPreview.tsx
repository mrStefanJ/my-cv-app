import { useState } from "react";
import { Video } from '@/types/VideoType';

export const VideoPreview = ({ video, buttonText = "Video" }: Video) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div
        style={{
          position: "relative",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {/* BUTTON */}
        <button onClick={() => setIsOpen(true)} className="project__link">
          {buttonText}
        </button>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          {/* ❌ CLOSE BUTTON */}
          <button
            onClick={() => setIsOpen(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
            }}
          >
            ✕
          </button>

          <video
            src={video}
            controls
            autoPlay
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "12px",
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};
