import React from 'react'

export default function Files () {
    return (
            <main className="flex-grow pl-24 pt-24 pr-24">
                <h1 className="text-violet-500 text-5xl font-semibold block pb-5">What Each File Does</h1>
                <p className="text-white text-xl block">
                    <b>.next Folder:</b> The .next folder is a directory generated by Next.js during the build process. It contains the compiled and optimized output of your Next.js application. It includes various cache and build artifacts created during the build process.<br />
                    <b>node_modules Folder:</b> It contains the third-party libraries and dependencies that your project relies on.<br />
                    <b>.eslintrc.json:</b> A configuration file used by ESLint, a popular static code analysis tool for identifying and reporting on patterns found in ECMAScript code.<br />
                    <b>.gitignore:</b> This file specifies patterns of files or directories that should be ignored by Git when tracking changes in your project. Commonly ignored files include build artifacts, dependencies, and sensitive information like API keys.<br />
                    <b>next-env.d.ts:</b> This TypeScript declaration file is generated by Next.js. It includes types and declarations for environment variables used in your Next.js project. It helps TypeScript understand the types associated with the environment variables used in your application.<br />
                    <b>next.config.mjs:</b> This is the configuration file for Next.js. It allows you to customize various aspects of your Next.js application, such as setting up custom webpack configurations, specifying environment variables, and configuring other aspects of the Next.js build process.<br />
                    <b>package-lock.json:</b> This file is automatically generated by npm when you install a package. It locks down the version numbers of all the dependencies in your project, ensuring that every developer can see version history.
                </p>
            </main>
    )
}