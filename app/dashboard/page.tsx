import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmployeeStats from "./components/employees/Employees-stats";
import TeamsStats from "./components/teams/teams.stats";

export default function DashboardPage() {
  return (
    <Tabs defaultValue="employees">
      <TabsList className="mb-4">
        <TabsTrigger value="teams">Teams stats</TabsTrigger>
        <TabsTrigger value="employees">Employees stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <EmployeeStats />
      </TabsContent>
      <TabsContent value="teams">
        <TeamsStats />
      </TabsContent>
    </Tabs>
  );
}
