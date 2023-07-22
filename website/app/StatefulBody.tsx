"use client";

import { Provider } from "react-redux";
import store from "@/components/store/store";

export type StatefulBodyProps = {
  children: React.ReactNode;
};

export default function StatefulBody({ children }: StatefulBodyProps) {
  return <Provider store={store}>{children}</Provider>;
}
