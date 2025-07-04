const testimonials = [
    {
        name: "Sophia Stevens",
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: `
         I am amazed by the sleek design 
            and powerful performance of my new laptop from
             apple. It has truly transformed my work productivity
              and made tasks effortless. The seamless integration 
              of hardware and software is remarkable. I highly recommend apple for 
            anyone looking for top-notch technology.
        `
    },

    {
        name: "Sophia Rodriguez",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
        text: `
         I am beyond impressed with the innovative technology and sleek design of my new laptop from apple. The laptop exceeds my expectations in performance and style. It has truly enhanced my productivity and efficiency.
        `
    },
    {
        name: "Emily Thompson",
        photoUrl: "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
        text: `
        I am extremely impressed with the sleek design and top-notch performance of my new laptop from Apple. The user-friendly interface and cutting-edge technology make it a must-have for anyone on the go. I highly recommend Apple to anyone in need of a reliable and efficient laptop.
        `
    },
    {
        name: "Emily Cooper",
        photoUrl: "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
        text: `
        I am extremely impressed with the cutting-edge technology and sleek design of the laptops from apple. Their products truly exceed expectations and deliver exceptional performance. I highly recommend apple to anyone in need of top-notch technology solutions.
        `
    },
    {
        name: "Sarah Adams",
        photoUrl: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfDJ8MHx8fDA%3D",
        text: `
        I am extremely satisfied with the sleek design and high performance of the laptop I purchased from apple. The innovative features and user-friendly interface make it a top choice for professionals like me.
        `
    },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial()

function updateTestimonial(){
    const {name,photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 5000)
}