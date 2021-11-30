import React from 'react';
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
    const params = useParams();
    console.log(params)
    return (
        <div>
            <h2 style={{color: 'white'}}>Invoice: {params.projectDetailId}</h2>
        </div>
    );
};

export default ProjectDetails;