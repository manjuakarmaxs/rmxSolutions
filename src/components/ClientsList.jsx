import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientsList = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [file, setFile] = useState(null);
    const [fileId, setFileId] = useState(null); // Track the file ID for removal

    // Handle file selection
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // Handle file submission
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!selectedFile) {
            alert('Please select a file before uploading');
            return;
        }
    
        const formData = new FormData();
        formData.append('docs', selectedFile);
    
        try {
            await axios.post('http://localhost:3000/uploadFile', formData);
            setUploadStatus('File uploaded successfully');
            fetchRecentFile(); // Fetch the latest file after upload
            setSelectedFile(null);
        } catch (error) {
            setUploadStatus('File upload failed');
            console.error('Upload error:', error.response ? error.response.data : error);
        }
    };

    const fetchRecentFile = async () => {
        try {
            // Assuming you load the JSON file from an endpoint or have it in your app
            const response = await axios.get('http://localhost:3000/viewFile'); // Update endpoint as needed
    
            const fileData = response.data.docs; // Base64 data from JSON response
            const filename = "uploadedFile.pdf"; // Specify a filename
    
            setFile({
                url: `data:application/pdf;base64,${fileData}`, // Create data URL
                originalname: filename,
                mimetype: 'application/pdf'
            });
        } catch (error) {
            console.error('Error fetching recent file:', error.response ? error.response.data : error);
        }
    };
    
    // Render file preview with download or open in new tab option
    const renderFilePreview = () => {
        if (!file || !file.url) return null;
    
        const fileName = file.originalname || 'Downloaded File';
    
        return (
            <a
                href={file.url}
                target="_blank" // Open in new tab
                rel="noopener noreferrer"
                download={fileName}
                className="mt-4 text-blue-600 hover:underline"
            >
                View File 
            </a>
        );
    };
    
// Handle file removal
const handleRemoveFile = async () => {
  
    

    try {
        // Make DELETE request to server with file ID
        await axios.delete(`http://localhost:3000/deleteFile`);
        setUploadStatus('File deleted successfully');
        setFile(null); // Clear the file state
        fetchRecentFile(); // Fetch the latest file if available
    } catch (error) {
        console.error('Delete error:', error.response ? error.response.data : error);
        setUploadStatus('File deletion failed');
    }

    
};


  

    useEffect(() => {
        fetchRecentFile(); // Fetch recent file on component mount
    }, []);

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Upload Client List</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700">
                        Select File
                    </label>
                    <input
                        id="fileUpload"
                        type="file"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-500
                                   file:mr-4 file:py-2 file:px-4
                                   file:rounded file:border-0
                                   file:text-sm file:font-semibold
                                   file:bg-blue-100 file:text-blue-700
                                   hover:file:bg-blue-200"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg
                               hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                               transition duration-200"
                >
                    Upload
                </button>
            </form>
            {uploadStatus && (
                <p className="mt-4 text-center text-lg text-gray-600">{uploadStatus}</p>
            )}
            {file && (
                <div className="mt-6">
                    <h2 className="text-lg text-gray-900 font-semibold">Uploaded File:</h2>
                    <div className="mt-2">
                        {renderFilePreview()}
                        <button
                            onClick={handleRemoveFile} // Call the removal function directly
                            className="ml-4 py-1 px-2 bg-red-600 text-white rounded-lg
                                       hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500
                                       transition duration-200"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClientsList;
