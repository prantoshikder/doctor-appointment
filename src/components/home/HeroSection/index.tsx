import Header from "@/components/partials/Header";
import PrimaryButton from "@/components/shared/PrimaryButton";
import { Col, Row, Typography } from "antd";
import Image from "next/image";
import "./heroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <Header />

      <div className="container mx-auto px-5">
        <Row className="h-[600px]" gutter={[20, 20]}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={10}
            xl={10}
            xxl={10}
            className="flex flex-col justify-center items-start"
          >
            <div className="pr-24">
              <Typography.Title className="!font-bold !text-[40px] !text-[#203047]">
                Your New Smile <br /> Starts Here
              </Typography.Title>

              <p className="mb-5 text-[#6E6E6E] text-[16px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur, eius nostrum. Perferendis nulla, accusantium,
                quaerat laboriosam a rerum ad pariatur velit modi voluptatibus
                ex ipsam.
              </p>

              <PrimaryButton btnName="Get Appointment" />
            </div>
          </Col>

          <Col
            xs={24}
            sm={24}
            md={24}
            lg={14}
            xl={14}
            xxl={14}
            className="flex justify-end items-center"
          >
            <Image
              src="/assets/images/chair.png"
              alt="chair"
              width={700}
              height={500}
              className="w-full h-[450px]"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeroSection;
