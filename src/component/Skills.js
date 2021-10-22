import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  

  const frontend = [{
    name: "JS",
    Years: 14,
}, {
    name: "HTML",
    Years: 14,
}, {
    name: "CSS",
    Years: 14,
}, {
    name: "Bootstrap",
    Years: 8,
}, {
    name: "jQuery",
    Years: 6,
}, {
    name: "GIS",
    Years: 4,
}, {
    name: "PHP",
    Years: 4,
}];
const backend = [ {
    name: "NodeJS",
    Years: 7,
},{
    name: "J2EE",
    Years: 5,
}, {
    name: "MySQL",
    Years: 4,
}, {
    name: "PGSql",
    Years: 6,
}, {
    name: "MongoDB",
    Years: 6,
}, {
    name: "C",
    Years: 1,
}, {
    name: "GeoServer",
    Years: 3,
}];
const cloud_ml = [{
    name: "AWS",
    Years: 4,
}, {
    name: "Azure",
    Years: 2,
}, {
    name: "TensorFlow",
    Years: 2,
}, {
    name: "Keras",
    Years: 1.5,
}, {
    name: "Python",
    Years: 2,
}];
const frameworks = [ {
    name: "AngularJs",
    Years: 7,
}, {
    name: "ReactJs",
    Years: 3,
}, {
    name: "Express",
    Years: 6,
}, {
    name: "Ionic",
    Years: 6,
}];
function Skills () {
	return <div className="skills">
        
        <div class="row">
           
  <div class="col-sm-6">
  <label>Front-end Technologies</label>
      <BarChart 
      width={600}
      height={210}
      data={frontend}
      margin={{
        top: 50,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      
      <XAxis dataKey="name"  tick={{ fill: 'white',fontSize: 10 }}/>
      <YAxis tick={{ fill: 'white',fontSize: 12 }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="Years" fill="#dddde6" />
     
    </BarChart></div>
  <div class="col-sm-6">
  <label>Back-end Technologies</label>
  <BarChart
      width={600}
      height={210}
      data={backend}
      margin={{
        top: 50,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      
      <XAxis dataKey="name"  tick={{ fill: 'white',fontSize: 10 }}/>
      <YAxis tick={{ fill: 'white',fontSize: 16 }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="Years" fill="#dddde6" />
     
    </BarChart>
  </div>
 
</div>
<div class="row">
  <div class="col-sm-6">
  <label>Cloud and AI Technologies</label>
  <BarChart
      width={600}
      height={210}
      data={cloud_ml}
      margin={{
        top: 50,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      
      <XAxis dataKey="name"  tick={{ fill: 'white',fontSize: 12 }}/>
      <YAxis tick={{ fill: 'white',fontSize: 16 }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="Years" fill="#dddde6" />
     
    </BarChart>
  </div>
  <div class="col-sm-6">
  <label>Tools and Frameworks</label>
  <BarChart
      width={600}
      height={210}
      data={frameworks}
      margin={{
        top: 50,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      
      <XAxis dataKey="name"  tick={{ fill: 'white',fontSize: 12 }}/>
      <YAxis tick={{ fill: 'white',fontSize: 16 }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="Years" fill="#dddde6" />
     
    </BarChart>
  </div>

</div>
        
		
	</div>
}
export default Skills;