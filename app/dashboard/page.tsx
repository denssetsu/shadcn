import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmployeeStats from "./components/Employees-stats";

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
      <TabsContent value="teams">Teams stats view</TabsContent>
    </Tabs>
  );
}
