import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios"

const Form = ({ onSubmit, onCancel }) => {
  const [isAdvancedConfigOpen, setIsAdvancedConfigOpen] = useState(false);
  const [organizationName, setOrganizationName] = useState('');
  const [orderingNodes, setOrderingNodes] = useState('');
  const [channelName, setChannelName] = useState('');
  const [domain, setDomain] = useState('');
  const [maxMessageCount, setMaxMessageCount] = useState('');
  const [absoluteMaxBytes, setAbsoluteMaxBytes] = useState('');
  const [preferredMaxBytes, setPreferredMaxBytes] = useState('');

  const handleSubmit = async () => {
    try {
      // API call using Axios
      const response = await axios.post('http://localhost:3015/api/formdata', {
        organizationName,
        orderingNodes,
        channelName,
        domain,
        maxMessageCount,
        absoluteMaxBytes,
        preferredMaxBytes,
      });
      if (!organizationName || !orderingNodes || !domain || !preferredMaxBytes ) {
        alert('Please fill the required fields.');
        return;
      }

      onSubmit(response.data);
      console.log(response.data)

      setOrganizationName('');
      setOrderingNodes('');
      setChannelName('');
      setDomain('');
      setMaxMessageCount('');
      setAbsoluteMaxBytes('');
      setPreferredMaxBytes('');
    } catch (error) {
      
      console.error('Error submitting form:', error);
    }
    // alert("Form submitted Successfully")
  };

  const handleCancel = () => {
    onCancel();
  };

  const toggleAdvancedConfig = () => {
    setIsAdvancedConfigOpen(!isAdvancedConfigOpen);
  };

  return (
    <div className="container mx-auto my-8 ">
      <h1 className="text-2xl font-bold mb-4">Create Ordering Service</h1>

      {/* Organization Name */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizationName">
          Organization Name<span className="text-red-500">*</span>
        </label>
        <input
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="organizationName"
          type="text"
          placeholder="Enter organization name"
          required
        />
      </div>

      {/* No. of Ordering Nodes */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="orderingNodes">
          No. of Ordering Nodes<span className="text-red-500">*</span>
        </label>
        <input
          value={orderingNodes}
          onChange={(e) => setOrderingNodes(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="orderingNodes"
          type="number"
          placeholder="Enter number of ordering nodes"
          required
        />
      </div>

      {/* Channel Name (Optional) */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="channelName">
          Channel Name (Optional)
        </label>
        <input
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="channelName"
          type="text"
          placeholder="Enter channel name (optional)"
        />
      </div>

      {/* Domain */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="domain">
          Domain<span className="text-red-500">*</span>
        </label>
        <input
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="domain"
          type="text"
          placeholder="Enter domain"
          required
        />
      </div>

      {/* Advanced Configurations Fields */}
      <div className="flex items-center justify-between mb-4 overflow-y-auto">
        <h2 className="text-2xl font-bold">Advanced Configurations</h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none"
          onClick={toggleAdvancedConfig}
        >
          {isAdvancedConfigOpen ? 'Hide' : 'Show'} Advanced Config
        </button>
      </div>

      {isAdvancedConfigOpen && (
        <div>
          {/* Max Message Count */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maxMessageCount">
              Max Message Count<span className="text-red-500">*</span>
            </label>
            <input
              value={maxMessageCount}
              onChange={(e) => setMaxMessageCount(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="maxMessageCount"
              type="number"
              placeholder="Enter Max Message Count"
              required
            />
          </div>
          {/* Absolute Max Bytes */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="absoluteMaxBytes"
            >
              Absolute Max Bytes
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="absoluteMaxBytes"
              type="number"
              placeholder="Enter Absolute Max Bytes"
              
            />
          </div>
          {/* Preferred Max Bytes */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preferredMaxBytes">
              Preferred Max Bytes<span className="text-red-500">*</span>
            </label>
            <input
              value={preferredMaxBytes}
              onChange={(e) => setPreferredMaxBytes(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="preferredMaxBytes"
              type="number"
              placeholder="Enter Preferred Max Bytes"
              required
            />
          </div>
        </div>
      )}

      {/* Cancel and Submit Buttons */}
      <div className="flex justify-end">
        <button
          
          className="mr-4 px-4 py-2 text-gray-700 border rounded focus:outline-none"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          type='submit'
          className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Form;
