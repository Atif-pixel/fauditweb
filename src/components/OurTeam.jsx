export const OurTeam = () => {
    const teamMembers = [
        { src: 'src/assets/staff/adarsh_sir.png', name: 'Senchy Dark' },
        { src: 'src/assets/staff/adarsh_sir.png', name: 'Eleten Rampel' },
        { src: 'src/assets/staff/adarsh_sir.png', name: 'Andre Park' },
        { src: 'src/assets/staff/adarsh_sir.png', name: 'Jonathan Clark' },
        { src: 'src/assets/staff/adarsh_sir.png', name: 'Zenith Jark' },
        { src: 'src/assets/staff/adarsh_sir.png', name: 'Jason Compile' },
      ];
  
    return (
      <>
        {/* OUR TEAM MEMBER SECTION */}
        <section
          style={{
            padding: '100px 0',
            backgroundImage: 'url(./assets/images/team_member_background.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            textAlign: 'center',
          }}
        >
          <div className="container">
            <div className="row" data-aos="fade-up">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h2 style={{ marginBottom: '40px', color: '#000', fontSize: '48px', fontWeight: 'bold' }}>
                  Our Team Members
                </h2>
                <figure style={{ marginBottom: '60px', display: 'flex', justifyContent: 'center' }}>
                  <img
                    src="./assets/images/team_member_logo.png"
                    alt="Team Logo"
                    style={{ width: '300px', height: 'auto', borderRadius: '10px' }}
                  />
                </figure>
              </div>
            </div>
  
            {/* SINGLE CENTERED IMAGE AT THE TOP */}
            <div className="row" data-aos="fade-up" style={{ marginBottom: '60px' }}>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                  style={{
                    width: '60%',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '10px',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <img
                    src='src/assets/staff/adarsh_sir.png' // Replace with your image path
                    alt="Center Image"
                    style={{
                      width: '100%',
                      height: '400px', // Adjusted height
                      objectFit: 'cover',
                      borderRadius: '10px',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '20px',
                      textAlign: 'left',
                      color: '#fff',
                      background: 'rgba(0, 0, 0, 0.6)',
                      padding: '10px 20px',
                      borderRadius: '5px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Teko', sans-serif",
                        fontWeight: '400',
                        fontSize: '28px',
                        lineHeight: '28px',
                        display: 'block',
                      }}
                    >
                      Team Leader
                    </span>
                    <p
                      style={{
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '24px',
                        marginBottom: '0',
                      }}
                    >
                      Pro-Player
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* TEAM MEMBERS GRID */}
            <div className="row" data-aos="fade-up" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  style={{
                    width: '40%', // 2 images per row with some gap
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '10px',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    marginBottom: '30px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <img
                    src={member.src}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '420px', // Increased height by 40%
                      objectFit: 'cover',
                      borderRadius: '10px',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      left: '20px',
                      textAlign: 'left',
                      color: '#fff',
                      background: 'rgba(0, 0, 0, 0.6)',
                      padding: '10px 20px',
                      borderRadius: '5px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Teko', sans-serif",
                        fontWeight: '400',
                        fontSize: '28px',
                        lineHeight: '28px',
                        display: 'block',
                      }}
                    >
                      {member.name}
                    </span>
                    <p
                      style={{
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '24px',
                        marginBottom: '0',
                      }}
                    >
                      Pro-Player
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default OurTeam;