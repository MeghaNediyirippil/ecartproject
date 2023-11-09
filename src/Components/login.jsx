import React from 'react'

function login() {
    const [data, setData] = useState([])
    const baseUrl = 'https://api.denzo.io/api/cus/v1/login'
    const fetchData = async () => {
        const response = await fetch(baseUrl).then(res => res.json()).then(data => setData(data.products))
    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(data);
  return (
    <div>login</div>
  )
}

export default login