# AidPulse - Context Aware Analytic Engine

## Project Overview

AidPulse is a personal AI driven chat application designed to assist in post emergency situations by providing an AI-powered chat interface for different user roles. The system is an analytics engine that aids responders and volunteers with actionable insights for speedy service and improved efficiency.

### Key Features and Capabilities

- **Role-Based Interfaces**:
  - **Victims**:    Context aware chat to communicate their needs and problems to repoders and volunteers.
  - **Responders**: Advanced Analytics to quickly understand the problems in realtime.
  - **Volunteers**: Actionable insights to guide their assistance where it's needed most.

- **AI-Powered Response System**
  - The chat is aware of user, situation and analytic conectext when gathering information form vicitms. 
  - Analytic engine is aware of the analytic context of the responder or volunteers
  - LLMs trained to provide assistance tailored to user's needs

- **Data Collection in realtime**
  - Structured data collection for personal informatio
  - Location and disaster information gathering in the real-time
  - Household and utility assistance tracking

### Target Deployment Scenarios

- **Emergency Response Centers**: Deployment in official emergency response facilities
- **Mobile Emergency Units**: Portable deployment for field operations
- **Public Access Points**: Community centers during evacuation scenarios

### Scalability and Maintenance Considerations

- **Horizontal Scaling**: MongoDB database designed for horizontal scaling to handle increased load during emergencies
- **Offline Capability**: Local AI models through Ollama or WebLLM integration to operate in limited connectivity environments
- **Maintenance Schedule**: Regular updates for AI models and response templates
- **Data Retention Policy**: Automated data management for appropriate retention periods s per client req

```
docs/
├── README.md
└── documentation/
    ├── project-overview.md
    ├── installation/
    │   ├── deployment-instructions.md
    │   ├── configuration-guides.md
    │   ├── testing-validation.md
    │   └── resource-requirements.md
    ├── system-architecture/
    │   ├── overview.md
    │   └── diagrams/
    │       ├── system-architecture.png
    │       └── llm-architecture.png
    ├── api/
    │   ├── backend-api.md
    │   └── ollama-api.md
    ├── ai-model/
    │   ├── specifications.md
    │   └── prompt-templates.md
    ├── performance/
    │   ├── benchmarks.md
    │   └── optimization.md
    ├── security/
    │   ├── data-protection.md
    │   └── authentication.md
    └── deployment/
        ├── requirements.md
        └── scaling.md
```
## Quick Navigation

- [Project Overview](./documentation/project-overview.md)
- [Installation Guide](./documentation/installation/deployment-instructions.md)
- [API Documentation](./documentation/api/backend-api.md)
- [Security Guidelines](./documentation/security/data-protection.md)
- [Performance Metrics](./documentation/performance/benchmarks.md)

# Deployment Instructions

This document outlines the steps to deploy the FireAI system in various environments.

## Quick Deployment

The easiest way to run the application is using the provided startup scripts:

### macOS / Linux
```bash
# Make the script executable (first time only)
chmod +x start.sh

# Run the application
./start.sh
```

# Testing and Validation Procedures

This document outlines the procedures for testing and validating the FireAI system.

## Backend Testing

### Unit Testing
Run the following command in the backend directory:

## System Validation

### Validation Checklist
1. **Backend Services**:
   - Express server running on port 3000
   - MongoDB connection established
   - Ollama API accessible

2. **Frontend Application**:
   - React application running on port 3001
   - Role selection interface functional
   - Chat interface responsive

3. **AI Integration**:
   - LLM model loading correctly
   - Query responses generating properly
   - Response time within acceptable limits

### Validation Commands
Run the validation script:

# Resource Requirements and Optimization Guidelines

This document outlines the necessary resources for deploying and running the FireAI system, along with optimization guidelines.

## Hardware Requirements

### Minimum Requirements
- **CPU**: Quad cores
- **RAM**: 8GB
- **Storage**: 800MB for application
- **Network**: 10MBps connection

