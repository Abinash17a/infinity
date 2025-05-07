import PostFeed from "@/components/PostFeed";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-[#0f1419]m min-h-screen border-2 border-black max-w-[1400px] mx-auto flex">
    <Sidebar />
    <PostFeed/>
    <Widgets/>
    </div>
  );
}
