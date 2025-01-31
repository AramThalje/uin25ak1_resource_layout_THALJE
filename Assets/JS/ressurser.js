const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    }
]

const header = document.getElementById("knp-section");
        resources.forEach(element => {
            const listElement = document.createElement('li');
            listElement.textContent = element.category;
            listElement.onclick = () => viseInnhold(element.category, listElement);
            header.appendChild(listElement);
        });

// // Lager en header med kategorier
/*const header = document.getElementById("knp-section");
resources.map((element) => {
    const listElemet = document.createElement('li');
    listElemet.innerHTML = element.category; // Kan vi bruke innerHTML eller TextContent for å vise innholdet
    listElemet.onclick = () => viseInnhold(element.category, listElemet);
    listElemet.className="knpp-section";
    header.appendChild(listElemet);
});*/


const innhold = document.getElementById('categori');
        function viseInnhold(category, clickedElement) {
            document.querySelectorAll('nav ul li').forEach(li => li.classList.remove('active'));
            clickedElement.classList.add('active');

            const resource = resources.find(res => res.category === category);
            innhold.innerHTML = `
                <article>
                    <h2>${resource.category}</h2>
                    <p>${resource.text}</p>
                    <ul>
                        ${resource.sources.map(item => `<li><a href="${item.url}" target="_blank">${item.title}</a></li>`).join('')}
                    </ul>
                </article>
            `;
        }
        viseInnhold(resources[0].category, header.children[0]);


// Eller
/*const categori =  document.getElementById("categori");
resources.map(underarray => 

    underarray.map(item => {
        const elementer = document.createElement('li');
        elementer.innerHTML = 
        `
        <article>
                <h2>${item.title}</h2>
                <p>${item.text}</p>
                <ul class="knp-inh">
                    ${item.sources.map(source => `<li><a href = "${source.url}">${source.title}<a/></li>`)}
                </ul>
            </article>
        `;
        categori.appendChild(elementer);
        
       
    })
)
*/

