import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from "react";
import { Search } from "lucide-react";

const categories = ["Backdrops", "Florals", "Foils", "Pedestals", "Props"];

interface SizeSelectorModalProps {
  onClose: () => void;
}

export interface SizeSelectorModalRef {
  openModal: () => void;
}

const SizeSelectorModal = forwardRef<
  SizeSelectorModalRef,
  SizeSelectorModalProps
>(({ onClose }, ref) => {
  const [size, setSize] = useState({ height: "6", width: "3.5" });
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
    onClose();
  }, [onClose]);

  useImperativeHandle(ref, () => ({ openModal }), [openModal]);

  const handleSizeChange = useCallback(() => {
    console.log(`Size changed to ${size.height}ft x ${size.width}ft`);
    closeModal();
  }, [size, closeModal]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setSize((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 space-y-6">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex justify-center py-20">
          <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <Search />
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Displayed Name"
            className="bg-purple-100 w-full pl-10 pr-4 py-2 border rounded-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Size</h3>
          <div className="grid grid-cols-2 gap-4">
            {["height", "width"].map((dim) => (
              <div key={dim}>
                <input
                  type="number"
                  name={dim}
                  value={size[dim as keyof typeof size]}
                  onChange={handleInputChange}
                  className="bg-violet-200 w-full text-3xl font-bold text-center h-16 border rounded"
                />
                <p className="text-center mt-2">
                  {dim.charAt(0).toUpperCase() + dim.slice(1)} (ft)
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={closeModal}
            className="px-4 py-2 border bg-purple-100 border-gray-300 rounded hover:bg-purple-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSizeChange}
            className="px-4 py-2 bg-purple-100 border-gray-300 text-black rounded hover:bg-purple-300"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
});

SizeSelectorModal.displayName = "SizeSelectorModal";

export default SizeSelectorModal;
