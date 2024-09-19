import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
import videoSrc from '../images/video/video1.mp4'; // Adjust the path according to your file structure
import sarImg from '../images/clients/sar.jpg';
import ramkrushnImg from '../images/clients/ramkrushn.jpg';
import openImg from '../images/clients/open.jpg';
import sayajiImg from '../images/clients/sayaji.jpg';

const Home = () => {
  return (
    <div>
        <br/>
      {/* Header Section */}
      <header className="relative">
        <div className="container mx-auto relative">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <Link to="/login" className="bg-indigo-600 text-white py-2 px-4 rounded shadow-lg">
              Book Now
            </Link>
          </div>
          <div className="video w-full h-full overflow-hidden">
            <video className="w-full h-full object-cover" autoPlay loop muted>
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      </header>

      {/* Clients Section */}
      <section className="text-center py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Our Clients</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { img: sarImg, name: "Sarangi Pure Veg" },
              { img: ramkrushnImg, name: "Hotel Ramkrishn Executive" },
              { img: openImg, name: "Hotel Nikita" },
              { img: sayajiImg, name: "Sayaji" },
            ].map((client, index) => (
              <div key={index} className="w-60 border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <img src={client.img} alt={client.name} className="w-full h-40 object-cover" />
                <div className="p-4 text-center">
                  <p className="font-semibold">{client.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-10">
        <div className="container mx-auto">
          <h3 className="text-xl font-bold mb-6">News and Articles</h3>
          <div className="space-y-6">
            {[
              {
                title: "What are the benefits of eating healthy?",
                date: "July 29, 2022",
                source: "MedicalNewsToday",
                link: "https://www.medicalnewstoday.com/articles/322268",
                excerpt: "Healthy eating has many benefits, such as reducing the risk of heart disease, stroke, obesity, and type 2 diabetes. A person may also boost their mood and gain more energy by maintaining a balanced diet..."
              },
              {
                title: "Healthy food choices are happy food choices",
                date: "December 06, 2017",
                source: "Nature Benefits",
                link: "https://www.nature.com/articles/s41598-017-17262-9",
                excerpt: "Evidence from a real life sample using smartphone based assessments .."
              }
            ].map((blog, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold">{blog.source}</span>
                  <span className="text-sm text-gray-500">{blog.date}</span>
                </div>
                <a href={blog.link} className="text-blue-600 hover:underline">
                  <h4 className="text-lg font-semibold">{blog.title}</h4>
                  <p className="text-gray-700">{blog.excerpt}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {<Footer />}
    </div>
  );
};

export default Home;
