import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertTriangleIcon,
  BadgeCentIcon,
  BadgeCheckIcon,
  BadgePercentIcon,
  LaptopIcon,
  PartyPopperIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundX,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WorkLocationTrends from "./work-location-trends";

export default function EmployeeStats() {
  const totalEmployees = 100;
  const totalPresent = 80;
  const totalAbsent = totalEmployees - totalPresent;
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total employees</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UserIcon />
              <div className="text-5xl font-bold">{totalEmployees}</div>
            </div>
            <div>
              <Button size={"xs"} asChild>
                <Link href="/dashboard/employees">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">employees Present</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              {totalPresent > 75 ? <UserCheck2Icon /> : <UserRoundX />}
              <div className="text-5xl font-bold">{totalPresent}</div>
            </div>
          </CardContent>
          <CardFooter>
            {totalPresent > 75 ? (
              <span className="flex gap-1 items-center text-green-500 text-xs ">
                <BadgeCheckIcon />
                {totalPresent}% of employees are present
              </span>
            ) : (
              <span className="flex gap-1 items-center text-red-500 text-xs ">
                <AlertTriangleIcon />
                Only{totalPresent} of employees are present
              </span>
            )}
          </CardFooter>
        </Card>
        <Card className="border-primary flex flex-col ">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">employee of the month</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />

              <AvatarFallback>TS</AvatarFallback>
            </Avatar>
            <span className="text-2xl ">Colin Muarry!</span>
          </CardContent>
          <CardFooter className="flex gap-2 text-sm text-muted-foreground items-center mt-auto ">
            <PartyPopperIcon className="text-primary" />
            <span>Good job!</span>
          </CardFooter>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <LaptopIcon className="text-primary" />
            <span>employee work location trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
}
