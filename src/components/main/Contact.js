import React from "react";

const Contact = () => {
    return(
        <>
            <section id="contact">
                <h2 className="ir_so">컨택트</h2>
                <div className="container">
                    <div className="inner">
                        <div className="contact">
                            <div className="contact_title">
                                <h3 className="tit" 
                                    data-aos="fade-down"
                                    data-aos-duration="1000"
                                    data-aos-anchor-placement="top-center"
                                >contact me</h3>
                            </div>
                            <div className="contact_info">
                                <div className="contact_desc">
                                    <div className="desc_list_top">
                                        <p className="desc_list1"
                                            data-aos="fade-right"
                                            data-aos-duration="2000"
                                        >
                                            배움을 즐기고 소통을 할 수 있는
                                        </p>
                                        <p className="desc_list2"
                                            data-aos="fade-right"
                                            data-aos-duration="3000"
                                        >
                                            개발자가 될 수 있도록 항상 노력하겠습니다!
                                        </p>
                                    </div>
                                    <div className="desc_list_bottom">
                                        <p className="tel" data-aos="fade-right"
                                            data-aos-duration="2000">Tel: 010-5672-4735</p>
                                        <p className="email" data-aos="fade-right"
                                            data-aos-duration="3000">Email: dydgnscc6845@gmail.com</p>
                                    </div>
                                </div>
                                <div className="sub_profile">
                                    <div className="img_box">
                                        {/* <img src="../images/main-profile.png" alt="" /> */}
                                        <img src="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;