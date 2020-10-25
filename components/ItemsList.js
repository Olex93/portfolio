
const itemsList = [
    {
        heading:"This Website",
        subheading:"Entire website design & build",
        text:"In order to display my work and demonstrate my skills, it became apparent that I would need a portfolio website. To that end, I designed and built this website from scratch. I decided to go with Next.js because of it's quick setup time, the ability to easly build universal SPA's and my familiarity with the software",
        key:1,
        category:"personal",
        tags:["React.js", "Next.js", "Framer Motion", "Babel", "Material UI", "Nodemailer", "CSS & CSS in js", "Node.js", "Terminal & CLI", "Git & GitHub", "Heroku", "Photoshop, Canva & Wireframing tools"],
        date:"September 2020",
        image:"url(/images/portfolio.png)",
        organisation:"Self directed build",
        url:null,
        codeSandbox:null,
        workExp1:null,
        workExp2:null,
        workDuties:null,
        icon:"/images/clientLogos/icon/af_icon.png"
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
        codeSandbox:null,
        workExp1:null,
        workExp2:null,
        workDuties:null,
        icon:"/images/clientLogos/icon/af_icon.png"
    },
    {
        heading:"Find The Lead",
        subheading:"Entire website design & build",
        text:"Working for Find The Lead local dog walking business in Cheltenham, I designed and built this site from the ground up. A prominent display of their Facebook account was key to the client, so I used a custom Express.js server to interface with the Facebook Graph API and retrieve their business page data. It was also important that the websit performed well, was fast and SEO optimised. I created an initial selection of design mockups. From there, I set to work using Next.js to build a superfast web application. I wanted to build the site as a progressive web application, to create a simple and painless user experience. Next.js was selected due to it's built in performance features, such as pre-rendering, server-side rendering and code-splitting. This ensured that the website performs well in Google Lighthouse tests and ultimately improve the sites' SEO.",
        key:3,
        category:"corporate",
        type:"Freelance",
        tags:["React.js", "Next.js", "Javascript", "Express.js", "CSS & CSS in js", "OAuth 2.0", "Facebook Graph API", "React Bootstrap", "React Helmet", "Material UI", "Axios", "Body Parser", "Dotenv", "Nodemailer", "Node.js & NPM", "Terminal & CLI", "Git & GitHub", "Heroku", "Photoshop, Canva & Wireframing tools"],
        date:"July 2020 & August 2016",
        image:"url(/images/ftl_loop.gif)",
        organisation:"Local Dog Walking Business",
        url:"https://www.findthelead.co.uk",
        codeSandbox:null,
        workExp1:"Complete overhaul of company website. The site is coded in React.js (.jsx) and implemented using the Next.js framework to create a pre-rendered single-page-application (SPA). This approach was elected for the UX benefits of a SPA, whilst maintaining the SEO benefits of pre-rendering and server-side-rendering.",
        workExp2:"The site draws on a custom Express.js server in order to interface with the Facebook Graph API to retrieve recent posts from the business Facebook account. The site is deployed to Heroku using the Heroku CLI. The full list of technologies used also includes React Helmet, Material UI, Axios, Body Parser, React Bootstrap, Dotenv and Nodemailer.",
        workDuties:null,
        icon:"/images/clientLogos/icon/ftl_icon.png"
    },
    {
        heading:"Fitt AF",
        subheading:"Entire website design & build",
        text:"Creation of a new website due to a company change in direction. This simple sales website needed to look great on mobile above all else. I was responsible for the entire UI Design and implementation. I created initial design wireframes and mockups before beginning development. This site was built using Ejs template partials served by a custom Express.js server. Other technologies include Lodash, Body Parser, Bootstrap, Dotenv and Vanilla JS.",
        key:4,
        category:"corporate",
        type:"Freelance",
        tags:["Vanilla JS", "Express.js", "Ejs template partials", "Body parser", "Lodash","Bootstrap", "Nodemailer", "Node.js & NPM", "Terminal & CLI", "Git & GitHub", "Heroku", "Photoshop, Canva & Wireframing tools"],
        date:"April 2020",
        image:"url(/images/fittaf_loop.gif)",
        organisation:"Online PT Business",
        url:"https://www.fittaf.com",
        codeSandbox:null,
        workExp1:"Creation of a new website due to a company change in direction. This simple sales website needed to look great on mobile above all else. I was responsible for the entire UI Design and implementation. I created initial design wireframes and mockups before beginning development.",
        workExp2:"This site was built using Ejs template partials served by a custom Express.js server. Other technologies include Lodash, Body Parser, Bootstrap, Dotenv and Vanilla JS.",
        workDuties:null,
        icon:"/images/clientLogos/icon/fittaf_icon.png"
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
        codeSandbox:"https://3zyyp.csb.app/",
        workExp1:null,
        workExp2:null,
        workDuties:null,
        icon:"/images/clientLogos/icon/af_icon.png"
    },
    {
        heading:"Javascript Simon Game",
        subheading:"Development Course Module",
        text:"As part of my full-stack web development course, I re-created the classic Hasbro Simon game using Vanilla Javascript.  As this part of the course was set as a code challenge, I completed this build with no guidance from the course.",
        key:6,
        category:"personal",
        tags:["Javascript ES6", "HTML", "CSS"],
        date:"November 2010",
        image:"url(/images/js_simon_game.png)",
        organisation:"Self directed build",
        url:null,
        codeSandbox:"https://3zyyp.csb.app/",
        workExp1:null,
        workExp2:null,
        workDuties:null,
        icon:"/images/clientLogos/icon/af_icon.png"
    },{
        heading:"Single Page Website",
        subheading:"Development Course Module",
        text:"As part of my full-stack web development course, I created this simple single page static website using HTML, CSS & Bootstrap.  As this part of the course was set as a code challenge, I completed this build with no guidance from the course.",
        key:7,
        category:"personal",
        tags:["HTML", "CSS", "Bootstrap"],
        date:"March 2019",
        image:"url(/images/tindog.png)",
        organisation:"Self directed build",
        url:null,
        codeSandbox:"https://pru1v.csb.app/",
        workExp1:null,
        workExp2:null,
        workDuties:null,
        icon:"/images/clientLogos/icon/af_icon.png"
    },
    {
        heading:"Vox Pops International",
        subheading:"Collaborative work with designers & developers",
        text:"Working with designers and third party developers, whilst at VPI I led development & optimisation in relation to site structure & SEO, design implementation and performance optimisation. The VPI website is built using Wordpress and a combination of plugins including Elementor, Advanced Custom Fields, LiteSpeed Cache, WP-SCSS and more. Whilst not code heavy, this build gave me exposure to the nature of drag and drop site builders, along with the pros and (mostly) cons. Working on this website has given me valuable experience in UX testing, design implementation & collaboration. ",
        key:8,
        category:"corporate",
        type:"Employed",
        tags:["Wordpress", "Elementor", "Vanilla JS", "CSS", "A/B Page Testing", "User heatmaps & Scrollmaps","Php", "Bootstrap", "Advanced Custom Fields", "Photoshop, Canva & Wireframing tools", "Yoast", "LiteSpeed Cache", "Smush", "Hummingbird", "Google Analytics & Search Console", "SEMRush"],
        date:"November 2017 - Present",
        image:"url(/images/vpi_homepage.png)",
        organisation:"International Market Research & Video Production Agency",
        url:"https://www.voxpops.com",
        codeSandbox:null,
        workExp1:"During my time at VPI I have led ongoing website optimisation , working with designers and third party developers. The VPI website is built using Wordpress and a combination of plugins including Elementor, Advanced Custom Fields, LiteSpeed Cache, WP-SCSS and more.",
        workExp2:"Working on this website has given me experience in performance optimisation, UX testing, design implementation & collaboration. I have also made adjustments to the Wordpress core using basic PHP to facilitate custom post types.",
        workDuties:["Managed all digital channels including SEM, content, CRM, email marketing, social, integrated analytics and PPC.", "Managed a team of 2, responsible for sales and marketing.", "In 1 year, increased average monthly website traffic by 32%, user dwell time by 38%, PPC conversions by 11.3%, organic conversions by 9%, search rankings by 9%. Decrease in bounce rates by 12%.", "Managed successful tender applications for the BBC World Service supplier list and Money Advice Service.", "Promoted from Marketing Executive to Digital Marketing Manager within one year.", "End of year review showed an increase in website enquiries by 35% and total amount invoiced by 24%."],
        icon:"/images/clientLogos/icon/vpi_icon.png"

    },
    {
        heading:"TRN Electrical",
        subheading:"Entire website build, following design and CMS brief",
        text:"Following my employment at Solar South West, I was asked by the company director if I could re-produce their existing website for a new brand. I set up hosting and built out the website from scratch, rather than copying over, due to outdated software. I stuck to Wordpress and the X Theme as it would leave employees with a level of control. ",
        key:9,
        category:"corporate",
        type:"Freelance",
        date:"October 2017",
        image:"url(/images/trn_homepage.png)",
        organisation:"Commercial Electrical Services Business",
        url:"http://trnelectrical.com/",
        codeSandbox:null,
        tags:["Wordpress", "X Theme", "Cornerstone", "Vanilla JS", "CSS", "Advanced Custom Fields", "Yoast"],
        workExp1:null,
        workExp2:null,
        workDuties:null,
        icon:"/images/clientLogos/icon/trn_icon.png"
    },
    {
        heading:"Solar South West",
        subheading:"Entire website design & build",
        text:"Whilst employed at Solar South West I was involved in basic Wordpress design adjustments using Cornerstone. I was responsible for SEO optimisation and site-structure modification, as well as some basic widget production.",
        key:10,
        category:"corporate",
        type:"Employed",
        tags:["Wordpress", "X Theme", "Cornerstone", "Vanilla JS", "CSS", "Yoast"],
        date:"January 2017 - October 2017",
        image:"url(/images/vpi_homepage.png)",
        organisation:"Award Winning Solar Panel & Energy Storage Contractors",
        url:"https://www.solarsouthwest.co.uk",
        codeSandbox:null,
        workExp1:null,
        workExp2:null,
        workDuties:["Employed by SSW to help the historically commercial contractor grow into the domestic market.", "I Managed digital channels including content marketing, PPC, paid social, email marketing and CRM.", "Primary focus  on SEO. I improved rankings of 10 target keywords from an average position of 3.7 to 2.7.  This resulted in an overall website traffic increase of 400%."],
        icon:"/images/clientLogos/icon/ssw_icon.png"
    },
]

export default itemsList