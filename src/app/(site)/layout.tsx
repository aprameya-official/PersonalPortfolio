import LayoutMain from "@/components/layouts/layout-main";
import type { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <LayoutMain>{children}</LayoutMain>;
};

export default layout;
