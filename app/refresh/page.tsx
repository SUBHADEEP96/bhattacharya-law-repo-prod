"use client";
const Refresh: React.FC = () => {
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

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <p className="text-center mb-4">
          You have disagreed. Please refresh the page.
        </p>
        <button
          onClick={handleRefresh}
          className="w-full bg-dark-500 text-white font-bold py-2 px-4 rounded"
        >
          🔃 Refresh
        </button>
      </div>
    </div>
  );
};

export default Refresh;
