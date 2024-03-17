import React from "react";
import './static/css/linkandcontribution.css';
import background from './static/linkandcontribution.jpg';
// const LinkAndContribution = () => {
//     const handleDropdownClick = () => {
//         const dropdown = document.getElementById("myDropdown");
//         dropdown.classList.toggle("show");
//     };

//     const handleWindowClick = (event) => {
//         if (!event.target.matches('.dropbtn')) {
//             const dropdowns = document.getElementsByClassName("dropdown-content");
//             for (let i = 0; i < dropdowns.length; i++) {
//                 const openDropdown = dropdowns[i];
//                 if (openDropdown.classList.contains('show')) {
//                     openDropdown.classList.remove('show');
//                 }
//             }
//         }
//     };

//     React.useEffect(() => {
//         window.addEventListener('click', handleWindowClick);

//         return () => {
//             window.removeEventListener('click', handleWindowClick);
//         };
//     }, []);
// class linkandcontribution extends React.Component{
//     render() {
//         return(
//             <main>
//                 <body style="background-image: url('static/linkandcontribution.jpg')">

//         <div class="bigdiv">
//         <div class="dp">
//             <h2>Select the video export format</h2>
//             <div class="dropdown">
//                 <button onclick="myFunction()" class="dropbtn" style="margin-left: 100px; margin-top:10px">Format</button>
//                 <div id="myDropdown" class="dropdown-content">
//                     <a href="#">MP4</a>
//                     <a href="#">AVI</a>
//                     <a href="#">MOV</a>
//                 </div>
//             </div>
//             </div>
//         <div class="container">
//             <button class="btn"><i class="fa fa-download"></i> Download</button>
//         </div>
//         <div class="link">
//             <a href="#"><h2>Link for the video</h2></a>
//         </div>
//         </div>
//         </body>
//                     </main>
//                 )
//             }
// }
// }
// export default linkandcontribution;

const LinkAndContribution = () => {
    const handleDropdownClick = () => {
        const dropdown = document.getElementById("myDropdown");
        dropdown.classList.toggle("show");
    };

    const handleWindowClick = (event) => {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };

    React.useEffect(() => {
        window.addEventListener('click', handleWindowClick);

        return () => {
            window.removeEventListener('click', handleWindowClick);
        };
    }, []);

    return (
        <body style={{backgroundImage: `url(${background})`, TransformOrigin:[-20,0,0]}}>
        <div class="bigdiv">
            <div class="dp">
                <h2>Select the video export format</h2>
                <div class="dropdown">
                    <button onClick={handleDropdownClick} className="dropbtn" style={{ marginLeft: "100px", marginTop: "10px" }}>Format</button>
                    <div id="myDropdown" className="dropdown-content">
                        <a href="#">MP4</a>
                        <a href="#">AVI</a>
                        <a href="#">MOV</a>
                    </div>
                </div>
            </div>
            <div class="container">
                <button class="btn"><i class="fa fa-download"></i> Download</button>
            </div>
            <div class="link">
                <a href="#"><h2>Link for the video</h2></a>
            </div>
        </div>
        </body>
    );
};

export default LinkAndContribution;
