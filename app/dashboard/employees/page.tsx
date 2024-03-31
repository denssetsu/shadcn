import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Skeleton } from "@/components/ui/skeleton";
import { setTimeout } from "timers/promises";
import { Employee, columns } from "./columns";

export default async function EmployeePage() {
  await setTimeout(3000);
  const employees: Employee[] = [
    {
      id: 1,
      firstName: "Colin",
      lastName: "Murray",
      teamName: "alpha",
      isTeamLeader: true,
    },
    {
      id: 2,
      firstName: "Tom",
      lastName: "Phillips",
      teamName: "delta",
      isTeamLeader: false,
    },
    {
      id: 3,
      firstName: "Liam",
      lastName: "Fuentes",
      teamName: "canary",
      isTeamLeader: false,
    },
    {
      id: 4,
      firstName: "Tina",
      lastName: "Fey",
      teamName: "alpha",
      isTeamLeader: true,
    },
    {
      id: 5,
      firstName: "Katie",
      lastName: "Johnson",
      teamName: "delta",
      isTeamLeader: false,
    },
    {
      id: 6,
      firstName: "Tina",
      lastName: "Jones",
      teamName: "alpha",
      isTeamLeader: true,
    },
    {
      id: 7,
      firstName: "Amy",
      lastName: "Adams",
      teamName: "canary",
      isTeamLeader: false,
    },
    {
      id: 8,
      firstName: "Ryan",
      lastName: "Lopez",
      teamName: "delta",
      isTeamLeader: false,
    },
    {
      id: 9,
      firstName: "Jenny",
      lastName: "Jones",
      teamName: "alpha",
      isTeamLeader: true,
    },
  ];
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Employees</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={employees} />
        </CardContent>
      </Card>
    </div>
  );
}
