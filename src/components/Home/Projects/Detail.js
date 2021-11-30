import React from 'react';

const Detail = ({project, projectDetailId}) => {
    const projectIdNumber = parseInt(projectDetailId)
    
    return (
        <div>
            {
                project?.id === projectIdNumber && <p>{project.name}</p>
            }
            
        </div>
    );
};

export default Detail;