export default function Profile({name,age,address}){
    return(
        <div style={
            {
                color:"red",
                backgroundColor: "black",
                padding: "30px",
                borderRadius:"10px",
                maxWidth: "400px",
                height:"300px",
                transform:"translate(-50%,-50%)"
                
            }
        }>
            <h1>Profile</h1>
            <p>Full Name: {name}</p>
            <p>Age:{age}</p>
            <p>Address: {address}</p>
        </div>
    )
}