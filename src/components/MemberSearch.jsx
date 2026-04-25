import React from 'react';
import { HiSearch, HiChevronDown } from 'react-icons/hi';

const MemberSearch = () => {
  return (
    <section id="directory" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#F3F4F6] rounded-xl p-8 md:p-12 lg:p-16 shadow-sm">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3976] mb-4">Member Directory</h2>
            <p className="text-gray-500 text-lg">Find skilled artisans and technicians in our verified network</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search Input */}
              <div className="md:col-span-3 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <HiSearch className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by name or specialty...."
                  className="block w-full pl-12 pr-4 py-5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-1/20 focus:border-secondary-1 transition-all text-lg"
                />
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <select
                  className="block w-full px-6 py-5 bg-white border border-gray-200 rounded-xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-secondary-1/20 focus:border-secondary-1 transition-all text-lg font-medium cursor-pointer"
                >
                  <option>All Trades</option>
                  <option>Electrician</option>
                  <option>Plumber</option>
                  <option>Carpenter</option>
                  <option>Mechanic</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <HiChevronDown className="h-6 w-6 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <button 
              className="w-full bg-[#1A8628] hover:bg-[#156d20] text-white font-bold py-6 rounded-xl text-2xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberSearch;
