// components/withPopup.tsx
import { useEffect, useState } from "react";
import Popup from "./Popup";

interface WithPopupProps {
  userAccepted: boolean | null;
}

const withPopup = (WrappedComponent: React.FC<WithPopupProps>) => {
  return (props: WithPopupProps) => {
    const [showPopup, setShowPopup] = useState(false);
    const [userAccepted, setUserAccepted] = useState<boolean | null>(
      props.userAccepted
    );

    useEffect(() => {
      const userAcceptedValue = localStorage.getItem("userAccepted");
      const accepted = userAcceptedValue === "true";

      if (userAcceptedValue === null || !accepted) {
        setShowPopup(true);
      }

      // Set the initial value of userAccepted based on local storage
      setUserAccepted(accepted);
    }, []);

    const handlePopupClose = () => {
      setShowPopup(false);
    };

    const handleSaveUserResponse = (accepted: boolean) => {
      localStorage.setItem("userAccepted", accepted.toString());
      setUserAccepted(accepted);
    };

    return (
      <>
        {showPopup && (
          <Popup onClose={handlePopupClose} onSave={handleSaveUserResponse} />
        )}
        <WrappedComponent userAccepted={userAccepted} />
      </>
    );
  };
};

export default withPopup;
