import React, { useState } from "react";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import Layout from "@theme/Layout";
import BackToTopButton from "@theme/BackToTopButton";
import DocPageLayoutSidebar from "@theme/DocPage/Layout/Sidebar";
import DocPageLayoutMain from "@theme/DocPage/Layout/Main";

import RadialGradient from "../../../components/RadialGradient";

export default function DocPageLayout({ children }) {
  const sidebar = useDocsSidebar();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  return (
    <Layout wrapperClassName="flex">
      <RadialGradient />
      <BackToTopButton />
      <div className="relative w-full flex px-0 md:px-6">
        {sidebar && (
          <DocPageLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
        <DocPageLayoutMain hiddenSidebarContainer={hiddenSidebarContainer}>{children}</DocPageLayoutMain>
      </div>
    </Layout>
  );
}
