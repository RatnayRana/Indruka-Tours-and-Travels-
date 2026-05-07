export default function SortingTabs() {
  const tabs = ["All", "Monastery", "Fortress", "Mountain Pass", "Valley"];

  return (
    <div>
      <div className="relative z-10 w-full  flex flex-end flex-wrap justify-center gap-2 mb-8 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            // onClick={() => handleTabChange(tab)}
            className="relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border-2 border-gray-300 bg-white hover:bg-blue-50 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {tab}
            {/* {activeTab === tab && (
              <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20" />
            )} */}
          </button>
        ))}
      </div>
    </div>
  );
}
