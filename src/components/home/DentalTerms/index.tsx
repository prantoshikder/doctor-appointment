import PrimaryButton from "@/components/shared/PrimaryButton";
import { Col, Row, Typography } from "antd";
import Image from "next/image";

const DentalTerms = () => {
  return (
    <section className="container mx-auto px-5 mb-12">
      <Row gutter={[40, 20]}>
        <Col xs={24} sm={24} md={12} lg={9} xl={9} xxl={9}>
          <Image
            src="/assets/images/treatment.png"
            alt="Treatment"
            width={450}
            height={700}
            className="w-full"
          />
        </Col>

        <Col
          xs={24}
          sm={24}
          md={12}
          lg={15}
          xl={15}
          xxl={15}
          className="flex justify-start items-center"
        >
          <div>
            <Typography.Title
              level={2}
              className="!text-[#203047] !text-[42px] !font-bold !mb-10"
            >
              Exceptional Dental <br /> Care, on Your Terms
            </Typography.Title>

            <p className="text-[#6E6E6E] text-[16px] mb-10 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              placeat excepturi consectetur a deserunt minima rerum, ullam
              repellat illum in magnam iusto qui incidunt, tempore delectus
              harum eum soluta ut? Optio facilis porro quaerat quibusdam ratione
              vel unde labore dolorem ex rerum dolore quod enim, exercitationem
              repellat voluptatem, veritatis quia eius animi id atque nemo
              consequuntur similique. Quisquam itaque hic asperiores nemo, ut
              repellat quis temporibus esse accusantium suscipit nulla
              blanditiis eum commodi vel debitis odit impedit facere iusto
              eveniet. Laboriosam repellendus, error debitis qui ad corrupti
              necessitatibus. Eveniet perferendis tempore est. Facilis explicabo
              exercitationem obcaecati pariatur eligendi sequi non repudiandae
              numquam delectus suscipit magnam quia cupiditate neque, dolores
              eaque aspernatur eius reprehenderit minus dignissimos quis
              perspiciatis culpa adipisci. Consectetur facilis nobis provident
              voluptate dicta. Quo, soluta hic. Doloribus, doloremque suscipit
              tenetur sint, officia voluptatum non id placeat eaque sequi
              dolorum ipsa possimus mollitia similique hic earum? Impedit
              mollitia, repudiandae magnam quos eius ad illo magni laboriosam
              quia numquam eligendi recusandae delectus aliquam dolorem
              exercitationem in expedita perspiciatis debitis, sint perferendis
              necessitatibus incidunt laudantium ex? Autem totam dolores
              possimus maxime? Est dolorem minima, quam ratione iusto eligendi,
              mollitia ea doloremque sit cupiditate eius, quas in quae sequi
              optio repudiandae voluptas.
            </p>

            <PrimaryButton btnName="Learn More" className="w-[200px]" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default DentalTerms;
