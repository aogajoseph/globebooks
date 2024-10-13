import React from 'react';
import { FaFilePdf, FaHeadphones, FaVideo, FaDownload } from 'react-icons/fa';
import '../css/Downloads.css';

const Downloads = ({ downloads }) => {
    return (
        <div className="download-container">
            <h2 className="download-title">My Downloads</h2>
            <div className="download-list">
                {'downloads.length' > 0 ? (
                    downloads.map((download, index) => (
                        <div className="download-item" key={index}>
                            <div className="download-info">
                                <h3 className="download-name">{download.name}</h3>
                                <p className="download-description">{download.description}</p>
                            </div>
                            <div className="download-links">
                                {download.type === 'pdf' && (
                                    <a href={download.link} download className="download-btn">
                                        <FaFilePdf className="download-icon" /> Download PDF
                                    </a>
                                )}
                                {download.type === 'audio' && (
                                    <a href={download.link} download className="download-btn">
                                        <FaHeadphones className="download-icon" /> Download Audiobook
                                    </a>
                                )}
                                {download.type === 'video' && (
                                    <a href={download.link} target="_blank" rel="noopener noreferrer" className="download-btn">
                                        <FaVideo className="download-icon" /> Watch Video
                                    </a>
                                )}
                                <a href={download.link} download className="download-btn">
                                    <FaDownload className="download-icon" /> Download
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-downloads">Looks like you don't have any downloads yet. Start exploring our library to download your favorites!</p>
                )}
            </div>
        </div>
    );
};

export default Downloads;