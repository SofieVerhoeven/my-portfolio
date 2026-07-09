type Props = {
  text: string;
};

export default function Badge({ text }: Props) {
  return (
    <span className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400">
      {text}
    </span>
  );
}