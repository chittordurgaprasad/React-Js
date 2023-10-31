import React, { useState } from 'react';
import './App.css';
import { FiEdit} from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { VscCheck } from "react-icons/vsc";
import { MdDeleteSweep } from "react-icons/md"
import { TbEdit } from "react-icons/tb"
import {RiProfileFill} from "react-icons/ri"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // function App() {
    const [name, setName] = useState('Your Name');
    const [isEditing, setIsEditing] = useState(false);
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleSaveClick = () => {
      setIsEditing(false);
    };
  
    const handleChange = (e) => {
      setName(e.target.value);
    };


  return (
    <div>
      <div className="sidebar hidden1">
        <ul className="sidebar-menu">
          <li>
            <div class="relative flex h[90px] w-[90px] items-center justify-center rounded-full group-hover:bg-gray-50"><svg viewBox="0 0 67 87" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[38px]"><path d="M54.7641 29.9408C54.4229 29.9408 54.4229 29.9408 54.7641 29.9408L30.1993 43.929C30.1993 43.929 30.1993 43.929 29.8582 43.929L28.4935 41.882C28.4935 41.882 28.4935 41.882 28.4935 41.5408L61.2464 22.7761C62.2699 22.0937 62.6111 20.729 61.9288 20.0467L50.6699 0.599609H50.3288L6.99935 25.5055C0.85817 29.2584 -1.53007 37.1055 2.22288 43.5879L25.0817 83.1643V82.8232C23.3758 79.7526 24.7405 75.9996 27.4699 74.2937L42.1405 65.7643C53.0582 59.282 55.4464 58.2584 65.3405 52.4584C66.3641 51.7761 66.7052 50.4114 66.0229 49.729C63.6346 45.2937 57.8346 35.3996 54.7641 29.9408Z" fill="url(#paint0_linear_501_16469)"></path><path d="M27.4996 74.2775C24.429 75.9833 23.276 79.9883 24.9819 83.0589C26.6877 86.1295 30.4407 87.153 33.5113 85.4472L47.8047 77.2189C47.8047 77.2189 47.9531 77.1017 47.8407 76.9178L41.7979 65.9272L27.4996 74.2775Z" fill="url(#paint1_linear_501_16469)"></path><defs><linearGradient id="paint0_linear_501_16469" x1="10.245" y1="57.4048" x2="65.3081" y2="25.5939" gradientUnits="userSpaceOnUse"><stop stop-color="#F857A6"></stop><stop offset="1" stop-color="#FF5858"></stop></linearGradient><linearGradient id="paint1_linear_501_16469" x1="18.3761" y1="72.1751" x2="54.5398" y2="80.7939" gradientUnits="userSpaceOnUse"><stop stop-color="#4E037A"></stop><stop offset="0.3515" stop-color="#2B0B3C"></stop><stop offset="1" stop-color="#9400D3"></stop></linearGradient></defs></svg></div>
          </li>
          <li>
            <span class="content"><span class="sc-eFegNN cVozNq">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"><g clip-path="url(#clip0_487_148060.2344759076118118)"><path fill="url(#paint0_linear_487_148060.2344759076118118)" fill-rule="evenodd" d="M26.92 10.246l-6.752-7.034A.688.688 0 0019.67 3H10.8A5.782 5.782 0 005 8.66v14.285a5.79 5.79 0 005.8 5.903h10.652a5.87 5.87 0 005.66-5.903V10.723a.69.69 0 00-.191-.477zm-2.14-.135c-.673.104-1.353.166-2.035.185a2.747 2.747 0 01-2.736-2.744V5.06l4.772 5.052zm-3.328 17.36H10.8a4.413 4.413 0 01-4.423-4.526V8.66A4.405 4.405 0 0110.8 4.378h7.849c-.001.01-.005.02-.008.029-.004.01-.008.022-.008.033v3.112a4.127 4.127 0 004.11 4.122h.02c.76-.017 1.519-.086 2.27-.207.235-.033.485-.065.702-.088v11.566a4.495 4.495 0 01-4.283 4.526zm-2.384-7.41h-7.196a.689.689 0 000 1.378h7.197a.689.689 0 100-1.378zm-2.722-5.225H11.87a.69.69 0 110-1.378h4.475a.69.69 0 110 1.378z" clip-rule="evenodd"></path></g><defs><linearGradient id="paint0_linear_487_148060.2344759076118118" x1="4.998" x2="27.113" y1="15.924" y2="15.924" gradientUnits="userSpaceOnUse"><stop stop-color="#EC008C"></stop><stop offset="1" stop-color="#FC6767"></stop></linearGradient><clipPath id="clip0_487_148060.2344759076118118"><path fill="#fff" d="M0 0H22.114V25.848H0z" transform="translate(5 3)"></path></clipPath></defs></svg></span><span class="sc-fmBCVi rrzCf">Content</span></span>
          </li>
          <li>Customize</li>
          <li>Links</li>
        </ul>
      </div>
    <div className='mn-body'>
      <div className="App">
      <header className="App-header">
        <h1>{isEditing ? <input className='input' type="text" value={name} onChange={handleChange} /> : name}</h1>
        {isEditing ? (
          <button className='edit' onClick={handleSaveClick}>Save</button>
        ) : (
          <button className='edit' onClick={handleEditClick}>  <FiEdit/>  </button>
        )}
      </header>
    </div>
  



      {/* <div className='header' >
        <h3>Resume No.1 <FiEdit/> </h3>
      </div> */}


      <div class='card' id='view1'>
        <h1>Enter Personal details</h1>
        <table class="table">
          <thead>
            <tr>
              <th>Full Name</th>
            </tr>
            <tr>
              <td><input type="text" placeholder="Enter your title,first-and last name" /> </td>
            </tr>
            <tr>
              <th>Job Title</th>
            </tr>
            <tr>
              <td><input type="text" placeholder="Enter Job Title" /> </td>

            </tr>
            <tr>
              <th>Email</th>
            </tr>
            <tr>
              <td><input type="email" placeholder="Enter email" /> </td>
            </tr>
            <tr>
              <th>Phone </th>
            </tr>
            <tr>
              <input type="num" placeholder="Enter Phone" />
            </tr>
            <tr>
              <th>Address </th>
            </tr>
            <input type="test" placeholder="country" />  
                          
            <h3>Personal Information</h3>
              {/* //date of birth  */}
            <tr class="hidden" id="dob">
            <h3>Date of Birth</h3>
              <td><input type="date" placeholder="Add Date of Birth" /> </td>
              {/* for delete option */}
              <button  onClick={() => { document.getElementById("dob").classList.add("hidden");document.getElementById("dob-btn").classList.remove("hidden");}}> 
              <MdDeleteSweep/>
                  </button>

            </tr>
            {/* //for nationality */}
            <tr class="hidden" id="nation">
            <h3>Nationality</h3>
              <td><input type="text" placeholder="enter your nation" /> </td>
             {/* for delete option */}
              <button  onClick={() => { document.getElementById("nation").classList.add("hidden");document.getElementById("nation-btn").classList.remove("hidden");}}> 
              <MdDeleteSweep/>
                  </button>
            </tr>
            {/* //Marital Status */}
            <tr class="hidden" id="mrstatus">
            <h3>Marital Status</h3>
              <td><input type="text" placeholder="Enter your Marrital Status" /> </td>  
              <button  onClick={() => { document.getElementById("mrstatus").classList.add("hidden");document.getElementById("mrstatus-btn").classList.remove("hidden");}}> 
              <MdDeleteSweep/>
                  </button>         
            </tr>
            {/* //for Gender */}
            <tr class="hidden" id="gender">
            <h3>Gender</h3>
              <td> 
              <select name="dropdown">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer_not_to_Say">Prefer_not_to_Say</option>
                  </select>
                  <button  onClick={() => { document.getElementById("gender").classList.add("hidden");document.getElementById("gender-btn").classList.remove("hidden");}}> 
              <MdDeleteSweep/>
                  </button>
                </td>       
            </tr>
            <input type="file" name="filename" accept="image/gif, image/jpeg, image/png"></input>

          </thead>
        </table>
        <button  onClick={() => { document.getElementById("dob").classList.remove("hidden");document.getElementById("dob-btn").classList.add("hidden");  }} id='dob-btn'>
        <GrAdd/> Date of Birth 
      </button>
    {/* <br/> */}
      <button onClick={() => { document.getElementById("nation").classList.remove("hidden");document.getElementById("nation-btn").classList.add("hidden");  }} id='nation-btn'>
      <GrAdd/> Nation 
      </button>
      {/* <br/> */}
      <button onClick={() => { document.getElementById("mrstatus").classList.remove("hidden");document.getElementById("mrstatus-btn").classList.add("hidden");  }} id='mrstatus-btn'>
      <GrAdd/> Marital Status 
      </button>
      {/* <br/> //to break */}
      <button onClick={() => { document.getElementById("gender").classList.remove("hidden");document.getElementById("gender-btn").classList.add("hidden");  }} id='gender-btn'>
      <GrAdd/> Gender 
      </button>
      {/* for the Links */}
      <h3>Links</h3>
      <tr class="hidden" id="linkedin">
            <h3>Linkedin</h3>
              <td><input type="test" placeholder="Enter Linkedin" /> </td>
              {/* for delete option */}
              <button  onClick={() => { document.getElementById("linkedin").classList.add("hidden");document.getElementById("linkedin-btn").classList.remove("hidden");}}> 
              <MdDeleteSweep/>
                  </button>
            </tr>
      <button onClick={() => { document.getElementById("linkedin").classList.remove("hidden");document.getElementById("linkedin-btn").classList.add("hidden");  }} id='linkedin-btn'>
      <GrAdd/> Linkedin 
      </button>
      {/* Github */}
      <tr class="hidden" id="Git">
            <h3>Git</h3>
              <td><input type="test" placeholder="Enter Github link" /> </td>
              {/* for delete option */}
              <button  onClick={() => { document.getElementById("Git").classList.add("hidden");document.getElementById("Git-btn").classList.remove("hidden");}}> 
              <MdDeleteSweep/>
                  </button>
            </tr>
      <button onClick={() => { document.getElementById("Git").classList.remove("hidden");document.getElementById("Git-btn").classList.add("hidden");  }} id='Git-btn'>
      <GrAdd/> GitHub Link
      </button>
      {/* Website */}
      <tr class="hidden" id="website">
            <h3>website</h3>
              <td><input type="test" placeholder="Enter website link" /> </td>
              {/* for delete option */}
              <button  onClick={() => { document.getElementById("website").classList.add("hidden");document.getElementById("website-btn").classList.remove("hidden");}}> 
              <MdDeleteSweep/>
                  </button>
            </tr>
      <button onClick={() => { document.getElementById("website").classList.remove("hidden");document.getElementById("website-btn").classList.add("hidden");  }} id='website-btn'>
      <GrAdd/> website Link
      </button>

      {/* Twitter */}

      <tr class="hidden" id="twitter">
            <h3>twitter</h3>
              <td><input type="test" placeholder="Enter twitter link" /> </td>
              {/* for delete option */}
              <button  onClick={() => { document.getElementById("twitter").classList.add("hidden");document.getElementById("twitter-btn").classList.remove("hidden");}}> 
              <MdDeleteSweep/>
                  </button>
            </tr>
      <button onClick={() => { document.getElementById("twitter").classList.remove("hidden");document.getElementById("twitter-btn").classList.add("hidden");  }} id='twitter-btn'>
      <GrAdd/> twitter Link
      </button>

    {/* Discord */}

    <tr class="hidden" id="discord">
            <h3>discord</h3>
              <td><input type="test" placeholder="Enter discordhub link" /> </td>
              {/* for delete option */}
              <button  onClick={() => { document.getElementById("discord").classList.add("hidden");document.getElementById("discord-btn").classList.remove("hidden");}}> 
              <MdDeleteSweep/>
                  </button>
            </tr>
      <button onClick={() => { document.getElementById("discord").classList.remove("hidden");document.getElementById("discord-btn").classList.add("hidden");  }} id='discord-btn'>
      <GrAdd/> discord Link
      </button>

      </div>
      <div className ='submit' id='view2'>
        <button  > 
         cancle
        </button>
        <button onClick={() => { document.getElementById("view").classList.remove("hidden"); document.getElementById("view1").classList.add("hidden");document.getElementById("view2").classList.add("hidden");document.getElementById("view3").classList.remove("hidden");document.getElementById("view4").classList.add("hidden");}}>
          <VscCheck/> | save
        </button>
      </div>

      <div class="hidden value" id='view' onClick={() =>{ document.getElementById("view").classList.add("hidden"); document.getElementById("view1").classList.remove("hidden"); document.getElementById("view2").classList.remove("hidden"); document.getElementById("view3").classList.add("hidden"); }}>
      <thead>
            <tr>
              <th>Full Name</th>
              <button className='button1'>  
            <TbEdit/>
          </button>
            </tr>
            <tr>
              <td><input type="text" placeholder="Enter your title,first-and last name" /> </td>
            </tr>
            <tr>
              <th>Job Title</th>
            </tr>
            <tr>
              <td><input type="text" placeholder="Enter Job Title" /> </td>

            </tr>
            <tr>
              <th>Email</th>
            </tr>
            <tr>
              <td><input type="email" placeholder="Enter email" /> </td>
            </tr>

            <tr>
              <th>Phone </th>
            </tr>
            <tr>
              <input type="num" placeholder="Enter Phone" />
            </tr>
             </thead>
      </div>
      
      <div>
            <button className='addcontent hidden' id='view3' onClick={() =>{ document.getElementById("view4").classList.remove("hidden");}}>
          <GrAdd/> <h3>Add Content</h3>
        </button>
        </div>
        <div className='addcontent1 hidden' id='view4'> 
        <button className='adprofile'>
          <h2>Profile</h2>
         <br/>
         <p>Make a great first impression by presenting yourself in a few sentences.</p>  
        </button>
        <button className='adeducation'>
          <h2>Education</h2>
          <p>Show off your primary education, college degrees & exchange semesters.</p>
        </button>
        <button className='adskill'>
          <h2>Skill</h2>
          <p>List your technical, managerial or soft skills in this section.</p>
        </button>
        <button className='adproject'>  
         <h2>Project</h2>
         <p>Worked on a particular challenging project in the past? Mention it here.</p>
        </button>
        </div>   
        </div>  
    </div>
  );
};
export default Sidebar;