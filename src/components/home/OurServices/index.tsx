import Heading from "@/components/shared/Heading";
import ourServices from "../../../temp/ourServices.json";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  const { ourServicesData } = ourServices;
  return (
    <section className="container mx-auto px-5 mb-14">
      <Heading title="Services we provide" subtitle="Our Services" />

      <div className="flex justify-center items-center">
        {ourServicesData?.length > 0 &&
          ourServicesData?.map((serviceInfo) => (
            <ServiceCard key={serviceInfo?.id} serviceInfo={serviceInfo} />
          ))}
      </div>
    </section>
  );
};

export default OurServices;
