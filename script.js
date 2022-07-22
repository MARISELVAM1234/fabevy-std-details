var logoDiv = document.createElement("header");
logoDiv.setAttribute("class", "logo-part")

var logoImgElement = document.createElement("img");
logoImgElement.setAttribute("src", "/image/logo.png");

var anchorLogoElement = document.createElement("a");
anchorLogoElement.setAttribute("href", "https://forms.office.com/pages/responsepage.aspx?id=vdiF_LBDdEWKN2G2ej8buRkLbvNzVNJJjHOto5xycDVUMFpQRlZXUU5RNlpHVDJUWFZWOU9LTFlZOC4u");
anchorLogoElement.setAttribute("target" , "blank");
var btnElement = document.createElement("button");
btnElement.textContent = "Hire Our Canditates";
anchorLogoElement.append(btnElement);
logoDiv.append(logoImgElement, anchorLogoElement);


var middleDiv = document.createElement("div");
middleDiv.setAttribute("class", "middle-part");
var h1Ele = document.createElement("h1");
h1Ele.textContent = "Source our ";
spanEle = document.createElement("span");
spanEle.textContent = "Active IT Job Seekers";
h1Ele.append(spanEle);
var aElement = document.createElement("a");
aElement.setAttribute("href", "https://forms.office.com/pages/responsepage.aspx?id=vdiF_LBDdEWKN2G2ej8buRkLbvNzVNJJjHOto5xycDVUMFpQRlZXUU5RNlpHVDJUWFZWOU9LTFlZOC4u");
aElement.setAttribute("target" , "blank");
console.log(aElement);
var btnElement2 = document.createElement("button");
btnElement2.textContent = "Hire Our Canditates";
aElement.append(btnElement2);

middleDiv.append(h1Ele, aElement);


var h2Ele = document.createElement("h2");
h2Ele.setAttribute("class", "header-2")
h2Ele.textContent = "Active IT Jobseekers";

document.body.append(logoDiv, middleDiv, h2Ele);

var studentDetails = [
    {
        image: "/image/1.jpeg",
        name: "Mariselvam v",
        address: "Fresher form   Tenkasi",
        git: "https://github.com/MARISELVAM1234",
        resume: "",
        primarySkils: "Html, Css, JavaScript, React JS.",
        secondarySkils: "Visual Studio Code, Git",
        expectedSalary: "3.5L",
        edu1: "BE - Civil - 2020 - 8.48 CGPA.",
        edu2: "HSC - State Board - 2016 - 77.16%.",
        edu3: "SSLC - State Board - 2014 - 89%.",
        join: "Immediate"
    },
    {
        image: "/image/2.jpeg",
        name: "LeoWilson",
        address: "Fresher form   Tenkasi",
        git: "https://github.com/Leowilson17",
        resume: "",
        primarySkils: "Html, Css, JavaScript, React JS.",
        secondarySkils: "Visual Studio Code, Git",
        expectedSalary: "3.5L",
        edu1: "UG - BCA - 2021 - 6.6 CGPA.",
        edu2: "HSC - State Board - 2018 - 70%.",
        edu3: "SSLC - State Board - 2016 - 85%.",
        join: "Immediate"
    },
    {
        image: "/image/3.jpeg",
        name: "Alphanse",
        address: "Fresher form   Tenkasi",
        git: "",
        resume: "",
        primarySkils: "Html, Css, JavaScript, React JS.",
        secondarySkils: "Visual Studio Code, Git",
        expectedSalary: "3.5L",
        edu1: "BE - Civil - 2020 - 6.6 CGPA.",
        edu2: "HSC - State Board - 2016 - 70%.",
        edu3: "SSLC - State Board - 2014 - 85%.",
        join: "Immediate"
    },
    {
        image: "/image/4.jpeg",
        name: "Chithiraivel",
        address: "Fresher form   Tenkasi",
        git: "",
        resume: "",
        primarySkils: "Html, Css, JavaScript, React JS.",
        secondarySkils: "Visual Studio Code, Git",
        expectedSalary: "3.5L",
        edu1: "BE - CSE - 2020 - 6.6 CGPA.",
        edu2: "HSC - State Board - 2016 - 70%.",
        edu3: "SSLC - State Board - 2014 - 85%.",
        join: "Immediate"
    },
    {
        image: "/image/5.jpeg",
        name: "Muthukumar",
        address: "Fresher form   Tenkasi",
        git: "",
        resume: "",
        primarySkils: "Html, Css, JavaScript, React JS.",
        secondarySkils: "Visual Studio Code, Git",
        expectedSalary: "3.5L",
        edu1: "BE - ECE - 2021 - 6.6 CGPA.",
        edu2: "HSC - State Board - 2017 - 70%.",
        edu3: "SSLC - State Board - 2015 - 85%.",
        join: "Immediate"
    },
    {
        image: "/image/6.jpeg",
        name: "Rahul",
        address: "Fresher form   Tenkasi",
        git: "",
        resume: "",
        primarySkils: "Html, Css, JavaScript, React JS.",
        secondarySkils: "Visual Studio Code, Git",
        expectedSalary: "3.5L",
        edu1: "BE - CSE - 2020 - 6.6 CGPA.",
        edu2: "HSC - State Board - 2016 - 70%.",
        edu3: "SSLC - State Board - 2014 - 85%.",
        join: "Immediate"
    }
]
var secElement = document.createElement("section");
secElement.setAttribute("class", "main-container");
document.body.append(secElement);

