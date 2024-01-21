// components/Popup.tsx
import { useState } from "react";

interface PopupProps {
  onClose: () => void;
  onSave: (accepted: boolean) => void;
}

function Popup({ onClose, onSave }: PopupProps) {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    onSave(true);
    onClose();
  };

  const handleReject = () => {
    setAccepted(false);
    onSave(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-blur">
      <div className="bg-white p-4 rounded-lg shadow-lg text-center w-300 h-300">
        <p className="text-lg mb-4">Legal Contents..</p>
        <p className="text-lg mb-4">Do you want to continue?</p>
        <button
          onClick={handleAccept}
          className="bg-green-500 text-white px-4 py-2 m-2 rounded"
        >
          Agree
        </button>
        <button
          onClick={handleReject}
          className="bg-red-500 text-white px-4 py-2 m-2 rounded"
        >
          Disagree
        </button>
      </div>
    </div>
  );
}

export default Popup;
