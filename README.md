# MediLink Hub - Intelligent Healthcare Support Intake Portal

A responsive, concept-level smart intake application designed to streamline resource distribution and prioritization for medical relief NGOs during high-traffic emergency scenarios.

## 🚀 Live Links
* **Production Deployment:** [https://healthcare-hub-five.vercel.app](https://healthcare-hub-five.vercel.app)
* **Source Repository:** [https://github.com/shashankgadhvi/healthcare-hub](https://github.com/shashankgadhvi/healthcare-hub)

## 📋 NGO Use-Case & Problem Statement
During regional crises, disaster responses, or public health emergencies, small-scale non-governmental organizations (NGOs) are flooded with a chaotic influx of messages. Urgent medical requests, general inquiries, and critical volunteer offers mix together across unorganized channels (SMS, unstructured emails, WhatsApp). 

Manual filtration creates operational bottlenecks, delaying lifesaving dispatches. **MediLink Hub** solves this by acting as an intelligent frontline gateway—structuring user registries and automatically prioritizing entries the moment they are written.

## 🤖 Core Automation / AI Triage Concept
To eliminate manual categorization latency, the application implements a client-side **Deterministic Logic & Pattern Matching Triage Engine (`AiTriage`)** that monitors input changes dynamically:

* **Real-Time Classification:** As a user inputs their details, the engine continuously processes linguistic markers and structural intent tokens.
* **Smart Priority Routing:** * **Urgent Care Route:** Instantly catches critical trauma flags (e.g., *pain, emergency, bleeding, chest, breathing, accident*) and triggers a high-visibility system alert warning the dispatcher to isolate the case immediately.
  * **Volunteer Matching Route:** Isolates operational resource indicators (e.g., *help, join, donate, deliver, hours*) and prepares the record to bypass standard medical review, queueing it straight to the onboarding logistics handbook dispatch.
* **Operational Value:** This layout proves that incoming payloads can be pre-sorted at the edge before hitting any backend infrastructure, reducing the human triage overhead down to zero.

## 🛠️ Tech Stack Architecture
* **Frontend Library:** React 19 (TypeScript)
* **Build Tool & Bundler:** Vite
* **Styling Engine:** Tailwind CSS
* **Hosting Platform:** Vercel Production Network

## 📦 Local Installation & Setup

If you want to run this project locally to inspect the components, follow these steps:

1. Clone the repository:
   ```bash
   git clone [https://github.com/shashankgadhvi/healthcare-hub.git](https://github.com/shashankgadhvi/healthcare-hub.git)