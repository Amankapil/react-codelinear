import image6 from "./images/Vector.svg";
import image7 from "./images/Vector-1.svg";
import image8 from "./images/Vector-2.svg";
import image9 from "./images/Vector-3.svg";

export default function whyus() {
  return (
    <section className="whyus">
      <div className="why-us-container">
        <h1 className="whyus-h1">Why Us?</h1>
        <p className="whyus-para">
          We are a diverse blend of experts, young professionals, and even
          mentees. And though we may come from diverse backgrounds, our drive to
          make a difference in society unites us.
          <p className="mt-5" style={{
            color: '#848484'
          }}>
            Our cohort comprises designers, developers, strategists, and
            marketers, and collectively we blend each of our expertise to
            innovate, to impact.
            <br />
            If this sounds like you, we have a role for you!
          </p>
        </p>
      </div>
      <div className="main-container">
        <div className="whyus-container">
          <div className="whyus-content-container">
            <span className="no">COLLECTIVE GROWTH</span>
            <p className="wucontainer-para">
              We ensure the collective growth and upliftment of our crew. We
              organise several workshops, provide access to numerous skill
              development courses, and foster an environment of mentorship
              within the firm.
            </p>
          </div>
          <img src={image6} alt="" className="card-imgs" loading="lazy" />
        </div>
        <div className="whyus-container">
          <div className="whyus-content-container">
            <span className="no">FLEXIBILITY</span>
            <p className="wucontainer-para">
              We strive to provide our team with the most flexible and
              autonomous work arrangement, enabling them to drive maximum
              productivity whilst maintaining work-life balance.{" "}
            </p>
          </div>
          <img src={image8} alt="" className="card-imgs" loading="lazy" />
        </div>
        <div className="whyus-container">
          <div className="whyus-content-container">
            <span className="no">VALUE-BASED PROJECTS</span>
            <p className="wucontainer-para">
              As a part of Codelinear, you will get the opportunity to hone your
              skills as well as disposition by working on a diverse range of
              projects that actually create a tangible impact for clients and
              society.
            </p>
          </div>
          <img src={image7} alt="" className="card-imgs" loading="lazy" />
        </div>
      </div>
      <div className="life-container max-xl:my-10">
        <h1 className="life-h1">Life At Codelinear</h1>
        <p className="life-para">
          We believe in actions over statements. When we say we are diverse, we
          are inclusive and we are here to give back to the community, we mean
          it! We have painstakingly built an environment of "Community" within
          us, in which we uplift and empower one another, and we take immense
          pride in it.
        </p>
      </div>
    </section>
  );
}