### Recommended Requirements
- **CPU**: 4+ cores
- **RAM**: 8GB+
- **Storage**: 5GB for application
- **GPU**: 2GB

## Software Requirements

- **Node.js**: v14 or higher
- **MongoDB**: Latest stable version
- **Python**: 3.8+ (Ollama or WebLLM)
- **Operating System**: Linux, macOS, or Windows

## Optimization Guidelines

### MongoDB Optimization
- Create appropriate indexes for frequently queried fields

### Node.js Optimization
- Implement proper caching strategies

### Frontend Optimization
- Enable code splitting in production builds
- Implement lazy loading for components
- Optimize image and asset delivery

## LLM Selection and Optimization
-  Fine-tuning the model using various state-of-the-art techniques
-  Training models from scratch 
-  Various optimization techniques for edge devices like quantization

# System Architecture

This document provides an overview of the FireAI system architecture.

## High-Level Architecture

![System Architecture Diagram](documentation/pictures/system_architecture.png "FireAI System Architecture")

## Large Language Model Architecture
![LLM Architecture Diagram](documentation/pictures/llm_architecture.png "LLM Architecture")

# API Documentation

This document outlines the API endpoints available in the FireAI system.

## Backend API Endpoints

### Victim Management
- `GET /victims` - Retrieve all victims
- `GET /victims/:id` - Retrieve a specific victim by ID
- `POST /victims` - Create a new victim
- `PUT /victims/:id` - Update an existing victim by ID
- `DELETE /victims/:id` - Delete a victim by ID

## Ollama Flask API Endpoints

### AI Chat
- `POST /chat` - Send a message to the AI and get a response
  - Request body:
    ```json
    {
      "message": "User message here",
      "field_definition": {
        "field_id": "unique_field_id",
        "DisplayName": "Human-readable field name",
        "PreferredFormat": "Expected format description",
        "Datatype": "string/number/etc",
        "RationaleForCollecting": "Why this data is needed"
      },
      "action": "GENERATE or VALIDATE"
    }
    ```
  - Response:
    ```json
    {
      "response": "AI generated question or validation result",
      "model": "llama3.1",
      "is_valid": true or false,
      "processing_time": "Time taken to generate response"
    }
    ```

# AI Model Specification

This document outlines the AI models used in the FireAI system and their specifications.

## Model Overview

FireAI uses Ollama to run local LLM models, providing AI assistance without requiring external API calls. This ensures:
- Privacy of sensitive emergency information
- Operation in limited connectivity environments
- Customization for emergency response scenarios

## Supported Models

The system is compatible with various models available through Ollama, including:
- Llama 3.x, 2.x
- Mistral
- Vicuna
- GPT4All
- Qwen-distilled-model
- Phi-2
- Other state-of-the-art models

## Model Selection Guidelines

For emergency response scenarios, we recommend:

For emergency response scenarios, we recommend:

| Deployment Type | Recommended Model | Min. System Req. |
|----------------|-------------------|------------------|
| Ultra Low Resource | TinyLlama 1.1B | 2GB RAM          |
| Low Resource   | Llama 3 1B        | 4GB RAM          |
| Standard       | Phi-2 2.7B        | 6GB RAM          |
| Balanced       | Gemma 2B          | 6GB RAM          |
| Capable        | Mistral 7B        | 8GB RAM          |
| High Performance | Llama 3 8B      | 12GB RAM         |
## Prompt Templates

The system uses specialized prompt templates for emergency scenarios, including:

| Field ID | Prompt Template | Example Output |
|----------|----------------|----------------|
| `contact_information.phone_number` | "Create a question to ask for the victim's phone number." | "What is the victim's phone number?" |
| `disaster_information.disaster_type` | "Create a question to categorize the type of emergency/disaster." | "What type of disaster are you reporting?" |
| `disaster_information.fire_active` | "Create a yes/no question about active fire." | "Is the fire still active? (Yes/No)" |

## Model Integration

The models are integrated through the Ollama Flask API, which provides:
- REST API interface for the backend
- Model loading and management
- Response generation based on user queries
- Context management for conversations

