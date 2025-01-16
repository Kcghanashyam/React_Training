export default function PropsExample(props){
    console.log("props",props)
    return(
        <div>
            <h1>Props Example</h1>
            <b>Name: {props.name}</b>
            <p>Addres: {props.address}</p>
            <b>Age:{props.age}</b>
        </div>
    )
}