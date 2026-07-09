import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      {children}
    </div>
  );
}