import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const innerTabsTriggerClass =
  "rounded-t-xl py-4 text-sm font-medium transition-all " +
  "data-[state=active]:bg-blue-900 data-[state=active]:text-white " +
  "data-[state=inactive]:bg-gray-300 data-[state=inactive]:text-gray-500 " +
  "data-[state=inactive]:hover:bg-gray-400";

type Tab = {
  value: string;
  label: string;
  dotColor: string;
  items: string[];
};

export default function TourInformationContent({
  title = "Tour Information",
  subtitle = "Read this to prepare for your tour in the best way!",
  tabs,
}: {
  title?: string;
  subtitle?: string;
  tabs: Tab[];
}) {
  if (!tabs || tabs.length === 0) return null;

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-900 mb-1">{title}</h2>
        <p className="text-sm text-gray-400 italic">{subtitle}</p>
      </div>

      <div className="max-w-2xl">
        <Tabs defaultValue={tabs[0].value}>
          <div className="rounded-t-xl">
            <TabsList
              className="p-0 h-auto w-full"
              style={{ display: "grid", gridTemplateColumns: `repeat(${tabs.length}, 1fr)`, gap: "0.5rem" }}
            >
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={`${innerTabsTriggerClass} w-full`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="mt-0 border border-t-0 border-[#dde0e8] rounded-b-lg px-5 py-3"
            >
              <ul className="divide-y divide-gray-100">
                {tab.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 py-2.5">
                    <span
                      className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${tab.dotColor}`}
                    />
                    <span className="text-sm text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}