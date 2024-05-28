import Link from "next/link";
import { Button } from "./ui/button";
import { MoveUpRightIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface RepoCardProps {
  id: number;
  repoName: string;
  url: string;
  language?: string;
  stars?: number;
  homePage?: string;
  forked: boolean;
}

const RepoCard = ({ id, repoName, url, language, stars, homePage, forked }: RepoCardProps) => {

  return (
    <div key={id} className="no-scrollbar flex flex-col gap-1 bg-red-50 border border-gray-950 h-[170px] rounded-[10px] p-2">
      <div className="text-2xl text-center font-medium">
        {repoName}
      </div>
      <div className="flex justify-between text-[20px]">
        <p>HomePage Url - <span className="text-orange-800 text-[16px]">{homePage || "None"}</span></p>
        <p>Stars - <span className="text-orange-800 text-[16px]">{stars || "None"}</span></p>
      </div>
      <div className="flex justify-between text-[20px]">
        <p>Language - <span className="text-orange-800 text-[16px]">{language || "None"}</span></p>
        <p>Forked - <span className="text-orange-800 text-[16px]">{forked ? "true" : "false"}</span></p>
      </div>
      <div className="flex justify-between text-[20px]">
        <Link href={url} target="_blank">
          <Button className="bg-black text-white gap-2">Repo<MoveUpRightIcon size={20} /></Button>
        </Link>
        <div className="flex items-center space-x-2">
          <Label htmlFor="airplane-mode">Showcase</Label>
          <Switch id="airplane-mode" />
        </div>
      </div>
    </div>
  )
}

export default RepoCard
