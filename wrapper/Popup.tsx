interface PopupProps {
  onAgree: () => void;
  onDisagree: () => void;
}

function Popup({ onAgree, onDisagree }: PopupProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-blur">
      <div className="bg-white p-4 rounded-lg shadow-lg text-center h-screen sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col items-center justify-center">
        <p className="text-lg mb-4">
          Do you agree to the terms and conditions?
        </p>
        <button style={{ width: "200px", height: "50px" }} onClick={onAgree}>
          Agree
        </button>
        <button style={{ width: "200px", height: "50px" }} onClick={onDisagree}>
          Disagree
        </button>
      </div>
    </div>
  );
}

export default Popup;
