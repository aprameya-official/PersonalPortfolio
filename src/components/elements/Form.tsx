import { ReactNode, memo } from "react";

interface Props {
  children: ReactNode;
  [x: string]: any;
}
const Form = ({ children, ...attr }: Props) => {
  return <form {...attr}>{children}</form>;
};

export default memo(Form);
