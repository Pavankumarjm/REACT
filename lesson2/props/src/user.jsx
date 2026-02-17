import Card from "./Crad";


function User(props){
    return (
        <>
        <h1>User information</h1>
        <h2>{props.user_info.name}</h2>
        <Card course={props.user_info.course} username={props.user_info.username}/>
        </>
    );
}

export default User;