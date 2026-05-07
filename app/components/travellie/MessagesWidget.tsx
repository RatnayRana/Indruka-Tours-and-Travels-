import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const messages = [
  {
    name: "Europia Hotel",
    avatar: "https://i.pravatar.cc/40?img=1",
    initials: "EH",
    time: "11:00 AM",
    preview: "We are pleased to announc...",
    unread: 1,
  },
  {
    name: "Global Travel Co",
    avatar: "https://i.pravatar.cc/40?img=5",
    initials: "GT",
    time: "2:30 PM",
    preview: "We have updated our com...",
    unread: 2,
  },
  {
    name: "Kalendra Umbara",
    avatar: "https://i.pravatar.cc/40?img=7",
    initials: "KU",
    time: "9:45 AM",
    preview: "Hi, I need assistance with c...",
    unread: 5,
  },
  {
    name: "Osman Farooq",
    avatar: "https://i.pravatar.cc/40?img=11",
    initials: "OF",
    time: "10:15 AM",
    preview: "Hello, I had an amazing tim...",
    unread: 2,
  },
  {
    name: "Mellinda Jenkins",
    avatar: "https://i.pravatar.cc/40?img=9",
    initials: "MJ",
    time: "1:20 PM",
    preview: "Can you provide more deta...",
    unread: 1,
  },
];

export function MessagesWidget() {
  return (
    <Card className="border border-gray-100 shadow-none rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-5">
        <CardTitle className="text-sm font-semibold text-gray-800">Messages</CardTitle>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </CardHeader>
      <CardContent className="px-3 pb-3">
        <div className="flex flex-col">
          {messages.map((msg, i) => (
            <button
              key={i}
              className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-left w-full"
            >
              <Avatar className="w-9 h-9 shrink-0">
                <AvatarImage src={msg.avatar} />
                <AvatarFallback className="text-xs bg-blue-100 text-blue-600 font-semibold">
                  {msg.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-800 truncate">{msg.name}</p>
                <p className="text-xs text-gray-400 truncate">{msg.preview}</p>
              </div>
              <div className="flex flex-col items-end gap-1 shrink-0">
                <span className="text-xs text-gray-400">{msg.time}</span>
                {msg.unread > 0 && (
                  <span className="w-4 h-4 bg-blue-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {msg.unread}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
