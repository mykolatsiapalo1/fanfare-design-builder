import React from "react";
import { TabBarProps, Tab } from "../../types/index";

const TabBar: React.FC<TabBarProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
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
  );
};

export default TabBar;
