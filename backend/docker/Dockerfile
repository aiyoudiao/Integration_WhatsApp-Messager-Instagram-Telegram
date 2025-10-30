# -----------------------------------------------------
# 🐳 Dockerfile for NestJS + pnpm (multi-stage build)
# -----------------------------------------------------

# ====== Stage 1: Build Stage ======
FROM node:18-alpine AS builder

# 设置工作目录
WORKDIR /app

COPY . .

RUN npm config set registry https://registry.npmmirror.com && npm install -g pnpm && pnpm install --frozen-lockfile

CMD ["npm", "run", "start:debug"]
