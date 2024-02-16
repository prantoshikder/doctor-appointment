"use client";

import { PageNotFoundImg } from "@/assets";
import { Button, Typography } from "antd";
import { IoIosArrowRoundBack } from "react-icons/io";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <PageNotFoundImg />
      <Typography.Title className="!text-[38px] !font-bold !leading-10 mt-4">
        Page Not Found
      </Typography.Title>

      <p className="text-center mb-4">
        We&apos;are sorry, the page your requested could not be found <br />{" "}
        please go back to the homepage
      </p>

      <Button
        type="primary"
        shape="round"
        icon={<IoIosArrowRoundBack className="text-[24px]" />}
        className="flex justify-center items-center bg-[#4096ff]"
        href="/"
      >
        Go Back
      </Button>
    </div>
  );
};

export default PageNotFound;
