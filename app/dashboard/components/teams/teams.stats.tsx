import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LaptopIcon,
  PieChart,
  StarIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TeamDistributionChart from "./team-distribution-char";
import SupportTicketsResolved from "./support-tickets-resolved";

const teamLeaders = [
  {
    firstName: "Colin",
    lastName: "Murray",
  },
  {
    firstName: "Tom",
    lastName: "Phillips",
  },
  {
    firstName: "Liam",
    lastName: "Fuentes",
  },
  {
    firstName: "Tina",
    lastName: "Fey",
  },
  {
    firstName: "Katie",
    lastName: "Johnson",
  },
  {
    firstName: "Tina",
    lastName: "Jones",
  },
  {
    firstName: "Amy",
    lastName: "Adams",
  },
  {
    firstName: "Ryan",
    lastName: "Lopez",
  },
  {
    firstName: "Jenny",
    lastName: "Jones",
  },
];

export default function TeamsStats() {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Teams</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UsersIcon />
              <div className="text-5xl font-bold">9</div>
            </div>
            <div>
              <Button size={"xs"} asChild>
                <Link href="/dashboard/teams">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center ">
              <span>Team leaders</span>
              <StarIcon className="text-yellow-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2 ">
            {teamLeaders.map((teamleader) => (
              <TooltipProvider
                key={`${teamleader.firstName}${teamleader.lastName}`}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      <AvatarImage
                        src={`https://ui-avatars.com/api/?name=${teamleader.firstName}+${teamleader.lastName}`}
                        alt={`${teamleader.firstName} ${teamleader.lastName}`}
                      />
                      <AvatarFallback>
                        {teamleader.firstName[0] + teamleader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {teamleader.firstName} {teamleader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>
        <Card className="flex flex-col ">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between items-center ">
              <span>Team distribution</span>
              <PieChart />
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-0">
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <LaptopIcon className="text-primary" />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <SupportTicketsResolved />
        </CardContent>
      </Card>
    </>
  );
}
