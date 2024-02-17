import Heading from "@/components/shared/Heading";
import { Col, Row } from "antd";
import Image from "next/image";

const MakeAppointment = () => {
  return (
    <section className="make-appointment mb-14 bg-[url('/assets/images/appointment.png')] bg-no-repeat bg-cover bg-center h-[400px] relative">
      <div className="container mx-auto px-5">
        <Row>
          <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
            <Image
              src="/assets/images/doctor-small.png"
              alt="doctor image"
              height={200}
              width={200}
              className="h-[500px] w-[500px] -translate-y-[100px]"
            />
          </Col>

          <Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16}>
            <div className=" py-5">
              <Heading
                title="Make an Appointment Today"
                subtitle="Appointment"
                className="justify-start items-start"
              />

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                magnam ad consequuntur assumenda saepe hic amet nemo ea facere
                a!
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default MakeAppointment;
