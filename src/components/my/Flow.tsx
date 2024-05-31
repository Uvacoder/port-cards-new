import ReactFlow from "reactflow";

type CustomReactFlowType = React.ComponentProps<typeof ReactFlow> & {
  children: React.ReactNode;
};
export const CustomReactFlow: React.FC<CustomReactFlowType> = (
  props: CustomReactFlowType
) => {
  return <ReactFlow {...props}>{props.children}</ReactFlow>;
};
