import React from 'react'

export default function AppRouter () {
    return (
            <main className="flex-grow pl-24 pt-24 pr-24">
                <h1 className="text-violet-500 text-5xl font-semibold block pb-5">App Router</h1>
                <p className="text-white text-xl block">
                    Next.js provides a powerful and flexible routing system through its built-in routing library called the "Next.js Router." The Next.js Router simplifies the process of defining and handling routes in your application. Here are key aspects of the Next.js Router:<br />
                    <b>Declarative Routing:</b> Next.js Router simplifies route definition by following a file system-based approach. Files inside the pages directory automatically become routes, making the routing process more declarative.<br/>
                    <b>Dynamic Rendering:</b> Routes are rendered for each user at request time. This is useful when the components contain data that is personalized to the user.<br />
                    <b>Programmatic Navigation:</b> Allows for programmatic navigation between pages using functions like router.push or router.replace. This feature is useful for triggering navigation based on user interactions or other events within the application.<br />
                </p>
            </main>
    )
}