import { Card, Typography } from "antd";
import Image from "next/image";

const BusinessInfoCard = ({ businessInfo }: any) => {
  return (
    <Card className="w-1/4 bg-[#14d6c6] hover:bg-[#15c1bc] h-[130px] !rounded !border-none flex items-center px-5 transition-all">
      <div className="flex items-center gap-8">
        <Image
          src={businessInfo?.icon}
          alt={businessInfo?.title}
          width={40}
          height={40}
          className="w-[50px]"
        />

        <div className="business-info-content">
          <Typography.Title
            level={2}
            className="!text-[#fff] !text-[20px] !font-semibold !mb-1"
          >
            {businessInfo?.title}
          </Typography.Title>
          <p className="text-[#fff]">{businessInfo?.subtitle}</p>
        </div>
      </div>
    </Card>
  );
};

export default BusinessInfoCard;
