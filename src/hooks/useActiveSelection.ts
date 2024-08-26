import { useContext } from "react";
import { ActiveSelectionContext } from "../contexts/ActiveSelectionContextProvider";

export const useActiveSelection = () => useContext(ActiveSelectionContext);
