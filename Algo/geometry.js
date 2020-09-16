N unform point on sphere of radius 1
https://www.vertexshaderart.com/art/79HqSrQH4meL63aAo/revision/9c9YN5LwBQKLDa4Aa

let N=10*Math.ceil(4/dx);
let phi = Math.PI * (3.0 - Math.sqrt(5.0));  // golden angle in radians
let theta=0;
for (let ii =0;ii<N;ii++){//in range(samples)):
    let y = 1 - (ii / (N - 1)) * 2  // y goes from 1 to -1
    radius = Math.sqrt(1 - y * y)  //radius at y

    theta = phi * ii  // golden angle increment

    let x = Math.cos(theta) * radius;
    let z = Math.sin(theta) * radius;

    let r=new Vector3(x*0.1, y*0.1, z*0.1);
    vfield.addFieldLine(r);
}