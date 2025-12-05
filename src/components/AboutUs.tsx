import React from 'react';
import { CheckCircle, Shield, Zap, Users } from 'lucide-react';

const AboutUsMinimal = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Effortless Solutions,
              <span className="block text-blue-600 mt-2">Every Time</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted partner for documentation and visa services in the UAE
            </p>
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Column - Main Text */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">Easyset</span> is a trusted 
                  and professional documentation and visa services provider operating in the 
                  United Arab Emirates. With extensive industry experience, we deliver 
                  end-to-end solutions tailored for individuals and businesses.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Our mission is to streamline the often complex procedures involved in 
                  business setup, visa processing, and attestation. We ensure our clients 
                  enjoy a smooth, hassle-free experience while we efficiently manage all 
                  necessary paperwork and formalities.
                </p>
              </div>
            </div>

            {/* Right Column - Key Points */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                What Sets Us Apart
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Proven Reliability</h4>
                    <p className="text-sm text-gray-600">Thousands of successful applications processed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                      <Zap className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Efficient Processing</h4>
                    <p className="text-sm text-gray-600">Minimize delays with our streamlined approach</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                      <Users className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Personalized Support</h4>
                    <p className="text-sm text-gray-600">Dedicated consultant for each client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMinimal;