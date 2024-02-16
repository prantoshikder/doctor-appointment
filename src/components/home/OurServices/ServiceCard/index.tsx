import { Card, Typography } from "antd";
import Image from "next/image";

const ServiceCard = ({ serviceInfo }: any) => {
  return (
    <Card className="!border-none w-1/3">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={serviceInfo?.icon}
          alt={serviceInfo?.title}
          width={40}
          height={40}
          className="w-[60px] mb-4"
        />

        <div className="services-info-content text-center">
          <Typography.Title
            level={2}
            className="!text-[20px] !font-semibold !mb-4"
          >
            {serviceInfo?.title}
          </Typography.Title>

          <p
            className="text-[#6E6E6E] text-[16px]"
            dangerouslySetInnerHTML={{ __html: serviceInfo?.subtitle }}
          />
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
