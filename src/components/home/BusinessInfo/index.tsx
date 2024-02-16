import businessInfo from "../../../temp/businessInfo.json";
import BusinessInfoCard from "./BusinessInfoCard";

const BusinessInfo = () => {
  const { businessInfoData } = businessInfo;

  return (
    <section className="flex items-center justify-center gap-0.5 -mt-10 mb-14 container mx-auto px-5">
      {businessInfoData?.length > 0 &&
        businessInfoData?.map((businessInfo) => (
          <BusinessInfoCard
            key={businessInfo?.id}
            businessInfo={businessInfo}
          />
        ))}
    </section>
  );
};

export default BusinessInfo;
