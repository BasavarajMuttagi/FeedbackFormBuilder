import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type ActiveSelectionType = "FIELDS" | { id: string };

export const ActiveSelectionContext = createContext<
  [ActiveSelectionType, Dispatch<SetStateAction<ActiveSelectionType>>]
>(["FIELDS", () => {}]);

const ActiveSelectionContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeSelection, setActiveSelection] =
    useState<ActiveSelectionType>("FIELDS");

  return (
    <ActiveSelectionContext.Provider
      value={[activeSelection, setActiveSelection]}
    >
      {children}
    </ActiveSelectionContext.Provider>
  );
};

export default ActiveSelectionContextProvider;
