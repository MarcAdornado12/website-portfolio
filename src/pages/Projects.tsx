function Projects() {
    return (
        <section className="projectPage">

            <h1>PROJECTS</h1>

            <p className="projectIntro">
                Here are some of the projects I have worked on during school days, and during my internship project.
            </p>

            <div className="projectList">
                <div className="projectCard">
                    <h2>Marc's Personal Portfolio Website</h2>

                    <p>
                        A personal portfolio website created to practice frontend development using React, TypeScript, and Vite. The website includes multiple pages such as Home, About Me, Projects, and Contact.
                    </p>

                    <p className="techUsed">
                        React • TypeScript • CSS • Vite
                    </p>
                </div>


                <div className="projectCard">
                    <h2>Utilizing Optical Character Recognition and Natural Language Processing for Automated Digital Medical Term Flashcards within a Web-Based Platform</h2>

                    <p>
                        A web-based platform designed to generate structured digital
                        flashcards from medical learning materials using Optical Character
                        Recognition (OCR) and Natural Language Processing (NLP). The
                        system accepts text, images, PDFs, Word documents, and PowerPoint
                        files to automatically create formatted flashcards for
                        pre-medical students.
                    </p>

                    <p className="techUsed">
                        React • TypeScript • OCR • NLP • LoRA • SciFive
                    </p>
                </div>

                <div className="projectCard">
                    <h2>Degen Token</h2>

                    <p>
                        A blockchain-based ERC-20 token project developed using Solidity.
                        The system supports token minting, burning, transfers, item
                        redemption, and inventory tracking for users. It also includes
                        in-game item redemption features using custom token balances.
                    </p>

                    <p className="techUsed">
                        Solidity • Ethereum • ERC-20R • Remix IDE
                    </p>
                </div>

                <div className="projectCard">
                    <h2>My Token</h2>

                    <p>
                        A custom ERC-20 token developed using Solidity that supports
                        token minting, burning, and transfers between users. The project
                        also implements custom decimal handling and owner-controlled
                        token minting within the Ethereum development environment.
                    </p>

                    <p className="techUsed">
                        Solidity • Ethereum • ERC-20R • Remix IDE
                    </p>
                </div>

                <div className="projectCard">
                    <h2>Decentralized ATM Interface</h2>

                    <p>
                        This code implements a decentralized ATM interface using Ethereum smart contracts.
                        It allows users to interact with a blockchain-based wallet through a React.js frontend
                        integrated with the Ethereum network via MetaMask.
                    </p>

                    <p className="techUsed">
                        React • Ethereum • Hardhat • Solidity • MetaMask
                    </p>
                </div>

                <div className="projectCard">
                    <h2>Store Inventory</h2>

                    <p>
                        A Solidity-based smart contract designed to manage apple and banana
                        inventory in a store. The system allows users to buy items within set limits,
                        prevents purchases when stock is insufficient, and supports inventory restocking
                        while validating transactions and inventory data.
                    </p>

                    <p className="techUsed">
                        Solidity • Ethereum • Remix IDE
                    </p>
                </div>

                <div className="projectCard">
                    <h2>MyToken Smart Contract</h2>

                    <p>
                        A Solidity smart contract that creates a cryptocurrency-like token on the Ethereum blockchain.
                        The project supports token minting, burning, balance tracking, and secure token supply management.
                    </p>

                    <p className="techUsed">
                        Solidity • Ethereum • Remix IDE
                    </p>
                </div>

                <div className="projectCard">
                    <h2>NFT Minting System</h2>

                    <p>
                        A JavaScript-based NFT minting system that creates and stores NFT metadata such as name, eye color,
                        shirt type, and accessories. The project also supports listing minted NFTs and tracking the total NFT supply.
                    </p>

                    <p className="techUsed">
                        JavaScript • NFT • Metadata
                    </p>
                </div>

                <div className="projectCard">
                    <h2>2D OpenGL Graphics Project</h2>

                    <p>
                        A computer graphics project developed using C++ and OpenGL. The project demonstrates basic 2D rendering, object
                        transformations, and animation techniques such as scaling, rotation, and translation.
                    </p>

                    <p className="techUsed">
                        C++ • OpenGL • GLUT
                    </p>
                </div>
            </div>

        </section>

    )

}

export default Projects