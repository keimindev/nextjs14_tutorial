## Nextjs14 Master 
<br/>
<br/>

### Folder Structure
- public : image, media contents
- node_modules : dev libraries
- .next : cache,app,build folder
- src/app : app sources

### App Router
- react need a "router" for router
- nextjs use folder and file. folder name will be domain direction.
- child-folder also works. 
- dynamic routing use '[ sth ]' as folder name

### Layout
- The layout file will help in displaying the same components using props, even when changing the page.


### Image 
- Next.js caches images first and then optimizes them at different sizes.
- It doesn't showing image directly. 
- If you add an external image, you should include the protocol and hostname in next.config.js.

### Rendering
there are two types of rendering. 

| SSR | CSR |
|---|---|
|user enters the web browser -> empty browser -> requests to server -> server sends back HTML (printed on the browser) (js for interactive) -> user can see the content| user enters the web browser -> empty browser ->  requests to server -> server sends back empty HTML and JavaScript (all bundled together) -> empty browser -> after rendering the page (immediately interactive)|
| pros <br/> - The initial page load is faster <br/> - Better old device and slow internet connection <br/> - Better SEO <br/> cons <br/> - Less interaction <br/> - Slower Subsequent Page loads <br/> - State Management Complexity | pros <br/> - Better performance after initial load <br/> - Less server load <br/> - Best for the user interactivity <br/> cons <br/> - May affect SEO <br/> - Slower initial load <br/> - Dependency on client resources |



### Nextjs - use client
there are two types of components
- Sever Component
- Client Components

for example, user, chart, logout component are client componenent.
if you want to change to client component, just add "use client".






