 const getData = async()=>{
    const response = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
    console.log(response)
    return response.json()
}
export default getData