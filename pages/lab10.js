export default function LabTen() {
    return (
        <div style={{textAlign: "center", padding: '10px'}}>
            <h1 style={{fontSize: '4rem'}}>Next.js</h1>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div style={{textAlign: "left"}}>
                    <h1>Installation Process</h1>
                    <h3>Step 1:</h3>
                    <p>First off, I needed to install Node.js in order to set up and run the Next.js framework. I visited https://nodejs.org/en/download/ to install this package.</p>
                    <h3>Step 2:</h3>
                    <p>Next, I went over to Vercel's page on Next.js deployment and setup: https://nextjs.org/docs. Here, I found out how to create the project by running `npx create-next-app lab10`.</p> 
                    <h3>Step 3:</h3>
                    <p>I then had to install all dependencies by running `npm install next react react-dom` in the command line.</p>
                    <h3>Step 4:</h3>
                    <p>Finally, I opened up the project folder in VS code and began working.</p>
                </div>
                <div style={{textAlign: "left"}}>
                    <h1>Page Setup</h1>
                    <p>As for the page setup, I did not have to remove any old files. I simply created a new javascript file and started working. I created a function called LabTen and exported it. Within the function I began designing my layout in HTML. I began styling it as I was creating it and used inline styling as it was the most convinient and did not require an extra css file.</p>
                </div>
                <div style={{textAlign: "left"}}>
                    <h1>Difficulties</h1>
                    <p>I had quite a bit of difficulty installing all packages in the right page. What I struggles with was using the `next` keyword in order to start the development server. At first, the `next` keyword was not being recognized by the terminal. To fix this, I had to globally install the `next` package on my laptop. After that error was fixed, a new one came into play; the server was not starting properly using next start or npm start. After doing a lot of research, and what I thought was debugging, I ended up spending time trying to run a build for my project. After failing at this several times, I decided to watch a youtube video. This video explained that Next.js runs on a dev server and cannot be started just by using next start or npm start, but rather you had to use npm run dev in order to get it working on your localhost. Once I figured that out, I was good to go.</p>
                </div>
            </div>
        </div>
    );
}