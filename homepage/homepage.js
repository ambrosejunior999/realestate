let [sidenav,input] = [
    document.getElementById('sidenav'),
    document.getElementById('input')
 ]
 let houses = [
{img1:'https://media.rightmove.co.uk/dir/crop/10:9-16:9/58k/57262/125129756/57262_KSH104621_IMG_03_0000_max_476x317.jpeg',img2:'https://media.rightmove.co.uk/dir/crop/10:9-16:9/58k/57262/125129756/57262_KSH104621_IMG_00_0000_max_476x317.jpeg',img3:'https://media.rightmove.co.uk/dir/crop/10:9-16:9/58k/57262/125129756/57262_KSH104621_IMG_02_0000_max_476x317.jpeg',location: 'BASINGSTOKE',price:650000,rooms:2,bathes:1,sitting:1,},
 {img1:'https://media.rightmove.co.uk/192k/191075/124604372/191075_RRB220088_IMG_10_0000.jpeg',img2:'https://media.rightmove.co.uk/192k/191075/124604372/191075_RRB220088_IMG_01_0000.jpeg',img3:'https://media.rightmove.co.uk/192k/191075/124604372/191075_RRB220088_IMG_00_0000.jpeg',location: 'READING',price:67600,rooms:2,bathes:2,sitting:2,},
 {img1:'https://media.rightmove.co.uk/249k/248309/125947517/248309_1f249431-4c95-4689-ab92-44e0a4aba1de-13_5_41_101368_IMG_00_0000.jpeg',img2:'https://media.rightmove.co.uk/249k/248309/125947517/248309_1f249431-4c95-4689-ab92-44e0a4aba1de-13_5_41_101368_IMG_13_0001.jpeg',img3:'https://media.rightmove.co.uk/249k/248309/125947517/248309_1f249431-4c95-4689-ab92-44e0a4aba1de-13_5_41_101368_IMG_02_0000.jpeg',location: 'SOUTHAMPTON',price:78766,rooms:4,bathes:2,sitting:2,},
 {img1:'https://lid.zoocdn.com/u/1200/900/e1c82f8ee527e05094f4eb2e23907e1124fcc565.jpg:p',img2:'https://lid.zoocdn.com/u/1200/900/3287217bece963cefc3966979da54028c7ed0f08.jpg:p',img3:'https://lid.zoocdn.com/u/1200/900/7c7cb0fadc46aad30bfa8067f4ab50830d461e71.jpg:p',location:'MANCHESTER',price:260000,rooms:3,bathes:1,sitting:1,},
 {img1:'https://lid.zoocdn.com/u/1024/768/7ed1b233e11223d15baa9a9dda0e2fc18788fe0c.png:p',img2:'https://lid.zoocdn.com/u/1024/768/07c98a099d21ce49b03d762c6a72e10422efc9f8.png:p',img3:'https://lid.zoocdn.com/u/1024/768/07feca0c703f52ebdf9a4bade945f71787f4e025.png:p',location:'MANCHESTER',price:120000,rooms:1,bathes:1,sitting:0,},
 {img1:'https://lid.zoocdn.com/u/1200/900/bbd8a614283490a90718047dd0ac9ed4d7864819.jpg:p',img2:'https://lid.zoocdn.com/u/1200/900/3fddb04ec73ec2c9e59a19e5154482f093598ecc.jpg:p',img3:'https://lid.zoocdn.com/u/1200/900/99bdfea0282e96f41ff282259748e34b216b04ef.jpg:p',location:'MANCHESTER',price:'POA',rooms:2,bathes:2,sitting:0,},
 {img1:'https://lid.zoocdn.com/u/1024/768/f8e9b6eae9857e158c1d1a1e3a3e1adca9da2d4d.jpg:p',img2:'https://lid.zoocdn.com/u/1024/768/ad24479a70bc9bfaf1b832eb9482c256e81437ea.jpg:p',img3:'https://lid.zoocdn.com/u/1024/768/dbd54840d9cb55829ac4e31eedfa8a6f567f7b08.jpg:p',location:'LONDON',price:625000,rooms:1,bathes:1,sitting:1,},
 {img1:'https://lid.zoocdn.com/u/1024/768/814a9ae1ad9be760bffcad6f25e7c8691a90f9ec.jpg:p',img2:'https://lid.zoocdn.com/u/1024/768/6979f5a09e17f33d5f9928df646c7b1e8a998b37.jpg:p',img3:'https://lid.zoocdn.com/u/1200/900/e52dd98d85852b03a1584e8074c7ecf44c110b4d.jpg:p',location:'LONDON',price:850000,rooms:4,bathes:2,sitting:2,},
 {img1:'https://lid.zoocdn.com/u/1024/768/969f2c92e5f75dec944a6adaff557027e72ddb0f.jpg:p',img2:'https://lid.zoocdn.com/u/1024/768/27e2bd65b4eeaab19d94cc725fba3dfcc7fcf49e.jpg:p',img3:'https://lid.zoocdn.com/u/1024/768/2708de324695abd1708b92e4d5c612b9b028443a.jpg:p',location:'LONDON',price:650000,rooms:3,bathes:2,sitting:2,},
 {img1:'https://lid.zoocdn.com/u/1024/768/fb79b2ef6855889d3045b8203d43423703173dd7.jpg:p',img2:'https://lid.zoocdn.com/u/1024/768/30a0913b4825e6d5d43d7906cf72abce032f3035.jpg:p',img3:'https://lid.zoocdn.com/u/1024/768/acccabe799ad61ede7c34714b7dd4d1d4c0a5047.jpg:p',location:'LONDON',price:767000,rooms:2,bathes:2,sitting:0,},
 {img1:'https://lid.zoocdn.com/645/430/586fe5c62515156ed17843ee14fab4387b30d4a8.jpg',img2:'https://lid.zoocdn.com/u/1024/768/5dea1f34684b4cf669c134d18d7590ac517ba34c.jpg:p',img3:'https://lid.zoocdn.com/u/1024/768/32d7895f30959d2ce2fedec1d989a2e69aa235da.jpg:p',location:'LONDON',price:1200000,rooms:3,bathes:2,sitting:1,},
 {img1:'https://lid.zoocdn.com/u/1024/768/378dc4ced1fed66d0e0cc469d3bbea84cf1bb5cc.jpg:p',img2:'https://lid.zoocdn.com/u/1024/768/09817e15ba81f77e42874ce3904a0111e22f256b.jpg:p',img3:'https://lid.zoocdn.com/u/1024/768/39f2bd4ff92b6c098392aaf702ff7ed48b9d788e.jpg:p',location:'BIRMINGHAM',price:270000,rooms:3,bathes:1,sitting:1,},
 {img1:'https://lid.zoocdn.com/u/1024/768/1e1898061ed367c2c11f8caf7f92b4975986c193.jpg:p',img2:'https://lid.zoocdn.com/u/1024/768/1a1974fc18985c9e9d66899386d7e8182b668104.jpg:p',img3:'https://lid.zoocdn.com/u/1024/768/289174cec040da80b697b52510bfeee0e3ce01df.jpg:p',location:'BIRMINGHAM',price:195000,rooms:2,bathes:1,sitting:1,},
 {img1:'https://lid.zoocdn.com/645/430/a2d1879b2a85fe023189334c4bf60ce9af7de1d1.jpg',img2:'https://lid.zoocdn.com/645/430/b76d88827ecb511943bc4246214ab2ed0a6e84f0.jpg',img3:'https://lid.zoocdn.com/645/430/8edade3b9d3e8059497add3446b430c95b693861.jpg',location:'BIRMINGHAM',price:275000,rooms:3,bathes:1,sitting:2,},
 {img1:'https://lid.zoocdn.com/u/1024/768/970a3806a7160709f755df1fee2fd40d97e096f0.jpg:p',img2:'https://lid.zoocdn.com/u/1024/768/04f54e44db75e8a04275ab8c54c2cc5a18dd1a6c.jpg:p',img3:'https://lid.zoocdn.com/u/1024/768/facb4a1f51f72e44fc6709143d667313882e2a66.jpg:p',location:'OXFORD',price:650000,rooms:7,bathes:2,sitting:1,},
 {img1:'https://lid.zoocdn.com/645/430/95ad6289a80ac2cfa466de1d09261e35f571b5a9.jpg',img2:'https://lid.zoocdn.com/645/430/d640f2d6e6766e8fe30b3ab85214306ab881cce1.jpg',img3:'https://lid.zoocdn.com/645/430/1468b792817af2cc5c1343c3bd106036ec64c93e.jpg',location:'OXFORD',price:450000,rooms:2,bathes:1,sitting:2,},
 {img1:'https://lid.zoocdn.com/645/430/0a443fb1e8f2798e1649ef8e798da2c109132a11.jpg',img2:'https://lid.zoocdn.com/645/430/8b1ebf1d4702c491a241a58b7e1fb170826c58f8.jpg',img3:'https://lid.zoocdn.com/645/430/3ce1fb36171f894dab064571920b76540a75299e.jpg',location:'LIVERPOOL',price:790000,rooms:3,bathes:1,sitting:4,},
 {img1:'https://lid.zoocdn.com/645/430/24b2ce50655d59f23eb9f91abbb3b06bb13fe11d.jpg',img2:'https://lid.zoocdn.com/645/430/ddf9e48c07baeb177c3c8afae6cf83746a7c7ea0.jpg',img3:'https://lid.zoocdn.com/645/430/5e29682c04c49f52a1d4a5d63d9a5623f657cc90.jpg',location:'LIVERPOOL',price:225000,rooms:2,bathes:2,sitting:1,},
 {img1:'https://lid.zoocdn.com/645/430/ef6aa34fd7100f1c6885350cca299826c03b9bfc.jpg',img2:'https://lid.zoocdn.com/645/430/63f194468c0de64be97d79e8004052631503ff80.jpg',img3:'https://lid.zoocdn.com/645/430/0070b3b44ad04dc5f18d4516e020c5de73f4e798.jpg',location:'SURREY',price:500000,rooms:2,bathes:1,sitting:1,},
 // {img1:'',img2:'',img3:'',location:'',price:,rooms:,bathes:,sitting:,}
]
localStorage.setItem('houses', JSON.stringify(houses))
 let getproperties = JSON.parse(localStorage.getItem('houses'));
