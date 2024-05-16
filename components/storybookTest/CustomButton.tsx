import PropTypes from "prop-types";
interface Props {
  size?: string;
  label: string;
  variant?: string;
  backgroundColor?: string;
  color?: string;
}
export const CustomButton = ({
  size,
  label,
  variant,
  backgroundColor,
  color,
}: Props) => {
  const style = {
    backgroundColor,
    color,
  };
  return (
    <button
      className={`font-bold rounded-full cursor-pointer inline-block leading-none 
      ${size === "sm" ? `text-xs px-4 py-[10px]` : size === "md" ? `text-sm px-5 py-[11px]` : size === "lg" ? `text-xl px-6 py-3` : ``} 
      ${variant === "solid" ? `bg-black text-white` : variant === "outline" ? `bg-white border border-black` : ``}`}
      style={style}
    >
      {label}
    </button>
  );
};

CustomButton.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
};

CustomButton.defaultProps = {
  backgroundColor: undefined,
  color: undefined,
  size: "md",
  variant: "outline",
};