studentDetails.forEach(student)
function student(students) {
    // for (var i = 0 ; i < studentDetails.length ; i++){
    var maindivEle = document.createElement("div");
    var divElement = document.createElement("div");
    var divElement2 = document.createElement("div");
    var divElement3 = document.createElement("div");


    //image-part creation
    var imgElement = document.createElement("img");
    imgElement.setAttribute("src", students.image);
    divElement2.append(imgElement);

    //name-part creation
    var headerElement = document.createElement("h1");
    headerElement.textContent = students.name;

    //address-part creation
    var paraElement = document.createElement("p");
    paraElement.innerText = "Fresher form   Tenkasi";

    divElement3.append(headerElement, paraElement);

    //git-part creation 
    var anchorElement1 = document.createElement("a");
    anchorElement1.setAttribute("href", students.git);
    anchorElement1.setAttribute("target", "blank");
    var iconElement = document.createElement("i");
    iconElement.setAttribute("class", "fa fa-github icon1");
    iconElement.setAttribute("aria-hidden", true);
    anchorElement1.append(iconElement);


    //resume-part creation
    var anchorElement2 = document.createElement("a");
    var iconElement2 = document.createElement("i");
    anchorElement2.setAttribute("href", "hai");
    anchorElement2.setAttribute("target", "blank");
    iconElement2.setAttribute("class", "fa fa-file-text-o icon2")
    iconElement2.setAttribute("aria-hidden", true);
    anchorElement2.append(iconElement2);


    var divElement4 = document.createElement("div");
    divElement4.append(anchorElement1, anchorElement2);
    divElement4.setAttribute("class", "icon-part");




    maindivEle.setAttribute("class", "main-div");
    divElement.setAttribute("class", "container");
    divElement3.setAttribute("class", "std-detail");


    secElement.append(maindivEle);

    divElement.append(divElement2, divElement3, divElement4);



    //primarySkils Part 
    var primaryElement = document.createElement("h2");
    primaryElement.textContent = "Primary Skills";
    var skillElement = document.createElement("p");
    skillElement.textContent = students.primarySkils;
    var primaryDivElement = document.createElement("div");
    primaryDivElement.append(primaryElement, skillElement)

    //secondaryskils-part
    var secondaryElement = document.createElement("h2");
    secondaryElement.textContent = "Secondary Skills";
    var skillElement2 = document.createElement("p");
    skillElement2.textContent = students.secondarySkils;
    var secondaryDivElement = document.createElement("div");
    secondaryDivElement.append(secondaryElement, skillElement2)

    //expected-salary part
    var expecElement = document.createElement("h2");
    expecElement.textContent = "Secondary Skills";
    var skillElement3 = document.createElement("p");
    skillElement3.textContent = students.expectedSalary;
    var expecDivElement = document.createElement("div");
    expecDivElement.append(expecElement, skillElement3)

    //left side
    var containerElement = document.createElement("div");
    containerElement.setAttribute("class", "container2");
    containerElement.append(primaryDivElement, secondaryDivElement, expecDivElement);

    //education-part
    var eduOnecElement = document.createElement("h2");
    eduOnecElement.textContent = "Education";
    var eduElement1 = document.createElement("p");
    eduElement1.textContent = students.edu1;
    var eduElement2 = document.createElement("p");
    eduElement2.textContent = students.edu2;
    var eduElement3 = document.createElement("p");
    eduElement3.textContent = students.edu3;
    var eduDivElement = document.createElement("div");
    eduDivElement.append(eduOnecElement, eduElement1, eduElement2, eduElement3)

    //joining
    var joiningElement = document.createElement("h2");
    joiningElement.textContent = "Availability to join";
    var valueElement1 = document.createElement("p");
    valueElement1.textContent = students.join;
    var joinDivElement = document.createElement("div");
    joinDivElement.append(joiningElement, valueElement1)


    //right-side
    var containerElement2 = document.createElement("div");
    containerElement2.setAttribute("class", "container3");
    containerElement2.append(eduDivElement, joinDivElement);




    var containerMain = document.createElement("div");
    containerMain.setAttribute("class", "main2")
    containerMain.append(containerElement, containerElement2);


    maindivEle.append(divElement, containerMain);

    // document.body.append(secElement)
}

console.log(secElement)
