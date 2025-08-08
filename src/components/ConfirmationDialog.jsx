import { useContext } from "react";
import TripContext from "../context/TripContxt";

function ConfirmationDialog({
  isOpen,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  type = "default",
}) {
  const { setIsConfirmOpen } = useContext(TripContext);

  if (!isOpen) return null;

  const getButtonColors = () => {
    switch (type) {
      case "danger":
        return "bg-red-600 hover:bg-red-700 focus:ring-red-500";
      case "warning":
        return "bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500";
      case "success":
        return "bg-green-600 hover:bg-green-700 focus:ring-green-500";
      default:
        return "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "danger":
        return "⚠️";
      case "warning":
        return "⚡";
      case "success":
        return "✅";
      default:
        return "❓";
    }
  };

  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen w-full">
      {/* Background Overlay with Gradient Blur */}
      <div
        className="absolute inset-0 w-full h-full backdrop-blur-md"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)",
        }}
        onClick={() => setIsConfirmOpen(false)}
      ></div>

      {/* Dialog Box */}
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-auto p-6 transform transition-all z-10">
        {/* Icon and Title */}
        <div className="text-center mb-4">
          <div className="text-4xl mb-3">{getIcon()}</div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>

        {/* Message */}
        <div className="text-center mb-6">
          <p className="text-gray-600">{message}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={() => setIsConfirmOpen(false)}
            className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={handleConfirm}
            className={`flex-1 text-white py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${getButtonColors()}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationDialog;
