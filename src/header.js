import {memo} from "react"


function Header(){
    console.log("HEader");
    return(
        <>
            <h1>Header</h1>
        </>
    );
}
export default memo(Header);