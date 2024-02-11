// components/withPopup.tsx
import { useEffect, useState } from "react";
import Popup from "./Popup";

const withPopup = (WrappedComponent: React.FC) => {
  return () => {
    const [showPopup, setShowPopup] = useState(false);
    const [agreed, setAgreed] = useState<boolean | null>();

    useEffect(() => {
      const userAgreedValue = localStorage.getItem("userAgreed");
      const agreed = userAgreedValue === "true";

      if (userAgreedValue === null) {
        setShowPopup(true);
      }

      // Set the initial value of agreed based on local storage
      setAgreed(agreed);
    }, []);

    const handleAgree = () => {
      localStorage.setItem("userAgreed", "true");
      setAgreed(true);
      setShowPopup(false);
    };

    const handleRefresh = () => {
      localStorage.removeItem("userAgreed");
      if (
        typeof window !== "undefined" &&
        window.location &&
        window.location.reload
      ) {
        window.location.reload();
        window.location.href = "/";
      }
    };

    const handleDisagree = () => {
      localStorage.setItem("userAgreed", "false");
      setAgreed(false);
      // Optionally, you can take additional actions when the user disagrees
      // For example, redirect them to a different page or show a message.
      // For simplicity, we'll just close the popup in this example.
      // setShowPopup(false);
      window.location.href = "/refresh";
    };

    return (
      <>
        {showPopup && (
          <Popup onAgree={handleAgree} onDisagree={handleDisagree} />
        )}
        {agreed && <WrappedComponent />}
      </>
    );
  };
};

export default withPopup;