# Performance Benchmarks

This document provides performance benchmarks for the FireAI system components.
## Performance Benchmarks

| Operation | Model Size | Average Response Time | Max Response Time | RAM Usage |
|-----------|------------|----------------------|-------------------|-----------|
| Question Generation | TinyLlama 1.1B | 250ms | 500ms | 2.2GB |
| Question Generation | Llama 3 1B | 350ms | 700ms | 3.8GB |
| Question Generation | Phi-2 2.7B | 650ms | 1.2s | 5.5GB |
| Response Validation | TinyLlama 1.1B | 300ms | 600ms | 2.2GB |
| Response Validation | Llama 3 1B | 420ms | 850ms | 3.8GB |
| Response Validation | Phi-2 2.7B | 780ms | 1.4s | 5.5GB |

## Throughput Benchmarks

| Model Size | Questions Per Second | Validations Per Second | Concurrent Users |
|------------|----------------------|------------------------|------------------|
| TinyLlama 1.1B | 3.5 | 3.0 | 3 |
| Llama 3 1B | 2.8 | 2.3 | 2 |
| Phi-2 2.7B | 1.5 | 1.2 | 1 |

## Field Processing Performance

| Field Type | Average Processing Time | Validation Accuracy |
|------------|-------------------------|---------------------|
| Personal Info (Name) | 280ms | 98.5% |
| Contact Info (Phone) | 320ms | 97.2% |
| Location Data | 450ms | 96.8% |
| Emergency Type | 310ms | 99.1% |
| Free-form Description | 780ms | 94.3% |

## Optimization Insights

- Question generation is typically 15-25% faster than response validation
- Each concurrent user adds approximately 1-1.5GB of RAM usage
- First-time field processing is 30-40% slower than subsequent processing due to caching
- Processing time increases by approximately 20% for each re-ask of the same question
- Multi-threaded processing provides up to 2.5x improvement for multiple concurrent sessions

## Response Time Benchmarks

| Component | Operation | Average Response Time | Max Response Time |
|-----------|-----------|----------------------|-------------------|
| Backend API | User Creation | 150ms | 300ms |
| Backend API | Emergency Retrieval | 200ms | 400ms |
| Ollama AI | Text Generation (short) | 1.2s | 3s |
| Ollama AI | Text Generation (long) | 3.5s | 7s |
| Frontend | Initial Load | 1.5s | 3s |

## Throughput Benchmarks

| Component | Requests Per Second | Concurrent Users |
|-----------|---------------------|------------------|
| Backend API | 200 | 50 |
| Ollama AI | 10 | 5 |
| Frontend | 100 | 30 |

## Resource Utilization

### Backend
- CPU: 20-30% under normal load
- Memory: 200-300MB base, 500MB under load

### Database
- Disk Space: 5MB per 1000 emergency records
- Memory: 200MB base, scales with connections

### Ollama API
- CPU: 40-50% during inference
- Memory: 4-8GB depending on model size

### Frontend
- Client Memory: 100-150MB

## Optimization Recommendations

Based on benchmarks, the following optimizations are recommended:

1. Implement response caching for common AI queries
2. Add database indexes for emergency lookup operations
3. Enable compression for API responses
4. Implement connection pooling for database operations

# Security and Privacy Measures

This document outlines the security and privacy measures implemented in the FireAI system.

## Data Protection

### Personal Information
- All personal information is encrypted at rest using AES-256
- Transmission of PII occurs only over HTTPS
- Access to personal information is restricted and logged
- Data minimization principles applied to emergency reporting

### Database Security
- MongoDB authentication enabled
- Network access restricted to application servers
- Regular security patching and updates
- Regular backups with encrypted storage

### Role-Based Access Control
- Two distinct user roles with appropriate permissions:
  - Victim: Limited to own emergency data
  - Responder/Volunteer: Emergency data within assigned region


## AI Model Security

### Local Model Benefits
- AI models run locally, preventing data exfiltration
- No external API dependencies for core functionality