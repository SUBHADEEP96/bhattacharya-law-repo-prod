interface PopupProps {
  onAgree: () => void;
  onDisagree: () => void;
}

function Popup({ onAgree, onDisagree }: PopupProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-blur">
      <div className="bg-white p-4 rounded-lg shadow-lg text-center h-screen sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col items-center justify-center">
        <p
          className="text-lg mb-4 "
          style={{
            padding: "5px",
            border: "2px solid black",
            fontSize: "10px",
          }}
        >
          The information provided on this website is for educational and
          informative purposes only and should not be construed as a legal
          advice. The content on this site is not intended to create, and
          receipt or viewing does not constitute, an attorney-client
          relationship. While we strive to keep the information on this website
          accurate and up-to-date, we make no representations or warranties of
          any kind, express or implied, about the completeness, accuracy,
          reliability, suitability, or availability with respect to the website
          or the information, products, services, or related graphics contained
          on the website for any purpose. Any reliance you place on such
          information is strictly at your own risk. The hiring of a lawyer is an
          important decision that should not be based solely upon
          advertisements. If you have specific legal questions or concerns,
          please consult with an attorney of your choice. We expressly disclaim
          all liability in respect to actions taken or not taken based on any or
          all the contents of this site.
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
