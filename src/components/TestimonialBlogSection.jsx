import React, { useState, useEffect } from "react";

const TestimonialBlogSection = () => {
  const [animatedItems, setAnimatedItems] = useState([]);

  const testimonials = [
    { 
      id: 1, 
      name: "John Doe", 
      role: "CEO, Tech Corp", 
      text: "This platform has revolutionized our financial operations. The efficiency gains are remarkable!",
      img: "https://via.placeholder.com/100"
    },
    { 
      id: 2, 
      name: "Jane Smith", 
      role: "Finance Director", 
      text: "Best investment we've made. Seamless integration and outstanding support.",
      img: "https://via.placeholder.com/100"
    }
  ];

  const blogs = [
    {
      id: 1,
      title: "Future of Digital Finance",
      content: "Exploring the latest trends in financial technology and their impact on global markets...",
      date: "March 15, 2024",
      img: "https://via.placeholder.com/300"
    },
    {
      id: 2,
      title: "AI in Financial Services",
      content: "How artificial intelligence is transforming risk assessment and portfolio management...",
      date: "April 2, 2024",
      img: "https://via.placeholder.com/300"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedItems([...testimonials.map(t => t.id), ...blogs.map(b => b.id)]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      {/* Testimonials Section */}
      <h2 style={styles.title}>Client Testimonials</h2>
      <div style={styles.grid}>
        {testimonials.map((item) => (
          <div 
            key={item.id}
            style={{
              ...styles.card,
              ...styles.testimonialCard,
              opacity: animatedItems.includes(item.id) ? 1 : 0,
              transform: `translateY(${animatedItems.includes(item.id) ? 0 : '20px'})`,
            }}
          >
            <div style={styles.testimonialHeader}>
              <img src={item.img} alt={item.name} style={styles.avatar} />
              <div>
                <h3 style={styles.name}>{item.name}</h3>
                <p style={styles.role}>{item.role}</p>
              </div>
            </div>
            <p style={styles.quote}>"{item.text}"</p>
          </div>
        ))}
      </div>

      {/* Blog Section */}
      <h2 style={{...styles.title, marginTop: '4rem'}}>Latest Insights</h2>
      <div style={styles.grid}>
        {blogs.map((item) => (
          <div 
            key={item.id}
            style={{
              ...styles.card,
              ...styles.blogCard,
              opacity: animatedItems.includes(item.id) ? 1 : 0,
              transform: `translateY(${animatedItems.includes(item.id) ? 0 : '20px'})`,
            }}
          >
            <img src={item.img} alt={item.title} style={styles.blogImage} />
            <div style={styles.blogContent}>
              <p style={styles.date}>{item.date}</p>
              <h3 style={styles.blogTitle}>{item.title}</h3>
              <p style={styles.blogText}>{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    padding: '4rem 2rem',
    backgroundColor: '#0A1023',
    minHeight: '100vh',
  },
  title: {
    color: '#fff',
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '3rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    filter: 'drop-shadow(0 0 10px teal)',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    borderRadius: '15px',
    padding: '2rem',
    transition: 'all 0.3s ease',
    animation: 'fadeIn 0.6s ease forwards',
  },
  testimonialCard: {
    width: '500px',
    backgroundColor: '#1C2A48',
    border: '2px solid teal',
    boxShadow: '0 8px 15px rgba(0,0,0,0.3)',
  },
  blogCard: {
    width: '500px',
    backgroundColor: '#0A1023',
    border: '2px solid #1C2A48',
    position: 'relative',
    overflow: 'hidden',
  },
  testimonialHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    marginRight: '1rem',
  },
  name: {
    color: '#fff',
    fontSize: '1.4rem',
    margin: 0,
  },
  role: {
    color: '#bbb',
    fontSize: '0.9rem',
    margin: 0,
  },
  quote: {
    color: '#ddd',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    margin: 0,
  },
  blogImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '1rem',
  },
  blogContent: {
    padding: '0 1rem',
  },
  date: {
    color: 'teal',
    fontSize: '0.9rem',
    margin: '0 0 0.5rem 0',
  },
  blogTitle: {
    color: '#fff',
    fontSize: '1.4rem',
    margin: '0 0 1rem 0',
  },
  blogText: {
    color: '#bbb',
    fontSize: '1rem',
    lineHeight: '1.6',
  },
  '@media (max-width: 768px)': {
    container: {
      padding: '2rem 1rem',
    },
    title: {
      fontSize: '2rem',
    },
    testimonialCard: {
      width: '100%',
      maxWidth: '400px',
    },
    blogCard: {
      width: '100%',
      maxWidth: '400px',
    },
    avatar: {
      width: '50px',
      height: '50px',
    },
    name: {
      fontSize: '1.2rem',
    },
    blogTitle: {
      fontSize: '1.2rem',
    },
  },
};

export default TestimonialBlogSection;