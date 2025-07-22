interface TitleProps {
  title: string;
  variant?: "dark" | "light";
}

export default function Title({ title, variant = "dark" }: TitleProps) {
  return (
    <div>
      <h2
        className={`text-6xl font-bold ${variant === "dark" ? "text-black" : "text-white"}`}
      >
        {title}
        <span className="text-text-accent text-6xl font-bold">{"."}</span>
      </h2>
    </div>
  );
}