const searchprops = () => {
document.getElementById('properties').innerHTML = ``
let Availproduct = getproperties.filter(e => {
 return e.location.includes(input.value)

})
for (let index = 0; index < Availproduct.length; index++) {
 const element = Availproduct[index];
 document.getElementById('properties').innerHTML += `
 <div id="props">
     <div id="prop-pic" >
        <img src="../icons/heart.png" alt="" onclick="favor(${index})" id="favorites" style="width: 29.5px;height: 29.5px;">
       <section class="carousel" aria-label="Gallery">
         <ol class="carousel__viewport">
         
           <li id="carousel__slide2"
               tabindex="0"
               class="carousel__slide">
               <img src="${element.img1}" alt=""  style="width: 100%;height: 100%;">
             <div class="carousel__snapper"></div>          
           </li>
           <li id="carousel__slide3"
               tabindex="0"
               class="carousel__slide">
               <img src="${element.img3}" alt=""  style="width: 100%;height: 100%;">
             <div class="carousel__snapper"></div>             
           </li>
           <li id="carousel__slide4"
               class="carousel__slide">
               <img src="${element.img3}" alt=""  style="width: 100%;height: 100%;">
             <div class="carousel__snapper"></div>               
           </li>
         </ol>
       </section>
     </div>
     <div>
      <legend style="margin-top:60px;font-size: 14px;">From <br><span style="font-size:19px">${element.price}</span></legend>
      <section id="secs">
       <legend><img src="../icons/bed.png" alt="" style="width: 20px;height: 22px;">(${element.rooms})</legend>
       <legend><img src="../icons/shower.png" alt=""  style="width: 20px;height: 22px;">(${element.bathes})</legend>
       <legend><img src="../icons/armchair.png" alt=""  style="width: 20px;height: 22px;">(${element.sitting})</legend>
      </section>
      <legend>${element.location},<span>ENGLAND</span></legend>
     </div>
    </div>
   
 `
}
}
const openclosenav = () => {
 sidenav.style.display = 'inherit'
}
const sidenavclose = () => {
 sidenav.style.display = 'none'
}
let favors = 0
let favorArray = []
const favor = (index) => {
if (favors == 0) {
 favorArray.push(properties[index])
 favors = 1
} else {
 favorArray.splice(index,1)
 // favors = 0
}
}
console.log(favorArray);
localStorage.setItem('favorArray', JSON.stringify(favorArray))
let properties = [
 {img1:'https://media.rightmove.co.uk/dir/crop/10:9-16:9/58k/57262/125129756/57262_KSH104621_IMG_03_0000_max_476x317.jpeg',img2:'https://media.rightmove.co.uk/dir/crop/10:9-16:9/58k/57262/125129756/57262_KSH104621_IMG_00_0000_max_476x317.jpeg',img3:'https://media.rightmove.co.uk/dir/crop/10:9-16:9/58k/57262/125129756/57262_KSH104621_IMG_02_0000_max_476x317.jpeg',location: 'BASINGSTOKE',price:650000,rooms:2,bathes:1,sitting:1,},
 {img1:'https://media.rightmove.co.uk/192k/191075/124604372/191075_RRB220088_IMG_10_0000.jpeg',img2:'https://media.rightmove.co.uk/192k/191075/124604372/191075_RRB220088_IMG_01_0000.jpeg',img3:'https://media.rightmove.co.uk/192k/191075/124604372/191075_RRB220088_IMG_00_0000.jpeg',location: 'READING',price:67600,rooms:2,bathes:2,sitting:2,},
 {img1:'https://media.rightmove.co.uk/249k/248309/125947517/248309_1f249431-4c95-4689-ab92-44e0a4aba1de-13_5_41_101368_IMG_00_0000.jpeg',img2:'https://media.rightmove.co.uk/249k/248309/125947517/248309_1f249431-4c95-4689-ab92-44e0a4aba1de-13_5_41_101368_IMG_13_0001.jpeg',img3:'https://media.rightmove.co.uk/249k/248309/125947517/248309_1f249431-4c95-4689-ab92-44e0a4aba1de-13_5_41_101368_IMG_02_0000.jpeg',location: 'SOUTHAMPTON',price:78766,rooms:4,bathes:2,sitting:2,}
]
localStorage.setItem('properties', JSON.stringify(properties))
properties.map((value,index) => {
 document.getElementById('properties').innerHTML += `
 <div id="props">
     <div id="prop-pic" >
       <img src="../icons/heart.png" alt="" onclick="favor(${index})" id="favorites" style="width: 29.5px;height: 29.5px;">
       <section class="carousel" aria-label="Gallery">
         <ol class="carousel__viewport">
           <li id="carousel__slide1"
               tabindex="0"
              
               class="carousel__slide">
               <img src="${value.img1}" alt="" style="width: 100%;height: 100%;">
             <div class="carousel__snapper">                 
             </div>
           </li>
           <li id="carousel__slide2"
               tabindex="0"
               class="carousel__slide">
               <img src="${value.img1}" alt=""  style="width: 100%;height: 100%;">
             <div class="carousel__snapper"></div>          
           </li>
           <li id="carousel__slide3"
               tabindex="0"
               class="carousel__slide">
               <img src="${value.img3}" alt=""  style="width: 100%;height: 100%;">
             <div class="carousel__snapper"></div>             
           </li>
           <li id="carousel__slide4"
               class="carousel__slide">
               <img src="${value.img3}" alt=""  style="width: 100%;height: 100%;">
             <div class="carousel__snapper"></div>               
           </li>
         </ol>
       </section>
     </div>
     <div>
      <legend style="margin-top:60px;font-size: 14px;">From <br><span style="font-size:19px">${value.price}</span></legend>
      <section id="secs">
       <legend><img src="../icons/bed.png" alt="" style="width: 20px;height: 22px;">(${value.rooms})</legend>
       <legend><img src="../icons/shower.png" alt=""  style="width: 20px;height: 22px;">(${value.bathes})</legend>
       <legend><img src="../icons/armchair.png" alt=""  style="width: 20px;height: 22px;">(${value.sitting})</legend>
      </section>
      <legend>${value.location},<span>ENGLAND</span></legend>
     </div>
    </div>
 `
})