import { Typography } from "antd";
import { FC } from "react";

interface IHeading {
  title: string;
  subtitle: string;
  className?: string;
}

const Heading: FC<IHeading> = ({ title, subtitle, className }) => {
  return (
    <div
      className={`flex flex-col ${
        className ? className : "justify-center items-center"
      }   heading-content mb-12`}
    >
      <Typography.Title
        level={4}
        className="uppercase !mb-1 !text-[#14d6c6] !text-[18px]"
      >
        {subtitle}
      </Typography.Title>
      <Typography.Title
        level={2}
        className="capitalize !mt-0 !mb-2 !text-[#203047] !text-[32px] !font-bold"
      >
        {title}
      </Typography.Title>
    </div>
  );
};

export default Heading;
