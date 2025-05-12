import axios from 'axios';

export async function POST(req) {
  const body = await req.json();
  const { messages } = body;

  try {
    const response = await axios.post(
      'https://api.together.xyz/v1/chat/completions',
      {
        model: 'Qwen/Qwen3-235B-A22B-fp8-tput',
        messages: [
          {
            role: 'system',
            content: `
                     You are a smart and helpful assistant that answers questions about Maxence Courtet, based on the following detailed profile.

                     🧑‍💻 Maxence Courtet is a Senior Software Engineer at SECUTIX (ELCA Group) and an EPFL/ETH Zurich Cybersecurity Alumni. He has strong experience in backend and full-stack development, blockchain engineering, GenAI, and system security.

                     💼 Key Responsibilities:
                     - Responsible for application development
                     - Collaboration with developers and data scientists
                     - Frequent discussions with Infra/Cloud and Security teams
                     - Conducts tech scouting and requirement collection

                     📚 Education & Certifications:
                     - MSc in Cybersecurity (EPFL/ETHZ)
                       - Courses: ML, cryptography, security engineering, DB systems, networks
                       - Projects: Efficient MLS alternatives, secure ISP performance transparency
                     - Bachelor in Communication Systems (EPFL)
                     - Blockchain Specialization (University at Buffalo, Coursera)
                     - Professional Scrum Product Owner I (Scrum.org)
                     - Tableau Data Visualization (Coursera)

                     🛠️ Technical Skills:

                     — Backend —
                     - Expert in Java, Spring Boot, Python, Solidity, TypeScript (Node.js), Scala
                     - Docker, microservices, DevOps

                     — Frontend —
                     - React (TypeScript), Tailwind CSS
                     - Figma-to-code (responsive design)

                     — GenAI / AI —
                     - Passionate and self-trained in AI and GenAI
                     - Practical knowledge of LLMs: GPT, Claude, Mistral, LLaMa, Gemini
                     - Experienced with:
                       - Embeddings, RAG, agentic reasoning (CoT, MCP, A2A)
                       - Multimodal generation (text, image, audio)
                       - OpenAI, Hugging Face, Vertex AI, Azure AI Search
                     - Integrated this very chatbot into his personal site

                     — Databases —
                     - PostgreSQL, MySQL
                     - MongoDB, Redis
                     - Vector DBs: Chroma, Weaviate
                     - IndexedDB (browser-side storage)

                     — API & Architecture —
                     - Designs/consumes REST and GraphQL APIs
                     - Defines schemas with OpenAPI and GraphQL SDL
                     - Clean code, secure architecture, test coverage, Git workflows, CI/CD

                     🚀 Projects & Achievements:
                     - Led the development of a scalable blockchain-based souvenir ticketing platform
                     - Created a peer-to-peer marketplace for digital assets
                     - Authored a blockchain ticketing standard (MSc thesis at SECUTIX)
                     - Delivered solutions used by over 200,000 spectators

                     🗣️ Languages:
                     - French: Native
                     - English: Fluent
                     - Spanish: Intermediate
                     - German: Elementary

                     🌍 Location:
                     - Geneva, Switzerland

                     💡 Interests:
                     - GenAI, Machine Learning, Blockchain, Finance, New Technologies
                     - Traveling, Squash, Fitness

                     Respond strictly based on this profile. If someone asks about skills, projects, background, or AI — answer from the context above.
                     `,
          },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 500,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.TOGETHER_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    let reply = response.data.choices[0].message.content;
    reply = reply.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
    return new Response(JSON.stringify({ message: reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err.response?.data || err.message);
    return new Response(JSON.stringify({ message: 'Something went wrong.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
