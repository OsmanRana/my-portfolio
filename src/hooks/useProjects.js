import { useEffect, useState } from "react"

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/OsmanRana/my-portfolio/main/src/Data/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return [projects]
}
export default useProjects;