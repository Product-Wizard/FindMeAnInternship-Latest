interface WebPageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  title?: string;
}
const WebPageModal = ({
  isOpen,
  onClose,
  src,
  title = "external webpage",
}: WebPageModalProps) => {
  if (isOpen == false) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "5px",
          width: "80%",
          height: "80%",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{ position: "absolute", top: "10px", right: "10px" }}
        >
          Close
        </button>
        {/* The iframe is where the external page will attempt to load */}
        <iframe
          src={src}
          title={title}
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>
    </div>
  );
};

export default WebPageModal;
