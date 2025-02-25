import React from "react"; 
import Link from'next/link'
function GetLink(props) {
return (
<>
<Link href={props.title}> {props.title}
</Link>
</>
);
}
export default GetLink;