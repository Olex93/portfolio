
const itemsList = [
    {
        heading:"This Website",
        subheading:"Entire website design & build",
        text:"In order to display my work and demonstrate my skills, it became apparent that I would need a portfolio website. To that end, I designed and built this website from scratch. I decided to go with Next.js because of it's quick setup time, the ability to easly build universal SPA's and my familiarity with the software",
        key:1,
        category:"personal",
        tags:["React.js", "Next.js", "Framer Motion", "Babel", "Material UI", "Nodemailer", "CSS & CSS in js", "Node.js & NPM", "Terminal & CLI", "Git & GitHub", "Heroku", "Photoshop, Canva & Wireframing tools"],
        date:"September 2020",
        image:"url(/images/portfolio.png)",
        organisation:"Self directed build",
        url:null,
        codeSandbox:null
    },
    {
        heading:"React Animated Filter Grid",
        subheading:"Re-usable React component",
        text:"As part of the development of this portfolio website, I needed a nice, filterable and animated grid with modal popups to display my work. I had a look on NPM and asked friends in the React community and the React Discord channel, but there were no solutions that fitted what I wanted. I created this re-usable, responsive React filter grid using only React and Framer Motion. The link above is to the CodeSandbox mockup which was the pre-requisite to this page.",
        key:2,
        category:"personal",
        tags:["React.js", "Framer Motion"],
        date:"September 2020",
        image:"url(/images/React-Grid-Component.png)",
        organisation:"Self directed build",
        url:"https://codesandbox.io/s/react-animated-filter-grid-jjhyh",
        codeSandbox:null
    },
    {
        heading:"Find The Lead",
        subheading:"Entire website design & build",
        text:"Working for Find The Lead local dog walking business in Cheltenham, I designed and built this site from the ground up. A prominent display of their Facebook account was key to the client, so I used a custom Express.js server to interface with the Facebook Graph API and retrieve their business page data. It was also important that the websit performed well, was fast and SEO optimised. I created an initial selection of design mockups. From there, I set to work using Next.js to build a superfast web application. I wanted to build the site as a progressive web application, to create a simple and painless user experience. Next.js was selected due to it's built in performance features, such as pre-rendering, server-side rendering and code-splitting. This ensured that the website performs well in Google Lighthouse tests and ultimately improve the sites' SEO.",
        key:3,
        category:"corporate",
        tags:["React.js", "Next.js", "Javascript", "Express.js", "CSS & CSS in js", "OAuth 2.0", "Facebook Graph API", "React Bootstrap", "React Helmet", "Material UI", "Axios", "Body Parser", "Dotenv", "Nodemailer", "Node.js & NPM", "Terminal & CLI", "Git & GitHub", "Heroku", "Photoshop, Canva & Wireframing tools"],
        date:"July 2020 & August 2016",
        image:"url(/images/ftl_loop.gif)",
        organisation:"Local Dog Walking Business",
        url:"www.findthelead.co.uk",
        codeSandbox:null
    },
    {
        heading:"Fitt AF",
        subheading:"Entire website design & build",
        text:"Creation of a new website due to a company change in direction. This simple sales website needed to look great on mobile above all else. I was responsible for the entire UI Design and implementation. I created initial design wireframes and mockups before beginning development. This site was built using Ejs template partials served by a custom Express.js server. Other technologies include Lodash, Body Parser, Bootstrap, Dotenv and Vanilla JS.",
        key:4,
        category:"corporate",
        tags:["Vanilla JS", "Express.js", "Ejs template partials", "Body parser", "Lodash","Bootstrap", "Nodemailer", "Node.js & NPM", "Terminal & CLI", "Git & GitHub", "Heroku", "Photoshop, Canva & Wireframing tools"],
        date:"April 2020",
        image:"url(/images/fittaf_loop.gif)",
        organisation:"Online PT Business",
        url:"www.fittaf.com",
        codeSandbox:null
    },
    {
        heading:"React Note App",
        subheading:"Development Course Module",
        text:"As part of my full-stack web development course, I created this note keeping web application (based on Google Keep), to further expand on my React skills. The project involves functional programming using react state manipulation and hooks. As this part of the course was set as a code challenge, I completed this build with no guidance from the course.",
        key:5,
        category:"personal",
        tags:["React.js", "Material UI"],
        date:"September 2020",
        image:"url(/images/react_note.png)",
        organisation:"Self directed build",
        url:null,
        codeSandbox:"https://3zyyp.csb.app/"
    },
    {
        heading:"Javascript Simon Game",
        subheading:"Development Course Module",
        text:"As part of my full-stack web development course, I re-created the classic Hasbro Simon game using Vanilla Javascript.  As this part of the course was set as a code challenge, I completed this build with no guidance from the course.",
        key:6,
        category:"personal",
        tags:["Javascript ES6", "HTML", "CSS"],
        date:"September 2020",
        image:"url(/images/js_simon_game.png)",
        organisation:"Self directed build",
        url:null,
        codeSandbox:"https://3zyyp.csb.app/"
    },{
        heading:"Single Page Website",
        subheading:"Development Course Module",
        text:"As part of my full-stack web development course, I created this simple single page static website using HTML, CSS & Bootstrap.  As this part of the course was set as a code challenge, I completed this build with no guidance from the course.",
        key:6,
        category:"personal",
        tags:["HTML", "CSS", "Bootstrap"],
        date:"September 2020",
        image:"url(/images/tindog.png)",
        organisation:"Self directed build",
        url:null,
        codeSandbox:"https://pru1v.csb.app/"
    },
    {
        heading:"Vox Pops International",
        subheading:"Collaborative work with designers & developers",
        text:"Working with designers and third party developers, whilst at VPI I led development & optimisation in relation to site structure & SEO, design implementation and performance optimisation. The VPI website is built using Wordpress and a combination of plugins including Elementor, Advanced Custom Fields, LiteSpeed Cache, WP-SCSS and more. Whilst not code heavy, this build gave me exposure to the nature of drag and drop site builders, along with the pros and (mostly) cons. Working on this website has given me valuable experience in UX testing, design implementation & collaboration. ",
        key:7,
        category:"corporate",
        tags:["Wordpress", "Elementor", "Vanilla JS", "CSS", "A/B Page Testing", "User heatmaps & Scrollmaps","Php", "Bootstrap", "Advanced Custom Fields", "Photoshop, Canva & Wireframing tools", "Yoast", "LiteSpeed Cache", "Smush", "Hummingbird", "Google Analytics & Search Console", "SEMRush"],
        date:"November 2017 - Present",
        image:"url(/images/vpi_homepage.png)",
        organisation:"International Market Research & Video Production Agency",
        url:"www.voxpops.com",
        codeSandbox:null
    },
    {
        heading:"TRN Electrical",
        subheading:"Entire website build, following design and CMS brief",
        text:"Fourth I'm a crab",
        key:8,
        category:"corporate",
        date:"October 2017",
        image:"url(/images/trn_homepage.png)",
        organisation:"Commercial Electrical Services Business",
        url:"https://www.findthelead.co.uk",
        codeSandbox:null

    }
]

export default itemsList