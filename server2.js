const http = require("http")
const fs = require("fs")
const port = 2000


const homepage = fs.readFileSync("./pages/index.html", "utf-8")
const aboutpage = fs.readFileSync("./pages/about.html", "utf-8")
const  contactpage = fs.readFileSync("./pages/contact.html", "utf-8")
const  servicepage = fs.readFileSync("./pages/services.html", "utf-8")
const testimonialpage  = fs.readFileSync("./pages/testimonial.html", "utf-8")
const errorpage  = fs.readFileSync("./pages/error.html", "utf-8")

const server = http.createServer((req, res) => {
    let path = req.url
    if(path === "/" || path === "/home"){
        res.end(homepage)
    }else if(path === "/about"){
        res.end(aboutpage)
    }else if (path === "/contact"){
        res.end(contactpage)
    } else if(path === '/services'){
        res.end(servicepage)
    }else if(path === '/testimonail'){
        res.end(testimonialpage)
    }else{
        res.end(errorpage)
    }


});
server.listen(port, () => {
    console.log('sever started successfully')
})