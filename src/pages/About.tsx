
import { Check, Target, Award, Users } from 'lucide-react';
import CTASection from '../components/CTASection';
import WhyChooseUs from '../components/WhyChooseUs';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-50"></div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-[#2474A8] font-viga">EASYSET</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Effortless Solutions, Every Time – Your trusted partner for documentation and visa services in the UAE
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Easyset is a trusted and professional documentation and visa services provider operating in the United Arab Emirates. With extensive industry experience, we deliver end-to-end solutions tailored for individuals and businesses navigating the UAE's regulatory and administrative requirements.
            </p>
            <p>
              Our mission is to streamline the often complex procedures involved in business setup, visa processing, attestation, and related government services. We ensure our clients enjoy a smooth, hassle-free experience while we efficiently manage all necessary paperwork and formalities—allowing them to focus on their goals with complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Vision & Mission</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative border-2 border-blue-100 rounded-xl p-8 hover:border-blue-300 transition-colors duration-300">
                  <div className="flex items-center mb-4">
                    <Target className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To be the most trusted and reliable documentation and visa services provider in the UAE, known for our professionalism, efficiency, and customer-centric approach.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative border-2 border-blue-100 rounded-xl p-8 hover:border-blue-300 transition-colors duration-300">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To deliver exceptional services that exceed client expectations through innovation, expertise, and unwavering commitment to quality and compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Check,
                title: 'Integrity',
                description: 'We maintain the highest ethical standards in all our dealings and interactions.'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for excellence in every service we provide to our valued clients.'
              },
              {
                icon: Users,
                title: 'Transparency',
                description: 'We believe in clear, honest communication and open dialogue with our clients.'
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                    <Icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <CTASection />
    </div>
  );
};

export default AboutPage;