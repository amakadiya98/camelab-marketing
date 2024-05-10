import Header from '../component/header'
import '../globals.css'
import aboutStyles from '../styles/about.module.css'
import Container from 'react-bootstrap/Container';
import Image from "next/image";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Brands from '../component/brands';
import Footer from '../component/footer';
import AnimatedImgSection from '../component/animatedImgSection'

export default function About() {
  return (
    <>
      <Header />
      <div className={`${aboutStyles['about-us-section']}`}>
        {/* banner section  */}
        <div className={`${aboutStyles['about-banner-section']}`}>
          <Container>
            <Row>
              <Col lg={6} md={12} sm={12}>
                <div className={`${aboutStyles['about-image-section']}`}>
                  <Row>
                    <Col lg={12} md={12} sm={12} xs={12} >
                      <Image
                        src={require('../../assets/images/about/about8.png').default}
                        alt="about banner image"
                        className={`${aboutStyles['about-img']}`}
                      />
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                      <Image
                        src={require('../../assets/images/about/about9.png').default}
                        alt="about banner image"
                        className={`${aboutStyles['about-img']}`}
                      />
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} >
                      <Image
                        src={require('../../assets/images/about/about10.png').default}
                        alt="about banner image"
                        className={`${aboutStyles['about-img']}`}
                      />
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div className={`${aboutStyles['about-content-section']}`}>
                  <h3 className='main-heading'>
                    Welcome to Camelab.
                    Where <span className={`${aboutStyles['gradient-text']}`}>Creativity</span> Meets Innovation!
                  </h3>
                  <p className='secondary-text'>At Camelab, we're passionate about unlocking the boundless potential of creativity. Our platform is more than just a tool – it's a catalyst for innovation and self-expression. We believe that everyone has a story to tell, a vision to share, and with Camelab, we provide the canvas upon which these narratives can flourish.</p>
                  <p className='secondary-text'>Whether you're a seasoned professional or an aspiring artist, our platform is designed to inspire and enable you to bring your ideas to life in stunning detail.</p>
                  <p className='secondary-text'>But beyond providing tools, Camelab fosters a vibrant community where creators can connect, collaborate, and learn from one another.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* about work section  */}
        <div className={`${aboutStyles['about-work-section']}`}>
          <Container>
            <h3 className='main-heading text-center'>How we work at Camelab</h3>
            <div className={`${aboutStyles['work-card-section']}`}>
              <Row className="justify-content-center">
                <Col lg={4} md={6} sm={12} className='common-animated-card'>
                  <div className='card'>
                    <div className='card-image-div'>
                      <svg width="49" className='card-img' height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.2955 14C32.2955 18.7609 28.6284 22.5 24.25 22.5C19.8717 22.5 16.2046 18.7609 16.2046 14C16.2046 9.23906 19.8717 5.5 24.25 5.5C28.6284 5.5 32.2955 9.23906 32.2955 14Z" stroke="#8224E3" stroke-width="3" />
                        <path d="M20.8409 34C20.8409 38.7609 17.1738 42.5 12.7955 42.5C8.41707 42.5 4.75 38.7609 4.75 34C4.75 29.2391 8.41707 25.5 12.7955 25.5C17.1738 25.5 20.8409 29.2391 20.8409 34Z" stroke="#8224E3" stroke-width="3" />
                        <path d="M43.75 34C43.75 38.7609 40.0829 42.5 35.7045 42.5C31.3261 42.5 27.6591 38.7609 27.6591 34C27.6591 29.2391 31.3261 25.5 35.7045 25.5C40.0829 25.5 43.75 29.2391 43.75 34Z" stroke="#8224E3" stroke-width="3" />
                      </svg>
                      <div className='large-circle' style={{ bottom: '66%' }}></div>
                      <div className='small-circle' style={{ top: '16%' }}></div>
                    </div>
                    <div className='card-heading'>
                      <h6>Empowering Creativity</h6>
                    </div>
                    <div className='card-content'>
                      <p>At the core of our work philosophy is the belief that creativity should know no bounds.</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12} className='common-animated-card'>
                  <div className='card'>
                    <div className='card-image-div'>
                      <svg className='card-img' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_435_4125)">
                          <path d="M44.25 0H3.75C2.75544 0 1.80161 0.395088 1.09835 1.09835C0.395088 1.80161 0 2.75544 0 3.75L0 44.25C0 45.2446 0.395088 46.1984 1.09835 46.9016C1.80161 47.6049 2.75544 48 3.75 48H44.25C45.2446 48 46.1984 47.6049 46.9016 46.9016C47.6049 46.1984 48 45.2446 48 44.25V3.75C48 2.75544 47.6049 1.80161 46.9016 1.09835C46.1984 0.395088 45.2446 0 44.25 0ZM1.5 3.75C1.5 3.15326 1.73705 2.58097 2.15901 2.15901C2.58097 1.73705 3.15326 1.5 3.75 1.5H20.7068C22.1114 1.5 23.25 2.63864 23.25 4.04322V5.58861C23.25 6.45269 22.4183 7.08115 21.5642 7.21178C21.0027 7.29764 20.4637 7.49324 19.9779 7.78742C18.9967 8.38153 18.2917 9.34109 18.018 10.455C17.8825 11.0066 17.8569 11.5794 17.9428 12.1408C18.0286 12.7023 18.2242 13.2413 18.5184 13.7271C19.1125 14.7083 20.0721 15.4133 21.186 15.687C21.8508 15.8596 22.5485 15.8599 23.2134 15.6879C23.2158 15.6873 23.2183 15.687 23.2207 15.687C23.2369 15.687 23.25 15.7001 23.25 15.7163V19.4685C23.25 21.557 21.557 23.25 19.4685 23.25H14.55C14.4143 23.2501 14.2812 23.2869 14.1649 23.3567C14.0485 23.4264 13.9532 23.5264 13.8892 23.646C13.8252 23.7656 13.7948 23.9003 13.8012 24.0358C13.8077 24.1713 13.8508 24.3026 13.926 24.4155C14.044 24.596 14.1303 24.7954 14.181 25.005C14.1862 25.045 14.1942 25.0846 14.205 25.1235C14.3296 25.549 14.3379 26.0002 14.229 26.43C14.0704 27.1051 13.6693 27.6984 13.102 28.0972C12.5348 28.4961 11.8407 28.6726 11.1518 28.5934C10.4629 28.5142 9.82706 28.1847 9.36511 27.6675C8.90315 27.1503 8.64724 26.4815 8.646 25.788C8.644 25.5458 8.68045 25.3048 8.754 25.074C8.81866 24.825 8.91975 24.5869 9.054 24.3675C9.11816 24.2534 9.15132 24.1244 9.15018 23.9935C9.14904 23.8625 9.11364 23.7342 9.04751 23.6212C8.98137 23.5082 8.8868 23.4144 8.7732 23.3493C8.65961 23.2842 8.53094 23.25 8.4 23.25C4.58924 23.25 1.5 20.1608 1.5 16.35V3.75ZM23.622 38.9475C23.5088 39.0136 23.4148 39.1082 23.3496 39.2219C23.2843 39.3356 23.25 39.4644 23.25 39.5955C23.25 43.4087 20.1588 46.5 16.3455 46.5H3.75C3.15326 46.5 2.58097 46.2629 2.15901 45.841C1.73705 45.419 1.5 44.8467 1.5 44.25V27.2418C1.5 25.8656 2.61562 24.75 3.9918 24.75H6.24339C6.77019 24.75 7.14926 25.2612 7.1535 25.788C7.15311 26.3558 7.26459 26.918 7.48159 27.4427C7.69859 27.9673 8.01685 28.4441 8.41818 28.8457C8.8195 29.2473 9.29604 29.5659 9.82054 29.7833C10.345 30.0006 10.9072 30.1125 11.475 30.1125C11.8893 30.1123 12.3017 30.0553 12.7005 29.943C13.4352 29.7259 14.0996 29.3186 14.6264 28.7623C15.1532 28.206 15.5237 27.5205 15.7005 26.775C15.8587 26.1252 15.8525 25.4463 15.6825 24.7995C15.6778 24.7746 15.697 24.7515 15.7223 24.7515H19.8138C21.7115 24.7515 23.25 26.29 23.25 28.1877V33.444C23.2501 33.5797 23.2869 33.7128 23.3567 33.8291C23.4264 33.9455 23.5264 34.0408 23.646 34.1048C23.7656 34.1688 23.9003 34.1992 24.0358 34.1928C24.1713 34.1863 24.3026 34.1432 24.4155 34.068C24.5116 34.0065 24.6114 33.9512 24.7144 33.9026C24.8428 33.8421 24.9876 33.8285 25.1235 33.7875C25.5491 33.6638 25.9999 33.655 26.43 33.762C26.8896 33.8689 27.3152 34.0892 27.6679 34.4026C28.0207 34.716 28.2894 35.1127 28.4497 35.5566C28.61 36.0004 28.6567 36.4773 28.5856 36.9438C28.5144 37.4103 28.3278 37.8516 28.0425 38.2275C27.7177 38.6874 27.256 39.0329 26.7231 39.2147C26.1903 39.3965 25.6137 39.4054 25.0755 39.24C24.8261 39.1751 24.5876 39.0741 24.3675 38.94C24.2534 38.8761 24.1245 38.8432 23.9938 38.8446C23.863 38.8459 23.7348 38.8814 23.622 38.9475ZM46.5 44.25C46.5 44.8467 46.2629 45.419 45.841 45.841C45.419 46.2629 44.8467 46.5 44.25 46.5H27.2396C25.8646 46.5 24.75 45.3854 24.75 44.0104V41.7567C24.75 41.2302 25.2615 40.8515 25.788 40.8465C26.4569 40.8492 27.1171 40.6957 27.7161 40.398C28.3151 40.1003 28.8363 39.6668 29.238 39.132C29.674 38.5571 29.9594 37.8823 30.0682 37.169C30.1769 36.4557 30.1056 35.7266 29.8607 35.0479C29.6158 34.3692 29.205 33.7625 28.6659 33.283C28.1267 32.8035 27.4762 32.4665 26.7735 32.3025C26.1161 32.1402 25.4282 32.1487 24.7751 32.3273C24.7734 32.3278 24.7716 32.328 24.7698 32.328C24.7589 32.328 24.75 32.3191 24.75 32.3082V28.539C24.75 26.4464 26.4464 24.75 28.539 24.75H33.45C33.5848 24.7499 33.717 24.7136 33.8329 24.6447C33.9487 24.5759 34.0439 24.4771 34.1083 24.3588C34.1728 24.2404 34.2042 24.1069 34.1992 23.9722C34.1942 23.8376 34.153 23.7067 34.08 23.5935C33.9956 23.4588 33.9245 23.3164 33.8677 23.1683C33.8337 23.08 33.8208 22.9851 33.7935 22.8945C33.668 22.454 33.6623 21.988 33.777 21.5445C33.8886 21.0874 34.1125 20.6654 34.4284 20.3167C34.7442 19.9679 35.1421 19.7034 35.5859 19.5472C36.0297 19.391 36.5055 19.3479 36.9701 19.4219C37.4348 19.4959 37.8737 19.6846 38.247 19.971C38.7968 20.3856 39.1731 20.9896 39.3028 21.6658C39.4325 22.3421 39.3064 23.0424 38.949 23.631C38.8842 23.7451 38.8504 23.8742 38.8511 24.0055C38.8518 24.1367 38.8869 24.2655 38.953 24.3789C39.019 24.4923 39.1137 24.5864 39.2275 24.6518C39.3413 24.7172 39.4703 24.7516 39.6015 24.7515C43.4114 24.7515 46.5 27.8401 46.5 31.65V44.25ZM46.5 20.7315C46.5 22.1224 45.3724 23.25 43.9815 23.25H41.7625C41.2321 23.25 40.8475 22.7424 40.8465 22.212C40.8484 21.5477 40.6962 20.892 40.4018 20.2965C40.1075 19.701 39.679 19.1819 39.15 18.78C38.5792 18.3415 37.9081 18.0522 37.1974 17.9383C36.4866 17.8244 35.7587 17.8895 35.0795 18.1278C34.4003 18.3661 33.7912 18.77 33.3074 19.3029C32.8235 19.8358 32.4802 20.481 32.3085 21.18C32.1372 21.8444 32.1369 22.5412 32.3075 23.2057C32.3082 23.2082 32.3085 23.2108 32.3085 23.2134C32.3085 23.2303 32.2948 23.244 32.2779 23.244H28.5292C26.442 23.244 24.75 21.552 24.75 19.4648V14.5575C24.7501 14.423 24.7141 14.2908 24.6456 14.175C24.5771 14.0592 24.4788 13.9639 24.3608 13.8992C24.2429 13.8345 24.1097 13.8027 23.9752 13.8071C23.8407 13.8116 23.7099 13.8521 23.5965 13.9245C23.4616 14.0096 23.3187 14.0811 23.17 14.138C23.0805 14.1723 22.9847 14.1863 22.893 14.214C22.4525 14.3392 21.9867 14.3454 21.543 14.232C21.0858 14.1206 20.6636 13.8968 20.3147 13.5811C19.9658 13.2653 19.7011 12.8675 19.5447 12.4236C19.3883 11.9798 19.3451 11.5039 19.4191 11.0392C19.493 10.5744 19.6816 10.1354 19.968 9.762C20.3814 9.20976 20.9859 8.8316 21.6634 8.7015C22.3408 8.57139 23.0424 8.69869 23.631 9.0585C23.7447 9.12522 23.8742 9.16039 24.006 9.16039C24.1378 9.16039 24.2673 9.12522 24.381 9.0585C24.4952 8.99116 24.5896 8.89473 24.6544 8.77906C24.7192 8.66338 24.7522 8.53258 24.75 8.4C24.75 4.58924 27.8392 1.5 31.65 1.5H44.25C44.8467 1.5 45.419 1.73705 45.841 2.15901C46.2629 2.58097 46.5 3.15326 46.5 3.75V20.7315Z" fill="#8224E3" />
                        </g>
                      </svg>
                      <div className='large-circle' style={{ bottom: '66%' }}></div>
                      <div className='small-circle' style={{ top: '16%' }}></div>
                    </div>
                    <div className='card-heading'>
                      <h6>Collaborative Environment</h6>
                    </div>
                    <div className='card-content'>
                      <p>We foster a culture of collaboration where every voice is valued and respected.</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12} className='common-animated-card'>
                  <div className='card'>
                    <div className='card-image-div'>
                      <svg className='card-img' width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.25 19.5975C40.9779 19.5975 44 16.5755 44 12.8475C44 9.11961 40.9779 6.09753 37.25 6.09753C33.5221 6.09753 30.5 9.11961 30.5 12.8475C30.5 16.5755 33.5221 19.5975 37.25 19.5975Z" fill="white" />
                        <path d="M12.7955 24.0375C12.7955 25.17 13.7135 26.088 14.846 26.088C15.9785 26.088 16.8965 25.17 16.8965 24.0375C16.8965 22.905 15.9785 21.987 14.846 21.987C13.7135 21.987 12.7955 22.905 12.7955 24.0375ZM20.246 24.0375C20.246 25.17 21.164 26.088 22.2965 26.088C23.429 26.088 24.347 25.17 24.347 24.0375C24.347 22.905 23.429 21.987 22.2965 21.987C21.164 21.987 20.246 22.905 20.246 24.0375ZM29.747 26.088C30.8795 26.088 31.7975 25.17 31.7975 24.0375C31.7975 22.905 30.8795 21.987 29.747 21.987C28.6145 21.987 27.6965 22.905 27.6965 24.0375C27.6965 25.17 28.6145 26.088 29.747 26.088Z" fill="#8224E3" />
                        <path d="M39.605 24.045C38.8595 24.045 38.255 24.6495 38.255 25.395V32.625C38.255 34.569 36.674 36.15 34.73 36.15H27.38C27.0185 36.15 26.6735 36.2955 26.42 36.552L22.586 40.431C22.4225 40.596 22.169 40.5945 22.013 40.4385L18.188 36.5535C17.9345 36.2955 17.588 36.15 17.2265 36.15H9.87652C7.93252 36.15 6.35152 34.569 6.35152 32.625V15.4485C6.35152 13.5045 7.92653 11.9235 9.86153 11.9235H24.7265C25.472 11.9235 26.0765 11.319 26.0765 10.5735C26.0765 9.82801 25.472 9.22351 24.7265 9.22351H9.86002C6.43552 9.22351 3.65002 12.0165 3.65002 15.4485V32.625C3.65002 36.057 6.44302 38.85 9.87502 38.85H16.6595L20.096 42.339C20.684 42.9285 21.4655 43.251 22.295 43.251C23.1245 43.251 23.906 42.927 24.5 42.333L27.944 38.85H34.73C38.162 38.85 40.955 36.057 40.955 32.625V25.395C40.955 24.6495 40.3505 24.045 39.605 24.045ZM38.558 10.758L36.53 12.3915L36.158 11.9175C35.699 11.3295 34.85 11.229 34.2635 11.688C33.677 12.147 33.5735 12.996 34.034 13.5825L35.2505 15.1335C35.4725 15.417 35.801 15.6015 36.1595 15.642C36.2105 15.648 36.2615 15.651 36.3125 15.651C36.62 15.651 36.9185 15.5475 37.1585 15.3525L40.25 12.861C40.8305 12.393 40.922 11.544 40.454 10.9635C39.9875 10.383 39.137 10.2915 38.558 10.758Z" fill="#8224E3" />
                        <path d="M42.977 7.12052C39.821 3.96302 34.682 3.96152 31.5215 7.12052C28.364 10.278 28.364 15.417 31.5215 18.576C33.101 20.154 35.1755 20.9445 37.2485 20.9445C39.3215 20.9445 41.3975 20.1555 42.9755 18.576C46.136 15.417 46.136 10.2795 42.977 7.12052ZM41.069 16.6665C38.963 18.771 35.537 18.771 33.431 16.6665C31.3265 14.5605 31.3265 11.1345 33.431 9.03002C34.484 7.97702 35.867 7.45052 37.25 7.45052C38.633 7.45052 40.016 7.97702 41.069 9.02852C43.1735 11.1345 43.1735 14.562 41.069 16.6665Z" fill="#8224E3" />
                      </svg>
                      <div className='large-circle' style={{ bottom: '66%' }}></div>
                      <div className='small-circle' style={{ top: '16%' }}></div>
                    </div>
                    <div className='card-heading'>
                      <h6>User-Centric Approach</h6>
                    </div>
                    <div className='card-content'>
                      <p>Our work is guided by a deep understanding of our users' needs, preferences, and challenges.</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12} className='common-animated-card'>
                  <div className='card'>
                    <div className='card-image-div'>
                      <svg className='card-img' width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1262 28.0911H15.6678V39.2841H17.1262V28.0911Z" fill="#8224E3" />
                        <path d="M0.5 12.1407C0.5 18.8352 6.74412 24.2815 14.419 24.2815C22.0939 24.2815 28.3379 18.8352 28.3379 12.1407C28.3379 5.44628 22.0941 0 14.419 0C6.74397 0 0.5 5.44628 0.5 12.1407ZM14.419 1.27205C21.2898 1.27205 26.8796 6.14769 26.8796 12.1407C26.8796 18.1337 21.2898 23.0095 14.419 23.0095C7.54811 23.0095 1.95836 18.1337 1.95836 12.1407C1.95836 6.14769 7.54811 1.27205 14.419 1.27205Z" fill="#8224E3" />
                        <path d="M14.4191 21.6233C20.4134 21.6233 25.2901 17.3696 25.2901 12.1408C25.2901 6.91218 20.4134 2.65845 14.4191 2.65845C11.6823 2.65845 9.06731 3.5485 7.05565 5.16464L8.04369 6.10023C9.78526 4.70098 12.0494 3.93037 14.4191 3.93037C19.6092 3.93037 23.8317 7.61346 23.8317 12.1407C23.8317 16.6679 19.6092 20.3511 14.4191 20.3511C9.22875 20.3511 5.00621 16.6679 5.00621 12.1407C5.00621 10.5215 5.54581 8.95535 6.56651 7.61168L5.35082 6.90913C4.1713 8.46166 3.54785 10.2708 3.54785 12.1407C3.54771 17.3696 8.42461 21.6233 14.4191 21.6233ZM33.1641 26.8009H22.272V30.731H33.1641V26.8009ZM31.7057 29.459H23.7304V28.073H31.7057V29.459Z" fill="#8224E3" />
                        <path d="M41.3808 45.7063H32.4348V46.9783H41.3808V45.7063Z" fill="#8224E3" />
                        <path d="M48.5 42.8157H32.4348V44.0877H48.5V42.8157Z" fill="#8224E3" />
                        <path d="M48.5 34.1812H32.4348V35.4532H48.5V34.1812Z" fill="#8224E3" />
                        <path d="M48.5 37.0718H45.7676V38.3438H48.5V37.0718Z" fill="#8224E3" />
                        <path d="M43.858 37.0718H32.4348V38.3438H43.858V37.0718Z" fill="#8224E3" />
                        <path d="M48.5001 28.1299H39.2163V29.4019H48.5001V28.1299Z" fill="#8224E3" />
                        <path d="M37.1745 28.1299H34.8175V29.4019H37.1745V28.1299Z" fill="#8224E3" />
                        <path d="M27.2561 34.4315V33.1594H22.3949V39.3654H29.5097V36.6153H28.0513V38.0933H23.8533V34.4315H27.2561Z" fill="#8224E3" />
                        <path d="M26.2543 35.9526L25.1286 34.9708L24.0975 35.8702L26.2543 37.7516L31.5662 33.1183L30.5347 32.219L26.2543 35.9526Z" fill="#8224E3" />
                        <path d="M28.0513 46.7278H23.8533V43.066H27.2561V41.7939H22.3949V47.9999H29.5097V45.2498H28.0513V46.7278Z" fill="#8224E3" />
                        <path d="M26.2543 44.5869L25.1286 43.605L24.0975 44.5044L26.2543 46.3859L31.5662 41.7526L30.5347 40.8533L26.2543 44.5869Z" fill="#8224E3" />
                      </svg>
                      <div className='large-circle' style={{ bottom: '66%' }}></div>
                      <div className='small-circle' style={{ top: '16%' }}></div>
                    </div>
                    <div className='card-heading'>
                      <h6>Agile Methodology</h6>
                    </div>
                    <div className='card-content'>
                      <p>We embrace agile methodologies to drive efficiency, flexibility, and adaptability in our work.</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12} className='common-animated-card'>
                  <div className='card'>
                    <div className='card-image-div'>
                      <svg className='card-img' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_435_4168)">
                          <path d="M22.6484 10.9375H37.7734C38.3215 9.84087 38.9011 8.79774 39.5098 7.8125H22.6484C22.4205 7.8125 22.2019 7.97712 22.0407 8.27014C21.8796 8.56317 21.789 8.9606 21.789 9.375C21.789 9.7894 21.8796 10.1868 22.0407 10.4799C22.2019 10.7729 22.4205 10.9375 22.6484 10.9375ZM28.664 3.125H41.8945C41.9528 2.49335 42.0817 1.89013 42.2733 1.35264C42.4648 0.815141 42.715 0.354781 43.0083 0H28.664C28.4361 0 28.2175 0.164619 28.0564 0.457644C27.8952 0.75067 27.8047 1.1481 27.8047 1.5625C27.8047 1.9769 27.8952 2.37433 28.0564 2.66736C28.2175 2.96038 28.4361 3.125 28.664 3.125ZM47.8891 2.4375C47.8154 2.20021 47.7089 2.00211 47.58 1.86286C47.4512 1.72362 47.3046 1.64808 47.1548 1.64375L44.4477 1.5625C44.2206 1.5603 44.0019 1.71989 43.8387 2.0071C43.6754 2.29431 43.5805 2.68633 43.5742 3.09922C43.5715 3.44108 43.6308 3.77504 43.7429 4.04962C43.8549 4.3242 44.0135 4.52418 44.1942 4.61875C32.4204 17.4937 32.9377 39.5523 33.7481 48.6867C33.7807 49.0529 33.8839 49.3861 34.0392 49.6267C34.1945 49.8673 34.3918 49.9996 34.5959 50C34.6419 49.9998 34.6879 49.993 34.7334 49.9797C34.8448 49.947 34.9516 49.8748 35.0476 49.767C35.1437 49.6593 35.2271 49.5183 35.2932 49.3519C35.3593 49.1856 35.4067 48.9972 35.4327 48.7975C35.4587 48.5979 35.4629 48.3909 35.4449 48.1883C34.6964 39.7516 34.2143 19.4594 44.8942 7.51016C44.8894 7.85609 44.948 8.19509 45.0609 8.4737C45.1738 8.75232 45.3345 8.95472 45.5176 9.04899C45.7007 9.14326 45.8959 9.12405 46.0723 8.99438C46.2488 8.86471 46.3965 8.63196 46.4922 8.33281L47.8831 3.99219C47.9586 3.75654 47.9989 3.48905 48 3.2163C48.001 2.94355 47.9628 2.67505 47.8891 2.4375ZM16.6328 18.75H34.711C35.0267 17.7 35.3747 16.6583 35.7552 15.625H16.6328C16.4049 15.625 16.1863 15.7896 16.0251 16.0826C15.864 16.3757 15.7734 16.7731 15.7734 17.1875C15.7734 17.6019 15.864 17.9993 16.0251 18.2924C16.1863 18.5854 16.4049 18.75 16.6328 18.75ZM11.0469 23.4375C10.8189 23.4375 10.6004 23.6021 10.4392 23.8951C10.278 24.1882 10.1875 24.5856 10.1875 25C10.1875 25.4144 10.278 25.8118 10.4392 26.1049C10.6004 26.3979 10.8189 26.5625 11.0469 26.5625H32.8943C33.0713 25.526 33.2736 24.4844 33.501 23.4375H11.0469ZM4.17186 32.8125C4.17186 33.2269 4.26241 33.6243 4.42357 33.9174C4.58473 34.2104 4.80332 34.375 5.03124 34.375H31.9541C32.0298 33.3536 32.1254 32.312 32.2412 31.25H5.03124C4.80332 31.25 4.58473 31.4146 4.42357 31.7076C4.26241 32.0007 4.17186 32.3981 4.17186 32.8125ZM-0.984381 42.1875H31.6959C31.6895 41.1937 31.6959 40.1531 31.7225 39.0625H-0.984381C-1.2123 39.0625 -1.43089 39.2271 -1.59205 39.5201C-1.75321 39.8132 -1.84375 40.2106 -1.84375 40.625C-1.84375 41.0394 -1.75321 41.4368 -1.59205 41.7299C-1.43089 42.0229 -1.2123 42.1875 -0.984381 42.1875ZM31.8351 46.875H-6.14063C-6.36855 46.875 -6.58713 47.0396 -6.7483 47.3326C-6.90946 47.6257 -7 48.0231 -7 48.4375C-7 48.8519 -6.90946 49.2493 -6.7483 49.5424C-6.58713 49.8354 -6.36855 50 -6.14063 50H32.056C32.0547 49.9883 32.0521 49.9773 32.0513 49.9656C31.9615 48.9397 31.8897 47.909 31.8351 46.875Z" fill="#8224E3" />
                        </g>
                      </svg>
                      <div className='large-circle' style={{ bottom: '66%' }}></div>
                      <div className='small-circle' style={{ top: '16%' }}></div>
                    </div>
                    <div className='card-heading'>
                      <h6>Growth Mindset</h6>
                    </div>
                    <div className='card-content'>
                      <p>We cultivate a growth mindset within our team, encouraging learn, personal development, & skill enhancement.</p>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12} className='common-animated-card'>
                  <div className='card'>
                    <div className='card-image-div'>
                      <svg className='card-img' width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.2649 31.758C22.608 31.7791 21.9535 31.6705 21.3387 31.4386C20.7238 31.2066 20.1607 30.8559 19.6814 30.4063C18.7134 29.4984 18.1458 28.2431 18.1033 26.9166C18.0609 25.5901 18.5471 24.3011 19.4551 23.3332C20.363 22.3652 21.6183 21.7975 22.9448 21.7551C23.2101 21.7392 23.4708 21.8293 23.6697 22.0056C23.8685 22.182 23.9892 22.4301 24.0051 22.6954C24.021 22.9607 23.9309 23.2214 23.7545 23.4203C23.5782 23.6191 23.3301 23.7398 23.0648 23.7557C22.4903 23.7955 21.9394 23.9997 21.4778 24.344C21.0162 24.6883 20.6634 25.1582 20.4615 25.6975C20.2597 26.2368 20.2173 26.8228 20.3393 27.3856C20.4614 27.9484 20.7429 28.4642 21.1501 28.8714C21.5573 29.2786 22.073 29.56 22.6358 29.6821C23.1986 29.8042 23.7846 29.7617 24.3239 29.5599C24.8633 29.358 25.3331 29.0052 25.6774 28.5436C26.0217 28.082 26.226 27.5311 26.2657 26.9566C26.2862 26.6931 26.4082 26.4478 26.606 26.2724C26.8038 26.097 27.0619 26.0052 27.326 26.0164C27.4575 26.024 27.5861 26.0575 27.7046 26.115C27.823 26.1725 27.929 26.2528 28.0163 26.3513C28.1037 26.4498 28.1708 26.5646 28.2136 26.689C28.2565 26.8135 28.2744 26.9453 28.2663 27.0767C28.1849 28.3469 27.6222 29.5383 26.6929 30.4081C25.7636 31.2779 24.5377 31.7607 23.2649 31.758ZM15.2425 21.7551C15.0269 21.7498 14.8179 21.6801 14.6423 21.555C14.4301 21.3959 14.2898 21.1589 14.2522 20.8963C14.2147 20.6336 14.2831 20.3669 14.4423 20.1546C15.4703 18.7865 16.8027 17.6765 18.334 16.9126C19.8654 16.1487 21.5535 15.7518 23.2649 15.7533C25.0428 15.7504 26.7943 16.1832 28.3664 17.0137C28.5998 17.141 28.7731 17.3559 28.8482 17.611C28.9232 17.8662 28.8938 18.1406 28.7665 18.3741C28.6391 18.6076 28.4243 18.7809 28.1691 18.8559C27.914 18.9309 27.6395 18.9016 27.4061 18.7742C25.5108 17.7835 23.3238 17.5031 21.2399 17.9838C19.156 18.4644 17.3126 19.6743 16.0427 21.395C15.9445 21.5108 15.8217 21.6032 15.6833 21.6655C15.5449 21.7278 15.3943 21.7584 15.2425 21.7551Z" fill="#8224E3" />
                        <path d="M23.2649 37.7597C20.3483 37.7544 17.5526 36.5934 15.4903 34.5311C13.4279 32.4687 12.2669 29.6731 12.2617 26.7565C12.2645 26.0176 12.3382 25.2806 12.4817 24.5558C12.508 24.4244 12.5599 24.2995 12.6344 24.1882C12.709 24.0769 12.8047 23.9814 12.9162 23.9071C13.0276 23.8328 13.1526 23.7812 13.2841 23.7552C13.4155 23.7292 13.5507 23.7293 13.6821 23.7556C13.8134 23.7818 13.9383 23.8337 14.0496 23.9083C14.161 23.9828 14.2565 24.0785 14.3308 24.19C14.4051 24.3015 14.4567 24.4265 14.4827 24.5579C14.5087 24.6893 14.5086 24.8246 14.4823 24.9559C14.232 26.1886 14.2428 27.46 14.5139 28.6882C14.7851 29.9164 15.3106 31.0742 16.0566 32.0868C16.8026 33.0995 17.7525 33.9447 18.8451 34.5677C19.9377 35.1908 21.1487 35.5781 22.4002 35.7045C23.6516 35.8309 24.9156 35.6937 26.1107 35.3017C27.3059 34.9096 28.4056 34.2715 29.3391 33.4285C30.2725 32.5855 31.0189 31.5562 31.5302 30.407C32.0415 29.2578 32.3063 28.0142 32.3076 26.7565C32.3096 25.3136 31.9594 23.892 31.2873 22.6152C31.2242 22.4996 31.1845 22.3728 31.1705 22.2418C31.1565 22.1109 31.1684 21.9785 31.2056 21.8522C31.2427 21.7258 31.3044 21.6081 31.3871 21.5056C31.4697 21.4031 31.5718 21.3179 31.6874 21.2548C31.803 21.1918 31.9299 21.1521 32.0608 21.1381C32.1917 21.1241 32.3241 21.136 32.4505 21.1731C32.5768 21.2103 32.6945 21.272 32.797 21.3546C32.8995 21.4373 32.9847 21.5394 33.0478 21.655C33.8644 23.2305 34.2834 24.9819 34.2681 26.7565C34.2629 29.6731 33.1019 32.4687 31.0395 34.5311C28.9772 36.5934 26.1815 37.7544 23.2649 37.7597Z" fill="#8224E3" />
                        <path d="M23.265 43.7615C18.755 43.7615 14.4297 41.9699 11.2407 38.7809C8.0516 35.5918 6.26001 31.2665 6.26001 26.7565C6.26001 22.2465 8.0516 17.9212 11.2407 14.7322C14.4297 11.5431 18.755 9.75151 23.265 9.75151C25.1587 9.74819 27.0393 10.0661 28.8267 10.6918C28.9537 10.7337 29.071 10.8007 29.1716 10.8887C29.2723 10.9767 29.3543 11.0841 29.4128 11.2044C29.4713 11.3246 29.505 11.4554 29.5121 11.589C29.5191 11.7225 29.4993 11.8562 29.4538 11.9819C29.4083 12.1077 29.3381 12.2231 29.2472 12.3212C29.1564 12.4193 29.0468 12.4983 28.9249 12.5533C28.803 12.6084 28.6713 12.6384 28.5376 12.6417C28.4039 12.6449 28.2709 12.6214 28.1465 12.5723C26.5774 12.025 24.9268 11.7477 23.265 11.7521C20.2974 11.7521 17.3965 12.6321 14.929 14.2808C12.4615 15.9295 10.5384 18.2729 9.40274 21.0146C8.26709 23.7563 7.96996 26.7732 8.5489 29.6837C9.12785 32.5943 10.5569 35.2678 12.6553 37.3662C14.7537 39.4647 17.4272 40.8937 20.3378 41.4726C23.2484 42.0516 26.2653 41.7544 29.007 40.6188C31.7487 39.4831 34.092 37.56 35.7407 35.0925C37.3895 32.6251 38.2694 29.7241 38.2694 26.7565C38.2738 25.0947 37.9965 23.4442 37.4492 21.8751C37.4002 21.7506 37.3766 21.6176 37.3799 21.4839C37.3831 21.3502 37.4132 21.2186 37.4682 21.0967C37.5233 20.9748 37.6022 20.8652 37.7003 20.7743C37.7985 20.6835 37.9139 20.6132 38.0396 20.5677C38.1654 20.5222 38.299 20.5024 38.4326 20.5095C38.5661 20.5165 38.6969 20.5503 38.8172 20.6087C38.9375 20.6672 39.0448 20.7492 39.1328 20.8499C39.2209 20.9506 39.2878 21.0679 39.3298 21.1949C39.9554 22.9823 40.2733 24.8628 40.27 26.7565C40.2647 31.2649 38.4714 35.5871 35.2835 38.775C32.0956 41.9629 27.7734 43.7562 23.265 43.7615Z" fill="#8224E3" />
                        <path d="M23.2649 27.7569C23.1337 27.7585 23.0036 27.7326 22.883 27.6809C22.7624 27.6292 22.654 27.5529 22.5647 27.4568C22.469 27.367 22.3927 27.2585 22.3406 27.1381C22.2884 27.0176 22.2615 26.8878 22.2615 26.7566C22.2615 26.6253 22.2884 26.4955 22.3406 26.3751C22.3927 26.2546 22.469 26.1462 22.5647 26.0564L39.4096 9.21139C39.5016 9.11944 39.6107 9.0465 39.7309 8.99673C39.851 8.94697 39.9798 8.92136 40.1098 8.92136C40.2399 8.92136 40.3686 8.94697 40.4888 8.99673C40.6089 9.0465 40.7181 9.11944 40.81 9.21139C40.902 9.30334 40.9749 9.41251 41.0247 9.53265C41.0745 9.65279 41.1001 9.78156 41.1001 9.9116C41.1001 10.0416 41.0745 10.1704 41.0247 10.2905C40.9749 10.4107 40.902 10.5199 40.81 10.6118L23.9651 27.4568C23.8758 27.5529 23.7673 27.6292 23.6467 27.6809C23.5261 27.7326 23.3961 27.7585 23.2649 27.7569Z" fill="#8224E3" />
                        <path d="M37.4093 19.2743H37.1892L32.5878 18.214C32.405 18.1778 32.237 18.0882 32.1052 17.9564C31.9734 17.8246 31.8837 17.6566 31.8476 17.4738L30.7873 12.8724C30.7485 12.7096 30.752 12.5395 30.7975 12.3784C30.843 12.2173 30.9291 12.0705 31.0474 11.9521L36.709 6.29046C36.8332 6.16185 36.9902 6.06963 37.1629 6.02379C37.3357 5.97795 37.5178 5.98023 37.6893 6.03038C37.8617 6.07971 38.0176 6.17443 38.1408 6.30465C38.2639 6.43487 38.3499 6.5958 38.3895 6.7706L39.3098 10.7718L43.311 11.692C43.5763 11.7504 43.8075 11.9118 43.9539 12.1406C44.1002 12.3695 44.1496 12.6471 44.0912 12.9124C44.0329 13.1777 43.8715 13.4089 43.6426 13.5553C43.4138 13.7016 43.1362 13.751 42.8709 13.6926L38.2695 12.5323C38.0794 12.4885 37.9054 12.3921 37.7674 12.2541C37.6295 12.1162 37.5331 11.9422 37.4893 11.7521L36.8491 8.91123L32.8479 12.9124L33.6481 16.3534L37.0892 17.1537L39.6699 14.5929C39.8569 14.4096 40.1083 14.307 40.3701 14.307C40.632 14.307 40.8833 14.4096 41.0703 14.5929C41.1641 14.6859 41.2385 14.7965 41.2893 14.9184C41.3401 15.0403 41.3662 15.1711 41.3662 15.3031C41.3662 15.4352 41.3401 15.5659 41.2893 15.6878C41.2385 15.8097 41.1641 15.9203 41.0703 16.0133L38.1095 18.9742C38.0201 19.0703 37.9117 19.1466 37.7911 19.1983C37.6705 19.25 37.5404 19.2759 37.4093 19.2743Z" fill="#8224E3" />
                      </svg>
                      <div className='large-circle' style={{ bottom: '66%' }} ></div>
                      <div className='small-circle' style={{ top: '16%' }}></div>
                    </div>
                    <div className='card-heading'>
                      <h6>Results-Oriented</h6>
                    </div>
                    <div className='card-content'>
                      <p>We are results-oriented and driven by a passion for excellence.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        {/* about order section  */}
        <div className={`${aboutStyles['about-order-section']}`}>
          <AnimatedImgSection/>
        </div>
        {/* about client and project section  */}
        <div className={`${aboutStyles['about-client-section']}`}>
          <Container>
            <Row>
              <Col lg={6} md={12} sm={12}>
                <div className={`${aboutStyles['client-heading-section']}`}>
                  <h3 className='main-heading'>Clients & Projects</h3>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div className={`${aboutStyles['client-content-section']}`}>
                  <p className='secondary-text'>Embark on transformative journeys with Camelab, exploring how our innovative solutions empower clients and partners to realize their business aspirations</p>
                </div>
              </Col>
            </Row>
            <div className={`${aboutStyles['client-brand-section']}`}>
              <Brands />
            </div>
          </Container>
        </div>
      </div >
      <Footer />
    </>
  );
}
