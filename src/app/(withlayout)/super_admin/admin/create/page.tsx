"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

const CreateAdminPage = () => {
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "admin",
            link: "/super_admin/admin",
          },
        ]}
      />
      <h1>Create Admin</h1>
    </div>
  );
};

export default CreateAdminPage;
