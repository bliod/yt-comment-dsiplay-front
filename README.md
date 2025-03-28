## Next.js Youtube comments dashboard example

This is the starter template for the Next.js App Router Course. https://github.com/vercel/next-learn/tree/main/dashboard/starter-example

This example contains a landing page and a link to the YouTube comments dashboard. There, you can add YouTube video IDs and monitor their latest 20 comments. If a request has already been made for that ID in the last 24 hours, you will be presented with a database response.

# Install dependencies

npm install # or yarn install

# Running the Project

npm run build # Build the project
npm start # Start production server

Check console for web url. Exp: http://localhost:3001

### Project Structure

- `/app`: Contains all the routes, components, and logic for application.
- `/app/lib`: Contains functions used in application, such as reusable utility functions and data fetching functions.
- `/app/ui`: Contains all the UI components such as cards, tables, and forms.
- `/public`: ontains all the static assets for application, such as images.
- `next.config.ts`: Next.js configuration file.
- `tailwind.config.ts`: Tailwind CSS configuration file.
- `tsconfig.json`: TypeScript configuration file.

### Key Components

- `CommentsDashboard`: The main dashboard component for displaying video comments.
- `SectionCard`: A component for displaying a section of comments.
