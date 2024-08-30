import React, { useState } from "react";
import { FaCog } from "react-icons/fa";
import Button from "../Button/Button";
import EditButton from "../Button/ButtonEdit";
import Image from "next/image";
import SizeCard from "../Card/SizeCard";
import PhotoGallery from "../PhotoGallery/PhotoGallery";

const SettingsPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState("settings");

  const tabs = [
    { id: "settings", icon: <FaCog className="h-5 w-5" /> },
    { id: "tags", label: "Tags" },
    { id: "variants", label: "Variants" },
    { id: "photos", label: "Photos" },
  ];

  return (
    <div className="fixed right-4 top-1/4 w-[28.5rem] bg-white rounded-lg shadow-lg flex flex-col h-[75vh]">
      <div className="bg-purple-100 p-2">
        <div className="flex justify-between">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              className={`
                px-3 py-2 text-sm font-medium text-gray-700 cursor-pointer
                relative flex-1 text-center
                ${
                  activeTab === tab.id
                    ? "text-purple-600"
                    : "hover:text-purple-600"
                }
              `}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon ? (
                <div className="flex justify-center">{tab.icon}</div>
              ) : (
                tab.label
              )}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#65558F]"></span>
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-6">
        {activeTab === "settings" && <SettingsContent />}
        {activeTab === "tags" && <TagsContent />}
        {activeTab === "variants" && <VariantsContent />}
        {activeTab === "photos" && <PhotosContent />}
      </div>
    </div>
  );
};

