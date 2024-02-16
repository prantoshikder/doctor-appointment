import { Button } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { FC } from "react";

interface IPrimaryButton {
  btnName: string;
  onClick?: () => void;
  className?: string;
  size?: SizeType;
  htmlType?: "button" | "submit" | "reset" | undefined;
}

const PrimaryButton: FC<IPrimaryButton> = ({
  btnName,
  onClick,
  className,
  size,
  htmlType = "button",
}) => {
  return (
    <Button
      htmlType={htmlType}
      size={size ? size : "large"}
      shape="round"
      type="primary"
      className={`!bg-[#14d6c6] h-[46px] ${className} font-semibold text-[18px]`}
      onClick={onClick}
    >
      {btnName}
    </Button>
  );
};

export default PrimaryButton;
