import { Card, CardHeader, CardContent } from "@/components/ui/card";

import { SettingsForm } from "@/components/settings/settings-form";

const SettingsPage = () => {
  return (
    <Card className="w-[800px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Settings</p>
      </CardHeader>
      <CardContent>
        <SettingsForm />
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