const SettingsContent: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [displayedName, setDisplayedName] = useState("Displayed Name");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayedName(e.target.value);
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveName();
  };

  const saveName = () => {
    setIsEditing(false);
    console.log("New name submitted:", displayedName);
  };

  return (
    <div>
      <div className="space-y-4">
        <div className="rounded-3xl bg-purple-50 p-2 flex justify-between items-center">
          {isEditing ? (
            <form
              onSubmit={handleNameSubmit}
              className="flex items-center w-full"
            >
              <input
                type="text"
                value={displayedName}
                onChange={handleNameChange}
                className="border rounded px-2 py-1 mr-2 flex-grow"
                autoFocus
              />
              <Button onClick={saveName}>Save</Button>
            </form>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-purple-900">
                {displayedName}
              </h3>
              <div className="flex items-center">
                <EditButton onClick={handleEditClick} />
              </div>
            </>
          )}
        </div>
        <div>
          <h4 className="text-sm font-medium mb-2">Assign Main Menu Section</h4>
          <div className="flex space-x-2">
            <Button>Backdrops</Button>
            <Button>Garlands</Button>
            <Button>Freestanding</Button>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">
            Subcategory for Search/Sorting
          </h4>
          <div className="space-y-2">
            <h5 className="text-xs font-medium">Walls</h5>
            <div className="flex space-x-2">
              <Button>Greenery</Button>
              <Button>Floral</Button>
              <Button>Shimmer</Button>
            </div>
            <h5 className="text-xs font-medium">Chiaras</h5>
            <div className="flex space-x-2">
              <Button>Wooden</Button>
              <Button>Cloth</Button>
              <Button>Luxe</Button>
            </div>
            <h5 className="text-xs font-medium">Piping/Framing</h5>
            <div className="flex space-x-2">
              <Button>Square</Button>
              <Button>Hoop</Button>
              <Button>Unique</Button>
            </div>
            <h5 className="text-xs font-medium">Custom</h5>
            <div className="flex space-x-2">
              <Button>Other</Button>
              <Button>Other</Button>
              <Button>Other</Button>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Highlight (optional)</h4>
          <div className="flex space-x-2 flex-nowrap overflow-x-auto">
            <Button className="flex-shrink-0">Seasonal</Button>
            <Button className="flex-shrink-0 whitespace-nowrap">
              Most Popular
            </Button>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Assign Menu Location</h4>
          <div className="flex space-x-2">
            <Button>Primary</Button>
            <Button>Variant</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TagsContent: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [displayedName, setDisplayedName] = useState("Displayed Name");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayedName(e.target.value);
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveName();
  };

  const saveName = () => {
    setIsEditing(false);
    console.log("New name submitted:", displayedName);
  };

  return (
    <div className="space-y-6 p-4">
      <div className="rounded-3xl bg-purple-50 p-2 flex justify-between items-center">
        {isEditing ? (
          <form
            onSubmit={handleNameSubmit}
            className="flex items-center w-full"
          >
            <input
              type="text"
              value={displayedName}
              onChange={handleNameChange}
              className="border rounded px-2 py-1 mr-2 flex-grow"
              autoFocus
            />
            <Button onClick={saveName}>Save</Button>
          </form>
        ) : (
          <>
            <h3 className="text-lg font-semibold text-purple-900">
              {displayedName}
            </h3>
            <div className="flex items-center">
              <EditButton onClick={handleEditClick} />
            </div>
          </>
        )}
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Assign Main Menu Section</h4>
        <div className="flex space-x-2">
          <Button>Backdrops</Button>
          <Button>Garlands</Button>
          <Button>Freestanding</Button>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">
          Subcategory for Search/Sorting
        </h4>
        <div className="flex space-x-2">
          <Button>Backdrops</Button>
          <Button>Garlands</Button>
          <Button>Freestanding</Button>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Highlight (optional)</h4>
        <div className="flex space-x-2">
          <Button>Seasonal</Button>
          <Button className="flex-shrink-0 whitespace-nowrap">
            Most Popular
          </Button>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Assign Menu Location</h4>
        <div className="flex space-x-20">
          <Button>Primary</Button>
          <Button>Variant</Button>
        </div>
        <div className="flex space-x-2 mt-2">
          <div className="flex flex-row">
            {[0, 1, 2, 3, 4].map((num) => (
              <Button
                key={num}
                variant={num === 3 ? "accent" : "primary"}
                className="w-8 h-8 text-white p-0 !bg-red-600 hover:bg-red-600"
              >
                {num}
              </Button>
            ))}
          </div>
          <div className="flex flex-grow pl-7">
            {[1, 2, 3, 4].map((num) => (
              <Button
                key={num}
                variant={num === 3 ? "accent" : "primary"}
                className="w-8 h-8 text-white p-0 !bg-red-600 hover:bg-red-600"
              >
                {num}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Alternatives</h4>
        <div className="flex space-x-4">
          <div className="w-1/2 bg-white rounded-xl border border-gray-300 p-4">
            <h5 className="text-sm text-center font-medium mb-2">Featured</h5>
            <div className="relative w-full h-0 pb-[100%]">
              <Image
                src=""
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
          </div>
          <div className="w-1/2 bg-white rounded-xl border border-gray-300 p-4">
            <h5 className="text-sm font-medium mb-2 flex-shrink-0 whitespace-nowrap">
              Swappable Components
            </h5>
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="bg-gray-100 rounded-full aspect-[2/3] flex items-center justify-center"
                >
                  {num <= 2 ? (
                    <div className="w-16 h-16 bg-gray-200 rounded-full" />
                  ) : (
                    <Button variant="secondary" className="w-8 h-8 p-0">
                      +
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VariantsContent: React.FC = () => (
  <div className="space-y-6">
    <div className="flex flex-col items-center">
      <Button>Primary</Button>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <SizeCard size="1 Size" isPopular={false} />
      <SizeCard size="2 Sizes" isPopular={false} />
      <SizeCard size="3 Sizes" isPopular={true} />
      <SizeCard size="4 Sizes" isPopular={false} />
    </div>
    <div className="flex flex-col items-center">
      <Button>Variant</Button>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <SizeCard size="1 Size" isPopular={false} />
      <SizeCard size="2 Sizes" isPopular={false} />
    </div>
  </div>
);

const PhotosContent: React.FC = () => <PhotoGallery />;

export default SettingsPanel;
