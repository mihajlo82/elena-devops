# 🚀 DevOps CI/CD Case Study – Node.js Application

## 📖 Overview

This project demonstrates a complete CI/CD pipeline for a Node.js application deployed on AWS EC2, using GitHub Actions, PM2, and Nginx.
It follows a branch-based deployment strategy with separate development and production environments, each exposed via its own domain.

The goal of this project is to showcase real-world DevOps practices, not just a tutorial setup.

**Goal:**  
Showcase practical DevOps workflows and production-style automation — not just a basic tutorial setup.

---

## 🏗 Architecture Overview


Developer
   |
   |  git push (dev / main)
   v
GitHub Repository
   |
   |  GitHub Actions (CI/CD)
   |  - install dependencies
   |  - run tests
   |  - deploy via SSH
   v
AWS EC2 Instance
   |
   |-- /var/www/nodeapp-dev   (dev branch)
   |-- /var/www/nodeapp-prod  (main branch)
   |
   |-- PM2 process manager
   |-- Nginx reverse proxy


---

## 🌱 Branch & Environment Strategy

| Git Branch | Environment  | Domain        | Port | PM2 Process   |
|-----------|-------------|---------------|------|---------------|
| dev       | Development | dev.abcde.com | 3001 | nodeapp-dev   |
| main      | Production  | abcde.com     | 3000 | nodeapp-prod  |

Each branch is automatically deployed to its corresponding environment.

---

## 🔄 CI/CD Pipeline Overview

This project uses GitHub Actions to automatically test and deploy code to an EC2 instance using PM2.

---

### 🚀 Trigger

The workflow runs automatically on every push to:

- dev
- main

---

### 🧪 Continuous Integration (CI)

- Checkout the repository
- Install dependencies using `npm ci`
- Run automated tests with `npm test`
- Fail fast — deployment is skipped if tests fail

---

### 📦 Continuous Deployment (CD)

- Connects to the EC2 instance via SSH
- Detects the active branch (dev or main)
- Deploys to the matching environment
- Pulls the latest code from GitHub
- Resets the working tree to a clean state
- Installs production dependencies
- Restarts the correct PM2 process
- Saves PM2 process state for persistence after reboot

---

## ✅ Result

- Fully automated deployments
- Environment-aware (dev and main)
- No manual SSH, git pull, or PM2 restarts required

---

## 🛠 Technologies Used

- Node.js
- Git & GitHub
- GitHub Actions
- AWS EC2
- Nginx
- PM2
- Linux (Ubuntu)

---

## 🔑 Key DevOps Practices Demonstrated

- Branch-based deployments
- Environment isolation (development vs production)
- Automated testing before deployment
- Zero-downtime restarts with PM2
- Infrastructure accessed only via automation
- Production-safe deployment workflow

