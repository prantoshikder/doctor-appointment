import { Col, Row } from "antd";
import Image from "next/image";

const MakeAppointment = () => {
  return (
    <section className="make-appointment mb-14 bg-[url('/assets/images/appointment.png')] bg-no-repeat bg-cover bg-center h-[400px] relative">
      <div className="container mx-auto px-5">
        <Row>
          <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
            <Image
              src="/assets/images/doctor.png"
              alt="doctor image"
              height={200}
              width={700}
              className="h-[500px] -translate-y-[130px]"
            />
          </Col>

          <Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16}>
            <div className="col-md-7 text-white py-5">
              <h5 className="text-primary text-uppercase ">Appointment</h5>
              <h1 className="my-4">
                Make an Appointment <br /> Today
              </h1>
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
