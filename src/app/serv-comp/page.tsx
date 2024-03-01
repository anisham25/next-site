import React from 'react'

export default function ServerComponent () {
    return (
        <main className="flex-grow pl-24 pt-24 pr-24">
            <h1 className="text-violet-500 text-5xl font-semibold block pb-5">Server Components</h1>
            <p className="text-white text-xl block">
                React Server Components are UI that are rendered on the server. There are three types of components:<br />
                <b>Static Rendering:</b> Routes are rendered at build time and cached and pushed to a CDN. This is useful when a route has data that is not personalized to the user.<br />
                <b>Dynamic Rendering:</b> Routes are rendered for each user at request time. This is useful when the components contain data that is personalized to the user.<br />
                <b>Streaming:</b> Streaming enables you to progressively render UI from the server. Work is split into chunks and streamed to the client as it becomes ready.<br />
            </p>
        </main>
    )
}